var movies = [{
	title: "In Bruges",
	// hasWatched: "watched",
	hasWatched: true,
	rating: 5
	}, 
	{
	title: "Frozen",
	// hasWatched: "not seen",
	hasWatched: false,
	rating: 4.5
	}, 
	{	
	title: "Mad Max Fury Road",
	// hasWatched: "seen",
	hasWatched: true,
	rating: 5
	}, 
	{
	title: "Les Miserables",
	// hasWatched: "not seen",
	hasWatched: false,
	rating: 3.5
}];

// function movieDB(array) {
// 	for(var i = 0; i < array.length; i++) {
// 		console.log("You have " + array[i].hasWatched + " \"" + array[i].title + "\"" + " - " + array[i].rating + " stars");
// 	}
// }

function movieDB(array) {
array.forEach(function(element){
	var result = "You have ";
	if(element.hasWatched) {
		result += "watched ";
	} else {
		result += "not watched ";
	}
		result += "\"" + element.title + "\" - ";
		result += element.rating + " stars";
	console.log(result);
})
};

// function movieString(movie) {
// 	var result = "You have ";
// 	if(movie.hasWatched) {
// 		result += "watched ";
// 	} else {
// 		result += "not watched ";
// 	}
// 		result += "\"" + movie.title + "\" - ";
// 		result += movie.rating + " stars";
// 	return result;
// };

// function movieDB(array) {
// 	array.forEach(function(element){
// 		console.log(movieString(element));
// 	});
// }

