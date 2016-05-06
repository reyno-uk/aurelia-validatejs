var gulp = require('gulp');
var plumber = require('gulp-plumber');
var typescript = require('gulp-tsb');

gulp.task("build", ["build-system", "build-html"]);

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function () {

    if (!typescriptCompiler) {
        var compilerOptions = require('../../tsconfig.json').compilerOptions;
        typescriptCompiler = typescript.create(compilerOptions);
    }

    var dts = [
      'typings/browser/**/*.d.ts',
      "typings_custom/*.d.ts",
      'jspm_packages/**/*.d.ts'
    ];

    return gulp
        .src(dts.concat("./src/**/*.ts"))
        .pipe(plumber())
        .pipe(typescriptCompiler())
        .pipe(gulp.dest("./dist"));

});

gulp.task("build-html", function(){
    return gulp.src("./src/**/*.html").pipe(gulp.dest("./dist"));
});