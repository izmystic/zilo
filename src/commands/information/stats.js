const discord = require('discord.js')
const { SlashCommandBuilder, EmbedBuilder } = discord

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('Gives information about the bot'),
  async execute(interaction, client) {
    let totalSeconds = (client.uptime / 1000)
    let days = Math.floor(totalSeconds / 86400)
    totalSeconds %= 86400
    let hours = Math.floor(totalSeconds / 3600)
    totalSeconds %= 3600
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)
    const statEmbed = new EmbedBuilder()
      .setTitle('Bot Stats')
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: '📊 | __Statistics__:', value: `Servers: ${client.guilds.cache.size}\nUsers: ${client.users.cache.size}` },
        { name: '⚙️ | __Using__:', value: `Discord.js: ${discord.version}\n Nodejs: ${process.versions.node}` },
        { name: '🖥 | __Ram__:', value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB` },
        { name: '⏳ | __Uptime__:', value: `Online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds` },
        { name: '🏓 | __Ping__:', value: `Latency is: ${client.ws.ping}ms`, inline: true },
      )

      .setColor(client.config.embed.color)
      .setFooter({ text: client.config.embed.footer })
      .setTimestamp()

    await interaction.reply({ embeds: [statEmbed] })
  }
}