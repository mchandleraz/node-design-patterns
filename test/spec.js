var should 		= require('chai').should();
var expect 		= require('chai').expect;

var singleton 	= require('../src/singleton');
var prototype 	= require('../src/prototype');

describe('Singleton', function () {
	it('should return an object', function() {
		expect(singleton).to.be.an('object');
	});
	describe('private property', function () {
		it('should return undefined when calling singleton.x', function() {
			expect(singleton.x).to.equal(undefined);
		});
		it('should return undefined when calling singleton.y', function() {
			expect(singleton.y).to.equal(undefined);
		});
	});
	describe('private method', function () {
		it('should return TypeError on singleton.sum()', function() {
			expect(function() {
				singleton.sum(1, 2);
			}).to.throw(TypeError);
		});
	});
	describe('public property', function () {
		it('should return a string for someProp', function () {
			expect(singleton.someProp).to.equal('so public');
		});
	});
	describe('public methods', function() {
		describe('#addFive', function() {
			it('should increment a number by 5', function () {
				expect(singleton.addFive(3, 5)).to.equal(8);
			});
		});
		describe('#toggle', function() {
			it('should toggle private property "y"', function() {
				expect(singleton.toggle()).to.equal(false);
			})
		})
	});
});

describe('Prototype', function () {
	it('should return a function', function() {
		expect(prototype).to.be.a('function');
	});
});