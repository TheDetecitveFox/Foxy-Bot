const Discord = require('discord.js');
module.exports = {
    name: "support",
    description: "This Command Will Give You A Link For The Support Server",
    run:async(client,message, args) => {
        const supembed = new Discord.MessageEmbed()
        .setColor('#ffbb00')
        .setTitle('Discord Support Server')
        .setURL('https://discord.gg/CsxpcqwKnt')
        .setDescription('Discord Support Server You Can Meet Owner And Report Bugs Or Suggest Stuff In That Discord!!')
        .setFooter('Join When You Need Help');
            message.channel.send(supembed);
    }
}