import { Client, GatewayIntentBits } from "discord.js";
import { CommandKit } from "commandkit";
import path from "path";

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

new CommandKit({
  client,
  commandsPath: path.join(__dirname, "commands"),
  eventsPath: path.join(__dirname, "events"),
  devGuildIds: ["1157101410710736946"],
  devUserIds: ["680957940647329829", "739219467455823921"],
  skipBuiltInValidations: true,
  bulkRegister: true,
});

client.login(process.env.DISCORD_TOKEN);
