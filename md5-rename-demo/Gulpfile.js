var gulp = require("gulp"),
	concat = require("gulp-concat"),
	minifyCss = require("gulp-minify-css"),
	rev = require("gulp-rev"),
	revCollector = require("gulp-rev-collector");

gulp.task('concat', function(){
	gulp.src(['./src/css/*.css'])
		.pipe(minifyCss())
		.pipe(rev())
		.pipe(gulp.dest('./dist/css'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./rev'));
	});

gulp.task('rev', function(){
	gulp.src(['./rev/*.json','./src/*.html'])
		.pipe(revCollector())
		.pipe(gulp.dest("./dist"))
	})

gulp.task('default', ['concat', 'rev'])

