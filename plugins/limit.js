let handler = async(m, { conn, participants, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `ketik: ${usedPrefix}limit <nombor>| <jumlah>`)

    let [who, jumlah] = text.split `|`
    if (!who) m.reply('Kepada Siapa ?')
    if (!jumlah) m.reply('Jumlah ?')

    global.DATABASE._data.users[m.mentionedJid].limit = JSON.parse(jumlah)
    m.reply('Selesai')
}
handler.help = ['limit <jumlah>']
handler.tags = ['owner']
handler.command = /^limit$/i
handler.owner = true

module.exports = handler