'use strict';

const appVideos = require('..');
const assert = require('assert').strict;

assert.strictEqual(appVideos(), 'Hello from appVideos');
console.info('appVideos tests passed');
