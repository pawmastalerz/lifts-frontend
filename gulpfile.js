var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src'));
});

// gulp.task('combine-css', function() {
//   return gulp.src([
//       './node_modules/owl.carousel/dist/assets/owl.carousel.min.css',
//       './node_modules/owl.carousel/dist/assets/owl.theme.default.min.css',
//       './src/styles.css',
//       ])
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('./src'));
// });
// gulp.task('combine-js', function() {
//   return gulp.src([
//       './node_modules/owl.carousel/dist//owl.carousel.min.css',
//       ])
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('./src'));
// });

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
  gulp.watch('./src/styles.css', ['combine-css']);
});


// gulp.task('default', ['combine-css', 'sass:watch','sass'], function() {});