const Discord = require("discord.js")

module.exports.run = async (bot, message, args, ops) => {
  let list = ops.data.get(message.guild.id);
  let fetched = ops.active.get(message.guild.id);
  
  if(!fetched) return message.channel.send("There currently isn't any music playing!");
  if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You isn't on same voice channel");
  
  if(!list) {
    ops.data.set(message.guild.id, 1)
    return message.channel.send({embed: {
        description: ":repeat_one: | Looping current song...",
        color: 0x07b1bc
    }})
  } else if(list === 1){
    ops.data.set(message.guild.id, 2)
    return message.channel.send({embed: {
        description: ":repeat: | Looping whole queue...",
        color: 0x07b1bc
    }})
  } else {
    ops.data.delete(message.guild.id);
    return message.channel.send({embed: {
        description: ":twisted_rightwards_arrows: | Stop looping...",
        color: 0x07b1bc
    }})
  }
  
}

//0x07b1bc

module.exports.help = {
  name: "loop"
}