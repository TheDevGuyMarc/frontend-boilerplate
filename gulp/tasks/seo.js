/**
 * Gulp task for seo optimization
 * @link config docs: https://www.npmjs.com/package/gulp-seo
 */

// Imports
const config        = require('../config.json');
const gulp          = require('gulp');
const $             = require('gulp-load-plugins');

// Task
gulp.task('seo', () => {
    return gulp.src(config.html)
        .pipe($.plumber())
        .pipe($.seo({
            list: ['og', 'se', 'schema', 'twitter'],
            meta: {
                title:          'My website',
                description:    'My website description',
                keywords:       'my, website, keywords',
                author:         'My Name',
                type:           'website',
                url:            'http://www.mywebsite.com',
                image:          'http://www.mywebsite.com/image.png',
                robots: {
                    index:      true,
                    follow:     true
                },
                revisitAfter:   '7 days',
            }
        }))
        .pipe($.plumber.stop());
});