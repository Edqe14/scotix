const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You didn't have Manage Messages permission");
    if(!args[0]) return message.channel.send("Invalid value");
  
    message.delete();
  
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Cleared ${args[0]} messages by ${message.author}.`).then(msg => msg.delete(20000)).catch(console.error);
    })
}

module.exports.help = {
  name: "purge"
};