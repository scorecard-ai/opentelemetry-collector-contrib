// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"sync"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/config/confighttp"
	"go.opentelemetry.io/collector/confmap"
)

var responseCodes = map[component.Status]int{
	component.StatusNone:             http.StatusServiceUnavailable,
	component.StatusStarting:         http.StatusServiceUnavailable,
	component.StatusOK:               http.StatusOK,
	component.StatusRecoverableError: http.StatusServiceUnavailable,
	component.StatusPermanentError:   http.StatusBadRequest,
	component.StatusFatalError:       http.StatusInternalServerError,
	component.StatusStopping:         http.StatusServiceUnavailable,
	component.StatusStopped:          http.StatusServiceUnavailable,
}

type HealthHTTP struct {
	telemetry component.TelemetrySettings
	settings  confighttp.HTTPServerSettings

	mux *http.ServeMux
	srv *http.Server

	mu         sync.RWMutex
	colconf    []byte
	aggregator *status.Aggregator
	done       chan struct{}
}

func (hh *HealthHTTP) Start(ctx context.Context, host component.Host) error {
	var err error
	hh.srv, err = hh.settings.ToServer(host, hh.telemetry, hh.mux)
	if err != nil {
		return err
	}

	ln, err := hh.settings.ToListener()
	if err != nil {
		return fmt.Errorf("failed to bind to address %s: %w", hh.settings.Endpoint, err)
	}

	go func() {
		defer close(hh.done)
		if err = hh.srv.Serve(ln); !errors.Is(err, http.ErrServerClosed) && err != nil {
			hh.telemetry.ReportComponentStatus(component.NewPermanentErrorEvent(err))
		}
	}()

	return nil
}

func (hh *HealthHTTP) Shutdown(ctx context.Context) error {
	hh.srv.Close()
	<-hh.done
	return nil
}

func (hh *HealthHTTP) OnStatusChange(source *component.InstanceID, event *component.StatusEvent) error {
	hh.aggregator.RecordStatus(source, event)
	return nil
}

func (hh *HealthHTTP) OnConfigChange(conf *confmap.Conf) error {
	defer hh.mu.Unlock()
	hh.mu.Lock()

	var err error
	hh.colconf, err = json.Marshal(conf.ToStringMap())
	return err
}

func (hh *HealthHTTP) statusHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		current := hh.aggregator.Current()

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(responseCodes[current.Status()])

		body, _ := json.Marshal(current)
		_, _ = w.Write(body)
	})
}

func (hh *HealthHTTP) configHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		conf := func() []byte {
			defer hh.mu.RUnlock()
			hh.mu.RLock()
			return hh.colconf
		}()

		status := http.StatusOK
		if len(conf) == 0 {
			status = http.StatusServiceUnavailable
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(status)
		_, _ = w.Write(conf)
	})
}

func New(settings Settings, telemetry component.TelemetrySettings) *HealthHTTP {
	healthHTTP := &HealthHTTP{
		telemetry:  telemetry,
		settings:   settings.HTTPServerSettings,
		aggregator: status.NewAggregator(),
		done:       make(chan struct{}),
	}

	healthHTTP.mux = http.NewServeMux()
	if settings.Status.Enabled {
		healthHTTP.mux.Handle(settings.Status.Path, healthHTTP.statusHandler())
	}
	if settings.Config.Enabled {
		healthHTTP.mux.Handle(settings.Config.Path, healthHTTP.configHandler())
	}

	return healthHTTP
}
