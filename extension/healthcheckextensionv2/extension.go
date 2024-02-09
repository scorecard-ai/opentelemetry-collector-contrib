// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package healthcheckextensionv2 // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2"

import (
	"context"

	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/confmap"
	"go.opentelemetry.io/collector/extension"
	"go.uber.org/multierr"
	"go.uber.org/zap"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/grpc"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
)

type eventSourcePair struct {
	source *component.InstanceID
	event  *component.StatusEvent
}

type healthCheckExtension struct {
	config        Config
	telemetry     component.TelemetrySettings
	aggregator    *status.Aggregator
	subcomponents []component.Component
	eventCh       chan *eventSourcePair
	readyCh       chan struct{}
	doneCh        chan struct{}
}

var _ component.Component = (*healthCheckExtension)(nil)
var _ extension.ConfigWatcher = (*healthCheckExtension)(nil)
var _ extension.PipelineWatcher = (*healthCheckExtension)(nil)

func newExtension(
	ctx context.Context,
	config Config,
	set extension.CreateSettings,
) *healthCheckExtension {
	var comps []component.Component

	errPriority := status.PriorityPermanent
	if config.ComponentHealthSettings != nil &&
		config.ComponentHealthSettings.IncludeRecoverable &&
		!config.ComponentHealthSettings.IncludePermanent {
		errPriority = status.PriorityRecoverable
	}

	aggregator := status.NewAggregator(errPriority)

	if config.GRPCSettings != nil {
		srvGRPC := grpc.NewServer(
			config.GRPCSettings,
			set.TelemetrySettings,
			config.RecoveryDuration,
			aggregator,
		)
		comps = append(comps, srvGRPC)
	}

	if config.HTTPSettings != nil {
		srvHTTP := http.NewServer(
			config.HTTPSettings,
			config.ComponentHealthSettings,
			set.TelemetrySettings,
			aggregator,
		)
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
	go hc.eventLoop(ctx)

	return hc
}

// Start implements the component.Component interface.
func (hc *healthCheckExtension) Start(ctx context.Context, host component.Host) error {
	hc.telemetry.Logger.Info("Starting health check extension V2", zap.Any("config", hc.config))

	for _, comp := range hc.subcomponents {
		if err := comp.Start(ctx, host); err != nil {
			return err
		}
	}

	return nil
}

// Shutdown implements the component.Component interface.
func (hc *healthCheckExtension) Shutdown(ctx context.Context) error {
	// Preemptively send the stopped event, so it can be exported before shutdown
	hc.telemetry.ReportStatus(component.NewStatusEvent(component.StatusStopped))

	close(hc.doneCh)
	hc.aggregator.Close()

	var err error
	for _, comp := range hc.subcomponents {
		err = multierr.Append(err, comp.Shutdown(ctx))
	}

	return err
}

// ComponentStatusChanged implements the extension.StatusWatcher interface.
func (hc *healthCheckExtension) ComponentStatusChanged(
	source *component.InstanceID,
	event *component.StatusEvent,
) {
	hc.eventCh <- &eventSourcePair{source: source, event: event}
}

// NotifyConfig implements the extension.ConfigWatcher interface.
func (hc *healthCheckExtension) NotifyConfig(ctx context.Context, conf *confmap.Conf) error {
	var err error
	for _, comp := range hc.subcomponents {
		if cw, ok := comp.(extension.ConfigWatcher); ok {
			err = multierr.Append(err, cw.NotifyConfig(ctx, conf))
		}
	}
	return err
}

// Ready implements the extension.PipelineWatcher interface.
func (hc *healthCheckExtension) Ready() error {
	close(hc.readyCh)
	var err error
	for _, comp := range hc.subcomponents {
		if pw, ok := comp.(extension.PipelineWatcher); ok {
			err = multierr.Append(err, pw.Ready())
		}
	}
	return err
}

// NotReady implements the extension.PipelineWatcher interface.
func (hc *healthCheckExtension) NotReady() error {
	var err error
	for _, comp := range hc.subcomponents {
		if pw, ok := comp.(extension.PipelineWatcher); ok {
			err = multierr.Append(err, pw.NotReady())
		}
	}
	return err
}

func (hc *healthCheckExtension) eventLoop(ctx context.Context) {
	// Record events with component.StatusStarting, but queue other events until
	// PipelineWatcher.Ready is called. This prevents aggregate statuses from
	// flapping between StatusStarting and StatusOK as components are started
	// individually by the service.
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
		case <-ctx.Done():
			return
		}
	}

	// After PipelineWatcher.Ready, record statuses as they are received.
	for loop := true; loop; {
		select {
		case esp := <-hc.eventCh:
			hc.aggregator.RecordStatus(esp.source, esp.event)
		case <-hc.doneCh:
			loop = false
		case <-ctx.Done():
			return
		}
	}

	// After shutdown read late arriving events from channel and discard
	for {
		select {
		case <-hc.eventCh:
			hc.telemetry.Logger.Info("healthcheck: discarding event received after shutdown")
		case <-ctx.Done():
			return
		}
	}
}
