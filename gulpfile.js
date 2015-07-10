const gulp = require('gulp')
  , vfs = require('vinyl-fs')
  , jshint = require('gulp-jshint')
  , jscs = require('gulp-jscs')
  , babel = require('gulp-babel')
  , manifest = require('./package.json')
  , config = manifest.babelOptions
  , mocha = require('gulp-mocha');

gulp.task('jscs', function () {
  vfs.src('./api/*.js')
    .pipe(jscs({
      esnext: true,
      configPath: '.jscsrc'
    }));
});

gulp.task('lint', function () {
  vfs.src('./api/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

function test() {
  return gulp.src(['tests/setup/node.js', 'tests/spec/**/*.js'], {read: false})
    .pipe(mocha({reporter: 'dot', globals: config.mochaGlobals}));
}

gulp.task('test', ['jscs', 'lint'], function() {
  require('babel/register');
  return test();
});
