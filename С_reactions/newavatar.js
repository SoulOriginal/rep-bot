const Discord = module.require("discord.js");
const superagent = require("superagent");


module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first() || message.author;






    let { body } = await superagent
        .get("https://nekos.life/api/v2/img/avatar");

    let embed = new Discord.RichEmbed()

    .setDescription(`**${message.author.username} avatar for you!** `)
        .setImage(body.url)
        .setColor("RANDOM")
    message.delete().catch();
    message.channel.send(embed);
}


module.exports.help = {
    name: 'newavatar',
};