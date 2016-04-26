'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var GulpNgGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('This generator will generate a web app project using gulp, bower and angularjs.'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.copy('app/_app.css', 'app/app.css');
    this.copy('app/_app.js','app/app.js');
    this.copy('app/_index.html','app/index.html');

    this.mkdir('app/components');
    this.mkdir('app/components/filters');
    this.mkdir('app/components/directives');
    this.copy('app/components/filters/_time_format.js', 'app/components/filters/time_format.js');
    this.copy('app/components/filters/_time_format_test.js', 'app/components/filters/time_format_test.js');
    this.mkdir('app/components/services');
    this.copy('app/components/services/_base-http.js', 'app/components/services/base-http.js');


    this.mkdir('app/main');
    this.mkdir('app/main/user');
    this.copy('app/main/user/_users.html', 'app/main/user/users.html');
    this.copy('app/main/user/_users_controller.js', 'app/main/user/users_controller.js');
    this.copy('app/main/user/_users_controller_test.js', 'app/main/user/users_controller_test.js');
  },

  projectfiles: function () {
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_bower.json', 'bower.json');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_karma-unit.js', 'karma-unit.js');
  }
});

module.exports = GulpNgGenerator;
