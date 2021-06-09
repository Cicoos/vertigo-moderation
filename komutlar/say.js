const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {       
let BoosterRole =  "844865107720798220" // Booster Rol ID

   var TotalMember = message.guild.memberCount
          var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          var Boost = message.guild.premiumSubscriptionCount;
          var BoostLevel = message.guild.premiumTier;
          var Booster = message.guild.member.premiumSubscriptionCount;
          var BoosterMember  = message.guild.members.cache.filter(b => b.roles.cache.get(BoosterRole)).size || 0;
          const arxEmbed = new Discord.MessageEmbed()
              .setColor('PURPLE')
              .setDescription(`
**Server Status**
▫️ Sunucumuzda \`${TotalMember}\` **toplam** kullanıcı bulunmaktadır.(\`${Online}\`) çevrimiçi!
▫️ Sunucumuzda **sesli odalarda** \`${Voice}\` kullanıcı bulunmaktadır.
▫️ Sunucuda \`${Boost}\` **takviye** bulunmaktadır. (\`${BoostLevel}\`) seviye!
▫️ Sunucuya \`${BoosterMember}\` **takviye kullanan kullanıcı** bulunmaktadır.
`)
message.channel.send(arxEmbed)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Say"],
  permLevel: 0
  };
  
  exports.help = {
  name: "say",
  };