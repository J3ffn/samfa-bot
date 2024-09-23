module.exports = {
  app: {
    token: process.env.DISCORD_TOKEN || "xxx",
    playing: "by the Community ❤️",
    global: true,
    guild: process.env.GUILD_ID || "xxx",
    clientId: process.env.CLIENT_ID || "xxx",
    extraMessages: false,
    loopMessage: false,
    lang: "pt",
    enableEmojis: false,
  },

  emojis: {
    back: "⏪",
    skip: "⏩",
    ResumePause: "⏯️",
    savetrack: "💾",
    volumeUp: "🔊",
    volumeDown: "🔉",
    loop: "🔁",
  },

  opt: {
    DJ: {
      enabled: true,
      roleName: "CHEFE DO MORRO",
      commands: [],
    },
    Translate_Timeout: 10000,
    maxVol: 100,
    spotifyBridge: true,
    volume: 75,
    leaveOnEmpty: true,
    leaveOnEmptyCooldown: 30000,
    leaveOnEnd: true,
    leaveOnEndCooldown: 30000,
    discordPlayer: {
      ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25,
      },
    },
  },
};
