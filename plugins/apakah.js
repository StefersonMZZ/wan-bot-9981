let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
Pertanyaan: ${m.text}
Jawapan: ${pickRandom(['Ya','Mungkin ya','Mungkin','Mungkin tidak','Tidak','Tidak mungkin'])}
`.trim(), m)
}
handler.help = ['apakah <pertayaan>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^apakah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

