const goodbyeSchema = require('../../models/goodbyeSchema')
const { SlashCommandBuilder, ChannelType, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setgoodbye')
    .setDescription('Sets the goodbye channel')
    .addChannelOption(option => option.setName('channel').setRequired(true).setDescription('Channel for the goodbye message'))
    .addStringOption(option => option.setName('text').setRequired(true).setDescription('Text for the goodbye message'))
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction) {
    const goodbyeChannel = interaction.options.getChannel('channel')
    const goodbyeMessage = interaction.options.getString('text')

    if (!goodbyeChannel || goodbyeChannel.type !== ChannelType.GuildText) {
      return interaction.reply({ content: 'Please mention a text channel', ephemeral: true })
    }

    await goodbyeSchema.findOneAndUpdate({
      _id: interaction.guild.id
    }, {
      _id: interaction.guild.id,
      text: goodbyeMessage,
      channelId: goodbyeChannel.id
    }, {
      upsert: true
    })

    await interaction.reply({ content: 'Goodbye channel set!', ephemeral: true })
  }
}