const Discord = require("discord.js")

module.exports.run = async (bot, message, args, ops) => {
  let icon = message.guild.iconURL

  let botC = function checkBots(guild) {
    let botCount = 0; 
    guild.members.forEach(member => { 
      if(member.user.bot) botCount++; 
    });
    return botCount; 
  }
  
  let userC = function checkMembers(guild) {
    let memberCount = 0;
    guild.members.forEach(member => {
      if(!member.user.bot) memberCount++; 
    });
    return memberCount;
  } 
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .setThumbnail(icon)
  .setTitle(`__${message.guild.name} information__`)
  .addField("Server Owner", message.guild.owner, true)
  .addField("Server Region", message.guild.region, true)
  .addField("Channel + Category Count", message.guild.channels.size, true)
  .addField("Total Member (Human/Bot)", message.guild.memberCount + ` (${userC(message.guild)}/${botC(message.guild)})`, true)
  // .addField("Total Human", userC(message.guild), true)
  // .addField("Total Bot", botC(message.guild))
  .setFooter("Server created at:")
  .setTimestamp(message.guild.createdAt);
  
  message.channel.send(embed)
}

module.exports.help = {
  name: "serverinfo"
}