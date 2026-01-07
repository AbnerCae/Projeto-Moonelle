const { ForgeClient } = require("@tryforge/forgescript");
const { ForgeDB } = require("@tryforge/forge.db");
//const { join } = require('path');
require('dotenv').config();

const variables = require("./src/handler/variables.js");
   
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
})

// Loader das variaveis na pasta /src/handler/variables.js
ForgeDB.variables("./src/handler/variables.js")
   
// Pasta dos comandos comuns por prefixo
client.commands.load("./src/commands/prefixCommands")
   client.commands.load("./src/commands/common")
//   client.applicationCommands.load("./src/commands/slash")
   
// Token do bot no arquivo .env
   client.login(process.env.BOT_TOKEN);