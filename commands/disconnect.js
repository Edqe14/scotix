const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  if(!message.member.voiceChannel) return message.channel.send("Please join same voice channel");
  
  if(!message.guild.me.voiceChannel) return message.channel.send("I'm not connected to a voice channel");
  
  if(message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send("You isn't on same voice channel");
  
  let role = message.guild.roles.find(`name`, "DJ");
  if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.has(role.id)){
    ops.active.delete(message.guild.id)
    
    message.member.voiceChannel.leave();
    return await message.channel.send("Leaving voice channel...");
  } else {
    message.channel.send("You don't have DJ role");
  }
  
}

module.exports.help = {
  name: "dc"
};