const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let musc = [">play (link) | Only Youtube Links for now", "**>pause | Pause current song**", ">resume | Resume paused song", "**>dc | Leave the voice channel**", ">queue | Queue List", "**>skip | Skip a song**", ">volume | Set the volume (0-200)"]
  let mod = [">ban (tag) (reason) | Ban a user", "**>kick (tag) (reason) | Kick a user**", ">purge (number) | Clear messages"]
  let els = [">ping | Check your ping", ">help | Show this embed"]
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("__Prefix__", ">")
  .addField(":musical_note: __Music__", musc, true)
  .addField(":tools: __Moderation__", mod, true)
  .addField(":small_blue_diamond: __Other__", els, true)
  .setFooter("Scotix | Alpha 1.1") 
  
  return message.channel.send(embed).then(function(message) {
    message.react("👍");
  });
  
}

module.exports.help = {
  name: "help"
};