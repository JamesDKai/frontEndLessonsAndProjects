var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["bob", "tina"],
	add: function (x, y) {
		return x + y;
	}
}

//method is a function inside of an object
//functions are values in javascript
//methods prevent namespace collision
//now you can call add by calling obj.add(x, y);
//it's the same as console.log();
//i.e. user.delete(); post.delete(); comment.delete();

//you can user underscore.js