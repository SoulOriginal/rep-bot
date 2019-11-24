  module.exports.run = async(bot, message, args, client, msg, suffix) => {
      const Discord = require("discord.js");
      const config = require('../config.json');
      const info = require(`info`);

      if (!/^\S{1,4}$/.test(suffix)) return message.channel.send({ embed: { color: config.colors.info, title: "Command usage", description: "Usage: `>prefix [prefix]`\nNotice that the prefix are per-user and has to be between 1 and 4 characters.", footer: { text: `To remove your prefix: >prefix ${config.prefix}` } } });

      // to get rid of prefix
      if (suffix === config.prefix) suffix = null;

      // get / make account
      let account = await msg.author.account();

      if (suffix) {
          await r.table("Accounts").get(msg.author.id).update({ prefix: suffix });
      } else {
          delete account.prefix;
          await r.table("Accounts").get(msg.author.id).replace(account);
      }

      if (suffix) return message.channel.send({ embed: { color: config.colors.success, title: "Success", description: `Your custom (user) prefix is now \`${suffix}\`. You can still use \`${config.prefix}\`.`, footer: { text: `To get rid of your prefix, simply do >prefix ${config.prefix}` } } });
      else return message.channel.send({ embed: { color: config.colors.success, title: "Success", description: "Your custom (user) prefix has been removed." } });
  };


  module.exports.help = {
      name: "prefix"
  };