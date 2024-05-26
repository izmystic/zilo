const { ApplicationCommandOptionType } = require("discord.js");

/**
 * @type {import("@structures/Command")}
 */
module.exports = {
  name: "leaveserver",
  description: "leave a server.",
  category: "OWNER",
  botPermissions: ["EmbedLinks"],
  command: {
    enabled: true,
    minArgsCount: 1,
    usage: "<serverId>",
  },
  slashCommand: {
    enabled: true,
    options: [
      {
        name: "serverid",
        description: "server id to leave",
        type: ApplicationCommandOptionType.String,
        required: true,
      },
    ],
  },

  async messageRun(message, args, data) {
    const input = args[0];
    const guild = message.client.guilds.cache.get(input);
    if (!guild) {
      return message.safeReply(
        `No server found. Please provide a valid server id.
        You may use ${data.prefix}findserver/${data.prefix}listservers to find the server id`
      );
    }

    const name = guild.name;
    try {
      await guild.leave();
      return message.safeReply(`Successfully Left \`${name}\``);
    } catch (err) {
      message.client.logger.error("GuildLeave", err);
      return message.safeReply(`Failed to leave \`${name}\``);
    }
  },

  async interactionRun(interaction) {
    const input = interaction.options.getString("serverid");
    const guild = interaction.client.guilds.cache.get(input);

    const name = guild.name;
    try {
      await guild.leave();
      return interaction.followUp(`Successfully Left \`${name}\``);
    } catch (err) {
      interaction.client.logger.error("GuildLeave", err);
      return interaction.followUp(`Failed to leave \`${name}\``);
    }
  },
};
