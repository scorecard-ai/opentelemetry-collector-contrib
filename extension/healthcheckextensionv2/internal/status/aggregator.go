// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package status // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"

import (
	"fmt"
	"strings"
	"sync"
	"time"

	"go.opentelemetry.io/collector/component"
)

// Extensions are treated as a pseudo pipeline and extsID is used as a map key
var (
	extsID    = component.NewID("extensions")
	extsIDMap = map[component.ID]struct{}{extsID: {}}
)

type Event interface {
	Status() component.Status
	Err() error
	Timestamp() time.Time
}

// Scope refers to a part of an AggregateStatus. The zero-value, aka ScopeAll,
// refers to the entire AggregateStatus. ScopeExtensions refers to the extensions
// subtree, and any other value refers to a pipeline subtree.
type Scope string

const (
	ScopeAll        Scope  = ""
	ScopeExtensions Scope  = "extensions"
	pipelinePrefix  string = "pipeline:"
)

func (s Scope) toKey() string {
	if s == ScopeAll || s == ScopeExtensions {
		return string(s)
	}
	return pipelinePrefix + string(s)
}

type Verbosity bool

const (
	Verbose Verbosity = true
	Concise           = false
)

// AggregateStatus contains a map of child AggregateStatuses and an embedded component.StatusEvent.
// It can be used to represent a single, top-level status when the ComponentStatusMap is empty,
// or a nested structure when map is non-empty.
type AggregateStatus struct {
	Event

	ComponentStatusMap map[string]*AggregateStatus
}

func (a *AggregateStatus) clone(verbosity Verbosity) *AggregateStatus {
	st := &AggregateStatus{
		Event: a.Event,
	}

	if verbosity == Verbose && len(a.ComponentStatusMap) > 0 {
		st.ComponentStatusMap = make(map[string]*AggregateStatus, len(a.ComponentStatusMap))
		for k, cs := range a.ComponentStatusMap {
			st.ComponentStatusMap[k] = cs.clone(verbosity)
		}
	}

	return st
}

type subscription struct {
	statusCh  chan *AggregateStatus
	verbosity Verbosity
}

// Aggregator records individual status events for components and aggregates statuses for the
// pipelines they belong to and the collector overall.
type Aggregator struct {
	mu              sync.RWMutex
	aggregateStatus *AggregateStatus
	subscriptions   map[string][]*subscription
	aggregationFunc aggregationFunc
}

// NewAggregator returns a *status.Aggregator.
func NewAggregator(errPriority ErrorPriority) *Aggregator {
	return &Aggregator{
		aggregateStatus: &AggregateStatus{
			Event:              &component.StatusEvent{},
			ComponentStatusMap: make(map[string]*AggregateStatus),
		},
		subscriptions:   make(map[string][]*subscription),
		aggregationFunc: newAggregationFunc(errPriority),
	}
}

// AggregateStatus returns an *AggregateStatus for the given scope. The scope can be the collector
// overall (ScopeAll), extensions (ScopeExtensions), or a pipeline by name. Detail specifies whether
// or not subtrees should be returned with the *AggregateStatus. The boolean return value indicates
// whether or not the scope was found.
func (a *Aggregator) AggregateStatus(scope Scope, verbosity Verbosity) (*AggregateStatus, bool) {
	a.mu.Lock()
	defer a.mu.Unlock()

	if scope == ScopeAll {
		return a.aggregateStatus.clone(verbosity), true
	}

	st, ok := a.aggregateStatus.ComponentStatusMap[scope.toKey()]
	if !ok {
		return nil, false
	}

	return st.clone(verbosity), true
}

// RecordStatus stores and aggregates a StatusEvent for the given component instance.
func (a *Aggregator) RecordStatus(source *component.InstanceID, event *component.StatusEvent) {
	compIDs := source.PipelineIDs
	// extensions are treated as a pseudo-pipeline
	if source.Kind == component.KindExtension {
		compIDs = extsIDMap
	}

	a.mu.Lock()
	defer a.mu.Unlock()

	for compID := range compIDs {
		var pipelineStatus *AggregateStatus
		pipelineScope := Scope(compID.String())
		pipelineKey := pipelineScope.toKey()

		pipelineStatus, ok := a.aggregateStatus.ComponentStatusMap[pipelineKey]
		if !ok {
			pipelineStatus = &AggregateStatus{
				ComponentStatusMap: make(map[string]*AggregateStatus),
			}
		}

		componentKey := fmt.Sprintf("%s:%s", strings.ToLower(source.Kind.String()), source.ID)
		pipelineStatus.ComponentStatusMap[componentKey] = &AggregateStatus{
			Event: event,
		}
		a.aggregateStatus.ComponentStatusMap[pipelineKey] = pipelineStatus
		pipelineStatus.Event = a.aggregationFunc(pipelineStatus)
		a.notifySubscribers(pipelineScope, pipelineStatus)
	}

	a.aggregateStatus.Event = a.aggregationFunc(a.aggregateStatus)
	a.notifySubscribers(ScopeAll, a.aggregateStatus)
}

// Subscribe allows you to subscribe to a stream of events for the given scope. The scope can be
// the collector overall (ScopeAll), extensions (ScopeExtensions), or a pipeline name.
// It is possible to subscribe to a pipeline that has not yet reported. An initial nil
// will be sent on the channel and events will start streaming if and when it starts reporting.
// Detail specifies whether or not subtrees should be returned with the *AggregateStatus.
func (a *Aggregator) Subscribe(scope Scope, verbosity Verbosity) <-chan *AggregateStatus {
	a.mu.Lock()
	defer a.mu.Unlock()

	key := scope.toKey()
	st := a.aggregateStatus
	if scope != ScopeAll {
		st = st.ComponentStatusMap[key]
	}
	if st != nil {
		st = st.clone(verbosity)
	}
	sub := &subscription{
		statusCh:  make(chan *AggregateStatus, 1),
		verbosity: verbosity,
	}

	a.subscriptions[key] = append(a.subscriptions[key], sub)
	sub.statusCh <- st

	return sub.statusCh
}

// Unbsubscribe removes a stream from further status updates.
func (a *Aggregator) Unsubscribe(statusCh <-chan *AggregateStatus) {
	a.mu.Lock()
	defer a.mu.Unlock()

	for scope, subs := range a.subscriptions {
		for i, sub := range subs {
			if sub.statusCh == statusCh {
				a.subscriptions[scope] = append(subs[:i], subs[i+1:]...)
				return
			}
		}
	}
}

// Close terminates all existing subscriptions.
func (a *Aggregator) Close() {
	a.mu.Lock()
	defer a.mu.Unlock()

	for _, subs := range a.subscriptions {
		for _, sub := range subs {
			close(sub.statusCh)
		}
	}
}

func (a *Aggregator) notifySubscribers(scope Scope, status *AggregateStatus) {
	for _, sub := range a.subscriptions[scope.toKey()] {
		// clear unread events
		select {
		case <-sub.statusCh:
		default:
		}
		sub.statusCh <- status.clone(sub.verbosity)
	}
}
