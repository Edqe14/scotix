const Discord = require("discord.js");
const ytdl = require("ytdl-core");

module.exports.run = async (bot, message, args, ops) => {
    if(!message.member.voiceChannel) return message.channel.send("Please join a voice channel!");
  
    if(!args[0]) return message.channel.send("Please put a youtube URL/Title");
  
    let validate = await ytdl.validateURL(args[0]);
  
    if(!validate) {
      let commandFile = require("./search.js");
      return commandFile.run(bot, message, args, ops);
      
    }
  
    //if(!validate) return message.channel.send("Invalid URL");
  
    let info = await ytdl.getInfo(args[0]);
  
    let data = ops.active.get(message.guild.id) || {};
  
    if(!data.connection) data.connection = await message.member.voiceChannel.join();
    if(!data.queue) data.queue = [];
  
    data.guildID = message.guild.id;
    
    data.queue.push({
      songTitle: info.title,
      requester: message.author.tag,
      url: args[0],
      announceChannel: message.channel.id
    })
  
    if(!data.dispatcher) play(bot, data);
    else {
      if(message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send("You isn't on same voice channel");
      
      message.channel.send(`Song added to queue: ${info.title} | Requested by: ${message.author.tag}`);
    }
  
    ops.active.set(message.guild.id, data);

    
    async function play(bot, data) {
      bot.channels.get(data.queue[0].announceChannel).send(`Now Playing: ${data.queue[0].songTitle} | Requested by: ${data.queue[0].requester}`);
      data.dispatcher = await data.connection.playStream(ytdl(data.queue[0].url, { filter: "audioonly" }));
      data.dispatcher.guildID = data.guildID;
  
      data.dispatcher.once("end", function() {
        end(bot, this);
    });
                       
  }

  function end(bot, dispatcher) {
    let fetched = ops.active.get(dispatcher.guildID);
  
    fetched.queue.shift();
  
    if(fetched.queue.length > 0) {
      ops.active.set(dispatcher.guildID, fetched);
    
      play(bot, fetched);
    } else {
      ops.active.delete(dispatcher.guildID);
    
      let vc = bot.guilds.get(dispatcher.guildID).me.voiceChannel;
      if(vc) vc.leave(15000);
    }
  }

}

module.exports.help = {
  name: "play",
  alias: "p"
};