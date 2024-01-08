// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2 // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2"

import (
	"context"
	"fmt"
	"sort"
	"sync"

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
	mu            sync.Mutex
	isReady       bool
	eventQueue    []eventSourcePair
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
	hc.mu.Lock()
	hc.isReady = false
	hc.mu.Unlock()

	hc.aggregator.Close()

	//<-hc.doneCh

	var err error
	for _, comp := range hc.subcomponents {
		err = multierr.Append(err, comp.Shutdown(ctx))
	}

	return err
}

// TODO: thread safety
func (hc *healthCheckExtension) ComponentStatusChanged(source *component.InstanceID, event *component.StatusEvent) {
	fmt.Printf("component status changed: %v %s\n", source, event.Status())

	queued := func() bool {
		hc.mu.Lock()
		defer hc.mu.Unlock()
		if !hc.isReady {
			fmt.Printf("queueing event: %v\n", event)
			hc.eventQueue = append(hc.eventQueue, eventSourcePair{source: source, event: event})
			return true
		}
		return false
	}()

	if !queued {
		hc.aggregator.RecordStatus(source, event)
	}
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

func newExtension(config Config, set extension.CreateSettings) (*healthCheckExtension, error) {
	var subcomps []component.Component

	if config.EventsSettings.Enabled {
		exp, err := events.NewExporter(&config.EventsSettings.ExporterSettings, set)
		if err != nil {
			return nil, err
		}
		subcomps = append(subcomps, exp)
	}

	aggregator := status.NewAggregator()

	if config.GRPCSettings.Enabled {
		srvGRPC := grpc.NewServer(
			config.GRPCSettings,
			set.TelemetrySettings,
			config.FailureDuration,
			aggregator,
		)
		subcomps = append(subcomps, srvGRPC)
	}

	if config.HTTPSettings.Enabled() {
		srvHTTP := http.NewServer(config.HTTPSettings, set.TelemetrySettings, config.FailureDuration, aggregator)
		subcomps = append(subcomps, srvHTTP)
	}

	hc := &healthCheckExtension{
		config:        config,
		subcomponents: subcomps,
		telemetry:     set.TelemetrySettings,
		aggregator:    aggregator,
		doneCh:        make(chan struct{}),
	}

	return hc, nil
}

func (hc *healthCheckExtension) Ready() error {
	hc.mu.Lock()
	hc.isReady = true
	queue := hc.eventQueue
	hc.eventQueue = nil
	hc.mu.Unlock()

	sort.SliceStable(queue, func(i int, j int) bool {
		return queue[i].event.Status() < queue[j].event.Status()
	})

	for _, esp := range queue {
		fmt.Printf("draining queue: %v %s\n", esp.source, esp.event.Status().String())
		hc.aggregator.RecordStatus(esp.source, esp.event)
	}

	return nil
}

func (hc *healthCheckExtension) NotReady() error {
	return nil
}
