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
	*serializableEvent
	ComponentStatuses map[string]*serializableStatus `json:"components,omitempty"`
}

type serializableEvent struct {
	Healthy      bool `json:"healthy"`
	status       component.Status
	StatusString string    `json:"status"`
	Error        string    `json:"error,omitempty"`
	Timestamp    time.Time `json:"status_time"`
}

func (ev *serializableEvent) Status() component.Status {
	return ev.status
}

func toSerializableEvent(ev *component.StatusEvent) *serializableEvent {
	se := &serializableEvent{
		Healthy:      !component.StatusIsError(ev.Status()),
		status:       ev.Status(),
		StatusString: ev.Status().String(),
		Timestamp:    ev.Timestamp(),
	}
	if ev.Err() != nil {
		se.Error = ev.Err().Error()
	}
	return se
}

var extsKey = "extensions"

func toSerializableStatus(details *status.CollectorStatusDetails) *serializableStatus {

	s := &serializableStatus{
		StartTimestamp:    &details.StartTimestamp,
		serializableEvent: toSerializableEvent(details.OverallStatus),
		ComponentStatuses: make(map[string]*serializableStatus),
	}

	for compID, ev := range details.PipelineStatusMap {
		key := compID.String()
		if key != extsKey {
			key = "pipeline:" + key
		}
		cs := &serializableStatus{
			serializableEvent: toSerializableEvent(ev),
			ComponentStatuses: make(map[string]*serializableStatus),
		}
		s.ComponentStatuses[key] = cs
		for instance, ev := range details.ComponentStatusMap[compID] {
			key := fmt.Sprintf("%s:%s", kindToString(instance.Kind), instance.ID)
			cs.ComponentStatuses[key] = &serializableStatus{
				serializableEvent: toSerializableEvent(ev),
			}
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
