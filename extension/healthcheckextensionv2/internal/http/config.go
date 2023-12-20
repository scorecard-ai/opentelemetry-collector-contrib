// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http // import "github.com/open-telemetry/opentelemetry-collector-contrib/extension/healthcheckextensionv2/internal/http"

import "go.opentelemetry.io/collector/config/confighttp"

type Settings struct {
	confighttp.HTTPServerSettings `mapstructure:",squash"`

	Config PathSettings `mapstructure:"config"`
	Status PathSettings `mapstructure:"status"`
}

func (s Settings) Enabled() bool {
	return s.Config.Enabled || s.Status.Enabled
}

type PathSettings struct {
	Enabled bool   `mapstructure:"enabled"`
	Path    string `mapstructure:"path"`
}
