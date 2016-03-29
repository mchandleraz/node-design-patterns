// private methods / properties
var x = 'such private';
var y = true;

/* istanbul ignore next */
function sum (num1, num2) {
	return num1 + num2;
}

var self = module.exports = {
	someProp: 'so public',
	addFive: function addFive (num) {
		return sum(num, 5);
	},
	toggle: function toggle () {
		return y = !y;
	}
}