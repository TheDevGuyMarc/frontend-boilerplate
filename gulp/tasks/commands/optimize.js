/**
 * Gulp command for seo and accessibility optimization
 */

// Imports
const config        = require('../../config.json');
const gulp          = require('gulp');
const runSequence   = require('run-sequence');

// Task
gulp.task('optimize', (callback) => {
    runSequence(
        'seo',
        'accessibility',
        callback
    );
});