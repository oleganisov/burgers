var gulp        = require('gulp'),
	sass          = require('gulp-sass'),
	browsersync   = require('browser-sync'),
	concat        = require('gulp-concat'),
	autoprefixer  = require('gulp-autoprefixer'),
	notify        = require("gulp-notify"),
	wait	        = require('gulp-wait'),
	sourcemaps    = require('gulp-sourcemaps');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	});
});

gulp.task('sass', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(wait(2000))
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(sass({ outputStyle: 'expanded' }).on("error", notify.onError()))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ));
});

gulp.task('js', function() {
	return gulp.src([
		'app/js/module.js', // Always at the end
		])
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(concat('app.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }));
});

gulp.task('watch', ['sass', 'browser-sync'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	//gulp.watch(['libs/**/*.js', 'app/js/*.js'], ['js']);
	gulp.watch('app/*.html', browsersync.reload);
});

gulp.task('default', ['watch']);
