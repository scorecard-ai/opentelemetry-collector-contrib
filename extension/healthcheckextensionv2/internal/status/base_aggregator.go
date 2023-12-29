// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package status

import (
	"sync"
	"time"

	"go.opentelemetry.io/collector/component"
)

var extsID = component.NewID("extensions")
var extsIDMap = map[component.ID]struct{}{extsID: {}}

type aggregatorBase struct {
	startTimestamp        time.Time
	aggregateStatus       *component.StatusEvent
	aggregateStatusesByID map[component.ID]*component.StatusEvent
	componentStatusesByID map[component.ID]map[*component.InstanceID]*component.StatusEvent
	mu                    sync.RWMutex
}

func (a *aggregatorBase) RecordStatus(source *component.InstanceID, event *component.StatusEvent) {
	compIDs := source.PipelineIDs
	// extensions are treated as a pseudo-pipeline
	if source.Kind == component.KindExtension {
		compIDs = extsIDMap
	}

	a.mu.Lock()
	defer a.mu.Unlock()

	for compID := range compIDs {
		var compStatuses map[*component.InstanceID]*component.StatusEvent
		compStatuses, ok := a.componentStatusesByID[compID]
		if !ok {
			compStatuses = make(map[*component.InstanceID]*component.StatusEvent)
		}
		compStatuses[source] = event
		a.componentStatusesByID[compID] = compStatuses
		a.aggregateStatusesByID[compID] = component.AggregateStatusEvent(compStatuses)
	}

	a.aggregateStatus = component.AggregateStatusEvent(a.aggregateStatusesByID)
}

func newAggregatorBase() *aggregatorBase {
	return &aggregatorBase{
		startTimestamp:        time.Now(),
		aggregateStatus:       &component.StatusEvent{},
		aggregateStatusesByID: make(map[component.ID]*component.StatusEvent),
		componentStatusesByID: make(map[component.ID]map[*component.InstanceID]*component.StatusEvent),
		mu:                    sync.RWMutex{},
	}
}
