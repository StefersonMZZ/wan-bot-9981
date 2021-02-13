let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
conn.reply(m.chat, '❌ Maaf, fitur ini sedang dimatikan oleh owner ❌', m)
}
handler.help = ['admin'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^admin$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler

