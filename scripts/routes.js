"use strict";
angular.module("routes", [])

.config(function ($routeProvider) { 
 
  // HOME PAGE
  $routeProvider.when("/favs", {
    templateUrl: "templates/initial-display.html"
  });

  // ABOUT PAGE
  $routeProvider.when("/about", {
    templateUrl: "templates/about.html"
  });

  // INCARCERATED PAGE
  $routeProvider.when("/incarcerated", {
    templateUrl: "templates/incarcerated.html"
  });

  // FILTER PAGE
  $routeProvider.when("/filter", {
    templateUrl: "templates/filter.html"
  })

  // PROFILE PAGES FOR INDIVIDUAL PIECE
  $routeProvider.when("/favs/:individual", {
    templateUrl: "templates/individual-piece.html"
  });

  // CART PAGE
  $routeProvider.when("/cart", {
    templateUrl: "templates/cart.html"
  });

  // BACK TO HOME PAGE
  $routeProvider.otherwise({
    templateUrl: "templates/initial-display.html"
  });

});