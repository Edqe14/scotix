const search = require("yt-search");

module.exports.run = async (bot, message, args, ops) => {
  search(args.join(' '), function(err, res) {
    //if(!args[0]) return message.channel.send("No input");
    
    if(err) return message.channel.send("Oops, something went wrong");
  
    let videos = res.videos.slice(0, 10);
    
    let resp = '';
    for(var i in videos) {
      resp += `**${parseInt(i)+1}** | ${videos[i].title}\n`;
      
    }
    
    //if(!videos.length) return message.reply("No results found")
    
    resp += `\n**Choose a number inbetween 1-${videos.length}**`;
    
    message.channel.send(resp);
    
    const filter = m => !isNaN(m.content) && m.content < videos.lenth+1 && m.content > 0;
    
    const collector = message.channel.createMessageCollector(filter);
    
    collector.videos = videos;
    
    collector.once("collect", function(m){  
      let commandFile = require("./play.js");
      commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
    });
  });

}

module.exports.help = {
  name: "search"
};