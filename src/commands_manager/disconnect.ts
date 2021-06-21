import { createError } from "../modules/createError";
import { checkPermission } from "../modules/permissionChecker";
import { client } from "../app";
import props from "../props";
import { Interaction, Locale, State } from "../";

export default {
  name: "disconnect",
  version: 2,
  options(locale: Locale) {
    return [{ type: 6, name: "user", description: locale.user, required: true }];
  },
  async execute(state: State, interaction: Interaction) {
    try {
      if (await checkPermission(state.locale, { interaction: interaction }, "MOVE_MEMBERS")) throw new Error("Missing Permissions");

      await client.guilds
        .resolve(interaction.guild_id)
        .member(interaction.member.user.id)
        .voice.kick(`[Disconnect] Executed by ${interaction.member.user.username}#${interaction.member.user.discriminator}}`);

      return [
        {
          color: props.color.purple,
          title: `**⚙️ ${state.locale.disconnect.disconnect}**`,
          description: `✅ **${state.locale.disconnect.disconnected
            .replace("{voiceChannel}", client.guilds.resolve(interaction.guild_id).channels.resolve(interaction.data.options[0].value).name)
            .replace("{cnt}", "1")}**`,
        },
      ];
    } catch (err) {
      createError("Disconnect", err, { interaction: interaction });
    }
  },
};
