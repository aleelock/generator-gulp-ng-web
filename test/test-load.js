/*global describe, beforeEach, it*/
'use strict';
var assert = require('assert');

describe('gulp-ng generator', function () {
  this.timeout(10000);
  it('can be imported without blowing up', function () {
    var app = require('../app');
    assert(app !== undefined);
  });
});
