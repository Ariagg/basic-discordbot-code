const Discord = require('discord.js');

const bot = new Discord.Client();

const PREFIX = '^^'; //change whatever you like



bot.on('ready', () => {
    console.log('bot is online!');
    bot.user.setActivity('Change-Me', { type: 'LISTENING'}).catch(console.error); //change the activity or status whatever you like
});

bot.on('message', message=>{

    //channel reaction command will be downhere
    if(message.channel.name === 'paste-Your-server-channel-name-here'){
        message.react("🔥") //you can change whatever emote you like
    }
    
    if(!message.content.startsWith(PREFIX) || message.author.bot)return;    
    let args = message.content.substring(PREFIX.length).trim().split(" ");
    
    // command bot will be downhere

    switch(args[0]){
        case 'suggest':
            message.reply('Suggestion recorded !, suggestion has been sent to a @moderator')
        break;
        case 'hi':
            message.reply('hello there :D')
            break;            
    }
})


bot.login('paste-your-token-here');

//this is a basic code. develop you own bot !
