"use strict";
angular.module('artFeltApp', ['ngRoute', 'routes', 'controllers'])

angular.module('controllers', [])

.controller('ArtFeltController', function ($scope, cart) {
  $scope.artItems = [
      {id: 0, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/indians.png", title: "indians", category: "what", price: "$" + 20000},
      {id: 1, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: "$" + 20000},
      {id: 2, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pen", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: "$" + 20000},
      {id: 3, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: "$" + 20000},
      {id: 4, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: "$" + 20000},
      {id: 5, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: "$" + 20000},
      {id: 6, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: "$" + 20000},
      {id: 7, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: "$" + 20000},
      {id: 8, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: "$" + 20000},
      {id: 9, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: "$" + 20000},
      {id: 10, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: "$" + 20000},
      {id: 11, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: "$" + 20000},
      {id: 12, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: "$" + 20000},
      {id: 13, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: "$" + 20000}
  ];

  // GLOBAL VARIABLES
  $scope.randItems = $scope.artItems;
  $scope.currItem = null;

  // FOR USE WITH {{ item.title }}
  $scope.setCurrItem = function (item) {
    $scope.currItem = item;
  };

  // THIS SHOWS AND CYCLES THE IMAGES ON THE 'Prisoners Art' BUTTON
  $scope.cycleImages = function () {
    $scope.randItems = [];
    var getDiv = $("div.initial-display");
    var indx = [];

    getDiv.children().detach();
    $scope.randItems.splice(0, 11);

    for (var i = 0; i < 9;) {
      var rand = parseInt(Math.random() * $scope.artItems.length);

      if (getDiv.has("img")) {
        if (indx.indexOf(rand) === -1) {
          $scope.randItems.push($scope.artItems[rand]);
          indx.push(rand);
          i++;
        }
      }
    }
    // console.warn($scope.randItems);
    return $scope.randItems;
  };


  // THIS IS TO $scope ALL THE METHODS IN THE .factory
  $scope.addArt = function (id, title, medium, size, artist, price, src) {
    cart.addArt(id, title, medium, size, artist, price, src);
  };
  $scope.removeArt = function (title) {
    cart.removeArt(title);
  };
  $scope.getArt = function () {
    return cart.getArt();
  };
  $scope.clearCart = function () {
    cart.clearCart();
  };
  $scope.total = function () {
    return cart.total();
  };

}) // END OF CONTROLLER: 'ArtFeltController'


.factory("cart", function () {
  var cartData = [];

  return {

    addArt: function (item) {
      var addToItem = false;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id) {
          cartData[i].quantity++;
          addToItem = true;
          break;
        }
      }
      if (!addToItem) {
        cartData.push(item);
      }
      console.warn(cartData);
    },

    removeArt: function (item) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id) {
          cartData.splice(i, 1);
          break;
        }
      }
    },

    getArt: function () {
      return cartData;
    },

    clearCart: function () {
      return cartData.splice(0, cartData.length);
    },

    total: function () {
      var total = 0;
      for (var i = 0; i < cartData.length; i++) {
        total += (cartData[i].price * cartData[i].quantity);
      }
      return total.toFixed(2);
    }



  }
}) // END OF 'cart' FACTORY