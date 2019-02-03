const randomPuppy = require('random-puppy');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!target) return message.channel.send("You can't pat your own head, *smh*");
  randomPuppy("headpats").then(url => {
      let embed = new Discord.RichEmbed()
      .setColor("#07b1bc")
      .setTitle(`${message.author.mention} pats ${target.mention}`)
      .addField(`${url}`);

      message.channel.send(embed).then(message.channel.send(`${url}`)) 
  })
}

module.exports.help = {
    name: "pat"
  };