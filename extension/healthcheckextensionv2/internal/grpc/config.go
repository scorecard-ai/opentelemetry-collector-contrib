package grpc

import "go.opentelemetry.io/collector/config/configgrpc"

type Settings struct {
	configgrpc.GRPCServerSettings `mapstructure:",squash"`
	Debug                         bool `mapstructure:"debug"`
}
