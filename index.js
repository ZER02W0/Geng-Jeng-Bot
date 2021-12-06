const {Client, Intents, Message} = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client(
    {
        intents : [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_MESSAGES,
        ]
    }
);

client.on('ready', ()=>{
    console.log('your bot is ready')
} )

client.on('messageCreate', msg =>{
    if(msg.content == 'yeet'){
        msg.reply('yeet ทำด๋อยไร')
    }
})

client.on('messageCreate', msg =>{
    if(msg.content == 'แล้วทำไม'){
        msg.reply('มึงมีปัญหาอ่อ')
    }
})

client.login(process.env.TOKEN)