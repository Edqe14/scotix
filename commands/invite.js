const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let icon = bot.user.displayAvatarURL
  let inv = new Discord.RichEmbed()
  .setThumbnail(icon)
  .setColor("#07b1bc")
  .setTitle("__Invite Me!__")
  .addField("Bot", "[Invite Me to your server](https://discordapp.com/api/oauth2/authorize?client_id=524503969284882433&permissions=8&scope=bot)", true)
  .addField("Discord", "[Support Server](https://discord.gg/GMRk6fw)", true)
  .setFooter("Scotix | Alpha 1.1") 
  //.setFooter(`On ${bot.guilds.size} servers with ${bot.users.size} users`)
  
  return message.channel.send(inv);
}

module.exports.help = {
  name: "invite"
};
