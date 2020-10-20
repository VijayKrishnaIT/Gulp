import * as terser from 'gulp-terser';
import * as gulp from "gulp";
import * as concat from "gulp-concat";
import * as minifyhtml from "gulp-minify-html";
import * as minifycss from "gulp-minify-css";
import * as open from "gulp-open";
import * as bower from "gulp-bower";

//prepate task-1
//pick the html's  ==> concat it ==> compress it (minify)   => store to prod folder
gulp.task("vijay_task", async () => {
    gulp.src("./dev/html/*.html")
        .pipe(concat("vijay.min.html"))
        .pipe(minifyhtml())
        .pipe(gulp.dest("./prod/html"));
});
gulp.task("naveen_task", async () => {
    gulp.src("./dev/css/*.css")
        .pipe(concat("naveen.min.css"))
        .pipe(minifycss())
        .pipe(gulp.dest("./prod/css"));
});

gulp.task("js_task", () => {
    gulp.src("./dev/js/*.js")
        .pipe(concat("final.min.js"))
        .pipe(terser())
        .pipe(gulp.dest("./prod/js"));
});

gulp.task("bower_task", () => {
    return bower();
});

gulp.task("open", () => {
    return gulp.src("./index.html")
        .pipe(open());
});


gulp.task('default', gulp.parallel('vijay_task', "naveen_task", "js_task", "bower_task", "open"));


