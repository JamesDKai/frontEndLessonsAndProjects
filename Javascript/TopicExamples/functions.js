// function isEven (x) {
// 	if(x % 2 === 0) {
// 		return true;
// 	}
// 	return false;
// }

function isEven (num) {
	return num % 2 === 0;
}

// function factorial(num)
// {
//     // If num is 0, its factorial is 1.
//     // Else, call the recursive procedure
//     if (num === 0) {
//         return 1;
//     }else {
//         return (num * factorial(num - 1));
//     }
// }

function factorial(num) {
	// define a result variable
	var result = 1;
	// calculate factorial and store value in result
	for(var i = 2; i <= num; i++) {
		result *= i
	}
	// return the result variable
	return result;
}

function kebabToSnake (str) {
	// replace all "-" with "_"
	var newStr = str.replace(/-/g , "_");
	// return store
	return newStr;
}