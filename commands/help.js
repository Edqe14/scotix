const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let musc = [">(p)lay (link) | Only Youtube Links for now", "**>pause | Pause current song**", ">(r)esume | Resume paused song", "**>dc | Leave the voice channel**", ">(q)ueue | Queue List", "**>(s)kip | Skip a song**", ">(v)olume | Set the volume (0-200)"]
  let mod = [">ban (tag) (reason) | Ban a user", "**>kick (tag) (reason) | Kick a user**", ">purge (number) | Clear messages"]
  let els = [">ping | Check your ping", "**>help | Show this embed**", ">ascii (text) | ASCII Art (No Emojis)"]
  let img = [">pat <user> | Pat, pat :3"]
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("__Prefix__", ">")
  .addField(":musical_note: __Music__", musc, true)
  .addField(":tools: __Moderation__", mod, true)
  .addField(":frame_photo: __Images__", img, true)
  .addField(":small_blue_diamond: __Other__", els, true)
  .setFooter("Scotix | Alpha 1.1") 
  
  return message.channel.send(embed).then(function(message) {
    message.react("👍");
  });
  
}

module.exports.help = {
  name: "help"
};