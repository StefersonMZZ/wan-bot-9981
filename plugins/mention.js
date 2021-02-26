let handler = async (m, { conn, text }) => {
  if (!text) throw 'Sila tulis teks selepas tulis mention'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['mention <teks>']
handler.tags = ['tools']

handler.command = /^mention$/i

module.exports = handler
