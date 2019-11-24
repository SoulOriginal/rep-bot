const Discord = require('discord.js');
module.exports.run = async(Discord, bot, message, args) => {
    if (message.author.id != "482238279698350081") return message.channel.send("Ты не мой хозяин((")
    try {
        await message.channel.send("Я выключаюсь мой повелитель")
        process.exit()
    } catch (e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}
module.exports.help = {
    name: 'shotdown',
    aliases: []
}