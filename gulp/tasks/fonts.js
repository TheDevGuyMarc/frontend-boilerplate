/**
 * Gulp task for copying fonts
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('fonts', function() {
    return gulp.src(config.fonts + '**/*')
        .pipe($.plumber())
        .pipe(gulp.dest(config.dest.fonts))
        .pipe($.plumber.stop());
});