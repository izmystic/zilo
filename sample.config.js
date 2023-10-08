module.exports = {
    OWNER_IDS: [""], // bot owner ids
    SUPPORT_SERVER: "", // bot support server invite url
    PREFIX_COMMANDS: {
        ENABLED: true, // enable/disable prefix commands
        DEFAULT_PREFIX: "!", // default prefix
    },
    INTERACTIONS: {
        SLASH: true, // enable slash interactions
        CONTEXT: true, // enable context interactions
        GLOBAL: true, // enable global interactions
        TEST_GUILD_ID: "xxxxxxxxxxx", // testing guild id (test commands here first)
    },
    EMBED_COLORS: {
        BOT_EMBED: "#068ADD", // general bot embed color
        TRANSPARENT: "#36393F", // invisible embed color
        SUCCESS: "#00A56A", // success embed color
        ERROR: "#D61A3C", // error embed color
        WARNING: "#F7E919", // warning embed color
    },
    CACHE_SIZE: {
        GUILDS: 100,
        USERS: 10000,
        MEMBERS: 10000,
    },
    MESSAGES: {
        API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
    },

    // PLUGINS

    AUTOMOD: {
        ENABLED: true, // enable/disable automod
        LOG_EMBED: "#36393F", // log embed color
        DM_EMBED: "#36393F", // dm embed color
    },

    ECONOMY: {
        ENABLED: true, // enable/disable economy
        CURRENCY: "₪", // currency symbol
        DAILY_COINS: 100, // coins to be received by daily command
        MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
        MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
    },

    MUSIC: {
        ENABLED: true, // enable/disable music system
        IDLE_TIME: 60, // seconds before bot disconnects from an idle voice channel
        MAX_SEARCH_RESULTS: 5, // maximum search results
        DEFAULT_SOURCE: "SC", // YT = youtube, YTM = youtube music, SC = sound cloud
        // add lavalink nodes here, https://github.com/freyacodes/Lavalink
        LAVALINK_NODES: [
            {
                host: "localhost",
                port: 2333,
                password: "youshallnotpass",
                id: "Local Node",
                secure: false,
            },
        ],
    },

    GIVEAWAYS: {
        ENABLED: true, // enable/disable giveaways
        REACTION: "🎁", // giveaway reaction emoji
        START_EMBED: "#FF468A", // giveaway start embed color
        END_EMBED: "#FF468A", // giveaway end embed color
    },

    IMAGE: {
        ENABLED: true, // enable/discord image manipulation
        BASE_API: "https://strangeapi.fun/api", // api link
    },

    INVITE: {
        ENABLED: true, // enable/disable invite tracking
    },

    MODERATION: {
        ENABLED: true, // enable/disable moderation
        EMBED_COLORS: {
            TIMEOUT: "#102027", // timeout embed color
            UNTIMEOUT: "#4B636E", // untimeout embed color
            KICK: "#FF7961", // kick embed color
            SOFTBAN: "#AF4448", // softban embed color
            BAN: "#D32F2F", // ban embed color
            UNBAN: "#00C853", // unban embed color
            VMUTE: "#102027", // vmute embed color
            VUNMUTE: "#4B636E", // vunmute embed color
            DEAFEN: "#102027", // deafen embed color
            UNDEAFEN: "#4B636E", // undeafen embed color
            DISCONNECT: "RANDOM", // disconnect embed color
            MOVE: "RANDOM", // move embed color
        },
    },

    PRESENCE: {
        ENABLED: true, // enable/disable presence
        STATUS: "online", // current status (online, idle, dnd, invisible)
        TYPE: "WATCHING", // status type (PLAYING, LISTENING, WATCHING, COMPETING)
        MESSAGE: "{members} members in {servers} servers", // status message ({members}, {servers})
    },

    STATS: {
        ENABLED: true, // enable/disable stat tracking
        XP_COOLDOWN: 5, // cooldown in seconds between messages
        DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**", // level up message ({server}, {count}, {member:id}, {member:name}, {member:mention}, {member:tag}, {level})
    },

    SUGGESTIONS: {
        ENABLED: true, // enable/disable suggestions
        EMOJI: {
            UP_VOTE: "⬆️", // upvote emoji
            DOWN_VOTE: "⬇️", // downvote emoji
        },
        DEFAULT_EMBED: "#4F545C", // default suggestion embed
        APPROVED_EMBED: "#43B581", // approved suggestion embed
        DENIED_EMBED: "#F04747", // denied suggestion embed
    },

    TICKET: {
        ENABLED: true, // enable/disable ticket system
        CREATE_EMBED: "#068ADD", // create ticket embed color
        CLOSE_EMBED: "#068ADD", // close ticket embed color
    },
};