const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = async(bot, message, args, ops) => {
  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Insufficient permission: `MANAGE_SERVER`")
  
  let prefixes = JSON.parse(fs.readFileSync("/app/prefixes.json", 'utf8'))
  
  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
  
  if(!args[0] || args[0] == "help") return message.reply(`Usage: ${prefixes[message.guild.id].prefixes}prefix (desired prefix)`)
  
  fs.writeFile("/app/prefixes.json", JSON.stringify(prefixes), (err) => {
    if(err) console.log(err)
  })
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .addField("Prefix Set!", `Prefix set to **${args[0]}**`)
  
  message.reply(embed)
}

module.exports.help = {
  name: "prefix"
}
