/**
 * Gulp task for semantic versioning
 */

// Imports
const config        = require('../config.json');
const gulp          = require('gulp');
const $             = require('gulp-load-plugins')();

// Task
gulp.task('semver', () => {
    return gulp.src('../../package.json')
        .pipe($.plumber())
        .pipe($.bump())
        .pipe(gulp.dest(config.root))
        .pipe($.plumber.stop());
});