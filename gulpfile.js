"use strict";
const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin");

const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const terser = require("gulp-terser");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");

const browsersync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const del = require("del");

// const dist = "./dist/";
const dist = "C:/OpenServer/domains/test";

gulp.task("copy-html", () => {
  return gulp
    .src("source/*.html")
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
      })
    )
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

// Sass Task

gulp.task("scss-task", () => {
  return gulp
    .src("source/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dist))
    .pipe(browsersync.stream());
});

// Js Task

gulp.task("js-task", () => {
  return (
    gulp
      .src("source/js/main.js")
      .pipe(sourcemaps.init())

      .pipe(
        webpack({
          mode: "development",
          output: {
            filename: "script.js",
          },
          watch: false,
        })
      )

      .pipe(
        babel({
          presets: ["@babel/preset-env"],
        })
      )
      .pipe(terser())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(dist))
      // .pipe(browsersync.stream());
      .on("end", browsersync.reload)
  );
});

gulp.task("copy-assets", () => {
  return gulp
    .src(["source/assets/**/*.*"])
    .pipe(gulp.dest(dist + "/assets"))
    .pipe(
      browsersync.stream({
        once: true,
      })
    );
});

gulp.task("del", () => {
  // return del("./dist/");
  return del("./dist/");
});

// Browsersync Tasks

gulp.task("server", () => {
  browsersync.init({
    ui: false,
    notify: false,
    server: {
      baseDir: dist,
    },
  });
});

gulp.task("watch", () => {
  gulp.watch("source/*.html", gulp.parallel("copy-html"));
  gulp.watch("source/assets/**/*.*", gulp.parallel("copy-assets"));
  gulp.watch("source/js/**/*.js", gulp.parallel("js-task"));
  gulp.watch("source/scss/**/*.scss", gulp.parallel("scss-task"));
});

gulp.task(
  "default",
  gulp.series(
    gulp.series("del"),

    gulp.parallel("copy-html", "scss-task", "js-task", "copy-assets"),
    gulp.parallel("server", "watch")
  )
);
