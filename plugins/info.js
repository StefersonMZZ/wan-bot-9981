let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️

Dibuat dengan javascript via NodeJs, Ffmpeg dan ImageMagick

➥ Instagram : @adhwa_ihsan_9981
➥ YouTube : Wan Animation 3D

Thanks To :
➥ Nurotomo
➥ MfarelS
➥ ST4RZ
➥ Termux
➥ WhatsApp
➥ Kod QR
➥ Wan Adhwa' Ihsan
➥ Gboard
➥ Github
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^info$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

