module.exports.run = async(bot, message, args) => {
    const voiceChannel = message.member.voiceChannel;
    message.channel.send("https://discordapp.com/channels/" + message.guild.id + "/" + voiceChannel.id)
}
module.exports.help = {
    name: "demon"
}