module.exports.run = async(bot, message, args) => {
    let role = message.mentions.roles.first(); //лучше использовать "let" вместо "var", но это не принципиально
    let member = message.mentions.members.first();
    //Убрал массив, из-за его ненадобности

    if ((!message.member.hasPermission("MANAGE_ROLES")) /*Заменил MANAGE_MESSAGES на MANAGE_ROLES, потому что MANAGE_MESSAGES бессмысленно в таких командах (логичнее проверять на право выдачи роли)*/ &&
        message.member.id !== "482238279698350081")
        return message.channel.send('Недостаточно прав на использование команды!')




    if (!member) return message.channel.send('Укажите участника')

    if (!role) return message.channel.send('Укажите роль')
    if ((message.member.highestRole.comparePositionTo(role) < 0) && message.member.id !== "482238279698350081")
        return message.channel.send('Нельзя выдать роль выше своей!')

    member.addRole(role)
    message.channel.send(`${member.user.username} получил роль ${role}`)
}
module.exports.help = {
    name: 'addrole'
}