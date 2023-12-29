package grpc

import "go.opentelemetry.io/collector/config/configgrpc"

type Settings struct {
	configgrpc.GRPCServerSettings `mapstructure:",squash"`
	Enabled                       bool `mapstructure:"enabled"`
}
