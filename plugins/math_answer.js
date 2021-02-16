global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  let id = m.chat
  if (!m.quoted || m.quoted.sender != conn.user.jid || !/^Berapa hasil dari/i.test(m.quoted.text)) throw false
  if (!(id in global.math)) throw 'Soalan itu telah habis masa'
  if (m.quoted.id == global.math[id][0].id) {
  let math = global.math[id][1]
  if (m.text == math.result) {
    conn.reply(m.chat, `Jawapan betul\n+${math.bonus} Coin`, m)
    global.DATABASE._data.users[m.sender].exp += math.bonus
    clearTimeout(global.math[id][3])
    delete global.math[id]
  } else {
    if (--global.math[id][2] == 0) {
      conn.reply(m.chat, `Kesempatan habis\nJawapan: ${math.result}`, m)
      clearTimeout(global.math[id][3])
      delete global.math[id]
    } else conn.reply(m.chat, `Jawapan salah\nMasih ada ${global.math[id][2]} kesempatan`, m)
  }
 }
}
handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0

module.exports = handler
