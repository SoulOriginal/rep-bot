const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {

        var result = Math.floor(Math.random() * 1000)
        var random = new Discord.RichEmbed()
            .setColor('#FFFF00')
            .setDescription(`${result}`)
        message.channel.send(random)

    }
    //еще один рандом
exports.help = {
    name: 'random'
}