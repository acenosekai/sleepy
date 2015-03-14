/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */



// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `assets/styles/importer.less` instead.)
var cssFilesToInject = [
  'styles/normalize.css',
  'styles/main.css',
  'styles/angular-material.min.css',
  'styles/materialdesignicons.cdd',
  'styles/lumx.css',
  'app/css/app.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [

  // Load sails.io before everything else
  'js/dependencies/sails.io.js',
  'js/dependencies/jquery.js',
  'js/dependencies/velocity.js',
  'js/dependencies/moment-with-locales.js',
  'js/dependencies/validator.min.js',

  // Dependencies like jQuery, or Angular are brought in here
  'js/dependencies/angular.js',
  'js/dependencies/angular-aria.js',
  'js/dependencies/angular-animate.js',
  'js/dependencies/angular-material.js',
  'js/dependencies/angular-ui-router.js',

  //app js

//  "app/js/app.js",
//  "app/js/core/services/VersionService.js",
//  "app/js/core/services/AuthService.js",
//  "app/js/core/filters/VersionFilter.js",
//  "app/js/core/directives/VersionDirective.js",
//    
//  "app/js/core/directives/ValidatorDirective.js",
//
//  //core
//  "app/js/core/state.js",
//  "app/js/core/controllers/AppCtrl.js",
//  "app/js/core/controllers/NavbarCtrl.js",
//
//  //main
//  "app/js/main/state.js",
//  "app/js/main/controllers/HomeCtrl.js",
//  "app/js/main/controllers/AboutCtrl.js",
//  "app/js/main/controllers/ContactCtrl.js",
//    
//    //auth
//    "app/js/auth/state.js",
//    "app/js/auth/controllers/LoginCtrl.js",
//    "app/js/auth/controllers/RegisterCtrl.js"
];


// Client-side HTML templates are injected using the sources below
// The ordering of these templates shouldn't matter.
// (uses Grunt-style wildcard/glob/splat expressions)
//
// By default, Sails uses JST templates and precompiles them into
// functions for you.  If you want to use jade, handlebars, dust, etc.,
// with the linker, no problem-- you'll just want to make sure the precompiled
// templates get spit out to the same file.  Be sure and check out `tasks/README.md`
// for information on customizing and installing new tasks.
var templateFilesToInject = [
  'templates/**/*.html'
];



// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
