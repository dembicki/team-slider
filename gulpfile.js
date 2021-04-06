const gulp = require('gulp');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('sass', () => gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css')));


gulp.task('lint', () => gulp.src('src/**/*.js').pipe(eslint({}))
    .pipe(eslint.format())
    .pipe(eslint.failOnError()));

gulp.task('watch', () => {
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
});

