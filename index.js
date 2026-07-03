const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
require('dotenv').config();

// VARIAVEIS
vars = require("./src/handler/vars.js");


// CLIENTE
const client = new ForgeClient({
    intents: [ "GuildMessages", "Guilds", "MessageContent", "GuildVoiceStates" ],
    events: [ "clientReady", "debug", "messageCreate" ], 
    prefixes: [ "m.", "M." ], 
    extensions: [ new ForgeDB() ],
    prefixCaseInsensitive: true,
    respondOnEdit: true
});

// CARREGANDO VARIAVEIS
ForgeDB.variables(vars); //VARIAVEIS DO CLIENTE
   
// Pasta dos comandos comuns por prefixo
client.commands.load("./src/commands/dev");
client.commands.load("./src/commands/events");
client.commands.load("./src/commands/common");
client.applicationCommands.load("./src/commands/slash");

/*music.commands.add({
    name: "Debug",
    type: GuildQueueEvent.Debug,
    code: `
    $sendMessage[1497015219816501339;### 🎵 | Debug ForgeMusic - $discordTimestamp[$getTimestamp;ShortTime]

$codeBlock[$env[message];js]]
`
});*/

// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);