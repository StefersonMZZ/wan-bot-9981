let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa tak pergi ke terminalnya?', m)
  else {
    await conn.reply(m.chat, 'Goodbye robot :\')', m)
    conn.close()
  }
}
handler.help = ['berhenti']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

