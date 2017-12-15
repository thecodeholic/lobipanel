/**
 * Created by zura on 12/10/2017.
 */

'use strict';

var pjson = require('./package.json');

var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var copy = require('gulp-copy');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
// var pump = require('pump');


gulp.task('less', function () {
  return gulp.src('./less/lobipanel.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('copy', function () {
  gulp.src('./js/**/*.js')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./css/**/*.css')
    .pipe(gulp.dest('./dist/css'));

});

gulp.task('cssmin', function () {
  return gulp.src('./css/lobipanel.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('scripts', function () {
  gulp.src([
    './js/lobipanel.js'
  ])

    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less', ['less', 'cssmin', 'copy']);
  gulp.watch('./js/**/*.js', ['scripts', 'copy']);
});

gulp.task('default', ['less', 'copy', 'cssmin', 'scripts'], function () {
  gulp.start('watch');
});