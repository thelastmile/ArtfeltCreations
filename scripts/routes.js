"use strict";
angular.module("routes", [])

.config(function ($routeProvider) { 
 
  // HOME PAGE
  $routeProvider.when("/favs", {
    templateUrl: "templates/initial_display.html"
  });

  // ABOUT PAGE
  $routeProvider.when("/about", {
    templateUrl: "templates/about.html"
  });

    // ABOUT SUPPORT PAGE
  $routeProvider.when("/support", {
    templateUrl: "templates/support.html"
  });

  // GALLERY PAGE
  $routeProvider.when("/gallery", {
    templateUrl: "templates/gallery.html"
  });

  // INCARCERATED PAGE
  $routeProvider.when("/incarcerated", {
    templateUrl: "templates/incarcerated.html"
  });

  // FILTER PAGE
  $routeProvider.when("/test_filter", {
    templateUrl: "templates/test_filter.html"
  })

  // PROFILE PAGES FOR INDIVIDUAL PIECE
  $routeProvider.when("/favs/:individual", {
    templateUrl: "templates/individual_piece.html"
  });

  // CART PAGE
  $routeProvider.when("/cart", {
    templateUrl: "templates/cart.html"
  });

  // REGISTER A USER
  $routeProvider.when("/register", {
    templateUrl: "templates/register_user.html"
  });

  // BACK TO HOME PAGE
  $routeProvider.otherwise({
    templateUrl: "templates/initial_display.html"
  });

});