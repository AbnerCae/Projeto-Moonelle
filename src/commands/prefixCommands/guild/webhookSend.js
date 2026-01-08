module.exports = {
    name: "webhooksend",
    aliases: ["ws"],
    type: 'messageCreate',
    code: `
    $let[url;$getUserVar[webhookUrl]]
    $let[content;$message]
    $onlyIf[$get[url]!=null;Você nem setou um hebhook que queira usar.\n> Utilize m.setWh <link> para setar o webhook a usar.]
    $webhookSend[$get[url];$get[content]]
    mensagem \`$get[content]\` enviada!
    `
}
// $let[url;$getUserVar[webhookUrl]]
    // $let[content;$message]
    // $onlyIf[$get[url]==null;Você nem setou um hebhook que queira usar.\n> Utilize m.setWh <link> para setar o webhook a usar.]
    // $webhookSend[$get[url];$get[content]]