module.exports = {
    name: 'useravatar',
    aliases: ['avatar', 'foto', 'pic', 'pfp'],
    type: 'messageCreate',
    code: `
    $let[id;$findUser[$message;true]]
    $let[finded;.$findUser[$message;false]]
    $let[findedMember;$findMember[$guildID;$message;true]]
    $if[$get[finded]==.;$if[$message==;;Não consegui encontrar essa pessoa, mas encontrei você!]]
    $let[userAvatar;$userAvatar[$get[id]]]
    $let[guildAvatar;$memberAvatar[$guildID;$get[findedMember]]]
    $if[$get[id]!=$get[findedMember];$let[guildAvatar;$get[userAvatar]]]
    $let[imageFormat1;$if[$includes[$get[userAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $let[imageFormat2;$if[$includes[$get[guildAvatar];.webp;.png;.jpg]==true;webp;gif]]
    $if[$get[userAvatar]!=$get[guildAvatar];$attachment[$get[guildAvatar];avatar_de_$username[$get[findedMember]].$get[imageFormat2]];]
    $attachment[$get[userAvatar];avatar_de_$username[$get[id]].$get[imageFormat1]]
    `
}