package grpc

import (
	"fmt"
	"sync"
	"time"

	"go.opentelemetry.io/collector/component"
)

var extsID = component.NewID("extensions")
var extsIDMap = map[component.ID]struct{}{extsID: {}}

type statusAggregator struct {
	startTimestamp        time.Time
	aggregateStatus       *component.StatusEvent
	aggregateStatusesByID map[component.ID]*component.StatusEvent
	componentStatusesByID map[component.ID]map[*component.InstanceID]*component.StatusEvent
	verbose               bool
	mu                    sync.RWMutex
}

func (a *statusAggregator) CollectorStatus() *component.StatusEvent {
	a.mu.RLock()
	defer a.mu.RUnlock()
	return a.aggregateStatus
}

func (a *statusAggregator) PipelineStatus(name string) (*component.StatusEvent, error) {
	// TODO: add cache
	compID := component.ID{}
	if err := compID.UnmarshalText([]byte(name)); err != nil {
		return nil, err
	}

	a.mu.RLock()
	defer a.mu.RUnlock()

	if ev, ok := a.aggregateStatusesByID[compID]; ok {
		return ev, nil
	}

	return nil, fmt.Errorf("pipeline not found: %s", name)
}

func (a *statusAggregator) RecordStatus(source *component.InstanceID, event *component.StatusEvent) {
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

func newStatusAggregator() *statusAggregator {
	return &statusAggregator{
		startTimestamp:        time.Now(),
		aggregateStatus:       &component.StatusEvent{},
		aggregateStatusesByID: make(map[component.ID]*component.StatusEvent),
		componentStatusesByID: make(map[component.ID]map[*component.InstanceID]*component.StatusEvent),
		verbose:               true,
		mu:                    sync.RWMutex{},
	}
}
