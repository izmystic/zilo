import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
  name: "kick",
  description: "kicks the specified member",
};

export const options: CommandOptions = {
  devOnly: true,
  userPermissions: ["KickMembers"],
  botPermissions: ["KickMembers"],
  deleted: false,
};

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply({ content: "WIP, doesn't work", ephemeral: true });
}
