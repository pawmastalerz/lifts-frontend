var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src('src/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/styles.scss', ['sass']);
});
