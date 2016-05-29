// This class should filter the message into commands and parameters
// with the help of dictionary.js

const dictionary = require('./dictionary');
cosnt ai = require('./ai');

var parser = function(message) {
	
	var message = message;
	// Word so bizzare for something so common that I had to use it
	var command;
	var parameter = [];
	var response;
	
	// LOGIC
	// first letter is the command
	// second word or words are parameter/s
	// 'space' is the delimiter
	
	return response;
}

module.exports = parser;