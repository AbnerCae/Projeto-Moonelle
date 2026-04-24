const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
// const { join } = require('path');
require('dotenv').config();

// VARIAVEIS
vars = require("./src/handler/vars.js")

// CLIENTE
const client = new ForgeClient({
    intents: [ "GuildMessages", "Guilds", "MessageContent" ],
    events: [ "clientReady", "error", "messageCreate" ], 
    prefixes: [ "m.", "M." ], 
    extensions: [ new ForgeDB() ]
});

// CARREGANDO VARIAVEIS
ForgeDB.variables(vars) //VARIAVEIS DO CLIENTE
   
// Pasta dos comandos comuns por prefixo
client.commands.load("./src/commands/dev")
client.commands.load("./src/commands/system")
client.commands.load("./src/commands/common")

// client.applicationCommands.load("./src/commands/slash")
   
// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);