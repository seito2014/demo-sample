var gulp = require("gulp");

var sass = require("gulp-ruby-sass");

var DEV = "app/dev",
    PUBLIC = "app/public";

gulp.task("style", function() {
    gulp.src(DEV + "/sass/**/*.scss")
        .pipe(sass())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(PUBLIC + "/css"));
});