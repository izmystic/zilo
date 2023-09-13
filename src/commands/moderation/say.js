const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('say')
    .setDescription('Say a message as a bot')
    .addStringOption(option => option.setName('message').setDescription('Message for the bot to sayt'))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages),
  async execute(interaction) {
    let message = interaction.options.getString('message')
    if (!message) {
      return interaction.reply({ content: 'Please input a message for me to send', ephemeral: true })
    }

    interaction.reply({ content: 'sent', ephemeral: true })
    interaction.deleteReply();
    interaction.channel.send({ content: message })
  }
}