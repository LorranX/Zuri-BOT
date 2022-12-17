const { default: WWConnection, useMultiFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { Boom } = require('@hapi/boom')
const pino = require('pino');
const fs = require('fs');
const os = require('os')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, newExif } = require('./lib/exif')
const { color, notify, banner, centerBanner } = require('./lib/dfunctions');
const { smsg, formatp } = require('./lib/functions');

//MAIN VARIABLES

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//CONNECTION

const store = makeInMemoryStore({ logger: pino().child({ level: 'trace', stream: 'store' }) })

async function OpenConn() {
  const { state, saveCreds } = await useMultiFileAuthState(`session`)

  console.log(banner.string);
  console.log(centerBanner.string);


  const l = WWConnection({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['L', 'Safari', '1.0.0'],
    auth: state,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.listMessage
      );
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }

      return message;
    },
  })

  store.bind(l.ev)

  l.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection == 'connecting') {
      console.log(notify(`Tentando estabelecer conexão com o Whatsapp Web ${color("[", "white")}⌛${color("]", "white")}`, 'yellow', 'yellow'))
    }


    else if (connection === 'open') {
      console.log(notify(`Conexão estabelecida com o sucesso ${color("[", "white")}✅${color("]", "white")}`, 'green', 'green'))
      console.log(`\n${color("[", "white") + color(" DEVICE INFO ", "green") + color("]", "white")}\n${color(`OS: ${process.platform + ' ' + process.arch}`, "white")}\n${color(`RAM: ${formatp(os.totalmem())}`, "white")}\n${color(`NODE VERSION: ${process.version}\n`, "white")}`)
    }


    else if (connection === 'close') {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode
      if (reason === DisconnectReason.badSession) { console.log(notify(`Arquivos da conexão corrompidos, tente escanear o qr code novamente ${color("[", "white")}❌${color("]", "white")}`, 'red', 'red')); }
      else if (reason === DisconnectReason.connectionClosed) { console.log(notify(`Conexão encerrada, tentando conectar novamente ${color("[", "white")}🤚🏻${color("]", "white")}`, 'orange', 'orange')); OpenConn(); }
      else if (reason === DisconnectReason.connectionLost) { console.log(notify(`Obtive um erro ao tentar estabelecer conexão, tentando novamente ${color("[", "white")}🤚🏻${color("]", "white")}`, 'orange', 'orange')); OpenConn(); }
      else if (reason === DisconnectReason.loggedOut) { console.log(notify(`Conexão encerrada pelo usuario, tente escanear o qr code novamente ${color("[", "white")}❌${color("]", "white")}`, 'red', 'red')); }
      else if (reason === DisconnectReason.restartRequired) { console.log(notify(`Reiniciando... ${color("[", "white")}🤚🏻${color("]", "white")}`, 'orange', 'orange')); OpenConn(); }
      else if (reason === DisconnectReason.timedOut) { console.log(notify(`Tempo limite para conexão excedido, tentando conectar novamente ${color("[", "white")}🤚🏻${color("]", "white")}`, 'orange', 'orange')); OpenConn(); }
      else console.log(notify(`Conexão encerrada por motivo desconhecido, outputStatusCode: ${reason} ${color("[", "white")}⚠️${color("]", "white")}`, 'red', 'red'))
    }


  });

  l.ev.on('messages.upsert', connection => {
    mek = connection.messages[0];
    if (!mek.message) return
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
    if (mek.key && mek.key.remoteJid === 'status@broadcast') return
    if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16 && mek.key.fromMe) return
    mek = smsg(l, mek, store)
    require('./index')(l, mek);
  });

  l.ev.on('creds.update', saveCreds);

  //FUNCTIONS

  l.decodeJid = (jid) => {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {}
      return decode.user && decode.server && decode.user + '@' + decode.server || jid
    } else return jid
  }

  /** Quick reply a message
    *
    * @param {*} from
    * @param {*} t
    * @param {*} q
    * @returns
    */

  l.reply = (jid, t, q) => {
    l.sendMessage(jid, { text: t }, { quoted: q })
  }

  /** Quick reply a message with mentions
    *
    * @param {*} from
    * @param {*} t
    * @param {*} q
    * @returns
    */

  l.mreply = (jid, t, q, m) => {
    l.sendMessage(jid, { text: t, mentions: m }, { quoted: q })
  }

  /** React to a messages 
     * 
     * @param {*} jid 
     * @param {*} reaction
     * @param {*} msg
     * @returns 
     */

  l.react = (jid, reaction, msg) => {
    reactionMessage = {
      react: {
        text: reaction,
        key: {
          remoteJid: msg.chat,
          fromMe: false,
          id: msg.id,
          participant: msg.sender
        }
      }
    }
    l.sendMessage(jid, reactionMessage)

  }

  /** Send message with footer without buttons
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} options
     * @param {*} mentio
     * @returns
     */

  l.sendFooter = async (jid, text = '', footer = '', options = {}, mentio) => {
    var tempfooter = generateWAMessageFromContent(jid, {
      "buttonsMessage": {
        "text": text,
        "contentText": text,
        "footerText": footer,
        "contextInfo": {
          "mentionedJid": mentio ? mentio : null,
          "forwardingScore": 3,
          "isForwarded": true
        },
        "headerType": "EMPTY"
      }
    }, options)
    await l.relayMessage(jid, tempfooter.message, { messageId: tempfooter.key.id })
  }

  /** Send footer without buttons and reacts to sender's message
     * 
     * @param {*} jid 
     * @param {*} text
     * @param {*} footer
     * @param {*} message
     * @param {*} reaction
     * @param {*} ment
     * @returns 
     */

  l.sendFooterReaction = (jid, text, footer, message, quo, reaction, ment = ``) => {
    l.sendFooter(jid, text, footer, { quoted: quo }, ment).then(() => l.react(jid, reaction, message))
  }

  /** Send template buttons without header
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} but
     * @param {*} quoted
     * @param {*} options
     * @returns
     */


  l.send5But = async (jid, text = '', footer = '', but = [], quoted = "", options = {}) => {
    var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
      viewOnceMessage: {
        message: {
          templateMessage: {
            hydratedTemplate: {
              "hydratedContentText": text,
              "hydratedFooterText": footer,
              "hydratedButtons": but
            }
          }
        }
      }
    }), options, { quoted })
    l.relayMessage(jid, template.message, { messageId: template.key.id })
  }

  /** Send list message with avaliable features
     *
     * @param {*} jid
     * @param {*} quo
     * @returns
     */

  l.menuList = async (jid, quo) => {

    ex = [{ title: `PING`, rowId: `.ex ping` },
    { title: `MEK`, rowId: `.ex mek` },
    { title: `CREATOR`, rowId: `.ex creator` },
    { title: `DELETE`, rowId: `.ex delete` },
    { title: `LINKGP`, rowId: `.ex` },
    { title: `HIDETAG`, rowId: `.ex hidetag` },
    { title: `BAN`, rowId: `.ex ban` },
    { title: `ADD`, rowId: `.ex add` },
    { title: `PROMOTE`, rowId: `.ex promote` },
    { title: `DEMOTE`, rowId: `.ex demote` },
    { title: `S`, rowId: `.ex s` },
    { title: `ST`, rowId: `.ex st` },
    { title: `RENAME`, rowId: `.ex rename` },]

    sections = [
      {
        title: "LISTA DE COMANDOS",
        rows: ex
      },
    ]

    const listMessage = {
      text: "*Selecione uma das opções para receber um exemplo do comando selecionado*",
      footer: `*MENU | Zuri-BOT*`,
      title: more,
      buttonText: "COMANDOS",
      sections
    }
    l.sendMessage(jid, listMessage, { quoted: quo })
  }

  /** Download media from message
     * 
     * @param {*} message 
     * @returns 
     */

  l.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk])
    }

    return buffer
  }

  /** Send sticker from image media
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} type
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */

  l.sendImageAsSticker = async (jid, path, type, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options, type)
    } else {
      buffer = await imageToWebp(buff, type)
    }

    await l.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }

  /** Send sticker from video media
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} type 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */

  l.sendVideoAsSticker = async (jid, path, type, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options, type)
    } else {
      buffer = await videoToWebp(buff, type)
    }
    await l.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
  }
}



OpenConn(), (err) => console.log("[ Connection Error ]", color(String(err), 'red'));

//AUTO UPDATE

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("[", "white") + color(" NEW UPDATE 🔄 ", "green") + color("]", "white") + color(` NOVAS ATUALIZAÇÕES APLICADAS A `, "white") + color(__filename, "yellow"));
  delete require.cache[file];
  require(file);
});