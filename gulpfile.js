var gulp = require("gulp");

var ejs = require("gulp-ejs"),
    sass = require("gulp-ruby-sass"),
    pleeease = require('gulp-pleeease');

var DEV = "app/dev",
    PUBLIC = "app/public";

//ejs
gulp.task("ejs", function() {
    gulp.src(DEV + "/ejs/**/*.ejs")
        .pipe(ejs())
        .pipe(gulp.dest(PUBLIC));
});

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
    gulp.watch(DEV + "/ejs/**/*.ejs",["ejs"]);
    gulp.watch(DEV + "/sass/**/*.scss",["style"]);
    //gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
});