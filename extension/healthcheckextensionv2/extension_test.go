// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/confmap/confmaptest"
	"go.opentelemetry.io/collector/extension/extensiontest"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/testhelpers"
	"github.com/open-telemetry/opentelemetry-collector-contrib/internal/common/testutil"
)

func TestComponentStatus(t *testing.T) {
	cfg := createDefaultConfig().(*Config)
	cfg.HTTPSettings.Endpoint = testutil.GetAvailableLocalAddress(t)

	ext := newExtension(context.Background(), *cfg, extensiontest.NewNopCreateSettings())

	// Status before Start will be StatusNone
	st, ok := ext.aggregator.AggregateStatus(status.ScopeAll)
	require.True(t, ok)
	assert.Equal(t, st.StatusEvent.Status(), component.StatusNone)

	require.NoError(t, ext.Start(context.Background(), componenttest.NewNopHost()))

	traces := testhelpers.NewPipelineMetadata("traces")

	// StatusStarting will be sent immediately.
	for _, id := range traces.InstanceIDs() {
		ext.ComponentStatusChanged(id, component.NewStatusEvent(component.StatusStarting))
	}

	// StatusOK will be queued until the PipelineWatcher Ready method is called.
	for _, id := range traces.InstanceIDs() {
		ext.ComponentStatusChanged(id, component.NewStatusEvent(component.StatusOK))
	}

	// Note the use of assert.Eventually here and throughout this test is because
	// status events are processed asynchronously in the background.
	assert.Eventually(t, func() bool {
		st, ok = ext.aggregator.AggregateStatus(status.ScopeAll)
		require.True(t, ok)
		return st.StatusEvent.Status() == component.StatusStarting
	}, time.Second, 10*time.Millisecond)

	require.NoError(t, ext.Ready())

	assert.Eventually(t, func() bool {
		st, ok = ext.aggregator.AggregateStatus(status.ScopeAll)
		require.True(t, ok)
		return st.StatusEvent.Status() == component.StatusOK
	}, time.Second, 10*time.Millisecond)

	// StatusStopping will be sent immediately.
	for _, id := range traces.InstanceIDs() {
		ext.ComponentStatusChanged(id, component.NewStatusEvent(component.StatusStopping))
	}

	assert.Eventually(t, func() bool {
		st, ok = ext.aggregator.AggregateStatus(status.ScopeAll)
		require.True(t, ok)
		return st.StatusEvent.Status() == component.StatusStopping
	}, time.Second, 10*time.Millisecond)

	require.NoError(t, ext.NotReady())
	require.NoError(t, ext.Shutdown(context.Background()))

	// Events sent after shutdown will be discarded
	for _, id := range traces.InstanceIDs() {
		ext.ComponentStatusChanged(id, component.NewStatusEvent(component.StatusStopped))
	}

	st, ok = ext.aggregator.AggregateStatus(status.ScopeAll)
	require.True(t, ok)
	assert.Equal(t, component.StatusStopping, st.StatusEvent.Status())
}

func TestNotifyConfig(t *testing.T) {
	confMap, err := confmaptest.LoadConf(
		filepath.Join("internal", "http", "testdata", "config.yaml"),
	)
	require.NoError(t, err)
	confJSON, err := os.ReadFile(
		filepath.Clean(filepath.Join("internal", "http", "testdata", "config.json")),
	)
	require.NoError(t, err)

	endpoint := testutil.GetAvailableLocalAddress(t)

	cfg := createDefaultConfig().(*Config)
	cfg.HTTPSettings.Endpoint = endpoint
	cfg.HTTPSettings.Config.Enabled = true
	cfg.HTTPSettings.Config.Path = "/config"

	ext := newExtension(context.Background(), *cfg, extensiontest.NewNopCreateSettings())

	require.NoError(t, ext.Start(context.Background(), componenttest.NewNopHost()))
	t.Cleanup(func() { require.NoError(t, ext.Shutdown(context.Background())) })

	client := &http.Client{}
	url := fmt.Sprintf("http://%s/config", endpoint)

	var resp *http.Response

	resp, err = client.Get(url)
	require.NoError(t, err)
	assert.Equal(t, http.StatusServiceUnavailable, resp.StatusCode)

	require.NoError(t, ext.NotifyConfig(context.Background(), confMap))

	resp, err = client.Get(url)
	require.NoError(t, err)
	assert.Equal(t, http.StatusOK, resp.StatusCode)

	body, err := io.ReadAll(resp.Body)
	require.NoError(t, err)
	assert.Equal(t, confJSON, body)
}
