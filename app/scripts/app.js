'use strict';

/**
 * @ngdoc overview
 * @name demApp
 * @description
 * # demApp
 *
 * Main module of the application.
 */
angular
    .module('Angulardemo', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Home.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/myrequest', {
                templateUrl: 'views/Request.html',
                controller: 'ResquestCtrl',
                controllerAs: 'myrequest'
            })
             .when('/about', {
                templateUrl: 'views/aboutus.html',
                controller: 'AboutusCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

