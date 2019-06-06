require('es6-promise').polyfill();

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    // rtlcss        = require('gulp-rtlcss'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    gutil         = require('gulp-util'),
    rename        = require('gulp-rename'),
    concat        = require('gulp-concat'),
    jshint        = require('gulp-jshint'),
    uglify        = require('gulp-uglify-es').default,
    prettify      = require('gulp-jsbeautifier'),
    imagemin      = require('gulp-imagemin'),
    browserSync   = require('browser-sync').create(),
    notify        = require('gulp-notify');
    // reload        = browserSync.reload;

var onError = function( err ) {
  console.log('An error occurred:', gutil.colors.magenta(err.message));
  gutil.beep();
  this.emit('end');
};

// Sass
gulp.task('sass', gulp.series(function() {
  return gulp.src('./sass/**/*.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sass())
  .pipe(autoprefixer())
  .pipe(gulp.dest('./'))
  // .pipe(rtlcss())                     // Convert to RTL
  // .pipe(rename({ basename: 'rtl' }))  // Rename to rtl.css
  // .pipe(gulp.dest('./'));             // Output RTL stylesheets (rtl.css)
  .pipe(notify({ message: 'Sass task complete' }));
}));

// JavaScript
gulp.task('js', gulp.series(function() {
  return gulp.src(['./js/src/*.js'])
  // This will output the non-minified version of app.js
  .pipe(prettify())
  .pipe(gulp.dest(('./js'), {overwrite: true}))
  // This will minify and rename to app.min.js
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
  .pipe(concat('app.js'))
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(('./js'), {overwrite: true}))
  .pipe(notify({ message: 'Js task complete' }));
}));

// Images
gulp.task('images', gulp.series(function() {
  return gulp.src('./images/src/*')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(imagemin({ optimizationLevel: 7, progressive: true }))
  .pipe(gulp.dest('./images/dist'))
  .pipe(notify({ message: 'Images task complete' }));
}));

// Watch
gulp.task('watch', gulp.series(function() {
  // browserSync.init({
  //   files: ['./**/*.php'],
  //   proxy: 'http://localhost:8888/wordpress/',
  // });
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
  gulp.watch(['./js/src/*.js', '!/js/app.min.js'], gulp.series('js'));
  gulp.watch('images/src/*', gulp.series('images'));
}));

gulp.task('default', gulp.series(['sass', 'js', 'images', 'watch']));
