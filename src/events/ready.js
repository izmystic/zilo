const { ActivityType } = require('discord.js')
const axios = require('axios')
const ms = require('ms')

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Logged in as ${client.user.tag}`)
        let check = await axios({
            method: 'get',
            url: `http://${client.config.fivem.server}/dynamic.json`,
        }).catch(e => console.log('Failed to fetch FiveM Server info.'));
        if (!check) return;
        const status = (check.data.clients > 0) ? 'online' : 'idle'
        client.user.setPresence({ activities: [{ name: check.data ? status == 'online' ? `${check.data.clients}/${check.data.sv_maxclients} players` : '0 players' : '0 players', type: ActivityType.Watching }], status: status });
        if (client.config.fivem.enabled) {
            setInterval(async () => {
                let check = await axios({
                    method: 'get',
                    url: `http://${client.config.fivem.server}/dynamic.json`,
                }).catch(e => console.log('Failed to fetch FiveM Server info.'));
                if (!check) return;
                const status = (check.data.clients > 0) ? 'online' : 'idle'
                client.user.setPresence({ activities: [{ name: check.data ? status == 'online' ? `${check.data.clients}/${check.data.sv_maxclients} players` : '0 players' : '0 players', type: ActivityType.Watching }], status: status });
            }, ms(`${client.config.fivem.refresh}`))
        }
    }
}