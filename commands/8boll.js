const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if (!args[0]) return message.reply(" а где вопрос?");
    let replies = ["Да", "Нет", "Ну, не знаю", "Сейчас не могу дать точного ответа", "Что за тупой вопрос?", "Что это значит?", "Не понял", "Не гребу", "Возможно", "Звучит хайпово", "Это шутка?", "Лучше тебе этого не знать!", "Каво?"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");
    if (!question.includes('?')) return message.reply(' а где вопросительный знак?')
    if (question === "У меня есть смысл жить?") replies[result] = 'Нет, умри нахуй'
    if (question === "Где смотреть аниме?") replies[result] = 'На сайте!'
    if (question === "8ball") replies[result] = '???????'
    if (question === "Когда будет война?") replies[result] = 'В 2030 году'
    if (question === "Из-за чего пиздец?") replies[result] = 'Из-за тебя'
    if (question === "Он адекват?") replies[result] = 'Ясень пень что нет!'
    if (question === "Что мне делать?") replies[result] = 'Ровно нихуя'
    if (question === "В чём смысл жизни?") replies[result] = 'В аниме!'
    if (question === "Гриша кто?") replies[result] = 'Гриша молодец!'
    if (question === "гриша кто?") replies[result] = 'Гриша молодец!'
    if (question === "Почему так скучно?") replies[result] = 'Иди поиграй с пиписькой,подними настроение'
    if (question === "Ты будешь скучать?") replies[result] = 'Нет,таких как ты (идиотов) пруд пруди'
    if (question === "соул кто?") replies[result] = 'Красава!'
    if (question === "Соул кто?") replies[result] = 'Красава!'
    if (question === "Соул ?") replies[result] = 'Красава!'
    if (question === "соул ?") replies[result] = 'Красава!'
    if (question === "бот ?") replies[result] = 'Заебал'
    if (question === "он пиздит?") replies[result] = 'Конечно!'


    let e = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Вопрос:", question)
        .addField("Ответ:", replies[result]);
    message.delete().catch();
    message.channel.send(e);
}
module.exports.help = {
    name: '8boll'
}