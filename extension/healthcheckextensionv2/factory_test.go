// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2

import (
	"context"
	"testing"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/events"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"
	"github.com/open-telemetry/opentelemetry-collector-contrib/internal/common/testutil"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/config/confighttp"
	"go.opentelemetry.io/collector/extension/extensiontest"
)

func TestFactory_CreateDefaultConfig(t *testing.T) {
	cfg := createDefaultConfig()
	assert.Equal(t, &Config{
		HTTPSettings: http.Settings{
			HTTPServerSettings: confighttp.HTTPServerSettings{
				Endpoint: defaultEndpoint,
			},
			Status: http.StatusSettings{
				Detailed: true,
				PathSettings: http.PathSettings{
					Enabled: true,
					Path:    "/",
				},
			},
			Config: http.PathSettings{
				Enabled: false,
			},
		},
		EventsSettings: events.Settings{
			Enabled: false,
		},
	}, cfg)

	assert.NoError(t, componenttest.CheckConfigStruct(cfg))
	ext, err := createExtension(context.Background(), extensiontest.NewNopCreateSettings(), cfg)
	require.NoError(t, err)
	require.NotNil(t, ext)
}

func TestFactory_CreateExtension(t *testing.T) {
	cfg := createDefaultConfig().(*Config)
	cfg.HTTPSettings.Endpoint = testutil.GetAvailableLocalAddress(t)

	ext, err := createExtension(context.Background(), extensiontest.NewNopCreateSettings(), cfg)
	require.NoError(t, err)
	require.NotNil(t, ext)
}
