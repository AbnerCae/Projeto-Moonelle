const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
const { DefaultExtractors, ForgeMusic, GuildQueueEvent  } = require("@tryforge/forge.music");
// const { join } = require('path');
require('dotenv').config();

// VARIAVEIS
vars = require("./src/handler/vars.js");

const music = new ForgeMusic({
    events: [
        GuildQueueEvent.AudioTrackAdd,
        GuildQueueEvent.Connection,
        GuildQueueEvent.PlayerError,
        GuildQueueEvent.Error,
        GuildQueueEvent.Debug
    ],
    includeExtractors: DefaultExtractors,
    playerOptions: {
        ytdlOptions: {
            quality: 'highestaudio',
            highWaterMark: 1 << 25
        },
        disableBiquad: true,
        disableEqualizer: true
    }
});

// CLIENTE
const client = new ForgeClient({
    intents: [ "GuildMessages", "Guilds", "MessageContent", "GuildVoiceStates" ],
    events: [ "clientReady", "debug", "messageCreate" ], 
    prefixes: [ "m.", "M." ], 
    extensions: [ new ForgeDB(), music ],
    prefixCaseInsensitive: true,
    respondOnEdit: true
});

// CARREGANDO VARIAVEIS
ForgeDB.variables(vars); //VARIAVEIS DO CLIENTE
   
// Pasta dos comandos comuns por prefixo
client.commands.load("./src/commands/dev");
client.commands.load("./src/commands/events/system");
client.commands.load("./src/commands/common");
client.applicationCommands.load("./src/commands/slash");
music.commands.load("./src/commands/events/music");

music.commands.add({
    name: "Debug",
    type: GuildQueueEvent.Debug,
    code: `
    $sendMessage[1497015219816501339;### 🎵 | Debug ForgeMusic - $discordTimestamp[$getTimestamp;ShortTime]

$codeBlock[$env[message];js]]
`
});

// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);