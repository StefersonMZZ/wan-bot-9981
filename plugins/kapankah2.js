let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawapan:* ${Math.floor(Math.random() * 10)} ${pickRandom(['saat', 'minit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekad', 'abad'])} lagi`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'bila' + v + ' <pertanyaan>?')
handler.tags = ['kerang']
handler.command = /^bila(kah)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

