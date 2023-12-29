// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package events

import "go.opentelemetry.io/collector/exporter/otlpexporter"

type Settings struct {
	Enabled          bool                `mapstructure:"enabled"`
	ExporterSettings otlpexporter.Config `mapstructure:"exporter_settings"`
}
