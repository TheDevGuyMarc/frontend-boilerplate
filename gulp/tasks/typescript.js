/**
 * Gulp task for compiling Typescript files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Load tsconfig.json
var tsProject = $.typescript.createProject('tsconfig.json');

// Task 1
// Process: Lint -> Fix -> Format -> Fail After Error
gulp.task('ts-lint', function() {
    return gulp.src(config.ts + '**/*.ts')
        .pipe($.eslintNew())
        .pipe($.eslintNew.fix())
        .pipe($.eslintNew.format())
        .pipe($.eslintNew.failAfterError());
});

// Task 2
// Process: Compile -> Print Size -> Save -> Minify -> Rename -> Print Size -> Save
gulp.task('typescript', function() {
    return gulp.src(config.ts + '**/*.ts')
        .pipe(tsProject())
        .pipe($.plumber())
        .pipe($.typescript())
        .pipe($.size({
            title: 'Typescript',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.js))
        .pipe($.minify())
        .pipe($.rename({
            suffix: '.min',
            extname: '.js'
        }))
        .pipe($.size({
            title: 'Typescript',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.js))
        .pipe($.plumber.stop());
});