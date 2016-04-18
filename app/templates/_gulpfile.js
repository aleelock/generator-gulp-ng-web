var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({lazy:false});

var DIST = './build';

gulp.task('scripts', function(){
    //combine all js files of the app
    gulp.src(['!./app/**/*_test.js','./app/**/*.js'])
        //.pipe(plugins.jshint())
        //.pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.babel({
            presets: ['es2015']
        }))
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(DIST));
});

gulp.task('templates',function(){
    //combine all template files of the app into a js file
    gulp.src(['!./app/index.html',
            './app/**/*.html'])
        .pipe(plugins.angularTemplatecache('templates.js',{standalone:true}))
        .pipe(gulp.dest(DIST));
});

gulp.task('css', function(){
    gulp.src('./app/**/*.css')
        .pipe(plugins.concat('app.css'))
        .pipe(gulp.dest(DIST));
});

gulp.task('vendorJS', function(){
    //concatenate vendor JS files
    gulp.src([
            './bower_components/lodash/dist/lodash.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/moment/min/moment-with-locales.js',
            './bower_components/bootstrap/dist/js/bootstrap.js',
            './bower_components/angular/angular.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/angular-ui-router/release/angular-ui-router.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
        ])
        .pipe(plugins.concat('lib.js'))
        .pipe(gulp.dest(DIST));
});

gulp.task('vendorCSS', function(){
    //concatenate vendor CSS files
    gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.css',
            './bower_components/font-awesome/css/font-awesome.css'
        ])
        .pipe(plugins.concat('lib.css'))
        .pipe(gulp.dest(DIST+'/css'));
});

gulp.task('copy-fonts', function(){
    gulp.src([
            './bower_components/bootstrap/fonts/*',
            './bower_components/font-awesome/fonts/*'
        ])
        .pipe(gulp.dest(DIST+'/fonts'));
});

gulp.task('copy-index', function() {
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
    gulp.watch(['./app/**/*.js','!./app/**/*test.js'],['scripts']);
    gulp.watch(['!./app/index.html','./app/**/*.html'],['templates']);
    gulp.watch('./app/**/*.css',['css']);
    gulp.watch('./app/index.html',['copy-index']);

});

gulp.task('connect', plugins.connect.server({
    root: [DIST],
    port: 9000,
    livereload: true
}));

gulp.task('build',['scripts','templates','css','copy-index','vendorJS','vendorCSS','copy-fonts']);
gulp.task('default',['connect','build','watch']);
