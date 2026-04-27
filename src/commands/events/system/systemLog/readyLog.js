module.exports = {
    type: 'clientReady',
    code: `
    $sendMessage[$getGlobalVar[readyLogChannel];## ✅ $username[$botID] Iniciada!
> **Servidores:** \`$guildCount\`
> **Uso de RAM:** \`$ram MB\`
> **Ping Inicial:** \`$ping ms\`

### Versões
> **ForgeDB**: $extensionVersion[forge.db]]
    $log[✅ $username[$botID] Iniciada!]
    `
}