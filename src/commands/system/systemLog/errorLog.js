module.exports = {
    type: 'error',
    code: `
    $sendMessage[$getGlobalVar[errorLogChannel];***/ERRO/***
    > *$error*]
    $log[error - $error]
    `
}