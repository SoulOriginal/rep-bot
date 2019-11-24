const db = require('quick.db');
const conf = require("../config.json")
const Discord = require('discord.js')
exports.run = (client, message, args) => {

    let p = ''
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':warning: | У вас недостаточно прав для изменения префикса!');
    if (!args.join(' ')) return message.channel.send('Укажите название префикса')

    if (args.join(' ').length > 4) return message.react("❌")
    db.set(`prefix_${message.guild.id}`, args.join(' '))
        .then(i => {
            message.channel.send(`:white_check_mark: | Префикс был успешно изменен на \`${i}\``);
        })
}


module.exports.help = {
    name: 'prefix'
}