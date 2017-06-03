mainApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : 'pages/home.html',
        controller : 'HomeController'
    })
    .when('/profile', {
        templateUrl : 'pages/profile.html',
        controller : 'ProfileController'
    })
})
mainApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);