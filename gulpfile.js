//编写gulp管理文件任务的
//ECMA6  const 声明常量
const gulp = require('gulp');
	
//拷贝html文件
gulp.task('copy-html',function(){
	return gulp.src('*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})

//拷贝图片
gulp.task('images',function(){
	return gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload());
})

//拷贝数据
gulp.task('data',function(){
	return gulp.src('data/*.json')
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

//js文件
gulp.task('scripts',function(){
	return gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload());
})

//建立工程的任务
gulp.task('build',['copy-html','images','scripts','data','scss','scss1','scss2','scss3'],function(){
	console.log('工程建立成功');
})

//scss文件

const scss = require('gulp-sass-china');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');
gulp.task('scss',function(){
	return gulp.src('stylesheet/index.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(minifyCSS())
	.pipe(rename('index.min.css'))
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})
gulp.task('scss1',function(){
	return gulp.src('stylesheet/xiangqing.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})
gulp.task('scss2',function(){
	return gulp.src('stylesheet/zhuce.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})
gulp.task('scss3',function(){
	return gulp.src('stylesheet/denglu.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})



//添加gulp监听，并启动服务
gulp.task('watch',function(){
	gulp.watch('*.html',['copy-html'])
	gulp.watch('images/**/*',['images'])
	gulp.watch('data/*.json',['data'])
	gulp.watch('js/*.js',['scripts'])
	gulp.watch('stylesheet/index.scss',['scss']);
	gulp.watch('stylesheet/xiangqing.scss',['scss1']);
	gulp.watch('stylesheet/zhuce.scss',['scss2']);
	gulp.watch('stylesheet/denglu.scss',['scss3']);
})

//启动服务（下载。引入。使用）
//

const connect = require('gulp-connect');
	gulp.task('server',function(){
		connect.server({
			root:'dist',
			port:9999,
			livereload:true  //设置事实刷新
		})
	})

//默认任务  ，启动gulp
gulp.task('default',['watch','server']);





















