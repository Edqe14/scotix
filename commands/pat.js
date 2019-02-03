const Discord = require("discord.js");
const fs = require("fs")

module.exports.run = async (bot, message, args, ops) => {
  let target = message.guild.member(message.mentions.users.first());
  if(!target) return message.channel.send("Who you want to pat? :3");
  
  fs.readdir("./pat/", (err, files) => {
    if (err) console.error(err);
    let giffiles = files.filter(f => f.split(".").pop() === "gif");
  
    if (giffiles.length <= 0) return console.log("There are no gifs to load...");
    
    let rand = Math.floor(Math.random() * f)
    let fileSend = message.channel.sendFile(rand)
  });

  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .setTitle(`${message.author.tag} pats ${target.tag}`)
  .addField(`${fileSend}`);

  message.channel.send(embed)
}

module.exports.help = {
    name: "pat"
  };