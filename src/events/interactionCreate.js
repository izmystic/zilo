module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName)

        if (!command) return

        try {
            await command.execute(interaction, client)
        } catch (error) {
            console.error(error)
            await interaction.reply({ content: 'Could not execute this command', ephemeral: true })
        }
    }
}