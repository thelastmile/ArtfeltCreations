  // AREA FOR MURPH'S WORK
  console.warn("page loading");

  $scope.results = [];
  $scope.tempResult = [];
  $scope.prevSearch = false; // we need to know if we have searched before

  $scope.artWork = {	medium: "",
                  dimensions: "",
                  artistName: "",
                  prison: ""
                };
  $scope.artItems = [
	      {id: 0, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: "$" + 20000},
	      {id: 1, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/indians.png", title: "indians", category: "what", price: "$" + 20000},
	      {id: 2, medium:"pencil", artistName: "Jon Gripshover", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: "$" + 20000},
	      {id: 3, medium:"oil", artistName: "Jon Gripshover", dimensions: "5 x 7", prison: "san quentin", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: "$" + 20000},
	      {id: 4, medium:"water color", artistName: "Steve Laceda", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: "$" + 20000},
	      {id: 5, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: "$" + 20000},
	      {id: 6, medium:"acrylic", artistName: "Aly Tamboura", dimensions: "11 x 7", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: "$" + 20000},
	      {id: 7, medium:"oil", artistName: "THX1138", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: "$" + 20000},
	      {id: 8, medium:"acrylic", artistName: "Tommy Winfrey", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: "$" + 20000},
	      {id: 9, medium:"oil", artistName: "Tommy Winfrey", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: "$" + 20000},
	      {id: 10, medium:"acrylic", artistName: "Aly Tamboura", dimensions: "11 x 17", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: "$" + 20000},
	      {id: 11, medium:"pencil", artistName: "Tommy Winfrey", dimensions: "5 x 7", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: "$" + 20000},
	      {id: 12, medium:"water color", artistName: "Jon Gripshover", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: "$" + 20000},
	      {id: 13, medium:"pen", artistName: "Steve Laceda", dimensions: "2 x 3", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: "$" + 20000},
	      {id: 14, medium:"pen", artistName: "Steve Laceda", dimensions: "7 x 9", prison: "folsom", src: "images/artwork/woman.png", title: "XWoman", category: "what", price: "$" + 20000},
	      {id: 15, medium:"oil", artistName: "Tommy Winfrey", dimensions: "11 x 17", prison: "tracy", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: "$" + 20000},
	      {id: 16, medium:"acrylic", artistName: "Aly Tamboura", dimensions: "11 x 17", prison: "soledad", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: "$" + 20000},
	      {id: 17, medium:"pencil", artistName: "Tommy Winfrey", dimensions: "5 x 7", prison: "pelican bay", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: "$" + 20000},
	      {id: 18, medium:"water color", artistName: "Jon Gripshover", dimensions: "9 x 11", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: "$" + 20000},
	      {id: 19, medium:"pen", artistName: "Steve Laceda", dimensions: "2 x 3", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: "$" + 20000},
	      {id: 20, medium:"pen", artistName: "Joe Smith", dimensions: "7 x 9", prison: "san quentin", src: "images/artwork/woman.png", title: "XWoman", category: "what", price: "$" + 20000}
	  ]; 



////////// ARTIST SELECTION //////////////

	$scope.artist = {};
	$scope.artistArr =[];

	// Pull artist out of DB and add to selection on page
	$scope.artItems.forEach(function(artPiece){

		if (!$scope.artist.hasOwnProperty(artPiece.artistName)) {
			$scope.artistArr.push(artPiece.artistName)
			$scope.artist[artPiece.artistName] = true; // prevents duplicates
		}	
	}); // $scope.artItems.forEach

	$scope.artistArr.sort();

	// Add artist to Select By Artist section on page
	$scope.artistArr.forEach(function(indvidualArtist){
		$scope.$newArtist = $('<option>' + indvidualArtist + '</option>');
		
		$newArtist.addClass('three-quarter');
		// console.log('newArtist: ', $newArtist);
		$newArtist.val(indvidualArtist);
		$('.selectByArtist select').append($newArtist);
	})

 	////////////// INSTITUTIONS SELECTION ////////////////

	$scope.institutions = {};
	$scope.institutionsArr = [];

	// Pull institutions out of DB and add to selectin on page
	$scope.artItems.forEach(function(artPiece){

		if (!$scope.institutions.hasOwnProperty(artPiece.prison)) {
			$scope.institutionsArr.push(artPiece.prison)
			$scope.institutions[artPiece.prison] = true; // prevents duplicates
		}	
	}); // $scope.artItems.forEach

	$scope.institutionsArr.sort();

	// Add institutions to Select By Institution section on page
	$scope.institutionsArr.forEach(function(institution){
		var newInstitution = $('<option>' + institution + '</option>');
		
		newInstitution.addClass('three-quarter');
		newInstitution.val(institution);
		$('.selectByInstitution select').append(newInstitution);
	});

////////////////  Filter Section  ///////////////////

// This is a filter that selects art work, user selected, 
// by medium, by size, by artist and by institution.
$scope.selectArtist = function () {

	console.log("Pre-Filtered $scope.results[]  : ", $scope.results);

	// If 'artWork[this.name]' is not equal to "" 
	// that means we are re-selecting a selection
	// from the list. In that case we want to re-initialize 
	// the selection filter by setting $scope.results = [] and 
	// resetting 'prevSearch' to false.

	if ($scope.artWork[this.name] !== "") {
		$scope.results = [];
		$scope.prevSearch = false;
	}

	// If 'Select Artist' or 'Select Institution' Information <option> is choosen 
	// from either selection list then we can ignore it.
	if (this.value === "choose") {
		return;
	}

	$scope.artWork[this.name] = this.value;

	$scope.key;

	for ($scope.key in $scope.artWork) {  // check all selections

		// Only filter if artWork[key] has a value
		if ($scope.artWork[key] !== "") {

			// If we have not previously made a selection
			// we will enter this block or if '$scope.results' and 
			// 'prevSearch' have been reset.
			if ($scope.results.length == 0 && $scope.prevSearch == false) {
				$scope.artItems.forEach(function(artPiece){
					if (artPiece[key] == $scope.artWork[key]) {	
						$scope.results.push(artPiece.id);
					}
				})  // forEach $scope.artItems
		  
			} else {            // else if '($scope.results.length !== 0)'!
					$scope.tempResult = [];  

					$scope.artItems.forEach(function(artPiece){
						if (artPiece[key] == $scope.artWork[key] && $scope.results.indexOf(artPiece.id) != -1) {		
							$scope.results.splice($scope.results.indexOf(artPiece.id),1);	// remove selected 
							$scope.tempResult.push(artPiece.id);						        // artwork from array
						}
					})  // forEach $scope.artItems

					// Once we have searched set to true
					$scope.prevSearch = true;
					$scope.results = [];
					$scope.results = $scope.tempResult.slice(0);

			}  // end else if ($scope.results.length === 0)
		} //  end if (key !== in artWork)
	} // end for ($scope.key in artWork)

  console.log("Filtered $scope.results[]  : ", $scope.results);
  return $scope.results;

//////////  IMAGE DISPLAY  ////////////	  

	// $scope.images = {};
	// $scope.imagesArr =[];

	// // Remove original images
	// $('.one-full.artGallery').children().detach();

	// // Pull filtered images out of DB and display them on the page.
	// $scope.artItems.forEach(function(artPiece){

	// 	if ($scope.results.indexOf(artPiece.id) !== -1) {
	// 		imagesArr.push(artPiece.src);
	// 		images[artPiece.src] = true; // prevents duplicates

	// 		$scope.$imgDiv = $('<div class="third"></div>');
	// 		$scope.$singleArtPiece = $('<img class="singleGalleryPic">');
	// 		$singleArtPiece.attr('src', artPiece.src);
	// 		$imgDiv.append($singleArtPiece);			
	// 		$('.one-full.artGallery').append($imgDiv);
	// 	}	
	// }); // $scope.artItems.forEach

	// console.log("imagesArr: ", imagesArr);

//////////  End IMAGE DISPLAY  ////////////


}  // function selectArtist

$('.radio_select li input').on('click', $scope.selectArtist);
$('.selectByArtist select').on('click', $scope.selectArtist);
$('.selectByInstitution select').on('click', $scope.selectArtist);
$('.quarter.refresh_btn').on('click', function() {
	window.location.reload();
});




