angular.module('photofin', ['ui.router']);

photofin.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'js/templates/index.html'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'js/templates/about.html'
      });

});
