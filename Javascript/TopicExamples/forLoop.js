console.log("Print hello one letter at a time.");

var str = "hello";

for(var x = 0; x < str.length; x++) {
	console.log(str[x]);
}

console.log("Print all numbers between -10 and 19");

// var num = -10;

// while(num <= 19) {
// 	console.log(num);
// 	num++;
// }

for(x = -10; x <= 19; x++) {
	console.log(x);
}

console.log("Print all even numbers between 10 and 40");

// var num = 10;

// while(num <= 40) {
// 	console.log(num);
// 	num += 2;
// }

for(x = 10; x <= 40; x++) {
	if(x % 2 === 0) {
		console.log(x);
	}
}


console.log("Print all odd numbers between 300 and 333");

// var num = 300;

// while(num <= 333) {
// 	if((num % 2) !== 0) {
// 		console.log(num);
// 	}
// 	num++;
// }

for(x = 300; x <= 333; x++) {
	if((x % 2) !== 0) {
		console.log(x);
	}
}

console.log("Print all numbers between 5 and 50 that's divisible by 5 AND 3.");

// var num = 5;
// while(num <= 50) {
// 	if((num % 3 === 0) && (num % 5 === 0)) {
// 		console.log(num);
// 	}
// 	num++;
// }

for(x = 5; x <= 50; x++) {
	if((x % 3) === 0 && (x % 5) === 0) {
		console.log(x);
	}
}