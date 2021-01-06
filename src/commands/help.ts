import { EmbedFieldData } from "discord.js";
import { client, commands, commands_manager } from "../app";
import props from "../props";
import { Interaction, State } from "../";

export default {
  name: "help",
  options: [
    {
      type: 3,
      name: "scope",
      description: "Scope",
      required: false,
      choices: [{ name: "manager", value: "manager" }],
    },
  ],
  async execute(state: State, interaction: Interaction) {
    const isManager: boolean = interaction.data.options && interaction.data.options[0].value === "manager" ? true : false;
    const fields: EmbedFieldData[] = [];

    for (const [name, command] of !isManager ? commands : commands_manager) {
      fields.push({ name: name, value: `${command.aliases ? `(${command.aliases.join(", ")})\n` : ""}${state.locale.help[name]}`, inline: true });
    }

    return (await client.users.cache.get(interaction.member.user.id).createDM()).send({
      embed: {
        color: props.color.primary,
        title: `${props.bot.name} ${!isManager ? state.locale.help.help : state.locale.help.help_manager}`,
        url: props.bot.website,
        description: !isManager ? state.locale.help.description : state.locale.help.description_manager,
        thumbnail: { url: props.bot.icon },
        fields: fields,
      },
    });
  },
};
