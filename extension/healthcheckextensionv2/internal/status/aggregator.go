// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package status

import (
	"fmt"
	"sync"
	"time"

	"go.opentelemetry.io/collector/component"
)

var extsID = component.NewID("extensions")
var extsIDMap = map[component.ID]struct{}{extsID: {}}

type Aggregator struct {
	mu                 sync.RWMutex
	startTimestamp     time.Time
	overallStatus      *component.StatusEvent
	pipelineStatusMap  map[component.ID]*component.StatusEvent
	componentStatusMap map[component.ID]map[*component.InstanceID]*component.StatusEvent
}

type CollectorStatusDetails struct {
	StartTimestamp     time.Time
	OverallStatus      *component.StatusEvent
	PipelineStatusMap  map[component.ID]*component.StatusEvent
	ComponentStatusMap map[component.ID]map[*component.InstanceID]*component.StatusEvent
}

type PipelineStatusDetails struct {
	StartTimestamp     time.Time
	OverallStatus      *component.StatusEvent
	ComponentStatusMap map[*component.InstanceID]*component.StatusEvent
}

func (a *Aggregator) CollectorStatus() *component.StatusEvent {
	a.mu.RLock()
	defer a.mu.RUnlock()

	return a.overallStatus
}

func (a *Aggregator) CollectorStatusDetailed() *CollectorStatusDetails {
	a.mu.RLock()
	defer a.mu.RUnlock()

	details := &CollectorStatusDetails{
		StartTimestamp:     a.startTimestamp,
		OverallStatus:      a.overallStatus,
		PipelineStatusMap:  make(map[component.ID]*component.StatusEvent),
		ComponentStatusMap: make(map[component.ID]map[*component.InstanceID]*component.StatusEvent),
	}

	for compID, ev := range a.pipelineStatusMap {
		details.PipelineStatusMap[compID] = ev
	}

	for compID, eventMap := range a.componentStatusMap {
		details.ComponentStatusMap[compID] = make(map[*component.InstanceID]*component.StatusEvent)
		for instID, ev := range eventMap {
			details.ComponentStatusMap[compID][instID] = ev
		}
	}

	return details
}

func (a *Aggregator) PipelineStatus(name string) (*component.StatusEvent, error) {
	// TODO: add cache
	compID := component.ID{}
	if err := compID.UnmarshalText([]byte(name)); err != nil {
		return nil, err
	}

	a.mu.RLock()
	defer a.mu.RUnlock()

	ev, ok := a.pipelineStatusMap[compID]
	if !ok {
		return nil, fmt.Errorf("pipeline not found: %s", name)
	}

	return ev, nil
}

func (a *Aggregator) PipelineStatusDetailed(name string) (*PipelineStatusDetails, error) {
	// TODO: add cache
	compID := component.ID{}
	if err := compID.UnmarshalText([]byte(name)); err != nil {
		return nil, err
	}

	a.mu.RLock()
	defer a.mu.RUnlock()

	ev, ok := a.pipelineStatusMap[compID]
	if !ok {
		return nil, fmt.Errorf("pipeline not found: %s", name)
	}

	details := &PipelineStatusDetails{
		StartTimestamp:     a.startTimestamp,
		OverallStatus:      ev,
		ComponentStatusMap: make(map[*component.InstanceID]*component.StatusEvent),
	}

	for instanceID, ev := range a.componentStatusMap[compID] {
		details.ComponentStatusMap[instanceID] = ev
	}

	return details, nil
}

func (a *Aggregator) RecordStatus(source *component.InstanceID, event *component.StatusEvent) {
	compIDs := source.PipelineIDs
	// extensions are treated as a pseudo-pipeline
	if source.Kind == component.KindExtension {
		compIDs = extsIDMap
	}

	a.mu.Lock()
	defer a.mu.Unlock()

	for compID := range compIDs {
		var compStatuses map[*component.InstanceID]*component.StatusEvent
		compStatuses, ok := a.componentStatusMap[compID]
		if !ok {
			compStatuses = make(map[*component.InstanceID]*component.StatusEvent)
		}
		compStatuses[source] = event
		a.componentStatusMap[compID] = compStatuses
		a.pipelineStatusMap[compID] = component.AggregateStatusEvent(compStatuses)
	}

	a.overallStatus = component.AggregateStatusEvent(a.pipelineStatusMap)
}

func NewAggregator() *Aggregator {
	return &Aggregator{
		mu:                 sync.RWMutex{},
		startTimestamp:     time.Now(),
		overallStatus:      &component.StatusEvent{},
		pipelineStatusMap:  make(map[component.ID]*component.StatusEvent),
		componentStatusMap: make(map[component.ID]map[*component.InstanceID]*component.StatusEvent),
	}
}
