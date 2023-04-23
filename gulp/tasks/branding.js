/**
 * Gulp task for branding source code files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var pkg     = require('../../package.json');

// Configuration
var head = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' * @author <%= pkg.author.name %>',
    ' */',
  ''].join('\n');

// Task
gulp.task('branding', function() {
    return gulp.src(config.src + '**/*.{scss,ts}')
        .pipe($.plumber())
        .pipe($.header(head, { pkg : pkg } ))
        .pipe(gulp.dest(config.src))
        .pipe($.plumber.stop());
});