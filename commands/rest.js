const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
    message.channel.send("Перезагрузка...").then(m => {
        m.delete().then(() => {
            bot.destroy().then(() => {
                process.exit(1)
            })
        })
    })
}
module.exports.help = {
    name: "rest",

}