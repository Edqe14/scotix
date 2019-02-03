const Discord = require("discord.js");
const image = require("get-image")

module.exports.run = async (bot, message, args, ops) => {
  let target = message.guild.member(message.mentions.users.first());
  if(!target) return message.channel.send("Who you want to pat? :3");
  
  const dirr = [
    "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932",
    "https://media.tenor.com/images/fa9ad7f4ecfad744aec37241cce2cecc/tenor.gif"
  ]

  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .setTitle(`${message.author.tag} pats ${target.tag}`)
  .addField(dirr[Math.floor(Math.random() * dirr.length)])

  message.channel.send(embed)
}

module.exports.help = {
    name: "pat"
  };