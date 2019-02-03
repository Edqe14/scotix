const ascii = require("ascii-art");

module.exports.run = async (bot, message, args, ops) => {
    ascii.font(args.join(" "), "Doom", function(rendered) {
        rendered = rendered.trimRight();

        if(rendered.length > 2000) return message.channel.send("Message too long!");

        message.channel.send(rendered, {
            code: "md"
        });
    });

}

module.exports.help = {
    name: "ascii"
  };