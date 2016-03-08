var age = prompt("How old are you?");

var modulo = age % 2;

var sRoot = Math.sqrt(age);


if(age === 21) {
	alert("Happy 21st Birthday!");
}

else if ((sRoot !== 0) && (sRoot % 1 === 0)) {
	alert("Perfect square!")
}

else if(modulo !== 0) {
	alert("Your age is odd!");
}
	
else if(age <= 0) {
	alert("You don't know what you're talking about, do you?");
}

else {
	alert("That's a fine age to be.");
}
