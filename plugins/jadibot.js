let { WAConnection: _WAConnection, MessageType } = require('@adiwajshing/baileys')
let WAConnection = require('../lib/simple').WAConnection(_WAConnection)
let qrcode = require('qrcode')

if (global.conns instanceof Array) console.log()// for (let i of global.conns) global.conns[i] && global.conns[i].user ? global.conns[i].close().then(() => delete global.conns[id] && global.conns.splice(i, 1)).catch(global.conn.logger.error) : delete global.conns[i] && global.conns.splice(i, 1)
else global.conns = []

let handler  = async (m, { conn, args, usedPrefix, command }) => {
  let parent = args[0] && args[0] == 'plz' ? conn : global.conn
  let auth = false
  if ((args[0] && args[0] == 'plz') || global.conn.user.jid == conn.user.jid) {
    let id = global.conns.length
    let conn = new WAConnection()
    if (args[0] && args[0].length > 200) {
      let json = Buffer.from(args[0], 'base64').toString('utf-8')
      // global.conn.reply(m.isGroup ? m.sender : m.chat, json, m)
      let obj = JSON.parse(json)
      await conn.loadAuthInfo(obj)
      auth = true
    }
    conn.on('qr', async qr => {
      let scan = await parent.sendFile(m.chat, await qrcode.toDataURL(qr, { scale: 8 }), 'qrcode.png', 'Sila sent QR Code ini untuk menjadi robot sementara, caranya:\n\n1. Tekan titik tiga di kanan atas.\n2. Tekan WhatsApp Web.\n3. Scan QR Code ini\n\nQR Code ini sah selama 20 saat sahaja, sila cepat-cepat scan', m)
      setTimeout(() => {
        parent.deleteMessage(m.chat, scan.key)
      }, 30000)
    })
    conn.once('connection-validated', user => {
      parent.reply(m.chat, 'Berjaya sambung dengan whatsapp anda, sekarang anda jadi robot seperti saya juga. NOTE: Ini cuma tumpang sahaja' + JSON.stringify(user, null, 2), m)
    })
    conn.welcome = global.conn.welcome
    conn.bye = global.conn.bye
    conn.on('group-add', global.conn.onAdd)
    conn.on('group-leave', global.conn.onLeave)
    conn.on('message-new', global.conn.handler)
    conn.on('message-delete', global.conn.onDelete)
    conn.regenerateQRIntervalMs = null
    conn.connect().then(async ({user}) => {
      if (auth) return
      await parent.sendMessage(user.jid, `Anda boleh login tanpa QR Code dengan mesej dibawah ini. Untuk mendapatkan code lengkapnya, sila taip *${usedPrefix}getcode* untuk mendapatkan kode yang akurat`, MessageType.extendedText)
      parent.sendMessage(user.jid, `${usedPrefix + command} ${Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')}`, MessageType.extendedText)
    })
    setTimeout(() => {
      if (conn.user) return
      conn.close()
      delete global.conns[id]
    }, 60000)
    conn.on('close', () => {
      setTimeout(async () => {
        try {
          if (conn.state != 'close') return
          if (conn.user && conn.user.jid)
            parent.sendMessage(conn.user.jid, `Sambungan terputus`, MessageType.extendedText)
          let i = global.conns.indexOf(conn)
          if (i < 0) return
          delete global.conns[i]
          global.conns.splice(i, 1)
        } catch (e) { conn.logger.error(e) }
      }, 30000)
    })
    global.conns.push(conn)
  } else throw 'Tidak dapat membuat robot di dalam robot tumpangan, sila tekan link dibawah untuk jadi robot\n\nhttps://wa.me/' + global.conn.user.jid.split`@`[0] + '?text=.jadibot'
}
handler.help = ['jadirobot']
handler.tags = ['jadibot']
handler.command = /^jadirobot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

