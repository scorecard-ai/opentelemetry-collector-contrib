// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/testhelpers"
	"github.com/open-telemetry/opentelemetry-collector-contrib/internal/common/testutil"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.opentelemetry.io/collector/config/confighttp"
)

type componentStatusExpectation struct {
	status       component.Status
	err          error
	nestedStatus map[string]*componentStatusExpectation
}

type teststep struct {
	step                    func()
	queryParams             string
	eventually              bool
	expectedStatusCode      int
	expectedComponentStatus *componentStatusExpectation
}

func TestStatus(t *testing.T) {
	// server and pipeline are reassigned before each test and are available for
	// use in the teststesp
	var server *Server
	var pipelines map[string]*testhelpers.PipelineMetadata

	tests := []struct {
		name      string
		settings  Settings
		pipelines map[string]*testhelpers.PipelineMetadata
		teststeps []teststep
	}{
		{
			name: "Collector Status",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: false,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces"),
			teststeps: []teststep{
				{
					step: func() {
						testhelpers.SeedAggregator(server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusStarting,
						)
					},
					expectedStatusCode: 503,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusStarting,
					},
				},
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
					},
					expectedStatusCode: 200,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewRecoverableErrorEvent(assert.AnError),
						)
					},
					eventually:         true,
					expectedStatusCode: http.StatusServiceUnavailable,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusRecoverableError,
						err:    assert.AnError,
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewStatusEvent(component.StatusOK),
						)
					},
					expectedStatusCode: http.StatusOK,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
					},
				},
			},
		},
		{
			name: "Collector Status - Detailed",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: true,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces"),
			teststeps: []teststep{
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusStarting,
						)
					},
					expectedStatusCode: 503,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusStarting,
						nestedStatus: map[string]*componentStatusExpectation{
							"pipeline:traces": {
								status: component.StatusStarting,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:traces/in": {
										status: component.StatusStarting,
									},
									"processor:batch": {
										status: component.StatusStarting,
									},
									"exporter:traces/out": {
										status: component.StatusStarting,
									},
								},
							},
						},
					},
				},
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
					},
					expectedStatusCode: 200,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
						nestedStatus: map[string]*componentStatusExpectation{
							"pipeline:traces": {
								status: component.StatusOK,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:traces/in": {
										status: component.StatusOK,
									},
									"processor:batch": {
										status: component.StatusOK,
									},
									"exporter:traces/out": {
										status: component.StatusOK,
									},
								},
							},
						},
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewRecoverableErrorEvent(assert.AnError),
						)
					},
					eventually:         true,
					expectedStatusCode: http.StatusServiceUnavailable,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusRecoverableError,
						err:    assert.AnError,
						nestedStatus: map[string]*componentStatusExpectation{
							"pipeline:traces": {
								status: component.StatusRecoverableError,
								err:    assert.AnError,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:traces/in": {
										status: component.StatusOK,
									},
									"processor:batch": {
										status: component.StatusOK,
									},
									"exporter:traces/out": {
										status: component.StatusRecoverableError,
										err:    assert.AnError,
									},
								},
							},
						},
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewStatusEvent(component.StatusOK),
						)
					},
					expectedStatusCode: http.StatusOK,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
						nestedStatus: map[string]*componentStatusExpectation{
							"pipeline:traces": {
								status: component.StatusOK,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:traces/in": {
										status: component.StatusOK,
									},
									"processor:batch": {
										status: component.StatusOK,
									},
									"exporter:traces/out": {
										status: component.StatusOK,
									},
								},
							},
						},
					},
				},
			},
		},
		{
			name: "Pipeline Status",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: false,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces"),
			teststeps: []teststep{
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusStarting,
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: 503,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusStarting,
					},
				},
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: 200,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewRecoverableErrorEvent(assert.AnError),
						)
					},
					queryParams:        "pipeline=traces",
					eventually:         true,
					expectedStatusCode: http.StatusServiceUnavailable,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusRecoverableError,
						err:    assert.AnError,
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewStatusEvent(component.StatusOK),
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: http.StatusOK,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
					},
				},
			},
		},
		{
			name: "Pipeline Status - Detailed",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: true,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces"),
			teststeps: []teststep{
				{
					step: func() {
						testhelpers.SeedAggregator(server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusStarting,
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: 503,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusStarting,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:traces/in": {
								status: component.StatusStarting,
							},
							"processor:batch": {
								status: component.StatusStarting,
							},
							"exporter:traces/out": {
								status: component.StatusStarting,
							},
						},
					},
				},
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: 200,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:traces/in": {
								status: component.StatusOK,
							},
							"processor:batch": {
								status: component.StatusOK,
							},
							"exporter:traces/out": {
								status: component.StatusOK,
							},
						},
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewRecoverableErrorEvent(assert.AnError),
						)
					},
					queryParams:        "pipeline=traces",
					eventually:         true,
					expectedStatusCode: http.StatusServiceUnavailable,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusRecoverableError,
						err:    assert.AnError,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:traces/in": {
								status: component.StatusOK,
							},
							"processor:batch": {
								status: component.StatusOK,
							},
							"exporter:traces/out": {
								status: component.StatusRecoverableError,
								err:    assert.AnError,
							},
						},
					},
				},
				{
					step: func() {
						server.aggregator.RecordStatus(
							pipelines["traces"].ExporterID,
							component.NewStatusEvent(component.StatusOK),
						)
					},
					queryParams:        "pipeline=traces",
					expectedStatusCode: http.StatusOK,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:traces/in": {
								status: component.StatusOK,
							},
							"processor:batch": {
								status: component.StatusOK,
							},
							"exporter:traces/out": {
								status: component.StatusOK,
							},
						},
					},
				},
			},
		},
		{
			name: "Multiple Pipelines",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: true,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces", "metrics"),
			teststeps: []teststep{
				{
					step: func() {
						// traces will be StatusOK
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["metrics"].InstanceIDs(),
							component.StatusOK,
						)
						// metrics and overall status will be PermanentError
						server.aggregator.RecordStatus(
							pipelines["metrics"].ExporterID,
							component.NewPermanentErrorEvent(assert.AnError),
						)
					},
					expectedStatusCode: http.StatusServiceUnavailable,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusPermanentError,
						err:    assert.AnError,
						nestedStatus: map[string]*componentStatusExpectation{
							"pipeline:traces": {
								status: component.StatusOK,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:traces/in": {
										status: component.StatusOK,
									},
									"processor:batch": {
										status: component.StatusOK,
									},
									"exporter:traces/out": {
										status: component.StatusOK,
									},
								},
							},
							"pipeline:metrics": {
								status: component.StatusPermanentError,
								err:    assert.AnError,
								nestedStatus: map[string]*componentStatusExpectation{
									"receiver:metrics/in": {
										status: component.StatusOK,
									},
									"processor:batch": {
										status: component.StatusOK,
									},
									"exporter:metrics/out": {
										status: component.StatusPermanentError,
										err:    assert.AnError,
									},
								},
							},
						},
					},
				},
				{
					queryParams:        "pipeline=traces",
					expectedStatusCode: 200,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusOK,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:traces/in": {
								status: component.StatusOK,
							},
							"processor:batch": {
								status: component.StatusOK,
							},
							"exporter:traces/out": {
								status: component.StatusOK,
							},
						},
					},
				},
				{
					queryParams:        "pipeline=metrics",
					expectedStatusCode: 503,
					expectedComponentStatus: &componentStatusExpectation{
						status: component.StatusPermanentError,
						err:    assert.AnError,
						nestedStatus: map[string]*componentStatusExpectation{
							"receiver:metrics/in": {
								status: component.StatusOK,
							},
							"processor:batch": {
								status: component.StatusOK,
							},
							"exporter:metrics/out": {
								status: component.StatusPermanentError,
								err:    assert.AnError,
							},
						},
					},
				},
			},
		},
		{
			name: "Pipeline Non-existent",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					Detailed: false,
					PathSettings: PathSettings{
						Enabled: true,
						Path:    "/status",
					},
				},
			},
			pipelines: testhelpers.NewPipelines("traces"),
			teststeps: []teststep{
				{
					step: func() {
						testhelpers.SeedAggregator(
							server.aggregator,
							pipelines["traces"].InstanceIDs(),
							component.StatusOK,
						)
					},
					queryParams:        "pipeline=nonexistent",
					expectedStatusCode: 404,
				},
			},
		},
		{
			name: "Status Disabled",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{Enabled: false},
				Status: StatusSettings{
					PathSettings: PathSettings{
						Enabled: false,
					},
				},
			},
			teststeps: []teststep{
				{
					expectedStatusCode: 404,
				},
			},
		},
	}

	for _, tc := range tests {
		t.Run(tc.name, func(t *testing.T) {
			pipelines = tc.pipelines
			server = NewServer(
				tc.settings,
				componenttest.NewNopTelemetrySettings(),
				20*time.Millisecond,
				status.NewAggregator(),
			)

			require.NoError(t, server.Start(context.Background(), componenttest.NewNopHost()))
			defer func() { require.NoError(t, server.Shutdown(context.Background())) }()

			client := &http.Client{}
			url := fmt.Sprintf("http://%s%s", tc.settings.Endpoint, tc.settings.Status.Path)

			for _, ts := range tc.teststeps {
				if ts.step != nil {
					ts.step()
				}

				stepUrl := url
				if ts.queryParams != "" {
					stepUrl = fmt.Sprintf("%s?%s", stepUrl, ts.queryParams)
				}

				var err error
				var resp *http.Response

				if ts.eventually {
					assert.Eventually(t, func() bool {
						resp, err = client.Get(stepUrl)
						require.NoError(t, err)
						return ts.expectedStatusCode == resp.StatusCode
					}, time.Second, 10*time.Millisecond)
				} else {
					resp, err = client.Get(stepUrl)
					require.NoError(t, err)
					assert.Equal(t, ts.expectedStatusCode, resp.StatusCode)
				}

				if ts.expectedComponentStatus != nil {
					body, err := io.ReadAll(resp.Body)
					require.NoError(t, err)

					st := &serializableStatus{}
					require.NoError(t, json.Unmarshal(body, st))

					if tc.settings.Status.Detailed {
						assertStatusDetailed(t, ts.expectedComponentStatus, st)
					} else {
						assertStatusSimple(t, ts.expectedComponentStatus, st)
					}
				}
			}
		})
	}
}

func assertStatusDetailed(
	t *testing.T,
	expected *componentStatusExpectation,
	actual *serializableStatus,
) {
	assert.Equal(t, expected.status, actual.Status())
	assert.Equal(t, !component.StatusIsError(expected.status), actual.Healthy)
	if expected.err != nil {
		assert.Equal(t, expected.err.Error(), actual.Error)
	}
	assertNestedStatus(t, expected.nestedStatus, actual.ComponentStatuses)
}

func assertNestedStatus(
	t *testing.T,
	expected map[string]*componentStatusExpectation,
	actual map[string]*serializableStatus,
) {
	for k, expectation := range expected {
		st, ok := actual[k]
		require.True(t, ok, "status for key: %s not found", k)
		assert.Equal(t, expectation.status, st.Status())
		assert.Equal(t, !component.StatusIsError(expectation.status), st.Healthy)
		if expectation.err != nil {
			assert.Equal(t, expectation.err.Error(), st.Error)
		}
		assertNestedStatus(t, expectation.nestedStatus, st.ComponentStatuses)
	}
}

func assertStatusSimple(
	t *testing.T,
	expected *componentStatusExpectation,
	actual *serializableStatus,
) {
	assert.Equal(t, expected.status, actual.Status())
	assert.Equal(t, !component.StatusIsError(expected.status), actual.Healthy)
	if expected.err != nil {
		assert.Equal(t, expected.err.Error(), actual.Error)
	}
	assert.Nil(t, actual.ComponentStatuses)
}

func TestConfig(t *testing.T) {
	var server *Server
	confMap, err := testhelpers.NewConfmapFromFile(t, filepath.Join("testdata", "config.yaml"))
	require.NoError(t, err)
	confJSON, err := os.ReadFile(filepath.Clean(filepath.Join("testdata", "config.json")))
	require.NoError(t, err)

	for _, tc := range []struct {
		name               string
		settings           Settings
		setup              func()
		expectedStatusCode int
		expectedBody       []byte
	}{
		{
			name: "config not notified",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{
					Enabled: true,
					Path:    "/config",
				},
				Status: StatusSettings{
					PathSettings: PathSettings{
						Enabled: false,
					},
				},
			},
			expectedStatusCode: http.StatusServiceUnavailable,
			expectedBody:       []byte{},
		},
		{
			name: "config notified",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{
					Enabled: true,
					Path:    "/config",
				},
				Status: StatusSettings{
					PathSettings: PathSettings{
						Enabled: false,
					},
				},
			},
			setup: func() {
				server.NotifyConfig(context.Background(), confMap)
			},
			expectedStatusCode: 200,
			expectedBody:       confJSON,
		},
		{
			name: "config disabled",
			settings: Settings{
				HTTPServerSettings: confighttp.HTTPServerSettings{
					Endpoint: testutil.GetAvailableLocalAddress(t),
				},
				Config: PathSettings{
					Enabled: false,
				},
				Status: StatusSettings{
					PathSettings: PathSettings{
						Enabled: false,
					},
				},
			},
			expectedStatusCode: 404,
			expectedBody:       []byte("404 page not found\n"),
		},
	} {
		t.Run(tc.name, func(t *testing.T) {
			server = NewServer(
				tc.settings,
				componenttest.NewNopTelemetrySettings(),
				20*time.Millisecond,
				status.NewAggregator(),
			)

			require.NoError(t, server.Start(context.Background(), componenttest.NewNopHost()))
			defer func() { require.NoError(t, server.Shutdown(context.Background())) }()

			client := &http.Client{}
			url := fmt.Sprintf("http://%s%s", tc.settings.Endpoint, tc.settings.Config.Path)

			if tc.setup != nil {
				tc.setup()
			}

			resp, err := client.Get(url)
			require.NoError(t, err)
			assert.Equal(t, tc.expectedStatusCode, resp.StatusCode)

			body, err := io.ReadAll(resp.Body)
			require.NoError(t, err)
			assert.Equal(t, tc.expectedBody, body)
		})
	}

}
