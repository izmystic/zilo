const welcomeSchema = require('../../models/welcomeSchema')
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setwelcomce')
    .setDescription('Sets the welcome channel')
    .addChannelOption(option => option.setName('channel').setRequired(true).setDescription('Channel for the welcome message'))
    .addStringOption(option => option.setName('text').setRequired(true).setDescription('Text for the welcome message'))
    .addRoleOption(option => option.setName('role').setRequired(true).setDescription('Role to give on member join'))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const welcomeChannel = interaction.options.getChannel('channel')
    const welcomeMessage = interaction.options.getString('text')
    const welcomeRole = interaction.options.getRole('role')

    if (!welcomeChannel || welcomeChannel.type !== ChannelType.GuildText) {
      return interaction.reply({ content: 'Please mention a text channel', ephemeral: true })
    }

    await welcomeSchema.findOneAndUpdate({
      _id: interaction.guild.id
    }, {
      _id: interaction.guild.id,
      text: welcomeMessage,
      channelId: welcomeChannel.id,
      roleId: welcomeRole
    }, {
      upsert: true
    })

    await interaction.reply({ content: 'Welcome channel set!', ephemeral: true })
  }
}