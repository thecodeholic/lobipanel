/**
 * Created by zura on 12/10/2017.
 */

'use strict';

var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');
var copy = require('gulp-copy');
// var uglify = require('gulp-uglify');
// var pump = require('pump');


gulp.task('less', function () {
  return gulp.src('./less/lobipanel.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('cssmin', function () {
  return gulp.src('./less/lobipanel.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('copy', function () {

   gulp.src('./js/**/*.js')
        .pipe(gulp.dest('./dist/js'));

});

gulp.task('watch', function () {
  gulp.watch('./less/**/*.less',['less']);
  gulp.watch('./less/**/*.less',['sc']);
});