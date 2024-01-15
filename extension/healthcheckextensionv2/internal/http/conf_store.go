// Copyright The OpenTelemetry Authors
// SPDX-License-Identifier: Apache-2.0

package http

import (
	"sync"
)

type confStore struct {
	mu        sync.RWMutex
	confBytes []byte
}

func (c *confStore) set(bytes []byte) {
	c.mu.Lock()
	defer c.mu.Unlock()
	c.confBytes = bytes
}

func (c *confStore) asBytes() []byte {
	c.mu.RLock()
	defer c.mu.RUnlock()
	return c.confBytes
}
