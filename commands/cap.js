const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    function random(low, high) {
        return Math.floor(Math.random() * (high + low + 1) - low);
    }

    var b = random(0, 10)
    var a = random(0, 10)
    var code = a + "+" + b
    var code2 = (a + b)

    var user = message.author

    message.channel.send(code + "= ?")
    const collector = new Discord.MessageCollector(
        message.channel,
        (m) => m.author.id === message.author.id, { time: 10000, max: 1 }
    );
    collector.on('collect', (message) => {
        collector.stop();
        if (message.content == code2) {
            message.channel.send("✅");
        } else {
            message.channel.send("posose");
        }

    })
}
module.exports.help = {
    name: "cap"
};