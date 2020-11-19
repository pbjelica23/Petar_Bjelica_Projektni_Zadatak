var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var scsslint = require('gulp-scss-lint');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = 'icon';

var runTimestamp = Math.round(Date.now()/1000);


gulp.task('iconfont', function(){
  return gulp.src(['app/assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'app/assets/css/templates/_icons.scss',
      targetPath: '../scss/iconfont/_icons.scss',
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName, // required
      prependUnicode: true, // recommended option
      formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
      timestamp: runTimestamp, // recommended to get consistent builds when watching files
      normalize: true,
      fontHeight: 1001
    }))
    .pipe(gulp.dest('app/fonts/'));
});

gulp.task('scss-lint', function() {
  return gulp.src(['app/scss/**/*.scss', '!app/assets/**/*.scss', '!app/scss/iconfont/**/*.scss'])
    .pipe(scsslint({
      'config': 'lint.yml'
     }));
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});



