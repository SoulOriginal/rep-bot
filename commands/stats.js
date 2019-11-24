const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");

    const embed = new Discord.RichEmbed()
        .setAuthor("Показатели бота")
        .setColor("#a7f442")
        .setThumbnail('https://discordemoji.com/assets/emoji/3619_discord_online.png')
        .setTimestamp()
        .addField("⭕ | Использование памяти", `${(process.memoryUsage().heapUsed / (1000 * 1000)).toFixed(2)} MB`, true)
        .addField("🕑 | Uptime", `${duration}`, true)
        .addField("👥 | Пользователей", `${client.users.size.toLocaleString()}`, true)
        .addField("🌐 | Серверов", `${client.guilds.size.toLocaleString()}`, true)
        .addField("🗨 | Каналов", `${client.channels.size.toLocaleString()}`, true)
        .addField("⚙ | Кол-во команд", `${client.commands.size.toLocaleString()}`, true)
        .addField("💡 | Discord.js", `v${version}`, true)

    message.channel.send(embed);
};

module.exports.help = {
    name: "stats"
}


//Packages: moment
//moment-duration-format