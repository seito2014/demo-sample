var gulp = require("gulp");

var ejs = require("gulp-ejs"),
    sass = require("gulp-ruby-sass"),
    pleeease = require("gulp-pleeease"),
    browser = require("browser-sync");

var DEV = "app/dev",
    PUBLIC = "app/public";

//ejs
gulp.task("ejs", function() {
    gulp.src(
        [DEV + "/ejs/**/*.ejs",'!' + DEV + "/ejs/**/_*.ejs"]
    )
        .pipe(ejs())
        .pipe(gulp.dest(PUBLIC))
        .pipe(browser.reload({stream:true}));
});

//style
gulp.task("style", function() {
    gulp.src(DEV + "/sass/**/*.scss")
        .pipe(sass({
            style:"nested",
            compass : true,
            "sourcemap=none": true
        }))
        .pipe(pleeease({
            fallbacks: {
                autoprefixer: ["last 2 version", "ie 9"]
            },
            minifier: false
        }))
        .pipe(gulp.dest(PUBLIC + "/css"))
        .pipe(browser.reload({stream:true}));
});

//browser sync
gulp.task("server", function() {
    browser({
        server: {
            baseDir: PUBLIC
        },
        port: 5000
    });
});

//watch
gulp.task("default",["server"], function() {
    gulp.watch(DEV + "/ejs/**/*.ejs",["ejs"]);
    gulp.watch(DEV + "/sass/**/*.scss",["style"]);
    //gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
});