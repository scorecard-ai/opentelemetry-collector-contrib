// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"sync"
	"time"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/config/confighttp"
	"go.opentelemetry.io/collector/confmap"
)

type Server struct {
	telemetry       component.TelemetrySettings
	settings        confighttp.HTTPServerSettings
	failureDuration time.Duration

	mux        *http.ServeMux
	serverHTTP *http.Server

	mu      sync.RWMutex
	colconf []byte

	aggregator *status.Aggregator
	done       chan struct{}
}

func NewServer(
	settings Settings,
	telemetry component.TelemetrySettings,
	failureDuration time.Duration,
	aggregator *status.Aggregator,
) *Server {
	srv := &Server{
		telemetry:       telemetry,
		settings:        settings.HTTPServerSettings,
		aggregator:      aggregator,
		failureDuration: failureDuration,
		done:            make(chan struct{}),
	}

	srv.mux = http.NewServeMux()
	if settings.Status.Enabled {
		srv.mux.Handle(settings.Status.Path, srv.statusHandler())
	}
	if settings.Config.Enabled {
		srv.mux.Handle(settings.Config.Path, srv.configHandler())
	}

	return srv
}

func (s *Server) Start(ctx context.Context, host component.Host) error {
	var err error
	s.serverHTTP, err = s.settings.ToServer(host, s.telemetry, s.mux)
	if err != nil {
		return err
	}

	ln, err := s.settings.ToListener()
	if err != nil {
		return fmt.Errorf("failed to bind to address %s: %w", s.settings.Endpoint, err)
	}

	go func() {
		defer close(s.done)
		if err = s.serverHTTP.Serve(ln); !errors.Is(err, http.ErrServerClosed) && err != nil {
			s.telemetry.ReportComponentStatus(component.NewPermanentErrorEvent(err))
		}
	}()

	return nil
}

func (s *Server) Shutdown(ctx context.Context) error {
	s.serverHTTP.Close()
	<-s.done
	return nil
}

func (s *Server) NotifyConfig(_ context.Context, conf *confmap.Conf) error {
	s.mu.Lock()
	defer s.mu.Unlock()

	var err error
	s.colconf, err = json.Marshal(conf.ToStringMap())
	return err
}
