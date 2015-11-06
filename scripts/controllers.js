angular.module('controllers', [])

.controller("ArtFeltController", function ($scope) {
  $scope.item = item;
})

.controller('ArtFeltController', function ($scope, $routeParams) {
  $scope.artItems = [
      {id: 0, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: "$" + 20000},
      {id: 1, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/indians.png", title: "indians", category: "what", price: "$" + 20000},
      {id: 2, medium:"pencil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: "$" + 20000},
      {id: 3, medium:"oil", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: "$" + 20000},
      {id: 4, medium:"water color", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: "$" + 20000},
      {id: 5, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: "$" + 20000},
      {id: 6, medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: "$" + 20000},
      {id: 7, medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: "$" + 20000},
      {id: 8, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: "$" + 20000},
      {id: 9, medium:"oil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: "$" + 20000},
      {id: 10, medium:"acrylic", artistName: "Aly Tamboura", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: "$" + 20000},
      {id: 11, medium:"pencil", artistName: "Tommy Winfrey", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: "$" + 20000},
      {id: 12, medium:"water color", artistName: "Jon Gripshover", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: "$" + 20000},
      {id: 13, medium:"pen", artistName: "Steve Lacerda", dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: "$" + 20000}
  ];

  // AREA FOR ERIN'S WORK

  // GLOBAL VARIABLES
  var tempStorArr = [];



  // THIS SHOWS AND CYCLES THE IMAGES ON THE 'Prisoners Art' BUTTON
  $scope.cycleImages = function () {
    var getDiv = $("div.initial-display");
    var indx = [];
    getDiv.children().detach();
    tempStorArr.slice(0, tempStorArr.length);
    for (var i = 0; i < 9;) {
        var rand = parseInt(Math.random() * $scope.artItems.length);
      if (getDiv.has("img")) {
        if (indx.indexOf(rand) === -1) {
          tempStorArr.push($scope.artItems[rand]);
          indx.push(rand);
          getDiv.append('<div class="display_art third"><img class="display-size click-to-get" src="' + $scope.artItems[rand].src + '" ng-click="getProfile()" /><div><p>' + $scope.artItems[rand].artistName + '</p><p>' + $scope.artItems[rand].title + ', ' + $scope.artItems[rand].medium + '</p><p>' + $scope.artItems[rand].dimensions + '</p></div></div>');
          i++;
        }
      }
    }
    console.warn(tempStorArr);
  };






  $scope.getProfile = function () {
    // var newArr = [];
    // $scope.artItems.artistName = name;
    // newArr.push(name);
    // console.warn(newArr);
      // console.warn("Yes!!!");
  };
  










  $scope.currItem = null;
  $scope.setCurrItem = function (item) {
    $scope.currItem = item;
  };
  // $scope.food = $routeParams['food'];


  // $scope.addClickToImages = function () {
  //   var getClass = $("img.click-to-get");
  //   var getBackground = $(".background");
    
  //   getClass.on("click", function (event) {
  //     var thisImg = $(this);
  //     console.warn(thisImg);
  //     $('<div').appendTo(getBackground);
  //   });

  // };








  // AREA FOR MURPH'S WORK

  

// })











})