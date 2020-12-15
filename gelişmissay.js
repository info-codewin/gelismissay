const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    let tag = "tag" // tagınız  
    let sunucu = ""; //sunucu ID
    let boostcuk = "";
  let erkeğibul = message.guild.roles.get("").members;//erkek rol
   let kadınıbul = message.guild.roles.get("").members;//kız rol
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
let boost = message.guild.members.filter(r=>r.roles.has(boostcuk)).size
    const embed = new Discord.RichEmbed()
        .addField("Toplam Üye ", message.guild.memberCount)
        .addField("Aktif Üye  ", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField("Seslideki üye sayısı ", count)
        .addField("Bostlayan Üye Sayısı ", boost)
        .addField("Taglı Üye Sayısı", message.guild.members.filter(m => m.user.username.includes("tag")).size) // tagınız yoksa bu satrı silin
        .addField("**Kadın Üye sayısı:**", `${kadınıbul.size}`)
        .addField("**Erkek Üye sayısı:**", `${erkeğibul.size}`)
        .setFooter(`${message.author.tag} tarafından istendi`, message.author.avatarURL)
    message.channel.send(embed);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Sunucudaki Ses,Üye,Tag Alan Ve Boost Basan Kullanıcıları GÖsterir.',
    usage: 'say'
};
