const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  const dirr = [
    "https://media1.tenor.com/images/116fe7ede5b7976920fac3bf8067d42b/tenor.gif?itemid=9200932",
    "https://media1.tenor.com/images/5466adf348239fba04c838639525c28a/tenor.gif?itemid=13284057",
    "https://zippy.gfycat.com/FantasticEmptyBluewhale.gif",
    "https://giant.gfycat.com/FabulousCavernousAegeancat.gif",
    "https://i.redd.it/zu24537rcsd21.png",
    "https://media1.tenor.com/images/0cf73e99f7e58215b2deee3bdb158fe2/tenor.gif?itemid=12018811",
    "https://tenor.com/view/head-pat-gif-10204936"
  ]
  
  let target = message.mentions.users.first();
  if(!target) {
    let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setTitle(`There, there ${message.author.tag}`)
    .setFooter("Scotix | Alpha 1.1") 
    .setImage(dirr[Math.floor(Math.random() * dirr.length)])
  
    message.channel.send(embed);
  } else {
    let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setTitle(`${message.author.tag} pats ` + target.tag)
    .setFooter("Scotix | Alpha 1.1") 
    .setImage(dirr[Math.floor(Math.random() * dirr.length)])

    message.channel.send(embed);
  }
  
  

  
}

module.exports.help = {
    name: "pat"
  };