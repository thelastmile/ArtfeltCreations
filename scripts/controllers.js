"use strict";
angular.module('artFeltApp', ['ngRoute', 'routes', 'controllers'])

angular.module('controllers', [])

.controller('ArtFeltController', function ($scope, cart) {
   $scope.artItems = [
      {id: 24, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "S. Lacerda", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/tree_I.png", title: "Tree_I", category: "what", price: 2550},
      {id: 13, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "J. Gripshover", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/butterfly.png", title: "Butterfly", category: "what", price: 350},
      {id: 25, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "S. Lacerda", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/tree_II.png", title: "Tree II", category: "what", price: 125},
      {id: 2, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pen", artistName: "S. Lacerda", dimensions: "9 x 11", prison: "alcatraz", src: "images/artwork/woman.png", title: "Woman", category: "what", price: 2000},
      {id: 16, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "T. Winfrey", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: 100},
      {id: 8, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "T. Winfrey", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: 750},
      {id: 4, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "T. Winfrey", dimensions: "11 x 17", prison: "pelican bay", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: 1500},
      {id: 3, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "J. Gripshover", dimensions: "2 x 3", prison: "folsom", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: 750},
      {id: 5, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "A. Tamboura", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: 2000},
      {id: 6, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "T. Winfrey", dimensions: "5 x 7", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: 450},
      {id: 7, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "T. Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: 150},
      {id: 9, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "A. Tamboura", dimensions: "5 x 7", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: 900},
      {id: 10, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "T. Winfrey", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: 250},
      {id: 11, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "J. Gripshover", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: 625},
      {id: 12, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "J. Gripshover", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/abstract.png", title: "Abstract", category: "what", price: 250},
      {id: 14, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Wagner", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/dolphin.png", title: "Dolphin", category: "what", price: 2500},
      {id: 1, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "J. Gripshover", dimensions: "7 x 9", prison: "soledad", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: 20000},
      {id: 15, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Wagner", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/eagles.png", title: "Eagles", category: "what", price: 650},
      {id: 0, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "T. Winfrey", dimensions: "2 x 3", prison: "san quentin", src: "images/artwork/indians.png", title: "Indians", category: "what", price: 500},
      {id: 17, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pen", artistName: "Wagner", dimensions: "2 x 3", prison: "san quentin", src: "images/artwork/fairy.png", title: "Fairy", category: "what", price: 1750},
      {id: 18, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pen", artistName: "Wagner", dimensions: "5 x 7", prison: "san quentin", src: "images/artwork/girl_with_scarf.png", title: "Girl with Scarf", category: "what", price: 2000},
      {id: 19, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "A. Tamboura", dimensions: "2 x 3", prison: "san quentin", src: "images/artwork/henrys_block_print.png", title: "Henrys Block Print", category: "what", price: 100},
      {id: 20, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "J. Gripshover", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: 550},
      {id: 21, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "Wagner", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/lower_yard.png", title: "Lower Yard", category: "what", price: 575},
      {id: 22, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "T. Winfrey", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/man_with_hat.png", title: "Man with Hat", category: "what", price: 275},
      {id: 23, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "S. Lacerda", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/still_life.png", title: "Still Life", category: "what", price: 1550},
      {id: 26, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "J. Evans", dimensions: "18 x 24", prison: "san quentin", src: "images/artwork/Bird.png", title: "Bird", category: "what", price: 50},
      {id: 27, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium: "water color", artistName: "E. Hall", dimensions: "8 x 8", prison: "san quentin", src: "images/artwork/ComingHome.jpg", title: "Coming Home", category: "what", price: 1750},
      {id: 28, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "S. Smith", dimensions: "20 x 16", prison: "san quentin", src: "images/artwork/DarkDay.jpg", title: "Dark Day", category: "what", price: 2000},
      {id: 29, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "P. Stauffer", dimensions: "4 x 36", prison: "san quentin", src: "images/artwork/DragonEyes.jpg", title: "Dragon Eyes", category: "what", price: 100},
      {id: 30, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "J. Locke", dimensions: "20 x 16", prison: "san quentin", src: "images/artwork/Griz.png", title: "Griz", category: "what", price: 550},
      {id: 31, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "A. Barboza", dimensions: "10 x 8", prison: "san quentin", src: "images/artwork/HowlingPraises.jpg", title: "Howling Praises", category: "what", price: 575},
      {id: 32, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "D. Crookes", dimensions: "20 x 16", prison: "san quentin", src: "images/artwork/LondonLights.jpg", title: "London Lights", category: "what", price: 275},
      {id: 33, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "F. Tinsley", dimensions: "16 x 12", prison: "san quentin", src: "images/artwork/ManOfSorrows.jpg", title: "Man Of Sorrows", category: "what", price: 1550},
      {id: 34, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "T. Kennedy", dimensions: "16 x 20", prison: "san quentin", src: "images/artwork/MedievalSteamPoweredWestBlockBlues.jpg", title: "Steam Powered", category: "what", price: 50},
      {id: 35, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium: "acrylic", artistName: "B. Fowler", dimensions: "18 x 24", prison: "san quentin", src: "images/artwork/Roger2.jpg", title: "Roger2", category: "what", price: 1750},
      {id: 36, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "A. Covey", dimensions: "12 x 16", prison: "san quentin", src: "images/artwork/Seascape.jpg", title: "Seascape", category: "what", price: 2000},
      {id: 37, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"pencil", artistName: "E. Hall", dimensions: "7 x 8", prison: "san quentin", src: "images/artwork/SkyScene.jpg", title: "Sky Scene", category: "what", price: 100},
      {id: 38, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "K. Christenen", dimensions: "16 x 12", prison: "san quentin", src: "images/artwork/SonOfThePath.jpg", title: "Son Of The Path", category: "what", price: 550},
      {id: 39, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "P. Stauffer", dimensions: "20 x 16", prison: "san quentin", src: "images/artwork/Steve.png", title: "Steve", category: "what", price: 100},
      {id: 40, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "R. Gilstrap & G. Harrell", dimensions: "12 x 17 x 6.5", prison: "san quentin", src: "images/artwork/TheCell.jpg", title: "The Cell", category: "what", price: 550},
      {id: 41, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"oil", artistName: "P. Stauffer", dimensions: "9 x 20 x 15", prison: "san quentin", src: "images/artwork/TheCityofNewHope-USA.jpg", title: "City of New Hope", category: "what", price: 100},
      {id: 42, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "Mwasi", dimensions: "24 x 36", prison: "san quentin", src: "images/artwork/TightropeOfHope.jpg", title: "Tight Rope Of Hope", category: "what", price: 550},
      {id: 43, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"acrylic", artistName: "J. Evans", dimensions: "12 x 16", prison: "san quentin", src: "images/artwork/redSkyEnd.jpg", title: "Red Sky End", category: "what", price: 550},
      {id: 44, quantity: 0, description: "DOM Level 1 became a W3C recommendation in October 1998. It consisted of two modules:the DOM Core, which provided a way to map the structure of...", medium:"water color", artistName: "M. Stanley", dimensions: "8 x 6 x 19", prison: "san quentin", src: "images/artwork/WaveBox.jpg", title: "Wave Box", category: "what", price: 550}
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
    var getDiv = $("div.initial_display");
    var indx = [];

    getDiv.children().detach();
    // $scope.randItems.splice(0, 11);

    for (var i = 0; i < 45;) {
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
  // console.warn("page loading in Angular Controller");

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

  // This is a filter function that selects art work, user selected, 
  // by medium, by dimensions, by artistName and by prison.

  $scope.selectArtist = function (name, selection) {

    // console.log("Pre-Filtered $scope.results[]  : ", $scope.results);


    // console.log("selection name/$scope.key: ", name);
    // console.log("filter by selection: ", selection);

    // If 'Select Medium', 'Select Size', Select Artist',  or 'Select Institution' 
    // Information <option> is choosen from either selection list then we can ignore it.
    if (selection === "choose" || selection === undefined) {
      return;
    }

    // If 'artWork[name]' exist that means we
    // are re-selecting a selection from the list.
    // In that case we want to re-initialize 
    // the selection filter by setting $scope.results = [] and 
    // re-setting 'prevSearch' to false.

    if ($scope.artWork[name]) {
      $scope.results = [];
      $scope.prevSearch = false; 
    }

    $scope.artWork[name] = selection;

    for ($scope.key in $scope.artWork) {  // Filter all selections

      // console.log("$scope.artWork[$scope.key]:", $scope.artWork[$scope.key]);

      // This if() block is needed to get the RESET SELECTIONS <options> to
      // work correctly after the select by Medium, Size, Artist, and 
      // Institution selections have been reset.
      if ($scope.artWork[$scope.key] !== "choose") {       

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
      }  // end if (choose) for Reset         
     } // end of for '($scope.key in artWork)'

    // console.log("Filtered $scope.results[]  : ", $scope.results);    

    // return $scope.results;

  /////////  IMAGE SELECTION  //////////
    $scope.images =[];

    // Pull filtered images out of DB.
    $scope.artItems.forEach(function(artPiece){
      if ($scope.results.indexOf(artPiece.id) !== -1) {
        $scope.images.push(artPiece); // ** CHANGED ** artPiece.
      } 
    }); // $scope.artItems.forEach
    // console.log("$scope.images: ", $scope.images);

    return $scope.images; 

  };  // END of $scope.selectArtist = function (name, selection)

  $scope.filterReset = function () {
      for (var key in $scope.artWork) {        
        $scope.artWork[key] = "choose";
      };             
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
