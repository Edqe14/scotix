const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  var uptimeSeconds = 0, uptimeMinutes = 0, uptimeHours = 0, uptimeDays = 0;

	uptimeSeconds = Math.floor(bot.uptime/1000);

	if(uptimeSeconds > 60){
		uptimeMinutes = Math.floor(uptimeSeconds/60);
		uptimeSeconds = Math.floor(uptimeSeconds % 60);
	}

	if(uptimeMinutes > 60){
		uptimeHours = Math.floor(uptimeMinutes / 60);
		uptimeMinutes = Math.floor(uptimeMinutes % 60);
	}

	if(uptimeHours > 24){
		uptimeDays = Math.floor(uptimeHours / 24);
		uptimeHours = Math.floor(uptimeHours % 24);
	}
  
  let props = ''
  
  if(uptimeDays, uptimeHours, uptimeMinutes == 0) {
    props += `${uptimeSeconds} seconds`
  } else if(uptimeDays, uptimeHours == 0) {
    props = `${uptimeMinutes} minutes, ${uptimeSeconds} seconds`
  } else if(uptimeDays == 0) {
    props = `${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`
  } else {
    props = `${uptimeDays} days, ${uptimeHours} hours, ${uptimeMinutes} minutes, ${uptimeSeconds} seconds`
  }
  
  let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .addField("__Uptime__", props)
    .setFooter("Scotix | Alpha 1.2")
  
  message.channel.send(embed)

	return [uptimeDays, uptimeHours, uptimeMinutes, uptimeSeconds]
    
  
}

module.exports.help = {
  name: "uptime"
}