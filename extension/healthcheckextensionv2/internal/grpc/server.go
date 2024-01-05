package grpc

import (
	"context"
	"errors"
	"time"

	"github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/status"
	"go.opentelemetry.io/collector/component"
	"go.uber.org/zap"

	"google.golang.org/grpc"
	healthpb "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/reflection"
)

type Server struct {
	healthpb.UnimplementedHealthServer
	serverGRPC      *grpc.Server
	aggregator      *status.Aggregator
	settings        Settings
	telemetry       component.TelemetrySettings
	failureDuration time.Duration
	doneCh          chan struct{}
}

func NewServer(
	settings Settings,
	telemetry component.TelemetrySettings,
	failureDuration time.Duration) *Server {
	return &Server{
		settings:        settings,
		telemetry:       telemetry,
		aggregator:      status.NewAggregator(),
		failureDuration: failureDuration,
		doneCh:          make(chan struct{}),
	}
}

func (s *Server) Start(ctx context.Context, host component.Host) error {
	s.telemetry.Logger.Info(
		"Starting GRPC healthcheck server",
		zap.String("endpoint", s.settings.NetAddr.Endpoint),
	)

	var err error
	s.serverGRPC, err = s.settings.ToServer(host, s.telemetry)
	if err != nil {
		return err
	}

	healthpb.RegisterHealthServer(s.serverGRPC, s)
	// TODO: remove this
	reflection.Register(s.serverGRPC)

	ln, err := s.settings.ToListener()

	go func() {
		defer close(s.doneCh)

		if err = s.serverGRPC.Serve(ln); err != nil && !errors.Is(err, grpc.ErrServerStopped) {
			s.telemetry.ReportComponentStatus(component.NewPermanentErrorEvent(err))
		}
	}()

	return nil
}

func (s *Server) Shutdown(ctx context.Context) error {
	s.aggregator.Close()
	s.serverGRPC.GracefulStop()
	<-s.doneCh
	return nil
}

func (s *Server) ComponentStatusChanged(source *component.InstanceID, event *component.StatusEvent) {
	s.aggregator.RecordStatus(source, event)
}
