const expect = require('chai').expect;
const sum = require('../');

describe('Sum', () => {

	it('Should return null if nothing is passed', () => {
		expect(sum()).to.equal(null);
	});

	it('Should return null if only one argument is passed', () => {
		expect(sum(10)).to.equal(null);
	});

	it('Should return null if any of the argument is not number', () => {
		expect(sum('a', 10)).to.equal(null);
	});

	it('Should return null if arguments arenot number', () => {
		expect(sum('a', 'b')).to.equal(null);
	});

	it('Should return sum if correct arguments are passed', () => {
		expect(sum(10, 20)).to.equal(30);
	});

	it('Should return sum if negative numbers are passed', () => {
		expect(sum(1.5, 1.4)).to.equal(2.9);
	});

});