module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js');
    const config = require('../config.json')
    bot.on("message", message => {
        if (message.content.startsWith('!Объявление')) {
            let rest_of_the_string = message.content.slice('!Объявление'.length);
            let array_of_arguments = rest_of_the_string.split(',');
            message.delete();

            let embed = new Discord.RichEmbed()
                .setTitle(array_of_arguments[0])
                .setDescription(array_of_arguments[1])
                .setImage(array_of_arguments[2])
                .setColor(0x36393E)

            message.channel.send({ embed });


        }
    })
}
module.exports.help = {
    name: "test"
};