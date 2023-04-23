/**
 * Gulp task for working with HTML files
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
// Process: Validate -> Print Size -> Save -> Minify -> Print Size -> Save
gulp.task('html', function() {
    return gulp.src(config.html + '**/*.html')
        .pipe($.plumber())
        .pipe($.html())
        .pipe($.size({
            title: 'HTML',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.build))
        .pipe($.htmlmin())
        .pipe($.size({  
            title: 'HTML',
            gzip: false,
            showFiles: true
        }))
        .pipe(gulp.dest(config.dest.build))
        .pipe($.plumber.stop());
});