const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async(bot, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!hugUser) return message.channel.send("**Укажите пользователя!**").then(msg => msg.delete(5 * 1000));

    const { body } = await superagent
        .get(`https://nekos.life/api/v2/img/smug`);

    let embed = new Discord.RichEmbed()

    .setDescription(`**${message.author.username}** smuging **${message.mentions.users.first().username}**!`)
        .setImage(body.url)
        .setColor("RANDOM")
    message.channel.send(embed)
};
module.exports.help = {
    name: "smug",
    category: '-',
    aliases: ['h']
};