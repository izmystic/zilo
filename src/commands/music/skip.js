const { musicValidations } = require("@helpers/BotUtils");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "skip",
  description: "skip the current song",
  category: "MUSIC",
  validations: musicValidations,
  command: {
    enabled: true,
    aliases: ["next"],
  },
  slashCommand: {
    enabled: true,
  },

  async messageRun(message, args) {
    const response = await skip(message);
    await message.safeReply(response);
  },

  async interactionRun(interaction) {
    const response = await skip(interaction);
    await interaction.followUp(response);
  },
};

/**
 * @param {import("discord.js").CommandInteraction|import("discord.js").Message} arg0
 */
async function skip({ client, guildId }) {
  const player = client.musicManager.players.resolve(guildId);

  if (!player || !player.queue.current) {
    return "There is no song currently being played.";
  }

  const title = player.queue.current.info.title;

  if (player.queue.tracks.length === 0) {
    return "There is no next song to skip to.";
  }

  player.queue.next();
  return `⏯️ ${title} was skipped successfully.`;
}
