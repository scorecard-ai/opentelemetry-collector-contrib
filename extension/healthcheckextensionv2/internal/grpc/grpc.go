package grpc

import (
	"context"

	"go.opentelemetry.io/collector/component"
	"google.golang.org/grpc/codes"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/status"
)

var statusToServingStatusMap = map[component.Status]healthpb.HealthCheckResponse_ServingStatus{
	component.StatusNone:             healthpb.HealthCheckResponse_NOT_SERVING,
	component.StatusStarting:         healthpb.HealthCheckResponse_NOT_SERVING,
	component.StatusOK:               healthpb.HealthCheckResponse_SERVING,
	component.StatusRecoverableError: healthpb.HealthCheckResponse_SERVING,
	component.StatusPermanentError:   healthpb.HealthCheckResponse_NOT_SERVING,
	component.StatusFatalError:       healthpb.HealthCheckResponse_NOT_SERVING,
	component.StatusStopping:         healthpb.HealthCheckResponse_NOT_SERVING,
	component.StatusStopped:          healthpb.HealthCheckResponse_NOT_SERVING,
}

func (s *Server) Check(ctx context.Context, req *healthpb.HealthCheckRequest) (*healthpb.HealthCheckResponse, error) {
	var err error
	var ev *component.StatusEvent

	if req.Service == "" {
		ev = s.aggregator.CollectorStatus()
	} else {
		ev, err = s.aggregator.PipelineStatus(req.Service)
	}

	if err != nil {
		return nil, status.Error(codes.NotFound, "unknown service")
	}

	return &healthpb.HealthCheckResponse{
		Status: statusToServingStatusMap[ev.Status()],
	}, nil
}

func (s *Server) Watch(req *healthpb.HealthCheckRequest, stream healthpb.Health_WatchServer) error {
	sub, err := s.aggregator.Subscribe(req.Service)
	if err != nil {
		return err
	}
	defer s.aggregator.Unsubscribe(sub)

	var lastEvent *component.StatusEvent

	for {
		select {
		case ev, ok := <-sub:
			if !ok {
				return status.Error(codes.Canceled, "Server shutting down.")
			}

			var sst healthpb.HealthCheckResponse_ServingStatus

			switch {
			case ev == nil:
				sst = healthpb.HealthCheckResponse_SERVICE_UNKNOWN
			case lastEvent != nil && lastEvent.Status() == ev.Status():
				lastEvent = ev
				continue
			default:
				sst = statusToServingStatusMap[ev.Status()]
			}

			lastEvent = ev

			err := stream.Send(&healthpb.HealthCheckResponse{Status: sst})
			if err != nil {
				return status.Error(codes.Canceled, "Stream has ended.")
			}
		case <-stream.Context().Done():
			return status.Error(codes.Canceled, "Stream has ended.")
		}
	}
}
