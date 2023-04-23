/**
 * Gulp default command
 */

// Imports
const gulp = require('gulp');

// Task
gulp.task('default', (callback) => {
    runSequence(
        'clean', 
        'watcher', 
        callback
    );
});