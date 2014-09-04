var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

var fontName = "bw-icons";
var outputType = "scss";
var templatesPath = "./node_modules/gulp-iconfont-css/templates/_icons."

gulp.task('iconfont', function(){
  gulp.src(['app/assets/icons/*.svg'])
    .pipe(iconfontCss({
      fontName: fontName,
      path: templatesPath + outputType,
      targetPath: '../css/_' + fontName + '.' + outputType,
      fontPath: '../fonts/'
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true
     }))
    .pipe(gulp.dest('./app/assets/fonts/'));
});
