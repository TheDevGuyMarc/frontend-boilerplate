/**
 * Gulp command for building the codebase
 */

// Imports
const gulp          = require('gulp');
const runSequence   = require('run-sequence');

// Task
gulp.task('build', (callback) => {
    runSequence(
        'clean', 
        ['scss', 'typescript', 'images', 'fonts', 'html'], 
        callback
    );
});