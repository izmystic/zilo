const config = {
    token: '', // discord bot token
    mongoURi: '', // mongo uri

    clientID: '', // discord client id
    guildID: '', // discord guild id

    embed: {
        color: '#00f8bb', // embed color
        footer: '2022 Omni' // embed footer
    },

    fivem: {
        enabled: false, // enable/disable fivem integration
        refresh: '2m', // refresh rate of status
        server: 'ip:port' // fivem server ip:port
    },
}

module.exports = config