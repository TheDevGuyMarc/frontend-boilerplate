/**
 * Gulp task for testing Typescript files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('test', function() {
    return gulp.src(config.test)
        .pipe($.plumber())
        .pipe($.jest({
            "preprocessorIgnorePatterns": [
                "<rootDir>/node_modules/",
                "<rootDir>/dist/"
            ],
            "automock": false,
        }))
        .pipe($.plumber.stop());
});