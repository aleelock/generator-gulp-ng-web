# generator-gulp-ng-web

This is a yeoman generator for an AngularJS project that follows the [Best Practice Recommendations for Angular App Structure][1]. It's based on [generator-gulp-ng][8] by [Jessie Evangelista][7] with additions to support ECMAScript6, Less and Jade files for _fast_er development.

Uses Gulp (now I'm convinced by JS build tools!), Bower and NPM.

使用了[gulp-babel][9], 前端也可以用[ES6][7]了,超赞哦!

-----

#### GENERATED DIRECTORY STRUCTURE ####

    app/
      components/
        app_service.js
        app_service_test.js
      main/
        user/
          users.html
          users_controller.js
          users_controller_test.js
      app.css
      app.js
      index.html
    bower_components/    
    node_modules/
    .bowerrc
    .gitignore
    README.md
    bower.json
    gulpgile.js
    karma-unit.js
    package.json

-----

#### FEAUTURES ####
- follows the recommended best practice project structure for angularjs
- all js files in the app folder are concatenated into build/app.js
- all html files in the app folder except index.html are concatenated and compiled into a js file:build/templates.js and loaded into the angular templateCache
- all css files in the app folder are concatenated into build/app.css
- all js files in the bower_components folder are concatenated into build/lib.js
- bootstrap and font-awesoem css files in the bower_components folder are concatenated into build/css/lib.css
- bootstrap and font-awesoem fonts files in the bower_components folder are concatenated into build/fonts/
- index.html is copied to build/index.html
- a static server is run at port 9000 with livereload support
- when any html, js or css file in the build folder changes, they are autoreloaded on the browser
- karma test runner will automatically run unit tests when relevant files change
- using es6 in your js files

-----

#### Prerequisites ####
- node.js [http://nodejs.org/][2]
- npm [http://www.npmjs.org/][3] (中国境内可以使用这个镜像: cnpm [https://cnpmjs.org/][10])
- bower [http://bower.io/][4]
- gulp.js [http://gulpjs.com/][5]
- karma-cli [http://karma-runner.github.io/][6]

-----

#### USAGE ####

1) npm install -g generator-gulp-ng-web

2) mkdir myApp && cd myApp && yo gulp-ng-web

3) gulp

4) karma start karma-unit.js

5) open browser to http://localhost:9000

6) start hacking

----

#### Support ####
For questions and issues: [https://github.com/aleelock/generator-gulp-ng-web/issues][8]
 
  [1]: https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub
  [2]: http://nodejs.org/
  [3]: http://www.npmjs.org/
  [4]: http://bower.io/
  [5]: http://gulpjs.com/
  [6]: http://karma-runner.github.io/
  [7]: http://es6.ruanyifeng.com/
  [8]: https://github.com/aleelock/generator-gulp-ng-web/issues
  [9]: https://cnpmjs.org/package/gulp-babel
  [10]: https://cnpmjs.org/
