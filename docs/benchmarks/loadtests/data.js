window.BENCHMARK_DATA = {
  "lastUpdate": 1688070298161,
  "repoUrl": "https://github.com/mwear/opentelemetry-collector-contrib",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "matthew.wear@gmail.com",
            "name": "Matthew Wear",
            "username": "mwear"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8644d179c8fae3d7fe3a17eee36f9b75c2d0ad8",
          "message": "Merge pull request #3404 from mwear/loadtest-bench\n\nLoadtest bench",
          "timestamp": "2023-06-29T12:18:45-07:00",
          "tree_id": "6b22aa1bee85bf27a6e3d35b8531a0f2368919e0",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/commit/a8644d179c8fae3d7fe3a17eee36f9b75c2d0ad8"
        },
        "date": 1688070251460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 8.865796442052686,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.664829077512238,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 7.399305924879478,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.330205824198284,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.999044028354051,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.332775756208619,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.93304243277124,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331898582703362,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/filelog_checkpoints - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 31.332663468143362,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 32.99213707195067,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/kubernetes_containers - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 28.331171087023506,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 29.995149144486817,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 21.33208198771538,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 23.33180011519783,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 11.665569795912512,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.332271795632511,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/CRI-Containerd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.19885961075398,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.66570848640567,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 4.533124447865402,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.332455998995315,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.732714001746285,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.665958862585924,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.866293934420153,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.328540651413547,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-1 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 4.532979712866144,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.666469608047209,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Log10kDPS/tcp-batch-100 - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0.46663197522355665,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.998958800996686,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 44,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 62,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "IdleMode - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 38.931145737750725,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.998704028656576,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 23.26437314843983,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.330032534577033,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 22.330959139998374,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 23.999126599785654,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 53.39824721321488,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 54.32363522446276,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Metric10kDPS/SignalFx - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 32.59903795675124,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.6654804139269,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricsFromFile - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/update_and_rename_existing_attributes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "MetricResourceProcessor/set_attribute_on_empty_resource - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.798196384173014,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.3309106071478,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.59914162533275,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.330936323003858,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OpenCensus - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.999056461753517,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.330697260821195,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.665922641869454,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.666024129814367,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.932636391176821,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.331552447664738,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 13.532450810042942,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.332005525437477,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.266067816133665,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.327537144727152,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 17.999338358721406,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.998966453413686,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 62,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 90,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-gzip - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.465746363598079,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.32674382204698,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 144,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 245,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/SAPM-zstd - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 38.86360776391771,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.9985952514647,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 86,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace10kSPS/Zipkin - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/JaegerGRPC - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 0,
            "unit": "%",
            "extra": "TraceAttributesProcessor/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 0,
            "unit": "MiB",
            "extra": "TraceAttributesProcessor/OTLP - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceAttributesProcessor/OTLP - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.266193312575388,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.332016688614827,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 91,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 145,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.86610191171138,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.999391728555924,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 442,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 831,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 12.199191325366394,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.998510759100556,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 347,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 748,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 34.13073555203517,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.331128518247326,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 517,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 845,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.333146725898425,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.664921620771617,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 95,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 156,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 15.732231036735886,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.32692251639329,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 427,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 833,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.266316451129148,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.663359740019677,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 293,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 620,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 33.13185585577088,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.33033058519493,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 517,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 844,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 39.19675481182315,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 43.33090073656598,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 62,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 89,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 133930,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 42.33166707989795,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 45.33035739537033,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 132220,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 10.599374016516332,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.332450317558147,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 28.397499147733217,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.994577529655764,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 19.929213531768074,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.99644866603072,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 37.45948528626674,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.66136038206711,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 0,
            "unit": "spans",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Dropped Span Count"
          }
        ]
      }
    ]
  }
}