let handler = async (m, { conn, args, usedPrefix }) => {
  let users = m.mentionedJid
  for (let user of users) conn.groupDemoteAdmin(m.chat, user).catch(console.log)
conn.reply(m.chat, '❌ Maaf, fitur ini sedang dimatikan oleh owner robot ❌', m)
}
handler.help = ['member'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^member$/i
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
