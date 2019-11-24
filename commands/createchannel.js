const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    message.delete()
    let type = ["text", "voice"]

    if ((!message.member.hasPermission("MANAGE_MESSAGES")) && message.member.id !== "482238279698350081")
        return message.channel.send('Недостаточно прав на использование команды!')

    if (type.indexOf(args[1]) == -1) return message.channel.send("Я не могу создать канал с таким типом, используйте !createchannel <ИМЯ> <text или voice>")
    if (!args[0] | !args[1]) return message.channel.send("У вас нет одного из значений!")
    message.guild.createChannel(args[0], args[1])
};


module.exports.help = {
    name: "createchannel",
    aliases: []
};