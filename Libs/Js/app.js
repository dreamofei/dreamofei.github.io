var mainMoudle = angular.module('mainApp', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'Views/main.html'
    })
    .when('', {
        templateUrl: ''
    })
    .otherwise({
        redirectTo: '/'
    });
});