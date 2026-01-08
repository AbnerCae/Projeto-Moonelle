module.exports = {
    name: "stars",
    type: 'messageCreate',
    code: `
    $reply
    <@$authorID> você tem x Estrelas.
    `
}