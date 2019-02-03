module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.channel.send("There currently isn't any music playing!");
  
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You isn't on same voice channel");
  
  if(isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.channel.send("Invalid inpur | 0-200 only");
  
  fetched.dispatcher.setVolume(args[0]/100)
  
  return message.channel.send(`Successfuly changed the volume to ${args[0]}`)
}

module.exports.help = {
  name: "volume"
};