module github.com/open-telemetry/opentelemetry-collector-contrib/receiver/googlecloudspannerreceiver

go 1.19

require (
	cloud.google.com/go/spanner v1.60.0
	github.com/ReneKroon/ttlcache/v2 v2.11.0
	github.com/mitchellh/hashstructure v1.1.0
	github.com/stretchr/testify v1.9.0
	go.opentelemetry.io/collector/component v0.80.1-0.20230629144634-c3f70bd1f8ea
	go.opentelemetry.io/collector/confmap v0.80.1-0.20230629144634-c3f70bd1f8ea
	go.opentelemetry.io/collector/consumer v0.80.1-0.20230629144634-c3f70bd1f8ea
	go.opentelemetry.io/collector/pdata v1.0.0-rcv0013.0.20230629144634-c3f70bd1f8ea
	go.opentelemetry.io/collector/receiver v0.80.1-0.20230629144634-c3f70bd1f8ea
	go.uber.org/zap v1.24.0
	google.golang.org/api v0.169.0
	google.golang.org/grpc v1.62.1
	gopkg.in/yaml.v3 v3.0.1
)

require (
	cloud.google.com/go v0.112.1 // indirect
	cloud.google.com/go/compute v1.24.0 // indirect
	cloud.google.com/go/compute/metadata v0.2.3 // indirect
	cloud.google.com/go/iam v1.1.6 // indirect
	cloud.google.com/go/longrunning v0.5.5 // indirect
	github.com/benbjohnson/clock v1.3.0 // indirect
	github.com/census-instrumentation/opencensus-proto v0.4.1 // indirect
	github.com/cespare/xxhash/v2 v2.2.0 // indirect
	github.com/cncf/udpa/go v0.0.0-20220112060539-c52dc94e7fbe // indirect
	github.com/cncf/xds/go v0.0.0-20231128003011-0fa0005c9caa // indirect
	github.com/davecgh/go-spew v1.1.1 // indirect
	github.com/envoyproxy/go-control-plane v0.12.0 // indirect
	github.com/envoyproxy/protoc-gen-validate v1.0.4 // indirect
	github.com/felixge/httpsnoop v1.0.4 // indirect
	github.com/go-logr/logr v1.4.1 // indirect
	github.com/go-logr/stdr v1.2.2 // indirect
	github.com/gogo/protobuf v1.3.2 // indirect
	github.com/golang/groupcache v0.0.0-20210331224755-41bb18bfe9da // indirect
	github.com/golang/protobuf v1.5.4 // indirect
	github.com/google/s2a-go v0.1.7 // indirect
	github.com/googleapis/enterprise-certificate-proxy v0.3.2 // indirect
	github.com/googleapis/gax-go/v2 v2.12.2 // indirect
	github.com/json-iterator/go v1.1.12 // indirect
	github.com/knadh/koanf v1.5.0 // indirect
	github.com/mitchellh/copystructure v1.2.0 // indirect
	github.com/mitchellh/mapstructure v1.5.1-0.20220423185008-bf980b35cac4 // indirect
	github.com/mitchellh/reflectwalk v1.0.2 // indirect
	github.com/modern-go/concurrent v0.0.0-20180306012644-bacd9c7ef1dd // indirect
	github.com/modern-go/reflect2 v1.0.2 // indirect
	github.com/pmezard/go-difflib v1.0.0 // indirect
	github.com/stretchr/objx v0.5.2 // indirect
	go.opencensus.io v0.24.0 // indirect
	go.opentelemetry.io/collector v0.80.1-0.20230629144634-c3f70bd1f8ea // indirect
	go.opentelemetry.io/collector/config/configtelemetry v0.80.1-0.20230629144634-c3f70bd1f8ea // indirect
	go.opentelemetry.io/collector/exporter v0.80.1-0.20230629144634-c3f70bd1f8ea // indirect
	go.opentelemetry.io/collector/featuregate v1.0.0-rcv0013.0.20230629144634-c3f70bd1f8ea // indirect
	go.opentelemetry.io/collector/processor v0.80.1-0.20230629144634-c3f70bd1f8ea // indirect
	go.opentelemetry.io/contrib/instrumentation/google.golang.org/grpc/otelgrpc v0.49.0 // indirect
	go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp v0.49.0 // indirect
	go.opentelemetry.io/otel v1.24.0 // indirect
	go.opentelemetry.io/otel/metric v1.24.0 // indirect
	go.opentelemetry.io/otel/trace v1.24.0 // indirect
	go.uber.org/atomic v1.10.0 // indirect
	go.uber.org/multierr v1.11.0 // indirect
	golang.org/x/crypto v0.21.0 // indirect
	golang.org/x/net v0.22.0 // indirect
	golang.org/x/oauth2 v0.18.0 // indirect
	golang.org/x/sync v0.6.0 // indirect
	golang.org/x/sys v0.18.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	golang.org/x/time v0.5.0 // indirect
	golang.org/x/xerrors v0.0.0-20231012003039-104605ab7028 // indirect
	google.golang.org/appengine v1.6.8 // indirect
	google.golang.org/genproto v0.0.0-20240213162025-012b6fc9bca9 // indirect
	google.golang.org/genproto/googleapis/api v0.0.0-20240311132316-a219d84964c2 // indirect
	google.golang.org/genproto/googleapis/rpc v0.0.0-20240311132316-a219d84964c2 // indirect
	google.golang.org/protobuf v1.33.0 // indirect
)

retract (
	v0.76.2
	v0.76.1
	v0.65.0
)
