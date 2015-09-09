var gulp = require('gulp');

var less = require('gulp-less'),
	connect = require('gulp-connect');


// Compile Less
gulp.task('less', function() {
	return gulp.src('./less/style.less')
	.pipe(less())
	.pipe(gulp.dest('./css'));
});

// Run Server
gulp.task('serve', function() {
	connect.server();
});

// Watch Files For Changes
gulp.task('watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
});