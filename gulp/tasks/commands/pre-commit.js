/**
 * Gulp command for pre-commit actions
 */

// Imports
const config        = require('../../config.json');
const gulp          = require('gulp');
const runSequence   = require('run-sequence');

// Task
gulp.task('pre-commit', (callback) => {
    runSequence(
        'clean',
        'branding',
        'documentation',
        ['test','build'],
        'optimize',
        'semver',
        callback
    );
});

