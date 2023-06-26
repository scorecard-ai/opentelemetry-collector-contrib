window.BENCHMARK_DATA = {
  "lastUpdate": 1687819394718,
  "repoUrl": "https://github.com/mwear/opentelemetry-collector-contrib",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "mwear",
            "username": "mwear"
          },
          "committer": {
            "name": "mwear",
            "username": "mwear"
          },
          "id": "ce78a8720499f78e185a9977a3321ffebe475864",
          "message": "Perf action",
          "timestamp": "2023-06-22T16:59:27Z",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/pull/3402/commits/ce78a8720499f78e185a9977a3321ffebe475864"
        },
        "date": 1687819362769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Log10kDPS/OTLP",
            "value": 9.599185699797195,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/OTLP",
            "value": 11.329079177246005,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/OTLP",
            "value": 56,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/OTLP",
            "value": 80,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/OTLP",
            "value": 149900,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/OTLP",
            "value": 149900,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 8.199672121897441,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 9.663940659064243,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 50,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 72,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 149900,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/OTLP-HTTP",
            "value": 149900,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 11.132531433344788,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 12.33153267882106,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 56,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 81,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/filelog",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 11.065810966685351,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 12.329391589853882,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 57,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 82,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/filelog_checkpoints",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 31.931524276241912,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 32.99458037621656,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 58,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 84,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/kubernetes_containers",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 28.665126080486562,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 29.325882252271857,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 59,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 85,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 149700,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd",
            "value": 149700,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 21.331996865241997,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 22.99370802472982,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 57,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 81,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 149900,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops",
            "value": 149900,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 11.666328511134976,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 13.330289081885415,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 57,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 83,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/CRI-Containerd",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 13.199121295777916,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 14.662928079444821,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 78,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-1",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 4.66633866287809,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 6.666116425418563,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 78,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/syslog-tcp-batch-100",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 18.13279368205171,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 19.665410558232665,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 80,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 147700,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/FluentForward-SplunkHEC",
            "value": 147700,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 13.132733831913548,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 14.332712167920688,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 53,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/tcp-batch-1",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 4.799821374967518,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 5.99835873308236,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Log10kDPS/tcp-batch-100",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "IdleMode",
            "value": 0.4666245562580204,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "IdleMode",
            "value": 2.3327694757354043,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "IdleMode",
            "value": 45,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "IdleMode",
            "value": 64,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "IdleMode",
            "value": 0,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "IdleMode",
            "value": 0,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 30.931222691863,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 31.963309689712464,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 1049300,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Metric10kDPS/OpenCensus",
            "value": 1049300,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 18.199448231555106,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 19.994435555249787,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 76,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 1049300,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Metric10kDPS/OTLP",
            "value": 1049300,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 17.332901398586007,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 18.999325283294322,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 50,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 72,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 1050000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Metric10kDPS/OTLP-HTTP",
            "value": 1050000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 42.46314903638575,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 43.38721971064249,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 79,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 1049300,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Metric10kDPS/SignalFx",
            "value": 1049300,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "MetricsFromFile",
            "value": 27.864278748133653,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "MetricsFromFile",
            "value": 29.659118994292257,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "MetricsFromFile",
            "value": 55,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "MetricsFromFile",
            "value": 78,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "MetricsFromFile",
            "value": 14962,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "MetricsFromFile",
            "value": 14962,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 0,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 0,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 1,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "MetricResourceProcessor/update_and_rename_existing_attributes",
            "value": 1,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 0,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 0,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 1,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "MetricResourceProcessor/set_attribute_on_empty_resource",
            "value": 1,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 12.265434922629995,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 13.999460502790606,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 53,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 76,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/JaegerGRPC",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 12.39922657592372,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 13.662873320180925,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 53,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/OpenCensus",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 8.13297139604488,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 9.998347026610608,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 78,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 11.398991588969015,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 12.998415107578738,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 53,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-gRPC-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 6.26649881598928,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 7.665869717740231,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 51,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 72,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 9.532654564478133,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 10.66268718831345,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 52,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 75,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/OTLP-HTTP-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 10.599646205008971,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 11.997180590578132,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 52,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 75,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 13.399488681764996,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 15.332485303792838,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 62,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 89,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM-gzip",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 10.199040366852396,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 13.662566639718621,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 141,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 232,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 150000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/SAPM-zstd",
            "value": 150000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 27.86426316591544,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 28.99778925687671,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 56,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 81,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 149900,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace10kSPS/Zipkin",
            "value": 149900,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 0,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 0,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 3,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceAttributesProcessor/JaegerGRPC",
            "value": 3,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 0,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 0,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 0,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 3,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceAttributesProcessor/OTLP",
            "value": 3,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 7.599630474554522,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 9.664677975544315,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 89,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 143,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/0*0bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 17.73264107703356,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 20.328889756518496,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 441,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 831,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/100*50bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 13.732403106755337,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 15.33066984918664,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 348,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 749,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 37.065432466838445,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 38.98669511452278,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 515,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 843,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 4400,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSWithAttrs/20*5000bytes",
            "value": 4400,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 8.132620673952374,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 10.663880923279944,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 92,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 152,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/0*0bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 16.732206949048535,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 18.330990058432846,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 429,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 833,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/100*50bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 12.399061345592912,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 14.666231671124045,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 293,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 621,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 36.33078214463625,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 37.65342690594228,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 518,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 848,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 3560,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceBallast1kSPSAddAttrs/20*5000bytes",
            "value": 3560,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 23.53232908491435,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 26.665505463900228,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 65,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 93,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 140660,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceNoBackend10kSPS/NoMemoryLimit",
            "value": 0,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 26.53085616851756,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 29.331890663845623,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 140000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "TraceNoBackend10kSPS/MemoryLimit",
            "value": 0,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 6.732790638988141,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 7.999729025178731,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 52,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 76,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/0*0bytes",
            "value": 14990,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 18.331942305551188,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 19.659748650140163,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/100*50bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 13.666306208729539,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 15.327851245586809,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 54,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 77,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/10*1000bytes",
            "value": 15000,
            "unit": "1",
            "extra": "Received Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 37.93147232932286,
            "unit": "%",
            "extra": "Cpu Percentage Average"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 38.32833414315882,
            "unit": "%",
            "extra": "Cpu Percentage Max"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 61,
            "unit": "MiB",
            "extra": "RAM Avg (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 88,
            "unit": "MiB",
            "extra": "Ram Max (MiB)"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 4320,
            "unit": "1",
            "extra": "Sent Span Count"
          },
          {
            "name": "Trace1kSPSWithAttrs/20*5000bytes",
            "value": 4320,
            "unit": "1",
            "extra": "Received Span Count"
          }
        ]
      }
    ]
  }
}