const Discord = require('discord.js')
module.exports.run = async(bot, message, args) => {
    bot.on('voiceStateUpdate', (oldMember, newMember) => {
        let newUserChannel = newMember.voiceChannel;
        let oldUserChannel = oldMember.voiceChannel;
        let voicetext = "Голосовой онлайн: "
        let ch = bot.channels.get("614923756367904768");
        if (!newUserChannel && !oldUserChannel) {
            ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
        };
        if (!newUserChannel && oldUserChannel) {
            ch.setName(`${voicetext}${newMember.guild.members.filter(m => m.voiceChannel).size}`);
        };
    });
}