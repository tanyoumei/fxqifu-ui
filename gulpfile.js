'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var through = require('through2');
const exec = require('child_process').exec;

// 编译scsss
gulp.task('compileScss', function () {
  return gulp.src(['./packages/**/*.scss', '!theme/*.scss'])
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib'));
});


// 编译vue 体检scss
gulp.task('compileVue', function () {
  return gulp.src('./packages/**/*.vue')
    .pipe(through.obj(function (file, encode, cb) {
      var result = file.contents.toString() // 文本内容转为字符串
      result = result.replace(/\<style.*\<\/style\>/, function (ex) {
        return ex.replace('scss', 'css')
      }) // 替换scss为css
      file.contents = new Buffer.from(result) // 再次转为Buffer对象，并赋值给文件内容
      this.push(file)
      cb()
    }))
    .pipe(gulp.dest('./lib'));
});

// 拷贝其他文件
gulp.task('copyOtherFile', function () {
  return gulp.src(['./packages/**', '!./packages/**/*.vue', '!./packages/**/*.scss'])
    .pipe(gulp.dest('./lib'));
});



gulp.task('build', ['compileScss', 'compileVue', 'copyOtherFile']);
gulp.task('devWatch', function () {
  gulp.watch('./packages/**/*', function () {
    exec('npm run build:file')
  })
})