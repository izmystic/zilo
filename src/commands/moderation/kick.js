const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('Kick a user')
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to kick'))
    .addStringOption(option => option.setName('reason').setDescription('Reason to kick the user'))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
  async execute(interaction) {
    const kickUser = interaction.options.getMember('user')
    let kickReason = interaction.options.getString('reason')
    if (!kickReason) kickReason = 'No reason provided'

    if (!kickUser.kickable) {
      await { custom: true, content: 'I cannot kick this user', ephemeral: true }
    }

    kickUser.kick(kickReason)

    await interaction.reply({ content: `Kicked <@${kickUser.id}> (${kickUser.user.tag})`, ephemeral: true })
  }
}