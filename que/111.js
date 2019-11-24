module.exports.run = async(bot, message, args, client) => {
    const { Embeds } = require('discord-paginationembed');
    const config = require('../config.json')
    const Discord = module.require("discord.js");
    const { MessageEmbed } = require('discord.js');
    // Under message event.

    const embeds = [];

    for (let i = 0; i < 5; ++i)

        embeds.push(new MessageEmbed().addField('Page', i + 1));

    new Embeds()
        .setAuthorizedUsers([message.author.id])
        .setChannel(message.channel)
        .setClientAssets({ prompt: 'Yo {{user}} wat peige?!?!?' })
        .setArray(embeds)
        .setPageIndicator(false)
        .setPage(1)
        .setTimeout(69000)
        .setNavigationEmojis({
            back: '◀',
            jump: '↗',
            forward: '▶',
            delete: '🗑'
        })
        .setFunctionEmojis({
            '⬆': (_, instance) => {
                for (const embed of instance.array)

                    embed.fields[0].value++;
            },
            '⬇': (_, instance) => {
                for (const embed of instance.array)

                    embed.fields[0].value--;
            }
        })
        .setDescription('This is one of my embeds with this message!')
        .setColor(0xFF00AE)
        .setTimestamp()
        .build();
}

module.exports.help = {
    name: '111'
}