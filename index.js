module.exports = function sum(firstNumber, secondNumber) {
	
	if(arguments.length < 2) return null;

	if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
		return null;
	}

	return firstNumber + secondNumber;
};