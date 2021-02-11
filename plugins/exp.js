let handler = async(m, { conn, participants, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `Taip: ${usedPrefix}coin <nombor> | <jumlah>`)

    let [who, jumlah] = text.split `|`
    if (!who) m.reply('Kepada Siapa ?')
    if (!jumlah) m.reply('Jumlah ?')

    global.DATABASE._data.users[m.mentionedJid].exp = JSON.parse(jumlah)
    m.reply('Selesai')
}
handler.help = ['coin <jumlah>']
handler.tags = ['owner']
handler.command = /^exp$/i
handler.owner = true

module.exports = handler