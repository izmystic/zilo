const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Gives information about a user')
        .addUserOption(option => option.setName('user').setDescription('The user to get information about')),
    async execute(interaction, client) {
        const user = interaction.options.getUser('user')
        const userEmbed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setFooter({ text: client.config.embed.footer })
            .setTimestamp()

        if (user) {
            userEmbed.setTitle(`${user.username}'s Information:`)
            userEmbed.setThumbnail(user.displayAvatarURL())
            userEmbed.addFields(
                { name: '📛 | __Username__:', value: `${user.username}` },
                { name: '🪪 | __ID__:', value: `${user.id}` },
                { name: '#️⃣ | __Tag__:', value: `${user.discriminator}` }
            )
        } else {
            userEmbed.setTitle(`${interaction.user.username}'s Information:`)
            userEmbed.setThumbnail(interaction.user.displayAvatarURL())
            userEmbed.addFields(
                { name: '📛 | __Username__:', value: `${interaction.user.username}` },
                { name: '🪪 | __ID__:', value: `${interaction.user.id}` },
                { name: '#️⃣ | __Tag__:', value: `${interaction.user.discriminator}` }
            )
        }

        await interaction.reply({ embeds: [userEmbed] })
    }
}