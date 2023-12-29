// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2 // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2"

import (
	"context"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/events"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/grpc"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/confmap"
	"go.opentelemetry.io/collector/extension"
	"go.uber.org/multierr"
	"go.uber.org/zap"
)

type healthCheckExtension struct {
	config    Config
	telemetry component.TelemetrySettings
	sinks     []eventSink
	eventCh   chan eventSourcePair
	doneCh    chan struct{}
}

type eventSourcePair struct {
	source *component.InstanceID
	event  *component.StatusEvent
}

type eventSink interface {
	component.Component
	OnStatusChange(*component.InstanceID, *component.StatusEvent) error
	OnConfigChange(*confmap.Conf) error
}

func (hc *healthCheckExtension) Start(ctx context.Context, host component.Host) error {
	hc.telemetry.Logger.Info("Starting healthcheck extension V2", zap.Any("config", hc.config))

	for _, sink := range hc.sinks {
		if err := sink.Start(ctx, host); err != nil {
			return err
		}
	}

	go func() {
		defer close(hc.doneCh)
		for {
			esp, ok := <-hc.eventCh
			if !ok {
				break
			}

			for _, sink := range hc.sinks {
				_ = sink.OnStatusChange(esp.source, esp.event)
			}
		}
	}()

	return nil
}

func (hc *healthCheckExtension) Shutdown(ctx context.Context) error {
	// preemptively send the stopped event, so it can be exported before shutdown
	_ = hc.telemetry.ReportComponentStatus(component.NewStatusEvent(component.StatusStopped))

	//close and drain chan
	close(hc.eventCh)
	<-hc.doneCh

	var err error
	for _, sink := range hc.sinks {
		err = multierr.Append(err, sink.Shutdown(ctx))
	}

	return err
}

func (hc *healthCheckExtension) ComponentStatusChanged(source *component.InstanceID, event *component.StatusEvent) {
	defer func() {
		// There can be a race during shutdown where events arrive after the
		// extension has shutdown and the channel has been closed.
		if r := recover(); r != nil {
			hc.telemetry.Logger.Info("healthcheck: discarding event received after shutdown")
		}
	}()
	hc.eventCh <- eventSourcePair{source: source, event: event}
}

func (hc *healthCheckExtension) NotifyConfig(_ context.Context, conf *confmap.Conf) error {
	var err error
	for _, sink := range hc.sinks {
		err = multierr.Append(err, sink.OnConfigChange(conf))
	}
	return err
}

func newExtension(config Config, set extension.CreateSettings) (*healthCheckExtension, error) {
	var sinks []eventSink

	if config.EventsSettings.Enabled {
		e, err := events.New(&config.EventsSettings.ExporterSettings, set)
		if err != nil {
			return nil, err
		}
		sinks = append(sinks, e)
	}

	if config.GRPCSettings.Enabled {
		g := grpc.NewServer(config.GRPCSettings, set.TelemetrySettings)
		sinks = append(sinks, g)
	}

	if config.HTTPSettings.Enabled() {
		h := http.New(config.HTTPSettings, set.TelemetrySettings)
		sinks = append(sinks, h)
	}

	hc := &healthCheckExtension{
		config:    config,
		sinks:     sinks,
		telemetry: set.TelemetrySettings,
		eventCh:   make(chan eventSourcePair, 100),
		doneCh:    make(chan struct{}),
	}

	return hc, nil
}
