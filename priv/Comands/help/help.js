const {RichEmbed} = require('discord.js');
var listComands = require('./listComands.json');

const help = (message) => {

    const embed = new RichEmbed()

    embed.setColor('#0099ff')
	embed.setTitle('COMANDOS')
	embed.setURL('https://discord.js.org/')
    embed.setAuthor('Rank Bot', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
    //embed.setDescription('')
	//embed.setThumbnail('https://i.imgur.com/wSTFkRM.png')

    for (var comand in listComands){
        console.log(comand + " = " + listComands[comand]);
        console.log(listComands[comand]);

        embed.addField(listComands[comand].name, listComands[comand].descript);
        embed.addBlankField();

    }

    embed.setTimestamp()
    embed.setFooter('prefix + comand', '');
    message.channel.send(embed);

    
}

module.exports.help = help;