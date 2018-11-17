# wordpress-starter-child-theme-sass-gulp
WordPress starter child theme generator with Sass preprocessor, JavaScript minifier, Image optimizer, Gulp task runner

### **Warning**
Wordpress Starter child-theme sass-gulp has been tested on Mac and Windows, not yet on Linux.

This child-theme generator is still a work in progress, so code comments and `// debug` are still visible

## How to install `Wordpress Starter Child-theme Sass-Gulp`
1. `$ git clone https://github.com/giorgioriccardi/wordpress-starter-child-theme-sass-gulp.git`
2. `$ npm install`
3. `$ gulp watch`
4. run `$ gulp js` only to minify/uglify `app.js`
5. run `$ gulp images` only to optimize images in the `images/src` folder
6. run `$ gulp` to run all the above tasks

### Source for scripts and images
Write `app.js` code into `scripts/src` folder

`Functions.php` has already a function to enqueue the minified version of your scripts
```
get_stylesheet_directory_uri() . '/scripts/app.min.js'
```
Place images into `images/src` folder

Optimized images will be created into `images/distt` folder

## Todo
- Review `gulp-uglify-es` vs. `terser` (https://www.npmjs.com/package/terser)
- Update dependencies:
- ~~`es6-promise 3.1.2->4.2.5`~~
- ~~`gulp-autoprefixer 3.1.1->6.0.0`~~
- ~~`gulp-sass 2.3.2->4.0.2`~~
- **Test** `gulp 4.0.0` (right now throws an error) vs. `gulp 3.9.1` that works fine
- Clean-up messy code and comments
- Re-organize modules order
- Test on Linux

## Notes
The Scripts & Sass folders come with some functions, modules, variables, breakpoints and mixins.

They are there just as a reference and they should be deleted and/or customized to fit your project needs upon bundle build.