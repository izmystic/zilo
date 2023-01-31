const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unbans a user')
        .addStringOption(option => option.setName('user').setRequired(true).setDescription('The user to unban'))
        .addStringOption(option => option.setName('reason').setDescription('Reason to unban the user'))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
    async execute(interaction) {
        const unbanID = interaction.options.getString('user')
        let unbanReason = interaction.options.getString('reason')
        if (!unbanReason) unbanReason = 'No reason provided'

        await interaction.guild.bans.fetch().then(async bans => {
            if (bans.size == 0) await interaction.reply({ content: 'No bans found', ephemeral: true })
            let bannedId = bans.find(ban => ban.user.id == unbanID)
            if (!bannedId) await interaction.reply({ content: 'User not found', ephemeral: true })
            await interaction.guild.members.unban(bannedId.user, unbanReason)
            await interaction.reply({ content: `Unbanned <@${bannedId.user.id}> (${bannedId.user.tag})`, ephemeral: true })
        })
    }
}