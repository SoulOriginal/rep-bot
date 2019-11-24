const Discord = module.require("discord.js");
const superagent = require("superagent");


module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first() || message.author;


    let patUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!patUser) return message.channel.send("**Укажите пользователя!**").then(msg => msg.delete(15 * 1000));




    let { body } = await superagent
        .get("https://nekos.life/api/v2/img/pat");

    let embed = new Discord.RichEmbed()

    .setDescription(`**${message.author.username}** patted **${message.mentions.users.first().username}**! `)
        .setImage(body.url)
        .setColor("RANDOM")
    message.delete().catch();
    message.channel.send(embed);
}


module.exports.help = {
    name: 'pat',
};