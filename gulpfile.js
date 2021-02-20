const gulp = require('gulp');
const html = require('gulp-htmlmin');
const sass = require('gulp-sass');

//sass
gulp.task('sass', async () => {
  await gulp.src('./src/assets/scss/*.scss')
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest('./dist/css'));
})

// html
gulp.task('html', async () => {
    await gulp.src('./src/html/*.html')
      .pipe(html({ collapseWhitespace: true }))
      .pipe(gulp.dest('./dist/html'));
})

// watch
gulp.task('watch', async () => {
  await gulp.watch('./src/assets/scss/*.scss', gulp.series('sass'));
  await gulp.watch('./src/html/*.html', gulp.series('html'));
});

// Default Task
gulp.task('default', gulp.parallel('sass', 'html', 'watch'));

// exports.default = series(html, sass);

