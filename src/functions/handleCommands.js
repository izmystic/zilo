const { Routes } = require('discord.js')
const { REST } = require("@discordjs/rest")
const fs = require('fs')

module.exports = (client) => {
  client.handleCommands = async (commandFolders, path) => {
    client.commandArray = []
    for (folder of commandFolders) {
      const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('js'))
      for (const file of commandFiles) {
        const command = require(`../commands/${folder}/${file}`)

        client.commands.set(command.data.name, command)
        client.commandArray.push(command.data.toJSON())
        console.log(`Loaded Command ${command.data.name}`)
      }
    }
    const rest = new REST({
      version: '10'
    }).setToken(client.config.token);

    (async () => {
      try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(client.config.clientID), {
          body: client.commandArray
        })

        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
    })();
  }
}