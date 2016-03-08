//PRINT REVERSE
//set an array
var a = [1,2,3,4];
//function printReverse
function printReverse(array) {
//figure out reverse order
// array.length ; console.log ; i--;
for(var i = (array.length - 1); i >= 0 ; i--) {
//print one line at a time via console.log
	console.log(array[i]);
}
}
//***********************************************************************************************************************

var b =[1,1,1,1];

//isUniform()
//WRITE A FUNCTION WHICH TAKES AN ARRAY AS AN ARUGMENT AND RETURNS TRUE IF ALL ELEMENTS IN THE ARRARY ARE IDENTICAL
//isUniform([1,1,1,1]) = true
//isUniform([1,0,0,0]) = false
function isUniform(array) {
	var first = array[0];
	for(var i = 1; i < array.length; i++) {
		if(array[i] !== first) {
			return false;
		}
	}
	return true;
}

//***************************************************************************************************************


//sumArray
//WRITE A FUNCTION THAT ACCEPTS AN ARRAY OF NUMBERS AND RETURNS THE SUM OF ALL NUMBERS IN THE ARRAY
//sumArray([1,2,3]} = 6

var c = [1,2,5];
var d = [9,9,9,9,9,9,8,100000,9,9,9,9,9];

// function sumArray(array) {
// 	var sum = 0;
// 	for(var i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	return sum;	
// }

function sumArray(array) {
	var total = 0
	array.forEach(function(element) {
		total += element;
	});
	return total;
}


//**************************************************************************************************************

//max()
//WRITE A FUNCTION THAT ACCEPTS AN ARRAY OF NUMBERS AND RETURNS THE MAXIMIM NUMBER IN THE ARRAY
//max([1,10,2,3]) = 10

function max(array) {
	var max = array[0];
	for(var i = 1; i < array.length; i++) {
		if(array[i] > max)
			max = array[i];
	}
		return max;
	}

// function max(array) {
// 	for(var i = 0; i < array.length; i++) {
// 		return Math.max(...array);
// 	}
// 	}