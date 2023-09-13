const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('simjoin')
    .setDescription('Simulate a user join.'),
  async execute(interaction, client) {
    const member = interaction.member
    client.emit('guildMemberAdd', member)
    const joinSim = new EmbedBuilder()
      .setDescription('Join Simulated')
      .setColor(client.config.embed.color)

    await interaction.reply({ embeds: [joinSim] })
  }
}