var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  gulp.src('./src/stylesheets/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css'))
  .pipe(browserSync.reload({stream: true}));
});


gulp.task('serve', function(){
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });

  gulp.watch('./src/stylesheets/*.scss', ['styles']);
  gulp.watch('./public/*.html',).on('change', browserSync.reload);
});

gulp.task('default', ['styles','serve']);
