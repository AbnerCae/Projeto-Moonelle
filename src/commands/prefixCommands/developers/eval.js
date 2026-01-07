module.exports = {
    name: 'eval',
    aliases:  ['e'],
    type: 'messageCreate',
    code: `
    $onlyForUsers[nananinanão;$botOwnerID]
    $eval[$message]
    `
}