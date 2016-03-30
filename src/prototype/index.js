module.exports = Person;

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function(greeting) {
	if (!greeting) {
		throw new Error('greeting param missing');
	}
	return greeting + ". I'm " + this.name;
};