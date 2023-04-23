/**
 * Gulp task for optimizing images
 */

// Imports
var config  = require('../config.json');
var gulp    = require('gulp');
var quant   = require('imagemin-pngquant');
var $       = require('gulp-load-plugins')();

// Task
gulp.task('image-optimization', function() {
    return gulp.src(config.media + '**/*')
        .pipe($.plumber())
        .pipe($.imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [quant({
                quality: '65-80',
                speed: 4
            })]
        }))
        .pipe(gulp.dest(config.dest.media))
        .pipe($.size({
            title: 'Images',
            gzip: false,
            showFiles: true
        }))
        .pipe($plumber.stop());
});