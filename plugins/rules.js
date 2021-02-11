let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Syarat dan Ketentuan Robot *SAYA*
1. Teks dan nama pengguna WhatsApp anda akan kami simpan di dalam server selama robot aktif.
2. Data akan di padam ketika robot Offline.
3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda hantar.
4. Saya tidak akan pernah meminta anda untuk memberikan informasi pribadi.
5. Jika menemukan Bug/Error sila lapor ke owner robot.
6. Apapun yang anda perintah pada robot ini, SAYA TIDAK AKAN BERTANGGUNG JAWAB!

Thanks !
2021©Wan Adhwa' Ihsan
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

