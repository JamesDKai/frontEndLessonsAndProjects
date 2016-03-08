var person = {
	name: "Bob",
	age: 21,
	city: "LA"
};

//Items in objects ae in no particular order
//To retrieve data from objects you can do one of two things:
//Bracket notation -- console.log(person["name"]);
//OR
//Dot notation -- console.log(person.name);
//*** You can't use dot notation when the object key starts with a number  if it has spaces between words
//you can lookup using a variable with bracket notation
	//var string = "name"
	//someObjects[str] -- it evaluate str and looks for "name"


//To reassign values

person["age"] +=1;

person.city = "London";


