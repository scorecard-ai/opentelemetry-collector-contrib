// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2 // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2"

import (
	"context"
	"fmt"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/events"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/grpc"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/confmap"
	"go.opentelemetry.io/collector/extension"
	"go.uber.org/multierr"
	"go.uber.org/zap"
)

type healthCheckExtension struct {
	config        Config
	telemetry     component.TelemetrySettings
	aggregator    *status.Aggregator
	subcomponents []component.Component
	eventCh       chan *eventSourcePair
	readyCh       chan struct{}
	doneCh        chan struct{}
}

type eventSourcePair struct {
	source *component.InstanceID
	event  *component.StatusEvent
}

func (hc *healthCheckExtension) Start(ctx context.Context, host component.Host) error {
	hc.telemetry.Logger.Info("Starting healthcheck extension V2", zap.Any("config", hc.config))

	for _, comp := range hc.subcomponents {
		if err := comp.Start(ctx, host); err != nil {
			return err
		}
	}

	return nil
}

func (hc *healthCheckExtension) Shutdown(ctx context.Context) error {
	// preemptively send the stopped event, so it can be exported before shutdown
	_ = hc.telemetry.ReportComponentStatus(component.NewStatusEvent(component.StatusStopped))

	close(hc.doneCh)
	hc.aggregator.Close()

	var err error
	for _, comp := range hc.subcomponents {
		err = multierr.Append(err, comp.Shutdown(ctx))
	}

	return err
}

func (hc *healthCheckExtension) ComponentStatusChanged(source *component.InstanceID, event *component.StatusEvent) {
	fmt.Printf("component status changed: %v %s\n", source, event.Status())
	hc.eventCh <- &eventSourcePair{source: source, event: event}
}

func (hc *healthCheckExtension) NotifyConfig(ctx context.Context, conf *confmap.Conf) error {
	var err error
	for _, comp := range hc.subcomponents {
		if cw, ok := comp.(extension.ConfigWatcher); ok {
			err = multierr.Append(err, cw.NotifyConfig(ctx, conf))
		}
	}
	return err
}

func (hc *healthCheckExtension) Ready() error {
	close(hc.readyCh)
	return nil
}

func (hc *healthCheckExtension) NotReady() error {
	return nil
}

func newExtension(config Config, set extension.CreateSettings) (*healthCheckExtension, error) {
	var comps []component.Component

	if config.EventsSettings.Enabled {
		exp, err := events.NewExporter(&config.EventsSettings.ExporterSettings, set)
		if err != nil {
			return nil, err
		}
		comps = append(comps, exp)
	}

	aggregator := status.NewAggregator()

	if config.GRPCSettings.Enabled {
		srvGRPC := grpc.NewServer(
			config.GRPCSettings,
			set.TelemetrySettings,
			config.FailureDuration,
			aggregator,
		)
		comps = append(comps, srvGRPC)
	}

	if config.HTTPSettings.Enabled() {
		srvHTTP := http.NewServer(config.HTTPSettings, set.TelemetrySettings, config.FailureDuration, aggregator)
		comps = append(comps, srvHTTP)
	}

	hc := &healthCheckExtension{
		config:        config,
		subcomponents: comps,
		telemetry:     set.TelemetrySettings,
		aggregator:    aggregator,
		eventCh:       make(chan *eventSourcePair),
		readyCh:       make(chan struct{}),
		doneCh:        make(chan struct{}),
	}

	// Start processing events in the background so that our status watcher doesn't
	// block others before the extension starts.
	go hc.eventLoop()

	return hc, nil
}

func (hc *healthCheckExtension) eventLoop() {
	var eventQueue []*eventSourcePair
	for loop := true; loop; {
		select {
		case esp := <-hc.eventCh:
			if esp.event.Status() != component.StatusStarting {
				eventQueue = append(eventQueue, esp)
				continue
			}
			hc.aggregator.RecordStatus(esp.source, esp.event)
		case <-hc.readyCh:
			for _, esp := range eventQueue {
				hc.aggregator.RecordStatus(esp.source, esp.event)
			}
			eventQueue = nil
			loop = false
		}
	}

	for loop := true; loop; {
		select {
		case esp := <-hc.eventCh:
			hc.aggregator.RecordStatus(esp.source, esp.event)
		case <-hc.doneCh:
			loop = false
		}
	}

	for {
		<-hc.eventCh
		hc.telemetry.Logger.Info("healthcheck: discarding event received after shutdown")
	}
}
