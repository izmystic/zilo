const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('timeout')
    .setDescription('Timeouts a user')
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to timeout'))
    .addNumberOption(option => option.setName('duration').setRequired(true).setDescription('Duration to timeout the user for '))
    .addStringOption(option => option.setName('reason').setDescription('Reason to timeout the user'))
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers),
  async execute(interaction) {
    const timeoutUser = interaction.options.getMember('user')
    const timeoutDuration = interaction.options.getNumber('duration')
    let timeoutReason = interaction.options.getString('reason')

    if (!timeoutUser) await interaction.reply({ content: 'User not found', ephemeral: true })
    if (!timeoutDuration) await interaction.reply({ content: 'Duration provided is not a valid number', ephemeral: true })
    if (!timeoutReason) timeoutReason = 'No reason provided'

    timeoutUser.timeout(timeoutDuration * 60 * 1000, timeoutReason)

    await interaction.reply({ content: `<@${timeoutUser.id}> (${timeoutUser.user.tag}) has been timedout.`, ephemeral: true })
  }
}