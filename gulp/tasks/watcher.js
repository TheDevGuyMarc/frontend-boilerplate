/**
 * Gulp task for watching files and live browser reloading
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var bSync   = require('browser-sync');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('watcher', function() {
    // watch for changes in SCSS files
    gulp.watch(config.html + '**/*.html', ['html']);

    // watch for changes in SCSS files
    gulp.watch(config.scss + '**/*.scss', ['scss']);

    // watch for changes in Typescript files
    gulp.watch(config.ts + '**/*.ts', ['typescript']);

    bSync.init({
        notify: false,
        open: "external",
        logPrefix: "browser-sync",
        server: config.dest.build
    });

    gulp.watch(config.dest.build + '**/*.{html,css,js}').on('change', bSync.reload);
});