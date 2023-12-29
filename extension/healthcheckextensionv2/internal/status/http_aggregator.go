// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package status

import (
	"fmt"
	"time"

	"go.opentelemetry.io/collector/component"
)

type AggregatorHTTP struct {
	*aggregatorBase
	verbose bool
}

type SerializableStatus struct {
	StartTimestamp *time.Time `json:"start_time,omitempty"`
	*SerializableEvent
	ComponentStatuses map[string]*SerializableStatus `json:"components,omitempty"`
}

type SerializableEvent struct {
	Healthy      bool `json:"healthy"`
	status       component.Status
	StatusString string    `json:"status"`
	Error        string    `json:"error,omitempty"`
	Timestamp    time.Time `json:"status_time"`
}

func (ev *SerializableEvent) Status() component.Status {
	return ev.status
}

func toSerializableEvent(ev *component.StatusEvent) *SerializableEvent {
	se := &SerializableEvent{
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

func (a *AggregatorHTTP) Current() *SerializableStatus {
	a.mu.RLock()
	defer a.mu.RUnlock()

	s := &SerializableStatus{
		SerializableEvent: toSerializableEvent(a.aggregateStatus),
		ComponentStatuses: make(map[string]*SerializableStatus),
		StartTimestamp:    &a.startTimestamp,
	}

	if !a.verbose {
		return s
	}

	for compID, ev := range a.aggregateStatusesByID {
		key := compID.String()
		if compID != extsID {
			key = "pipeline:" + key
		}
		as := &SerializableStatus{
			SerializableEvent: toSerializableEvent(ev),
			ComponentStatuses: make(map[string]*SerializableStatus),
		}
		s.ComponentStatuses[key] = as
		for instance, ev := range a.componentStatusesByID[compID] {
			key := fmt.Sprintf("%s:%s", kindToString(instance.Kind), instance.ID)
			as.ComponentStatuses[key] = &SerializableStatus{
				SerializableEvent: toSerializableEvent(ev),
			}
		}
	}

	return s
}

func NewAggregatorHTTP() *AggregatorHTTP {
	return &AggregatorHTTP{
		aggregatorBase: newAggregatorBase(),
		verbose:        true, // TODO: set via config
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
