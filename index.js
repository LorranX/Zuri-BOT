const fs = require("fs");
const moment = require('moment-timezone');
const { color } = require('./lib/dfunctions');
const horaBR = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

module.exports = l = async (l, mek) => {
  try {

    //MAIN VARIABLES

    const from = mek.key.remoteJid;
    const type = Object.keys(mek.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key));
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const body = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? mek.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? mek.message[type].singleSelectReply.selectedRowId : (type == 'l.sendMessageButtonMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && ((mek.message[type].fileSha256.toString('base64')) !== null && (mek.message[type].fileSha256.toString('base64')) !== undefined) ? (mek.message[type].fileSha256.toString('base64')) : "" || mek.message[type]?.selectedButtonId || ""
    const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.';
    const isCmd = body.startsWith(prefix);
    const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : false
    const botNumber = await l.decodeJid(l.user.id)
    const isGroup = from.endsWith('@g.us');
    const sender = mek.sender;
    const groupMetadata = isGroup ? await l.groupMetadata(from) : '';
    const groupName = isGroup ? groupMetadata.subject : '';
    const pushname = mek.pushName || "";

    //CONSOLE

    if (isCmd && isGroup) console.log(color("[", "white") + color(" CMD 🛠️", "orange") + color("]", "white") + color(" - GP 👥 -", "white") + color(" RECEBIDO AS ", "white") + color(horaBR, "blue") + color(" ENVIADO NO GRUPO ", "white") + color(groupName, "blue") + color(" POR ", "white") + color(mek.sender.split("@")[0] + ` (${pushname})`, "blue") + ' ' + color(body.substring(0, 10), "yellow") + ' ' + color(`COMANDO ATRAVES DE `, "white") + color(mek.mtype, "yellow"));
    if (!isCmd && isGroup) console.log(color("[", "white") + color(" MSG 💬 ", "green") + color("]", "white") + color(" - GP 👥 -", "white") + color(" RECEBIDA AS ", "white") + color(horaBR, "blue") + color(" ENVIADO NO GRUPO ", "white") + color(groupName, "blue") + color(" POR ", "white") + color(mek.sender.split("@")[0] + ` (${pushname})`, "blue") + ' ' + color(mek.mtype, "yellow") + ' ' + color(mek.mtype != "stickerMessage" ? body.substring(0, 10) : "", "white"))
    if (isCmd && !isGroup) console.log(color("[", "white") + color(" CMD 🛠️", "orange") + color("]", "white") + color(" - PV 👤 -", "white") + color(" RECEBIDO AS ", "white") + color(horaBR, "blue") + color(" ENVIADO POR ", "white") + color(mek.sender.split("@")[0] + ` (${pushname})`, "blue") + ' ' + color(body, "yellow") + color(` COMANDO ATRAVES DE `, "white") + color(mek.mtype, "yellow"))
    if (!isCmd && !isGroup) console.log(color("[", "white") + color(" MSG 💬 ", "green") + color("]", "white") + color(" - PV 👤 -", "white") + color(" RECEBIDA AS ", "white") + color(horaBR, "blue") + color(" ENVIADO POR ", "white") + color(mek.sender.split("@")[0] + ` (${pushname})`, "blue") + ' ' + color(mek.mtype, "yellow") + ' ' + color(mek.mtype != "stickerMessage" ? body.substring(0, 10) : "", "white"))

    //COMMANDS

    switch (command) {

      case 'ping':
        l.reply(from, 'oi', mek);
        break;

      default:

        if (budy.includes('>>')) {
          var message = budy.slice(3);
          try {
            l.reply(from, JSON.stringify((eval(message)), null, 2), mek);
          } catch (e) {
            err = String(e);
            reply(from, err, mek);
          };
        }

    }
  } catch (e) {
    err = String(e);
    console.log("Error : %s",
      color(err, "red"));
  };
}

//AUTO UPDATE

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(color("[", "white") + color(" NEW UPDATE 🔄 ", "green") + color("]", "white") + color(` NOVAS ATUALIZAÇÕES APLICADAS A `, "white") + color(__filename, "yellow"));
  delete require.cache[file];
  require(file);
});