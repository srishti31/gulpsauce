var gulp = require('gulp');

var jasmine=require('gulp-jasmine')
gulp.task('saucelabs', function (done) {
  require('saucelabs-runner')({
    browsers: [{
      browserName: 'chrome'
    }, {
      browserName: 'firefox'
    }]
  }).fin(function () {
    done();
    setTimeout(function () {
      process.exit(0);
    }, 1000);
  });
});

gulp.task('specs', function() {
  return gulp.src('test-jasmine/spec/multi.js')
		.pipe(jasmine({
			
		}));
});
 
 gulp.task('specs1', function() {
  return gulp.src('test-jasmine/spec/square.js')
		.pipe(jasmine({
			
		}));
});
gulp.task('default',function(){

});
gulp.task('default',['saucelabs']);