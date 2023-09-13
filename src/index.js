const { Client, GatewayIntentBits, Collection } = require('discord.js')
const fs = require('fs')

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildPresences],
})

client.config = require('../config')
client.commands = new Collection()

const functions = fs.readdirSync('./src/functions').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync('./src/commands');

(async () => {
  for (file of functions) {
    require(`./functions/${file}`)(client)
  }
  client.handleEvents(eventFiles, './src/events')
  client.handleCommands(commandFolders, './src/commands')
  client.login(client.config.token)
  client.dbLogin()
})()
