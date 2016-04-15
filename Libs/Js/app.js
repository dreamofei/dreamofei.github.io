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
    .when('/littleUtils/urlCode', {
        templateUrl: 'Views/LittleUtils/urlCode.html'
    })
    .when('/littleUtils/base64Code', {
        templateUrl: 'Views/LittleUtils/base64Code.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});