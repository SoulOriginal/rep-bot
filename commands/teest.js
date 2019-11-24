const Discord = module.require('discord.js');


module.exports.run = async(bot, message, args) => {

    let pageTitle = ['●▬▬▬▬▬▬▬▬▬▬▬▬「 :l1: DARKbot  :l2: 」▬▬▬▬▬▬▬▬▬▬▬▬●', 'Second page', 'Third page'];


    let pageDesc = ['one!', 'Second', 'Third'];
    let page = 1;

    const embed = new Discord.RichEmbed() // Define a new embed
        .setAuthor("Help Menu", message.author.displayAvatarURL, null)
        .setDescription(pageDesc[page - 1])
        .setTitle(pageTitle[page - 1])
        .setColor(16752128)
        .setFooter("Help | Page " + page + " of " + pageTitle.length, process.env.BOT_ICON)

    message.channel.send(embed).then(msg => {

        msg.react('⬅')
        msg.react('➡')

        // Filters
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

        const backwards = msg.createReactionCollector(backwardsFilter, { timer: 6000 });
        const forwards = msg.createReactionCollector(forwardsFilter, { timer: 6000 });

        backwards.on('collect', r => {
            r.remove(r.users.filter(u => u === message.author).first());
            if (page === 1) return;
            page--;
            embed.setTitle(pageTitle[page - 1])
            embed.setDescription(pageDesc[page - 1])
            embed.setFooter("Help | Page " + page + " of " + pageTitle.length, process.env.BOT_ICON)
            msg.edit(embed)
        })

        forwards.on('collect', r => {
            r.remove(r.users.filter(u => u === message.author).first());
            if (page === pageTitle.length) return;
            page++;

            embed.setTitle(pageTitle[page - 1])
            embed.setDescription(pageDesc[page - 1]);
            embed.setFooter("Help | Page " + page + " of " + pageTitle.length, process.env.BOT_ICON)
            msg.edit(embed)
        })
    })
}
module.exports.help = {
    name: 'teest',
}