// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"encoding/json"
	"net/http"
	"time"

	"go.opentelemetry.io/collector/component"
)

func (s *Server) statusHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		var err error
		var sst *serializableStatus
		pipeline := r.URL.Query().Get("pipeline")

		if pipeline == "" {
			sst = s.collectorSerializableStatus()
		} else {
			sst, err = s.pipelineSerializableStatus(pipeline)
			if err != nil {
				w.WriteHeader(http.StatusNotFound)
				return
			}
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(s.toHTTPStatus(sst))

		body, _ := json.Marshal(sst)
		_, _ = w.Write(body)
	})
}

func (s *Server) configHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		confBytes := s.confStore.asBytes()

		if len(confBytes) == 0 {
			w.WriteHeader(http.StatusServiceUnavailable)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		_, _ = w.Write(confBytes)
	})
}

func (s *Server) collectorSerializableStatus() *serializableStatus {
	if s.settings.Status.Detailed {
		details := s.aggregator.CollectorStatusDetailed()
		return toCollectorSerializableStatus(details)
	}

	return toSimpleSerializableStatus(&s.startTimestamp, s.aggregator.CollectorStatus())
}

func (s *Server) pipelineSerializableStatus(pipeline string) (*serializableStatus, error) {
	if s.settings.Status.Detailed {
		details, err := s.aggregator.PipelineStatusDetailed(pipeline)
		if err != nil {
			return nil, err
		}
		return toPipelineSerializableStatus(details), nil
	}

	ev, err := s.aggregator.PipelineStatus(pipeline)
	if err != nil {
		return nil, err
	}

	return toSimpleSerializableStatus(&s.startTimestamp, ev), nil
}

var responseCodes = map[component.Status]int{
	component.StatusNone:             http.StatusServiceUnavailable,
	component.StatusStarting:         http.StatusServiceUnavailable,
	component.StatusOK:               http.StatusOK,
	component.StatusRecoverableError: http.StatusOK,
	component.StatusPermanentError:   http.StatusServiceUnavailable,
	component.StatusFatalError:       http.StatusInternalServerError,
	component.StatusStopping:         http.StatusServiceUnavailable,
	component.StatusStopped:          http.StatusServiceUnavailable,
}

func (s *Server) toHTTPStatus(sst *serializableStatus) int {
	if sst.Status() == component.StatusRecoverableError &&
		time.Now().Compare(sst.Timestamp.Add(s.failureDuration)) == 1 {
		return http.StatusServiceUnavailable
	}
	return responseCodes[sst.Status()]
}
