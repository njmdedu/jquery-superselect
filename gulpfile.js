var gulp = require('gulp');
//var gulp_concat = require('gulp-concat');
var gulp_rename = require('gulp-rename');
var gulp_uglify = require('gulp-uglify');

gulp.task('build',function(){
  gulp.src('./src/jquery.superselect.js')
      .pipe(gulp.dest('./dist'))
      .pipe(gulp.dest('./docs/js'))
      .pipe(gulp_uglify())
      .pipe(gulp_rename({
        extname:'.min.js'
      }))
      .pipe(gulp.dest('./dist'))
      .pipe(gulp.dest('./docs/js'))
})
