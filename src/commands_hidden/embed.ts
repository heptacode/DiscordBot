import { Message, MessageEmbed, TextChannel } from "discord.js";
import { getChannelID } from "../modules/converter";
import { Args, State } from "../";
import Log from "../modules/logger";

export default {
  name: "embed",
  async execute(state: State, message: Message, args: Args) {
    try {
      if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(state.locale.insufficientPerms.manage_messages).then((_message: Message) => _message.delete({ timeout: 5000 }));

      const textChannel = getChannelID(message.guild, args[0]);
      args.shift();
      // replace(/\n/g, "\\n")
      const embed = JSON.parse(args.join(" "));

      await (message.guild.channels.cache.get(textChannel) as TextChannel).send({ embed: embed as MessageEmbed });
      return message.react("✅");
    } catch (err) {
      message.react("❌");
      Log.e(`Embed > ${err}`);
    }
  },
};
