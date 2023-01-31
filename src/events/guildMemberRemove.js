const goodbyeSchema = require('../models/goodbyeSchema')
const goodbyeData = {}

module.exports = {
    name: 'guildMemberRemove',
    async execute(member) {
        const { guild, id } = member

        let data = goodbyeData[guild.id]

        if (!data) {
            const results = await goodbyeSchema.findById(guild.id)
            if (!results) {
                return
            }

            const { channelId, text } = results
            const channel = guild.channels.cache.get(channelId)
            data = goodbyeData[guild.id] = [channel, text]
        }

        data[0].send({
            content: data[1].replace(/@/g, `<@${id}>`),
            allowedMentions: {
                users: [],
            },
        })
    }
}