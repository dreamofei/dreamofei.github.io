var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/main', {
        templateUrl: 'Views/main.html'
    })
    .when('', {
        templateUrl: ''
    })
    .otherwise({
        redirectTo: '/main'
    });
});