const Discord = require("discord.js");
const entities = require("entities");
const config = require('../config.json')


exports.run = (message, bot) => {
    entities = new Entities();
    request('http://www.punoftheday.com/cgi-bin/arandompun.pl', function(err, res, body) {
        if (err) message.channel.send("Service Offline")
        else {
            body = entities.decode(body);
            body = body.slice(16);
            body = body.slice(0, body.indexOf("'"))
            body = body.slice(0, body.length - 6)
            message.channel.send(body)
        }
    });
}




module.exports.help = {
    name: 'pun'
}