const Discord = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
exports.run = async (client, message, args) => {
let yetkili = ['847393233997922334',"847393236830257182" ]
if(!["847393232207872001"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send(`Bu Komtu Kullanabilmek İçin Yeterli Yetkiye Sahip Değilsin`).then(x => x.delete({timeout: 5000}));
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!member) return message.channel.send('Bir üye etiketlemelisin.').then(x => x.delete({timeout: 5000}));
 member.roles.add(yetkili)
  let embed = new Discord.MessageEmbed()
  .setColor('PURPLE')
  .setDescription(`${member} Adlı Kişiye Başarıyla Deneme Yetkili Rolü Verildi`)
message.channel.send(embed)
} 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yetkili'],
  permLevel: 0
}
exports.help = {
  name: 'yt',
  description: "Belirtilen üyeye kayıtsız rolü verir",
  usage: 'yt @kişi'
}