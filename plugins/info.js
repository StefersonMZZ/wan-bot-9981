let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO ROBOT* ⚠️
Dibuat dengan javascript via Nodejs, Ffmpeg dan ImageMagick

*Sosmed :*
Instagram: @adhwa_ihsan_9981
➥ YouTube: Wan Animation 3D

*Terima Kasih Kepada :*
Nurotomo
MfarelS
ST4RZ
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

