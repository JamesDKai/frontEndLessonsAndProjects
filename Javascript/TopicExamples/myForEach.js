function myForEach(array, method) {
	//loop through the array
	for(var i = 0; i < array.length; i++) {
	// call method for each item in array
	method(array[i]);
	}
};

Array.prototype.myForEach = function(method) {
	for(var i = 0; i < this.length; i++){
		method(this[i]);
	}
};

var fruits = ["apple", "banana", "orange", "grape", "watermelon"];

