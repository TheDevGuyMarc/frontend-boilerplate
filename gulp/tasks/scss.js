/**
 * Gulp task for compiling SCSS files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task 1
gulp.task('scss-lint', function() {
    return gulp.src(config.scss + '**/*.s+(a|c)ss')
    .pipe($.sassLint())
    .pipe($.sassLint.format())
    .pipe($.sassLint.failOnError())
});

// Task 2
// Process: Compile -> Autoprefix -> Combine Media Queries -> Print Size -> Save -> Minify -> Rename -> Print Size -> Save
gulp.task('scss', function() {
    return gulp.src(config.scss + '*.scss')
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({
            browsers: config.autoprefixer_browsers
        }))
        .pipe($.combineMediaQueries())
        .pipe($.size({
            title: 'Styles',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.css))
        .pipe($.cleanCss())
        .pipe($.rename({
            suffix: '.min',
            extname: '.css'
        }))
        .pipe($.size({
            title: 'Styles',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.css))
        .pipe($plumber.stop());
});