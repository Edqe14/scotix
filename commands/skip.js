module.exports.run = async (bot, message, args, ops) => {
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.channel.send("There currently isn't any music playing!");
  
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You isn't on same voice channel");
  
  let role = message.guild.roles.find(`name`, "DJ");
  //if(!role) message.channel.send("There isn't a DJ role");
  if(role) {
    if(message.member.roles.has(role.id)) {
      message.channel.send("A DJ just skipped the song!");
    
      return fetched.dispatcher.emit("end");
    }
  }  
  
  let userCount = message.member.voiceChannel.members.size;
  let required = Math.ceil(userCount/2);
  
  if(!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
  
  if(fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`You already voted for a skip! ${fetched.queue[0].voteSkips.length}/${required} voted`);
  
  fetched.queue[0].voteSkips.push(message.member.id);
  
  ops.active.set(message.guild.id, fetched);
  
  if(fetched.queue[0].voteSkips.length >= required) {
    message.channel.send("Skipped a song!");
    
    return fetched.dispatcher.emit("end");
  }
  
  return message.channel.send(`You voted for a skip! ${fetched.queue[0].voteSkips.length}/${required} voted!`);
}

module.exports.help = {
  name: "skip",
  alias: "s"
};