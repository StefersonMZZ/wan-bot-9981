let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Masukkan jumlah coin yang akan diberi'
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Sila tag salah satu'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (isNaN(txt)) throw 'Hanya angka'
  let xp = parseInt(txt)
  let exp = xp
  let pjk = Math.ceil(xp * pajak)
  exp += pjk
  if (exp < 1) throw 'Minimal 1'
  let users = global.DATABASE._data.users
  if (exp > users[m.sender].exp) throw 'Coin tidak mencukupi untuk mentransfer'
  users[m.sender].exp -= exp
  users[who].exp += xp

  m.reply(`(${-xp} Coin) + (${-pjk} Coin (Pajak 2%)) = ( ${-exp} Coin)`)
  conn.fakeReply(m.chat, `+${xp} Coin`, who, m.text)
}
handler.help = ['coin <jumlah>']
handler.tags = ['xp']
handler.command = /^coin$/i
handler.owner = true

module.exports = handler
