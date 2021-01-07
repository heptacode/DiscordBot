import { Locale } from "../";

export default {
  on: "ON",
  off: "OFF",
  manager: "[Manager]",
  scope: "Scope",
  role: "Role",
  textChannel: "TextChannel",
  voiceChannel: "VoiceChannel",
  messageID: "MessageID",
  embed: "Embed",
  emoji: "Emoji",

  locale: {
    locale: "Locale",
    code: "en",
    name: "English",
    changed: "✅ Locale changed to ",
  },
  help: {
    help: "Help",
    description: "List of commands and descriptions you can use.\n(For manager commands, add [manager] for an argument)\n<Required> [Optional]",
    description_manager: "List of commands and descriptions which managers can use.\n<Required> [Optional]",
    join: "Join a voice channel you are in",
    leave: "Unbind from a voice channel you are in",
    loop: "Toggle loop for the playlist",
    pause: "Pause the song",
    play: "Play/Enqueue a music",
    playlist: "Show playlist",
    repeat: "Toggle repeat",
    skip: "Skip current music",
    stop: "Stop the music",
    volume: "Change the volume",
    //
    autorole: "Give roles when a member/bot joins the server",
    delete: "Bulk Delete Messages",
    disconnectall: "Disconnect all users from a voice channel",
    edit: "Edit a previous message that I sent",
    embed: "Create an embed",
    locale: "Change the default locale for the server",
    log: "Set a text channel for logging",
    moveall: "Move all users to another voice channel",
    privateroom: "Set Private Room",
    reactionrole: "Add/Remove a reaction role",
    setafktimeout: "Set minutes to kick AFK users",
    voicerole: "Give a role when someone joins a voice channel",
  },
  usage: {
    help: "[manager]",
    volume: "<1~10>",
    //
    autorole: "<view|add|purge> [user|bot] [role]",
    disconnectall: "<textChannel>",
    edit: "<textChannel> <messageID> <messageEmbed>",
    embed: "<textChannel> <messageEmbed>",
    locale: "<code>",
    log: "<textChannel>",
    moveall: "<fromVoiceChannel> <targetVoiceChannel>",
    reactionrole: "<view|add|remove|purge> <textChannel> <messageID> [emoji] [role]",
    voicerole: "<view|add|remove|purge> <voiceChannel> <role> [textChannel]",
  },
  insufficientPerms: {
    manage_guild: "🚫 You don't have permission to manage the guild.",
    manage_channels: "🚫 You don't have permission to manage channels.",
    manage_roles: "🚫 You don't have permission to manage roles.",
    manage_messages: "🚫 You don't have permission to manage messages.",
    move_members: "🚫 You don't have permission to move members.",
    connect: "🚫 Insufficient permissions: [Connect], [Speak]",
  },

  afkTimeout: {
    set: "AFK Timeout was set to: ",
    kicked: " was kicked due to inactivity.",
    options: {
      minutesToKick: "Minutes to Timeout",
    },
  },
  autoRole: {
    autoRole: "⚙️ Auto Roles",
    empty: "No roles have been set.",
    options: { view: "View AutoRole Config", add: "Add AutoRole Config", purge: "Purge AutoRole Config" },
  },
  delete: {
    deleted: " Messages have been deleted.",
    invalidAmount: "❌ Please enter a valid amount: 2 ~ 100",
  },
  voiceConnect: {
    joinToConnect: "💡 To play music, join a voice channel!",
  },
  voiceDisconnect: {
    notInVoiceChannel: "🚫 I'm currently not in a voice channel!",
    leave: "🚪 Disconnected from voice channel.",
    timeout: "🚪 Disconnected from voice channel due to inactivity.",
  },
  loop: {
    joinToToggle: "💡 To toggle loop, join a voice channel!",
    toggled: "✅ Loop Toggled ",
  },
  music: {
    currentlyPlaying: "💿 Currently playing a song.",
    private: "🔒 This video is private!",
    ageRestricted: "🔞 This video is age restricted!",
    urlInvalid: "🚫 Your URL is invalid!",
    enqueued: "Enqueued",
    nowPlaying: "Now Playing",
    length: "Length",
    remaining: "Songs Remaning",
    playlist: "💿 Playlist",
    position: "Position in Playlist",
    empty: "🗑 Playlist is empty.",
    notExists: "❌ Playlist not exists.",
  },
  reactionRole: {
    options: {
      view: "View ReactionRole Config",
      add: "Add ReactionRole Config",
      remove: "Remove ReactionRole Config",
      purge: "Purge ReactionRole Config",
    },
  },
  repeat: {
    joinToToggle: "💡 To toggle repeat, join a voice channel!",
    toggled: "✅ Repeat Toggled ",
  },
  skip: {
    joinToSkip: "💡 To skip a music, join a voice channel!",
    noSongToSkip: "❌ There is no song that I could skip!",
    skipped: "⏩ Skipped",
  },
  stop: {
    joinToStop: "💡 To stop music, join a voice channel!",
    notNow: "💡 You can't use it right now!",
  },
  volume: {
    joinToChange: "💡 To change the volume, join a voice channel!",
    currentVolume: "🔈 Current Volume is: ",
    invalid: "❌ Please enter a valid value: 0 ~ 10",
    changed: "🔈 Volume changed! Your new volume will be applied for future songs.",
  },
  log: {
    log: "📦 Logging",
    set: "Log channel set to: ",
  },
  privateRoom: {
    privateRoom: "Private Room",
    create: "Create Private Room",
    waitingRoom: "Waiting Room",
    waitingForMove: " is Waiting for Move",
  },
  voiceRole: {
    voiceRole: "⚙️ Voice Channel Roles",
    empty: "No roles have been set.",
    options: {
      view: "View VoiceRole Config",
      add: "Add VoiceRole Config",
      remove: "Remove VoiceRole Config",
      purge: "Purge VoiceRole Config",
      channelToSendLogs: "TextChannel to send Enter/Leave Information",
    },
  },
} as Locale;
