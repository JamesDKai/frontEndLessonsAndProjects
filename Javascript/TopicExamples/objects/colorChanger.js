//EXAMPLE***
// var body = document.querySelector("body"); // Select
// var isBlue = false;

// setInterval (function() {
// 	if (isBlue) {
// 		body.style.background = "white";
// 	}
// else {
// 	body.style.background = "#3498db";
// }
// 	isBlue = !isBlue;
// }, 1000);

// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
// 	if (isPurple) {
// 		document.body.style.background = "white";
// 	} else {
// 		document.body.style.background = "purple";
// 	}
// 	isPurple = !isPurple; //not operator. You can also manually set isPurple true or false in the if and else statement.
// });

var button = document.querySelector("button");
var isPurple = false;

button.addEventListener("click", function() {
		document.body.classList.toggle("purple");
});