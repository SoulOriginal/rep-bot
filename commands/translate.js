const translate = require("translate"); //Модуль.
const { RichEmbed } = require("discord.js")
const colors = "RANDOM"
translate.engine = "yandex"; // Можно указать и google, но тогда и API ключ надо будет другой.
translate.key = "trnsl.1.1.20191116T161631Z.7901056b22a82eb5.8a913f901dcc6a34e8198229015937ca34b42d87"
module.exports.run = async(bot, message, args) => {
    var args1 = message.content.toLowerCase().split(/ +/g);
    let RU = ["ru", "русский", "russian"];
    let EN = ["en", "английский", "english"];
    let text = args.slice(1).join(" ");
    if (!args[0]) return message.channel.send("Напиши с какого языка переводить (ru, en)").then(msg => msg.delete(20 * 1000));
    if (!text) return message.channel.send("Укажите текст для перевода!").then(msg => msg.delete(20 * 1000));
    if (args1.some(a => RU.find(word => word == a))) {
        translate(text, { from: "ru", to: "en" }).then(text2 => { //Переводим с RU на EN
            message.channel.send(
                new RichEmbed()
                .setColor(colors)
                .addField("Перевод с русского на английского:", text2)
            )
        });
        return
    }
    if (args1.some(a => EN.find(word => word == a))) {
        translate(text, { from: "en", to: "ru" }).then(text => { //Тоже самое, но наоборот.
            message.channel.send(
                new RichEmbed()
                .setColor(colors)
                .addField("Перевод с английского на русский:", text)
            )
        });
        return
    }
    message.channel.send("Я не понял команду!").then(msg => msg.delete(20 * 1000));
};
module.exports.help = {
    name: "translate"
};