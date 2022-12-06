const { default: WWConnection, useMultiFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { Boom } = require('@hapi/boom')
const pino = require('pino');
const fs = require('fs');
const os = require('os')
const { color, notify, banner, centerBanner } = require('./lib/dfunctions');
const { smsg, formatp } = require('./lib/functions');

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