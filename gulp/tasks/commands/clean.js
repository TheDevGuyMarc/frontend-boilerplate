/**
 * Gulp command for cleaning the codebase
 */

// Imports
const config        = require('../../config.json');
const gulp          = require('gulp');
const rr            = require('rimraf');

// Task
gulp.task('clean', (callback) => {
    return rr(config.dest, callback);
});