const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
  let prefixes = JSON.parse(fs.readFileSync("/app/prefixes.json", "utf8"))
  
  let prefix = prefixes[message.guild.id].prefixes
  
  let musc = [`${prefix}(p)lay (link/title) | Play/Search a song`, `**${prefix}pause | Pause current song**`, `${prefix}(r)esume | Resume paused song`, `**${prefix}dc | Leave the voice channel**`, `${prefix}(q)ueue | Queue List`, `**${prefix}(s)kip | Skip a song**`, `${prefix}(v)olume | Set the volume (0-200)`]
  let mod = [`${prefix}ban (tag) (reason) | Ban a user`, `**${prefix}kick (tag) (reason) | Kick a user**`, `${prefix}purge (number) | Clear messages`]
  let els = [`${prefix}ping | Check your ping`, `**${prefix}help | Show this embed**`, `${prefix}ascii (text) | ASCII Art (No Emojis)`, `**${prefix}poll (option) | Do a poll! (devide options with \`;\`, devide question with \`-\`, max. 5 options)**`]
  let img = [`${prefix}pat <user> | Pat, pat :3`, `**${prefix}avatar <user> | Get your/users avatar**`]
  let inf = [`${prefix}serverinfo | Get a server information`, `**${prefix}uptime | Show Scotix uptime**`] //,  `${prefix}google (keyword) | Search provided keyword on Google`]
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("__Prefix__", prefix)
  .addField(":musical_note: __Music__", musc, true)
  .addField(":tools: __Moderation__", mod, true)
  .addField(":frame_photo: __Images__", img, true)
  .addField(":newspaper: __Information__", inf, true)
  .addField(":small_blue_diamond: __Other__", els, true)
  .setFooter("Scotix | Alpha 1.1 -|- Created and Developed by Edqe_#0001") 
  
  return message.channel.send(embed).then(function(message) {
    message.react("👍");
  });
  
}

module.exports.help = {
  name: "help"
};
