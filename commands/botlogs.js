const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if(message.author.id !== "326966683187281922") return message.channel.send("You don't have enough permission to run this command");
  
  let guild = bot.guilds.size
  let user = bot.users.size
  let name = bot.guilds.array("\n")
  
  let embed2 = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("Total server on", `${guild} servers`, true)
  .addField("Total users", `${user} users` , true)
  .addField("Server List", `${name}`, true)
  .setFooter("Automatic bot logs | Scotix Alpha 1.1")
  
  message.channel.send(embed2);;
  
}

module.exports.help = {
  name: "logs"
};