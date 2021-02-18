let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set(conns.map(v => v.user).filter(v => v).map(v => v.jid))]
    for (let id of users) conn.sendMessage(id, text, m.mtype, m.msg.contextInfo ? {
      contextInfo: m.msg.contextInfo
    } : {})
    conn.reply(m.chat, `Berjaya menghantar broadcast ke ${users.length} nombor yang jadi robot`, m)
  } else conn.reply(m.chat, 'Fitur ini hanya untuk host robot',  m)
}
handler.help = ['broadcastjadibot'].map(v => v + ' <teks>')
handler.tags = ['host']
handler.command = /^(broadcast|bc)(jadi)?robot$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

