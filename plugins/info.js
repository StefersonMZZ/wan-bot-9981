let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO ROBOT* ⚠️

➥ Dibuat dengan javascript via NodeJs, Ffmpeg dan ImageMagick

➥ Script: @Nurotomo
➥ Github: 
https://github.com/Adhwa9981/wan-bot-9981

➥ Sosmed:
Instagram: @adhwa_ihsan_9981
YouTube: Wan Animation 3D

➥ Terima Kasih Kepada:
Nurotomo
MfarelS
ST4RZ
Acode
Wan Adhwa' Ihsan
Termux
WhatsApp Web
Internet
Papan Kekunci
.img
.js
.sh
Google
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

