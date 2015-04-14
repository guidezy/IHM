'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: './views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/work', {
        templateUrl: './views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/education', {
        templateUrl: './views/education.html',
        controller: 'EducCtrl'
      })
      .when('/contact', {
        templateUrl: './views/contact.html',
        controller: 'ContCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
