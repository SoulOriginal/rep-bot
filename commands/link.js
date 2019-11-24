const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconUrl)
        .setThumbnail(`https://discordemoji.com/assets/emoji/3619_discord_online.png`)
        .setColor(0xff004d)
        .addField('Ссылка для инвайта:', 'https://discordapp.com/oauth2/authorize?client_id=641767203988832277&permissions=8&scope=bot', true)

    message.channel.send(embed)
}
module.exports.help = {
    name: 'link'
}