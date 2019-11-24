const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    try {
        if ((!message.member.hasPermission("MANAGE_MESSAGES")) && message.member.id !== "482238279698350081")
            return message.channel.send("**У вас нет прав для выполнения данной команды.**");
        if (args[0] > 100) return message.channel.send("Укажите значение меньше 100");
        if (args[0] < 1) return message.channel.send("Укажите значение больше 1");
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`**Удалено ${args[0]} сообщений.**`).then(msg => msg.delete(5 * 1000));
        });
    } catch (err) {
        console.log(err)
    }
}




module.exports.help = {
    name: "clear"
};