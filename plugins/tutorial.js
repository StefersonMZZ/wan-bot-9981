let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial ini disekat oleh owner
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^tutorial$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

