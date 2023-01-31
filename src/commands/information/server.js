const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gives information about the server'),
    async execute(interaction, client) {
        const bans = await interaction.guild.bans.fetch()
        const serverEmbed = new EmbedBuilder()
            .setTitle('Server Information')
            .addFields(
                { name: '🏷️ | __Name__:', value: `${interaction.guild.name}`, inline: true },
                { name: '📅 | __Created At__:', value: interaction.guild.createdAt.toLocaleDateString() + ' ' + interaction.guild.createdAt.toLocaleTimeString(), inline: true },
                { name: '🧑 | __Members__:', value: interaction.guild.members.cache.filter(member => !member.user.bot).size + ' Members | ' + interaction.guild.members.cache.filter(member => member.user.bot).size + ' Bots', inline: true },
                { name: '😴 | __AFK Channel__:', value: `${interaction.guild.afkChannel || 'No AFK Channel'}`, inline: true },
                { name: '🪪 | __ID__:', value: `${interaction.guild.id}`, inline: true },
                { name: '👑 | __Owner__:', value: `${await interaction.guild.fetchOwner()}`, inline: true },
                { name: '🚀 | __Boost Count__:', value: `${interaction.guild.premiumSubscriptionCount || '0'}`, inline: true },
                { name: '🔨 | __Ban Count__:', value: `${bans.size}`, inline: true },
                { name: '📰 | __Channels__:', value: interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildText).size + ' Text | ' + interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildVoice).size + ' Voice | ' + interaction.guild.channels.cache.filter(channel => channel.type === ChannelType.GuildCategory).size + ' Categories', inline: true }
            )

            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer })
            .setTimestamp()

        await interaction.reply({ embeds: [serverEmbed] })
    }
}