const Discord = module.require("discord.js");
const config = require('../config.json')
let token = config.token;
let prefix = config.prefix;
module.exports.run = async(bot, message, args) => {
    message.delete()
    const CustomArgs = message.content.slice(prefix.length + 5 + 1).split("; ")
    let chnl = bot.channels.find(c => c.id === CustomArgs[0])
    if (!chnl) return message.channel.send("Не правильный айди канала")
    if (!CustomArgs[0] | !CustomArgs[1]) return bot.send("Ошибка: используйте команду **!sayin <CHANNELID>; <Сообщение>**")
    chnl.send(CustomArgs[1])

}
module.exports.help = {
    name: "saybot",
    aliases: []
};

//Общение от имени бота в опр канале