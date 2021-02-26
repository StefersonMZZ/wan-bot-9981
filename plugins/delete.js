let handler = function (m) {
  if (!m.quoted) throw 'Sila tag mesej robot untuk dipadamkan'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya boleh memadam mesej dari robot sahaja'
  if (!isBaileys) throw 'Mesej tersebut bukan dihantar oleh robot'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
