let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('xteam', '/simsimi', { kata: text }, 'APIKEY'))
  let json = await res.json()
  if (json.status) m.reply(json.jawaban)
  else throw json
}
handler.help = ['bot'].map(v => v + ' <teks>')
handler.tags = ['fun']
handler.command = /^bot$/i

module.exports = handler

