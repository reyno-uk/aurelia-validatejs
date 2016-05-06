var gulp = require('gulp');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('fix-base-decorator', function(){
    return gulp.src("./base-decorator.js").pipe(gulp.dest("./jspm_packages/npm/aurelia-validatejs@0.2.1"));    
});

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['fix-base-decorator', 'serve'], function() {
  var bs = browserSync.get('Sample server');

  gulp.watch("./src/**/*.ts", ['build-system', bs.reload]).on('change', reportChange);
  gulp.watch("./src/**/*.html", ['build-html', bs.reload]).on('change', reportChange);
});
