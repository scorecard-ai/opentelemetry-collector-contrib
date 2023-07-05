window.BENCHMARK_DATA = {
  "lastUpdate": 1688580212164,
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
      },
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
      },
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
          "id": "1288f6e763a5062fe59fd5a9acd968655000bc1a",
          "message": "Merge pull request #3406 from mwear/bench-perms\n\nBench perms",
          "timestamp": "2023-06-29T15:26:27-07:00",
          "tree_id": "eab1af6e68c0950dd3acfbc71a1e0289f21ec2e3",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/commit/1288f6e763a5062fe59fd5a9acd968655000bc1a"
        },
        "date": 1688079345093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 8.666136377115613,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.665638296487758,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 7.399630810713269,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.664984788565393,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 10.732476014563307,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.329523724214296,
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
            "value": 10.799351337681859,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.328618464286064,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 30.531786251085848,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.99030885523623,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 27.332631336607495,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.32989763444102,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
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
            "value": 20.466006535625862,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.997611283743545,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 88,
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
            "value": 11.266330649106145,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331272029680003,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 13.066118786884443,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.999480535275257,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 4.133133608193527,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.997780327461592,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 18.6650323265721,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.99768676758316,
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
            "value": 78,
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
            "value": 13.199678264882122,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.666059325595251,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 4.133168830733968,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.666438356421223,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 0.3332701356285662,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.6663164141771112,
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
            "value": 29.330358851695742,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.329210016573157,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 17.13268207211626,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.327235416147655,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 16.73277758759132,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.997382850581506,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 40.863085496683084,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.32292747638209,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 30.799049288786744,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 31.3348101533808,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 10.33262460552365,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.33228708748284,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 10.79945356996823,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.995038408297907,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 6.132913864103518,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.664316958257011,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 9.133078396845066,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.665593896346186,
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
            "value": 77,
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
            "value": 5.2664639653840055,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.6661584409691805,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 50,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 71,
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
            "value": 8.132634338833668,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.332292061071273,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
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
            "value": 8.332674304900117,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.329818271430602,
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
            "value": 79,
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
            "value": 11.332756789908888,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.997273670212813,
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
            "value": 89,
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
            "value": 7.999504753327223,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.998964924074208,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 141,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 229,
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
            "value": 25.19841393959119,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.657766633610994,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 11.532223496746084,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.666066607903335,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 87,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 140,
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
            "value": 23.93250507081584,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.322303489727933,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 437,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 826,
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
            "value": 19.399537393458107,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.665250907515606,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 348,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 749,
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
            "value": 38.46393624517426,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.66117824793421,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 510,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 846,
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
            "value": 11.865302841863338,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.998349991155962,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 94,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 153,
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
            "value": 23.93248439546036,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.997940304513396,
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
            "value": 18.19909335150105,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.665209190792858,
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
            "value": 621,
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
            "value": 38.263866264391915,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.65256576864474,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 509,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 848,
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
            "value": 32.66275938842986,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.99745070853742,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
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
            "value": 141870,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 36.19877240551092,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.32451537441201,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 139480,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.73283105058293,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.66418609877606,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 24.196766497371478,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.994382899793568,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 17.464981844319123,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.999415248663755,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 41.129497363342075,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.997747478812464,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 61,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 91,
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
      },
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
          "id": "1288f6e763a5062fe59fd5a9acd968655000bc1a",
          "message": "Merge pull request #3406 from mwear/bench-perms\n\nBench perms",
          "timestamp": "2023-06-29T15:26:27-07:00",
          "tree_id": "eab1af6e68c0950dd3acfbc71a1e0289f21ec2e3",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/commit/1288f6e763a5062fe59fd5a9acd968655000bc1a"
        },
        "date": 1688079345093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 8.666136377115613,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.665638296487758,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 7.399630810713269,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.664984788565393,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 10.732476014563307,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.329523724214296,
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
            "value": 10.799351337681859,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.328618464286064,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 30.531786251085848,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.99030885523623,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 27.332631336607495,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.32989763444102,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
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
            "value": 20.466006535625862,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.997611283743545,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 88,
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
            "value": 11.266330649106145,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331272029680003,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 13.066118786884443,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.999480535275257,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 4.133133608193527,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.997780327461592,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 18.6650323265721,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.99768676758316,
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
            "value": 78,
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
            "value": 13.199678264882122,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.666059325595251,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 4.133168830733968,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 5.666438356421223,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 0.3332701356285662,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.6663164141771112,
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
            "value": 29.330358851695742,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.329210016573157,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 17.13268207211626,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.327235416147655,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 16.73277758759132,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.997382850581506,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 40.863085496683084,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.32292747638209,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 30.799049288786744,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 31.3348101533808,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 10.33262460552365,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.33228708748284,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 10.79945356996823,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.995038408297907,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 6.132913864103518,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.664316958257011,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 9.133078396845066,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.665593896346186,
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
            "value": 77,
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
            "value": 5.2664639653840055,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.6661584409691805,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 50,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 71,
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
            "value": 8.132634338833668,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.332292061071273,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
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
            "value": 8.332674304900117,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.329818271430602,
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
            "value": 79,
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
            "value": 11.332756789908888,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.997273670212813,
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
            "value": 89,
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
            "value": 7.999504753327223,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.998964924074208,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 141,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 229,
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
            "value": 25.19841393959119,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.657766633610994,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 11.532223496746084,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.666066607903335,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 87,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 140,
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
            "value": 23.93250507081584,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.322303489727933,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 437,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 826,
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
            "value": 19.399537393458107,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.665250907515606,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 348,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 749,
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
            "value": 38.46393624517426,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.66117824793421,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 510,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 846,
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
            "value": 11.865302841863338,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.998349991155962,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 94,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 153,
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
            "value": 23.93248439546036,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.997940304513396,
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
            "value": 18.19909335150105,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.665209190792858,
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
            "value": 621,
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
            "value": 38.263866264391915,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.65256576864474,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 509,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 848,
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
            "value": 32.66275938842986,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.99745070853742,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
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
            "value": 141870,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 36.19877240551092,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.32451537441201,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 139480,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.73283105058293,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.66418609877606,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 24.196766497371478,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.994382899793568,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 17.464981844319123,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.999415248663755,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 41.129497363342075,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.997747478812464,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 61,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 91,
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
      },
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
          "id": "eb0ba8582105b361f7c321375c86f96887a7a657",
          "message": "Benchmark exp",
          "timestamp": "2023-06-22T16:59:27Z",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/pull/3407/commits/eb0ba8582105b361f7c321375c86f96887a7a657"
        },
        "date": 1688160582209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 7.333041972998706,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.332839899865936,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 6.2661318376933455,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.664430852549376,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 50,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 72,
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
            "value": 10.066355767939864,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.332478222301607,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 10.065941784645615,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.332452269166762,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 30.19835319521843,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 31.32857527463492,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 26.065622969581923,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 27.32546453772075,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 60,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 86,
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
            "value": 20.199075605464177,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.328798461081334,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 10.930605264855554,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.66571983018237,
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
            "value": 78,
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
            "value": 10.665828682371412,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331919256815993,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 3.5330314122456143,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 4.66615251731924,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 16.865336669589972,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.996691344289736,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 11.066417166176283,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331973741449653,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 3.4664395081125483,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 4.998673600293937,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 0.33331016860992513,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.665948951424475,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 43,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 61,
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
            "value": 28.996138539769913,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.33229718206159,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 17.13195054850315,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.332528893917708,
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
            "value": 16.199537334733908,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.664521039730403,
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
            "value": 73,
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
            "value": 41.73062147167904,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 42.329068115333136,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 23.132325633711147,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.657615053441468,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
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
            "value": 14.73202983351231,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.660559194745934,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 15.265917928349587,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.66353939800979,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 9.66619167387429,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.665588964561353,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 13.265935363407449,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.664319420615886,
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
            "value": 77,
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
            "value": 7.5992999231071225,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.330500978896849,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 72,
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
            "value": 11.865850739918578,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.664962199491626,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 11.799065198607927,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.661610076713494,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 16.3321276902232,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.328345927700113,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
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
            "value": 11.93289263649327,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.999161318630623,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 140,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 227,
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
            "value": 33.99706749228461,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.31970087065595,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
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
            "value": 6.73266456878483,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.331072880927929,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 88,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 142,
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
            "value": 16.665929178190353,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.664822230885285,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 440,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 830,
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
            "value": 12.866317666942194,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.994690864793114,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 345,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 745,
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
            "value": 34.125236670480135,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.33041015220208,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 515,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 843,
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
            "value": 6.732829635984896,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.998871661478606,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 96,
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
            "value": 16.265355994521414,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.996230525005473,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 428,
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
            "value": 11.532960331254843,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.33199357019148,
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
            "value": 619,
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
            "value": 33.73012448090374,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.99108428338829,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 515,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 849,
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
            "value": 45.32710226191249,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 46.3405003860167,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 92,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 131900,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 49.59755675491767,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 51.66494963373054,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 127520,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 14.79850189339216,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.33238714098692,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 36.19826922802122,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 37.98963911105167,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 26.99899098110952,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.98917260201149,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 37.5978969165185,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.65974953541395,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
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
      },
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
          "id": "bd7edd045633a2fd82d4e51e0c1a6903e301d571",
          "message": "Benchmark exp",
          "timestamp": "2023-06-22T16:59:27Z",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/pull/3407/commits/bd7edd045633a2fd82d4e51e0c1a6903e301d571"
        },
        "date": 1688361006913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 11.065673983496398,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.997986347622364,
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
            "value": 82,
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
            "value": 9.199223353115286,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.665000708236036,
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
            "value": 12.799566798661699,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.664377635527774,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 12.865926451320146,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.330333621917593,
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
            "value": 80,
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
            "value": 37.26444372335235,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.32733999774743,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 33.332191645771516,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.99349105902456,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
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
            "value": 24.9991317351564,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.3310593303625,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 13.666205138875357,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.996511891315473,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
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
            "value": 14.465217709917361,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.998960392886657,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 5.266181075971517,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.998979114908343,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 21.731212566913957,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 22.995105744688406,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 14.399504987257089,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.663350521295518,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 5.399832347445231,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.332297841791124,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
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
            "value": 0.466629785897148,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 2.3318198990506067,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 47,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 66,
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
            "value": 31.797925766185863,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 32.95459635449311,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 18.66555125065503,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.99554728488768,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 17.799484471157996,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.979163693507147,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 43.39336516025278,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 43.96920817298322,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 27.198570791260916,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.66312912059686,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 13.198859460156328,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.662105187995312,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 52,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 74,
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
            "value": 12.932992291188816,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.997241936791303,
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
            "value": 79,
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
            "value": 9.132960855875517,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.66552717596389,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 12.066063476913817,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.33286579861695,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 7.133044977612432,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.664471040606308,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
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
            "value": 10.399500047501716,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.999172988999529,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 11.265619015920034,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.33262588047145,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 13.865976026435147,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.662879345894112,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 97,
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
            "value": 10.93256510125483,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.662299872286388,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 148,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 241,
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
            "value": 28.859585467139485,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.33191700469008,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 8.999051230028819,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.332125751794221,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 90,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 143,
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
            "value": 20.532304867444886,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 22.99442592121244,
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
            "value": 16.065628949135334,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.995088132723644,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 348,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 749,
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
            "value": 37.86331980919034,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 40.32921046470446,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 495,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 831,
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
            "value": 9.19911913466761,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.663896856631986,
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
            "value": 155,
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
            "value": 20.132151147917202,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 22.328489956377275,
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
            "value": 832,
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
            "value": 14.932007185938334,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.99575091497475,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 291,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 618,
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
            "value": 37.99689039275215,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 39.987621511860034,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 496,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 833,
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
            "value": 31.994699506388137,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 35.66574935548183,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
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
            "value": 141060,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 35.06366444091475,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 37.66167257823611,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 138320,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.866385751784708,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.663134517575234,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 23.197687897272868,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.662952771260652,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 17.332741125567296,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.99944827502154,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 40.73199716361384,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.0032895435747,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 61,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
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
      },
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
          "id": "21f34dc7fe69ab861c5cd21350eb874cb8c5e085",
          "message": "Merge pull request #3407 from mwear/benchmark-exp\n\nBenchmark exp",
          "timestamp": "2023-07-05T09:09:06-07:00",
          "tree_id": "206c92501229016b75a72dd035210c0ed328bc93",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/commit/21f34dc7fe69ab861c5cd21350eb874cb8c5e085"
        },
        "date": 1688575080310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 10.132742026364125,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.6631196981426,
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
            "value": 82,
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
            "value": 8.666122575137875,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.332049307573584,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 50,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 72,
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
            "value": 12.93236266985058,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.328946005895256,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 12.86572983225234,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.331585653789196,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 36.13067188541576,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 37.32004058175882,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
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
            "value": 32.46520208781269,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 33.995896785913665,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
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
            "value": 24.398709763696083,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.998327614245667,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 13.466301155343174,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.331025799316174,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 13.932896901128519,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.663965697733476,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 4.932914246751089,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 6.332062686756733,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 20.731928796296142,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 21.99387208202309,
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
            "value": 79,
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
            "value": 13.799321551756135,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.662017751702809,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 4.9330781922271285,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.3328381614379685,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 0.3332669645726244,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.6662729963410972,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 46,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 64,
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
            "value": 44.86347027899969,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 45.984798575211,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 27.33200525662084,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 29.992814901267042,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 75,
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
            "value": 24.86465964604229,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.66214071495602,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 73,
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
            "value": 54.86339190006463,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 56.64941072743127,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
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
            "value": 42.531455045038484,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 43.664933561788665,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 13.932289011674703,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.330106560523834,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 13.666275444932758,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.998008724380336,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 10.666342502296233,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331941866894077,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 13.799103163167581,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.332740630911506,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 7.9328123591030035,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 9.665256914845335,
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
            "value": 10.665860840259523,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.330941570472245,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 12.132516735691246,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.331341679767961,
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
            "value": 15.332936446406592,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.99755155935638,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 92,
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
            "value": 11.799079173116752,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.99521961395839,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 143,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 233,
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
            "value": 30.39765422720886,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.989358935907305,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Trace10kSPS/Zipkin - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 87,
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
            "value": 9.93227547646916,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.662853927779476,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 89,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 142,
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
            "value": 22.198218551524565,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 24.657386481184545,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 440,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 829,
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
            "value": 17.265686585722857,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.995120704349556,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 346,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 746,
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
            "value": 33.6634274594651,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.33269342982575,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 488,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 831,
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
            "value": 10.3325089878566,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.997153226316806,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 96,
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
            "value": 23.13068387541019,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.66379397277913,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 425,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 830,
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
            "value": 16.59849363248111,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.32945342794952,
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
            "value": 621,
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
            "value": 33.19876080534817,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.98747911248746,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 479,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 832,
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
            "value": 23.132289866580503,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.99512934460496,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 92,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 140940,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 26.13261560278798,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.330967905273674,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 139250,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 6.333116828134823,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.664824170683104,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 17.466184098123872,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.33292919613116,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 12.932919274714221,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.33148174410928,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 37.59837532407108,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.32527296632452,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 88,
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
      },
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
          "id": "781be2ad92ee20366580b1df6d26bc4544b7838b",
          "message": "Merge pull request #3427 from mwear/benchmark-exp2\n\nwill it double?",
          "timestamp": "2023-07-05T10:45:22-07:00",
          "tree_id": "1394c813ca53e615274ddf70931eec4cf0acc7ff",
          "url": "https://github.com/mwear/opentelemetry-collector-contrib/commit/781be2ad92ee20366580b1df6d26bc4544b7838b"
        },
        "date": 1688580168696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "cpu_percentage_avg",
            "value": 6.9995601205770575,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 8.66594510541341,
            "unit": "%",
            "extra": "Log10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 6.199476379412744,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.664075090331171,
            "unit": "%",
            "extra": "Log10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 50,
            "unit": "MiB",
            "extra": "Log10kDPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 72,
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
            "value": 9.999631011615746,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.330040249581433,
            "unit": "%",
            "extra": "Log10kDPS/filelog - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
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
            "value": 9.999738045528861,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.998632320071,
            "unit": "%",
            "extra": "Log10kDPS/filelog_checkpoints - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/filelog_checkpoints - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
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
            "value": 29.799305064312936,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 30.656881337588366,
            "unit": "%",
            "extra": "Log10kDPS/kubernetes_containers - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 58,
            "unit": "MiB",
            "extra": "Log10kDPS/kubernetes_containers - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 84,
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
            "value": 26.79795029445665,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 27.66396483787681,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 86,
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
            "value": 19.994334983741766,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.661942106984483,
            "unit": "%",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
            "unit": "MiB",
            "extra": "Log10kDPS/k8s_CRI-Containerd_no_attr_ops - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 85,
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
            "value": 10.73295846901713,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.99684831597681,
            "unit": "%",
            "extra": "Log10kDPS/CRI-Containerd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/CRI-Containerd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 83,
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
            "value": 11.066188530596573,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331870317234507,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 3.4664973157934003,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 4.6653557296987564,
            "unit": "%",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/syslog-tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 16.598570970376876,
            "unit": "%",
            "extra": "Log10kDPS/FluentForward-SplunkHEC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.001271610110077,
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
            "value": 78,
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
            "value": 10.999745679280046,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.998365374696991,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-1 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-1 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 80,
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
            "value": 3.6663574778520838,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 4.999797561529933,
            "unit": "%",
            "extra": "Log10kDPS/tcp-batch-100 - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Log10kDPS/tcp-batch-100 - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 0.3999735953431298,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 1.9998277708327201,
            "unit": "%",
            "extra": "IdleMode - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 46,
            "unit": "MiB",
            "extra": "IdleMode - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 65,
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
            "value": 42.724697250710705,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 43.66162516068649,
            "unit": "%",
            "extra": "Metric10kDPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
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
            "value": 25.599106394927002,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 28.326775533721147,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 56,
            "unit": "MiB",
            "extra": "Metric10kDPS/OTLP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 79,
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
            "value": 23.795689112677938,
            "unit": "%",
            "extra": "Metric10kDPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 25.327024380002616,
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
            "value": 56.85830069929556,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 57.36094543932386,
            "unit": "%",
            "extra": "Metric10kDPS/SignalFx - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Metric10kDPS/SignalFx - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 40.66341406523705,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 42.3197577616266,
            "unit": "%",
            "extra": "MetricsFromFile - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "MetricsFromFile - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 76,
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
            "value": 16.931386758887882,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.663135277977727,
            "unit": "%",
            "extra": "Trace10kSPS/JaegerGRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "Trace10kSPS/JaegerGRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 81,
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
            "value": 16.399314399329345,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.997482020283826,
            "unit": "%",
            "extra": "Trace10kSPS/OpenCensus - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 57,
            "unit": "MiB",
            "extra": "Trace10kSPS/OpenCensus - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 82,
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
            "value": 11.732195049176687,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 13.663628554303074,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-gRPC - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
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
            "value": 15.666037870549438,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-gRPC-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.663945365131696,
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
            "value": 77,
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
            "value": 8.531899104030147,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 11.998551386894441,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 72,
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
            "value": 12.999390893607282,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 14.004166631689596,
            "unit": "%",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 51,
            "unit": "MiB",
            "extra": "Trace10kSPS/OTLP-HTTP-gzip - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 73,
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
            "value": 13.399332543514452,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 15.999425177985351,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 53,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 18.265803606228552,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 20.997883714291266,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-gzip - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 63,
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
            "value": 14.59945664812874,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 18.331461636105903,
            "unit": "%",
            "extra": "Trace10kSPS/SAPM-zstd - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 129,
            "unit": "MiB",
            "extra": "Trace10kSPS/SAPM-zstd - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 202,
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
            "value": 38.595490819335694,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.002971129958716,
            "unit": "%",
            "extra": "Trace10kSPS/Zipkin - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 59,
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
            "value": 6.132890824817354,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.999797402464183,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 92,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 146,
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
            "value": 15.799626458911408,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 17.66279045543688,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 440,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 830,
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
            "value": 10.865737112998003,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.996434285293054,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 353,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 760,
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
            "value": 33.19716770396413,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 34.66549779230178,
            "unit": "%",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 518,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSWithAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 846,
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
            "value": 6.066156502096019,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 7.999438850030589,
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
            "value": 155,
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
            "value": 14.599648782089108,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 16.996570766216685,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 430,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/100*50bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 837,
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
            "value": 10.132541528577594,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 12.331866494809375,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 292,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/10*1000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 619,
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
            "value": 33.065794708433884,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 33.99365281845791,
            "unit": "%",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 519,
            "unit": "MiB",
            "extra": "TraceBallast1kSPSAddAttrs/20*5000bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 848,
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
            "value": 32.26401684447257,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 36.33107780314044,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 65,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 93,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 139030,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/NoMemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 35.864769721612454,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 38.660177092019644,
            "unit": "%",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 55,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 78,
            "unit": "MiB",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - RAM (MiB)"
          },
          {
            "name": "dropped_span_count",
            "value": 135920,
            "unit": "spans",
            "extra": "TraceNoBackend10kSPS/MemoryLimit - Dropped Span Count"
          },
          {
            "name": "cpu_percentage_avg",
            "value": 8.732515919194705,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 10.332783656796881,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - Cpu Percentage"
          },
          {
            "name": "ram_mib_avg",
            "value": 54,
            "unit": "MiB",
            "extra": "Trace1kSPSWithAttrs/0*0bytes - RAM (MiB)"
          },
          {
            "name": "ram_mib_max",
            "value": 77,
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
            "value": 24.86581257407865,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/100*50bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 26.994313989686052,
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
            "value": 17.665756133553163,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/10*1000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 19.66030471002433,
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
            "value": 77,
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
            "value": 40.131207824042136,
            "unit": "%",
            "extra": "Trace1kSPSWithAttrs/20*5000bytes - Cpu Percentage"
          },
          {
            "name": "cpu_percentage_max",
            "value": 41.65968665560033,
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