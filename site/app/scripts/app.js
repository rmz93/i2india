'use strict';

angular
  .module('siteApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/incubation_model', {
        templateUrl: 'views/incubation_model.html',
        controller: 'IncubationModelCtrl'
      })
      .when('/careers', {
        templateUrl: 'views/careers.html',
        controller: 'CareersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
