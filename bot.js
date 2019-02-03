const Discord = require("discord.js");
const fs = require("fs");
const express = require('./express.js');
const config = require('./config.json');
const bot = new Discord.Client({disableEveryone: true});

const active = new Map();
const data = new Map();

/*function randomStatus() {
	let status = ["Scotix | Alpha 1.1", "!~Edqe_#2201"]
    let rstatus = Math.floor(Math.random() * status.length);
    bot.user.setActivity(status[rstatus], {type: 'LISTENING'});

    }; setInterval(randomStatus, 5000); */
bot.on("ready", async () => {
  console.log("Bot Ready")
  
});
  
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
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0].toLowerCase();
  let args = messageArray.slice(1);
  
  let ops = {
      active: active,
      data: data
  }
  
  if(command.startsWith(bot.user)) return message.channel.send(`Hello ${message.author}, do >help to show help`)
  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args, ops);
});

bot.login(process.env.TOKEN);