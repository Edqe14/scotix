const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  let target = message.mentions.users.first();
  if(!target) return message.channel.send("Who you want to pat? :3");
  
  const dirr = [
    "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932",
    "https://media.tenor.com/images/fa9ad7f4ecfad744aec37241cce2cecc/tenor.gif"
  ]

  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .setTitle(`${message.author.tag} pats ${target}`)
  .setFooter("Scotix | Alpha 1.1") 

  message.channel.send(embed).then(function(message) {
    message.setAttachment(dirr[Math.floor(Math.random() * dirr.length)])
  })
}

module.exports.help = {
    name: "pat"
  };