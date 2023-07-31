'use strict';

const appAtoms = require('..');
const assert = require('assert').strict;

assert.strictEqual(appAtoms(), 'Hello from appAtoms');
console.info('appAtoms tests passed');
