// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package status

import (
	"fmt"

	"go.opentelemetry.io/collector/component"
)

type AggregatorGRPC struct {
	*aggregatorBase
}

func (a *AggregatorGRPC) CollectorStatus() *component.StatusEvent {
	a.mu.RLock()
	defer a.mu.RUnlock()
	return a.aggregateStatus
}

func (a *AggregatorGRPC) PipelineStatus(name string) (*component.StatusEvent, error) {
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

func NewAggregatorGRPC() *AggregatorGRPC {
	return &AggregatorGRPC{
		aggregatorBase: newAggregatorBase(),
	}
}
