import gulp from 'gulp';
import sass from 'gulp-sass';
import eslint from 'eslint';
import stylelint from 'stylelint';
// import { exec } from ('child_process')

gulp.task('sass', () => gulp
  .src('src/assets/styles/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css')));

gulp.task('stylelint', () => gulp.src('src/assets/styles/**/*.scss').pipe(
  stylelint({
    reporters: [{ formatter: 'string', console: true }],
  }),
));

gulp.task('eslint', () => gulp
  .src('src/**/*.js')
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError()));

gulp.task('format', gulp.series('prettier'));

gulp.task('watch', () => {
  gulp.watch('src/assets/styles/**/*.scss', gulp.series('sass', 'stylelint'));
  gulp.watch('src/**/*.js', gulp.series('eslint'));
});

gulp.task(
  'default',
  gulp.series('sass', 'stylelint', 'eslint', 'watch', 'format'),
);
