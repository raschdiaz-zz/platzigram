// require('') Search node modules in 'node_modules' and export

// Gulp =  Toolkit to automate tasks in the development workflow
var gulp = require('gulp');

// Gulp modules
var sass = require('gulp-sass');
var rename = require('gulp-rename');
//var babel = require('gulp-babel');
var watch = require('gulp-watch');
//var build = require('gulp-build');

var source = require('vinyl-source-stream');

// Browserify  = Tool for compile commonjs modules for the browser
var browserify = require('browserify');

// Browserify modules
var babelify = require('babelify');
//var bulk = require('bulk-require');

//var files1 = ['src/**/*.js'];
//files1 = require('bulk-require')(__dirname, files1);

var assets_path = 'assets/*';

var style_file = 'index.scss';

var script_files = [
    './src/index.js',
    './src/landing/index.js',
    './src/homepage/index.js',
    './src/homepage/template.js',
    './src/landing/index.js',
    './src/signin/index.js',
    './src/signin/template.js',
    './src/signup/index.js',
    './src/signup/template.js',
    './src/layout/index.js'
];

var script_files2 = 'src/**/*.js';

/*Create task*/

gulp.task('compile_assets',function() {

    gulp.src(assets_path)
        .pipe(gulp.dest('public'));

});


gulp.task('compile_styles', function () {

    console.log('Compiling styles...');
	gulp.src(style_file)
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'));

});


gulp.task('compile_scripts', function(){

    console.log('Compiling scripts...');
    browserify(script_files)
        .transform(babelify)
        .bundle()
        .on('error', function (err) {
            console.log(err);
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));

});


gulp.task('watch_styles', function () {

    watch(style_file, function () {
        gulp.start('compile_styles');
    });

});


gulp.task('watch_scripts', function () {

    watch(script_files2, function() {
        gulp.start('compile_scripts');
    });

});

/*Set default tasks*/
gulp.task('default',['compile_assets', 'compile_styles', 'compile_scripts', 'watch_styles', 'watch_scripts']);