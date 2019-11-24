module.exports.run = async(bot, message, args) => {
    if ((!message.member.hasPermission("MANAGE_MESSAGES")) && message.member.id !== "482238279698350081")
        return message.channel.send('Недостаточно прав на использование команды!')

    let count = args[0] || 10
    await message.delete()
    await message.channel.bulkDelete(count)
}

module.exports.help = {
        name: 'prune'
    }
    //последние 10 сообщений дел