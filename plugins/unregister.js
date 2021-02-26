const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial number kosong'
  let user = global.DATABASE._data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial number salah'
  user.registered = false
  m.reply(`Unreg berjaya`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['advanced']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

