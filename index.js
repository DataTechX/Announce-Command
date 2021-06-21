const fs = require('fs');
const discord = require('discord.js');
const colors = require('colors')




const client = new discord.Client({disableEveryone: true});

client.config = require('./config/bot');
client.commands = new discord.Collection();


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
         client.commands.set(command.name.toLowerCase(), command);
    };
});

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for (const file of events) {
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};


client.login(client.config.discord.token);