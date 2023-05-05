# Routing Connector

| Status                   |                                                           |
|--------------------------|-----------------------------------------------------------|
| Stability                | [in development]                                             |
| Supported pipeline types | See [Supported Pipeline Types](#supported-pipeline-types) |
| Distributions            | [contrib]                                                 |

## Supported Pipeline Types

| [Exporter Pipeline Type] | [Receiver Pipeline Type] |
| ------------------------ | ------------------------ |
| traces                   | traces                   |
| metrics                  | metrics                  |
| logs                     | logs                     |

Routes logs, metrics or traces based on resource attributes to specific pipelines using [OpenTelemetry Transformation Language (OTTL)](../../pkg/ottl/README.md) statements as routing conditions.

## Configuration

If you are not already familiar with connectors, you may find it helpful to first visit the [Connectors README].

The following settings are available:

- `table (required)`: the routing table for this connector.
- `table.statement (required)`: the routing condition provided as the [OTTL] statement.
- `table.pipelines (required)`: the list of pipelines to use when the routing condition is met.
- `default_pipelines (optional)`: contains the list of pipelines to use when a record does not meet any of specified conditions.
- `error_mode (optional)`: determines how errors returned from OTTL statements are handled. Valid values are `ignore` and `propagate`. If `ignored` is used and a statement's condition has an error then the payload will be routed to the default pipelines.  If not supplied, `propagate` is used.

Example:

```yaml
receivers:
    otlp:

exporters:
  jaeger:
    endpoint: localhost:14250
  jaeger/acme:
    endpoint: localhost:24250
  jaeger/ecorp:
    endpoint: localhost:34250

connectors:
  routing:
    default_pipelines: [traces/jaeger]
    error_mode: ignore
    table:
      - statement: route() where resource.attributes["X-Tenant"] == "acme"
        pipelines: [traces/jaeger-acme]
      - statement: delete_key(resource.attributes, "X-Tenant") where IsMatch(resource.attributes["X-Tenant"], ".*corp")
        exporters: [traces/jaeger-ecorp]

service:
  pipelines:
    traces/in:
      receivers: [oltp]
      exporters: [routing]
    traces/jaeger:
      receivers: [routing]
      exporters: [jaeger]
    traces/jaeger-acme:
      receivers: [routing]
      exporters: [jaeger/acme]
    traces/jaeger-acme:
      receivers: [routing]
      exporters: [jaeger/ecorp]
```

A signal may get matched by routing conditions of more than one routing table entry. In this case, the signal will be routed to all pipelines of matching routes.
Respectively, if none of the routing conditions met, then a signal is routed to default pipelines.

## Differences between the Routing Connector and Routing Processor

- The connector will only route using [OTTL] statements which can only be applied to resource attributes. It does not support matching on context values at this time.
- The connector must be a receiver in a minimum of two pipelines.
- The connector routes to pipelines, not exporters as the processor does.

### OTTL Limitations
- Currently, it is not possible to specify boolean statements without function invocation as the routing condition. It is required to provide the NOOP `route()` or any other supported function as part of the routing statement, see [#13545](https://github.com/open-telemetry/opentelemetry-collector-contrib/issues/13545) for more information.
- Supported [OTTL] functions:
  - [IsMatch](../../pkg/ottl/ottlfuncs/README.md#IsMatch)
  - [delete_key](../../pkg/ottl/ottlfuncs/README.md#delete_key)
  - [delete_matching_keys](../../pkg/ottl/ottlfuncs/README.md#delete_matching_keys)

## Additional Settings
The full list of settings exposed for this connector are documented [here](./config.go) with detailed sample configuration files:

- [logs](./testdata/config_logs.yaml)
- [metrics](./testdata/config_metrics.yaml)
- [traces](./testdata/config_traces.yaml)

[in development]:https://github.com/open-telemetry/opentelemetry-collector#in-development
[Connectors README]:https://github.com/open-telemetry/opentelemetry-collector/blob/main/connector/README.md
[Exporter Pipeline Type]:https://github.com/open-telemetry/opentelemetry-collector/blob/main/connector/README.md#exporter-pipeline-type
[Receiver Pipeline Type]:https://github.com/open-telemetry/opentelemetry-collector/blob/main/connector/README.md#receiver-pipeline-type
[contrib]:https://github.com/open-telemetry/opentelemetry-collector-releases/tree/main/distributions/otelcol-contrib
[OTTL]: https://github.com/open-telemetry/opentelemetry-collector/blob/main/docs/processing.md#telemetry-query-language