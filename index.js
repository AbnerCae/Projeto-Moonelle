const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
// const { join } = require('path');
require('dotenv').config();

const appVars = require("./src/handler/appVars.js");
// const globalVars = require("./src/handler/globalVars.js");
// const serverVars = require("./src/handler/serverVars.js");
userVars = require("./src/handler/userVars.js");

// Inicialização do Cliente
const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent"
    ],
    events: [
        "error",
        "messageCreate"
    ], 
    prefixes: [
        "m.",
        "M."
    ], 
    extensions: [
        new ForgeDB()
    ]
});

// Loader das variaveis na pasta /src/handler/appVars.js
ForgeDB.variables(appVars) 
// ForgeDB.variables(globalVars) 
// ForgeDB.variables(serverVars) 
ForgeDB.variables(userVars) 
   
// Pasta dos comandos comuns por prefixo
client.commands.load("./src/commands/prefixCommands")
client.commands.load("./src/commands/common")
// client.applicationCommands.load("./src/commands/slash")
   
// Token do bot no arquivo .env
client.login(process.env.BOT_TOKEN);