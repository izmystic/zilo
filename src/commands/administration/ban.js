const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Ban a user')
    .addUserOption(option => option.setName('user').setRequired(true).setDescription('The user to ban'))
    .addStringOption(option => option.setName('reason').setDescription('Reason to ban the user'))
    .addNumberOption(option => option.setName('days').setDescription('Amount of messages to delete').addChoices(
      { name: 'Previous Day', value: 1 },
      { name: 'Previous 2 Days', value: 2 },
      { name: 'Previous 3 Days', value: 3 },
      { name: 'Previous 4 Days', value: 4 },
      { name: 'Previous 5 Days', value: 5 },
      { name: 'Previous 6 Days', value: 6 },
      { name: 'Previous 7 Days', value: 7 },
    ))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
  async execute(interaction) {
    const banUser = interaction.options.getMember('user')
    let banReason = interaction.options.getString('reason')
    const banDeleteMessageDays = interaction.options.getNumber('days')
    if (!banReason) banReason = 'No reason provided'

    if (!banUser.bannable) {
      await interaction.reply({ content: 'I cannot ban this user', ephemeral: true })
    }

    banUser.ban({
      reason: banReason,
      deleteMessageDays: banDeleteMessageDays
    })

    await interaction.reply({ content: `Banned <@${banUser.id}> (${banUser.user.tag})`, ephemeral: true })
  }
}