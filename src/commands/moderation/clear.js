const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('clear')
    .setDescription('Clears a defined amount of messages from a channel')
    .addNumberOption(option => option.setName('number').setRequired(true).setDescription('The amount of messages to delete'))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction) {
    const amount = interaction.options.getNumber('number')
    const { size } = await interaction.channel.bulkDelete(amount, true)

    await interaction.reply({ content: `Deleted ${size} message(s)`, ephemeral: true })
  }
}