const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {
    if (message.author.id !== '482238279698350081') return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
            .setAuthor('Eval')
            .setColor('RANDOM')
            .addField(':inbox_tray: До', `\`\`\`js\n${codein}\`\`\``)
            .addField(':outbox_tray: После', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch (e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
    name: 'eval'
}