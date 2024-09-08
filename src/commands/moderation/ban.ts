import type { CommandData, SlashCommandProps, CommandOptions } from "commandkit";

export const data: CommandData = {
  name: "ban",
  description: "bans the specified member",
};

export const options: CommandOptions = {
  devOnly: true,
  userPermissions: ["BanMembers"],
  botPermissions: ["BanMembers"],
  deleted: false,
};

export function run({ interaction, client, handler }: SlashCommandProps) {
  interaction.reply({ content: "WIP, doesn't work", ephemeral: true });
}
