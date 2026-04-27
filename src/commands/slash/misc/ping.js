module.exports = {
  code: `
    Ping: \`$pingMS\` | Uptime: <t:$round[$math[$math[$getTimestamp-$uptime]/1000];0]:R>
  `,
  data: {
    name: "ping",
    description: "Ping",
  },
};