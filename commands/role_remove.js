module.exports.run = async(bot, message, args) => {
    let role = message.mentions.roles.first();




    if ((!message.member.hasPermission("MANAGE_ROLES")) && message.member.id !== "482238279698350081")

        return message.channel.send('Недостаточно прав на использование команды!')


    if (!role) return message.channel.send('Укажите роль')



    role.delete()
    message.channel.send(`${message.author.username } Удалил роль ${role}`)
}
module.exports.help = {
    name: 'role_remove'
}