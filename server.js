const fs = require('fs');
const restify = require('restify');
const skype = require('skype-sdk');
// const ai = require('./ai');

const botService = new skype.BotService({
    messaging: {
        botId: '28:<bot’s id="">',
        serverUrl : "https://apis.skype.com",
        requestTimeout : 15000,
        appId: process.env.APP_ID,
        appSecret: process.env.APP_SECRET
    }
});

botService.on('contactAdded', (bot, data) => {
    bot.reply(`Hello ${data.fromDisplayName}!`, true);
});

botService.on('personalMessage', (bot, data) => {
    var message = `${data.content}`;
    var reply = 'what?';

    if(message == 'hello') {
        reply = 'Oh hi there';
    } else if(message == 'goodbye') {
        reply = 'Bye, and see you soon';
    } else if(message == 'help') {
        reply = `##### Welcome to help menu. #####
You can see the list of commmands below:
hello - returns a greeting
goodbye - returns a greeting`;
    }

    bot.reply(reply, true);
});

const server = restify.createServer();
server.post('/v1/chat', skype.messagingHandler(botService));
const port = process.env.PORT || 8000;
server.listen(port);
console.log('Listening for incoming requests on port ' + port);

// `Hey ${data.from}.  (hug).`