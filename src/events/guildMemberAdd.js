const welcomeSchema = require('../models/welcomeSchema')
const welcomeData = {}

module.exports = {
  name: 'guildMemberAdd',
  async execute(member) {
    const guild = member.guild
    let data = welcomeData[guild.id]

    if (!data) {
      const results = await welcomeSchema.findById(guild.id)
      if (!results) {
        return
      }

      const { channelId, text, roleId } = results
      const channel = guild.channels.cache.get(channelId)
      const role = guild.roles.cache.get(roleId)
      data = welcomeData[guild.id] = [channel, text, role]
    }

    data[0].send({
      content: data[1].replace(/@/g, `<@${member.id}> (${member.user.username})`),
      allowedMentions: {
        users: [],
      },
    })
    member.roles.add(data[2])
  }
}