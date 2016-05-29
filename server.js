const fs = require('fs');
const restify = require('restify');
const skype = require('skype-sdk');
const parser = require('./lib/parser');

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
    var response = parser(`${data.content}`);
    bot.reply(response, true);
});

const server = restify.createServer();
server.post('/v1/chat', skype.messagingHandler(botService));
const port = process.env.PORT || 8000;
server.listen(port);
console.log('Listening for incoming requests on port ' + port);