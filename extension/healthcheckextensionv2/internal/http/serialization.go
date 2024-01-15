// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"fmt"
	"time"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
)

type serializableStatus struct {
	StartTimestamp *time.Time `json:"start_time,omitempty"`
	*SerializableEvent
	ComponentStatuses map[string]*serializableStatus `json:"components,omitempty"`
}

// SerializableEvent is exported for json.Unmarshal
type SerializableEvent struct {
	Healthy      bool      `json:"healthy"`
	StatusString string    `json:"status"`
	Error        string    `json:"error,omitempty"`
	Timestamp    time.Time `json:"status_time"`
}

var stringToStatusMap = map[string]component.Status{
	"StatusNone":             component.StatusNone,
	"StatusStarting":         component.StatusStarting,
	"StatusOK":               component.StatusOK,
	"StatusRecoverableError": component.StatusRecoverableError,
	"StatusPermanentError":   component.StatusPermanentError,
	"StatusFatalError":       component.StatusFatalError,
	"StatusStopping":         component.StatusStopping,
	"StatusStopped":          component.StatusStopped,
}

func (ev *SerializableEvent) Status() component.Status {
	if st, ok := stringToStatusMap[ev.StatusString]; ok {
		return st
	}
	return component.StatusNone
}

func toSerializableEvent(ev *component.StatusEvent) *SerializableEvent {
	se := &SerializableEvent{
		Healthy:      !component.StatusIsError(ev.Status()),
		StatusString: ev.Status().String(),
		Timestamp:    ev.Timestamp(),
	}
	if ev.Err() != nil {
		se.Error = ev.Err().Error()
	}
	return se
}

var extsKey = "extensions"

func toSimpleSerializableStatus(startTime *time.Time, ev *component.StatusEvent) *serializableStatus {
	return &serializableStatus{
		StartTimestamp:    startTime,
		SerializableEvent: toSerializableEvent(ev),
	}
}

func toCollectorSerializableStatus(details *status.CollectorStatusDetails) *serializableStatus {
	s := &serializableStatus{
		StartTimestamp:    &details.StartTimestamp,
		SerializableEvent: toSerializableEvent(details.OverallStatus),
		ComponentStatuses: make(map[string]*serializableStatus),
	}

	for compID, ev := range details.PipelineStatusMap {
		key := compID.String()
		if key != extsKey {
			key = "pipeline:" + key
		}
		cs := &serializableStatus{
			SerializableEvent: toSerializableEvent(ev),
			ComponentStatuses: make(map[string]*serializableStatus),
		}
		s.ComponentStatuses[key] = cs
		for instance, ev := range details.ComponentStatusMap[compID] {
			key := fmt.Sprintf("%s:%s", kindToString(instance.Kind), instance.ID)
			cs.ComponentStatuses[key] = &serializableStatus{
				SerializableEvent: toSerializableEvent(ev),
			}
		}
	}

	return s
}

func toPipelineSerializableStatus(details *status.PipelineStatusDetails) *serializableStatus {
	s := &serializableStatus{
		StartTimestamp:    &details.StartTimestamp,
		SerializableEvent: toSerializableEvent(details.OverallStatus),
		ComponentStatuses: make(map[string]*serializableStatus),
	}

	for instance, ev := range details.ComponentStatusMap {
		key := fmt.Sprintf("%s:%s", kindToString(instance.Kind), instance.ID)
		s.ComponentStatuses[key] = &serializableStatus{
			SerializableEvent: toSerializableEvent(ev),
		}
	}

	return s
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
