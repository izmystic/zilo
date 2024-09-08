import type { CommandData, SlashCommandProps, CommandOptions, CommandObject } from "commandkit";
import { ApplicationCommandType, EmbedBuilder } from "discord.js";

export const data: CommandData = {
  name: "help",
  description: "shows all commands and what they do",
};

export const options: CommandOptions = {
  devOnly: true,
  userPermissions: ["SendMessages"],
  botPermissions: ["SendMessages"],
  deleted: false,
};

export function run({ interaction, handler }: SlashCommandProps) {
  const commands = handler?.commands;
  if (!commands) {
    console.error("Commands are undefined");
    return;
  };
  try {
    const userCommands = commands.filter(command => !(command.options?.devOnly || command.category === "developer"));
    for (const command of userCommands) {
      const embed = new EmbedBuilder().setTitle(`Command: ${command.data.name}`);
  
      if (command.data.type === ApplicationCommandType.ChatInput) {
        if (interaction.channel) {
          interaction.channel.send({ embeds: [embed] });
        } else {
          console.error("Interaction channel is undefined");
        }
      }
  
      interaction.channel?.send({ embeds: [embed] });
    }
  } catch (error) {
    console.error(error);
    if (interaction) {
      interaction.reply({ content: "An error occurred while fetching the commands", ephemeral: true });
    } else {
      console.error("Interaction is undefined");
    }
  }
}
