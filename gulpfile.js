var gulp = require('gulp');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');

gulp.task('fontify', function(){

  var fontName = "handdrawn-icons";

  gulp.src(["./assets/icons/" + fontName + "/*.svg"])
    .pipe(
      iconfont({
      fontName: fontName,
      appendCodepoints: true
    }))
    .on('codepoints', function(codepoints, options) {
      console.log(codepoints, options);
    })
    .pipe(gulp.dest("./assets/fonts/" + fontName))
    .pipe(
      iconfontCss({
        fontName: fontName,
        path: './lib/template.css',
        targetPath: "../../assets/css/_" + fontName + ".css",
        fontPath: "../../assets/fonts/" + fontName
      })
    );
});
