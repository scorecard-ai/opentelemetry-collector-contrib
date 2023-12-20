// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package events // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/events"

import (
	"context"
	"fmt"
	"time"

	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/confmap"
	"go.opentelemetry.io/collector/exporter"
	"go.opentelemetry.io/collector/exporter/otlpexporter"
	"go.opentelemetry.io/collector/extension"
	"go.opentelemetry.io/collector/pdata/pcommon"
	"go.opentelemetry.io/collector/pdata/plog"
)

const (
	scopeName = "otelcol/healthcheckextensionv2"
)

type HealthEvents struct {
	resource pcommon.Resource
	scope    pcommon.InstrumentationScope
	exporter exporter.Logs
}

func (he *HealthEvents) Start(ctx context.Context, host component.Host) error {
	return he.exporter.Start(ctx, host)
}

func (he *HealthEvents) Shutdown(ctx context.Context) error {
	return he.exporter.Shutdown(ctx)
}

func (he *HealthEvents) OnStatusChange(source *component.InstanceID, event *component.StatusEvent) error {
	ld := plog.NewLogs()

	rl := ld.ResourceLogs().AppendEmpty()
	he.resource.CopyTo(rl.Resource())

	sl := rl.ScopeLogs().AppendEmpty()
	he.scope.CopyTo(sl.Scope())

	lr := sl.LogRecords().AppendEmpty()
	lr.SetTimestamp(pcommon.NewTimestampFromTime(event.Timestamp()))
	lr.SetSeverityNumber(plog.SeverityNumberInfo)
	lr.SetSeverityText("INFO")

	am := lr.Attributes()
	am.PutStr("event.name", "component.status.event")

	bm := lr.Body().SetEmptyMap()
	bm.PutStr("component.id", fmt.Sprintf("%s-%s", source.ID.String(), kindToString(source.Kind)))
	bm.PutStr("component.status", event.Status().String())
	if event.Err() != nil {
		bm.PutStr("component.error", event.Err().Error())
	}

	return he.exporter.ConsumeLogs(context.Background(), ld)
}

func (he *HealthEvents) OnConfigChange(conf *confmap.Conf) error {
	ld := plog.NewLogs()

	rl := ld.ResourceLogs().AppendEmpty()
	he.resource.CopyTo(rl.Resource())

	sl := rl.ScopeLogs().AppendEmpty()
	he.scope.CopyTo(sl.Scope())

	lr := sl.LogRecords().AppendEmpty()
	lr.SetTimestamp(pcommon.NewTimestampFromTime(time.Now()))
	lr.SetSeverityNumber(plog.SeverityNumberInfo)
	lr.SetSeverityText("INFO")

	am := lr.Attributes()
	am.PutStr("event.name", "collector.config.updated")

	bm := lr.Body().SetEmptyMap()
	copyToPMap(conf.ToStringMap(), bm)

	return he.exporter.ConsumeLogs(context.Background(), ld)
}

func New(cfg *otlpexporter.Config, set extension.CreateSettings) (*HealthEvents, error) {
	exp, err := newExporter(cfg)
	if err != nil {
		return nil, err
	}

	sco := pcommon.NewInstrumentationScope()
	sco.SetName(scopeName)
	sco.SetVersion(set.BuildInfo.Version)

	return &HealthEvents{
		resource: set.TelemetrySettings.Resource,
		scope:    sco,
		exporter: exp,
	}, nil
}

func newExporter(cfg *otlpexporter.Config) (exporter.Logs, error) {
	factory := otlpexporter.NewFactory()
	// TODO: figure out what should go here
	set := exporter.CreateSettings{
		ID:                component.NewID("otlplogs"),
		TelemetrySettings: componenttest.NewNopTelemetrySettings(),
		BuildInfo: component.BuildInfo{
			Description: "healthcheck otlp exporter",
			Version:     "0.0.1",
		},
	}

	exp, err := factory.CreateLogsExporter(context.Background(), set, cfg)
	if err != nil {
		return nil, err
	}

	return exp, nil
}

func copyToPMap(src map[string]any, dst pcommon.Map) {
	for k, v := range src {
		switch v := v.(type) {
		case map[string]any:
			copyToPMap(v, dst.PutEmptyMap(k))
		case []any:
			copyToPSlice(v, dst.PutEmptySlice(k))
		case bool:
			dst.PutBool(k, v)
		case int:
			dst.PutInt(k, int64(v))
		case float64:
			dst.PutDouble(k, v)
		case string:
			dst.PutStr(k, v)
		case nil:
			// TODO: When using PutEmpty keys are missing after export. Setting them to something
			// less empty (like an empty map) works; needs further investigation.
			//dst.PutEmpty(k)
			//dst.PutEmptyMap(k)
			dst.PutStr(k, "<empty>")
		default:
			// TODO: remove this once we know the switch is exhaustive
			fmt.Printf("unexpected type %T\n", v)
		}
	}
}

func copyToPSlice(src []any, dst pcommon.Slice) {
	for _, v := range src {
		switch v := v.(type) {
		case map[string]any:
			copyToPMap(v, dst.AppendEmpty().SetEmptyMap())
		case []any:
			copyToPSlice(v, dst.AppendEmpty().SetEmptySlice())
		case bool:
			dst.AppendEmpty().SetBool(v)
		case int:
			dst.AppendEmpty().SetInt(int64(v))
		case float64:
			dst.AppendEmpty().SetDouble(v)
		case string:
			dst.AppendEmpty().SetStr(v)
		case nil:
			dst.AppendEmpty()
		default:
			fmt.Printf("unexpected type %T\n", v)
		}
	}
}

// TODO: implemnent Stringer on Kind in core
func kindToString(k component.Kind) string {
	switch k {
	case component.KindReceiver:
		return "receiver"
	case component.KindProcessor:
		return "processor"
	case component.KindExporter:
		return "exporter"
	case component.KindExtension:
		return "extension"
	case component.KindConnector:
		return "connector"
	}
	return ""
}
