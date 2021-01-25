import { EmbedFieldData, Message } from "discord.js";
import ytdl from "ytdl-core";
import youtube from "scrape-youtube";
import { getLength } from "./converter";
import { sendEmbed } from "./embedSender";
import Log from "./logger";
import { voiceConnect, voiceDisconnect, voiceStateCheck } from "./voiceManager";
import { client } from "../app";
import props from "../props";
import { Interaction, State } from "../";

export const play = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    if (!interaction.data.options && state.queue.length !== 0) {
      if (!state.isPlaying) return state.connection.dispatcher.resume();
      else
        return sendEmbed(
          { interaction: interaction },
          {
            color: props.color.cyan,
            description: `💿 **${state.locale.music.currentlyPlaying}**`,
          },
          { guild: true }
        );
    } else if (!interaction.data.options && state.queue.length <= 0)
      return sendEmbed(
        { interaction: interaction },
        {
          color: props.color.red,
          description: `🗑 **${state.locale.music.queueEmpty}**`,
        },
        { guild: true }
      );

    const result = (await youtube.search(interaction.data.options[0].value, { type: "video" })).videos;
    if (result.length >= 1) {
      if (result.length === 1) {
        state.queue.push({
          title: result[0].title,
          channelName: result[0].channel.name,
          length: result[0].duration,
          thumbnailURL: result[0].thumbnail,
          videoURL: result[0].link,
          requestedBy: { tag: `${interaction.member.user.username}#${interaction.member.user.discriminator}`, avatarURL: client.users.cache.get(interaction.member.user.id).avatarURL() },
        });
      } else {
        // Query Search
        state.queue.push({
          title: result[0].title,
          channelName: result[0].channel.name,
          length: result[0].duration,
          thumbnailURL: result[0].thumbnail,
          videoURL: result[0].link,
          requestedBy: { tag: `${interaction.member.user.username}#${interaction.member.user.discriminator}`, avatarURL: client.users.cache.get(interaction.member.user.id).avatarURL() },
        });
        // return message.channel.send(locale.urlInvalid);
      }

      if (state.queue && state.queue.length === 1) {
        return stream(state, interaction);
      } else {
        const fields: EmbedFieldData[] = [
          { name: state.locale.music.length, value: getLength(state.queue[state.queue.length - 1].length), inline: true },
          { name: state.locale.music.position, value: state.queue.length - 1, inline: true },
          { name: "\u200B", value: "─────────────────────" },
        ];
        for (const i in state.queue) {
          fields.push({ name: `#${i}`, value: state.queue[i].title });
        }
        fields.push({ name: "\u200B", value: `${state.isPlaying ? "▶️" : "⏹"}${state.isLooped ? " 🔁" : ""}${state.isRepeated ? " 🔂" : ""}` });

        return sendEmbed(
          { interaction: interaction },
          {
            color: props.color.cyan,
            author: { name: state.locale.music.enqueued, iconURL: props.icon.enqueue, url: props.bot.website },
            title: state.queue[state.queue.length - 1].title,
            url: state.queue[state.queue.length - 1].videoURL,
            description: state.queue[state.queue.length - 1].channelName,
            thumbnail: { url: state.queue[state.queue.length - 1].thumbnailURL },
            fields: fields,
          },
          { guild: true }
        );
      }
    } else {
      return sendEmbed(
        { interaction: interaction },
        {
          color: props.color.red,
          description: `❌ **${state.locale.music.noResult}**`,
        }
      );
    }
  } catch (err) {
    Log.e(`Play > 1 > ${err}`);
  }
};

const stream = async (state: State, interaction: Interaction) => {
  try {
    if (!state.connection) await voiceConnect(state, interaction);

    state.connection.play(ytdl(state.queue[0].videoURL), {
      // quality: "highestaudio",
      highWaterMark: 1 << 25,
    });

    state.connection.dispatcher.setVolume(state.volume / 10);

    state.connection.dispatcher.on("start", async () => {
      try {
        if (state.timeout) clearTimeout(state.timeout);
        state.isPlaying = true;

        await sendEmbed(
          { interaction: interaction },
          {
            color: props.color.blue,
            author: {
              name: `${state.isLooped ? "🔁 " : ""}${state.isRepeated ? "🔂 " : ""}${state.locale.music.nowPlaying}`,
              iconURL: props.icon.play,
            },
            title: state.queue[0].title,
            url: state.queue[0].videoURL,
            description: state.queue[0].channelName,
            thumbnail: { url: state.queue[0].thumbnailURL },
            fields: [
              { name: state.locale.music.length, value: getLength(state.queue[0].length), inline: true },
              { name: state.locale.music.remaining, value: state.queue.length - 1, inline: true },
            ],
            footer: { text: state.queue[0].requestedBy.tag, iconURL: state.queue[0].requestedBy.avatarURL },
          },
          { guild: true }
        );
      } catch (err) {
        Log.e(`Stream > DispatcherStart > ${err}`);
      }
    });
    state.connection.dispatcher.on("finish", async () => {
      try {
        state.isPlaying = false;
        if (state.queue && state.queue.length >= 1) {
          if (state.isRepeated) {
          } else if (state.queue && state.isLooped) {
            state.queue.push(state.queue[0]);
            state.queue.shift();
          } else {
            state.queue.shift();
          }
          if (state.queue && state.queue.length >= 1) {
            return await stream(state, interaction);
          } else state.timeout = setTimeout(() => voiceDisconnect(state, interaction), 30000);
        } else {
          state.timeout = setTimeout(() => voiceDisconnect(state, interaction), 30000);
        }
      } catch (err) {
        Log.e(`Stream > DispatcherFinish > ${err}`);
      }
    });
    state.connection.dispatcher.on("error", (err) => {
      Log.e(`Stream > DispatcherError > ${err}`);
    });
  } catch (err) {
    Log.e(`Stream > ${err}`);
  }
};

export const skip = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    if (state.queue.length === 0)
      return sendEmbed(
        { interaction: interaction },
        {
          color: props.color.red,
          description: `❌ **${state.locale.music.noSongToSkip}**`,
        },
        { guild: true }
      ).then((_message: Message) => _message.delete({ timeout: 10000 }));

    state.connection.dispatcher.end();

    state.queue.shift();

    return sendEmbed(
      { interaction: interaction },
      {
        color: props.color.blue,
        description: `⏩ **${state.locale.music.skipped}**`,
      },
      { guild: true }
    );
  } catch (err) {
    Log.e(`Skip > ${err}`);
  }
};

export const pause = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    state.connection.dispatcher.pause();
    state.isPlaying = false;
  } catch (err) {
    Log.e(`Pause > ${err}`);
  }
};

export const stop = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    state.connection.dispatcher.pause();
    state.isPlaying = false;
  } catch (err) {
    Log.e(`Stop > ${err}`);
  }
};

export const toggleLoop = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    state.isLooped = !state.isLooped;

    return sendEmbed(
      { interaction: interaction },
      {
        color: props.color.green,
        description: `✅ **${state.locale.music.loopToggled}${state.isLooped ? `${state.locale.on}` : `${state.locale.off}`}**`,
      },
      { guild: true }
    );
  } catch (err) {
    Log.e(`ToggleLoop > ${err}`);
  }
};

export const toggleRepeat = async (state: State, interaction: Interaction) => {
  try {
    if (await voiceStateCheck(state.locale, { interaction: interaction })) return;

    state.isRepeated = !state.isRepeated;

    return sendEmbed(
      { interaction: interaction },
      {
        color: props.color.green,
        description: `✅ **${state.locale.music.repeatToggled}${state.isRepeated ? `${state.locale.on}` : `${state.locale.off}`}**`,
      },
      { guild: true }
    );
  } catch (err) {
    Log.e(`ToggleRepeat > ${err}`);
  }
};
