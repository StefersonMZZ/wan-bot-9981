let handler = async (m, { conn, text }) => {
  if (conn.user.jid === global.conn.user.jid) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user.jid)])])
    let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore)
    for (let id of chats) conn.copyNForward(m.chat, comtent)
    conn.reply(m.chat, `Berjaya menghantar mesej broadcast ke ${users.length} nombor yang telah jadi robot`, m)
  } else conn.reply(m.chat, 'Fitur ini hanya untuk host robot',  m)
}
handler.help = ['broadcastjadirobot'].map(v => v + ' <teks>')
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

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

