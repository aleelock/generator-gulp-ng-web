/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('gulp-ng generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('gulp-ng-web:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'app/app.css',
      'app/app.js',
      'app/index.html',
      'app/components/filters/time_format.js',
      'app/components/filters/time_format_test.js',
      'app/components/services/base-http.js',
      'app/main/user/users.html',
      'app/main/user/users_controller.js',
      'app/main/user/users_controller_test.js',
      '.bowerrc',
      'bower.json',
      'gulpfile.js',
      'package.json'
    ];

    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });
});
