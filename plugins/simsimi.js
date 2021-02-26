let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
}
handler.help = ['robot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^(robot)$/i

module.exports = handler

