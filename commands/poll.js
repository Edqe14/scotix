const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if(!args[0]) return message.channel.send({embed: {
    description: "Invalid input! Usage: >poll (question) (option [devide with ;])"

  }})
  
  let question = args[0]
  if(!args[1]) return message.channel.send('Invalid question! Usage: >poll (question) (option [devide with ;])')

  let list = args[1].split(";")
  console.log(list)
  if(!list[1]) return message.channel.send("Please add more option!")
  
  let props = ''
  for(var i = 0; list.length > i; i++) {
    list[i].replace(/_/, " ")
    props += `**${i+1}**: ${list[i]}\n`
  }
  
  let embed = new Discord.RichEmbed()
  .setColor("#07b1bc")
  .setTitle("__Poll__")
  .addField(question, props)
  .setFooter("Scotix | Alpha 1.1") 
  
  message.channel.send(embed).then(async function(message) {
    switch(list.length) {
      case 2:
        await message.react("\u0031\u20E3");
        await message.react("\u0032\u20E3");
        break;
      case 3:
        await message.react("\u0031\u20E3");
        await message.react("\u0032\u20E3");
        await message.react("\u0033\u20E3");
        break;
      case 4:
        await message.react("\u0031\u20E3");
        await message.react("\u0032\u20E3");
        await message.react("\u0033\u20E3");
        await message.react("\u0034\u20E3");
        break;
      case 5:
        await message.react("\u0031\u20E3");
        await message.react("\u0032\u20E3");
        await message.react("\u0033\u20E3");
        await message.react("\u0034\u20E3");
        await message.react("\u0035\u20E3");
        break;
      }
  })
  
}

module.exports.help = {
  name: "poll"
}