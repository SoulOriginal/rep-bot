exports.run = (bot, message, args) => {
    const Discord = require('discord.js');
    const config = require('../config.json')


    let pageDesc = ['●▬▬▬▬▬▬▬▬▬「 :middle_finger:  DARKbot   :middle_finger:  」▬▬▬▬▬▬▬▬▬●', 'Second', 'Third']

    let pages = ['• Administration \n • Reactions \n • CastomReactions \n • Games \n • NSFW \n • Utility \n • Fun \n • Arts'];

    let page = 1;
    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page - 1])
        .setTitle(pageDesc[page - 1])
        .setThumbnail(bot.displayAvatarURL)
        .setFooter(`Для получения команд состоящих  в модуле пропишите название модуля.\nПример:[prefix]Administration`)


    message.channel.send(embed).then(msg => {
        msg.react('⏪').then(r => {
            msg.react('⏩')
            const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page - 1]);
                embed.setTitle(pageDesc[page - 1])
                embed.setFooter(`Page ${page} of ${pages.length}`)
                embed.setThumbnail(bot.displayAvatarURL)
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page - 1])
                embed.setTitle(pageDesc[page - 1])
                embed.setFooter(`Page ${page} of ${pages.length}`)
                embed.setThumbnail(bot.displayAvatarURL)
                msg.edit(embed)
            })
        })
    })
}
module.exports.help = {
    name: "modules",

};



//https://discordapp.com/channels/496338755456598016/568035496282816522/570882516437696512