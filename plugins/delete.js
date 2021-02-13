let handler = function (m) {
  if (!m.quoted) throw 'Reply mesej robot'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya boleh memadam mesej dariku'
  if (!isBaileys) throw 'Mesej tersebut bukan dihantar oleh robot'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
