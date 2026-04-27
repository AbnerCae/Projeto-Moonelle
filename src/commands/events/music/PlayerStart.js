const { GuildQueueEvent } = require("@tryforge/forge.music");

module.exports = {
    name: "PlayerStart",
    type: GuildQueueEvent.PlayerStart,
    code: `
    $!sendMessage[$env[queue;metadata;text;id];A track started playing.]
    `
}