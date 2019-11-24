const Discord = require("discord.js");
module.exports.run = async(bot, message, args) => {
    const errembed = new Discord.RichEmbed()
        .setTitle("ERROR:Укажите смайлик!")
        .setColor("#FF0000");

    var args = args.join(" ")
    if (!args) return message.channel.send(errembed)
    var nint = args.replace(/[a-z A-Z а-я А-Я]/g, '');
    let preemoji = ((nint).split(":"))
    let emoji = ((preemoji)[2].split(">"))[0]
    if (!message.guild.emojis.find(x => x.id == emoji).url) return;

    const embed = new Discord.RichEmbed()
        .setImage(message.guild.emojis.find(x => x.id == emoji).url)

    message.channel.send(embed);
}

exports.help = {
    name: "emote"
};