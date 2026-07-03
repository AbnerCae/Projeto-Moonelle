module.exports = {
    type: 'messageCreate',
    code: `
    $onlyIf[$getGuildVar[havePortal;$guildID]!=false;$log[bateu no haveportal]]
    $onlyIf[$getGuildVar[channelPortalID;$guildID]!=;$log[bateu no channeportalid]]
    $let[webhookID;$getGuildVar[webhookPortalID;$guildID]]
    $if[$webhookExists[$get[webhookID]]==false;$setGuildVar[webhookPortalID;$webhookCreate[$getGuildVar[channelPortalID;$guildID];PORTAL_SYS];$guildID] $log[criou OUTRO]]
$let[webhookID;$getGuildVar[webhookPortalID;$guildID]]
$let[webhookToken;$webhookToken[$getGuildVar[webhookPortalID;$guildID]]]
$log[passou;
> $getGuildVar[webhookPortalID;$guildID]
> $get[webhookToken]
]

$webhookSend[https://discord.com/api/webhooks/$get[webhookID]/$get[webhookToken];$message;false;$username - $guildName - $channelName[$channelid];$userAvatar]
    `
}

/*
Attachments;false;$username - $guildName;$userAvatar]
*/