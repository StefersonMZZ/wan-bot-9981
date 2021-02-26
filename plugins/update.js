let handler = async m => m.reply(`
Last Update: 26 Februari 2021
Versi 5
`.trim()) // Tambah sendiri kalo mau
handler.help = ['update']
handler.tags = ['info']
handler.command = /^(update)$/i

module.exports = handler
