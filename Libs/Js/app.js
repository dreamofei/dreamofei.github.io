var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Views/main.html'
    })
    .when('/littleUtils', {
        templateUrl: 'Views/mainOfLittleUtils.html'
    })
    .when('/littleUtils/dateCalc', {
        templateUrl: 'Views/LittleUtils/dateCalc.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});