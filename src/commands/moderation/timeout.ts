import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
  name: "timeout",
  description: "applies a timeout to the specified member",
};

export const options: CommandOptions = {
  devOnly: true,
  userPermissions: ["ModerateMembers"],
  botPermissions: ["ModerateMembers"],
  deleted: false,
};

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply({ content: "WIP, doesn't work", ephemeral: true });
}
