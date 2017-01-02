var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});
var path = require('path');

var DIST = './build';

gulp.task('appJS', appJS);
function appJS(){
    //combine all js files of the app
    gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
        //.pipe(plugins.jshint())
        //.pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.babel({
            presets: ['es2015','stage-3']
        }))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(DIST));
}
gulp.task('testJS', testJS);
function testJS(){
    gulp.src(['./app/**/*_test.js'])
        .pipe(plugins.babel({
            presets: ['es2015','stage-3']
        }))
        .pipe(plugins.concat('test.js'))
        .pipe(gulp.dest(DIST));
}
gulp.task('templates', templates);
function templates(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
            './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest(DIST));
}

gulp.task('appCSS',appCSS);
function appCSS(){
   gulp.src('./app/**/*.css')
       .pipe(plugins.concat('app.css'))
       .pipe(gulp.dest(DIST));
}
gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([ 
            './node_modules/jquery/dist/jquery.js',
            './node_modules/moment/min/moment-with-locales.js',
            './node_modules/bootstrap/dist/js/bootstrap.js',
            './node_modules/angular/angular.js',
            './node_modules/angular-sanitize/angular-sanitize.js',
            './node_modules/angular-ui-router/release/angular-ui-router.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js'
        ])
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest(DIST));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.css',
            './node_modules/font-awesome/css/font-awesome.css'
        ])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest(DIST+'/css'));
});

gulp.task('copyFonts', function(){
    gulp.src([
            './node_modules/bootstrap/fonts/*',
            './node_modules/font-awesome/fonts/*'
        ])
        .pipe(gulp.dest(DIST+'/fonts'));
});

gulp.task('copyIndex', function() {
    gulp.src('./app/index.html')
        .pipe(gulp.dest(DIST));
});

gulp.task('watch',function(){
    gulp.watch([
        DIST+'/**/*.html',
        DIST+'/**/*.js',
        DIST+'/**/*.css'
    ], function(event) {
        return gulp.src(event.path)
            .pipe(plugins.connect.reload());
    });

    gulp.watch('app/**/*', function(e){
      var p = e.path;
      if(p.endsWith('.js') && !p.endsWith('_test.js')) appJS();
      if(p.endsWith('_test.js')) testJS();
      if(p.endsWith('.css')) appCSS();
      if(p.endsWith('.html') && p!= path.join(__dirname,'app/index.html') ) templates();
    })

    gulp.watch('./app/index.html',['copyIndex']);

});

gulp.task('connect', plugins.connect.server({
    root: [DIST],
    port: 9000,
    livereload: true
}));

gulp.task('build',['appJS','templates','appCSS','testJS','copyIndex','vendorJS','vendorCSS','copyFonts']);
gulp.task('default',['connect','build','watch']);
