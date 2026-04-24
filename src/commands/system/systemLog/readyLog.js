module.exports = {
    type: 'clientReady',
    code: `
    $sendMessage[$getGlobalVar[readyLogChannel];***/CONECTADO/***]
    `
}