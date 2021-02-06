const vows = require('vows');
const assert = require('assert');
const http = require('../lib/modern-passport-http');

vows.describe('modern-passport-http').addBatch({
  
  'module': {
    'should export BasicStrategy': function () {
      assert.isFunction(http.BasicStrategy);
    },

    'should export DigestStrategy': function () {
      assert.isFunction(http.DigestStrategy);
    }
  },
  
}).export(module);
