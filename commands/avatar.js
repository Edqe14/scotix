const Discord = require("discord.js")

module.exports.run = async (bot, message, args, ops) => {
  let target = message.mentions.users.first();
  if(!target) {
    let userIcon = message.author.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setTitle(`${message.author.tag} avatar`)
    .setImage(userIcon)
    .setFooter("Scotix | Alpha 1.1") 
    
    message.channel.send(embed)
  } else {
    let targetIcon = target.displayAvatarURL;
    let embed1 = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setTitle(`${target.tag} avatar`)
    .setImage(targetIcon)
    .setFooter("Scotix | Alpha 1.1") 
    
    message.channel.send(embed1)
  }
}

module.exports.help = {
  name: "avatar"
};