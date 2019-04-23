const Discord = require("discord.js");
const fs = require("fs");
const config = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});

const web = require("./express")

const active = new Map();
const data = new Map();

let online = null;

function randomStatus() {
	let status = [`${bot.guilds.size} servers`, "!~Edqe_#4899"]
    let rstatus = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[rstatus], {type: 'LISTENING'});

}; setInterval(randomStatus, 15000); 

bot.on("ready", async () => {
  console.log(`Bot Ready, serving on ${bot.guilds.size} servers with ${bot.users.size} users`)
  online = true
});

bot.on("disconnect", async () => {
  console.log("Bot disconnected")
  online = false
})
  
bot.commands = new Discord.Collection();

let dir = ["./commands/", "./admin/"] 

fs.readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");

  if (jsfiles.length <= 0) return console.log("There are no commands to load...");
  
  console.log(`Loading ${jsfiles.length} commands...`);
  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);
    bot.commands.set(props.help.name, props);
    bot.commands.set(props.help.alias, props);
  });
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  // let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  
  let ops = {
      active: active,
      data: data
  }

  let prefixes = JSON.parse(fs.readFileSync("/prefixes.json", "utf8"))
  
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    }
  }
  
  let prefix = prefixes[message.guild.id].prefixes
  
  if(command.startsWith(bot.user)) return message.channel.send(`Hello ${message.author}, do ${prefix}help to show help`)
  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args, ops, data);
});

bot.login(process.env.TOKEN);
