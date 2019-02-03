module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.channel.send("There currently isn't any music playing!");
  
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You isn't on same voice channel");
  
  if(fetched.dispatcher.paused) return message.channel.send("This song already paused");
  
  fetched.dispatcher.pause();
  
  return message.channel.send("Song paused");
}

module.exports.help = {
  name: "pause"
};