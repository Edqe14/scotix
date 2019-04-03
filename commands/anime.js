const malScraper = require('mal-scraper')
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let name = args.join(' ')
  
  malScraper.getInfoFromName(name).then((data) => {
    if(!data) return message.channel.send("No results founded")
    
    let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setThumbnail(data.picture)
    .setAuthor(`Result for ${data.title} [${data.japaneseTitle}] (${data.premiered}) from MyAnimeList.net`, "https://myanimelist.cdn-dena.com/img/sp/icon/apple-touch-icon-256.png")
    .setDescription(data.synopsis)
    .addField("**Studio | Type**", data.studios + " | " + data.type, true)
    .addField("**Genres**", data.genres.join(" "), true)
    .addField("**Status**", data.status, true)
    .addField("**Aired**", data.aired, true)
    .addField("**Score**", data.score, true)
    .setFooter(data.rating + " | " + data.url)
    
    return message.channel.send(embed)
  }).catch(error => console.log(error))
  
  
}

module.exports.help = {
  name: "anime"
}