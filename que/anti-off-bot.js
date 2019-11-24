module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js');
    var http = require("http")
    var express = require('express');
    var app = express();

    //antioff
    app.get("/", (request, response) => {
        console.log("You're banned!");
        response.sendStatus(200);
    });

    // Это позволит боту работать 24/7
    app.listen(process.env.PORT);
    setInterval(() => {
        http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
    }, 280000);

    bot.login(process.env.TOKEN);
}