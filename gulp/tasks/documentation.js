/**
 * Gulp task for generating documentation
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('documentation', function() {
    return gulp.src(config.ts + '**/*.ts')
        .pipe($.plumber())
        .pipe($.documentation('html', {
            polyglot: true,
            name: 'My Project',
            version: '1.0.0',
        }))
        .pipe(gulp.dest(config.dest.docs))
        .pipe($.plumber.stop());
});