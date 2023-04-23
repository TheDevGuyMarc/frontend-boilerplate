/**
 * Gulp task to check accessibility of HTML files with WCAG guidelines
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('accessibility', function() {
    return gulp.src(config.dest + '**/*.html')
        .pipe($.plumber())
        .pipe($.accessibility({
            force: true,
            accessibilityLevel: 'WCAG2A',
        }))
        .on('error', console.log)
        .pipe($.accessibility.report({
            reportType: 'txt'
        }))
        .pipe($.rename({
            extname: '.txt'
        }))
        .pipe(gulp.dest(config.dest + '/accessibility'))
        .pipe($.plumber.stop());
});