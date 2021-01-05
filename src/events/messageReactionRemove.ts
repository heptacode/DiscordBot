import { MessageReaction, User } from "discord.js";
import firestore from "../modules/firestore";
import { ReactionRole } from "../";
import { getHexfromEmoji } from "../modules/converter";
import props from "../props";
import { client } from "../app";
import Log from "../modules/logger";

export default () => {
  client.on("messageReactionRemove", async (reaction: MessageReaction, user: User) => {
    if (reaction.me) return;
    if (reaction.partial) {
      try {
        await reaction.fetch();
      } catch (err) {
        Log.e(`MessageReactionRemove > Fetch > ${err}`);
        return;
      }
    }
    try {
      const reactionRoles: ReactionRole[] = (await firestore.collection(reaction.message.guild.id).doc(reaction.message.channel.id).get()).data().reactionRoles;
      const reactionRole = reactionRoles.find((reactionRole: ReactionRole) => reactionRole.emoji === getHexfromEmoji(reaction.emoji.name));
      // Check If Role Exists
      if (!reactionRole || !reaction.message.guild.roles.cache.has(reactionRole.role)) return;
      // Check If User Has Role
      if (!reaction.message.guild.member(user).roles.cache.has(reactionRole.role)) return;
      reaction.message.guild.member(user).roles.remove(reactionRole.role);
      return await Log.p({
        guild: reaction.message.guild,
        embed: {
          color: props.color.info,
          author: { name: "Role Remove [ReactionRole]", iconURL: user.avatarURL() },
          description: `<@${user.id}> -= <@&${reactionRole.role}>`,
          timestamp: new Date(),
        },
      });
    } catch (err) {
      Log.e(`MessageReactionRemove > ${err}`);
    }
  });
};
