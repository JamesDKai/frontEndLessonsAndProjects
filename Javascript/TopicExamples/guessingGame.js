var num = 7;

// var guess = Number(prompt("What is your guess?"));

var stringGuess = prompt("What is your guess?");
var guess = Number(stringGuess);

if(guess % 1 !== 0) {
	prompt("That is not a number. Pleae enter a number!");
}

else if(guess === num)  {
	alert("Bravo! You are correct!");
}

else if(guess < num) {
	alert("Too low... Guess again.");
}

else {
	alert("Too high... guess again.");
}