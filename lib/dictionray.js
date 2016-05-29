var dictionary = {
	// This object contains 

	// Help message containing list of available commands
	'help' : `##### Welcome to help menu. #####
You can see the list of commmands below:
hello - returns a greeting
goodbye - returns a greeting`,
	
	// List of all available commands and their regex
	'commands' : {
		'math' 'mathRegex',
		'youtube' 'youtubeRegex'
	}

	// Generic greeting responses
	'greetings' : {
		'hello': 'Oh, hi there ',
		'bye' : 'Bye, hope to see you soon (wave) ',
	},

	'errors' {
		'commandNotFound' : 'I did not understand that, try again.',
	}

}

module.exports = dictionary;