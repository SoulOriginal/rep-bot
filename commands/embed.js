const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var m = args.join(' ');
    if (!m) return message.reply('Нужен контент для вставки ...');
    const embed = new Discord.RichEmbed()
        .setDescription(m)
        .setColor([114, 137, 218]);
    message.delete()
    message.channel.send({ embed });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
};

exports.help = {
    name: 'embed',
    category: 'Miscelaneous',
    description: 'Embeds something',
    usage: 'embed [description]'
};