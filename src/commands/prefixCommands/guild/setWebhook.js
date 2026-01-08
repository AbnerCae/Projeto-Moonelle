module.exports = {
    name: 'wh',
    type: 'messageCreate',
    code: `
    $onlyForUsers[nananinanão;$botOwnerID]
    $let[url;$message[0]]
    $textSplit[$get[url];/]
    $let[id;$splitText[5]]
    ID VEREFICADO: $get[id]
    $webhookExists[$get[id]]
    $setUserVar[webhookUrl;$get[url]]
    agr sim! e já setei no seu usuário!
    $deleteCommand    `
}


    // $onlyIf[$checkContains[$message[0];https://discord.com/api/webhooks/]==true;não é webhook!]
    // $onlyIf[$isValidLink[$message[0]]==true;não é link válido!]
    // $onlyIf[4]
