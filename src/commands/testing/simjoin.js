const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('simjoin')
        .setDescription('Simulate a user join.'),
    async execute(interaction, client) {
        const member = interaction.member
        client.emit('guildMemberAdd', member)
        return interaction.reply({ content: 'Join simulated.', ephemeral: true })
    }
}