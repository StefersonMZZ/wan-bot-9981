let handler = async m => m.reply(`
╭─「 Nombor 」
│ • DiGi [60164492583]
╰────
╭─「 Hubungi 」
│ • Derma kredit : https://wa.me/60164492583
╰────

Ini caranya untuk derma kredit :

1) Pergi ke kedai terdekat.
2) Pergi ke kaunter dan minta kredit DiGi harga ikut anda.
3) Jika boleh masukkan nombor saya terus 60164492583.
4) Jika dia bagi code kredit sent ke nombor ini : https://wa.me/60164492583
5) Jika sudah isi sila bagitau saya dengan tekan link di tab hubungi.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['derma']
handler.tags = ['info']
handler.command = /^derma$/i

module.exports = handler
