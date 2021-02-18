let handler = async m => m.reply(`
╭─「 Nombor 」
│ • DiGi [60164492583]
╰────
╭─「 Hubungi 」
│ • Hubungi: https://wa.me/60164492583
╰────

Ini cara untuk derma kredit:

1. Pergi ke kedai terdekat.
2. Pergi ke kaunter.
3. Cakap nak kredit RM5 DiGi dekat orang kaunter.
4. Jika boleh terus masukkan nombor saya.
5. Jika dia bagi code, sila tekan link di hubungi dan sent kod itu kepada saya.

RM 5 = Unlimited Limit and Coin
RM 10 = Jadi Admin Grup
RM 30 = Jadi Owner
RM 80 = Jadi Semuanya
`.trim()) // Tambah sendiri kalo mau
handler.help = ['derma']
handler.tags = ['info']
handler.command = /^der(m|a)$/i

module.exports = handler
