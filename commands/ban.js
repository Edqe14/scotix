const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Plz tag the user to ban, " + message.author + "!");
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.delete() + message.channel.send("**Pls Type The Reason!** " + message.author);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have enough permission to ban!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That Person Can't be Banned!");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("» Ban Log «")
    .setColor("#07b1bc")
    .addField("Banned User", `${bUser}`)
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Banned in", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let log = message.guild.channels.find(`name`, "log");
    if(!log) return message.channel.send("Can't Find log channel.");

    message.guild.member(bUser).ban(bReason);
    log.send(banEmbed);


    return message.channel.send(bUser + " have been banned!");
}

module.exports.help = {
  name: "ban"
};