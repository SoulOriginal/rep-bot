const Discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    if ((!message.member.hasPermission("BAN_MEMBERS")) && message.member.id !== "482238279698350081")
        return message.channel.send('У вас нeт прав!')
    let member = args.join(" ");
    if (!member) return message.channel.send(`Вы не указали ID пользователя которого нужно разбанить!`);
    if (member) {
        message.guild.unban(member);
        return message.channel.send(`**Вы** успешно разбанили пользователя с ID ${member}!`);
    }
};
module.exports.help = {
    name: "unban"
};