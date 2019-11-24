const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json')
const bot = new Discord.Client()
bot.commands = new Discord.Collection()
ccolor = require('ansi-colors')
    ////////////////////////////////////////////////////////////////////////////////
let token = config.token;
let prefix = config.prefix;
////////////////////
bot.once('reconnecting', () => {
    console.log('Пересоеденение бота!');
});
bot.once('disconnect', () => {
    console.log('Остановка бота!');
});
/////////////////////////////////


//код шпион
//  console.log(`${message.channel.id} | ${message.channel.name} | [${message.author.tag}] | ${message.content}`)


fs.readdir('./С_reactions/', async(err, files) => {
    if (err) return console.log(ccolor.red('COMMAND ERROR: ') + ccolor.grey(err))
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let props = require(`./С_reactions/${file}`)
        let cmdName = file.split('.')[0]
        console.log(ccolor.yellowBright('LOAD: ') + ccolor.cyanBright(`Реакция ${cmdName}`))
        bot.commands.set(cmdName, props)
    })
    console.log('===============================')
    console.log('===============================')
})






fs.readdir('./commands/', async(err, files) => {
    if (err) return console.log(ccolor.red('COMMAND ERROR: ') + ccolor.grey(err))
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        let props = require(`./commands/${file}`)
        let cmdName = file.split('.')[0]
        console.log(ccolor.yellowBright('LOAD: ') + ccolor.cyanBright(`Команда ${cmdName}`))
        bot.commands.set(cmdName, props)
    })
    console.log('===============================')
})

fs.readdir('./events/', (err, files) => {
    if (err) return console.log(ccolor.red('EVENT ERROR: ') + ccolor.grey(err))
    console.log('===============================')
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const evt = require(`./events/${file}`)
        let evtName = file.split('.')[0]
        console.log(ccolor.yellowBright('LOAD: ') + ccolor.blueBright(`Событие ${evtName}`))

    })
})









bot.on('message', async message => {
    let prefix = config.prefix
    let messageArray = message.content.split(' ') // разделение пробелами
    let command = messageArray[0] // команда после префикса
    let args = messageArray.slice(1) // аргументы после команды

    let command_file = bot.commands.get(command.slice(prefix.length)) // команды колекция
    if (command_file) command_file.run(bot, message, args)

    //await exp(message.author)
})




/////////////////////////////////
//bot.on('guildMemberAdd', async member => {
// let role = member.guild.roles.find(r => r.name == 'Community')
// let channel = member.guild.channels.find(c => c.name == 'actions')
// let embed = new Discord.RichEmbed()
// .setAuthor('Участник присоединился', member.user.avatarURL)
// .setDescription(`${member.user.username}#${member.user.discriminator} (${member})`)
//  .setColor(0x41b581)
//   .setFooter(`ID: ${member.id}`)
//    .setTimestamp()
//  await channel.send(embed)
//  await member.addRole(role.id)
//})
////////////////////////////////////////////////

//bot.on('guildMemberRemove', async member => {
//let embed = new Discord.RichEmbed()
// .setAuthor('Участник вышел', member.user.avatarURL)
// .setDescription(`${member.user.username}#${member.user.discriminator} (${member.id})`)
// .setColor(0xf04747)
//  .setFooter(`ID: ${member.id}`)
//    .setTimestamp()
//let channel = member.guild.channels.find(c => c.name == 'actions')
// await channel.send(embed)
//})
////////////////////////////////////////////////Игра текст
//bot.login(config.token)
//bot.on('ready', () => {
// console.log(`${bot.user.username} online`);
// bot.user.setPresence({ status: 'dnd', game: { name: 'Gaming v Game', type: 0 } })
//})
//////////////////////////////Норм игра
bot.on("ready", message => {
    var i = 0;
    var timer = bot.setInterval(function() {
        var gamePresence = [`${bot.guilds.size} servers`, `**invite`, `modules`]; //каждое слово через запятую - отдельный статус
        bot.user.setPresence({ game: { name: gamePresence[i % gamePresence.length], type: "streaming", url: "https://www.twitch.tv/monstercat" } });
        i++;
    }, 65000)
});
////////////////////////////////////////////Инвайт
bot.on('message', (message) => {
    if (message.content.includes("**invite")) {
        let mtrade = message.author.username;
        message.channel.send("Invite me with this link:https://discordapp.com/oauth2/authorize?client_id=641767203988832277&permissions=8&scope=bot" + message.member) //заметка тут можно скомунячить ник
    }
});


/////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////время консоли
log = console.log
console.log = (data) => log(`[${new Date().getHours()}:${new Date().getMinutes()}]${ data}`)


//////////////////////////////     анти реклама
bot.on('messageDelete', async message => {
    const i = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g; //RegExp
    let res = i.test(message.content);
    if (res === false) return;
    if (!message.member.hasPermission('ADMINISTRATOR')) {
        message.delete();
        const warn = new Discord.RichEmbed()
            .setTitle('Предупреждение для ' + message.author.tag)
            .setDescription('Ваше сообщение было удалено, так как содержало ссылку-приглашение')
            .setColor('ff6600');
        message.channel.send(warn);
        console.log(message.content);

    }
});
///////////////////////////////////////////////////////////////////логи узнать https://discordapp.com/channels/496338755456598016/568035496282816522/610780866872082433







////////////общение с ботом


bot.on('ready', () => {
    let shtyka = process.openStdin()
    shtyka.addListener("data", r => {
        let x = r.toString().trim().split(/ +/g)
        bot.channels.get("521307265777532932").send(x.join(" "));
    });
});


//////////////////////////////////////////////////////время-канала
//const { findTimeZone, getZonedTime } = require('timezone-support');
//const russia = findTimeZone("Europe/Moscow");
//setInterval(function() {
// const nativeDate = new Date()
// const russiatime = getZonedTime(nativeDate, russia)
// let hours = russiatime.hours
//let minutes = russiatime.minutes
// if (hours < 10) {
//     hours = `0${hours}`;
//  }
//  if (minutes < 10) {
//     minutes = `0${minutes}`;
// }
//  bot.channels.get("521330785010057236").setName(`${hours}:${minutes} МСК`)

//}, 5000);
/////////////////////////////////////////////////////////





























/////////////////////////////////////////////////////////game




///////////////////////////////////////////////////////// музяка не робит




///////////////смента префикса



presences = [{
    game: 'Visual Studio Code [Administrator]',
    name: 'Кодер'
}, {
    game: 'Geometry Dash',
    name: 'Geometry'
}, {

}, {

}, {

}]

bot.on('presenceUpdate', async member => {
    getRole = (name) => member.guild.roles.find(r => r.name == name)
    if (!member.guild.id === "521307265777532930") return;
    if (!member.presence.game) return;
    if (member.user.bot) return;
    presences.forEach(presence => {
        if (member.roles.has(getRole(presence.name)) &&
            !getRole(presence.name)) return;
        if (member.presence.game == presence.game) {
            if (!role) {
                role = await message.guild.createRole({
                    name: (presence.game),
                    color: '#0081f0'
                }).then(role => message.member.addRole(role))
                console.log(`${member.user.username} получил роль ${role.name}`)
            }
        }
    })
})













//////////////////////////////////////////////

process.openStdin().addListener("data", c => {
    const args = c.toString().slice(1).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (c.indexOf('>') !== 0) return;
    switch (command) {
        case 'guilds':
            console.log(bot.guilds.map(i => `${i.name}: ${i.id}`).join("\n"))
            break;

        case 'invite':
            var arg0 = bot.guilds.get(args[0])
            if (!arg0) return console.error('[err] Укажите айди сервера');
            bot.guilds.get(args[0]).channels.filter(i => i.type == 'text').first()
                .createInvite().then(i => console.log(`Invite on ${bot.guilds.get(args[0]).name}: ${i.url}`))
            break;
    }
});

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

const { RichEmbed } = require("discord.js");
/////













bot.on('message', (message) => {
    if (message.content.startsWith("**Administration")) {
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Administration`)
            .setDescription('• `addrole`\n•  `ban` \n• `createchannel`\n• `clear`\n•  `createrole`\n• `edit`\n• `kick`\n• `link`\n• `lockdown`\n• `mute`\n• `prune`\n• `roleremove`\n• `unban`\n• `pin`')




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**Reactions")) {
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Reactions`)
            .setDescription('• `meow`\n• `pat`\n• `poke`\n• `slap`\n• `smug`\n• `baka`\n• `tickle`\n• `hug`\n• `reactions`\n• `poll`\n• `punch`\n• `cuddle`\n• `kiss`')




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**CastomReactions")) {
        let mtrade = message.author.username;
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`CastomReactions `)
            .setDescription("• `ngif`\n•  `waifu`")




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**Games")) {
        let mtrade = message.author.username;
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Games `)
            .setDescription("•  `kazino`\n• `minesweeper`")




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**NSFW")) {
        let mtrade = message.author.username;
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`NSFW `)
            .setDescription("• `nekonsfw`\n • `photocum`\n • `photopussy`\n • `pussy`\n • `pwankg`\n • `solo`\n • `solog`\n • `tits`\n • `yuri`\n • `hentai`\n • `bj`\n • `blowjob`\n • `boobs`\n • `classic`\n • `cum`\n • `ero`\n • `erofeet`\n • `erok`\n • `erokemo`\n • `eron`\n • `feetg`\n • `fox_girl`\n • `futanari`\n • `gasm`\n • `hentaigif`\n • `holoero`\n • `hololewd`\n • `keta`\n • `lewd`\n • `lewdkemo`\n • `les`               ")




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**Utility")) {
        let mtrade = message.author.username;
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Utility `)
            .setDescription("•  `newavatar`\n•  `avatar`\n•  `link`\n•  `serverinfo`\n•  `userinfo`\n•  `stats`\n•  `bug`\n•  `demon`\n•  `play`\n•  `report`\n•  `translate`")




        )
    }
})
bot.on('message', (message) => {
    if (message.content.startsWith("**Fun")) {
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Fun  `)
            .setDescription("•  `atableflip`\n•  `cap`\n•  `embed`\n•  `emote`\n•  `say`\n•  `ddos`\n•  `sex`\n•  `ship`\n•  `random`\n•  `randomcolor`\n•  `uclaim`\n•  `gesg`")




        )
    }
})



bot.on('message', (message) => {
    if (message.content.startsWith("**Arts")) {
        let mtrade = message.author.username;
        message.channel.send(
            new RichEmbed()
            .setColor(0xffffff)
            .setTitle(`Arts `)
            .setDescription("• `neko`\n• `wallpaper`\n• `holo`\n• `kemonomimi`")




        )
    }

})



























bot.login(config.token);