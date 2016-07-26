const gulp = require('gulp'),
      babel = require('gulp-babel');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  //app.use(express.static(__dirname));
  app.listen(3000, '0.0.0.0');
});

gulp.task('scripts', function() {
    return gulp.src("js/*.js")
       .pipe(babel())
       .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default', ['scripts', 'express', 'watch'], function(){
  console.log("Building files");
});
