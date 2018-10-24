var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var cssnano = require('gulp-cssnano');
var del = require('del');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var webpack = require('webpack-stream');

const handleError = function (err) {
    console.error(err);
}

//RUN SERVER
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'public'
        },
    })
})

//CSS
gulp.task('css', function () {
    return gulp.src('assets/scss/*.scss')
        .pipe(gulpif(!global.production, sourcemaps.init()))
        .pipe(sassGlob())
        .pipe(sass())
        .on('error', handleError)
        .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
        .pipe(gulpif(global.production, cssnano({ preset: 'default' })))
        .pipe(gulpif(!global.production, sourcemaps.write()))
        .pipe(gulp.dest('public/scss'))
        .pipe(browserSync.stream())
});

//HTML
gulp.task('html', function () {
    return gulp.src('assets/html/*.html')
        .pipe(gulpif(global.production, htmlmin({ collapseWhitespace: true })))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.stream())
});

//JAVASCRIPT
gulp.task('javascript', function () {
    return gulp.src('assets/javascript/*.js')
        .pipe(webpack({
            watch: global.production ? false : true,
            mode: 'production',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            output: {
                filename: 'bundle.js',
            },
            watch: false,
        }))
        .on('error', handleError)
        .pipe(gulpif(global.production, uglify()))
        .pipe(gulp.dest('public/javascript'))
        .pipe(browserSync.stream())
});

//IMAGES
gulp.task('images', function () {
    return gulp.src('assets/static/images/**/*.+(png|jpg|gif|svg)')
        .pipe(gulpif(global.production, cache(imagemin())))
        .pipe(gulp.dest('public/images'))
});

//FONTS
gulp.task('fonts', function () {
    return gulp.src('assets/static/fonts/*.ttf')
        .pipe(gulp.dest('public/fonts'))
})

//WATCH - DEVELOPMENT
gulp.task('watch', ['css', 'html', 'javascript', 'images', 'fonts', 'browserSync'], function () {
    gulp.watch('assets/scss/**/*.scss', ['css']);
    gulp.watch('assets/html/**/*.html', ['html']);
    gulp.watch('assets/javascript/**/*.js', ['javascript']);
})

//CLEAN - PRODUCTION
gulp.task('clean', function () {
    global.production = true;
    return del.sync('public');
})

//BUILD - PRODUCTION
gulp.task('build', function () {
    runSequence('clean',
        ['images', 'css', 'html', 'javascript'],
        function () {
            console.log('Finished building~!');
        }
    )
})






//CSS
  // DEVELOPMENT
  // 1) Compile Sass to CSS - DONE
  // 2) Autoprefix - DONE
  // 3) Create source maps -- DONE
  // 4) Live reload on save of asset files - DONE

  // PRODUCTION
  // 1) Minify -- DONE


//HTML
  // DEVELOPMENT
  // 1) Live reload on save of asset files - DONE

  // PRODUCTION
  // 1) Minify - DONE


//JAVASCRIPT
  // DEVELOPMENT
  // 1) Bundle together all imports into single js file - DONE
  // 2) Live reload on save of asset files - DONE

  // PRODUCTION
  // 1) Minify - DONE


//IMAGES
  // PRODUCTION
  // 1) Optimize - DONE