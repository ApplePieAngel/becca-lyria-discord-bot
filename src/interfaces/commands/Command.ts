import {
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
} from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

import { BeccaLyria } from "../BeccaLyria";
import { ServerConfig } from "../database/ServerConfig";

export interface Command {
  data: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder;
  /**
   * Handles the logic for running a given command.
   *
   * @param {BeccaLyria} Becca Becca's Discord instance.
   * @param {CommandInteraction} interaction The interaction payload from Discord.
   * @param {ServerConfig} config The server configuration from the database.
   */
  run: (
    Becca: BeccaLyria,
    interaction: CommandInteraction,
    config: ServerConfig
  ) => Promise<void>;
}