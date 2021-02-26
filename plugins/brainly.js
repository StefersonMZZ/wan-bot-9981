const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Sila tulis soalan selepas tulis brainly'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PERTANYAAN KE ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*JAWAPAN KE ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n•------------•\n\n')
  m.reply(answer)
}
handler.help = ['brainly <soalan>']
handler.tags = ['advanced']

handler.command = /^brainly$/i

module.exports = handler
