const Discord = require("discord.js")
const GoogleScraper = require('google-scraper');

module.exports.run = async (bot, message, args) => {
  let suffix = args.join(' ') 
  if(!suffix) return message.channel.send("No keyword to search")
  
  const options = {
    keyword: suffix,
    results: 4,
    tld: "com",
    language: "en"
  };  
  
  const scrape = new GoogleScraper(options);
  
  scrape.getGoogleLinks.then(function(value) {
    console.log(value)
    let time = Math.ceil((message.createdTimestamp - Date.now())*-1)
    let second = time/1000
    
    let embed = new Discord.RichEmbed()
    .setColor("#07b1bc")
    .setAuthor(`Result for ${suffix}`, `https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png`)
    .addField(value, `(${second} seconds)`)
    .setTimestamp()
    
    return message.channel.send(embed)
  }).catch(function(e) {
    console.log(e);
  })
    
}

module.exports.help = {
  name: "google"
}