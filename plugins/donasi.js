let handler = async m => m.reply(`
╭─「 Nombor 」
│ • DiGi [60164492583]
╰────
╭─「 Hubungi 」
│ > Ingin menderma kredit : https://wa.me/60164492583
╰────

Ini cara untuk menderma kredit:

1.) Pergi ke kedai terdekat
2.) Beli kredit RM5
3.)Dan terus masukkan nombor saya 60164492583
4.) Jika sudah beli, sila mesej saya
`.trim()) // Tambah sendiri kalo mau
handler.help = ['derma']
handler.tags = ['info']
handler.command = /^derma$/i

module.exports = handler
