const Discord = require("discord.js");

module.exports.run = async (bot, message, args, ops) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Plz tag the user to kick, " + message.author + "!");
    let kReason = args.join(" ").slice(22);
    if(!kReason) return message.delete() + message.channel.send("**Pls Type The Reason!** " + message.author);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You dont have enough permission to kick!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That Person Can't be Kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("» Kick Log «")
    .setColor("#07b1bc")
    .addField("Kicked User", `${kUser}`)
    .addField("Kicked By", `<@${message.author.id}>`)
    .addField("Kick in", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let log = message.guild.channels.find(`name`, "log");
    if(!log) return message.channel.send("Can't Find log channel.");

    message.guild.member(kUser).kick(kReason);
    log.send(kickEmbed);

    return message.channel.send(kUser + " have been kicked!");
}

module.exports.help = {
  name: "kick"
};