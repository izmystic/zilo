const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('simleave')
    .setDescription('Simulate a user leave.'),
  async execute(interaction, client) {
    const member = interaction.member
    client.emit('guildMemberRemove', member)
    const joinSim = new EmbedBuilder()
      .setDescription('Leave Simulated')
      .setColor(client.config.embed.color)

    await interaction.reply({ embeds: [joinSim] })
  }
}