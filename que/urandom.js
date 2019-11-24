const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let random = new Discord.RichEmbed()
        .setColor("#33353C")
    if (args[0] == "channel") {
        var channel = message.guild.channels.random();
        random.setDescription(`**Канал:** ${channel}\n**ID Канала:** ${channel.id}`)
        bot.send(random)
    } else if (args[0] == "user") {
        var user = message.guild.members.random();
        random.setDescription(`**Пользователь: ${user.user}**\n**ID Пользователя:**${user.id}`)
        bot.send(random)
    }

}
module.exports.help = {
    name: "urandom"
}