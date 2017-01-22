'use strict'

var assert = require('assert')
var channel = require('27mhz')

assert.equal(channel(0), undefined)
assert.equal(channel(1), 26965000)
assert.equal(channel(19), 27.145e6)
assert.equal(channel(32), 27.275e6)
assert.equal(channel(33), undefined)
