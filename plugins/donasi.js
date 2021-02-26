let handler = async m => m.reply(`
╭─「 Kad Sim 」
│ • DiGi [+60 16-449 2583]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['derma']
handler.tags = ['info']
handler.command = /^(derma)$/i

module.exports = handler
