var gulp = require("gulp");

var sass = require("gulp-ruby-sass"),
    pleeease = require('gulp-pleeease');

var DEV = "app/dev",
    PUBLIC = "app/public";

//style
gulp.task("style", function() {
    gulp.src(DEV + "/sass/**/*.scss")
        .pipe(sass({
            style:'nested',
            compass : true,
            "sourcemap=none": true
        }))
        .pipe(pleeease({
            fallbacks: {
                autoprefixer: ['last 2 version', 'ie 9']
            },
            minifier: false
        }))
        .pipe(gulp.dest(PUBLIC + "/css"));
});

//watch
gulp.task("default", function() {
    //gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch(DEV + "/sass/**/*.scss",["style"]);
});