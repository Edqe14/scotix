const Discord = require("discord.js");
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {
  if (message.channel.type == "dm") return;
  
  // message.channel.send(`:robot: | My Latency is **${bot.ping.toFixed()}ms**!\n`);
  // message.channel.send(`:ping_pong: | Your Latency is **${Math.ceil((message.createdTimestamp - Date.now())*-1)}ms!**`);
  message.channel.send({embed: {
    description: `:robot: | My Latency is **${bot.ping.toFixed()}ms**!\n:ping_pong: | Your Latency is **${Math.ceil((message.createdTimestamp - Date.now())*-1)}ms!**`,
    color: 0x07b1bc
  }})

}  

module.exports.help = {
  name: "ping"
};