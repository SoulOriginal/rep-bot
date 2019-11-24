const config = require('../config.json')
const Discord = module.require("discord.js");
module.exports.run = async(bot, message, args) => {

    const { RichEmbed } = require("discord.js");


    bot.on('message', (message) => {
        if (message.content.includes("help")) {
            let mtrade = message.author.username;
            message.channel.send(
                new RichEmbed()
                .setColor("RANDOM")



                .setFooter(bot.user.username, bot.user.displayAvatarURL)
                .setTimestamp()
                .setTitle('**Сервер тех поддержки**') //заглавие в  верху





                //.setURL('https://discord.gg/f4zKaH4') //ссылка заглавия

                .setDescription(`**Команды ${bot.user.username}**`)


                ///////////////////////////////////////////////////////////////////////////////////////////////картинки

                //////////////////////////////////////////////////////////////////////////////////////////////

                .setAuthor('DARKbot v2.0', 'https://i.imgur.com/jVphZKe.png') //картинка в верху

                .setFooter('Префикс бота **', 'https://i.imgur.com/jVphZKe.png') //маленький текст в самом низу ембеда

                .setThumbnail(' https://i.imgur.com/jVphZKe.png ')
                //////////////////////////////////////////////////////////////////////////////Комады
                .addField(`ᅠᅠᅠ`, "ᅠᅠᅠ")
                .addField(`**__ADMIN COMAND__**`, "ᅠᅠᅠ")

                .addField(`**BAN**`, "```[prefix]+ban user ```")

                .addField(`**CLEAR**`, "```[prefix]+clear 100 ```")

                .addField(`**KICK**`, "```[prefix]+kick user```")

                .addField(`**MUTE**`, "```[prefix]+mute user```")

                .addField(`**UNMUTE**`, "```[prefix]+unmute user```")

                .addField(`**WARN**`, "```[prefix]+warn user```")

                .addField(`**UNWARN**`, "```[prefix]+unwarn user```")

                .addField(`**SAY**`, "```[prefix]+say sentence```")

                //////////////////////////////////////////////////////////////////////////////
                //.addField(`ᅠᅠᅠ`, "ᅠᅠᅠ")
                //.addField(`**__FUN COMAND__**`, "ᅠᅠᅠ")

                //.addField(`**PING**`, "```[prefix]+ping```")


                //////////////////////////////////////////////////////////////////////////////
                .addField(`ᅠᅠᅠ`, "ᅠᅠᅠ")
                .addField(`**__USER COMAND__**`, "ᅠᅠᅠ")

                .addField(`**SERVERINFO**`, "```[prefix]+serverinfo```")

                .addField(`**USERINFO**`, "```[prefix]+userinfo```")

                .addField(`**INVIDE**`, "```[prefix]+invide```")




            )
        }
    })


};


exports.help = {
    name: "help"
};