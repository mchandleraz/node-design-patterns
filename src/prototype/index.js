module.exports = Person;

function Person(name, age, hobbies) {
	this.name = name;
	this.age = age;
	this.hobbies = hobbies;
}

Person.prototype.greet = function(greeting) {
	if (!greeting) {
		throw new Error('greeting param missing');
	}
	return greeting + ". I'm " + this.name;
};

Person.prototype.getHobbies = function() {
	var hobbiesString = '';
	if (this.hobbies.length > 1) {
		for (var i = this.hobbies.length - 1; i >= 0; i--) {
			hobbiesString += ', ' + this.hobbies[i];
		}
	} else {
		hobbiesString = this.hobbies[0];
	}
	return 'i ' + hobbiesString;
};