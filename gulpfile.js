const gulp = require('gulp');
const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

gulp.task('default', function () {

});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});