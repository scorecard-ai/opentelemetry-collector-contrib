// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"encoding/json"
	"net/http"

	"go.opentelemetry.io/collector/component"
)

var responseCodes = map[component.Status]int{
	component.StatusNone:             http.StatusServiceUnavailable,
	component.StatusStarting:         http.StatusServiceUnavailable,
	component.StatusOK:               http.StatusOK,
	component.StatusRecoverableError: http.StatusServiceUnavailable,
	component.StatusPermanentError:   http.StatusBadRequest,
	component.StatusFatalError:       http.StatusInternalServerError,
	component.StatusStopping:         http.StatusServiceUnavailable,
	component.StatusStopped:          http.StatusServiceUnavailable,
}

func (s *Server) statusHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		details := s.aggregator.CollectorStatusDetailed()
		sst := toSerializableStatus(details)

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(responseCodes[sst.Status()])

		body, _ := json.Marshal(sst)
		_, _ = w.Write(body)
	})
}

func (s *Server) configHandler() http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, _ *http.Request) {
		conf := func() []byte {
			defer s.mu.RUnlock()
			s.mu.RLock()
			return s.colconf
		}()

		status := http.StatusOK
		if len(conf) == 0 {
			status = http.StatusServiceUnavailable
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(status)
		_, _ = w.Write(conf)
	})
}
