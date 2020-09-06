const { Client, RichEmbed } = require("discord.js");
const bot = new Client();

const token = "NzM3MDE0MTkyODk2MzQ0MTQ1.Xx3L9A.KykXMVqRhJLtKHXtWrRlIaQ1qTw";

const PREFIX = "!";

bot.on("ready", () => {
  console.log("This bot is active!");
  bot.user.setActivity("Project X");
});

bot.on("message", message => {
  let args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "scriptfull":
      const Embed = new RichEmbed()
        .setTitle("Project X")
        .setColor(0xff0000)
        .setDescription("Welcome to ProjectX , We hoope you Enjoy!")
        .addField("```https://pastebin.com/raw/L7JMNaND```")
        .addField("** This is a Website Not the Script!**");
      message.author.send(Embed);
      message.reply(`Sent to Dms!`);
      break;
    case "scriptshort":
      const Embed3 = new RichEmbed()
        .setTitle("Project X")
        .setColor(0xff0000)
        .setDescription("Welcome to ProjectX , We hoope you Enjoy!")
        .addField("```https://pastebin.com/raw/k29xJax7```")
        .addField("** This is a Website Not the Script!**");
      message.author.send(Embed3);
      message.reply(`Sent to Dms!`);
      break;
    case "Purge":
  }
});

bot.login(token);
