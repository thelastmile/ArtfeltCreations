angular.module('routes', [])

.config(function ($routeProvider) { 
 
  $routeProvider.when('/favs', {
    templateUrl: 'templates/individual-piece.html'
  });

  $routeProvider.when('/creativity', {
    // templateUrl: 'templates/creativity.html'
  });

  $routeProvider.otherwise({
    // templateUrl: 'html_templates/food_list_route.html'
  });

});