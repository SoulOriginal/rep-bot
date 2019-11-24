const { RichEmbed } = require('discord.js');

module.exports.run = (bot, msg, args) => {
    let user = msg.mentions.users.first() || msg.author;
    let arr = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'https://media.giphy.com/media/3uv5ivx6xwqze/giphy.gif', 'http://giphygifs.s3.amazonaws.com/media/bOCMPVgsVnRT2/giphy.gif', 'http://giphygifs.s3.amazonaws.com/media/rY3YFw3JfUK88/giphy.gif', 'http://giphygifs.s3.amazonaws.com/media/ThndUIbw1Znbi/giphy.gif'];
    msg.channel.send({
        embed: {
            color: 16777215,
            description: (`Baka ${user.tag}`),
            image: {
                url: `${arr[Math.floor(Math.random() * arr.length)]}`
            }

        }
    })
}

module.exports.help = {
    name: 'baka'
}