let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Selesai ✓')
}
}
handler.help = ['unbanchat']
handler.tags = ['admin']
handler.command = /^unbanchat$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 0

module.exports = handler

