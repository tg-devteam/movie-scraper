angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // movie page
        .when('/movies', {
            templateUrl: 'views/movie.html',
            controller: 'MovieController'
        });

    $locationProvider.html5Mode(true);
}]);