/**
 * Gulp task for running all tests on codebase
 */

// Imports
const gulp          = require('gulp');
const runSequence   = require('run-sequence');

// Task
gulp.task('testAll', (callback) => {
    runSequence(
        'scss-lint', 
        'ts-lint', 
        'test', 
        'validate-json', 
        callback
    );
});