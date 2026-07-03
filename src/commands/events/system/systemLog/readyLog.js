module.exports = {
    type: 'clientReady',
    code: `
    $sendMessage[1497015219816501339;## ✅ $username[$botID] Iniciada!
> **Servidores:** \`$guildCount\`
> **Uso de RAM:** \`$ram MB\`
> **Ping Inicial:** \`$ping ms\`

### Versões
> **ForgeDB**: $extensionVersion[forge.db]]
    $log[✅ $username[$botID] Iniciada!]
    `
}