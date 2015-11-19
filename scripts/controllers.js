"use strict";
angular.module('artFeltApp', ['ngRoute', 'routes', 'controllers'])

angular.module('controllers', [])

.controller('ArtFeltController', function ($scope, cart) {
  $scope.artItems = [
      {id: 0, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/indians.png", title: "indians", category: "what", price: 20000},
      {id: 1, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: 20000},
      {id: 2, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pen", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: 20000},
      {id: 3, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: 20000},
      {id: 4, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: 20000},
      {id: 5, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: 20000},
      {id: 6, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: 20000},
      // {id: 7, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: 20000},
      {id: 8, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: 20000},
      {id: 9, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: 20000},
      {id: 10, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: 20000},
      {id: 11, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: 20000},
      {id: 12, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: 20000}
      // {id: 13, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: 20000}
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
    // $scope.randItems.splice(0, 11);

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
  $scope.addArt = function (item) {
    cart.addArt(item);
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
  $scope.quantity = function () {
    return cart.quantity();
  }
  $scope.totalItems = function () {
    return cart.totalItems();
  }





  // AREA FOR MURPH'S WORK
  console.warn("page loading in Angular Controller");

  $scope.results = [];
  $scope.tempResult = [];
  $scope.prevSearch = false; // we need to know if we have searched before


  // These are the four keys we expect. This format
  // can be expanded to 'n' number of filter selections.
  // $scope.artWork = {  medium: "",
  //                 dimensions: "",
  //                 artistName: "",
  //                 prison: ""
  //               };

  $scope.artWork = {};

////////// ARTIST & INSTITUTIONS SELECTION //////////////

  $scope.artist = {};
  $scope.artistArr =[];

  $scope.institutions = {};
  $scope.institutionsArr = [];

  // Pull artist & institutions out of DB and sort.
  // These will be dynamically added to the options in the selection section.
  $scope.artItems.forEach(function(artPiece){

    if (!$scope.artist.hasOwnProperty(artPiece.artistName)) {
      $scope.artistArr.push(artPiece.artistName)
      $scope.artist[artPiece.artistName] = true; // prevents duplicates
    }

    if (!$scope.institutions.hasOwnProperty(artPiece.prison)) {
      $scope.institutionsArr.push(artPiece.prison)
      $scope.institutions[artPiece.prison] = true; // prevents duplicates
    } 

  }); // $scope.artItems.forEach

  $scope.artistArr.sort();
  $scope.institutionsArr.sort();


////////////////  Filter Section  ///////////////////

  // This is a filter that selects art work, user selected, 
  // by medium, by dimensions, by artistName and by prison.
  $scope.selectArtist = function (name, selection) {

    console.log("Pre-Filtered $scope.results[]  : ", $scope.results);

    // If 'artWork[name]' exist that means we
    // are re-selecting a selection from the list.
    // In that case we want to re-initialize 
    // the selection filter by setting $scope.results = [] and 
    // re-setting 'prevSearch' to false.

    console.log("selection name/$scope.key: ", name);
    console.log("filter by selection: ", selection);

    if ($scope.artWork[name]) {
      $scope.results = [];
      $scope.prevSearch = false; 
    }

    // If 'Select Artist' or 'Select Institution' Information <option> is choosen 
    // from either selection list then we can ignore it.
    if (selection === "choose") {
      return;
    }

    $scope.artWork[name] = selection;

    for ($scope.key in $scope.artWork) {  // Filter all selections

        console.log("$scope.artWork[$scope.key]:", $scope.artWork[$scope.key]);

        // If we have not previously made a selection
        // we will enter this block, or if '$scope.results' and 
        // 'prevSearch' have previously been reset.
        if ($scope.results.length == 0 && $scope.prevSearch == false) {
          $scope.artItems.forEach(function(artPiece){
            if (artPiece[$scope.key] == $scope.artWork[$scope.key]) { 
              $scope.results.push(artPiece.id);
            }
          })  // forEach $scope.artItems
        
        } else {  // else if '($scope.results.length !== 0)'!
            $scope.tempResult = [];  

            $scope.artItems.forEach(function(artPiece){
              if (artPiece[$scope.key] == $scope.artWork[$scope.key] && $scope.results.indexOf(artPiece.id) != -1) {    
                $scope.results.splice($scope.results.indexOf(artPiece.id),1); // Remove selected 
                $scope.tempResult.push(artPiece.id);                          // artWork from array
              }
            })  // forEach $scope.artItems

            // Once we have searched set to true
            $scope.prevSearch = true;
            $scope.results = [];
            $scope.results = $scope.tempResult.slice(0);

        }  // end of 'else' for 'if ($scope.results.length === 0)'
     } // end of for '($scope.key in artWork)'

    console.log("Filtered $scope.results[]  : ", $scope.results);    

    // return $scope.results;

  /////////  IMAGE SELECTION  //////////
    $scope.images =[];

    // Pull filtered images out of DB.
    $scope.artItems.forEach(function(artPiece){
      if ($scope.results.indexOf(artPiece.id) !== -1) {
        $scope.images.push(artPiece); // ** CHANGED ** artPiece.
      } 
    }); // $scope.artItems.forEach
    console.log("$scope.images: ", $scope.images);

    return $scope.images; 

  };  // END of $scope.selectArtist = function (name, selection)

  $scope.filterReset = function () {
      $scope.artWork = {}; // REMOVE ALL Objects
      window.location.reload();
  }

}) // END OF CONTROLLER: 'ArtFeltController'


.factory("cart", function () {
  var cartData = [];

  return {

    addArt: function (item) {
      var addToItem = false;
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id) {
          cartData[i].quantity + 1;
          addToItem = true;
          break;
        }
      }
      if (!addToItem) {
        item.quantity = 1;
        cartData.push(item);
      }
      // console.warn(cartData);
    },

    removeArt: function (item) {
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].id === item.id) {
          item.quantity = 0;
          cartData.splice(i, 1);
          break;
        }
      }
    },

    getArt: function () {
      return cartData;
    },

    total: function () {
      var total = 0;
      for (var i = 0; i < cartData.length; i++) {
        total += cartData[i].price;
      }
      return total.toFixed(2);
    },

    quantity: function () {
      var count = 0;
      for (var i = 0; i < cartData.length; i++) {
        count += cartData[i].quantity;
      }
      return count;
    },

    clearCart: function () {
      return cartData.splice(0, cartData.length);
    },

    totalItems: function () {
      return cartData.length;
    }



  }
}) // END OF 'cart' FACTORY
