// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"time"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/confmap"
	"go.uber.org/zap"
)

type Server struct {
	telemetry       component.TelemetrySettings
	settings        Settings
	failureDuration time.Duration
	mux             *http.ServeMux
	serverHTTP      *http.Server
	confStore       *confStore
	aggregator      *status.Aggregator
	startTimestamp  time.Time
	done            chan struct{}
}

func NewServer(
	settings Settings,
	telemetry component.TelemetrySettings,
	failureDuration time.Duration,
	aggregator *status.Aggregator,
) *Server {
	srv := &Server{
		telemetry:       telemetry,
		settings:        settings,
		confStore:       &confStore{},
		aggregator:      aggregator,
		startTimestamp:  aggregator.StartTimestamp(),
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

func (s *Server) NotifyConfig(_ context.Context, conf *confmap.Conf) {
	confBytes, err := json.Marshal(conf.ToStringMap())
	if err != nil {
		s.telemetry.Logger.Warn("could not marshal config", zap.Error(err))
		return
	}
	s.confStore.set(confBytes)
}
