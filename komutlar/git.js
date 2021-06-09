const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Ses kanalında olman lazım!");
}
const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first();
if (!kullanıcı) return message.channel.send('Bir Kullanıcı Belirt.');

let rol = message.mentions.roles.first();
let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete(5000));

  
let log = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`${kullanıcı}, ${message.author} \`${kullanıcı.voice.channel.name}\` Odasına Gelmek İstiyor. Kabul Ediyormusun ?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let kabul = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`${kullanıcı} Odaya Gelmeni Onayladı.`)
message.channel.send(kabul)
message.member.voice.setChannel(kullanıcı.voice.channel.id)
} else {
let striga = new Discord.MessageEmbed()
.setColor("PURPLE")
.setDescription(`${kullanıcı} Odaya Gelmeni Onaylamadı.`)
message.channel.send(striga)
}
})}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [".,"],
  permLevel: 0,
}

exports.help = {
  name: ".,"
};