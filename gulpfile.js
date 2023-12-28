const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

const ghPages = require('gulp-gh-pages');


gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);
  var deploy = require('gulp-gh-pages');

  gulp.task('deploy', function () {
    return gulp.src("./build/**/*")
      .pipe(deploy({ 
        remoteUrl: "https://github.com/sergey971/MankyBit.git",
        branch: "main"
      }))
  });