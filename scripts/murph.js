  // AREA FOR MURPH'S WORK
$(document).ready(function() {
  console.warn("page loading");


  var artItems = [
	      {id: 0, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/eye.jpg", title: "Eye", category: "what", price: "$" + 20000},
	      {id: 1, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/indians.png", title: "indians", category: "what", price: "$" + 20000},
	      {id: 2, medium:"pencil", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/jack_red_cloud.jpg", title: "Jack Red Cloud", category: "what", price: "$" + 20000},
	      {id: 3, medium:"oil", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/koala.jpg", title: "Koala", category: "what", price: "$" + 20000},
	      {id: 4, medium:"water color", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/lion.jpg", title: "Lion", category: "what", price: "$" + 20000},
	      {id: 5, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/man_in_cell.png", title: "Man In Cell", category: "what", price: "$" + 20000},
	      {id: 6, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/midsummer.jpg", title: "Midsummer", category: "what", price: "$" + 20000},
	      {id: 7, medium:"oil", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ren_man.png", title: "Ren Man", category: "what", price: "$" + 20000},
	      {id: 8, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/self_portrait.jpg", title: "Self Portrait", category: "what", price: "$" + 20000},
	      {id: 9, medium:"oil", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/shark.jpg", title: "Shark", category: "what", price: "$" + 20000},
	      {id: 10, medium:"acrylic", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/ship.jpg", title: "Ship", category: "what", price: "$" + 20000},
	      {id: 11, medium:"pencil", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/two_moons.jpg", title: "Two Moons", category: "what", price: "$" + 20000},
	      {id: 12, medium:"water color", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/whales.jpg", title: "Whales", category: "what", price: "$" + 20000},
	      {id: 13, medium:"pen", artist: 1, dimensions: "12 x 24", prison: "san quentin", src: "images/artwork/woman.png", title: "Woman", category: "what", price: "$" + 20000},
	  ]; 

	 

$('.radio_select li input').on('click', function() {
	//debugger;
	var medium = "",  // may need to make globals to persist
	    size = "",
	    artist = "",
	    institution = "";
	
	var results = [];

	if (this.name === 'medium') {
		medium = this.value;		
	} else if (this.name === 'size') {
		size = this.value;
	} else if (this.name === 'artist') {
		artist = this.value;
	}  else if (this.name === 'institution') {
		institution = this.value;
	} 




	artItems.forEach(function(artPiece){
		if (artPiece.medium === medium) {

			console.log("medium")
			
			results.push(artPiece.id);
		} 

	})  // forEach artItems

	artItems.forEach(function(artPiece){
		if (artPiece.dimensions === size) {

			console.log("medium")
			
			results.push(artPiece.id);
		} 



	})  // forEach artItems


	console.log(results);

  console.log("medium :", medium);

 
})  // $('.radio_select li input'
 

}); // $(document).ready
