const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.channel.send("There currently isn't any music playing!");
  
  let queue = fetched.queue;
  let nowPlaying = queue[0];
  
  //let resp = `__**Now Playing**__\n**${nowPlaying.songTitle}** | Requested by: **${nowPlaying.requester}**\n\n__**Queue**__`;
  let resp = []
  
  if(queue.length <= 1) resp += "\nNone";
  
  for(var i = 1; i < queue.length; i++) {
    resp += `\n${i}. **${queue[i].songTitle}** | Requested by: **${queue[i].requester}**`
  }
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("__Now Playing__", `**${nowPlaying.songTitle}** | Requested by: **${nowPlaying.requester}**`)
  .addField("__Queue__", resp)
  .setFooter("Scotix | Alpha 1.1") 
  
  return message.channel.send(embed); 
}

module.exports.help = {
  name: "queue",
  alias: "q"
};