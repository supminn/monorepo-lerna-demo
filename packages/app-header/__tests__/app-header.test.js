'use strict';

const appHeader = require('..');
const assert = require('assert').strict;

assert.strictEqual(appHeader(), 'Hello from appHeader');
console.info('appHeader tests passed');
