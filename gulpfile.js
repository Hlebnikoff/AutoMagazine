const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const stylelint = require('gulp-stylelint');

gulp.task('sass', () => {
  return gulp.src('src/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('stylelint', () => {
  return gulp.src('src/assets/styles/**/*.scss')
    .pipe(stylelint({
      reporters: [{ formatter: 'string', console: true }]
    }));
});

gulp.task('eslint', () => {
  return gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.prettier()

gulp.task('watch', () => {
  gulp.watch('src/assets/styles/**/*.scss', gulp.series('sass', 'stylelint'));
  gulp.watch('src/**/*.js', gulp.series('eslint'));
});

gulp.task('default', gulp.series('sass', 'stylelint', 'eslint', 'watch'));
