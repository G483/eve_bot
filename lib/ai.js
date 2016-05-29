// This is crap figure how to actually do it

	switch(message) {
		case 'help':
    		var response = dictionary.help;
    		break;
		case 'hello':
    		var response = dictionary.greetings.hello;
    		break;
		default:
    		var response = dictionary.error.command;
	}