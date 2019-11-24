module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')



    //Приветствие новых участников.(код не мой)
    bot.on('guildMemberAdd', member => {
            var channel = member.guild.channels.get('642428016718512128')
            channel.send(`Добро пожаловать на сервер, ${member}!`)
        })
        //Приветствие новых участников на сервер и в ЛС(код не мой)
    bot.on('guildMemberAdd', member => {
        var channel = member.guild.channels.get('642428016718512128')
        channel.send(`Добро пожаловать на сервер, ${member}!`)
        member.send(`Добро пожаловать`) //Бот будет в ЛС писать "Добро пожаловать"
    })
}