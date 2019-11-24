const db = require('quick.db');

const Discord = require('discord.js');


const ms = require('ms');

const currency = require('currency-formatter');



module.exports.run = async(bot, message, args) => {
    let member = message.mentions.members.first();
    if (!member) member = message.member;
    let amount = Math.floor(Math.random() * 500) + 1;
    let cooldown = 12000000
    let lastWeek = await db.fetch(`lastWeek_${message.author.id}`)
    if (lastWeek !== null && cooldown - (Date.now() - lastWeek) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastWeek))
        let lastDailyEmbed = new Discord.RichEmbed()
            .setTitle(`Вы недавно работали , вам надо подаждать ${timeObj}`)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastWeek_${message.author.id}`, Date.now());
        let embed = new Discord.RichEmbed()
            .setAuthor(`${message.author.tag}`)
            .setDescription(`${message.author}, после работы, вам выдали зарплату в кол-ве ${amount} !`)
        message.channel.send(embed)
        db.add(`balance_${member.guild.id}_${member.id}`, amount);
    }
}


module.exports.help = {
    name: 'kazino'
}