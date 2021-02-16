let handler = function (m) {
  if (!m.quoted) throw 'Sila tag mesej dari robot'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya boleh memadam mesej robot'
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
