/**
 * Gulp task for validating JSON files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('validate-json', function() {
    return gulp.src(config.json + '**/*.json')
        .pipe($.plumber())
        .pipe($.jsonValidator())
        .pipe($.plumber.stop());
});
