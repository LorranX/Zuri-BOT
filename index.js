const {
  WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  ChatModification,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, createExif2, getRandom, modStick, fetchJson } = require("./lib/function.js");
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
const ggs = require('google-it')
const { wikiSearch } = require('./lib/wiki.js')
const googleImage = require('g-i-s')
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const fs = require("fs");
const path = require("path")
const ffmpeg = require('fluent-ffmpeg');
const yts = require('yt-search');
const request = require('request');
const axios = require("axios");
const { mediafireDl } = require('./lib/mediafire.js')
const moment = require("moment-timezone");
const { webp2gifFile } = require("./lib/gif.js")
const afk = require("./lib/afk");
const ms = require('parse-ms')
const toMs = require('ms')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { isFiltered, addFilter } = require('./lib/antispam')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot');
const { yta, ytv, igdl, upload, hdyt, pinterest, formatDate, ttdownloader, ytdlcoreMp4, ytdlcoreMp3 } = require('./lib/downloaders');
const { RESPOSTAS } = require('./respostas');
const { eita } = require("./respostas/RESPOSTAS.js");
const translate = require("@vitalets/google-translate-api");
const thiccysapi = require('@phaticusthiccy/open-apis');
const sex = require('@bochilteam/scraper');


//INFO
owner = ["553195703379@s.whatsapp.net", "553192941210@s.whatsapp.net"];
m = "```";
battery = {
  persen: "" || "Não consegui detectar",
  charger: "" || false
};
blocked = [];
roomttt = [];
defttt = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
antideleted = false;
self = false;
autoread = false;
autotyping = false;
multi = true
memlimit = 15

//BLACK LIST BY EU

const addblacklist = (from) => {
  const blist = { JidG: from, numeros: [] }
  blacklist.push(blist)
  fs.writeFileSync(`./database/grupo/blacklist.json`, JSON.stringify(blacklist))
}

const checkBlackListG = (from) => {
  let position = false
  Object.keys(blacklist).forEach((i) => {
    if (blacklist[i].JidG === from) {
      position = i
    }
  })
  if (position !== false) {
    return blacklist[position].numeros

  }
}
const AddNumeroBL = (from, numero) => {
  let position = false
  Object.keys(blacklist).forEach((i) => {
    if (blacklist[i].JidG === from) {
      position = i
    }
  })
  if (position !== false) {

    blacklist[position].numeros.push(numero)
    fs.writeFileSync('./database/grupo/blacklist.json', JSON.stringify(blacklist))
  }
}

const RmNumeroBL = (from, numero) => {
  let position = false
  Object.keys(blacklist).forEach((i) => {
    if (blacklist[i].JidG === from) {
      position = i
    }
  })
  if (position !== false) {
    blacklist[position].numeros.splice(numero)
    fs.writeFileSync('./database/grupo/blacklist.json', JSON.stringify(blacklist))
  }
}



//DINHEIRO E LEVEL

const getLevelingXp = (sender) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].xp
  }
}

const getLevelingLevel = (sender) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].level
  }
}

const getLevelingId = (sender) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return _level[position].id
  }
}

const addLevelingXp = (sender, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].xp += amount
    fs.writeFileSync('./database/user/levelusuarios.json', JSON.stringify(_level))
  }
}

const addLevelingLevel = (sender, amount) => {
  let position = false
  Object.keys(_level).forEach((i) => {
    if (_level[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    _level[position].level += amount
    fs.writeFileSync('./database/user/levelusuarios.json', JSON.stringify(_level))
  }
}

const addLevelingId = (sender) => {
  const obj = { id: sender, xp: 1, level: 1 }
  _level.push(obj)
  fs.writeFileSync('./database/user/levelusuarios.json', JSON.stringify(_level))
}

const addATM = (sender) => {
  const obj = { id: sender, uang: 0 }
  uang.push(obj)
  fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
    if (uang[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    uang[position].uang += amount
    fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
  }
}

const checkATMuser = (sender) => {
  let position = false
  Object.keys(uang).forEach((i) => {
    if (uang[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return uang[position].uang
  }
}

const confirmATM = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
    if (uang[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    uang[position].uang -= amount
    fs.writeFileSync('./database/user/dinheiro.json', JSON.stringify(uang))
  }
}

//END DINHEIRO E LEVEL

const addcontador = (sender) => {
  const msg = { id: sender, mensagens: 0 }
  contadorb.push(msg)
  fs.writeFileSync('./database/user/contadorbot.json', JSON.stringify(contadorb))
}

const mensagemuser = (sender, amount) => {
  let position = false
  Object.keys(contadorb).forEach((i) => {
    if (contadorb[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    contadorb[position].mensagens += amount
    fs.writeFileSync('./database/user/contadorbot.json', JSON.stringify(contadorb))
  }
}

const checkMSGuser = (sender) => {
  let position = false
  Object.keys(contadorb).forEach((i) => {
    if (contadorb[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return contadorb[position].mensagens

  }
}
//END CONTADOR

//CONTADOR COMANDOS
const addcontadorC = (sender) => {
  const comandosu = { id: sender, comandos: 0 }
  contadorC.push(comandosu)
  fs.writeFileSync('./database/user/contadorcomandos.json', JSON.stringify(contadorC))
}

const comandouser = (sender, amount) => {
  let position = false
  Object.keys(contadorC).forEach((i) => {
    if (contadorC[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    contadorC[position].comandos += amount
    fs.writeFileSync('./database/user/contadorcomandos.json', JSON.stringify(contadorC))
  }
}

const checkCMDuser = (sender) => {
  let position = false
  Object.keys(contadorC).forEach((i) => {
    if (contadorC[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return contadorC[position].comandos

  }
}
//END CONTADOR COMANDOS

//CONTADOR ERROS
const addcontadorE = (sender) => {
  const zulipanos = { id: sender, erros: 0 }
  contadorE.push(zulipanos)
  fs.writeFileSync('./database/user/contadorerros.json', JSON.stringify(contadorE))
}

const errouser = (sender, amount) => {
  let position = false
  Object.keys(contadorE).forEach((i) => {
    if (contadorE[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    contadorE[position].erros += amount
    fs.writeFileSync('./database/user/contadorerros.json', JSON.stringify(contadorE))
  }
}

const checkERRuser = (sender) => {
  let position = false
  Object.keys(contadorE).forEach((i) => {
    if (contadorE[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return contadorE[position].erros

  }
}
//END CONTADOR ERROS

//JSON USUARIOS
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'));
const registrarusuarios = JSON.parse(fs.readFileSync('./database/user/registros.json'));
const tinderm = JSON.parse(fs.readFileSync('./database/user/tinderm.json'));
const tinderf = JSON.parse(fs.readFileSync('./database/user/tinderf.json'));
const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'));
const _level = JSON.parse(fs.readFileSync('./database/user/levelusuarios.json'));
const _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
const uang = JSON.parse(fs.readFileSync('./database/user/dinheiro.json'))
const contador = JSON.parse(fs.readFileSync('./database/user/contador.json'))
const contadorb = JSON.parse(fs.readFileSync('./database/user/contadorbot.json'))
const contadorE = JSON.parse(fs.readFileSync('./database/user/contadorerros.json'))
const contadorC = JSON.parse(fs.readFileSync('./database/user/contadorcomandos.json'))
//END JSON USUARIOS

//JSON GRUPOS
const welcome = JSON.parse(fs.readFileSync('./database/grupo/welcome.json'));
const x9 = JSON.parse(fs.readFileSync('./database/grupo/x9.json'));
const antilink = JSON.parse(fs.readFileSync('./database/grupo/antilink.json'));
const antilinkhard = JSON.parse(fs.readFileSync('./database/grupo/antilinkhard.json'));
const antitxt = JSON.parse(fs.readFileSync('./database/grupo/antitxt.json'));
const antihide = JSON.parse(fs.readFileSync('./database/grupo/antihide.json'));
const antifake = JSON.parse(fs.readFileSync('./database/grupo/antifake.json'));
const antivo = JSON.parse(fs.readFileSync('./database/grupo/antivo.json'));
const mute = JSON.parse(fs.readFileSync('./database/bot/mute.json'));
const perm = JSON.parse(fs.readFileSync('./database/bot/perm.json'));
const _leveling = JSON.parse(fs.readFileSync('./database/grupo/leveling.json'));
const blacklist = JSON.parse(fs.readFileSync(`./database/grupo/blacklist.json`))
const blacklistg = JSON.parse(fs.readFileSync(`./database/grupo/blacklistg.json`));
const autofig = JSON.parse(fs.readFileSync(`./database/grupo/autofig.json`));
const antibot = JSON.parse(fs.readFileSync(`./database/grupo/antibot.json`))
//END JSON GRUPOS

const getFrom = (from) => {
  return from
}
const getSender = (sender) => {
  return sender
}
const getPushname = (id) => {
  getp = id.replace('s.whatsapp.net', 'c.us')
  id2 = LorranX.contacts[id] || { notify: getp.replace(/@.+/, '') }
  resultp = id2.notify || id2.vname || id2.name || '-'
  return resultp
}

//TINDER
const addtinderF = (userid) => {
  const rgt = { id: userid }
  tinderf.push(rgt)
  fs.writeFileSync(`./database/user/tinderf.json`, JSON.stringify(tinderf))
}
const addtinderM = (userid) => {
  const rgt = { id: userid }
  tinderm.push(rgt)
  fs.writeFileSync(`./database/user/tinderm.json`, JSON.stringify(tinderm))
}

const getRandomTinderId = (qualtinder) => {
  return qualtinder[Math.floor(Math.random() * qualtinder.length)].id
}

const checkTinderMUser = (sender) => {
  let status = false
  Object.keys(tinderm).forEach((i) => {
    if (tinderm[i].id === sender) {
      status = true
    }
  })
  return status
}

const checkTinderFUser = (sender) => {
  let status = false
  Object.keys(tinderf).forEach((i) => {
    if (tinderf[i].id === sender) {
      status = true
    }
  })
  return status
}
// REGISTRAR USUARIOS

const getRegisteredRandomId = () => {
  return registrarusuarios[Math.floor(Math.random() * registrarusuarios.length)].id
}

const addRegisteredUser = (userid, sender, horarior, serial, a) => {
  const obj = {
    id: userid,
    nome: sender,
    horaioR: horarior,
    serial: serial,
    a: a
  }
  registrarusuarios.push(obj)
  fs.writeFileSync('./database/user/registros.json', JSON.stringify(registrarusuarios))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(registrarusuarios).forEach((i) => {
    if (registrarusuarios[i].id === sender) {
      status = true
    }
  })
  return status
}

const checkREGtime = (sender) => {
  let position = false
  Object.keys(registrarusuarios).forEach((i) => {
    if (registrarusuarios[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return registrarusuarios[position].horaioR
  }
}

//DATA...HORA
function DATACOMPLETA() {
  myMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  myDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
  var tgl = new Date();
  var day = tgl.getDate();
  bulan = tgl.getMonth();
  var thissDay = tgl.getDay(),
    thisDay = myDays[thissDay];
  var yy = tgl.getYear();
  var year = (yy < 1000) ? yy + 1900 : yy;
  return `${thisDay}, dia ${day} de ${myMonths[bulan]} de ${year}`;
}
function DATACOMPLETANUM() {
  myMonths = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  var tgl = new Date();
  var day = tgl.getDate();
  bulan = tgl.getMonth();
  var capeta2 = tgl.getYear();
  var year = (capeta2 < 1000) ? capeta2 + 1900 : capeta2;
  return `${day}/${myMonths[bulan]}/${year}`;
}
function HORAEXATA(seconds) {
  function pad(s) {
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60 * 60));
  var minutes = Math.floor(seconds % (60 * 60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} horas ${pad(minutes)} minutos ${pad(seconds)} segundos`
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia(s), " : " Dia(s), ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora(s), " : " Hora(s), ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto(s), " : " Minuto(s), ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo(s)" : " segundo(s)") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};


var time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");



module.exports = (LorranX) => {
  WelcomeBot = (from, text, footer, but = [], options = {}) => {
    const buttonMessage = {
      contentText: text,
      footerText: footer,
      buttons: but,
      headerType: 1
    };
    LorranX.sendMessage(
      from,
      buttonMessage,
      MessageType.buttonsMessage,
      options
    )
  }

  WelcomeButton = async (from, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await LorranX.prepareMessage(from, kma, MessageType.image)
    const buttonMessages = {
      imageMessage: mhan.message.imageMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 4
    };
    LorranX.sendMessage(
      from,
      buttonMessages,
      MessageType.buttonsMessage, { contextInfo: { mentionedJid: [mem.split("@")[0] + "@s.whatsapp.net"] } },
      options
    )
  }
  X9But = async (from, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mdata = await LorranX.groupMetadata(from)
    membros = mdata.participants
    adms = getGroupAdmins(membros)
    adms.push(mem)
    mhan = await LorranX.prepareMessage(from, kma, MessageType.image)
    const buttonMessages = {
      imageMessage: mhan.message.imageMessage,
      contentText: text1,

      footerText: desc1,
      buttons: but,
      headerType: 4
    };
    LorranX.sendMessage(
      from,
      buttonMessages,
      MessageType.buttonsMessage, { contextInfo: { "mentionedJid": adms } },
      options
    )
  }
  const Welcomebutton2 = async (from, text1, desc1, vid1, but = [], options = {}) => {
    kma = vid1
    mhan = await LorranX.prepareMessage(from, kma, MessageType.video,)
    const buttonMessages = {
      videoMessage: mhan.message.videoMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 5
    }
    LorranX.sendMessage(from,
      buttonMessages,
      MessageType.buttonsMessage, { contextInfo: { mentionedJid: [mem.split("@")[0] + "@s.whatsapp.net"] } },
      options
    )
  }
  const welcomebutton3 = async (from, text1, desc1, gam1, but = [], options = {}) => {
    kma = gam1
    mhan = await LorranX.prepareMessage(from, kma, MessageType.location)
    const buttonMessages = {
      locationMessage: mhan.message.locationMessage,
      contentText: text1,
      footerText: desc1,
      buttons: but,
      headerType: 6
    }
    LorranX.sendMessage(from,
      buttonMessages,
      MessageType.buttonsMessage,
      options
    )
  }
  LorranX.on("group-update", async (anu) => {
    if (!antitxt.includes(anu.jid)) {
      if (!antilink.includes(anu.jid)) {
        metadata = await LorranX.groupMetadata(anu.jid);
        if (anu.announce == "false") {
          LorranX.sendMessage(metadata.id, `*[ Grupo Aberto ]* \n\n${m}Grupo abrido pelo corno do adm${m}`, MessageType.text);
          console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
        } else if (anu.announce == "true") {
          LorranX.sendMessage(metadata.id, `*[ Grupo Fechado ]* \n\n${m}Modo serio grupo fechado pelo adm${m}`, MessageType.text);
          console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
        }
      }
    }
  });
  LorranX.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
  LorranX.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  LorranX.on('CB:action,,call', async calling => {
    nomer = calling[2][0][1].from;
    calabimba = nomer.replace('@s.whatsapp.net', '')
    carandiru = nomer.replace('c.us', 's.whatsapp.net')
    contsw = LorranX.contacts[carandiru] || { notify: nomer.replace(/@.+/, '') }
    pushnamerr = contsw.notify || contsw.vname || contsw.name || '-'
    welcomebutton3("553195703379@s.whatsapp.net", `${m}Acabei de receber uma ligação\n\n• Nome do usuario: ${pushnamerr}\n\n• Número do usuario: wa.me/${calabimba}${m}`, ``, { jpegThumbnail: fs.readFileSync("./lib/image/telefono.jpg") }, [{
      buttonId: `.blockcall ${nomer}`,
      buttonText: {
        displayText: "BLOQUEAR"
      },
      type: 1
    }, {
      buttonId: `.bigputabrasil ${carandiru}`,
      buttonText: {
        displayText: "XINGAR"
      },
      type: 1
    }])
    LorranX.sendMessage(nomer, `*Ola ${pushnamerr}, sou apenas um bot, sua ligação foi reportada ao meu dono*`, MessageType.text)
  });
  LorranX.on('message-delete', async (m) => {
    from = m.key.remoteJid
    time = moment().format('HH:mm:ss')
    type = Object.keys(m.message)[0]
    m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
    if (from == "status@broadcast") return
    if (!m.key.fromMe && m.key.fromMe) return
    te = `[ ANTI DELETE ]\n\nDe: @${m.participant.split("@")[0]}\nHora: ${time}`
    LorranX.copyNForward(from, m.message)
    LorranX.sendMessage(from, te, MessageType.text, { quoted: m.message, contextInfo: { "mentionedJid": [m.participant] } })
  })
  LorranX.on("group-participants-update", async (anu) => {

    horariof = moment.tz("America/Sao_Paulo").format("HH:mm")
    mdata = await LorranX.groupMetadata(anu.jid)
    memeg = mdata.participants.length
    num = anu.participants[0]

    try {
      groupMet = await LorranX.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      mem = anu.participants[0]

      try {
        pp_user = await LorranX.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }

      if (anu.action == "add") {
        //BLACK LIST
        buff = await getBuffer(pp_user);
        CheckB = await checkBlackListG(mdata.id)
        if (blacklistg.includes(anu.jid)) {
          if (CheckB.includes(num)) {
            LorranX.groupRemove(mdata.id, [num])
            textbl = `*BLACK LIST* ✋🏻\n\n${m}O usuario que acabou de entrar é um dos numeros inclusos na blacklist deste grupo, não permitirei que ele entre enquanto o recurso de black-list esteja ativado${m}\n`
            banidor = fs.readFileSync("./lib/image/blacklist.jpg")
            welcomebutton3(mdata.id, textbl, `*${horariof}* | ${mdata.subject}`, { jpegThumbnail: banidor }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "📓"
              },
              type: 1
            }])
          } else if (!CheckB.includes(num) && welcome.includes(anu.jid)) LorranX.sendMessage(mdata.id, `Ola @${mem.split("@")[0]} seja bem vindo ao grupo ${mdata.subject}`, text)
        }

        //END BLACK LIST

        //ANTI FAKE
        if (antifake.includes(anu.jid)) {
          if (!num.split('@')[0].startsWith(55)) {
            LorranX.groupRemove(mdata.id, [num])
            textbf = `*ANTI FAKE* ✋🏻\n\n${m}De acordo com as configurações atuais deste grupo, números fake não são permitidos, isso acontecera com todo e qualquer novo número fake que tentar entrar no grupo${m}\n`
            banidor = fs.readFileSync("./lib/image/banfake.jpg")
            welcomebutton3(mdata.id, textbf, `*${horariof}* | ${mdata.subject}`, { jpegThumbnail: banidor }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "👽"
              },
              type: 1
            }])
            LorranX.sendMessage(num, `Olá, de acordo com as configurações atuais do grupo numeros estrangeiros não são permitidos, converse com um dos administradores\n\nHello, according to the group's current settings foreign numbers are not allowed, talk to one of the administrators\n\nHola, de acuerdo con la configuración actual del grupo, no se permiten números extranjeros, hable con uno de los administradores\n\nHalo, menurut pengaturan grup saat ini, nomor asing tidak diperbolehkan, berbicara dengan salah satu administrator`, MessageType.text)
          }
        }
        //END ANTI FAKE

        //WELCOME FAKE
        let w = LorranX.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || mem.split("@")[0]
        time_wel = moment.tz("America/Sao_Paulo").format("HH:mm")
        if (welcome.includes(anu.jid)) {
          if (!antifake.includes(anu.jid)) {
            if (!num.split('@')[0].startsWith(55)) {
              textnbf = `Número fake detectado, coe @${mem.split("@")[0]} seja +- bem vindo ao grupo ${mdata.subject}`
              WelcomeButton(mdata.id, textnbf, `To de olho em tu viado, pra ter acesso aos meus comandos use .menu`, buff, [{
                buttonId: `arizap`,
                buttonText: {
                  displayText: `Welcome 👋🏻`
                },
                type: 1
              }, {
                buttonId: `abcda`,
                buttonText: {
                  displayText: "Gostei de tu não 🤨"
                },
                type: 1
              }])
            }
          }
        }

        //END WELCOME FAKE

        //WELCOME DO BOT
        membroswb = mdata.participants
        admswb = await getGroupAdmins(membroswb)

        if (num === LorranX.user.jid && !perm.includes(mdata.id) && membroswb.length > memlimit) {
          WelcomeBot(mdata.id, `*Olá membros do grupo* ${mdata.subject}`, `*Sou o bot do lorran, o mais novo bot daqui, se divirtam com meus mais de 370 comandos, aos admins ofereço diversos sistemas de proteção e administração para grupos, confiram essas e outras diversas funções usando .menu*${String.fromCharCode(8206).repeat(4001)}\n\n*as regras para permanência do bot no grupo foram enviadas no privado de cada um dos adms*`, null, { contextInfo: { forwardingScore: 508, isForwarded: true } })
          LorranX.sendMessage(admswb, `*REGRAS\n\nNão aceito o bot em grupos de trava zap(so pagando)\nNão aceito que membros ameaçem o bot com travas os algo parecido\nNão aceito flood excessivo de comandos\n\nSão regras simples usem com responsabilidade e garatão que seus membros façam o mesmo, o descumprimento de alguma das regras leva a penalidade de nunca mais ter acesso ao bot em seu grupo*`, MessageType.text)
        }
        //WELCOME 1
        if (num.split('@')[0].startsWith(55)) {
          mett = ["1", "2", "3", "4"]
          res = mett[Math.floor(Math.random() * mett.length)]
          if (res == "1") {
            const abacadraba = `Olá @${mem.split("@")[0]} seja bem vindo ao grupo ${mdata.subject}, espero que c goste ❤️`
            let buff = await getBuffer(pp_user);
            if (welcome.includes(anu.jid)) {
              WelcomeButton(mdata.id, abacadraba, `Para ter acesso aos meus comandos use .menu`, buff, [{
                buttonId: `@${mem.split("@")[0]}`,
                buttonText: {
                  displayText: "Welcome 👋🏻"
                },
                type: 1
              }])
            }

            //END WELCOME 1

            //WELCOME 2
          } else if (res == "2") {
            res = mett[Math.floor(Math.random() * mett.length)]
            var alo = []
            var desgraça34 = ['99', '7', '1000', '-10', '31', '0', '4', '9', '17', '28', '34', '48', '59', '62', '100', '29', '94', '75', '41', '39', '15', '99999999999']
            var desgraçççça = desgraça34[Math.floor(Math.random() * desgraça34.length)]
            var desgraçççça2 = desgraça34[Math.floor(Math.random() * desgraça34.length)]
            var desgraçççça3 = desgraça34[Math.floor(Math.random() * desgraça34.length)]
            var desgraçççça4 = desgraça34[Math.floor(Math.random() * desgraça34.length)]
            const abacadraba22 = `Olá @${mem.split("@")[0]}\nseja bem vindo ao grupo: ${mdata.subject}\n\n------------《SOBRE VOCÊ\n*${desgraçççça}% gay* 🏳️‍🌈\n*${desgraçççça2}% corno* 🐮\n*${desgraçççça3}% gado* 🐂\n*${desgraçççça4}% confiavel* 🤝🏻`
            let buff = await getBuffer(pp_user);
            if (welcome.includes(anu.jid)) {
              WelcomeButton(mdata.id, abacadraba22, `_@lorran_`, buff, [{
                buttonId: `aaaaa`,
                buttonText: {
                  displayText: "Bem vindo 😃"
                },
                type: 1
              }])
            }

            //END WELCOME 2

            //WELCOME 3
          } else if (res == "3") {
            res = mett[Math.floor(Math.random() * mett.length)]
            const abacadraba33 = `Olá @${mem.split("@")[0]} seja bem vindo, espero que c goste ❤️`
            macaquito = fs.readFileSync("./lib/image/princesa.webp")
            let buff = await getBuffer(pp_user);
            if (welcome.includes(anu.jid)) {
              WelcomeButton(mdata.id, abacadraba33, `*Eai man, c ta baum?*`, buff, [{
                buttonId: `.menu`,
                buttonText: {
                  displayText: "Menu 🛍️"
                },
                type: 1
              }])
              setTimeout(() => {
                LorranX.sendMessage(mdata.id, macaquito, MessageType.sticker,)
              }, 2000)
            }

            //END WELCOME 3

            //WELCOME 4
          } else if (res == "4") {
            res = mett[Math.floor(Math.random() * mett.length)]
            const abacadraba44 = `*_Bem vindo_* @${mem.split("@")[0]}\n\n🧊⃤⃤  : ${m}${memeg}° membro${m}\n📱⃤⃤  : ${m}+${mem.split("@")[0]}${m}\n⌚⃤⃤  : ${m}${moment.tz('America/Sao_Paulo').format('HH:mm:ss')}${m}\n📆⃤⃤  : ${DATACOMPLETANUM()}\n\n${m}Espero que goste do grupo, lembre-se de ler a descrição${m}`
            let buff = await getBuffer(pp_user);
            if (welcome.includes(anu.jid)) {
              welcomebutton3(mdata.id, abacadraba44, `${m}LorranX | ${mdata.subject}${m}`, { jpegThumbnail: buff }, [{
                buttonId: `.menu`,
                buttonText: {
                  displayText: "Menu 🛍️"
                },
                type: 1
              }], { contextInfo: { mentionedJid: [mem.split("@")[0] + "@s.whatsapp.net"] } })
            }
          }
        }

        //END WELCOME 4                  
      }
      if (anu.action == "remove") {
        mdata = await LorranX.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = LorranX.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || mem.split("@")[0]
        time_wel = moment.tz("America/Sao_Paulo").format("HH:mm")
        memeg = mdata.participants.length
        text = `O integrante do grupo @${mem.split("@")[0]} acabou de sair`
        buff = await getBuffer(pp_user)
        if (welcome.includes(anu.jid)) {
          if (num.split('@')[0].startsWith(55)) {
            if (!antifake.includes(anu.jid)) {
              WelcomeButton(mdata.id, text, `Tchau mamaco`, buff, [{
                buttonId: `56`,
                buttonText: {
                  displayText: "Adeus 👋🏻"
                },
                type: 1
              }])
            }
          }
        }
      }

      const magagop = ['agora é um dos adms', 'acabou de virar adm', 'acabou de entrar para a lista de admins', 'acabou de entrar pra lista dos mais cornos do grupo', 'agora é um dos gados oficiais do grupo', 'acabou de ser promovido']
      const randomp = magagop[Math.floor(Math.random() * magagop.length)]
      if (anu.action == "promote") {
        mdata = await LorranX.groupMetadata(anu.jid)
        buff = await getBuffer(pp_user);
        promote = `*[ 🕵🏻‍♂️ _PROMOTE DETECTADO_ ⚠️ ]*\n\n${m}O membro comum @${mem.split("@")[0]} ${randomp}${m}\n`
        if (x9.includes(anu.jid)) {
          X9But(mdata.id, promote, `*⁂ POR MOTIVOS DE SEGURANÇA ESTA MENSAGEM MARCOU TODOS OS ADMINS*`, buff, [{
            buttonId: `add`,
            buttonText: {
              displayText: "Merecia demais 🤩"
            },
            type: 1
          }, {
            buttonId: `zap`,
            buttonText: {
              displayText: "Merecia nada esse viado 🤨"
            },
            type: 1
          }])
        }
      } if (anu.action == "demote") {
        const magagod = ['voltou a ser um dos membros comuns', 'acabou de virar membro comum', 'acabou de entrar para a lista de membros comuns', 'acabou de ser demitido do cargo']
        const randomd = magagod[Math.floor(Math.random() * magagod.length)]
        mdata = await LorranX.groupMetadata(anu.jid)
        buff = await getBuffer(pp_user);
        mem = anu.participants[0]
        demote = `*[ 🕵🏻‍♂️ _DEMOTE DETECTADO_ ♿ ]*\n\n${m}O adm @${mem.split("@")[0]} ${randomd}${m}\n`
        if (x9.includes(anu.jid)) {
          X9But(mdata.id, demote, `*⁂ POR MOTIVOS DE SEGURANÇA ESTA MENSAGEM MARCOU TODOS OS ADMINS*`, buff, [{
            buttonId: `add`,
            buttonText: {
              displayText: "Nem sabia que ele era adm ☹️"
            },
            type: 1
          }, {
            buttonId: `zap`,
            buttonText: {
              displayText: "😨"
            },
            type: 1
          }])
        }
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }
  }),
    LorranX.on("chat-update", async (mek) => {
      try {
        if (!mek.hasNewMessage) return;
        mek = mek.messages.all()[0];
        if (!mek.message) return
        if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12 && mek.key.fromMe) return
        if (mek.key && mek.key.remoteJid == "status@broadcast") return;
        global.blocked;
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
        const content = JSON.stringify(mek.message);
        const from = mek.key.remoteJid;
        const { text, extendedText, contact, location, liveLocation, image, video, gif, sticker, document, audio, product, buttonsMessage, } = MessageType;
        const type = Object.keys(mek.message)[0];
        const cmd =
          type === "conversation" && mek.message.conversation
            ? mek.message.conversation
            : type == "imageMessage" && mek.message.imageMessage.caption
              ? mek.message.imageMessage.caption
              : type == "videoMessage" && mek.message.videoMessage.caption
                ? mek.message.videoMessage.caption
                : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
                  ? mek.message.extendedTextMessage.text
                  : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
                    ? mek.message[type].selectedButtonId
                    : "";
        if (multi) {
          var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'
        } else {
          prefix = prefa
        }

        body =
          type === 'listResponseMessage' && mek.message.listResponseMessage.title
            ? mek.message.listResponseMessage.title
            : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
              ? mek.message.buttonsResponseMessage.selectedButtonId
              : type == "conversation" && mek.message.conversation.startsWith(prefix)
                ? mek.message.conversation
                : type == "imageMessage" &&
                  mek.message.imageMessage.caption.startsWith(prefix)
                  ? mek.message.imageMessage.caption
                  : type == "videoMessage" &&
                    mek.message.videoMessage.caption.startsWith(prefix)
                    ? mek.message.videoMessage.caption
                    : type == "extendedTextMessage" &&
                      mek.message.extendedTextMessage.text.startsWith(prefix)
                      ? mek.message.extendedTextMessage.text
                      : "";
        const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        const abrupto = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
        const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
        const time3 = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
        const isCmd = body.startsWith(prefix)
        const isPedido = body.startsWith(prefix + `tumatuma`)
        const arg = budy.slice(command.length + 2, budy.length)
        const q = args.join(' ')
        const botNumber = LorranX.user.jid
        const isGroup = from.endsWith("@g.us")
        const sender = mek.key.fromMe
          ? LorranX.user.jid
          : isGroup
            ? mek.participant
            : mek.key.remoteJid
        const totalchat = LorranX.chats.all()
        const groupMetadata = isGroup ? await LorranX.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.jid : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const quantosmembros = isGroup ? groupMembers.length : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const quantosadmins = isGroup ? groupAdmins.length : ''
        const isBanned = ban.includes(sender)
        const isOwner = owner.includes(sender);
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isAntivo = isGroup ? antivo.includes(from) : false
        const isBlackOn = isGroup ? blacklistg.includes(from) : false
        const isX9 = isGroup ? x9.includes(from) : true
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isAntiFa = isGroup ? antifake.includes(from) : true
        const isAntiLink = isGroup ? antilink.includes(from) : true
        const isAntiLinkHard = isGroup ? antilinkhard.includes(from) : true
        const isAntiTxt = isGroup ? antitxt.includes(from) : true
        const isAntiBot = isGroup ? antibot.includes(from) : true
        const isHideTag = isGroup ? antihide.includes(from) : true
        const isWelcome = isGroup ? welcome.includes(from) : true
        const isRegister = checkRegisteredUser(sender)
        const isTinderF = checkTinderFUser(sender)
        const isTinderM = checkTinderMUser(sender)
        const isMuted = isGroup ? mute.includes(from) : false
        const isPermitido = isGroup ? perm.includes(from) : false
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof (mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const conts = mek.key.fromMe ? LorranX.user.jid : LorranX.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? LorranX.user.name : conts.notify || conts.vname || conts.name || '-'
        const more = String.fromCharCode(8206)
        const readMore = more.repeat(4001)
        const isbot = mek.key.id.startsWith('3EB0') && mek.key.id.length === 12


        if (time3 < "24:59:00") {
          var HORARIOS = "Boa noite";
        }
        if (time3 < "19:00:00") {
          var HORARIOS = "Boa noite";
        }
        if (time3 < "18:00:00") {
          var HORARIOS = "Boa tarde ";
        }
        if (time3 < "15:00:00") {
          var HORARIOS = "Boa tarde";
        }
        if (time3 < "11:00:00") {
          var HORARIOS = "Bom dia";
        }
        if (time3 < "05:00:00") {
          var HORARIOS = "Boa madrugada";
        }




        if (self) {
          if (!isOwner || !botNumber) return
        }

        if (autoread) {
          LorranX.chatRead(from)
        }

        if (autotyping && isCmd) {
          LorranX.updatePresence(from, Presence.composing)
        }

        const mentions = (teks, memberr, id) => {
          (id == null || id == undefined || id == false) ? LorranX.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : LorranX.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const qmentions = (teks, memberr, id, quoted) => {
          (id == null || id == undefined || id == false) ? LorranX.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : LorranX.sendMessage(from, teks.trim(), extendedText, { quoted: quoted, contextInfo: { "mentionedJid": memberr } })
        }
        const mentionsbut = (jf, teks, memberr, id, idbut, displaybut, footerzin, quo) => {
          (id == null || id == undefined || id == false) ? sendButtonMsg(from, teks.trim(), footerzin, [{
            buttonId: `${prefix}${idbut}`,
            buttonText: {
              displayText: `${displaybut}`
            },
            type: 1
          }], { contextInfo: { "mentionedJid": memberr } }) : sendButtonMsg(from, teks.trim(), footerzin, [{
            buttonId: `${prefix}${idbut}`,
            buttonText: {
              displayText: `${displaybut}`
            },
            type: 1
          }], { quoted: quo ? quo : mek, contextInfo: { "mentionedJid": memberr } })
          if (jf === `não`) return (id == null || id == undefined || id == false) ? sendButtonMsg(from, teks.trim(), footerzin, null, { contextInfo: { forwardingScore: 508, isForwarded: true, "mentionedJid": memberr } }) : sendButtonMsg(from, teks.trim(), footerzin, null, { quoted: quo ? quo : mek, contextInfo: { forwardingScore: 508, isForwarded: true, "mentionedJid": memberr } })
        }
        idttt = [];
        players1 = [];
        players2 = [];
        turn = [];
        for (let i of roomttt) {
          idttt.push(i.id)
          players1.push(i.player1)
          players2.push(i.player2)
          turn.push(i.turn)
        }
        const isTTT = isGroup ? idttt.includes(from) : false
        const isPlayer1 = isGroup ? players1.includes(sender) : false
        const isPlayer2 = isGroup ? players2.includes(sender) : false
        const isUrl = (url) => {
          return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }


        const MentionedReply = (teks, marcador) => {
          hidereply = {
            text: teks,
            contextInfo: {
              mentionedJid: [sender]
            },
          }
          LorranX.sendMessage(from, hidereply, text, {
            quoted: marcador
          })
        }
        const reply = (teks) => {
          LorranX.sendMessage(from, teks, text, {
            quoted: mek
          })
        }
        const replym = (teks, mentio) => {
          LorranX.sendMessage(from, teks, text, {
            quoted: mek,
            contextInfo: {
              mentionedJid: [mentio]
            }
          })
        }
        const fakethumb = (teks, yes) => {
          LorranX.sendMessage(from, teks, image, {
            thumbnail: fs.readFileSync('./lib/image/fake.jpeg'),
            quoted: mek,
            caption: yes
          })
        }
        const replyq = (teks, tubitubi) => {
          LorranX.sendMessage(from, teks, text, {
            quoted: tubitubi
          })
        }
        const sendsticker = (fegurinha, quo) => {
          bodia = quo ? quo : ``
          LorranX.sendMessage(from, fegurinha, sticker, {
            quoted: bodia
          })
        }
        const calunia = (id, mensagem, respostabot, retirar) => {
          var quotedm = mensagem
          lilipo = quotedm.includes(retirar) ? quotedm.replace(`@${retirar}`, ``) : quotedm = mensagem
          quotedcalunia = {
            key: {
              fromMe: false,
              participant: id
            },
            message: {
              "extendedTextMessage": {
                "text": lilipo,
                "title": `meu pau ta duro`
              }
            }
          }
          replyq(respostabot, quotedcalunia)
        }
        const sendbanido = () => {
          img = fs.readFileSync('./lib/image/maddasdldas.jpg')
          LorranX.sendMessage(from, fs.readFileSync('./lib/sons/banidu.mp3'), audio, {
            contextInfo: {
              "externalAdReply": {
                "title": `Por algum motivo você esta proibido de usar meus comandos`,
                "body": `converse com meu dono`,
                "mediaType": 2,
                "previewType": 2,
                "thumbnail": img,
                "mediaUrl": `https://youtu.be/DFyDaoBGlAA`
              }
            }
          })
        }
        const sendTextPro = (link, texto, caption = "") => {
          thiccysapi.textpro(link, [`${texto}`]).then(async (data) => {
            try {
              sendMediaURL(data, `não`, caption)
            } catch (err) {
              console.log(err)
            }
          });
        }
        const sendTextPro2 = (link, texto1, texto2, caption = "") => {
          thiccysapi.textpro(link, [`${texto1}`, `${texto2}`]).then(async (data) => {
            try {
              sendMediaURL(data, `não`, caption)
            } catch (err) {
              console.log(err)
            }
          });
        }
        const sendTextProEX = (link) => {
          sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.makerex(), mek, sender)
          thiccysapi.textpro(link, [`Lorran Bot`]).then(async (data) => {
            try {
              sendMediaURL(data, `não`, `Para obter um resultado como esse use _*${prefix}${command} texto*_`)
            } catch (err) {
              console.log(err)
            }
          });
        }
        const sendTextProEX2 = (link) => {
          sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.makerex(), mek, sender)
          thiccysapi.textpro(link, [`Lorran`, `Bot`]).then(async (data) => {
            try {
              sendMediaURL(data, `não`, `Para obter um resultado como esse use _*${prefix}${command} texto1 | texto2*_`)
            } catch (err) {
              console.log(err)
            }
          });
        }
        const sendPhotooxy2 = (link, texto1, texto2, caption = "") => {
          thiccysapi.photooxy(link, [texto1], [texto2]).then(async (data) => {
            try {
              console.log(data)
            } catch (err) {
              console.log(err)
            }
          });
        }
        const sendPhotooxy = (link, texto, caption = "") => {
          thiccysapi.photooxy(link, [texto]).then(async (data) => {
            try {
              console.log(data)
              sendMediaURL(data, `não`, caption)
            } catch (err) {
              console.log(err)
            }
          });
        }
        //SLOT
        const qslot = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/cassino.jpg'),
              surface: 200,
              message: `SLOT MACHINE 🍀`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const frutas = ["🍋", "🍇", "🍒", "🍑", "🌶️"]
        const pfruta = frutas[Math.floor(Math.random() * frutas.length)]
        const sfruta = frutas[Math.floor(Math.random() * frutas.length)]
        const tfruta = frutas[Math.floor(Math.random() * frutas.length)]
        const exibir = `     ⃢${pfruta}      ⃢${sfruta}      ⃢${tfruta}`
        exibir2 = `╭━━━━━━━❪ ❐ ❫━━━━━━━╮\n\n\n╰━\n           ${exibir}\n╭━\n\n\n\n╰━━━━━━━❪ ◆ ❫━━━━━━━╯`
        const ppremiosd1 = [5000, 8000, 15000, 25000, 40000, 60000]
        const ppremiosd2 = [29000, 48000, 69000, 75000, 90000, 120000]
        const premiodinheiro1 = ppremiosd1[Math.floor(Math.random() * ppremiosd1.length)]
        const premiodinheiro2 = ppremiosd2[Math.floor(Math.random() * ppremiosd2.length)]
        const premiodinheirocl = `${premiodinheiro1}x`
        const premiodinheirocl2 = `${premiodinheiro2}x`
        const ppremiosxp1 = [50000, 80000, 150000, 250000, 400000, 600000]
        const ppremiosxp2 = [290000, 480000, 690000, 750000, 900000, 1200000]
        const premiolevel1 = ppremiosxp1[Math.floor(Math.random() * ppremiosd1.length)]
        const premiolevel2 = ppremiosxp2[Math.floor(Math.random() * ppremiosd2.length)]
        const premiolevelcl = `${premiolevel1}x`
        const premiolevelcl2 = `${premiolevel2}x`
        const ppremiof1 = [premiodinheiro1, premiolevel1]
        const premiofinal1 = ppremiof1[Math.floor(Math.random() * ppremiof1.length)]
        const ppremiof2 = [premiodinheiro2, premiolevel2]
        const premiofinal2 = ppremiof2[Math.floor(Math.random() * ppremiof2.length)]
        const ppremiof1cl = [premiodinheirocl, premiolevelcl]
        const premiofinal1cl = ppremiof1cl[Math.floor(Math.random() * ppremiof1.length)]
        const ppremiof2cl = [premiodinheirocl2, premiolevelcl2]
        const premiofinal2cl = ppremiof2cl[Math.floor(Math.random() * ppremiof2.length)]
        const derrotaslot = () => {
          sendButtonMsg(from, `${exibir2}`, `*Você perdeu❗*${readMore}\n\n*Sim é muito dificil ganhar, tente sua sorte novamente*`, [{
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `⌘`
            },
            type: 1
          }], {
            quoted: qslot,
            sendEphemeral: true
          })
        }
        const vitoriaslot = (resultado) => {
          var plemio = ``
          var plemio2 = ``
          var textplem = ``
          if (resultado.match(`vitoria`)) {
            plemio = premiofinal1
            plemio2 = premiofinal1cl
          } else if (resultado.match(`vitoria2`)) {
            plemio = premiofinal2
            plemio2 = premiofinal2cl
          }
          if (plemio2.endsWith(`d`)) {
            textplem = `acabei de depositar ${plemio} pontos a sua conta`
            addKoinUser(sender, plemio)
          } else if (plemio2.endsWith(`x`)) {
            textplem = `acabei de acrescentar ${plemio} de xp ao seu perfil`
            addLevelingXp(sender, plemio)
          }
          sendButtonMsg(from, exibir2, `*Você ganhou 🥳*${readMore}\n\n*${textplem}*`, [{
            buttonId: `${prefix}slot`,
            buttonText: {
              displayText: `⌘`
            },
            type: 1
          }], {
            quoted: qslot,
            sendEphemeral: true
          })
          console.log(`ganhou` + plemio + plemio2)
        }
        const gameslot = () => {
          var voun = ``
          if ((exibir === `     ⃢🍇      ⃢🍇      ⃢🍇`) || (exibir === `     ⃢🍑      ⃢🍑      ⃢🍑`)) voun = `vitoria`
          if ((exibir === `     ⃢🍒      ⃢🍒      ⃢🍒`) || (exibir === `     ⃢🍋      ⃢🍋      ⃢🍋`) || (exibir === `     ⃢🌶️      ⃢🌶️      ⃢🌶️`)) voun = `vitoria2`
          if (voun != `vitoria` && voun != `vitoria2`) return derrotaslot()
          if (voun === `vitoria`) return vitoriaslot(voun)
          if (voun === `vitoria2`) return vitoriaslot(voun)
        }
        const atumalacalaca = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/pegonoerro.jpg'),
              surface: 200,
              message: `PEGAMOS O ADM NO ERRO ⚠️❗`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const textal = `*ANTI LINK ✋🏻*\n\n${m}De acordo com as configurações atuais deste grupo, alguns links não são permitidos, isso acontecerá todas as vezes que um membro comum enviar esse tipo de link${m}\n`
        const textalh = `*ANTI LINK HARD ✋🏻*\n\n${m}De acordo com as configurações atuais deste grupo, links não são permitidos, isso acontecerá todas as vezes que um membro comum enviar links${m}\n`
        //ANTILINK NORMAL
        if (isGroup && isAntiLink && budy.includes("://chat.whatsapp.com/")) {
          apizap = await l.groupInviteCode(from)
          if (!isGroup) return
          if (!isBotAdmins) return
          if (budy.includes(apizap)) return m.reply(`*O recurso antilink está ativado, mas como esse é o link daqui, não irei te banir*`)
          if (isGroupAdmins) return l.sendText(from, `*Por ordem dos próprios adms o recurso ANTI-LINK foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          await l.groupSettingUpdate(from, 'announcement')
          await l.groupParticipantsUpdate(from, [m.sender], 'remove')
          setTimeout(() => {
            l.sendButLocation(from, textal, `ANTILINK`, fs.readFileSync(`./lib/media/image/balancita.png`), [{
              buttonId: `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
              buttonText: {
                displayText: `⚖️`
              },
              type: 1
            }])
          }, 1500)
          setTimeout(() => {
            l.groupSettingUpdate(from, 'not_announcement')
          }, 8000)
        }
        //END ANTILINK NORMAL
        //ANTILINK HARD
        if (!isCmd && isGroup && isAntiLinkHard && isUrl(budy)) {
          apizap = await LorranX.groupInviteCode(from)
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (budy.includes(apizap)) return reply(`*O recurso antilink hard esta ativado, mas como esse é o link daqui não irei te banir*`)
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          LorranX.groupRemove(from, [sender])
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".com")) {
          apizap = await LorranX.groupInviteCode(from)
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (budy.includes(apizap)) return reply(`*O recurso antilink hard esta ativado, mas como esse é o link daqui não irei te banir*`)
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".be")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".app")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".me")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".org")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".nz")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".net")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        if (!isCmd && isGroup && isAntiLinkHard && budy.includes(".ru")) {
          if (!isGroup) return
          if (!isAntiLinkHard) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-LINK HARD foi ativado, portanto, esse link não é permitido aqui no grupo, mas como vc é adm, não estou autorizado a te banir*`, atumalacalaca)
          banidoralh = fs.readFileSync("./lib/image/balancita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          setTimeout(() => {
            welcomebutton3(from, textalh, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidoralh
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} links não são permitidos, converse com um dos administradores`, text)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
        }
        //END ANTILINK HARD
        //ANTIHIDETAG
        if (isGroup && mek.message[type]?.contextInfo?.mentionedJid?.length == groupMembers.length) {
          textht = `*ANTI HIDETAG ✋🏻*\n\n${m}De acordo com as configurações atuais deste grupo, mensagens que marquem todos os membros não são permitidas, isso acontecerá todas as vezes que um membro comum enviar esse tipo de mensagem${m}\n`
          banidorht = fs.readFileSync("./lib/image/antihidee.jpg")
          if (!isGroup) return
          if (!isBotGroupAdmins) return
          if (!isHideTag) return LorranX.sendMessage(from, fs.readFileSync("./lib/image/antihide.webp"), sticker, {
            quoted: mek
          })
          if (isGroupAdmins) return replyq(`*Por ordem dos próprios adms o recurso ANTI-HIDETAG foi ativado, portanto, esse tipo de mensagem não é permitido aqui no grupo, mas como vc é adm, não estou autorizado te banir*`, atumalacalaca)
          if (isHideTag) {
            setTimeout(() => {
              welcomebutton3(from, textht, `*${time3}* | ${groupName}`, {
                jpegThumbnail: banidorht
              }, [{
                buttonId: `ASAASASASAS`,
                buttonText: {
                  displayText: `@`
                },
                type: 1
              }])
            }, 1500)
            LorranX.groupRemove(from, [sender])
          }
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} mensagens que marquem todos os usuarios não são permitidas, converse com um dos administradores`, text)
        }
        //END ANTIHIDETAG
        //ANTI TXT   
        texttx = `*ANTI TXT ✋🏻*\n\n${m}De acordo com as configurações atuais deste grupo, mensagens com mais de 8500 caracteres não são permitidas, isso acontecerá todas as vezes que um membro comum enviar esse tipo de mensagem${m}\n`
        if (isGroup && isAntiTxt && budy.length > 8500) {
          if (!isGroup) return
          if (!isAntiTxt) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return replyq('*Por ordem dos próprios adms o recurso ANTI-TXT foi ativado, a mensagem acima pode ser uma trava txt mas como vc é adm não estou autorizado te banir*', atumalacalaca)
          banidor = fs.readFileSync("./lib/image/balancita.jpg")
          eita = fs.readFileSync("./lib/image/eita.jpg")
          LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
          LorranX.groupRemove(from, [sender])
          setTimeout(() => {
            welcomebutton3(from, texttx, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidor
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "⚖️"
              },
              type: 1
            }])
          }, 1500)
          setTimeout(() => {
            LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
          }, 8000)
          setTimeout(() => {
            WelcomeButton(from, `Espero que todos estejam bem, mas caso queira limpar o chat clique no botão abaixo`, `Somente admins podem usar esse botão`, eita, [{
              buttonId: `${prefix}duilope`,
              buttonText: {
                displayText: "☰ DESTRAVAR CHAT"
              },
              type: 1
            }])
          }, 9000)
        }
        texttx = `*ANTI BOT 🤖*\n\n${m}De acordo com as configurações atuais deste grupo, bots não são permitidos, isso acontecerá todas as vezes que um bot não autorizado enviar mensagem${m}\n`
        if (isGroup && isAntiBot && isbot) {
          if (mek.key.fromMe) return
          if (!isBotGroupAdmins) return
          if (isGroupAdmins) return
          banidor = fs.readFileSync("./lib/image/antibot.jpg")
          LorranX.groupRemove(from, [sender])
          setTimeout(() => {
            welcomebutton3(from, texttx, `*${time3}* | ${groupName}`, {
              jpegThumbnail: banidor
            }, [{
              buttonId: `ASAASASASAS`,
              buttonText: {
                displayText: "🤖"
              },
              type: 1
            }])
          }, 1500)
          LorranX.sendMessage(sender, `Olá ${pushname}, de acordo com as configurações atuais do grupo ${groupName} bots não são permitidos, converse com um dos administradores`, text)
        }
        //VERIFICADOS
        const menul = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "0@g.us"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync(`./lib/image/menul.png`),
              surface: 200,
              message: `⊳ ${HORARIOS} ${pushname}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          },
          contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
          },
          sendEphemeral: true
        }
        const appsp = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 12092002,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/appsp.png'),
              surface: 200,
              message: `⊳ ${time3} 🦧`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const aprovado = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 30000,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/verificador.jpg'),
              surface: 200,
              message: `⊳ ${time3}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const pack18 = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync(`./lib/image/+18.jpeg`),
              surface: 200,
              message: `⊳ PACK 🔞`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const nmorreu = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/prefix.jpg'),
              surface: 200,
              message: `VOCÊ NÃO MORREU 🤝🏻`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const morterrr = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/morterr.jpg'),
              surface: 200,
              message: `VOCÊ PERDEU 🐕`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const produtoverify = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: registrarusuarios.length + 1,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/verificado.png'),
              surface: 200,
              message: `⊳ ${time3}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const preminior = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: prem.length + 1,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/coroita.jpg'),
              surface: 200,
              message: `⊳ ${time3}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const pack182 = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync(`./lib/image/+18.jpeg`),
              surface: 200,
              message: `⊳ PACK 🔞 ADQUIRIDO POR ${pushname}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const levelup = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync(`./lib/image/levelbut.jpg`),
              surface: 200,
              message: `⊳「 𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳 」`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const congrats = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/levelupimg.jpg'),
              surface: 200,
              message: `⊳ PARABÉNS ${pushname}`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const ftex = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `Resultado 100% confiável, obtido através de algoritimo que calcula com precisão todas as probabilidades`,
              "title": `oi`
            }
          }
        }
        const verificadostts = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
              remoteJid: "status@broadcast"
            } : {})
          },
          message: {
            "imageMessage": {
              "caption": `${HORARIOS} ${pushname}`
            }
          }
        }
        const magago = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
              remoteJid: "status@broadcast"
            } : {})
          },
          message: {
            "imageMessage": {
              "caption": `🦧`
            }
          }
        }
        const winner = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
              remoteJid: "status@broadcast"
            } : {})
          },
          message: {
            "imageMessage": {
              "caption": `𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳`
            }
          }
        }
        const inativosq = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/pegonoerro.jpg'),
              surface: 200,
              message: `PEGAMOS O ADM NO ERRO ⚠️❗`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const vbanido = {
          key: {
            participant: '0@s.whatsapp.net'
          },
          message: {
            locationMessage: {
              name: `${m}Usuário banido detectado${m}`,
              jpegThumbnail: fs.readFileSync('./lib/image/banido.png')
            }
          }
        }
        const zepi = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `᱅ ${HORARIOS} ${pushname}\n᱅ Comando : ${prefix}${command}`,
              "title": `oi`
            }
          }
        }
        const calculos = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `Calculando resultados da partida 🦧 `,
              "title": `oi`
            }
          }
        }
        const calculos2 = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `Procurando pela sua namoradinha 🦧`,
              "title": `oi`
            }
          }
        }
        const calculos22 = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `Anti traba sapi 🦧 `,
              "title": `oi`
            }
          }
        }
        const magagoppt = {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`
          },
          message: {
            "extendedTextMessage": {
              "text": `Calculando resultados do ppt 🦧`,
              "title": `oi`
            }
          }
        }
        //EXTERNALADS
        const banidorv2 = {
          contextInfo: {
            "externalAdReply": {
              "title": `Por algum motivo você esta proibido de usar meus comandos`,
              "body": 'Converse com meu dono',
              "mediaType": 2,
              "previewType": 2,
              "thumbnail": await getBuffer(`https://i.ytimg.com/vi/DFyDaoBGlAA/hq720.jpg`),
              "mediaUrl": `https://youtu.be/DFyDaoBGlAA`
            }
          }
        }
        const sendFileFromUrl = async (link, type, sendone, options) => {
          hasil = await getBuffer(link)
          if (sendone != `não`) await reply(`*Download concluido, processo de upload iniciado*`)
          LorranX.sendMessage(from, hasil, type, options).catch(e => {
            fetch(link).then((hasil) => {
              if (sendone != `não`) reply(`*Download concluido, processo de upload iniciado*`)
              LorranX.sendMessage(from, hasil, type, options).catch(e => {
                LorranX.sendMessage(from, {
                  url: link
                }, type, options).catch(e => {
                  reply
                  console.log(e)
                })
              })
            })
          })
        }
        const sendMediaURL = async (url, sendone, text = "", mids = [], options) => {
          if (mids.length > 0) {
            text = normalizeMention(to, text, mids)
          }
          const fn = Date.now() / 10000;
          const filename = fn.toString()
          let mime = ""
          const download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              if (res === undefined) return reply(`*Erro ao tentar realizar download do seu pedido*`)
              mime = res.headers['content-type']
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
          };
          download(url, filename, async function () {
            await console.log('done');
            if (sendone === `sim`) sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.Dldone(), mek, sender)
            let media = fs.readFileSync(filename)
            let type = mime.split("/")[0] + "Message"
            if (mime === "image/gif") {
              type = MessageType.video
              mime = Mimetype.gif
            }
            if (mime.split("/")[0] === "audio") {
              mime = Mimetype.mp4Audio
            }
            LorranX.sendMessage(from, media, type, {
              quoted: mek,
              mimetype: mime,
              caption: text,
              contextInfo: {
                "mentionedJid": mids,
                options
              }
            }).catch(e => {
              console.log(e)
              reply(`*Erro ao tentar realizar upload do seu pedido*`)
            })
            fs.unlinkSync(filename)
          });
        };
        const sendAudioPlay = async (url, sendone, titulo, thumb, link, bd, text = "", mids = []) => {
          if (mids.length > 0) {
            text = normalizeMention(to, text, mids)
          }
          const fn = Date.now() / 10000;
          const filename = fn.toString()
          let mime = ""
          const download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              if (res === undefined) return reply(`*Erro ao tentar realizar download do seu pedido*`)
              mime = res.headers['content-type']
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
          };
          download(url, filename, async function () {
            await console.log('done');
            if (sendone === `sim`) sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.Dldone(), mek, sender)
            let media = fs.readFileSync(filename)
            let type = mime.split("/")[0] + "Message"
            if (mime === "image/gif") {
              type = MessageType.video
              mime = Mimetype.gif
            }
            if (mime.split("/")[0] === "audio") {
              mime = Mimetype.mp4Audio
            }
            goupv = pushname
            if (isGroup) goupv = groupName
            LorranX.sendMessage(from, media, type, {
              quoted: mek,
              mimetype: mime,
              contextInfo: {
                "externalAdReply": {
                  "title": titulo,
                  "body": bd ? bd : `LorranX | ${goupv}`,
                  "mediaType": 2,
                  "previewType": 2,
                  "thumbnail": thumb,
                  "mediaUrl": link
                },
                "mentionedJid": mids
              }
            }).catch(e => {
              console.log(e)
              reply(`*Erro ao tentar realizar upload do seu pedido*`)
            })
            fs.unlinkSync(filename)
          });
        };
        const sendMediaURL2 = async (url, text = "", mids = [],) => {
          if (mids.length > 0) {
            text = normalizeMention(to, text, mids)
          }
          const fn = Date.now() / 10000;
          const filename = fn.toString()
          let mime = ""
          const download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              mime = res.headers['content-type']
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
          };
          download(url, filename, async function () {
            console.log('done');
            let media = fs.readFileSync(filename)
            let type = mime.split("/")[0] + "Message"
            if (mime === "image/gif") {
              type = MessageType.video
              mime = Mimetype.gif
            }
            if (mime.split("/")[0] === "audio") {
              mime = Mimetype.mp4Audio
            }
            LorranX.sendMessage(from, media, type, {
              quoted: mek,
              mimetype: 'video/gif',
              caption: text,
              contextInfo: {
                "mentionedJid": mids
              }
            })
            fs.unlinkSync(filename)
          });
        };
        const sendButURL = async (url, qualbotao, footer, comando, dpb, text = "", mids = [],) => {
          if (mids.length > 0) {
            text = normalizeMention(to, text, mids)
          }
          const fn = Date.now() / 10000;
          const filename = fn.toString()
          let mime = ""
          const download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              if (res === undefined) return reply(`*Erro ao tentar realizar download do seu pedido*`)
              mime = res.headers['content-type']
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
          };
          download(url, filename, async function () {
            console.log('done');
            let media = fs.readFileSync(filename)
            qualbotao(from, text, footer, media, [{
              buttonId: `${prefix}${comando}`,
              buttonText: {
                displayText: dpb
              },
              type: 1
            }], {
              contextInfo: {
                "mentionedJid": mids
              }
            }).catch(e => {
              console.log(e)
              reply(`*Erro ao tentar realizar upload do seu pedido*`)
            })
            fs.unlinkSync(filename)
          });
        };
        const sendWebp = async (from, url) => {
          var names = Date.now() / 10000;
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
          };
          download(url, './temp' + names + '.png', async function () {
            let ajg = './temp' + names + '.png'
            let palak = './temp' + names + '.webp'
            exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
              let media = fs.readFileSync(palak)
              LorranX.sendMessage(from, media, MessageType.sticker, {
                quoted: mek
              })
              fs.unlinkSync(ajg)
              fs.unlinkSync(palak)
            });
          });
        }
        //BOTÃO NORMAL
        const sendButtonMsg = (from, text, footer, but = [], options = {}) => {
          const buttonMessage = {
            contentText: text,
            footerText: footer,
            buttons: but,
            headerType: 1
          };
          LorranX.sendMessage(from, buttonMessage, buttonsMessage, options)
        }
        ///BOTÃO DE IMAGEM
        const sendButImage = async (from, text1, desc1, gam1, but = [], options = {}) => {
          kma = gam1
          mhan = await LorranX.prepareMessage(from, kma, image)
          const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4
          };
          LorranX.sendMessage(from, buttonMessages, buttonsMessage, options)
        }
        ///BOTÃO DE VIDEO
        const sendButVideo = async (from, text1, desc1, vid1, but = [], options = {}) => {
          kma = vid1
          mhan = await LorranX.prepareMessage(from, kma, video,)
          const buttonMessages = {
            videoMessage: mhan.message.videoMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 5
          }
          LorranX.sendMessage(from, buttonMessages, buttonsMessage, options)
        }
        ///BOTÃO DE LOC
        const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
          kma = gam1
          mhan = await LorranX.prepareMessage(from, kma, location)
          const buttonMessages = {
            locationMessage: mhan.message.locationMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 6
          }
          LorranX.sendMessage(from, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendFooter = async (from, texto, footer, quoted, mentio) => {
          sendButtonMsg(from, texto, footer, null, {
            quoted: quoted,
            contextInfo: {
              forwardingScore: 508,
              isForwarded: true,
              "mentionedJid": [mentio]
            }
          })
        }
        const SendButDocument = async (id, text1, desc1, file1, doc1, but = [], options = {}) => {
          media = file1
          kma = doc1
          mhan = await LorranX.prepareMessage(from, media, document, kma)
          const buttonMessages = {
            documentMessage: mhan.message.documentMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: "DOCUMENT"
          }
          LorranX.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        //BOTÕES PARA RAZÕES ESPECIFICAS
        const sendHideIMGBut = async (from, text1, desc1, gam1, but = [], options = {}) => {
          tumalazi = []
          kma = gam1
          mdata = await LorranX.groupMetadata(from)
          membros = mdata['participants']
          membros.map(async hidebut => {
            tumalazi.push(hidebut.id.replace('c.us', 's.whatsapp.net'))
          })
          mhan = await LorranX.prepareMessage(from, kma, MessageType.image)
          const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4
          };
          LorranX.sendMessage(from, buttonMessages, MessageType.buttonsMessage, {
            contextInfo: {
              "mentionedJid": tumalazi
            }
          }, options)
        }
        //BOTÃO PARA TRANSMISSÃO
        const sendTMbut = async (from, qualbotao, quantidade, texto, footer, media, comando, displaybut, comando2, displaybut2, comando3, displaybut3) => {
          var quantosbotões = await quantidade
          if (quantosbotões === 1) return qualbotao(from, texto, footer, media, [{
            buttonId: `${prefix}${comando}`,
            buttonText: {
              displayText: displaybut
            },
            type: 1
          }])
          else if (quantosbotões === 2) return qualbotao(from, texto, footer, media, [{
            buttonId: `${prefix}${comando}`,
            buttonText: {
              displayText: displaybut
            },
            type: 1
          }, {
            buttonId: `${prefix}${comando2}`,
            buttonText: {
              displayText: displaybut2
            },
            type: 1
          }])
          else if (quantosbotões === 3) return qualbotao(from, texto, footer, media, [{
            buttonId: `${prefix}${comando}`,
            buttonText: {
              displayText: displaybut
            },
            type: 1
          }, {
            buttonId: `${prefix}${comando2}`,
            buttonText: {
              displayText: displaybut2
            },
            type: 1
          }, {
            buttonId: `${prefix}${comando3}`,
            buttonText: {
              displayText: displaybut3
            },
            type: 1
          }])
        }
        //BOTÃO PARA HIDETM
        const sendHideTMbut = async (qualbotao, texto, footer, media, comando, displaybut) => {
          tumalazi = []
          let totatotohide = LorranX.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
          for (let JidGp of totatotohide) {
            mdata = await LorranX.groupMetadata(JidGp)
            membros = mdata['participants']
            let catizap = membros.map(membros => membros.id)
            for (let hidebutt of catizap) {
              try {
                desgraça9876 = hidebutt.replace('c.us', 's.whatsapp.net')
              } catch (error) { }
              tumalazi.push(desgraça9876)
            }
            qualbotao(JidGp, texto, footer, media, [{
              buttonId: `${prefix}${comando}`,
              buttonText: {
                displayText: displaybut
              },
              type: 1
            }], {
              contextInfo: {
                "mentionedJid": tumalazi
              }
            })
          }
        }
        const sendHideTM = async (texto, footer, media) => {
          tumalazi = []
          let totatotohide = LorranX.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
          for (let JidGp of totatotohide) {
            mdata = await LorranX.groupMetadata(JidGp)
            membros = mdata['participants']
            let catizap = membros.map(membros => membros.id)
            for (let hidetm of catizap) {
              try {
                desgraça9876 = hidetm.replace('c.us', 's.whatsapp.net')
              } catch (error) { }
              tumalazi.push(desgraça9876)
            }
            if (footer != `` && media === `texto`) return sendButtonMsg(JidGp, texto, footer, null, {
              contextInfo: {
                forwardingScore: 508,
                isForwarded: true,
                "mentionedJid": tumalazi
              }
            })
            else if (footer === `` && media === `texto`) return LorranX.sendMessage(JidGp, texto, text, {
              contextInfo: {
                "mentionedJid": tumalazi
              }
            })
            else if (media === `sticker`) {
              if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                var options = {
                  contextInfo: {
                    mentionedJid: tumalazi
                  },
                  quoted: mek
                }
                ini_buffer = fs.readFileSync(filePath)
                LorranX.sendMessage(JidGp, ini_buffer, sticker, options)
                fs.unlinkSync(filePath)
              }
            } else if (media === `imagem`) {
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                var options = {
                  contextInfo: {
                    mentionedJid: tumalazi
                  },
                  quoted: mek
                }
                ini_buffer = fs.readFileSync(filePath)
                LorranX.sendMessage(JidGp, ini_buffer, image, options)
                fs.unlinkSync(filePath)
              }
            }
          }
        }
        //BOTÃO PARA NÃO REGISTRADOS
        const sendREGbut = () => {
          textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
          paro = fs.readFileSync("./lib/image/paro.jpg")
          sendButImage(from, textr, `Caso o botão não apareça, use o comando ${prefix}verify`, paro, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: `QUERO ME REGISTRAR ✅`
            },
            type: 1
          }], {
            quoted: mek
          })
        }
        //BOTÃO PARA NÃO PREMIUNS
        const sendPREMbut = () => {
          textp = `*Eita zap, pra usar alguns comandos é necessário que você seja um usuario premium, para se tornar premium basta entrar em contato com meu dono no link acima*`
          paro = fs.readFileSync("./lib/image/paro.jpg")
          sendButImage(from, textp, ``, paro, [{
            buttonId: `sapi`,
            buttonText: {
              displayText: `Ok entendi`
            },
            type: 1
          }], {
            contextInfo: {
              externalAdReply: {
                title: "SEJA PREMIUM",
                body: "",
                previewType: "PHOTO",
                thumbnail: fs.readFileSync('./lib/image/verificador.jpg'),
                sourceUrl: "https://wa.me/553195703379?text=Quero%20ser%20premium"
              }
            }
          })
        }
        //BOTÃO PARA NÃO REGISTRADOS TINDER
        const sendRTbut = () => {
          tindertxt = `*TINDER 💘*\n\n${m}Olá mamaco, para usar o "tinder" é necessario se registrar, pra isso escolha uma das opções abaixo\n\nPara mais informações sobre essa função use ${prefix}infotinder${m}\n`
          sendButLocation(from, tindertxt, `*Você gosta de?*`, {
            jpegThumbnail: fs.readFileSync('./lib/image/tinder.jpg')
          }, [{
            buttonId: `${prefix}addtinderm ${q}`,
            buttonText: {
              displayText: `☰ MENINAS`
            },
            type: 1
          }, {
            buttonId: `${prefix}addtinderf`,
            buttonText: {
              displayText: '☰ MENINOS'
            },
            type: 1
          }, {
            buttonId: `${prefix}addtinderbi`,
            buttonText: {
              displayText: '☰ AMBOS'
            },
            type: 1
          }])
        }
        //reembolso
        const sendRBbut = (textor, footer, cmd1, display1, cmd2, display2, cmd3, display3) => {
          bracin = fs.readFileSync('./lib/image/bracin.jpg')
          sendButLocation("553195703379@s.whatsapp.net", textor, footer, {
            jpegThumbnail: bracin
          }, [{
            buttonId: prefix + cmd1,
            buttonText: {
              displayText: display1
            },
            type: 1
          }, {
            buttonId: prefix + cmd2,
            buttonText: {
              displayText: display2
            },
            type: 1
          }, {
            buttonId: prefix + cmd3,
            buttonText: {
              displayText: display3
            },
            type: 1
          }])
        }
        //LISTBUT APPS PREMIUM
        const sendAPbut = (temp, tempo, from, titulo1, desc1, vendido) => {
          maxz = ``
          temporizadore = Date.now() + toMs(tempo)
          if (temp === `sim`) maxz = `#` + temporizadore
          var menulist = LorranX.prepareMessageFromContent(from, {
            "listMessage": {
              "title": titulo1,
              "description": desc1,
              "buttonText": "*OPÇÕES*",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `${HORARIOS} ${pushname}, selecione um dos apps abaixo`,
                "rows": [{
                  "title": `Adobe-Lightroom ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Alight-Motion ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Brainly ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `CapCut ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Deezer ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `DU-Recorder ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Fouad-WhatApp ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `InShot ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Insta-Pro ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `KineMaster ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Minecraft ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `MX-Player ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Photoshop-Express ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `PicsArt ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Spotify ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `uTorrent-Pro ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `VivaVideo ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `VSCO ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `YouTube-Vanced ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `WhatsApp-SamMods ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }, {
                  "title": `Yo-Whatsapp ${maxz}`,
                  "rowId": sender,
                  "description": ``
                }]
              }, {
                "title": `reporte um erro ou problema com os apps usando o botão abaixo`,
                "rows": [{
                  "title": `❗ REPORTAR ERRO ❗`,
                  "rowId": sender + `${vendido}`,
                  "description": ``
                }]
              }],
              "footerText": "*𝚌𝚕𝚒𝚚𝚞𝚎 𝚗𝚘 𝚋𝚘𝚝𝚊̃𝚘 𝚊𝚋𝚊𝚒𝚡𝚘*",
            }
          }, {
            quoted: appsp
          }, {})
          LorranX.relayWAMessage(menulist, {
            waitForAck: false
          })
        }
        //EXEMPLO PRA TEXT PRO
        //AFK ROUBADO DE INDIO
        const quotedafk = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/afk.jpg'),
              surface: 200,
              message: `MEMBRO AFK ❗`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        const quotedafk2 = {
          "key": {
            "fromMe": false,
            "participant": "0@s.whatsapp.net"
          },
          "message": {
            orderMessage: {
              itemCount: 999999,
              status: 200,
              thumbnail: fs.readFileSync('./lib/image/afk.jpg'),
              surface: 200,
              message: `VOLTOU DO AFK ❗`,
              orderTitle: '©Bot',
              sellerJid: '0@s.whatsapp.net'
            }
          }
        }
        if (isGroup) {
          if (!mek.key.fromMe && mek.key.fromMe) return
          for (let x of mentionUser) {
            if (afk.checkAfkUser(x, _afk)) {
              getId = afk.getAfkId(x, _afk)
              getReason = afk.getAfkReason(getId, _afk)
              getTime = afk.getAfkTime(getId, _afk)
              fafk = `*𝙿𝚎𝚕𝚘 𝚚𝚞𝚎 𝚖𝚎 𝚏𝚘𝚒 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚍𝚘 𝚎𝚕𝚎 𝚎𝚜𝚝𝚊́ ${getReason} 𝚍𝚎𝚜𝚍𝚎 𝚊𝚜 ${getTime}*`
              if (mek.message.extendedTextMessage.contextInfo.participant === m.sender) return
              if (getReason === `zulipe`) fafk = `*𝙴𝚕𝚎 𝚗𝚊̃𝚘 𝚖𝚎 𝚒𝚗𝚏𝚘𝚛𝚖𝚘𝚞 𝚘 𝚖𝚘𝚝𝚒𝚟𝚘, 𝚜𝚘 𝚍𝚒𝚜𝚜𝚎 𝚚𝚞𝚎 𝚎𝚜𝚝𝚊𝚛𝚒𝚊 𝚘𝚌𝚞𝚙𝚊𝚍𝚘*`
              sendButtonMsg(from, `*𝙾 @${getId.split("@")[0]} 𝚎𝚜𝚝𝚊́ 𝚘𝚌𝚞𝚙𝚊𝚍𝚘 𝚎 𝚙𝚎𝚍𝚒𝚞 𝚙𝚛𝚊 𝚗𝚊̃𝚘 𝚜𝚎𝚛 𝚒𝚗𝚌𝚘𝚖𝚘𝚍𝚊𝚍𝚘*`, fafk, null, {
                quoted: quotedafk,
                contextInfo: {
                  forwardingScore: 508,
                  isForwarded: true,
                  "mentionedJid": [getId, m.sender]
                }
              })
            }
          }
          if (afk.checkAfkUser(m.sender, _afk) && !isCmd) {
            getId = afk.getAfkId(m.sender, _afk)
            getReason = afk.getAfkReason(getId, _afk)
            pep = `*𝙾𝚕𝚊́ @${m.sender.split("@")[0]}, 𝚜𝚎𝚓𝚊 𝚋𝚎𝚖 𝚟𝚒𝚗𝚍𝚘 𝚍𝚎 𝚟𝚘𝚕𝚝𝚊*`
            rafk = `*𝙿𝚎𝚕𝚘 𝚟𝚒𝚜𝚝𝚘 𝚟𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚎𝚜𝚝𝚊́ 𝚖𝚊𝚒𝚜 ${getReason}*`
            if (getReason === `zulipe`) rafk = `*𝙿𝚎𝚕𝚘 𝚟𝚒𝚜𝚝𝚘 𝚟𝚘𝚌𝚎̂ 𝚗𝚊̃𝚘 𝚎𝚜𝚝𝚊́ 𝚖𝚊𝚒𝚜 𝚘𝚌𝚞𝚙𝚊𝚍𝚘*`
            sendButtonMsg(from, pep, rafk, null, {
              quoted: quotedafk2,
              contextInfo: {
                forwardingScore: 508,
                isForwarded: true,
                "mentionedJid": [sender]
              }
            })
            _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
            fs.writeFileSync('./database/users/afk.json', JSON.stringify(_afk))
          }
        }
        const isQuoted = type == "extendedTextMessage"
        const isMedia = type === "imageMessage" || type === "videoMessage";
        const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage");
        const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage");
        const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage");
        const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage");
        if (!isCmd && isGroup) console.log(color("[ GRUPO ]", "white"), color("MENSAGEM RECEBIDA", "purple"), time3, "ENVIADA POR", color(pushname, "cyan"), "NO GRUPO", color(groupName, "yellow"))
        if (!isCmd && !isGroup) console.log(color("[ PV ]", "white"), color("MENSAGEM RECEBIDA AS", "purple"), time3, "ENVIADA POR", color(pushname, "cyan"))
        if (isCmd && !isGroup) console.log(color("[ PV ]", "white"), color("COMANDO RECEBIDO AS", "lime"), time3, color(command, "lime"), "ENVIADO POR", color(sender.split("@")[0], "cyan"))
        if (isCmd && isGroup && !isMuted) console.log(color("[ GRUPO ]", "white"), color("COMANDO RECEBIDO AS", "lime"), time3, color(command, "lime"), "ENVIADO POR", color(sender.split("@")[0], "cyan"), "NO GRUPO", color(groupName, "yellow"))
        if (isCmd && isMuted) console.log(color("[ GRUPO ]", "white"), color("COMANDO MUTADO RECEBIDO AS", "red"), time3, color(command, "lime"), "ENVIADO POR", color(sender.split("@")[0], "cyan"), "NO GRUPO", color(groupName, "yellow"))
        if (listbut) console.log(color("[ LISTBUT ]", "white"), color("LISTBUT RECEBIDO AS", "lime"), time3, color(listbut, "lime"), "ENVIADO POR", color(sender.split("@")[0], "cyan"))
        //ANTI-SPAM
        if (isCmd && isFiltered(from) && !isGroup) {
          console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
          const ff = {
            text: `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
            contextInfo: {
              mentionedJid: [sender]
            }
          }
          return reply(ff)
        }
        if (isCmd && isFiltered(from) && isGroup) {
          console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
          const ff1 = {
            text: `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
            contextInfo: {
              mentionedJid: [sender]
            }
          }
          return reply(ff1)
        }
        if (isGroup && !isPermitido) {
          const quantidadedecornos = groupMembers.length
          penal = await getFrom(from)
          if (quantidadedecornos <= memlimit) {
            tumatuma = `${m}De acordo com as minhas configurações atuais, o número mínimo de membros é ${memlimit}, somente meu dono pode permitir que eu permaneça${m}`
            if (!isPedido && isCmd && !isOwner) return sendButLocation(from, tumatuma, `*Envie um pedido de permanência clicando no botão abaixo*`, {
              jpegThumbnail: fs.readFileSync('./lib/image/grupin.jpg')
            }, [{
              buttonId: `${prefix}tumatuma ${penal}`,
              buttonText: {
                displayText: "ENVIAR PEDIDO"
              },
              type: 1
            }])
            if (!isPedido && !isCmd && !isOwner) return
          }
        }
        /***** PREMIUM *****/
        const isPremium = prem.includes(sender)
        //QUANTIDADE DE XP DE ACORDO COM O LEVEL
        const levelXP = getLevelingLevel(sender)
        var xplevel = Math.floor(Math.random() * 150) + 600
        if (levelXP <= 3) {
          xplevel = Math.floor(Math.random() * 150) + 680
        } else if (levelXP <= 5) {
          xplevel = Math.floor(Math.random() * 150) + 720
        } else if (levelXP <= 6) {
          xplevel = Math.floor(Math.random() * 150) + 760
        } else if (levelXP <= 7) {
          xplevel = Math.floor(Math.random() * 150) + 980
        } else if (levelXP <= 9) {
          xplevel = Math.floor(Math.random() * 150) + 1100
        } else if (levelXP <= 10) {
          xplevel = Math.floor(Math.random() * 150) + 1300
        } else if (levelXP <= 11) {
          xplevel = Math.floor(Math.random() * 150) + 1400
        } else if (levelXP <= 12) {
          xplevel = Math.floor(Math.random() * 150) + 1600
        } else if (levelXP <= 13) {
          xplevel = Math.floor(Math.random() * 150) + 1800
        } else if (levelXP <= 14) {
          xplevel = Math.floor(Math.random() * 150) + 2000
        } else if (levelXP <= 16) {
          xplevel = Math.floor(Math.random() * 150) + 2600
        } else if (levelXP <= 17) {
          xplevel = Math.floor(Math.random() * 150) + 2800
        } else if (levelXP <= 19) {
          xplevel = Math.floor(Math.random() * 150) + 3200
        } else if (levelXP <= 20) {
          xplevel = Math.floor(Math.random() * 150) + 3900
        } else if (levelXP <= 21) {
          xplevel = Math.floor(Math.random() * 150) + 4600
        } else if (levelXP <= 22) {
          xplevel = Math.floor(Math.random() * 150) + 5300
        } else if (levelXP <= 24) {
          xplevel = Math.floor(Math.random() * 150) + 6000
        } else if (levelXP <= 25) {
          xplevel = Math.floor(Math.random() * 150) + 6700
        } else if (levelXP <= 26) {
          xplevel = Math.floor(Math.random() * 150) + 7400
        } else if (levelXP <= 27) {
          xplevel = Math.floor(Math.random() * 150) + 8100
        } else if (levelXP <= 30) {
          xplevel = Math.floor(Math.random() * 150) + 9100
        } else if (levelXP <= 33) {
          xplevel = Math.floor(Math.random() * 150) + 12000
        } else if (levelXP <= 37) {
          xplevel = Math.floor(Math.random() * 150) + 16000
        } else if (levelXP <= 41) {
          xplevel = Math.floor(Math.random() * 150) + 20000
        } else if (levelXP <= 46) {
          xplevel = Math.floor(Math.random() * 150) + 27500
        } else if (levelXP <= 59) {
          xplevel = Math.floor(Math.random() * 150) + 35000
        } else if (levelXP <= 67) {
          xplevel = Math.floor(Math.random() * 150) + 43000
        } else if (levelXP <= 76) {
          xplevel = Math.floor(Math.random() * 150) + 52000
        } else if (levelXP <= 86) {
          xplevel = Math.floor(Math.random() * 150) + 62000
        } else if (levelXP <= 97) {
          xplevel = Math.floor(Math.random() * 150) + 72000
        } else if (levelXP <= 109) {
          xplevel = Math.floor(Math.random() * 150) + 84000
        } else if (levelXP <= 122) {
          xplevel = Math.floor(Math.random() * 150) + 96000
        } else if (levelXP <= 132) {
          xplevel = Math.floor(Math.random() * 150) + 120000
        } else if (levelXP <= 137) {
          xplevel = Math.floor(Math.random() * 150) + 140000
        } else if (levelXP <= 142) {
          xplevel = Math.floor(Math.random() * 150) + 160000
        } else if (levelXP <= 147) {
          xplevel = Math.floor(Math.random() * 150) + 190000
        } else if (levelXP <= 148) {
          xplevel = Math.floor(Math.random() * 150) + 360000
        } else if (levelXP <= 149) {
          xplevel = Math.floor(Math.random() * 150) + 900000
        } else if (levelXP <= 150) {
          xplevel = Math.floor(Math.random() * 150) + 99999999999
        }
        //RANKING
        const levelRole = getLevelingLevel(sender)
        var role = `${m}Macaquinho em treinamento 🐒${m}`
        if (levelRole <= 3) {
          role = `${m}Recruta I${m}`
        } else if (levelRole <= 5) {
          role = `${m}Recruta II${m}`
        } else if (levelRole <= 7) {
          role = `${m}Recruta III${m}`
        } else if (levelRole <= 9) {
          role = `${m}Soldado Raso I${m}`
        } else if (levelRole <= 10) {
          role = `${m}Soldado Raso II${m}`
        } else if (levelRole <= 11) {
          role = `${m}Soldado Raso III${m}`
        } else if (levelRole <= 12) {
          role = `${m}Cabo I${m}`
        } else if (levelRole <= 13) {
          role = `${m}Cabo II${m}`
        } else if (levelRole <= 14) {
          role = `${m}Cabo II${m}`
        } else if (levelRole <= 16) {
          role = `${m}Cabo III${m}`
        } else if (levelRole <= 17) {
          role = `${m}Sargento I${m}`
        } else if (levelRole <= 19) {
          role = `${m}Sargento II${m}`
        } else if (levelRole <= 20) {
          role = `${m}Sargento III${m}`
        } else if (levelRole <= 21) {
          role = `${m}Subtenente I${m}`
        } else if (levelRole <= 22) {
          role = `${m}Subtenente II${m}`
        } else if (levelRole <= 24) {
          role = `${m}Subtenente III${m}`
        } else if (levelRole <= 25) {
          role = `${m}Veterano I${m}`
        } else if (levelRole <= 26) {
          role = `${m}Veterano II${m}`
        } else if (levelRole <= 27) {
          role = `${m}Veterano III${m}`
        } else if (levelRole <= 30) {
          role = `${m}Especialista I${m}`
        } else if (levelRole <= 33) {
          role = `${m}Especialista II${m}`
        } else if (levelRole <= 37) {
          role = `${m}Especialista III${m}`
        } else if (levelRole <= 41) {
          role = `${m}Elite I${m}`
        } else if (levelRole <= 46) {
          role = `${m}Elite II${m}`
        } else if (levelRole <= 59) {
          role = `${m}Elite III${m}`
        } else if (levelRole <= 67) {
          role = `${m}Pro I${m}`
        } else if (levelRole <= 76) {
          role = `${m}Pro II${m}`
        } else if (levelRole <= 86) {
          role = `${m}Pro III${m}`
        } else if (levelRole <= 97) {
          role = `${m}GENERAL${m}`
        } else if (levelRole <= 109) {
          role = `${m}Mestre I${m}`
        } else if (levelRole <= 122) {
          role = `${m}Mestre II${m}`
        } else if (levelRole <= 132) {
          role = `${m}Mestre III${m}`
        } else if (levelRole <= 137) {
          role = `${m}Mestre IV${m}`
        } else if (levelRole <= 142) {
          role = `${m}Mestre V${m}`
        } else if (levelRole <= 147) {
          role = `${m}The doctor${m}`
        } else if (levelRole <= 148) {
          role = `${m}The plague${m}`
        } else if (levelRole <= 149) {
          role = `${m}死${m}`
        } else if (levelRole <= 150) {
          role = `${m}macaco${m}`
        }
        //USERTYPE
        if (isGroupAdmins) {
          var user = `*𝚝𝚒𝚙𝚘 𝚍𝚎 𝚞𝚜𝚞𝚊́𝚛𝚒𝚘 : 𝚊𝚍𝚖 ⚖️*`
        }
        if (!isGroupAdmins) {
          user = `*𝚝𝚒𝚙𝚘 𝚍𝚎 𝚞𝚜𝚞𝚊́𝚛𝚒𝚘 : 𝚖𝚎𝚖𝚋𝚛𝚘 𝚌𝚘𝚖𝚞𝚖 🎭*`
        }
        if (isPremium) {
          user = `*𝚝𝚒𝚙𝚘 𝚍𝚎 𝚞𝚜𝚞𝚊́𝚛𝚒𝚘 : 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 😳*`
        }
        if (isOwner) {
          user = `*𝚝𝚒𝚙𝚘 𝚍𝚎 𝚞𝚜𝚞𝚊́𝚛𝚒𝚘 : 𝚙𝚊𝚙𝚊𝚒 😳*`
        }
        if (!isGroup) {
          user = `*𝚞𝚜𝚞𝚊́𝚛𝚒𝚘 : ${pushname}*`
        }
        //FUNÇÃO DE LEVEL
        const currentLevel = getLevelingLevel(sender)
        const checkId = getLevelingId(sender)
        const requiredXp = 6000 * (Math.pow(2, currentLevel) - 1)
        if (isGroup && isRegister && isLevelingOn) {
          try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            if (!isCmd) addLevelingXp(sender, xplevel)
            if (isCmd) addLevelingXp(sender, xplevel * 1.5)
            if (requiredXp <= getLevelingXp(sender)) {
              luuser = getSender(sender)
              addLevelingLevel(sender, 1)
              randandan = `*@${sender.split("@")[0]} acaba de subir para o level ${getLevelingLevel(sender)}*\n${m}Xp: ${getLevelingXp(sender)}\nPatente:${m} ${role}`
              await sendButtonMsg(from, `${randandan}`, `*Pressione o botão abaixo para uma surpresa aleatória*`, [{
                buttonId: `${prefix}quitutis=/*+proasdfgyts++325 ${luuser}`,
                buttonText: {
                  displayText: `❍`
                },
                type: 1
              }], {
                quoted: levelup,
                contextInfo: {
                  mentionedJid: [sender]
                }
              })
              random = Math.floor(Math.random() * 6) + 1
              sons = fs.readFileSync(`./lib/sons/levelup/${random}.mp3`)
              await LorranX.sendMessage(from, sons, audio, {
                mimetype: 'audio/mp4',
                ptt: true
              })
            }
          } catch (err) {
            console.error(err)
          }
        }
        //FUNÇÃO DINHERIN      
        const checkATM = checkATMuser(sender)
        try {
          if (checkATM === undefined) addATM(sender)
          const uangsaku = Math.floor(Math.random() * 10) + 30
          addKoinUser(sender, uangsaku)
        } catch (err) {
          console.error(err)
        }
        //CONTADOR GRUPO
        const groupIdscount = []
        const numbersIds = []
        for (let obj of contador) {
          groupIdscount.push(obj.groupId)
        }
        if (isGroup && groupIdscount.indexOf(from) >= 0) {
          var ind = groupIdscount.indexOf(from)
          for (let obj of contador[ind].numbers) {
            numbersIds.push(obj.jid)
          }
          if (numbersIds.indexOf(sender) >= 0) {
            var indnum = numbersIds.indexOf(sender)
            contador[ind].numbers[indnum].messages += 1
            contador[ind].numbers[indnum].cmd_messages += isCmd ? 1 : 0
            fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador, null, 2) + '\n')
          } else {
            const messages = 1
            const cmd_messages = isCmd ? 1 : 0
            contador[ind].numbers.push({
              jid: sender,
              messages: messages,
              cmd_messages: cmd_messages
            })
            fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador, null, 2) + '\n')
          }
        } else if (isGroup) {
          contador.push({
            groupId: from,
            numbers: [{
              jid: sender,
              messages: 2,
              cmd_messages: isCmd ? 1 : 0
            }]
          })
          fs.writeFileSync('./database/user/contador.json', JSON.stringify(contador, null, 2) + '\n')
        }
        //CONTADOR BOT 
        const checkMSG = checkMSGuser(sender)
        try {
          if (checkMSG === undefined) addcontador(sender)
          const adicionarmensagem = 1
          mensagemuser(sender, adicionarmensagem)
        } catch (err) {
          console.error(err)
        }
        //CONTADOR COMANDOS BOT  
        if (isCmd) {
          const checkCMD = checkCMDuser(sender)
          try {
            if (checkCMD === undefined) addcontadorC(sender)
            const adicionarcomando = 1
            comandouser(sender, adicionarcomando)
          } catch (err) {
            console.error(err)
          }
        }
        if (isGroup && isBlackOn) {
          const checkBL = checkBlackListG(from)
          try {
            if (checkBL === undefined) {
              await addblacklist(from)
              console.log(`[BLACKLIST] CRIANDO INFORMAÇÕES SOBRE O GRUPO ${groupName} NO ARQUIVO blacklist.json`)
              await reply(`Pronto, agora ja é possivel adicionar novos numeros a black list deste grupo`)
            } else { }
          } catch (err) {
            console.error(err)
          }
        }
        if(sexo)
        {

   }
        //SILENCIAR BOT EM GRUPOS
        if (isMuted) {
          if (!isGroupAdmins && !isOwner) return
        }
        // SHIT 
        shitlinks = ["https://telegra.ph/file/2ba63332a892f407f0bae.mp4", "https://telegra.ph/file/71a11a9c535a9b9d0e388.mp4", "https://telegra.ph/file/79f73c7fb9cd40d643844.mp4", "https://telegra.ph/file/15dc82dd39d5c319ead32.mp4", "https://telegra.ph/file/c7c13dc87eedd3ab1aeeb.mp4", "https://telegra.ph/file/4653516ff26ee59488253.mp4", "https://telegra.ph/file/56ad22b31fa74eef35e99.mp4", "https://telegra.ph/file/bd0db8766d18282e252d5.mp4", "https://telegra.ph/file/448cf2c9bc8b71c735c9e.mp4", "https://telegra.ph/file/40e331c54da8ed886a321.mp4", "https://telegra.ph/file/e8450effd6e35d84a2023.mp4", "https://telegra.ph/file/e0fa5e900389ad8401276.mp4", "https://telegra.ph/file/e3e233f194595dce1f0e4.mp4", "https://telegra.ph/file/bf595b552304af005bb31.mp4", "https://telegra.ph/file/b2d398621cd67ef04c4fc.mp4", "https://telegra.ph/file/de55e87e13707c905a4de.mp4", "https://telegra.ph/file/444eb9fbb5119543260cc.mp4", "https://telegra.ph/file/511d6f4fa205a502278b3.mp4", "https://telegra.ph/file/5b3018219856ff2471d25.mp4", "https://telegra.ph/file/c8afad6be322dc2269a04.mp4", "https://telegra.ph/file/890795d59d886cc52a742.mp4", "https://telegra.ph/file/23df220e472d7b5459198.mp4", "https://telegra.ph/file/4a2136e4d40cea37231f1.mp4", "https://telegra.ph/file/ff564f1637970cecb7764.mp4", "https://telegra.ph/file/3a058d6ed261779106b6d.mp4", "https://telegra.ph/file/bd20167d17ff1886dfc02.mp4", "https://telegra.ph/file/8670e2539c1f286df8b82.mp4", "https://telegra.ph/file/1ab6ae4bf346523f4b4d0.mp4", "https://telegra.ph/file/ca40b97a6cd8076176e16.mp4", "https://telegra.ph/file/5f8c0344a552194de33e8.mp4", "https://telegra.ph/file/bf961d9bfb51476d23646.mp4", "https://telegra.ph/file/8260ec208acdd7a0e913b.mp4", "https://telegra.ph/file/bcb3e34caaf5848fa8789.mp4", "https://telegra.ph/file/4dbcaf383a359aa3b0482.mp4", "https://telegra.ph/file/bb1f537c4d333aa8146a2.mp4", "https://telegra.ph/file/bdc86b9f653ea9e7864fd.mp4", "https://telegra.ph/file/a3fefa6d6542aac8a5632.mp4", "https://telegra.ph/file/4f7568fd78036a891ccd5.mp4", "https://telegra.ph/file/e1c8c84fb862c4fd88d40.mp4", "https://telegra.ph/file/1e22ee2b3f1c1eded7224.mp4", "https://telegra.ph/file/dec4323bf024e8a4d5e06.mp4", "https://telegra.ph/file/108bbb6e262444bd2aaa2.mp4", "https://telegra.ph/file/cb76731b0982ef5d5a605.mp4", "https://telegra.ph/file/248d9b6a64610b0b40b97.mp4", "https://telegra.ph/file/f3e77a50547af912d3b7a.mp4", "https://telegra.ph/file/d84bb484e3abd769788a1.mp4", "https://telegra.ph/file/07e9f4c207ea2976b3404.mp4", "https://telegra.ph/file/ad03aa44a136366a74f2d.mp4", "https://telegra.ph/file/c477a79e4d7f02a8d5b63.mp4", "https://telegra.ph/file/4e53d36eed149e7fa355f.mp4", "https://telegra.ph/file/601503cb04c5fb8a347bf.mp4", "https://telegra.ph/file/5760c0a2ca11a516e1a1b.mp4", "https://telegra.ph/file/e1ed72e14086497e10551.mp4", "https://telegra.ph/file/ceaefe052103d8b941af1.mp4", "https://telegra.ph/file/73c557de2ecb1de444287.mp4", "https://telegra.ph/file/5d1c4971767856dedf4bc.mp4", "https://telegra.ph/file/296621a90ddd6503a4e83.mp4", "https://telegra.ph/file/1ceaa0ed51b15384484f1.mp4", "https://telegra.ph/file/682a1315eca36fd24e9f0.mp4", "https://telegra.ph/file/e942642db984da49bb48b.mp4", "https://telegra.ph/file/c58878268203f6549a867.mp4", "https://telegra.ph/file/962b8b72d08f135022a36.mp4", "https://youtu.be/bB1mrrOps_8", "https://youtu.be/DFyDaoBGlAA", "https://youtu.be/JKb3h8SQ-hk", "https://youtu.be/dO7i4CLGINk", "https://youtu.be/kvDnNCjxuoo", "https://youtu.be/lkFxreB6JLk", "https://youtu.be/o3kHu9iGFMQ", "https://youtu.be/nDq3mjYl_rM", "https://youtu.be/hzFbx7qnWpc", "https://youtu.be/YzpkSDy-Fso", "https://youtu.be/wVs3nvjlaUk", "https://youtu.be/wgTyDW0ydJU", "https://youtu.be/oW74TIH0pcg", "https://youtu.be/DYk0TWUQmK8", "https://youtu.be/qhM6dRVyEWE", "https://youtu.be/HiZJIsiJY20", "https://youtu.be/B7gygyRPvos", "https://youtu.be/ed9tSs0g0FU", "https://youtu.be/7rqb13z0GEk", "https://youtu.be/RE4xG_-2QLA", "https://youtu.be/NKQqRLj18qc", "https://youtu.be/2bj7FjalKv8", "https://youtu.be/sTf_cAotnLg", "https://youtu.be/-JzBhS5C4tU", "https://youtu.be/PUw6-hbjAi4", "https://youtu.be/GntHkNDnigo", "https://youtu.be/yeOufJY148I", "https://youtu.be/b3hnW0J2Mzw", "https://youtu.be/6TAak573_Ls", "https://youtu.be/phRd7D2BrPQ", "https://youtu.be/GsjKGdhnbQw", "https://youtu.be/GavcLpcN8Vs", "https://youtu.be/59P2Z2vzA-k", "https://youtu.be/pg8ntqfaW20", "https://youtu.be/d1jpcvn2YCM", "https://youtu.be/Rb6-_DhIaJA", "https://youtu.be/UXdp0VfInwc"]
        randomlinks = shitlinks[Math.floor(Math.random() * shitlinks.length)]
        //RANDOM MOJI
        mojis = ['😃', '👽', '🧙🏻‍♂️', '🤓', '😎', '🤠']
        randommoji = mojis[Math.floor(Math.random() * mojis.length)]
        // VARIAVEL DO FOOTER   
        if (isGroup) {
          var FooterM = `${m}LorranX${m} | *${groupName}*`
        } else if (!isGroup) {
          var FooterM = `${m}LorranX${m} | *${pushname}*`
        }
        //TEXTO MENUS
        const MenuC = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝙏𝙊𝙊𝙇𝙎⛤* \n║│_ [ *${prefix}ping* ]\n║│_ [ *${prefix}tourl* ] \n║│_ [ *${prefix}toimg* ] \n║│_ [ *${prefix}togif* ] \n║│_ [ *${prefix}tomp3* ]\n║│\n║│_ [ *${prefix}slowmo* ]\n║│_ [ *${prefix}acelerar* ]\n║│_ [ *${prefix}distorcer* ]\n║│_ [ *${prefix}esquilo* ]\n║│_ [ *${prefix}engrossar* ]\n║│_ [ *${prefix}bass* ] \n║│_ [ *${prefix}estourar* ]\n║│_ [ *${prefix}reverse* ]\n║│_ [ *${prefix}robot* ]\n║│_ [ *${prefix}vibrar* ]\n║│_ [ *${prefix}detikvn* ]\n║│_ [ *${prefix}slowv* ]\n║│_ [ *${prefix}acelerarv* ]\n║│_ [ *${prefix}reversev* ]\n║│_ [ *${prefix}detikvid* ]\n║│\n║│_ [ *${prefix}contar* ]\n║│_ [ *${prefix}getnick* ]\n║│_ [ *${prefix}getrecado* ]\n║│_ [ *${prefix}getpp* ]\n║│_ [ *${prefix}listadmin* ]\n║│_ [ *${prefix}sider* ]\n║│\n║│_ [ *${prefix}twitter* ]\n║│_ [ *${prefix}ig* ]\n║│_ [ *${prefix}ytmp4* ]\n║│_ [ *${prefix}ytmp3* ]\n║│_ [ *${prefix}play* ]\n║│_ [ *${prefix}pinterest* ]\n║│_ [ *${prefix}tiktok* ]\n║│_ [ *${prefix}igstory* ]\n║│_ [ *${prefix}mediafire* ]\n║│_ [ *${prefix}letra* ]\n║│_ [ *${prefix}gimage* ]\n║│_ [ *${prefix}google* ]\n║│_ [ *${prefix}calunia* ]\n║│_ [ *${prefix}wiki* ]\n║│\n║╰──────────\n╰───────────`;
        const MenuP = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝙋𝙍𝙀𝙈𝙄𝙐𝙈⛤* \n║│_ [ *${prefix}pvideofhd* ] \n║│_ [ *${prefix}ytfhd* ]\n║│_ [ *${prefix}criargp* ]\n║╰──────────\n╰───────────`;
        const MenuO = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝙊𝙒𝙉𝙀𝙍⛤* \n║│_ [ *${prefix}block* ]\n║│_ [ *${prefix}unblock* ]\n║│_ [ *${prefix}ban* ]\n║│_ [ *${prefix}unban* ]\n║│_ [ *${prefix}addprem* ]\n║│_ [ *${prefix}dellprem* ]\n║│_ [ *${prefix}stopjadibot* ]\n║│_ [ *${prefix}listjadibot* ]\n║│_ [ *${prefix}creatgroup* ]\n║│_ [ *${prefix}join* ]\n║│_ [ *${prefix}setpp* ]\n║│_ [ *${prefix}setname* ]\n║│_ [ *${prefix}setbio* ]\n║│_ [ *${prefix}delchat* ]\n║│_ [ *${prefix}selfmode* ]\n║│_ [ *${prefix}desligar* ]\n║│_ [ *${prefix}kickall* ]\n║│_ [ *${prefix}leaveall* ]\n║│_ [ *${prefix}clearall* ]\n║│_ [ *${prefix}clearg* ]\n║│_ [ *${prefix}readall* ]\n║│_ [ *${prefix}autoread* ]\n║│_ [ *${prefix}eval* ]\n║╰──────────\n╰───────────`;
        const MenuA = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝘼𝘿𝙈𝙄𝙉⛤* \n║│_ [ *${prefix}setdesc* ]\n║│_ [ *${prefix}setnamegp* ]\n║│_ [ *${prefix}setig* ]\n║│_ [ *${prefix}promoteall* ]\n║│_ [ *${prefix}promote* ]\n║│_ [ *${prefix}demote* ]\n║│_ [ *${prefix}demoteall* ]\n║│_ [ *${prefix}filtro* ]\n║│_ [ *${prefix}check* ]\n║│_ [ *${prefix}baninativos* ]\n║│_ [ *${prefix}revokelink* ]\n║│_ [ *${prefix}grp* ]\n║│_ [ *${prefix}leveling* ] \n║│_ [ *${prefix}hidetag* ]\n║│_ [ *${prefix}hidetagadm* ]\n║│_ [ *${prefix}tagimg* ] \n║│_ [ *${prefix}tagsticker* ]\n║│_ [ *${prefix}kick* ]\n║│_ [ *${prefix}add* ]\n║│_ [ *${prefix}linkgp* ]\n║│_ [ *${prefix}mute* ]\n║│_ [ *${prefix}antifake* ]\n║│_ [ *${prefix}antilinkhard* ]\n║│_ [ *${prefix}antilink* ]\n║│_ [ *${prefix}antitxt* ]\n║│_ [ *${prefix}antihidetag* ]\n║│_ [ *${prefix}antivo* ]\n║│_ [ *${prefix}antibot* ]\n║│_ [ *${prefix}x9* ]\n║│_ [ *${prefix}welcome* ]\n║│_ [ *${prefix}blacklist* ]\n║│_ [ *${prefix}addbl* ]\n║╰──────────\n╰───────────`;
        const Menu = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝙁𝙐𝙉⛤*\n║│_ [ *${prefix}probabilidade* ]\n║│_ [ *${prefix}%gay* ]\n║│_ [ *${prefix}adivinhar* ]\n║│_ [ *${prefix}jv* ]\n║│_ [ *${prefix}jm* ]\n║│_ [ *${prefix}roleta* ]\n║│_ [ *${prefix}ppt* ]\n║│_ [ *${prefix}slot* ]\n║│_ [ *${prefix}namoradinha* ]\n║│_ [ *${prefix}meme* ]\n║│_ [ *${prefix}afk* ]\n║│\n║│_ [ *${prefix}carteira* ]\n║│_ [ *${prefix}level* ]\n║│_ [ *${prefix}perfil* ]\n║│_ [ *${prefix}infogp* ]\n║│_ [ *${prefix}pix* ]\n║│_ [ *${prefix}ted* ]\n║│_ [ *${prefix}buypack* ]\n║│_ [ *${prefix}buyprem* ]\n║│_ [ *${prefix}buyapp* ]\n║│_ [ *${prefix}serbot* ]\n║│\n║│_ [ *${prefix}sticker* ]\n║│_ [ *${prefix}st* ] \n║│_ [ *${prefix}attp* ]\n║│_ [ *${prefix}emoji* ]\n║│_ [ *${prefix}semoji* ]\n║│_ [ *${prefix}dado* ]\n║│\n║│_ [ *${prefix}rankgay* ]\n║│_ [ *${prefix}rankfeio* ]\n║│_ [ *${prefix}rankgostosa* ]\n║│_ [ *${prefix}ranklindo* ]\n║│_ [ *${prefix}rankcorno* ]\n║│_ [ *${prefix}ranklevel* ]\n║│_ [ *${prefix}rankmsg* ]\n║│_ [ *${prefix}rankpontos* ]\n║│_ [ *${prefix}rankcomandos* ]\n║│_ [ *${prefix}rankerros* ]\n║╰──────────\n╰───────────`;
        const MenuM = `╭───────────\n║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤\n╠───────────\n║↭ ${m}Sobre o Bot${m}\n║ *Bateria* : ${battery.persen}\n║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}\n║ *Carregando?* : ${battery.charger == true ? "Sim" : "Não"}\n║ *Versão do zap* : *${LorranX.user.phone.wa_version}*\n║ *LIB* : ${LorranX.browserDescription[1]} ${LorranX.browserDescription[2]}\n║╭ *⛤𝙈𝘼𝙆𝙀𝙍⛤*\n║│_ [ *${prefix}3dtext* ]\n║│_ [ *${prefix}acid* ]\n║│_ [ *${prefix}bearl* ]\n║│_ [ *${prefix}marvell* ]\n║│_ [ *${prefix}ninjal* ]\n║│_ [ *${prefix}wolfl* ]\n║│_ [ *${prefix}wolfl2* ]\n║│_ [ *${prefix}demon* ]\n║│_ [ *${prefix}glitch* ]\n║│_ [ *${prefix}glitch2* ]\n║│_ [ *${prefix}glitch3* ]\n║│_ [ *${prefix}gold* ]\n║│_ [ *${prefix}graffiti* ]\n║│_ [ *${prefix}harrypotter* ]\n║│_ [ *${prefix}hologram* ]\n║│_ [ *${prefix}ice* ]\n║│_ [ *${prefix}love* ]\n║│_ [ *${prefix}magma* ]\n║│_ [ *${prefix}mar* ]\n║│_ [ *${prefix}marvel* ]\n║│_ [ *${prefix}matrix* ]\n║│_ [ *${prefix}natural* ]\n║│_ [ *${prefix}neon* ]\n║│_ [ *${prefix}neon2* ]\n║│_ [ *${prefix}pornhub* ]\n║│_ [ *${prefix}rainbow* ]\n║│_ [ *${prefix}sand* ]\n║│_ [ *${prefix}space* ]\n║│_ [ *${prefix}space2* ]\n║│_ [ *${prefix}stone* ] \n║│_ [ *${prefix}thunder* ]\n║│_ [ *${prefix}thunder2* ]\n║│_ [ *${prefix}videogame* ]\n║╰──────────\n╰───────────`;
        //COMANDOS DE LISTA
        if (listbut == 'Maker Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/makermenu.jpg")
          if (!isRegister) return sendButLocation(from, MenuM, FooterM + `  ${readMore}` + `\n\nCaso não saiba como usar algum dos comandos ou queira um exemplo da imagem use _*${prefix}comando exemplo*_`, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*pm`,
            buttonText: {
              displayText: "PREMIUM MENU 👑"
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, MenuM, FooterM + `  ${readMore}` + `\n\nCaso não saiba como usar algum dos comandos ou queira um exemplo da imagem use _*${prefix}"comando" exemplo*_`, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*pm`,
            buttonText: {
              displayText: "PREMIUM MENU 👑"
            },
            type: 1
          }])
        }
        if (listbut == 'Tools Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/toolsmenu.jpg")
          if (!isRegister) return sendButLocation(from, MenuC, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*mm`,
            buttonText: {
              displayText: "MAKER MENU 🎨"
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, MenuC, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*mm`,
            buttonText: {
              displayText: "MAKER MENU 🎨"
            },
            type: 1
          }])
        }
        if (listbut == 'Premium Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/premiummenu.jpg")
          if (!isRegister) return sendButLocation(from, MenuP, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*fm`,
            buttonText: {
              displayText: "      FUN MENU 🕹️      "
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, MenuP, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*fm`,
            buttonText: {
              displayText: "      FUN MENU 🕹️      "
            },
            type: 1
          }])
        }
        if (listbut == 'Owner Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/ownermenu.jpg")
          if (!isRegister) return sendButLocation(from, MenuO, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*tm`,
            buttonText: {
              displayText: " TOOLS MENU 🛠️ "
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, MenuO, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*tm`,
            buttonText: {
              displayText: " TOOLS MENU 🛠️ "
            },
            type: 1
          }])
        }
        if (listbut == 'Fun Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/funmenu.jpg")
          if (!isRegister) return sendButLocation(from, Menu, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*am`,
            buttonText: {
              displayText: "ADMIN MENU ⚖️"
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, Menu, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*am`,
            buttonText: {
              displayText: "ADMIN MENU ⚖️"
            },
            type: 1
          }])
        } else if (listbut == "ChangeLog") {
          changelogi = fs.readFileSync("./lib/image/changelog.jpg")
          changelogt = `*ᨁ 𝑪𝑯𝑨𝑵𝑮𝑬𝑳𝑶𝑮*\n• *_Última atualização:_* ${m}21/01/2022 as 23:55${m}\n• *_Últimas alterações:_* ${m}Corrigidos vários problemas; melhorados diversos aspectos; criado e implementado sistema de moderadores; melhorado ${prefix}contar; adicionados novos memes; melhoradas algumas coisas relacionadas ao leveling; melhorado contador de mensagens e comandos; adicionado banidor de inativos; adicionado ${prefix}buyapp; melhorados alguns comados aleatorios (não lembro quais)${m}\n• *_Possíveis próximas Atualizações:_* ${m}Correções; adicionar novas possibilidade de welcome e melhorar os já existentes; mudar completamente a identidade visual do bot; escolher um nome para o bot; adicionar novos recursos relacionados a leveling e dinheiro; adicionar mais comandos ao sistema de loja;melhorar o namoradinha;criar sistema de agiotagem${m}\n• *_STT: Tobi, CARLOS_*\n• *_Versão atual:_* ${m}1.2.3${m}\n• *_% de conclusão:_* ${m}60%${m}`
          sendButImage(from, changelogt, `*Caso tenha algum(a) critica, elogio, sugestão ou duvida, clique no botão abaixo*`, changelogi, [{
            buttonId: `${prefix}-*alo`,
            buttonText: {
              displayText: "C,E,S,D"
            },
            type: 1
          }])
        }
        if (listbut == 'Admin Menu' || command == `${prefix}start`) {
          menuimg = fs.readFileSync("./lib/image/adminmenu.jpg")
          if (!isRegister) return sendButLocation(from, MenuA, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: "REGISTRAR 🔖"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*om`,
            buttonText: {
              displayText: "OWNER MENU 🎩"
            },
            type: 1
          }])
          if (isRegister) return sendButLocation(from, MenuA, FooterM, {
            jpegThumbnail: menuimg
          }, [{
            buttonId: `${prefix}perfil`,
            buttonText: {
              displayText: "PERFIL 👻"
            },
            type: 1
          }, {
            buttonId: `${prefix}-*om`,
            buttonText: {
              displayText: "OWNER MENU 🎩"
            },
            type: 1
          }])
        }
        if (listbut.startsWith('Adobe-Lightroom')) {
          adl = fs.readFileSync(`./lib/apps/Adobe Lightroom.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Adobe Lightroom.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Alight-Motion')) {
          adl = fs.readFileSync(`./lib/apps/AlightMotion.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'AlightMotion.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('CapCut')) {
          adl = fs.readFileSync(`./lib/apps/CapCut.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'CapCut.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Deezer')) {
          adl = fs.readFileSync(`./lib/apps/Deezer.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Deezer.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('DU-Recorder')) {
          adl = fs.readFileSync(`./lib/apps/DURecorder.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'DU Recorder.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('InShot')) {
          adl = fs.readFileSync(`./lib/apps/InShot.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'InShot.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Insta-Pro')) {
          adl = fs.readFileSync(`./lib/apps/Insta Pro.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Insta Pro.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('KineMaster')) {
          adl = fs.readFileSync(`./lib/apps/KineMaster.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'KineMaster.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Minecraft')) {
          adl = fs.readFileSync(`./lib/apps/Minecraft.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Minecraft.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('MX-Player')) {
          adl = fs.readFileSync(`./lib/apps/MX Player.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(!isPremium && `*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'MX-Player.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Photoshop-Express')) {
          adl = fs.readFileSync(`./lib/apps/Photoshop Express.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Photoshop Express.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('PicsArt')) {
          adl = fs.readFileSync(`./lib/apps/PicsArt.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'PicsArt.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('uTorrent-Pro')) {
          adl = fs.readFileSync(`./lib/apps/uTorrentPro.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'uTorrent Pro.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('YouTube-Vanced')) {
          adl = fs.readFileSync(`./lib/apps/YouTube Vanced.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'YouTube Vanced.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Yo-Whatsapp')) {
          adl = fs.readFileSync(`./lib/apps/Yo Whatsapp.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Yo Whatsapp.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Brainly')) {
          adl = fs.readFileSync(`./lib/apps/Brainly.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Brainly.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('VivaVideo')) {
          adl = fs.readFileSync(`./lib/apps/VivaVideo.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'VivaVideo.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('VSCO')) {
          adl = fs.readFileSync(`./lib/apps/VSCO.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'VSCO.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Spotify')) {
          adl = fs.readFileSync(`./lib/apps/Spotify.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Spotify.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('WhatsApp-SamMods')) {
          adl = fs.readFileSync(`./lib/apps/WhatsApp SamMods.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'WhatsApp SamMods.apk',
            quoted: mek
          })
        }
        if (listbut.startsWith('Fouad-WhatApp')) {
          adl = fs.readFileSync(`./lib/apps/Fouad WhatApp.apk`)
          atizapss = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (isGroup && atizapssid != sender) return replym(`*Adquira sua propria lista, essa ja pertence ao @${atizapssid.split("@")[0]}*`, atizapssid)
          if (!isPremium && !atizapss.includes(`#`)) return
          libdgel = atizapss.split("#")[1]
          if (!isPremium && Date.now() > libdgel) return reply(`*Esse app ja expirou, compre outra lista usando ${prefix}buyapp ou tente ganhar uma subindo de level*`)
          reply(`*Iniciando upload*`)
          LorranX.sendMessage(from, adl, document, {
            mimetype: `apk`,
            filename: 'Fouad WhatApp.apk',
            quoted: mek
          })
        }
        if (listbut.match('❗ REPORTAR ERRO ❗')) {
          vendido = `💰`
          atizapssid = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
          if (atizapssid.includes(`não`)) vendido = `🎁`
          if (atizapssid.includes(`prem`)) vendido = `👑`
          sendRBbut(`${m}Um usuário acaba de solicitar revisão de lista de apps adquirida${m}\n\n\nNome do usuário: ${pushname}\n\nNúmero do usuário: ${sender.split("@")[0]}`, vendido, `tusasdasdsdasd`, `sdasdadasdsda`, `asdadasdadas`, `asdadasdsad`, `asdasdasda`, `asdsdasdasd`)
          reply(`Bom, ainda não fiz isso aqui 😃`)
        }
        //SEM PREFIX
        switch (is) {
          case 'bot':
            if (isBanned) return sendbanido()
            buf = fs.readFileSync(`./database/mp3/oi.mp3`)
            LorranX.sendMessage(from, buf, audio, {
              mimetype: 'audio/mp4',
              quoted: mek,
              ptt: true
            })
            addFilter(from)
            break;
          case 'topobre':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            addKoinUser('553195703379@s.whatsapp.net', 9999999999)
            break;
        }
        //CASE
        switch (command) {
          case 'menu':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            if (!isGroup) LorranX.updatePresence(from, Presence.composing)
            var menulist = LorranX.prepareMessageFromContent(from, {
              "listMessage": {
                "title": "```Clique no botão abaixo```",
                "description": "😃",
                "buttonText": "*_Opções_*",
                "listType": "SINGLE_SELECT",
                "sections": [{
                  "title": `${HORARIOS} ${pushname}, abaixo você encontrará os meus menus`,
                  "rows": [{
                    "title": "Fun Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "Admin Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "Owner Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "Tools Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "Maker Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "Premium Menu",
                    "rowId": "0",
                    "description": ""
                  }, {
                    "title": "ChangeLog",
                    "rowId": "1",
                    "description": ""
                  }]
                }],
              }
            }, {
              quoted: menul
            }, {})
            LorranX.relayWAMessage(menulist, {
              waitForAck: false
            })
            addFilter(from)
            break;
          case 'verify':
          case 'registrar':
          case 'register':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            if (isRegister) return reply('```Seus dados já estão registrados na minha database```')
            const namaUser = `${pushname}`
            const serialUser = createSerial(10)
            addRegisteredUser(sender, namaUser, time, serialUser)
            sendFooter(from, RESPOSTAS.nusert(), RESPOSTAS.nuserf(sender, registrarusuarios), mek, sender)
            break;
          case "rgtinder":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            if (isTinderF && isTinderM) return reply('```Seus dados já estão registrados na minha database```')
            sendRTbut()
            break
          case 'tumatuma':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            if (isPermitido) return reply("vtnc")
            desgramada = getSender(sender)
            reply(`${m}Ola ${pushname}, seu pedido foi enviado ao meu dono, ele entrará em contato com você em breve${m}`)
            tumatxt = `${m}Um usuário acaba de fazer um pedido de permanência em um grupo pequeno\n\n• Nome do solicitante: ${pushname}\n\n• Número do solicitante: wa.me/${sender.split("@")[0]}\n\n• Nome do grupo: ${groupName}\n\n• Quantidade de participantes: ${groupMembers.length}${m}`
            sendButLocation("553195703379@s.whatsapp.net", tumatxt, `escolha uma das opções abaixo`, {
              jpegThumbnail: fs.readFileSync('./lib/image/grupin.jpg')
            }, [{
              buttonId: `${prefix}permitirr ${q}`,
              buttonText: {
                displayText: `PERMITIR`
              },
              type: 1
            }, {
              buttonId: `fazer depois`,
              buttonText: {
                displayText: 'COBRAR'
              },
              type: 1
            }, {
              buttonId: `${prefix}smallmancaco ${desgramada}`,
              buttonText: {
                displayText: 'IGNORAR'
              },
              type: 1
            }])
            setTimeout(() => {
              LorranX.groupLeave(from)
            }, 1500)
            break
          case 'owner':
          case 'dono':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            const vacrd = `BEGIN:VCARD\n` + `VERSION:3.0\n` + `FN:Dono do Bot\n` + `ORG:Desenvolvedor do BOT DO LORRAN\n` + 'TEL;type=CELL;type=VOICE;waid=553195703379' + ':+553195703379\n' + 'END:VCARD'
            LorranX.sendMessage(from, {
              display: "Dono do Bot",
              vcard: vacrd
            }, contact, {
              quoted: mek
            })
            setTimeout(() => {
              LorranX.sendMessage(from, `Caso você seja trava zap basta clicar no link acima`, text, {
                contextInfo: {
                  externalAdReply: {
                    title: `OWNER`,
                    body: "",
                    previewType: "PHOTO",
                    thumbnail: fs.readFileSync('./lib/image/nerdola.jpg'),
                    sourceUrl: "https://wa.me/553195703379?text=Oi"
                  }
                }
              })
            }, 1000)
            addFilter(from)
            break;
          case '+sender':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, {
              quoted: vbanido
            })
            reply(`${m}Ola ${pushname}, esse "erro" foi reportado ao meu dono, agora é so aguardar a análise dele, o contato dele está abaixo caso seja nescessário${m}`)
            varpack = `*PACK COMPRADO? ✅*`
            if (q === `atizap`) varpack = `*PACK COMPRADO? ❌*`
            bracin = fs.readFileSync('./lib/image/bracin.jpg')
            abuelos = getSender(sender).replace('@s.whatsapp.net', '')
            adisgraca = `${abuelos}@s.whatsapp.net`
            sendertxt = `${m}Um usuário solicita revisão de pack adquirido\n\n• Nome do solicitante: ${pushname}\n\n• Número do solicitante: wa.me/${abuelos}${m}`
            sendButLocation("553195703379@s.whatsapp.net", sendertxt, varpack, {
              jpegThumbnail: bracin
            }, [{
              buttonId: `${prefix}bucetaatomica ${adisgraca}`,
              buttonText: {
                displayText: `REEMBOLSAR`
              },
              type: 1
            }, {
              buttonId: `${prefix}desgraca22 ${adisgraca}`,
              buttonText: {
                displayText: 'ENVIAR OUTRO PACK'
              },
              type: 1
            }, {
              buttonId: `${prefix}bigbucetabrasil ${adisgraca}`,
              buttonText: {
                displayText: 'IGNORAR'
              },
              type: 1
            }])
            const vacrd1 = `BEGIN:VCARD\n` + `VERSION:3.0\n` + `FN:Dono do Bot\n` + `ORG:Desenvolvedor do BOT DO LORRAN\n` + 'TEL;type=CELL;type=VOICE;waid=553195703379' + ':+553195703379\n' + 'END:VCARD'
            LorranX.sendMessage(from, {
              display: "Dono do Bot",
              vcard: vacrd1
            }, contact, {
              quoted: mek
            })
            setTimeout(() => {
              LorranX.sendMessage(from, `Caso você seja trava zap basta clicar no link acima`, text, {
                contextInfo: {
                  externalAdReply: {
                    title: `OWNER`,
                    body: "",
                    previewType: "PHOTO",
                    thumbnail: fs.readFileSync('./lib/image/nerdola.jpg'),
                    sourceUrl: "https://wa.me/553195703379?text=Oi"
                  }
                }
              })
            }, 1000)
            addFilter(from)
            break;
          case 'figu':
          case 'figurinha':
          case 'sticker':
          case 'f':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              const media = await LorranX.downloadAndSaveMediaMessage(encmedia)
              ran = '666.webp'
              await ffmpeg(`./${media}`).input(media).on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              }).on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
              }).on('end', function () {
                console.log('Finish')
                LorranX.sendMessage(from, fs.readFileSync(ran), sticker)
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              }).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              const media = await LorranX.downloadAndSaveMediaMessage(encmedia)
              ran = '999.webp'
              tipe = media.endsWith('.mp4') ? 'video' : 'gif'
              reply(`*Iniciado processo de conversão de ${tipe} para figurinha*`)
              await ffmpeg(`./${media}`).inputFormat(media.split('.')[1]).on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              }).on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(`Eita, ocorreu algum problema ao tentar transformar o ${tipe} em figurinha`)
              }).on('end', function () {
                console.log('Finish')
                LorranX.sendMessage(from, fs.readFileSync(ran), sticker)
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              }).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(ran)
            } else {
              sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uif(), mek, sender)
            }
            addFilter(from)
            break
          case "infogp":
            reply(`${m}Aguarde, consultando informações do grupo${m}`)
            admi = `𝚊𝚍𝚖𝚒𝚗`
            db = `👨🏿‍💻 𝙰𝚝𝚒𝚣𝚊𝚙 👥`
            bi = 'atizap'
            desc = `\n\n\n♿ *DESCRIÇÃO/REGRAS DO GRUPO* ‼️\n\n${groupDesc}`
            lev = isLevelingOn === true ? "*_sim_*" : "*_não_*"
            wel = isWelcome === true ? "*_sim_*" : "*_não_*"
            xnovi = isX9 === true ? "*_sim_*" : "*_não_*"
            mut = isMuted === true ? "*_sim_*" : "*_não_*"
            bla = isBlackOn === true ? "*_sim_*" : "*_não_*"
            antifa = isAntiFa === true ? "*_sim_*" : "*_não_*"
            tx = isAntiTxt === true ? "*_sim_*" : "*_não_*"
            al = isAntiLink === true ? "*_sim_*" : "*_não_*"
            alh = isAntiLinkHard === true ? "*_sim_*" : "*_não_*"
            hid = isHideTag === true ? "*_sim_*" : "*_não_*"
            permi = isPermitido === true ? "*_sim_*" : "*_não_*"
            if (quantosadmins > 1) admi = `𝚊𝚍𝚖𝚒𝚗𝚜`
            if (isGroupAdmins && isBotGroupAdmins) db = `👥 𝚕𝚒𝚗𝚔 𝚍𝚘 𝚐𝚛𝚞𝚙𝚘 🌐`
            if (isGroupAdmins && isBotGroupAdmins) bi = `${prefix}linkgp`
            if (groupDesc === undefined) desc = ``
            try {
              pp_user = await LorranX.getProfilePicture(from)
            } catch (e) {
              pp_user = `https://telegra.ph/file/60e5e09b5961483915ea1.jpg`
            }
            fotogp = await getBuffer(pp_user)
            textogp = `*_𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚌̧𝚘̃𝚎𝚜 𝚜𝚘𝚋𝚛𝚎 𝚘 𝚐𝚛𝚞𝚙𝚘 ${groupName}_*\n\n*𝙰𝚝𝚞𝚊𝚕𝚖𝚎𝚗𝚝𝚎 𝚜𝚘𝚖𝚘𝚜 ${quantosmembros} 𝚖𝚎𝚖𝚋𝚛𝚘𝚜 𝚎 𝚝𝚎𝚖𝚘𝚜 ${quantosadmins} ${admi}*${desc}\n\n\n🕵🏻‍♂️ *ATIVAVEIS ATUALMENTE ATIVOS* ‼️\n\n  🧙🏻‍♂️ *𝙻𝚎𝚟𝚎𝚕𝚒𝚗𝚐 :* ${lev}\n\n 👋🏻 *𝚆𝚎𝚕𝚌𝚘𝚖𝚎 :* ${wel}\n\n  🕵🏻‍♂️ *𝚇9 :* ${xnovi}\n\n 🔇 *𝙼𝚞𝚝𝚎 :* ${mut}\n\n 📓 *𝙱𝚕𝚊𝚌𝚔𝚕𝚒𝚜𝚝 :* ${bla}\n\n 👽 *𝙰𝚗𝚝𝚒-𝚏𝚊𝚔𝚎 :* ${antifa}\n\n 📝 *𝙰𝚗𝚝𝚒-𝚝𝚡𝚝 :* ${tx}\n\n 👮🏻‍♂️ *𝙰𝚗𝚝𝚒-𝚕𝚒𝚗𝚔 :* ${al}\n\n 👨🏻‍⚖️ *𝙰𝚗𝚝𝚒-𝚕𝚒𝚗𝚔 𝚑𝚊𝚛𝚍 :* ${alh}\n\n @ *𝙰𝚗𝚝𝚒-𝚑𝚒𝚍𝚎𝚝𝚊𝚐 :* ${hid}\n\n 👶🏼 *𝙿𝚎𝚛𝚖𝚒𝚝𝚒𝚍𝚘 :* ${permi}`
            sendButImage(from, textogp, ``, fotogp, [{
              buttonId: bi,
              buttonText: {
                displayText: db
              },
              type: 1
            }], {
              quoted: mek
            })
            break
          case 'perfil':
            if (!isRegister) return sendREGbut()
            reply(`${m}Aguarde, consultando seu perfil${m}`)
            var xpito = getLevelingXp(sender)
            if (xpito === undefined) xpito = 0
            var aribita = await LorranX.getStatus(`${sender}`, text)
            if (aribita.status === undefined) aribita.status = `*sem recado*`
            if (aribita.status === 401) aribita.status = `*Recado privado*`
            var abuelo = checkATMuser(sender)
            if (abuelo === undefined) abuelo = 0
            var duelipo = checkERRuser(sender)
            if (duelipo === undefined) duelipo = 0
            var atuelipo = checkCMDuser(sender)
            if (atuelipo === undefined) atuelipo = 0
            var bulinho = checkMSGuser(sender)
            if (bulinho === undefined) bulinho = 0
            var arizapp = isGroup ? numbersIds.indexOf(sender) : ''
            if (isGroup && arizapp === undefined) arizapp = 0
            var luluzi = isGroup ? contador[ind].numbers[arizapp].messages : ''
            if (isGroup && luluzi === undefined) luluzi = 0
            var luluzic = isGroup ? contador[ind].numbers[arizapp].cmd_messages : ''
            if (isGroup && luluzic === undefined) luluzic = 0
            var qwert = getLevelingLevel(sender)
            if (qwert === undefined) qwert = 0
            var galao = checkREGtime(sender)
            if (galao === undefined) galao = 0
            var tpmg = `*• 𝚝𝚘𝚝𝚊𝚕 𝚍𝚎 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚎𝚗𝚟𝚒𝚊𝚍𝚊𝚜 : ${bulinho}*\n\n*• 𝚝𝚘𝚝𝚊𝚕 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚛𝚎𝚚𝚞𝚒𝚜𝚒𝚝𝚊𝚍𝚘𝚜 : ${atuelipo}*\n\n`
            if (isGroup) tpmg = `*• 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚎𝚗𝚟𝚒𝚊𝚍𝚊𝚜 𝚊𝚚𝚞𝚒 : ${luluzi}*\n\n*• 𝚝𝚘𝚝𝚊𝚕 𝚍𝚎 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚎𝚗𝚟𝚒𝚊𝚍𝚊𝚜 : ${bulinho}*\n\n*• 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚛𝚎𝚚𝚞𝚒𝚜𝚒𝚝𝚊𝚍𝚘𝚜 𝚊𝚚𝚞𝚒 : ${luluzic}*\n\n*• 𝚝𝚘𝚝𝚊𝚕 𝚍𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚛𝚎𝚚𝚞𝚒𝚜𝚒𝚝𝚊𝚍𝚘𝚜 : ${atuelipo}*\n\n`
            try {
              pp_user = await LorranX.getProfilePicture(sender)
            } catch (e) {
              pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
            }
            buff = await getBuffer(pp_user)
            perfil = `*ᨁ 𝑷𝑬𝑹𝑭𝑰𝑳 𝑫𝑶 _${pushname}_ ${randommoji}*\n\n*• 𝚛𝚎𝚌𝚊𝚍𝚘 :* ${aribita.status}\n\n*• 𝚗𝚞́𝚖𝚎𝚛𝚘 : wa.me/${sender.split("@")[0]}*\n\n*• 𝚍𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘 𝚍𝚘 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 :* ${mek.key.id.length > 21 ? '*𝚊𝚗𝚍𝚛𝚘𝚒𝚍 📱*' : mek.key.id.substring(0, 2) == '3A' ? '```IOS 📱```' : '*𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚠𝚎𝚋 💻*'}\n\n• ${user}\n\n*• 𝚍𝚊𝚝𝚊 𝚍𝚎 𝚛𝚎𝚐𝚒𝚜𝚝𝚛𝚘 : ${galao}*\n\n*• 𝚌𝚊𝚛𝚝𝚎𝚒𝚛𝚊 : ${abuelo} _PONTOS_*\n\n*• 𝚡𝚙 : ${xpito}*\n\n*• 𝚕𝚎𝚟𝚎𝚕 : ${qwert}*\n\n*• 𝚙𝚊𝚝𝚎𝚗𝚝𝚎 :* ${role}\n\n*• 𝚡𝚙 𝚙𝚘𝚛 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 ≅ ${xplevel}*\n\n${tpmg}*• 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚎𝚛𝚛𝚊𝚍𝚘𝚜 : ${duelipo}*\n`
            sendButImage(from, perfil, ``, buff, [{
              buttonId: `atizap`,
              buttonText: {
                displayText: `📖 𝙋𝙀𝙍𝙁𝙄𝙇 𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 🔎`
              },
              type: 1
            }], { quoted: mek })
            break
          case 'carteira':
          case 'money':
          case 'dinheiro':
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, para fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            var dinheiroc = checkATMuser(sender)
            if (dinheiroc === undefined) dinheiroc = 0
            carteira = fs.readFileSync("./lib/image/carteira.jpg")
            textocarteira = `*𝗦𝗨𝗔 𝗖𝗔𝗥𝗧𝗘𝗜𝗥𝗔 𝗗𝗘 𝗣𝗢𝗡𝗧𝗢𝗦*\n\nR$ *${dinheiroc}*`
            sendButLocation(from, textocarteira, `${m}Interaja comigo para ganhar mais pontos${m}`, { jpegThumbnail: carteira }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: `☰ PERFIL COMPLETO`
              },
              type: 1
            }], { quoted: mek })
            break
          case 'level':
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, para fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            var xpusuario = getLevelingXp(sender)
            if (xpusuario === undefined) xpusuario = 0
            var levelusuario = getLevelingLevel(sender)
            if (levelusuario === undefined) levelusuario = 0
            fl = `${m}Interaja em grupos com o leveling ativado para subir de level${m}`
            if (isLevelingOn) fl = `${m}Interaja aqui ou em outros grupos com o leveling ativado para subir de level${m}`
            quantofalta = requiredXp - xpusuario
            level = fs.readFileSync("./lib/image/levelu.jpg")
            textolevel = `*𝗦𝗘𝗨 𝗟𝗘𝗩𝗘𝗟*\n\n*_XP_*: *${xpusuario}*\n*_PATENTE_*: ${role}\n*_LEVEL_*: ${levelusuario}\n*_XP POR MENSAGEM_* *≅* ${xplevel}\n\n*Ganhe mais ${quantofalta} de xp pra upar de level*`
            sendButLocation(from, textolevel, fl, { jpegThumbnail: level }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: `☰ PERFIL COMPLETO`
              },
              type: 1
            }], { quoted: mek })
            break
          case 'buypack':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            bulula = [/*"","", */"*Victoria Matosa*\n\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9", "*Segredos Da Ana*\n\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg/", "*Polonesa Do Hype*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC", "*Ashley Tervort*\n\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA", "*Evilena*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo", "*Mulher Melão*\n\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg", "*Aline Faria*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ", "*Rafaela Nery*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0", "*Maru Karv*\n\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw", "*Purple Bitch*\n\nhttps://mega.nz/folder/4Fk2ERIR#GG6kMqfNMlpgd4n0d9ePCg", "*Love Lilah*\n\nhttps://mega.nz/folder/sV8UnDzI#1gU96w9k7KfAL_YDxJiMPg", "*Elle*\n\nhttps://mega.nz/folder/VewAQKgB#T3ke26T6j9Z9zxcPwJHaJQ", "*Love Lilah 2*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3", "*Taty Maia*\n\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR", "*Me1adinha*\n\nhttps://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?pli=1&key=ZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn", "*Sophia Carracini*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o", "*Maria Eugênia*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3", "*Nayara*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE", "*Littl Misfit*\n\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL", "*Anitta*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3", "*Lana Rhoades*\n\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw", "*Belle Delphine*\n\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9",]
            bololo = bulula[Math.floor(Math.random() * bulula.length)]
            desgraça = 5000
            vegonha = fs.readFileSync('./lib/image/vegonha.jpg')
            arizap = fs.readFileSync('./lib/image/mão2.jpg')
            packtxt = `${m}C ta doido carai, vai dar um packzão desses de graça pra todo mundo do grupo? Mas ok né, caso você realmente queira fazer isso é so clicar no botão${m} *"GRUPO"* ${m}ou caso tu queira que eu te mande no pv, selecione o botão${m} *"PV"*`
            if (isPremium && isGroup) return reply(`Como usuário premium você tem direito a packs ilimitados, mas só pode usar esse comando no privado`)
            if (isPremium) return sendButtonMsg(from, `${bololo}`, `Pack repetido ou com problemas? Converse com meu dono clicando no botão abaixo`, [{
              buttonId: `${prefix}+sender`,
              buttonText: {
                displayText: `OWNER 🧐`
              },
              type: 1
            }], { quoted: pack18, sendEphemeral: true })
            dinhos = `${m}Você não tem dinheiro suficiente para comprar esse item, interaja com o bot ou nos grupos para conseguir mais pontos, usuários premium podem usufruir livremente deste comando${m}`
            zulinico = desgraça - checkATMuser(sender)
            if (checkATMuser(sender) < desgraça) return sendButLocation(from, dinhos, `${m}Você precisa de mais ${zulinico} pontos pra adquirir um pack${m}`, { jpegThumbnail: arizap }, [{
              buttonId: `${prefix}xxxtentaciones`,
              buttonText: {
                displayText: `QUERO SER PREMIUM ✅`
              },
              type: 1
            }], { quoted: mek })
            if (isGroup) return sendButLocation(from, packtxt, `escolha uma das opções abaixo`, { jpegThumbnail: vegonha }, [{
              buttonId: `${prefix}beibeatumalaca grupo`,
              buttonText: {
                displayText: `GRUPO`
              },
              type: 1
            }, {
              buttonId: `${prefix}beibeatumalaca pv`,
              buttonText: {
                displayText: 'PV'
              },
              type: 1
            }])
            confirmATM(sender, desgraça)
            sendButtonMsg(from, `${bololo}`, `Pack repetido ou com problemas? Converse com meu dono clicando no botão abaixo`, [{
              buttonId: `${prefix}+sender`,
              buttonText: {
                displayText: `OWNER 🧐`
              },
              type: 1
            }], { quoted: pack18, sendEphemeral: true })
            break
          case 'buyapp':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            arizap = fs.readFileSync('./lib/image/mão2.jpg')
            desgraça = 30000
            dinhos = `${m}Você não tem dinheiro suficiente para comprar esse item, interaja com o bot ou nos grupos para conseguir mais pontos${m}`
            zulinico = desgraça - checkATMuser(sender)
            if (isPremium && isGroup) return reply(`*Como usario premium vc pode usufruir livremente de todos os apps disponiveis, mas não em grupos*`)
            if (isPremium) return sendAPbut(``, `10d`, from, `*𝙰𝚙𝚙𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 🐻‍❄*`, "\n```Como usuario premium você pode resgatar qualquer um dos apps dessa lista```\n", `prem`)
            if (checkATMuser(sender) < desgraça) return sendButLocation(from, dinhos, `${m}Você precisa de mais ${zulinico} pontos pra adquirir uma lista de apps${m}`, { jpegThumbnail: arizap }, [{
              buttonId: `asddasdasdxxzxz`,
              buttonText: {
                displayText: `OK ADM 🐵`
              },
              type: 1
            }], { quoted: mek })
            MentionedReply(`*𝚃𝚛𝚊𝚗𝚜𝚊𝚌̧𝚊̃𝚘 𝚛𝚎𝚊𝚕𝚒𝚣𝚊𝚍𝚊 𝚌𝚘𝚖 𝚜𝚞𝚌𝚎𝚜𝚜𝚘, 𝚎𝚖 𝚊𝚕𝚐𝚞𝚗𝚜 𝚒𝚗𝚜𝚝𝚊𝚗𝚝𝚎𝚜 𝚎𝚗𝚟𝚒𝚊𝚛𝚎𝚒 𝚘 𝚒𝚝𝚎𝚖 𝚊𝚍𝚚𝚞𝚒𝚛𝚒𝚍𝚘*`, aprovado)
            confirmATM(sender, desgraça)
            setTimeout(() => {
              sendAPbut(`sim`, `4m`, from, `*𝙰𝚙𝚙𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 🐻‍❄*`, "\n```Você tem 4 minutos para resgatar qualquer um dos apps dessa lista```\n", ``)
            }, toMs(`3s`));
            break
          case 'semoji':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o emoji a ser pesquisado*`, mek, sender)
            if (q.length > 3) return reply('*Apenas um emoji por vez*')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            emoji.get(q).then(emoji => {
              link = `${emoji.images[4].url}`
              if (emoji.images[4] === undefined) return reply(`*infelizmente ainda não reconheço esse emoji*`)
              sendWebp(from, `${link}`).catch(() => reply('Deu errado carai'))
            })
            addFilter(from)
            break;
          case 'emoji':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o emoji a ser pesquisado*`, mek, sender)
            if (q.length > 3) return reply('*Apenas um emoji por vez*')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            emoji.get(q).then(emoji => {
              link = `${emoji.images[4].url}`
              sendFileFromUrl(link, image, `não`)
            })
            addFilter(from)
            break;
          case 'marvel':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-3d-avengers-logo-online-974.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-3d-avengers-logo-online-974.html", texto1, texto2)
            break
          case 'pornhub':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", texto1, texto2)
            break
          case 'glitch':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", texto1, texto2)
            break
          case 'glitch3':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", texto1, texto2)
            break
          case 'wolfl':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-wolf-logo-black-white-937.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-wolf-logo-black-white-937.html", texto1, texto2)
            break
          case 'wolfl2':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-wolf-logo-galaxy-online-936.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-wolf-logo-galaxy-online-936.html", texto1, texto2)
            break
          case 'marvell':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-logo-style-marvel-studios-online-971.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-logo-style-marvel-studios-online-971.html", texto1, texto2)
            break
          case 'stone':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-a-stone-text-effect-online-982.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-a-stone-text-effect-online-982.html", texto1, texto2)
            break
          case 'space':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-space-3d-text-effect-online-985.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-space-3d-text-effect-online-985.html", texto1, texto2)
            break
          case 'ninjal':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-ninja-logo-online-935.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-ninja-logo-online-935.html", texto1, texto2)
            break
          case 'videogame':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", texto1, texto2)
            break
          case 'graffiti':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", texto1, texto2)
            break
          case 'halloween':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", texto1, texto2)
            break
          case 'shild':
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            if (q.match(`exemplo`)) return sendTextProEX2("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html")
            if (!q || !q.includes("|") || q.startsWith("|")) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr2(prefix, command), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro2("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", texto1, texto2)
            break
          case 'matrix':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/matrix-style-text-effect-online-884.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/matrix-style-text-effect-online-884.html", q)
            break
          case 'thunder':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-thunder-text-effect-online-881.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-thunder-text-effect-online-881.html", q)
            break
          case 'thunder2':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/online-thunder-text-effect-generator-1031.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/online-thunder-text-effect-generator-1031.html", q)
            break
          case 'love':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html", q)
            break
          case 'magma':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", q)
            break
          case 'bearl':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", q)
            break
          case 'harrypotter':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-harry-potter-text-effect-online-1025.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", q)
            break
          case '3dtext':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/3d-gradient-text-effect-online-free-1002.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", q)
            break
          case 'space2':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-space-text-effects-online-free-1042.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-space-text-effects-online-free-1042.html", q)
            break
          case 'gold':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", q)
            break
          case 'ice':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/ice-cold-text-effect-862.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/ice-cold-text-effect-862.html", q)
            break
          case 'natural':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/natural-leaves-text-effect-931.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/natural-leaves-text-effect-931.html", q)
            break
          case 'acid':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/toxic-text-effect-online-901.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/toxic-text-effect-online-901.html", q)
            break
          case 'rainbow':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", q)
            break
          case 'hologram':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", q)
            break
          case 'glitch2':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", q)
            break
          case 'demon':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-green-horror-style-text-effect-online-1036.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", q)
            break
          case 'sand':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/sand-writing-text-effect-online-990.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/sand-writing-text-effect-online-990.html", q)
            break
          case 'neon':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/neon-text-effect-online-963.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/neon-text-effect-online-963.html", q)
            break
          case 'neon2':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/neon-light-text-effect-online-882.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/neon-light-text-effect-online-882.html", q)
            break
          case 'mar':
            if (!q) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.makererr(prefix, command), mek, sender)
            if (q.match(`exemplo`)) return sendTextProEX("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html")
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.maker(), mek, sender)
            sendTextPro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", q)
            break
          case 'st':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              const media = await LorranX.downloadAndSaveMediaMessage(encmedia)
              rano = getRandom('.webp')
              exif321 = getRandom('.exif')
              sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
              await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                })
                .on('error', function (err) {
                  reply('deu errado carai')
                })
              exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                fs.unlinkSync(media)
                exec(`webpmux -set exif ${exif321} ${rano} -o ${rano}`, async (error) => {
                  buffer = fs.readFileSync(rano)
                  LorranX.sendMessage(from, buffer, sticker, {
                    quoted: mek
                  })
                  fs.unlinkSync(rano)
                })
              })
            } else {
              reply(`Você precisa marcar ou enviar uma mensagem com a legenda ${prefix}st`)
            }
            addFilter(from)
            break
          case 'gtts':
          case 'tts':
            if (args.length < 1) return m.reply(`Cadê o texto pra eu falar?`)
            try {
              gtts = require('./lib/gtts')(args[0])
            } catch (error) { m.reply(`Linguagem não suportada ou inexistente`) }
            if (q.length < 2) return m.reply(`Cadê o código do idioma pra eu falar?`)
            var bby = body.slice(8)
            ranm = getRandom('.mp3')
            rano = getRandom('.ogg')
            q.length > 400
              ? m.reply('Grande pa carai saporra')
              : gtts.save(ranm, bby, function () {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                  fs.unlinkSync(ranm)
                  buff = fs.readFileSync(rano)
                  if (err) return m.reply(`erro`)
                  try {
                    l.sendMessage(from, { audio: buff, ptt: true, quoted: m })
                  } catch (error) { reply(`eita deu errado carai`) }
                  fs.unlinkSync(rano)
                })
              })
            break
          case 'falar':
            if (args.length < 1) return reply(`Cadê o texto pra eu falar?`)
            gtts = require('./lib/gtts')(`pt-br`)
            ranm = getRandom('.mp3')
            rano = getRandom('.ogg')
            q.length > 400
              ? reply('Grande pa carai saporra')
              : gtts.save(ranm, q, function () {
                exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                  fs.unlinkSync(ranm)
                  buff = fs.readFileSync(rano)
                  if (err) return reply(`erro`)
                  LorranX.sendMessage(from, buff, audio, { ptt: true, quoted: mek })
                  fs.unlinkSync(rano)
                })
              })
            break
          case 'speed':
          case 'ping':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            const timestampi = speed();
            const latensyi = speed() - timestampi
            reply(`Speed: ${latensyi.toFixed(4)} Segundos`)
            addFilter(from)
            break;
          case 'attp':
            if (!q) return sendsticker(fs.readFileSync("./lib/image/semtexto.webp"), mek)
            buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
            buffer ? LorranX.sendMessage(from, buffer, sticker, { quoted: mek }) : sendsticker(fs.readFileSync("./lib/image/apioff.webp"), mek)
            break
          case 'ttp':
            if (isBanned) return reply(mess.banned)
            LorranX.updatePresence(from, Presence.composing)
            if (!q) return sendsticker(fs.readFileSync("./lib/image/semtexto2.webp"), mek)
            buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
            buffer ? LorranX.sendMessage(from, buffer, image, { quoted: mek, caption: `Responda a esta mensagem com ${prefix}sticker para transformar em figurinha` }) : sendsticker(fs.readFileSync("./lib/image/apioff2.webp"), mek)
            break
          case 'namoradinha':
            if (!isRegister) return sendREGbut()
            if (isGroup) return reply('Este comando não pode ser usado em grupos!')
            anug = getRegisteredRandomId(registrarusuarios).replace('@s.whatsapp.net', '')
            idrandom = `${anug}@s.whatsapp.net`
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            contsw = LorranX.contacts[idrandom] || { notify: idrandom.replace(/@.+/, '') }
            pushnamerr = contsw.notify || contsw.vname || contsw.name || '-'
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos2 })
            zaperzaper = `${m}Essa é uma das possíveis pretendentes a ser sua namoradinha, o nome dela é ${pushnamerr}\n\nuse${m} " *NEXT* " ${m}para ver a próxima pretendente e${m} " *❤️* " ${m}caso queira o número dela${m}`
            try {
              pp_user = await LorranX.getProfilePicture(idrandom)
            } catch (e) {
              pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
            }
            buff = await getBuffer(pp_user)
            setTimeout(() => {
              sendButLocation(from, zaperzaper, `escolha uma das opções abaixo`, { jpegThumbnail: buff }, [{
                buttonId: `${prefix}namoradinha`,
                buttonText: {
                  displayText: `NEXT`
                },
                type: 1
              }, {
                buttonId: `${prefix}abusssdsdsdsdsdsds ${anug}`,
                buttonText: {
                  displayText: '*❤️*'
                },
                type: 1
              }])
            }, 1500)
            break
          case 'abusssdsdsdsdsdsds':
            if (!q) return reply(`Você não deveria ter acesso a esse comando`)
            reply(`${m}Bom ${pushname}, esse aqui é o número dela wa.me/${q}, só lembra de não ser um pau no cu${m}`)
            break
          case 'transfer':
          case 'ted':
            if (!isRegister) return sendREGbut()
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q.includes('|')) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.fif(prefix, command, sender), mek, sender)
            const tujuan = q.substring(0, q.indexOf('|') - 1)
            const jumblah = q.substring(q.lastIndexOf('|') + 1)
            if (isNaN(jumblah)) return sendFooter(from, RESPOSTAS.ui(), `*O número de pontos a ser tranferido deve sempre ser um número*`, mek, sender)
            if (jumblah < 500) return sendFooter(from, RESPOSTAS.ui(), `*Tranfira uma quantia maior que 500 pontos*`, mek, sender)
            if (checkATMuser(sender) < jumblah) return reply(`Você não tem dinheiro suficiente para fazer essa transferência`)
            const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
            fee = 0.070 * jumblah
            hasiltf = jumblah - fee
            ted = fs.readFileSync("./lib/image/ted.mp4")
            addKoinUser(tujuantf, hasiltf)
            confirmATM(sender, jumblah)
            addKoinUser('553195703379@s.whatsapp.net', fee)
            LorranX.sendMessage(from, ted, MessageType.video, { mimetype: 'video/gif', caption: `• ${m}Transferência realizada por${m} : @${sender.split("@")[0]}\n• ${m}Para${m} : @${tujuantf.split("@")[0]}\n• ${m}Quantidade de pontos transferidos${m} : ${jumblah}\n• ${m}Imposto sobre transferência${m} : ${fee}`, quoted: verificadostts, contextInfo: { mentionedJid: [sender, tujuantf] } })
            addFilter(from)
            break
          case 'pix':
            if (!isRegister) return sendREGbut()
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q.includes('|')) return sendFooter(from, RESPOSTAS.fi(), RESPOSTAS.fif(prefix, command, sender), mek, sender)
            const caco = q.substring(0, q.indexOf('|') - 1)
            const maco = q.substring(q.lastIndexOf('|') + 1)
            if (isNaN(maco)) return sendFooter(from, RESPOSTAS.ui(), `*O número de pontos a ser tranferido deve sempre ser um número*`, mek, sender)
            if (maco < 500) return sendFooter(from, RESPOSTAS.ui(), `*Tranfira uma quantia maior que 500 pontos*`, mek, sender)
            if (checkATMuser(sender) < maco) return reply(`Você não tem dinheiro suficiente para fazer essa transferência`)
            const cacotf = `${caco.replace("@", '')}@s.whatsapp.net`
            fee = 0 * maco
            imposto = maco - fee
            pix = fs.readFileSync("./lib/image/pix.mp4")
            addKoinUser(cacotf, imposto)
            confirmATM(sender, maco)
            LorranX.sendMessage(from, pix, MessageType.video, { mimetype: 'video/gif', caption: `• ${m}PIX enviado por${m} : @${sender.split("@")[0]}\n• ${m}Para${m} : @${cacotf.split("@")[0]}\n• ${m}Quantidade de pontos transferidos${m} : ${maco}\n\n*Não são cobrados impostos sobre transações via pix*`, quoted: verificadostts, contextInfo: { mentionedJid: [sender, cacotf] } })
            addFilter(from)
            break
          //FUNÇÕES DE GRUPO
          case 'antihidetag':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            texth = "*ANTIHIDETAG ⚖️*\n\n```Olá mamaco, ao ativar essa função, eu banirei todos os membros comuns que enviarem mensagens que marquem todos do grupo usando hidetag```\n"
            if (!isHideTag) return sendButLocation(from, texth, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antihide.jpg") }, [{
              buttonId: `${prefix}antihidetagg on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isHideTag) return sendButLocation(from, texth, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antihide.jpg") }, [{
              buttonId: `${prefix}antihidetagg off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'antivo':
          case 'antiviewonce':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            textvo = "*ANTI VIEW-ONCE 🤨📸*\n\n```Olá mamaco, ao ativar essa função, eu reenviarei a imagem/vídeo todas as vezes que alguem enviar uma mensagem em formato de vizualização única```\n"
            if (!isAntivo) return sendButLocation(from, textvo, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antivo.jpg") }, [{
              buttonId: `${prefix}antivor on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isAntivo) return sendButLocation(from, textvo, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antivo.jpg") }, [{
              buttonId: `${prefix}antivor off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'x9':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            textx = "*X9 🕵🏻‍♂️*\n\n```Olá mamaco, ao ativar essa função, eu enviarei uma mensagem todas as vezes que alguém se tornar ou deixar de ser administrador```\n"
            if (!isX9) return sendButLocation(from, textx, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/x9.jpg") }, [{
              buttonId: `${prefix}x9ver on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isX9) return sendButLocation(from, textx, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/x9.jpg") }, [{
              buttonId: `${prefix}x9ver off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'mute':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner && !isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            textm = "*MUTADOR 🔇*\n\n```Olá mamaco, ao ativar essa função, eu responderei somente aos administradores e ao meu dono```\n"
            if (!isMuted) return sendButLocation(from, textm, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/mute.jpg") }, [{
              buttonId: `${prefix}mutador on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isMuted) return sendButLocation(from, textm, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/mute.jpg") }, [{
              buttonId: `${prefix}mutador off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'leveling':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            textl = "*LEVELING 🧙‍♂️*\n\n```Olá mamaco, ao habilitar esse recurso, todas as funções de levelling serão ativas nesse grupo```\n"
            if (!isLevelingOn) return sendButLocation(from, textl, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/level.jpg") }, [{
              buttonId: `${prefix}nivell on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isLevelingOn) return sendButLocation(from, textl, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/level.jpg") }, [{
              buttonId: `${prefix}nivell off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'antifake':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textf = "*ANTI-FAKE 👽*\n\n```Olá mamaco, ao ativar essa função, eu banirei todo e qualquer número não brasileiro que entrar no grupo```\n"
            if (!isAntiFa) return sendButLocation(from, textf, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/fake.jpg") }, [{
              buttonId: `${prefix}antifaker on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }, {
              buttonId: `${prefix}tyste`,
              buttonText: {
                displayText: `☰ BANIR TODOS OS FAKES`
              },
              type: 1
            }])
            if (isAntiFa) return sendButLocation(from, textf, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/fake.jpg") }, [{
              buttonId: `${prefix}antifaker off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }, {
              buttonId: `${prefix}tyste`,
              buttonText: {
                displayText: `☰ BANIR TODOS OS FAKES`
              },
              type: 1
            }])
            break;
          case 'blacklist':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textbl = "*BLACK LIST 📓*\n\n```Olá mamaco, ao ativar essa função, eu banirei todos os numeros que forem adicionados a black list desse grupo```\n"
            if (!isBlackOn) return sendButLocation(from, textbl, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/blacklist.jpg") }, [{
              buttonId: `${prefix}blacklistt on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isBlackOn) return sendButLocation(from, textbl, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/blacklist.jpg") }, [{
              buttonId: `${prefix}blacklistt off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }, {
              buttonId: `${prefix}rmblacklist`,
              buttonText: {
                displayText: `☰ APAGAR BLACKLIST`
              },
              type: 1
            }])
            break;
          case 'antitxt':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textf = "*ANTI-TXT ⚖️*\n\n```Olá mamaco, ao ativar essa função, eu banirei todo e qualquer membro comum que enviar mensagens com mais de 8500 caracteres```\n"
            if (!isAntiTxt) return sendButLocation(from, textf, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antitxt.jpg") }, [{
              buttonId: `${prefix}antitxtrr on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isAntiTxt) return sendButLocation(from, textf, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antitxt.jpg") }, [{
              buttonId: `${prefix}antitxtrr off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'welcome':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            textw = "*WELCOME 👋🏻*\n\n```Olá mamaco, ao ativar essa função, eu enviarei uma mensagem de boas-vindas todas as vezes que um novo membro entrar no grupo```\n"
            if (!isWelcome) return sendButLocation(from, textw, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/welcome.jpg") }, [{
              buttonId: `${prefix}welcomerr on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isWelcome) return sendButLocation(from, textw, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/welcome.jpg") }, [{
              buttonId: `${prefix}welcomerr off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'antibot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textli = "*ANTI-BOT 🤖*\n\n```Olá mamaco, ao ativar essa função, eu banirei todo e qualquer membro com atividade suspeita ou parecida com a de um bot, bots com admin não serão banidos```\n"
            if (!isAntiBot) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antibot.jpg") }, [{
              buttonId: `${prefix}antibott on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isAntiBot) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/antibot.jpg") }, [{
              buttonId: `${prefix}antibott off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'antilink':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textli = "*ANTI-LINK ⚖️*\n\n```Olá mamaco, ao ativar essa função, eu banirei todo e qualquer membro comum que enviar alguns tipos de link```\n"
            if (!isAntiLink) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/link.jpg") }, [{
              buttonId: `${prefix}antilinkerr on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isAntiLink) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/link.jpg") }, [{
              buttonId: `${prefix}antilinkerr off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'antilinkhard':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            textli = "*ANTI-LINK _HARD_ ⚖️*\n\n```Olá mamaco, ao ativar essa função, eu banirei todo e qualquer membro comum que enviar qualquer tipo de link```\n"
            if (!isAntiLinkHard) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/link.jpg") }, [{
              buttonId: `${prefix}antilinkerrhard on`,
              buttonText: {
                displayText: `☰ ATIVAR`
              },
              type: 1
            }])
            if (isAntiLinkHard) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/link.jpg") }, [{
              buttonId: `${prefix}antilinkerrhard off`,
              buttonText: {
                displayText: `☰ DESATIVAR`
              },
              type: 1
            }])
            break;
          case 'setgi':
            if (!isQuotedImage) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiimage(), mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            const gpig = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const medipp = await LorranX.downloadAndSaveMediaMessage(gpig)
            await LorranX.updateProfilePicture(from, medipp)
            reply(`Pronto macaco, alterei a foto do grupo`)
            addFilter(from)
            break;
          case 'grp':
          case 'group':
          case 'gp':
          case 'grupo':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!q) {
              sendButLocation(from, `${m}Abra ou feche o grupo usando os botões abaixo${m}`, ``, { jpegThumbnail: fs.readFileSync("./lib/image/grp.jpg") }, [{
                buttonId: `${prefix}grp open`,
                buttonText: {
                  displayText: "ABRIR"
                },
                type: 1
              }, {
                buttonId: `${prefix}grp close`,
                buttonText: {
                  displayText: "FECHAR"
                },
                type: 1
              }])

            } else if (q === 'open') {
              reply(`*Grupo aberto com sucesso*`)
              LorranX.groupSettingChange(from, GroupSettingChange.messageSend, false)
            } else if (q === 'close') {
              reply(`*Grupo fechado com sucesso*`)
              LorranX.groupSettingChange(from, GroupSettingChange.messageSend, true)
            }
            addFilter(from)
            break;
          case 'resetlink':
          case 'resetarlik':
          case 'revokelink':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            json = ['action', 'inviteReset', from]
            LorranX.query({ json, expect200: true })
            reply('Link do grupo resetado')
            addFilter(from)
            break;
          case 'demoteall':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            members_id = []
            for (let mem of groupMembers) {
              members_id.push(mem.jid)
            }
            LorranX.groupDemoteAdmin(from, members_id)
            addFilter(from)
            break;
          case 'promoteall':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            members_id = []
            for (let mem of groupMembers) {
              members_id.push(mem.jid)
            }
            LorranX.groupMakeAdmin(from, members_id)
            addFilter(from)
            break;
          case 'leave':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            LorranX.groupLeave(from)
              .then((res) => {
                LorranX.sendMessage(sender, "tchau", text)
              })
            addFilter(from)
            break;
          case 'setdesc':
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o texto da nova descrição*`, mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            LorranX.groupUpdateDescription(from, `${body.slice(9)}`)
            LorranX.sendMessage(from, 'Pronto macaco, alterei a descrição do grupo', text, { quoted: mek })
            addFilter(from)
            break;
          case 'listadmin':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            let qweweqweqweqweqweqweqweqweqweqwesasadasd = `Lista de adms do grupo *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
            no = 0
            for (let admon of groupAdmins) {
              no += 1
              qweweqweqweqweqweqweqweqweqweqwesasadasd += `[${no.toString()}] @${admon.split('@')[0]}\n`
            }
            mentions(qweweqweqweqweqweqweqweqweqweqwesasadasd, groupAdmins, true)
            addFilter(from)
            break
          case 'promote':
          case 'promover':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) {
              magagu = mek.message.extendedTextMessage.contextInfo.participant
              LorranX.groupMakeAdmin(from, [magagu])
              reply(`Membro comum promovido a adm com sucesso`)
            } else if (q.length > 1) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              LorranX.groupMakeAdmin(from, [mentioned])
              mentionsbut(`não`, `_*Membro comum promovido ❗*_`, mentioned, true, ``, ``, `*O @${mentioned[0].split('@')[0]} acaba de se tornar o nosso mais novo admin*`)
            }
            addFilter(from)
            break;
          case 'listonline':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
            let online = [...Object.keys(LorranX.chats.get(ido).presences), LorranX.user.jid]
            LorranX.sendMessage(from, '*List Online :*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, {
              quoted: mek,
              contextInfo: { mentionedJid: online }
            })
            addFilter(from)
            break
          case 'getpp':
          case 'getfp':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) {
              pictt = await LorranX.getProfilePicture(mentionByreply)
            } else if (q.includes(`@`)) {
              pictt = await LorranX.getProfilePicture(mentionByTag[0])
            }
            pict = await getBuffer(pictt)
            LorranX.sendMessage(from, pict, image, { quoted: mek })
            addFilter(from)
            break
          case 'getbio':
          case 'getrecado':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) yy = mentionByreply
            if (q.includes(`@`)) yy = mentionByTag[0]
            var p = await LorranX.getStatus(`${yy}`, MessageType.text)
            reply(p.status)
            if (p.status == 401) {
              reply(`Algo de errado aconteceu`)
            }
            addFilter(from)
            break
          case 'getnick':
          case 'nick':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) ambl = mentionByreply
            if (q.includes(`@`)) ambl = mentionByTag[0]
            const sname = LorranX.contacts[ambl] != undefined ? LorranX.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : LorranX.contacts[ambl].notify || LorranX.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
            reply(sname)
            addFilter(from)
            break
          case 'demote':
          case 'rebaixar':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!q) {
              if (mek.message.extendedTextMessage.contextInfo.participant === undefined || mek.message.extendedTextMessage.contextInfo.participant === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar a mensagem de alguém pra eu demitir')
              magagu = mek.message.extendedTextMessage.contextInfo.participant
              LorranX.groupDemoteAdmin(from, [magagu])
              reply(`Pronto, adm demitido do cargo`)
            } else if (q.length > 1) {
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Ta de adm mas é burro pa caralho, c tem que marcar alguém pra eu rebaixar do cargo de adm')
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              if (mentioned.length > 1) {
                teks = ''
                for (let _ of mentioned) {
                  teks += `*Adm demitido do cargo 🐒 :\n`
                  teks += `@_.split('@')[0]`
                }
                mentions(teks, mentioned, true)
                LorranX.groupDemoteAdmin(from, mentioned)
              } else {
                mentions(`Adm @${mentioned[0].split('@')[0]} demitido do cargo 🐒`, mentioned, true)
                LorranX.groupDemoteAdmin(from, mentioned)
              }
            }
            addFilter(from)
            break;
          case 'sider':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply("Este comando só pode ser usado em grupos")
            if (!isQuoted) return reply(`Coe macaco, c tem que marcar alguma mensagem minha`)
            LorranX.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
              .then((res) => {
                let anu = []
                let txt = `• *Lido por*\n\n`
                let txtd = `\n• *Entregue a*\n\n`
                for (let i = 0; i < res.reads.length; i++) {
                  anu.push(res.reads[i].jid)
                  txt += `• @${res.reads[i].jid.split("@")[0]}\n`
                  txt += `• Horário em que visualizou : ${moment(`${res.reads[i].t}` * 1000).tz('America/Sao_Paulo').format('HH:mm:ss')}\n\n`
                }
                for (let i = 0; i < res.deliveries.length; i++) {
                  anu.push(res.deliveries[i].jid)
                  txtd += `• @${res.deliveries[i].jid.split("@")[0]}\n`
                  txtd += `• Horário em que recebeu : ${moment(`${res.deliveries[i].t}` * 1000).tz('America/Sao_Paulo').format('HH:mm:ss')}\n\n`
                }

                fullintel = txt + txtd
                mentions(fullintel, anu, true)
              })
              .catch((err) => reply('Só consigo ver quem vizualizou as *minhas* mensagens'))
            addFilter(from)
            break;
          case 'hidetag':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins && !isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            var group = await LorranX.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
              mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
              text: q,
              contextInfo: { mentionedJid: mem },
              quoted: mek
            }
            LorranX.sendMessage(from, options, text, { quoted: verificadostts })
            addFilter(from)
            break;
          case 'hidetagadm':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins && !isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            mem = groupAdmins
            var options = {
              text: q,
              contextInfo: { mentionedJid: mem },
              quoted: mek
            }
            LorranX.sendMessage(from, options, text, { quoted: verificadostts })
            addFilter(from)
            break;
          case 'tagsticker':
          case 'tagfig':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isQuotedSticker) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uistk(), mek, sender)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
              var value = args.join(" ")
              var group = await LorranX.groupMetadata(from)
              var member = group['participants']
              var mem = []
              member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
              })
              var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
              }
              ini_buffer = fs.readFileSync(filePath)
              LorranX.sendMessage(from, ini_buffer, sticker, options)
              fs.unlinkSync(filePath)
            } else {
              reply(`C tem que marcar uma figurinha`)
            }
            addFilter(from)
            break;
          case 'tagimg':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isQuotedImage) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiimage(), mek, sender)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
              var value = args.join(" ")
              var group = await LorranX.groupMetadata(from)
              var member = group['participants']
              var mem = []
              member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
              })
              var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
              }
              ini_buffer = fs.readFileSync(filePath)
              LorranX.sendMessage(from, ini_buffer, image, options)
              fs.unlinkSync(filePath)
            } else {
              reply(`C tem que marcar uma imagem`)
            }
            addFilter(from)
            break;
          case 'setnamegp':
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o novo nome do grupo*`, mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            LorranX.groupUpdateSubject(from, q)
            LorranX.sendMessage(from, 'Pronto macaco, alterei o nome do grupo', text, { quoted: mek })
            addFilter(from)
            break;
          case 'kick':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag2(), mek, sender)
            LorranX.groupRemove(from, [mentionByreply])
            addFilter(from)
            break
          case 'add':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!q) try {
              magagu = mek.message.extendedTextMessage.contextInfo.participant
              LorranX.groupAdd(from, [magagu])
            } catch (err) {
              console.log('Error :', err)
              reply('Deu errado carai, muito provavelmente o cara privou quem pode adicioná-lo em grupos')
            }
            if (q.length > 1) try {
              qwyqauausususujzjzjzjzjmmmlkll = `${q.replace(/ /g, '')}@s.whatsapp.net`
              LorranX.groupAdd(from, [qwyqauausususujzjzjzjzjmmmlkll])
            } catch (err) {
              console.log('Error :', err)
              reply('Deu errado carai, muito provavelmente o cara privou quem pode adicioná-lo em grupos')
            }
            addFilter(from)
            break;
          case 'linkgp':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            try {
              const linkdogrupo = await LorranX.groupInviteCode(from)
              reply(`Link do grupo ${groupName}\nhttp://chat.whatsapp.com/${linkdogrupo}`)
            } catch (e) {
              reply("link invalido")
            }
            addFilter(from)
            break;
          case 'addblacklist':
          case 'addbl':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isBlackOn) return reply(`Para usar este recurso o blacklist deve estar ativado`)
            if (!q) return reply(`*formato incorreto/texto invalido*`)
            if (isNaN(q)) return reply('O numero a ser adicionado a blacklist precisa realmente ser um numero')
            if (q.length <= 11) return reply(`Você se esqueceu do codigo do pais`)
            adicionarnumero = `${q}@s.whatsapp.net`
            check = await checkBlackListG(from)
            if (check.includes(adicionarnumero)) return reply(`Este numero ja esta na blacklist desse grupo`)
            await AddNumeroBL(from, adicionarnumero)
            await reply(`Numero adicionado a blacklist com sucesso`)
            break
          case 'rmblacklist':
          case 'rmbl':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!isBlackOn) return reply(`Para usar este recurso o blacklist deve estar ativado`)
            RmNumeroBL(from, ``)
            break
          case 'delete':
          case 'del':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isOwner && !isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            LorranX.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
            addFilter(from)
            break;
          case 'ttt':
          case 'jv':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (args.length < 1) return reply(`${HORARIOS} ${pushname}, c tem que marcar alguém para jogar com vc`)
            if (isTTT) return reply("Calmai manin, já tem alguém jogando aqui nesse grupo")
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`${HORARIOS} ${pushname}, c tem que marcar alguém para jogar com vc`)
            ment = mek.message.extendedTextMessage.contextInfo.mentionedJid;
            jvimg = fs.readFileSync('./lib/image/jv.png')
            player1 = sender
            player2 = ment[0]
            number = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
            id = from
            turn = player2
            roomttt.push({ player1, player2, id, number, turn })
            LorranX.sendMessage(from, jvimg, image, { quoted: mek, caption: `*〘 🎮 𝘼𝙂𝙐𝘼𝙍𝘿𝘼𝙉𝘿𝙊 𝙍𝙀𝙎𝙋𝙊𝙎𝙏𝘼 ⚔️ 〙*\n\n _@${player2.split("@")[0]}, @${player1.split("@")[0]} Tá desafiando tu pra uma partida de jogo da velha_\n\n_Use *S* para aceitar ou *N* para arregar_\n`, text, contextInfo: { mentionedJid: [player1, player2] } })
            addFilter(from)
            break;
          case 'delttt':
          case 'deljv':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isTTT) return reply("Nem tem ninguém jogando")
            rooms = roomttt.filter(titid => titid.id.includes())
            roomttt = rooms;
            reply("Jogo da velha cancelado")
            addFilter(from)
            break;
          case 'rankgay':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            d = []
            no = 0
            let desgraça55 = `${m}ranking dos mais gays do gruspo 📈${m}\n\n`
            for (i = 0; i < 5; i++) {
              r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
              no += 1
              desgraça55 += `*[${no.toString()}º]* 🏳️‍🌈 @${groupMembers[r].jid.split('@')[0]}\n`
              d.push(groupMembers[r].jid)
            }
            var next = `rankcorno`
            var displayrank = `☰ NEXT RANK`
            mentionsbut(``, desgraça55, d, true, next, displayrank)
            addFilter(from)
            break
          case 'rankcorno':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            d = []
            no = 0
            let desgraça9865 = `${m}ranking dos mais cornos do gruspo 📈${m}\n\n`
            for (i = 0; i < 5; i++) {
              r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
              no += 1
              desgraça9865 += `*[${no.toString()}º]* 🐮 @${groupMembers[r].jid.split('@')[0]}\n`
              d.push(groupMembers[r].jid)
            }
            var next = `ranklindo`
            var displayrank = `☰ NEXT RANK`
            mentionsbut(``, desgraça9865, d, true, next, displayrank)
            addFilter(from)
            break
          case 'ranklindo':
          case 'rankbonito':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            d = []
            no = 0
            let desgraça99 = `${m}ranking dos mais lindos do gruspo 📈${m}\n\n`
            for (i = 0; i < 5; i++) {
              r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
              no += 1
              desgraça99 += `*[${no.toString()}º]* 😎 @${groupMembers[r].jid.split('@')[0]}\n`
              d.push(groupMembers[r].jid)
            }
            var next = `rankfeio`
            var displayrank = `☰ NEXT RANK`
            mentionsbut(``, desgraça99, d, true, next, displayrank)
            addFilter(from)
            break
          case 'rankfeio':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            d = []
            no = 0
            let desgraça225 = `${m}ranking dos mais feios do gruspo 📈${m}\n\n`
            for (i = 0; i < 5; i++) {
              r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
              no += 1
              desgraça225 += `*[${no.toString()}º]* 🤓 @${groupMembers[r].jid.split('@')[0]}\n`
              d.push(groupMembers[r].jid)
            }
            var next = `rankgostosa`
            var displayrank = `☰ NEXT RANK`
            mentionsbut(``, desgraça225, d, true, next, displayrank)
            addFilter(from)
            break
          case 'rankgostosa':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            d = []
            no = 0
            let desgraça3 = `${m}ranking das mais gostosas do gruspo 📈${m}\n\n`
            for (i = 0; i < 5; i++) {
              r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
              no += 1
              desgraça3 += `*[${no.toString()}º]* 😳 @${groupMembers[r].jid.split('@')[0]}\n`
              d.push(groupMembers[r].jid)
            }
            var next = `rankgay`
            var displayrank = `☰ NEXT RANK`
            mentionsbut(``, desgraça3, d, true, next, displayrank)
            addFilter(from)
            break
          case 'ranklevel':
            addFilter(from)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            const bucetinha = []
            let userh = _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            let leaderboardlvl1 = `${m}rank level 🐕${m}\n\n`
            macalo = `\n\n`
            leaderboardlvl = `\n`
            let nom = 0
            try {
              for (let i = 0; i < 5; i++) {
                if (nom === 5) macalo = `\n`
                bucetinha.push(userh[i].id)
                nom += 1
                leaderboardlvl += `[" ${m}Em${m} *${nom.toString()}º* ${m}lugar @${userh[i].id.split('@')[0]}\ncom ${userh[i].xp} de xp, e no level ${userh[i].level}${m} "]${macalo}`
              }
              var next = `rankmsg`
              var displayrank = `☰ RANK MENSAGENS`
              mentionsbut(``, leaderboardlvl1, bucetinha, true, next, displayrank, leaderboardlvl)
            } catch (err) {
              console.error(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankmsg':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (groupIdscount.indexOf(from) < 0) return enviar('O bot não tem ainda dados sobre o grupo')
            if (contador[ind].numbers.length < 3) return enviar('Necessita do registro de 3 usuarios')
            contador[ind].numbers.sort((a, b) => (a.messages < b.messages) ? 1 : -1)
            desgraçiado = []
            nuz = 1
            macalo = `\n\n`
            boardi1 = '*𝚛𝚊𝚗𝚔 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚍𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 🐊*\n\n'
            boardi = `\n`
            try {
              for (let i = 0; i < 5; i++) {
                if (nuz === 5) macalo = `\n`
                boardi += `[" ${m}Em${m} *${nuz.toString()}º* ${m}lugar @${contador[ind].numbers[i].jid.split('@')[0]}\ncom ${contador[ind].numbers[i].messages} mensagens enviadas${m} "]${macalo}`
                desgraçiado.push(contador[ind].numbers[i].jid)
                nuz += 1
              }
              var next = `rankmsg2`
              var displayrank = `☰ RANK MENSAGENS BOT`
              mentionsbut(``, boardi1, desgraçiado, true, next, displayrank, boardi)
            } catch (err) {
              console.log(err)
              await reply(`pelo menos 3 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankmsg2':
            addFilter(from)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            const bucetinhala = []
            let usermsg = contadorb.sort((a, b) => (a.mensagens < b.mensagens) ? 1 : -1)
            let leaderboardmsg = `${m}rank mensagens bot 🐊${m}\n\n`
            let nim = 0
            try {
              for (let i = 0; i < 10; i++) {
                bucetinhala.push(usermsg[i].id)
                nim += 1
                leaderboardmsg += `[" ${m}Em${m} *${nim.toString()}º* ${m}lugar @${usermsg[i].id.split('@')[0]}\ncom ${usermsg[i].mensagens} mensagens enviadas${m} "]\n\n`
              }
              var next = `rankpontos`
              var displayrank = `☰ RANK PONTOS`
              mentionsbut(``, leaderboardmsg, bucetinhala, true, next, displayrank)
            } catch (err) {
              console.error(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankpontos':
            addFilter(from)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            const bucetinhal = []
            let userdinhos = uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
            let leaderboardpoints = `${m}rank pontos 🚀${m}\n\n`
            let num = 0
            try {
              for (let i = 0; i < 5; i++) {
                bucetinhal.push(userdinhos[i].id)
                num += 1
                leaderboardpoints += `[" ${m}Em${m} *${num.toString()}º* ${m}lugar @${userdinhos[i].id.split('@')[0]}\ncom ${userdinhos[i].uang} pontos${m} "]\n\n`
              }
              var next = `rankcomandos`
              var displayrank = `☰ RANK COMANDOS`
              mentionsbut(``, leaderboardpoints, bucetinhal, true, next, displayrank)
            } catch (err) {
              console.error(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankcomandos':
          case 'rankcmd':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (groupIdscount.indexOf(from) < 0) return enviar('O bot não tem ainda dados sobre o grupo')
            if (contador[ind].numbers.length < 3) return enviar('Necessita do registro de 3 usuarios')
            contador[ind].numbers.sort((a, b) => (a.cmd_messages < b.cmd_messages) ? 1 : -1)
            desgraçiado = []
            macalo = `\n\n`
            nuz = 1
            boardi1 = '*𝚛𝚊𝚗𝚔 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚍𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘 👨🏿‍💻*\n\n'
            boardi = `\n`
            try {
              for (let i = 0; i < 5; i++) {
                if (nuz === 5) macalo = `\n`
                boardi += `[" ${m}Em${m} *${nuz.toString()}º* ${m}lugar @${contador[ind].numbers[i].jid.split('@')[0]}\ncom ${contador[ind].numbers[i].cmd_messages} comandos requisitados${m} "]${macalo}`
                desgraçiado.push(contador[ind].numbers[i].jid)
                nuz += 1
              }
              var next = `rankcomandos2`
              var displayrank = `☰ RANK COMANDOS BOT`
              mentionsbut(``, boardi1, desgraçiado, true, next, displayrank, boardi)
            } catch (err) {
              console.log(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankcomandos2':
            addFilter(from)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            const bucetinhqw = []
            let usercomandos = contadorC.sort((a, b) => (a.comandos < b.comandos) ? 1 : -1)
            let leaderboardcmd = `${m}rank comandos 👨🏿‍💻${m}\n\n`
            let nqm = 0
            try {
              for (let i = 0; i < 5; i++) {
                bucetinhqw.push(usercomandos[i].id)
                nqm += 1
                leaderboardcmd += `[" ${m}Em${m} *${nqm.toString()}º* ${m}lugar @${usercomandos[i].id.split('@')[0]}\ncom ${usercomandos[i].comandos} comandos requisitados${m} "]\n\n`
              }
              var next = `rankerros`
              var displayrank = `☰ RANK ERROS`
              mentionsbut(``, leaderboardcmd, bucetinhqw, true, next, displayrank)
            } catch (err) {
              console.error(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'rankerros':
            addFilter(from)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            const bucetinhasd = []
            let usererros = contadorE.sort((a, b) => (a.erros < b.erros) ? 1 : -1)
            let leaderboarderr = `${m}rank erros ❗${m}\n\n`
            let nqma = 0
            try {
              for (let i = 0; i < 5; i++) {
                bucetinhasd.push(usererros[i].id)
                nqma += 1
                leaderboarderr += `[" ${m}Em${m} *${nqma.toString()}º* ${m}lugar @${usererros[i].id.split('@')[0]}\ncom ${usererros[i].erros} erros em comandos requisitados${m} "]\n\n`
              }
              var next = `ranklevel a`
              var displayrank = `☰ NEXT RANK`
              mentionsbut(``, leaderboarderr, bucetinhasd, true, next, displayrank)
            } catch (err) {
              console.error(err)
              await reply(`pelo menos 10 usuários para poder acessar o banco de dados`)
            }
            break
          case 'adivinhar':
            sendButLocation(from, `\n${m}Ao clicar no botão abaixo eu adivinharei de qual dispositivo você está eviando mensagem agora${m}`, ``, { jpegThumbnail: fs.readFileSync("./lib/image/adivinhador.jpg") }, [{
              buttonId: `${prefix}adivinharrrr`,
              buttonText: {
                displayText: "ADIVINHAR 🔎"
              },
              type: 1
            }])
            break
          case 'rr':
          case 'roleta':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) {
              bulula = ["1", "2", "3"]
              bololo = bulula[Math.floor(Math.random() * bulula.length)]
              if (bololo == "1") {
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}llllllllllllllaalasaksjksadjxxmmnsss558856`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              } else if (bololo == "2") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}bililiuqqqwqwq123123455678899*-`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              } else if (bololo == "3") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}ziguiriguidum22`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              }
            } else {
              bulula = ["1", "2", "3", "4"]
              bololo = bulula[Math.floor(Math.random() * bulula.length)]
              if (bololo == "1") {
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}puritalianos657483920`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              } else if (bololo == "2") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}bililiuqqqwqwq123123455678899*-`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              } else if (bololo == "3") {
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}llllllllllllllaalasaksjksadjxxmmnsss558856`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              } else if (bololo == "4") {
                tambor = fs.readFileSync("./lib/image/tambor.jpg")
                buceniulda = `*Você acaba de iniciar uma rodada de roleta russa*\n\n${m}Aperte o botão abaixo e tente a sorte${m}`
                sendButLocation(from, buceniulda, ``, { jpegThumbnail: tambor }, [{
                  buttonId: `${prefix}ziguiriguidum22`,
                  buttonText: {
                    displayText: "PUXAR O GATILHO"
                  },
                  type: 1
                }])
              }
            }
            break
          case 'jm':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (isGroupAdmins) {
              bulula = ["1", "2", "3"]
              bololo = bulula[Math.floor(Math.random() * bulula.length)]
              if (bololo == "1") {
                bones = fs.readFileSync("./lib/image/bones.jpg")
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, esta é a versão do jogo para admins, neste caso para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra ele será demitido do cargo de admin e na última das possibilidades o jogador será expulso do grupo${m}`
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}bazucanenem`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.matadordeporco2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}butequinhosaboroso2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "2") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, esta é a versão do jogo para admins, neste caso para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra ele será demitido do cargo de admin e na última das possibilidades o jogador será expulso do grupo${m}`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}matadordeporco2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.butequinhosaboroso2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}bazucanenem`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "3") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, esta é a versão do jogo para admins, neste caso para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra ele será demitido do cargo de admin e na última das possibilidades o jogador será expulso do grupo${m}`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}butequinhosaboroso2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}bazucanenem`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}matadordeporco2`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              }
            }
            if (!isGroupAdmins) {
              bulula = ["1", "2", "3", "4", "5", "6", "7"]
              bololo = bulula[Math.floor(Math.random() * bulula.length)]
              if (bololo == "1") {
                bones = fs.readFileSync("./lib/image/bones.jpg")
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra nada acontecerá e na última das possibilidades o jogador será expulso do grupo${m}`
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}ramdolaaa`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "2") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra nada acontecerá e na última das possibilidades o jogador será expulso do grupo${m}`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}ramdolaaa`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "3") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um dos jogos mortais*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, em uma delas o jogador ganhará uma quantidade aleatória de pontos, em outra nada acontecerá e na última das possibilidades o jogador será expulso do grupo${m}`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.ramdolaaa`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "4") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um jogo mortal HARD*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, neste caso em uma delas o jogador ganhará uma quantidade aleatória de pontos, e nas outras duas possibilidades o jogador é expulso do grupo${m}\n\n_boa sorte kkkkkkkkk_`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}matadordeporco3`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "5") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um jogo mortal HARD*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, neste caso em uma delas o jogador ganhará uma quantidade aleatória de pontos, e nas outras duas possibilidades o jogador é expulso do grupo${m}\n\n_boa sorte kkkkkkkkk_`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}matadordeporco3`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "6") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                buceniulda = `*Você acaba de iniciar um jogo mortal HARD*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, neste caso em uma delas o jogador ganhará uma quantidade aleatória de pontos, e nas outras duas possibilidades o jogador é expulso do grupo${m}\n\n_boa sorte kkkkkkkkk_`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}matadordeporco3`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `.matadordeporco`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}butequinhosaboroso`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              } else if (bololo == "7") {
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                dabuino = [`butequinhosaboroso`, `matadordeporco`, `ramdolaaa`]
                var dominiosreiuu1 = dabuino[Math.floor(Math.random() * dabuino.length)]
                var dominiosreiuu2 = dabuino[Math.floor(Math.random() * dabuino.length)]
                var dominiosreiuu3 = dabuino[Math.floor(Math.random() * dabuino.length)]
                buceniulda = `*Você acaba de iniciar um jogo mortal RANDOM*\n\n${m}As regras deste jogo são bem simples, para jogar você basicamente deve escolher entre uma das três opções abaixo, neste caso as três opções são completamente aleatórias${m}\n\n_boa sorte kkkkkkkkk_`
                bones = fs.readFileSync("./lib/image/bones.jpg")
                sendButLocation(from, buceniulda, `*Escolha com sabedoria*`, { jpegThumbnail: bones }, [{
                  buttonId: `${prefix}${dominiosreiuu1}`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}${dominiosreiuu2}`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }, {
                  buttonId: `${prefix}${dominiosreiuu3}`,
                  buttonText: {
                    displayText: "."
                  },
                  type: 1
                }])
              }
            }

            break
          //END FUNÇÕES GRUPO
          //FUNÇÕES DONO
          case 'mek':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            reply(JSON.stringify(mek.message.extendedTextMessage.contextInfo, null, 3))
            break
          case 'ban':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            bnnd = body.slice(5)
            ban.push(`${bnnd}@s.whatsapp.net`)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Pronto papai, já bani essa pessoa, agora ela não poderá mais usar meus comandos`)
            console.log(color('NOVO USUARIO BANIDO'), '\nHora : ', color(time, 'yellow'))
            break
          case 'unban':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            bnnd = body.slice(7)
            ban.splice(`${bnnd}@s.whatsapp.net`, 1)
            fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
            reply(`Pronto papai, agora essa pessoa pode voltar a usar os meus comandos`)
            console.log(color('NOVO USUARIO DESBANIDO'), '\nHora : ', color(time, 'yellow'))
            break
          case 'addprem': //tobi
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            pru = '.\n'
            for (let _ of mentioned) {
              pru += `@${_.split('@')[0]}\n`
            }
            prem.push(`${mentioned}`)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
            susp = `Pronto, adicionei o @${mentioned[0].split('@')[0]} a minha lista de usuários premium`
            mentions(`${susp}`, mentioned, true)
            break
          case 'dellprem': //tobi
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            pru = '.\n'
            for (let _ of mentioned) {
              pru += `@${_.split('@')[0]}\n`
            }
            let dellprem = body.slice(12)
            let positio = prem.indexOf(dellprem)
            prem.splice(positio, 1)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
            susp = `Pronto, @${mentioned[0].split('@')[0]} foi removido da minha lista de usuários premium`
            mentions(`${susp}`, mentioned, true)
            break
          case 'block':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            LorranX.blockUser(`${body.slice(8)}@c.us`, "add")
            LorranX.sendMessage(from, `Pronto papai bloqueei esse filho da puta`, text)
            break;
          case 'blockcall':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            carandiru = q.replace('c.us', 's.whatsapp.net')
            contsw = LorranX.contacts[carandiru] || { notify: q.replace(/@.+/, '') }
            pushnamerr = contsw.notify || contsw.vname || contsw.name || '-'
            LorranX.sendMessage(q, `*Olá ${pushnamerr}, você será bloqueado, evite ligações na próxima vez ;-;*`, text, { contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            setTimeout(() => {
              LorranX.blockUser(q, "add")
            }, 1000)
            break;
          case 'unblock':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            LorranX.blockUser(`${body.slice(10)}@c.us`, "remove")
            LorranX.sendMessage(from, `Pronto papai, desbloqueei esse corno`, text)
            break;
          case 'setpp':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (!isQuotedImage) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiimage(), mek, sender)
            enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(enmedia)
            await LorranX.updateProfilePicture(botNumber, media)
            reply('Pronto papai, alterei minha foto de perfil')
            break;
          case 'setbio':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            iyek = body.slice(8)
            LorranX.setStatus(`${iyek}`)
            reply(`Pronto papai, alterei meu recado para: ${body.slice(8)}`)
            break
          case 'setname':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            anu = body.slice(9)
            LorranX.updateProfileName(anu)
            reply(`Pronto papai, alterei meu nome para: ${body.slice(9)}`)
            break
          case 'creategroup':
          case 'criargrupo':
          case 'criargp':
            textp = `*Eita zap, para usar alguns comandos é necessário que você seja um usuario premium, para se tornar premium basta entrar em contato com meu dono no link acima*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isOwner && !isPremium) return sendPREMbut()
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (!isGroup) return reply("Este comando só pode ser usado em grupos")
            if (args.length < 1) return reply(`Pra usar esse comando c tem que adicionar um nome pro grupo e marcar as pessoas pra adicionar`)
            argz = arg.split('|')
            if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              for (let i = 0; i < mentioned.length; i++) {
                anu = []
                anu.push(mentioned[i])
              }
              LorranX.groupCreate(argz[0], anu)
              reply(`Pronto, criei o grupo ${argz[0]}`)
            }
            break
          case 'join':
          case 'entrar':
            if (args.length === 0) return reply(`Pra eu entrar em um grupo c tem que usar um link válido\nExemplo: ${prefix}join _https://chat.whatsapp.com/acasxxzdsad2_`)
            if (!isOwner) return reply("Você não é meu papai")
            var link = q
            res = link.replace("https://chat.whatsapp.com/", "");
            done = await LorranX.acceptInvite(res)
            reply(`Pronto papai, entrei nesse grupo ai`)
            break;
          case 'autoread':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            textar = "*AUTO-READ 🌵*\n\n```Olá mamaco, ao ativar essa função, eu irei vizualizar toda e qualquer mensagem automaticamente```\n"
            if (!q) {
              if (autoread === false) return sendButLocation(from, textar, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/autoread.jpg") }, [{
                buttonId: `${prefix}autoread on`,
                buttonText: {
                  displayText: `☰ ATIVAR`
                },
                type: 1
              }])
              if (autoread === true) return sendButLocation(from, textar, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙀 𝙍𝙀𝘾𝙐𝙍𝙎𝙊 𝙀𝙎𝙏𝘼 𝘼𝙏𝙄𝙑𝘼𝘿𝙊*`, { jpegThumbnail: fs.readFileSync("./lib/image/autoread.jpg") }, [{
                buttonId: `${prefix}autoread off`,
                buttonText: {
                  displayText: `☰ DESATIVAR`
                },
                type: 1
              }])
            }
            if (q === "on") {
              autoread = true;
              reply("autoread ativado com sucesso")
            } else if (q === "off") {
              autoread = false;
              reply("autoread desativado com sucesso")
            }
            break;
          case 'self':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (args[0] === "on") {
              self = true;
              reply("Self-bot mod foi ativado")
            } else if (args[0] === "off") {
              self = false;
              reply("Self-bot mod foi desativado")
            }
            break;
          case 'selfmode':
            sendButtonMsg(from, `${isOwner == true ? "Olá papai\nescolha em qual modo eu devo operar" : "*Você não é meu papai 😡*"}`, `${DATACOMPLETA()}`, [{
              buttonId: `${prefix}self on`,
              buttonText: {
                displayText: `on`
              },
              type: 1
            }, {
              buttonId: `${prefix}self off`,
              buttonText: {
                displayText: 'off'
              },
              type: 1
            }])
            break;
          case 'setprefix':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            textpr = "```Olá mamaco, aqui você seleciona em qual modo eu devo operar, caso selecione (MULTI), eu responderei aos comandos indiferentemente do prefixo neles usado e caso selecione (ESPECÍFICO) eu responderei apenas a comandos com o prefixo preestabelecido```"
            sendButLocation(from, textpr, `Selecione uma das opções abaixo`, { jpegThumbnail: fs.readFileSync("./lib/image/setprefix.jpg") }, [{
              buttonId: `${prefix}multi`,
              buttonText: {
                displayText: `MULTI`
              },
              type: 1
            }, {
              buttonId: `${prefix}setprefixx`,
              buttonText: {
                displayText: 'ESPECIFICO'
              },
              type: 1
            }])
            break;
          case 'multi':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            multi = true
            LorranX.sendMessage(from, `PREFIX SETADO COMO : multi`, text, { contextInfo: { externalAdReply: { title: "⿻ ALTERAÇÃO DE PREFIX REALIZADA ⿻", body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/prefix.jpg') } } })
            break
          case 'setprefixx':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (args.length < 1) return reply(`${m}Olá mamaco${m}\n\n*Para definir o prefixo você deve usar o comando ${prefix}setprefixx + prefix desejado*\n\n*_exemplo: setprefixx #_*`)
            multi = false
            prefa = `${q}`
            LorranX.sendMessage(from, `PREFIX SETADO COMO : ${q}`, text, { contextInfo: { externalAdReply: { title: "⿻ ALTERAÇÃO DE PREFIX REALIZADA ⿻", body: "", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/prefix.jpg') } } })
            break
          case 'desligar':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            reply('Bot desligado')
            setTimeout(() => {
              LorranX.close()
            }, 3000)
            break;
          case 'kickall':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            members_id = []
            teks = (args.length > 1) ? body.slice(8).trim() : ''
            teks += '\n\n'
            for (let mem of groupMembers) {
              teks += `*Arquivei* ${mem.jid.split('@')[0]}\n`
              members_id.push(mem.jid)
            }
            mentions(teks, members_id, true)
            LorranX.groupRemove(from, members_id)
            break;
          case 'clearall':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            anu = await LorranX.chats.all()
            LorranX.setMaxListeners(25)
            for (let _ of anu) {
              LorranX.deleteChat(_.jid)
            }
            reply(`Pronto papai, limpei todos os meus chats`)
            break;
          case 'clearg':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            let totalcgroup = LorranX.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalcgroup) {
              LorranX.modifyChat(id, ChatModification.delete)
            }
            reply(`Pronto papai, limpei todos os meus grupos`)
            break;
          case 'clearpv':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            let totalpv = LorranX.chats.array.filter(u => !u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalpv) {
              LorranX.modifyChat(id, ChatModification.delete)
            }
            reply(`Pronto papai, limpei todos os chats`)
            break;
          case 'delchat':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            reply('Pronto papai, deletei esse chat ')
            console.log(from)
            LorranX.modifyChat(from, ChatModification.delete)
            break
          case 'eval':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            try {
              LorranX.sendMessage(from, JSON.stringify(eval(body.slice(6)), null, '\t'), text, { quoted: mek })
            } catch (e) {
              reply(String(e))
            }
            break;
          case 'leaveall':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            let totalgroup = LorranX.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            for (let id of totalgroup) {
              sendMessage(id, 'Byee', text)
              await sleep(3000)
              LorranX.groupLeave(id)
            }
          case 'tm':
            if (!isOwner) return reply(ind.ownerb())
            if (args.length < 1) return reply('Papai, as vezes eu acho que c é preto')
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            anu = await LorranX.chats.all()
            for (let _ of anu) {
              sendFooter(_.jid, texto1, texto2, mek, sender)
            }
            reply('Pronto papai, transmiti sua mensagem para todos os meus chats')
            break
          case 'atk':
            if (!q || isNaN(q)) return reply(`defina o numero corretamente`)
            iddosgrupos = client.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            texto = `ataque esse numero wa.me/${q}`
            for (let _ of iddosgrupos) {
              client.sendMessage(_, texto, text)
            }
            reply('mensagem transmitida com sucesso')
            break
          case 'tmgp':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            loc = sendButLocation
            img = sendButImage
            vid = sendButVideo
            iddosgrupos = LorranX.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
            if (isQuotedImage) {
              imagemtm = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              imgtm = await LorranX.downloadAndSaveMediaMessage(imagemtm)
            } else if (isQuotedVideo) {
              videotm = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              vidtm = await LorranX.downloadAndSaveMediaMessage(videotm)
            }
            for (let id of iddosgrupos) { await eval(`sendTMbut` + q) }
            break;
          case 'hidetmbut':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            loc = sendButLocation
            img = sendButImage
            vid = sendButVideo
            eval(`sendHideTMbut` + q)
            break;
          case "permitir":
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            textli = "*GRUPIN 👶🏼*\n\n```Olá mamaco, ao ativar esse recurso, eu permanecerei neste grupo mesmo que ele não cumpra com a exigencia minima de membros```\n"
            if (!isPermitido) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙉𝘼𝙊 𝙀𝙎𝙏𝙊𝙐 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝙊 𝘼 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝘾𝙀𝙍 𝘼𝙌𝙐𝙄*`, { jpegThumbnail: fs.readFileSync("./lib/image/grupin.jpg") }, [{
              buttonId: `${prefix}permitirr add`,
              buttonText: {
                displayText: `☰ PERMITIR`
              },
              type: 1
            }])
            if (isPermitido) return sendButLocation(from, textli, `*ᨁ 𝘼𝙏𝙐𝘼𝙇𝙈𝙀𝙉𝙏𝙀 𝙀𝙎𝙏𝙊𝙐 𝘼𝙐𝙏𝙊𝙍𝙄𝙕𝘼𝘿𝙊 𝘼 𝙋𝙀𝙍𝙈𝘼𝙉𝙀𝘾𝙀𝙍 𝘼𝙌𝙐𝙄*`, { jpegThumbnail: fs.readFileSync("./lib/image/grupin.jpg") }, [{
              buttonId: `${prefix}permitirr rm`,
              buttonText: {
                displayText: `☰ REMOVER`
              },
              type: 1
            }])
            break
          case 'pin':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            LorranX.modifyChat(from, ChatModification.pin)
            reply('*Chat fixado com sucesso*')
            break
          case 'unpin':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            LorranX.modifyChat(from, ChatModification.unpin)
            reply('*Pronto esse não é mais um dos meus chats fixados*')
            break
          case 'readall':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            var paraler = await LorranX.chats.all()
            paraler.map(async ({ jid }) => {
              await LorranX.chatRead(jid)
            })
            await LorranX.sendMessage(from, `Pronto, todos os chats foram lidos`, text, { quoted: mek })
            break
          case "tyste":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            let nãoadmins = groupMembers.filter(u => !groupAdmins.includes(u.jid)).map(u => u.jid)
            let fakesg = nãoadmins.filter(u => !u.startsWith('55')).map(u => u)
            for (let totalfake of fakesg) {
              await LorranX.groupRemove(from, [totalfake])
              if (totalfake.length <= 0) return reply(`Nenhum número fake no grupo atualmente`)
            }
            await reply(`Todos os números fake removidos com sucesso`)
            break
          case 'baninativos':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (!q || isNaN(q)) return sendFooter(from, RESPOSTAS.ui(), `*Defina a quantidade de mensagens a ser filtrada*`, mek, sender)
            if (args[0].length > 1) return reply('Formato incorreto/text invalido')
            filtrar = args[0]
            let timer = 0
            if (!q) filtrar = 1
            if (groupIdscount.indexOf(from) >= 0) {
              for (let obj of groupMembers) {
                if (numbersIds.indexOf(obj.jid) >= 0) {
                  var indnum = numbersIds.indexOf(obj.jid)
                  if (contador[ind].numbers[indnum].messages <= filtrar) {
                    if (groupAdmins.includes(obj.jid)) {
                      qmentions(`*O @${obj.jid.split('@')[0]} não cumpriu com a quantidade minima de mensagens mas como ele é adm, não estou autorizado a banir ele*`, [obj.jid], true, inativosq)
                    } else {
                      setTimeout(() => {
                        LorranX.groupRemove(from, [obj.jid])
                      }, timer);
                      timer += 1700
                    }
                  }
                } else {
                  if (groupAdmins.includes(obj.jid)) {
                    qmentions(`*O @${obj.jid.split('@')[0]} não cumpriu com a quantidade minima de mensagens mas como ele é adm, não estou autorizado a banir ele*`, [obj.jid], true, inativosq)
                  } else {
                    setTimeout(() => {
                      LorranX.groupRemove(from, [obj.jid])
                    }, timer);
                    timer += 1700
                  }
                }
              }
            }
            break
          case 'filtro':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            filtrar = args[0]
            if (!q) filtrar = 1
            macaco = `𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜`
            if (filtrar === `1`) macaco = `𝚖𝚎𝚗𝚜𝚊𝚐𝚎m`
            textofil = `*𝚖𝚎𝚖𝚋𝚛𝚘𝚜 𝚚𝚞𝚎 𝚎𝚗𝚟𝚒𝚊𝚛𝚊𝚖 ${filtrar} ${macaco}:*\n\n`
            ripzulip = []
            if (groupIdscount.indexOf(from) < 0) return reply('*Informações insuficientes para realizar consultas*')
            for (let obj of groupMembers) {
              if (args[0] != 0) {
                if (numbersIds.indexOf(obj.jid) >= 0) {
                  var indnum = numbersIds.indexOf(obj.jid)
                  if (contador[ind].numbers[indnum].messages == args[0]) {
                    textofil += `*⊳ @${obj.jid.split('@')[0]}*\n`
                    ripzulip.push(obj.jid)
                  }
                }
              } else {
                if (numbersIds.indexOf(obj.jid) < 0) {
                  textofil += `*⊳ @${obj.jid.split('@')[0]}*\n`
                  ripzulip.push(obj.jid)
                }
              }
            }
            xalana = `\n*𝚝𝚘𝚝𝚊𝚕: ${ripzulip.length}*\n`
            mentionsbut(``, `*𝚛𝚊𝚗𝚔 𝚒𝚗𝚊𝚝𝚒𝚟𝚘𝚜 ❗*\n\n`, ripzulip, true, `baninativos ${filtrar}`, `☰ BANIR INATIVOS`, textofil + xalana)
            break
          case 'check':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return reply(`${m}Para checkar sua atividade use ${prefix}perfil${m}`)
            if (groupIdscount.indexOf(from) < 0) return enviar('O bot não tem ainda dados sobre o grupo')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) {
              mentionedsdas = mek.message.extendedTextMessage.contextInfo.participant
              if (numbersIds.indexOf(mentionedsdas) >= 0) {
                desgreta = numbersIds.indexOf(mentionedsdas)
                sendFooter(from, `*𝚊𝚝𝚒𝚟𝚒𝚍𝚊𝚍𝚎 𝚍𝚘 @${mentionedsdas.split('@')[0]}❗*`, `*𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚎𝚗𝚟𝚒𝚊𝚍𝚊𝚜* : ${contador[ind].numbers[desgreta].messages ? contador[ind].numbers[desgreta].messages : "0"}\n*𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚛𝚎𝚚𝚞𝚒𝚜𝚒𝚝𝚊𝚍𝚘𝚜* : ${contador[ind].numbers[desgreta].cmd_messages ? contador[ind].numbers[desgreta].cmd_messages : "0"}`, mek, mentionedsdas)
              }
            } else if (q.length > 1) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
              if (numbersIds.indexOf(mentioned[0]) >= 0) {
                desgreta = numbersIds.indexOf(mentioned[0])
                mentionsbut(`não`, `*𝚊𝚝𝚒𝚟𝚒𝚍𝚊𝚍𝚎 𝚍𝚘 @${mentioned[0].split('@')[0]}❗*`, mentioned, true, ``, ``, `*𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚗𝚜 𝚎𝚗𝚟𝚒𝚊𝚍𝚊𝚜* : ${contador[ind].numbers[desgreta].messages ? contador[ind].numbers[desgreta].messages : "0"}\n*𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚛𝚎𝚚𝚞𝚒𝚜𝚒𝚝𝚊𝚍𝚘𝚜* : ${contador[ind].numbers[desgreta].cmd_messages ? contador[ind].numbers[desgreta].cmd_messages : "0"}`)
              }
            }
            break
          case 'afk':
            getReason = afk.getAfkReason(sender, _afk)
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (isAfkOn) return reply(`Bom, teoricamente vc ja está afk e deveria estar ${getReason}`)
            reason = q ? q : 'zulipe'
            mentions = m.mentionedJid[0] ? m.mentionedJid : ``
            afk.addAfkUser(sender, time3, reason, _afk, mentions)
            reply(`*Pronto mamaco, toda vez que alguem te marcar eu direi que vc esta ocupado* ${q ? q : ``}`)
            break
          case 'checkafk':
            getReason = afk.getAfkReason(sender, _afk)
            if (isAfkOn) return MentionedReply(`*Olá ${pushname} você está atualmente afk e deveria estar ${getReason}*`, mek)
            sendFooter(from, `_*Teoricamente você ainda não está afk*_`, `*Você pode ativar este recurso usando ${prefix}afk*`, mek, sender)

            break
          //END FUNÇÕES DONO
          //CONVERSORES
          case 'tourl':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo) && args.length == 0) {
              boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              owgi = await LorranX.downloadMediaMessage(boij)
              res = await upload(owgi)
              reply(res)
            } else {
              reply('Tu fez algo de errado aí')
            }
            addFilter(from)
            break
          case 'tomp3':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedVideo) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uivideo(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Deu errado carai :(')
              buffer = fs.readFileSync(ran)
              LorranX.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'contar':
            if (!q) return reply('0 caracteres')
            qpalavras = args.length
            qcaracteres = q.length
            if (qcaracteres === 1) {
              reply(`*Sua mensagem tem ${qpalavras} palavra com um total de ${qcaracteres} caractere*`)
            } else if (qcaracteres > 1 && qpalavras === 1) {
              reply(`*Sua mensagem tem ${qpalavras} palavra com um total de ${qcaracteres} caracteres*`)
            } else if (qcaracteres > 1 && qpalavras > 1) {
              reply(`*Sua mensagem tem ${qpalavras} palavras com um total de ${qcaracteres} caracteres*`)
            }
            break

          case 'togif':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedSticker) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uistk(), mek, sender)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
              encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              mediaaa = await LorranX.downloadAndSaveMediaMessage(encmediaaa)
              sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
              a = await webp2gifFile(mediaaa)
              mp4 = await getBuffer(a.result)
              LorranX.sendMessage(from, mp4, MessageType.video, {
                mimetype: 'video/gif',
                filename: `stick.gif`,
                quoted: mek,
              })
              fs.unlinkSync(mediaaa)
            }
            addFilter(from)
            break;
          case 'toimg':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedSticker) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uistk(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.png')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply(`*Deu errado macaco, tente novamente mais tarde*`)
              buffer = fs.readFileSync(ran)
              LorranX.sendMessage(from, buffer, image, { quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          //END CONVERSORES
          //DOWNLOADERS
          case 'mediafire':
            if (args.length < 1) return reply('Cadê o link macaco')
            if (!isUrl(args[0]) && !q.includes('mediafire')) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            res = await mediafireDl(q)
            tamanho = res[0].size
            tamanho2 = tamanho.replace(".", "").replace("MB", "")
            result =
              `_*MEDIA FIRE DL*_\n\n• 🛸 ${m}Nome do arquivo:${m} _${res[0].nama}_\n• 🐋 ${m}Tamanho do arquivo:${m} ${res[0].size}\n• 🔗 ${m}Link:${m} _${res[0].link}_\n\n\n *O processo de download do arquivo foi iniciado...*`
            reply(result)
            if (Number(tamanho2) >= 50000 && tamanho.endsWith(`GB`)) reply(`${m}O arquivo que você pediu excede o limite de tamanho do whatsapp, de qualquer forma eu irei tentar envia-lo, caso eu não consiga considere fazer o download do arquivo pelo link abaixo\n\n${res[0].link}${m}`)
            setTimeout(() => {
              reply(`${m}Caso não consiga abrir o arquivo diretamente pelo whatsapp basta procurar por${m} _*${res[0].nama}*_ ${m}no seu gerenciador de arquivos${m}`)
            }, 4500);
            sendFileFromUrl(res[0].link, document, ``, { mimetype: res[0].mime, filename: res[0].nama, quoted: mek })
            break
          case 'google':
          case 'googlesearch':
          case 'ggs':
            if (args.length < 1) return reply('C tem que mandar alguma coisa pra eu pesquisar')
            const pesquisag = args.join('')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            res = await ggs({ 'query': `${pesquisag}` })
            kant = ``
            for (let i of res) {
              kant += `
      • *Titulo* 🔎: ${i.title}
      
      • *Link* 🔗: *${i.link}*
      
      • *Informações encontradas* 📖: ${i.snippet}
      _________________________________________________________________________`
            }
            var akhir = kant.trim()
            reply(akhir)
            addFilter(from)
            break
          case 'wiki':
            if (args.length < 1) return reply('C tem que mandar alguma coisa pra eu pesquisar')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            logow = fs.readFileSync("./lib/image/logow.jpg")
            res = await wikiSearch(q).catch(e => {
              return reply('Ocorreu algum erro ao buscar seu resultado')
            })
            if (res[0].wiki.length <= 0) return reply(`*Não encontrei nenhum resultado preciso sobre o tema pesquisado*`)
            if (res[0].judul.length <= 5) res[0].judul = q
            result = `• ${m}Titulo${m} 🔎: *_${res[0].judul}_*\n\n• ${m}Informações encontradas${m} 📖: \n\n${res[0].wiki}`
            LorranX.sendMessage(from, logow, image, { quoted: mek, caption: result })
            break
          case 'gimage':
          case 'image':
          case 'img':
          case 'googleimage':
            if (args.length < 1) return reply('C tem que mandar alguma coisa pra eu pesquisar')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            res = await googleImage(q, google)
            function google(error, result) {
              if (error) { return reply('Eita, algo de errado aconteceu') }
              else {
                var gugIm = result
                var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
                sendButURL(random, sendButImage, `${m}Use o botâo abaixo caso queira obter um novo resultado para o mesmo assunto${m}`, `gimage ${q}`, `☰ PROXIMA IMAGEM`, `${m}Este é um dos resultados encontrados no google para ${q}${m}`).catch((err) => reply('error'))
              }
            }
            addFilter(from)
            break
          case 'tiktoknowmbut':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            ttdownloader(`${args[0]}`)
              .then(result => {
                const { wm, nowm, audio } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
                  .then(async (a) => {
                    reply(`Pronto mamaco, encontrei seu video, *caso eu não consiga enviar basta clicar no link abaixo*\n\n*Link* : ${a.data}`)
                    LorranX.sendMessage(from, { url: `${nowm}` }, video, { mimetype: 'video/mp4', quoted: mek, caption: `Tai seu video` })
                  })
              })
            break
          case 'tiktokbut':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            ttdownloader(`${args[0]}`)
              .then(result => {
                const { wm, nowm, audio } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
                  .then(async (a) => {
                    reply(`Pronto mamaco, encontrei seu video, *caso eu não consiga enviar basta clicar no link abaixo*\n\n*Link* : ${a.data}`)
                    LorranX.sendMessage(from, { url: `${wm}` }, video, { mimetype: 'video/mp4', quoted: mek, caption: `Tai seu video` })
                  })
              })
            break
          case 'tiktok':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q || !isUrl(args[0]) && !q.includes('tiktok.com')) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            tiktok = fs.readFileSync(`./lib/image/tiktok.jpg`)
            sendButLocation(from, `${m}${HORARIOS} ${pushname} ja estou procurando seu link aqui${m}`, `*Escolha o formato da midia a ser baixado*`, { jpegThumbnail: tiktok }, [{
              buttonId: `${prefix}tiktoknowmbut ${q}`,
              buttonText: {
                displayText: `SEM MARCA D'AGUA 🎥`
              },
              type: 1
            }, {
              buttonId: `${prefix}tiktokbut ${q}`,
              buttonText: {
                displayText: `VÍDEO 🎥`
              },
              type: 1
            }, {
              buttonId: `${prefix}tiktokabut ${q}`,
              buttonText: {
                displayText: 'ÁUDIO 🎵'
              },
              type: 1
            }])
            break;
          case 'tiktokabut':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            ttdownloader(`${args[0]}`)
              .then(result => {
                const { wm, nowm, audio } = result
                axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
                  .then(async (a) => {
                    reply(`Pronto mamaco, encontrei seu audio, *caso eu não consiga enviar basta clicar no link abaixo*\n\n*Link* : ${a.data}`)
                    LorranX.sendMessage(from, { url: `${audio}` }, MessageType.audio, { mimetype: 'audio/mp4', quoted: mek })
                  })
              })
            break
          case 'play2':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (args.length === 0) return reply(`Pra eu baixar a musica c tem que mandar um nome valido\nExemplo: *${prefix}play sertanejo*`)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            var srch = args.join('')
            find = await yts(srch)
            res = find.all
            thumber = res.image
            var reslink = res[0].url;
            var res2 = res[0]
            titulor = res2.title
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreMp3(reslink)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then(async (a) => {
                      fotinha = await getBuffer(thumber)
                      if (Number(atuzapi) >= 10000) return reply(`${m}O audio que você pediu excede o meu limite de 1 hora, para evitar conflitos não irei enviá-lo, tente baixar o audio usando o link abaixo\n\n${a.data}${m}`)
                      await sendMediaURL(link, `sim`).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply(`server error`)
            }
            addFilter(from)
            break;
          case 'meme':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (randomlinks.startsWith(`https://youtu.be`)) {
              reply(`${m}Aguarde, estou baixando um dos videos da minha lista de menes de baixa qualidade${m}`)
              ytdlcoreMp4(randomlinks)
                .then((res) => {
                  const { link } = res
                  sendButURL(link, sendButVideo, `${m}Achou o meme paia? clique no botão abaixo para receber outro${m}`, `meme`, `☰ NEXT`, `_*kapakapakapa*_`).catch((err) => reply('error'))
                })
            } else if (!randomlinks.startsWith(`https://youtu.be`)) {
              reply(`${m}Aguarde, estou baixando um dos videos da minha lista de menes de baixa qualidade${m}`)
              sendButURL(randomlinks, sendButVideo, `${m}Achou o meme paia? clique no botão abaixo para receber outro${m}`, `meme`, `☰ NEXT`, `_*kapakapakapa*_`).catch((err) => reply('error'))
            }
            addFilter(from)
            break;
          case 'pvideo':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o nome do video a ser pesquisado*`, mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            find = await yts(q)
            res = find.all
            var reslink = res[0].url;
            var res2 = res[0]
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreMp4(reslink)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 3500) return reply(`${m}O video que você pediu excede o meu limite de 35 minutos, para evitar conflitos não irei enviá-lo, tente baixar o video usando o link abaixo\n${a.data}${m}`)
                      await sendMediaURL(link, `sim`).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply('server error')
            }
            addFilter(from)
            break;
          case 'pvideofhd':
            if (!isOwner && !isPremium) return sendPREMbut()
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (args.length === 0) return reply(`Pra eu baixar esse video c tem que mandar um nome valido\nExemplo: *${prefix}pvideo macaco*`)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            var srch = args.join('')
            find = await yts(srch);
            res = find.all
            var reslink = res[0].url
            try {
              hdyt(reslink)
                .then((res) => {
                  const { dl_link, thumb, title, } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then(async (a) => {
                      fotinha = await getBuffer(thumb)
                      if (Number(atuzapi) >= 700) return reply(`${m}O video em fullhd que você pediu excede o meu limite de 7 minutos, para evitar conflitos não irei enviá-lo, tente baixar o video usando o link abaixo\n${a.data}${m}`)
                      LorranX.sendMessage(from, fotinha, image, { caption: `*PLAY VIDEO*\n\n*Titulo* : ${title}\n*Qualidade* : 1080p\n*Formato do arquivo* : MP4\n*Link* : ${a.data}\n\n_Ja vou baixar o seu video, pode ser que demore *pra caralho*, fica calmo ai carai_` })
                      await sendMediaURL(dl_link, `sim`).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply('server error')
            }
            addFilter(from)
            break;
          case 'play':
          case 'p':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o título a ser pesquisado*`, mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            try {
              find = await yts(q)
            } catch {
              return await reply("*Não encontrei nenhum resultado para o seu pedido*")
            }
            var zapfudido = "```Caso os botões não apareçam, vc ainda pode usar os comandos play2 e pvideo, usando .pgif você pode baixar videos em formato de gif```"
            if (isPremium) var zapfudido = "```Caso os botões não apareçam, vc ainda pode usar os comandos play2, pvideo e pvideofhd, usando .pgif você pode baixar videos em formato de gif```"
            res = find.videos
            var res2 = res[0]
            var reslink = res[0].url
            if (res === undefined || res2 === undefined || reslink === undefined) return reply("*Não encontrei nenhum resultado para o seu pedido*")
            var fedapouta = `*YT DL*\n\n• ☕ *Titulo* : _${res2.title ? res2.title : `.`}_\n\n• 👤 *Postado por* : _${res2.author ? res2.author.name : `.`}_\n\n• 🕰️ *Publicado a* : _${res2.ago ? res2.ago : `.`}_\n\n• ♨️ *Vizulizações* : _${res2.views ? res2.views : `.`} views_\n\n• ⏱️ *Duração* : _${res2.timestamp ? res2.timestamp : `.`}_`
            var tumalaca122 = `*YT DL PREMIUM*\n\n• ☕ *Titulo* : _${res2.title ? res2.title : `.`}_\n\n• 👤 *Postado por* : _${res2.author ? res2.author.name : `.`}_\n\n• 🕰️ *Publicado a* : _${res2.ago ? res2.ago : `.`}_\n\n• ♨️ *Vizulizações* : _${res2.views ? res2.views : `.`} views_\n\n• ⏱️ *Duração* : _${res2.timestamp ? res2.timestamp : `.`}_`
            desgraça2 = await getBuffer(res2.image);
            if (!isPremium && !isOwner) {
              await sendButImage(from, fedapouta, `*Escolha a midia a ser baixada 🦧*`, desgraça2, [{
                buttonId: `${prefix}playbut ${reslink}`,
                buttonText: {
                  displayText: "ÁUDIO 🎵"
                },
                type: 1
              }, {
                buttonId: `.pvideobut ${reslink}`,
                buttonText: {
                  displayText: "VÍDEO 🎥"
                },
                type: 1
              }])
              await setTimeout(() => {
                reply(zapfudido)
              }, 700);
            } else {
              await sendButImage(from, tumalaca122, `*Escolha a midia a ser baixada 🦧*`, desgraça2, [{
                buttonId: `${prefix}playbut ${reslink}`,
                buttonText: {
                  displayText: "ÁUDIO 🎵"
                },
                type: 1
              }, {
                buttonId: `.pvideobut ${reslink}`,
                buttonText: {
                  displayText: "VÍDEO 🎥"
                },
                type: 1
              }, {
                buttonId: `${prefix}pvideofhdbut ${reslink}`,
                buttonText: {
                  displayText: "VÍDEO FHD 🎥"
                },
                type: 1
              }])
              await setTimeout(() => {
                reply(zapfudido)
              }, 700);
            }
            addFilter(from)
            break;
          case 'ytmp3':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            var link = q.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!q || !link) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            try {
              ytdlcoreMp3(q)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then((a) => {
                      /*     const caption = `*Achei carai*\n\n*Titulo* : ${title}\n*Qualidade* : 144p\n*Formato* : MP3\n\n_Ja vou baixar o seu audio, pode ser que demore um pouco, fica calmo ai carai_`
                           sendMediaURL(thumb, caption) */
                      sendMediaURL(link).catch(() => reply("file error"))
                    })
                })
            } catch (e) {
              reply("error server")
            }
            addFilter(from)
            break;
          case 'ytmp4':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })

            var link = q.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!q || !link) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            try {
              ytdlcoreMp4(q)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then((a) => {
                      /*   const caption = `*Achei carai*\n\n*Titulo* : ${title}\n*Qualidade* : 360p\n*Formato* : MP4\n\n_Ja vou baixar o seu video, pode ser que demore um pouco, fica calmo ai carai_`
                         sendMediaURL(thumb, caption) */
                      sendMediaURL(link).catch(() => reply("file error"))
                    })
                })
            } catch (e) {
              reply("error server")
            }
            addFilter(from)
            break;
          case 'ytfhd':
            textp = `*Eita zap, para usar alguns comandos é necessário que você seja um usuario premium, para se tornar premium basta entrar em contato com meu dono no link acima*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isOwner && !isPremium) return sendPREMbut()
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (args.length < 1) return reply('Pra eu baixar o video c tem que usar um link valido do youtube')
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            var link = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!link) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            try {
              hdyt(args[0])
                .then((res) => {
                  const { dl_link, thumb, title } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then((a) => {
                      const caption = `*Achei carai*\n\n*Titulo* : ${title}\n*Qualidade* : 1080p\n*Formato* : MP4\n\n_Ja vou baixar o seu video, pode ser que demore *pra caralho*, fica calmo ai carai_`
                      sendMediaURL(thumb, caption)
                      sendMediaURL(dl_link).catch(() => reply("file error"))
                    })
                })
            } catch (e) {
              reply("error server")
            }
            addFilter(from)
            break;
          case 'twitter':
            if (!q) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isUrl(args[0]) && !q.includes('twitter.com') && !q) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            var res = await hx.twitter(args[0])
            sendMediaURL(res.HD, "Tai seu video")
            addFilter(from)
            break;
          case 'ig':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            if (!isUrl(q) && !args[0].includes('instagram.com')) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uilink(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            hx.igdl(args[0]).then(async (result) => {
              for (let i of result.medias) {
                if (i.url.includes('mp4')) {
                  let link = await getBuffer(i.url)
                  LorranX.sendMessage(from, link, video, { quoted: mek, caption: `Tai seu video` })
                } else {
                  let link = await getBuffer(i.url)
                  LorranX.sendMessage(from, link, image, { quoted: mek, caption: `Tai sua foto` })
                }
              }
            });
            addFilter(from)
            break;
          case "pinterest":
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o assunto a ser pesquisado*`, mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            let pin = await pinterest(q);
            let ac = pin[Math.floor(Math.random() * pin.length)];
            if (ac === undefined) return reply(`*Não consegui encontrar um resltado pra sua pesquisa*`)
            let di = await getBuffer(ac);
            await sendButImage(from, `${m}Este é um dos resultados para ${q} que encontrei no pinterest${m}`, `${m}Use o botâo abaixo caso queira obter um novo resultado para o mesmo assunto${m}`, di, [{
              buttonId: `${prefix}pinterest ${q}`,
              buttonText: {
                displayText: `☰ PROXIMA IMAGEM`
              },
              type: 1
            }], { quoted: mek })
            addFilter(from)
            break;
          case 'igstory':
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o username a pesquisado*`, mek, sender)
            hx.igstory(q)
              .then(async result => {
                for (let i of result.medias) {
                  if (i.url.includes('mp4')) {
                    let link = await getBuffer(i.url)
                    LorranX.sendMessage(from, link, video, { quoted: mek, caption: `Type : ${i.type}` })
                  } else {
                    let link = await getBuffer(i.url)
                    LorranX.sendMessage(from, link, image, { quoted: mek, caption: `Type : ${i.type}` })
                  }
                }
              });
            addFilter(from)
            break;
          case 'igstalk':
            pop = ``
            von = ``
            pom = ``
            zulimpo = await thiccysapi.insta_profile(q)
            console.log(zulimpo)
            /*  fotinhaa = await getBuffer(zulimpo.profilePicHD)
              zulimpo.isPrivate === false ? pop = `𝚙𝚞́𝚋𝚕𝚒𝚌𝚊` : pop = `𝚙𝚛𝚒𝚟𝚊𝚍𝚊`
              zulimpo.isVerified === false ? von = `𝚗𝚊̃𝚘 𝚎́` : von = `𝚎́`
              zulimpo.postsCount > 1 ? pom = `${zulimpo.postsCount} 𝚏𝚘𝚝𝚘𝚜` : pom = `𝚊𝚙𝚎𝚗𝚊𝚜 ${zulimpo.postsCount} 𝚏𝚘𝚝𝚘`
          zulimpo ?  await sendButImage(from, `*𝚙𝚎𝚛𝚏𝚒𝚕 𝚍𝚘 _@${zulimpo.username}_ 𝚗𝚘 𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 🤳🏻*`,`\n\n𝚊 𝚌𝚘𝚗𝚝𝚊 𝚍𝚘 ${zulimpo.fullName} ${von} 𝚟𝚎𝚛𝚒𝚏𝚒𝚌𝚊𝚍𝚊 𝚎 𝚊𝚝𝚞𝚊𝚕𝚖𝚎𝚗𝚝𝚎 𝚎𝚜𝚝𝚊́ ${pop}, 𝚎𝚕𝚎 𝚜𝚎𝚐𝚞𝚎 ${zulimpo.following} 𝚙𝚎𝚜𝚜𝚘𝚊𝚜 𝚎 𝚎́ 𝚜𝚎𝚐𝚞𝚒𝚍𝚘 𝚙𝚘𝚛 ${zulimpo.followers} 𝚙𝚎𝚜𝚜𝚘𝚊𝚜, 𝚎𝚜𝚝𝚎 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚘𝚜𝚝𝚘𝚞 ${pom}`, fotinhaa,[{
                buttonId:`${prefix}pinterest ${q}`,
                buttonText: {
                  displayText: `☰ PROXIMA IMAGEM`
                },
                type: 1
              }],{quoted: mek}) : reply(`Usuario não encontrado`)
              console.log(zulimpo)
        */
            break
          //END DOWNLOADERS
          case 'probabilidade':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina uma probabilidade a ser calculada*`, mek, sender)
            macacozapzap = fs.readFileSync("./lib/image/macacoprob.jpg")
            const ra = ['99', '7', '1000', '-10', '31', '0', '4', '9', '17', '28', '34', '48', '59', '62', '100', '29', '94', '75', '41', '39', '15', '99999999999']
            const te = ra[Math.floor(Math.random() * ra.length)]
            LorranX.sendMessage(from, `*𝚋𝚘𝚖, 𝚍𝚎 𝚊𝚌𝚘𝚛𝚍𝚘 𝚌𝚘𝚖 𝚖𝚎𝚞𝚜 𝚌𝚊𝚕𝚌𝚞𝚕𝚘𝚜 100% 𝚌𝚘𝚗𝚏𝚒𝚊𝚟𝚎𝚒𝚜*\n\n*𝚙𝚘𝚜𝚜𝚘 𝚌𝚘𝚗𝚌𝚕𝚞𝚒𝚛 𝚚𝚞𝚎 𝚊 𝚙𝚛𝚘𝚋𝚊𝚋𝚒𝚕𝚒𝚍𝚊𝚍𝚎 ${q} 𝚎́ 𝚍𝚎 ${te}%*`, text, { contextInfo: { "externalAdReply": { "title": ``, "body": '', "mediaType": 2, "previewType": 2, "thumbnail": macacozapzap, "mediaUrl": `https://youtu.be/DFyDaoBGlAA` } } })
            addFilter(from)
            break;
          case '%gay':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            macacozapzap = fs.readFileSync("./lib/image/%gay.jpg")
            gay = ['99', '7', '1000', '-10', '31', '0', '4', '9', '17', '28', '34', '48', '59', '62', '100', '29', '94', '75', '41', '39']
            jabs = gay[Math.floor(Math.random() * gay.length)]
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            if (!q) {
              zuligay22 = mek.message.extendedTextMessage.contextInfo.participant
              LorranX.sendMessage(from, `*𝚋𝚘𝚖, 𝚍𝚎 𝚊𝚌𝚘𝚛𝚍𝚘 𝚌𝚘𝚖 𝚖𝚎𝚞𝚜 𝚌𝚊𝚕𝚌𝚞𝚕𝚘𝚜 100% 𝚌𝚘𝚗𝚏𝚒𝚊𝚟𝚎𝚒𝚜*\n\n*_𝚙𝚘𝚜𝚜𝚘 𝚌𝚘𝚗𝚌𝚕𝚞𝚒𝚛 𝚚𝚞𝚎 𝚘 @${zuligay22.split('@')[0]} 𝚎́ ${jabs}% 𝚐𝚊𝚢_*`, text, { contextInfo: { "externalAdReply": { "title": ``, "body": '', "mediaType": 2, "previewType": 2, "thumbnail": macacozapzap, "mediaUrl": `https://youtu.be/DFyDaoBGlAA` }, "mentionedJid": [zuligay22] } })
            } else if (q.length > 1) {
              zuligay33 = mek.message.extendedTextMessage.contextInfo.mentionedJid
              LorranX.sendMessage(from, `*𝚋𝚘𝚖, 𝚍𝚎 𝚊𝚌𝚘𝚛𝚍𝚘 𝚌𝚘𝚖 𝚖𝚎𝚞𝚜 𝚌𝚊𝚕𝚌𝚞𝚕𝚘𝚜 100% 𝚌𝚘𝚗𝚏𝚒𝚊𝚟𝚎𝚒𝚜*\n\n*_𝚙𝚘𝚜𝚜𝚘 𝚌𝚘𝚗𝚌𝚕𝚞𝚒𝚛 𝚚𝚞𝚎 𝚘 @${zuligay33[0].split('@')[0]} 𝚎́ ${jabs}% 𝚐𝚊𝚢_*`, text, { contextInfo: { "externalAdReply": { "title": ``, "body": '', "mediaType": 2, "previewType": 2, "thumbnail": macacozapzap, "mediaUrl": `https://youtu.be/DFyDaoBGlAA` }, "mentionedJid": [zuligay33[0]] } })
            }
            addFilter(from)
            break;
          case 'dado':
          case 'dadin':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            random = Math.floor(Math.random() * 6) + 1
            dados = fs.readFileSync(`./lib/dadin/${random}.webp`)
            LorranX.sendMessage(from, dados, sticker, { quoted: mek })
            addFilter(from)
            break;
          //MODIFICAR AUDIO
          case 'slowmo':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              uhh = fs.readFileSync(ran)
              LorranX.sendMessage(from, uhh, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'acelerar':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'distorcer':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a aphaser=delay=4.5:speed=0.1:decay=0.7 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'esquilo':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'engrossar':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'bass':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'estourar':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case "reverse":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
              .message.extendedTextMessage.contextInfo;
            media = await LorranX.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".mp3");
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
              fs.unlinkSync(media);
              if (err) return reply(`Error!`);
              hah = fs.readFileSync(ran);
              LorranX.sendMessage(from, hah, audio, { mimetype: "audio/mp4", ptt: true, quoted: mek, });
              fs.unlinkSync(ran);
            });
            addFilter(from)
            break;
          case 'teste':
            SendButDocument(from, `oi`, `oi`, fs.readFileSync('./lib/image/pdf.pdf'), { mimetype: "application/pdf", thumbnail: fs.readFileSync('./lib/image/cassino.jpg'), filename: `bodia.pdf`, pageCount: 9999999, fileLength: 999999999999999999 }, [{
              buttonId: `${prefix}playsuitrr tesoura`,
              buttonText: {
                displayText: 'Tesoura ✂️'
              },
              type: 1
            }])
            break
          case 'robot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break;
          case 'vibrar':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedAudio) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uiaudio(), mek, sender)
            LorranX.updatePresence(from, Presence.recording)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait2(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply('Error!')
              hah = fs.readFileSync(ran)
              LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
              fs.unlinkSync(ran)
            })
            addFilter(from)
            break
          //END MODIFICAR AUDIO
          //MODIFICAR VIDEO
          case 'detikvideo':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedVideo) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uivideo(), mek, sender)
            encmedian = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
            median = await LorranX.downloadAndSaveMediaMessage(encmedian)
            temposexual = Number(args[0])
            hah = fs.readFileSync(median)
            LorranX.sendMessage(from, hah, video, { mimetype: 'video/mp4', duration: temposexual, quoted: mek })
            fs.unlinkSync(median)
            addFilter(from)
            break
          case 'detikvn':
            if (isBanned) return reply(mess.ban)

            encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            mediam = await LorranX.downloadAndSaveMediaMessage(encmediam)
            cokmatane = Number(args[0])
            hah = fs.readFileSync(mediam)
            LorranX.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted: mek })
            fs.unlinkSync(mediam)
            addFilter(from)
            break
          case "reversev":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedVideo) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uivideo(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            encmedian = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
            media = await LorranX.downloadAndSaveMediaMessage(encmedian);
            ran = getRandom(".mp4");
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
              fs.unlinkSync(media);
              if (err) return reply(`Error!`);
              buffer453 = fs.readFileSync(ran);
              LorranX.sendMessage(from, buffer453, video, {
                mimetype: "video/mp4",
                quoted: mek,
              });
              fs.unlinkSync(ran);
            });
            addFilter(from)
            break;
          case "acelerarv":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedVideo) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uivideo(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
              .message.extendedTextMessage.contextInfo;
            media = await LorranX.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
              (err) => {
                fs.unlinkSync(media);
                if (err) return reply(`Error!`);
                buffer453 = fs.readFileSync(ran);
                LorranX.sendMessage(from, buffer453, video, {
                  mimetype: "video/mp4",
                  quoted: mek,
                });
                fs.unlinkSync(ran);
              }
            );
            addFilter(from)
            break;
          case "slowv":
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isQuotedVideo) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uivideo(), mek, sender)
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
              .message.extendedTextMessage.contextInfo;
            media = await LorranX.downloadAndSaveMediaMessage(encmedia);
            ran = getRandom(".mp4");
            exec(
              `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
              (err) => {
                fs.unlinkSync(media);
                if (err) return reply(`Error!`);
                buffer453 = fs.readFileSync(ran);
                LorranX.sendMessage(from, buffer453, video, {
                  mimetype: "video/mp4",
                  quoted: mek,
                });
                fs.unlinkSync(ran);
              }
            );
            addFilter(from)
            break;
          //END MODIFICADORES VIDEO
          case 'lirik':
          case 'letra':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o nome da musica a ser procurada*`, mek, sender)
            MentionedReply(`*Aguarde, procurando pela sua musica*`)
            let song = await hx.lirik(q);
            if (song.lirik === undefined) return reply(`*Musica não encontrada*`)
            try {
              sendButURL(song.thumb, sendButImage, `_*Você pode fazer o download da musica acima clicando no botão abaixo, o resultado pouco ser um pouco impreciso, tudo dependera de como o nome da musica foi pesquisado*_`, `plirik ${q}`, `☰ BAIXAR ESSA MUSICA`, `_*${q}*_\n\n\n${m}${song.lirik}${m}\n`).catch((err) => reply('error'))
            } catch (error) { reply(`Não consegui encontrar sua musica`) }
            addFilter(from)
            break;
          case 'plirik':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            find = await yts(q)
            res = find.all
            var reslink = res[0].url;
            var res2 = res[0]
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreMp3(reslink)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 10000) return reply(`${m}O audio que você pediu excede o meu limite de 1 hora, para evitar conflitos não irei enviá-lo, tente baixar o audio usando o link abaixo\n\n${a.data}${m}`)
                      await sendMediaURL(link, `sim`).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply(`server error`)
            }
            addFilter(from)
            break;
          case 'playstore':
            if (!q) return sendFooter(from, RESPOSTAS.ui(), `*Defina o nome do app a ser pesquisado*`, mek, sender)
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play) {
              store += `\n*「 *PLAY STORE* 」*\n
      - *Nome do app* : ${i.name}
      - *Link para download* : ${i.link}\n
      - *Dev* : ${i.developer}
      - *Pagina do desenvolvedor* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            addFilter(from)
          case 'zap':
            img = await getBuffer
            let lasterw = `Estas são as ultimas atualizações encontradas no site whatsappmods.net`
            let zap = await hx.zapzap()
            let sammods = ''
            for (let i of zap) {
              sammods += `〘 ${m}Whatsapp Mods${m} 〙\n
        - *Zap* : ${i.titulos}\n
        - *Link para download* : ${i.linkus}\n
      \n─────────────────────\n`
              img = await getBuffer(i.tubinail)
            }
            LorranX.sendMessage(from, img, image, { caption: `${lasterw}\n\n${sammods}` })
            addFilter(from)
            break
          case 'serbot':
          case 'jadibot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isOwner && mek.key.fromMe) return reply("Eita zapo, como c quer ser um bot sendo que vc ja é um bot")
            jadibot(reply, LorranX, from)
            break;
          case 'stopjadibot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (mek.key.fromMe) return reply("```Eita, você nao pode parar os bots secundarios```")
            stopjadibot(reply)
            break;
          case 'listjadibot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            teks = "*[ LISTA DE PESSOAS CONECTADAS ]*"
            for (let i of listjadibot) {
              teks += `\n\n\n• *Numero* : ${i.jid.split('@')[0]}\n\n• *Nome* : ${i.name}\n\n• *Marca* : ${i.phone.device_manufacturer}\n\n• *Modelo* : ${i.phone.device_model}\n\n`
            }
            reply(teks)
            break;
          case 'ppt':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textppt = "```Agora eu e você estamos em uma das batalhas mais feroses e mortais das nossas vidas, c acha que pode ganhar de mim?```"
            reply(`Iniciando pedra papel tesoura...`)
            setTimeout(() => {
              sendButLocation(from, textppt, `${pushname} escolha uma das opções abaixo`, { jpegThumbnail: fs.readFileSync("./lib/image/ppt.jpg") }, [{
                buttonId: `${prefix}playsuitrr pedra`,
                buttonText: {
                  displayText: `Pedra 🪨`
                },
                type: 1
              }, {
                buttonId: `${prefix}playsuitrr papel`,
                buttonText: {
                  displayText: 'Papel 📜'
                },
                type: 1
              }, {
                buttonId: `${prefix}playsuitrr tesoura`,
                buttonText: {
                  displayText: 'Tesoura ✂️'
                },
                type: 1
              }])
            }, 800);
            addFilter(from)
            break;
          case 'playsuitrr':
            pptv = fs.readFileSync("./lib/image/pptv.mp4")
            LorranX.sendMessage(from, pptv, video, { mimetype: "video/gif", quoted: magagoppt })
            setTimeout(() => {
              if (args[0] === "tesoura") {
                gunting = [
                  "Você jogou *tesoura*\nEu joguei *papel*\nC ganhou 😔",
                  "Você jogou *tesoura*\nEu joguei *pedra*\nEu ganhei 🙂",
                  "Você jogou *tesoura*\nEu joguei *tesoura*\nDigamos que a gnt empatou",
                  "Foda-se man\nEu ganhei saporra\nNem adianta discutir 🤨 "
                ]
                gun = gunting[Math.floor(Math.random() * gunting.length)]
                reply(gun)
              } else if (args[0] === 'papel') {
                ker = [
                  "Você jogou *papel*\nEu joguei *pedra*\nC ganhou 😔",
                  "Você jogou *papel*\nEu joguei *tesoura*\nEu ganhei 🙂",
                  "Você jogou *papel*\nEu joguei *papel*\nDigamos que a gnt empatou",
                  "Foda-se man\nEu ganhei saporra\nNem adianta discutir 🤨 "
                ]
                kertas = ker[Math.floor(Math.random() * ker.length)]
                reply(kertas)
              } else if (args[0] === 'pedra') {
                bat = [
                  "Você jogou *pedra*\nEu joguei *tesoura*\nC ganhou 😔",
                  "Você jogou *pedra*\nEu joguei *papel*\nEu ganhei 🙂",
                  "Você jogou *pedra*\nEu joguei *pedra*\nDigamos que a gnt empatou",
                  "Foda-se man\nEu ganhei saporra\nNem adianta discutir 🤨 "
                ]
                batu = bat[Math.floor(Math.random() * bat.length)]
                reply(batu)
              } else {
                reply('Pilih gunting/batu/kertas')
              }
            }, 2300)
            addFilter(from)
            break;
          case 'slot':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isRegister) return sendREGbut()
            arizap = fs.readFileSync('./lib/image/mão2.jpg')
            desgraça = 200
            dinhos = `${m}Você não tem dinheiro suficiente para jogar, interaja com o bot ou nos grupos para conseguir mais pontos${m}`
            zulinico = desgraça - checkATMuser(sender)
            if (checkATMuser(sender) < desgraça) return sendButLocation(from, dinhos, `${m}Você precisa de mais ${zulinico} pontos pra jogar novamente${m}`, { jpegThumbnail: arizap }, [{
              buttonId: `asddasdasdxxzxz`,
              buttonText: {
                displayText: `OK ADM 🐵`
              },
              type: 1
            }], { quoted: mek })
            confirmATM(sender, desgraça)
            gameslot()
            break;
          case 'calunia':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return sendFooter(from, RESPOSTAS.ui(), RESPOSTAS.uitag(), mek, sender)
            texto1 = q.split('|')[0] ? q.split('|')[0] : ``
            texto2 = q.split('|')[1] ? q.split('|')[1] : ``
            retirar = mentionByTag[0].replace(`@s.whatsapp.net`, ``)
            console.log(retirar)
            if (q.includes(`@`)) return calunia(mentionByTag[0], texto1, texto2, retirar)
            else calunia(mentionByreply, texto1, texto2)
            break
          case 'caripesan':
            if (args.length < 1) return reply(`query salah\ncontoh ${prefix}caripesan Hi|5`)
            if (q.includes("|")) {
              try {
                jum = q.split("|")[1]
                if (jum > 10) return reply("jumblah terlalu banyak\nminimal: 10")
                to = parseInt(jum) + 1
                res = await LorranX.searchMessages(q.split(0), from, to, 1)
                if (res.messages.length < 2) return reply("pesan tidak di temukan")
                if (res.messages.length < parseInt(to)) reply(`hanya di temukan ${res.messages.length - 1} pesan`)
                for (let i = 1; i < res.messages.length; i++) {
                  if (res.messages[i].message) {
                    LorranX.sendMessage(from, "nih pesan nya!!", text, { quoted: res.messages[i] })
                  }
                }
              } catch (e) {
                reply("maaf error:)\ncoba lagi")
              }
            } else {
              return (`maaf masukan query yang benar\ncontoh: ${prefix}${command} halo|5`)
            }
            break;

          // PARA JM
          case 'bazucanenem':
            if (!isGroupAdmins) return reply(`*Somente admins podem jogar nessa rodada*`)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Você escolheu uma das opções e acaba sendo demitido do cargo de adm, Felizmente não vai fazer tanta diferença assim${m}`, text, { quoted: mek })
            }, 2000);
            setTimeout(() => {
              LorranX.groupDemoteAdmin(from, [sender])
            }, 2000);
            addFilter(from)
            break
          case 'matadordeporco':
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            helo = fs.readFileSync("./lib/image/magagfo.jpg")
            const batuta = getFrom(from)
            const qwweqeqwewewqeqweqwesss = getSender(sender)
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Você escolheu uma das opções e acaba sendo banido, F chat${m}`, text, { quoted: mek })
              LorranX.sendMessage(sender, `Eita, ${pushname}, parece que tu se fudeu kkkkkkkkkkkkkkkkk, mas rlx dei duas opções pros caras la no grupo, mandar tu se fuder ou te adicionar de volta, agr é so esperar`, text)
            }, 2000);
            setTimeout(() => {
              LorranX.groupRemove(from, [sender])
            }, 4000);
            setTimeout(() => {
              sendButLocation(from, `${m}Bom, se voces quiserem eu posso adicionar ele dnv${m}`, `${m}Selecione uma das opções abaixo${m}`, { jpegThumbnail: helo }, [{
                buttonId: `${prefix}asoddlldlddlldlaspppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss}`,
                buttonText: {
                  displayText: `ADICIONAR`
                },
                type: 1
              }, {
                buttonId: `${prefix}asodsdsadasdasdasdsadsadadsadasdasdasppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss}`,
                buttonText: {
                  displayText: 'MANDAR ELE SE FUDER'
                },
                type: 1
              }])
            }, 5000);
            break
          case 'asoddlldlddlldlaspppaspapapappsppspspsps':
            LorranX.groupAdd(from, [q])
            break
          case 'asodsdsadasdasdasdsadsadadsadasdasdasppaspapapappsppspspsps':
            LorranX.sendMessage(q, `${m}Eita, os cara mandaram tu se fuderkkkkkkkkkkkkkkkkkkkkkkkkkk${m}`, text, { quoted: mek, contextInfo: { externalAdReply: { title: `MENSAGEM ENVIADA POR ${pushname}`, previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/dedin.jpg') } } })
            break
          case 'matadordeporco2':
            if (!isGroupAdmins) return reply(`*Somente admins podem jogar nessa rodada*`)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            helo = fs.readFileSync("./lib/image/magagfo.jpg")
            const qwweqeqwewewqeqweqwesss2 = getSender(sender)
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Você escolheu uma das opções e acaba sendo banido, F chat${m}`, text, { quoted: mek })
              LorranX.sendMessage(sender, `Eita, ${pushname}, parece que tu se fudeu kkkkkkkkkkkkkkkkk, mas rlx dei duas opções pros caras la no grupo, mandar tu se fuder ou te adicionar de volta, agr é so esperar`, text)
            }, 2000);
            setTimeout(() => {
              LorranX.groupRemove(from, [sender])
            }, 4000);
            setTimeout(() => {
              sendButLocation(from, `${m}Bom, se voces quiserem eu posso adicionar ele dnv${m}`, `${m}Selecione uma das opções abaixo${m}`, { jpegThumbnail: helo }, [{
                buttonId: `${prefix}asoddlldlddlldlaspppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss2}`,
                buttonText: {
                  displayText: `ADICIONAR`
                },
                type: 1
              }, {
                buttonId: `${prefix}asodsdsadasdasdasdsadsadadsadasdasdasppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss2}`,
                buttonText: {
                  displayText: 'MANDAR ELE SE FUDER'
                },
                type: 1
              }])
            }, 5000);
            break
          case 'matadordeporco3':
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            helo = fs.readFileSync("./lib/image/magagfo.jpg")
            const qwweqeqwewewqeqweqwesss3 = getSender(sender)
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Você escolheu uma das opções e acaba sendo banido, F chat${m}`, text, { quoted: mek })
              LorranX.sendMessage(sender, `Eita, ${pushname}, parece que tu se fudeu kkkkkkkkkkkkkkkkk, mas rlx dei duas opções pros caras la no grupo, mandar tu se fuder ou te adicionar de volta, agr é so esperar`, text)
            }, 2000);
            setTimeout(() => {
              LorranX.groupRemove(from, [sender])
            }, 4000);
            setTimeout(() => {
              sendButLocation(from, `${m}Bom, se voces quiserem eu posso adicionar ele dnv${m}`, `${m}Selecione uma das opções abaixo${m}`, { jpegThumbnail: helo }, [{
                buttonId: `${prefix}asoddlldlddlldlaspppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss3}`,
                buttonText: {
                  displayText: `ADICIONAR`
                },
                type: 1
              }, {
                buttonId: `${prefix}asodsdsadasdasdasdsadsadadsadasdasdasppaspapapappsppspspsps ${qwweqeqwewewqeqweqwesss3}`,
                buttonText: {
                  displayText: 'MANDAR ELE SE FUDER'
                },
                type: 1
              }])
            }, 5000);
            break
          case 'ramdolaaa':
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Você escolheu uma das opções e nada aconteceu, mas veja pelo lado bom, vc poderia ter sido banido${m}`, text, { quoted: mek })
            }, 2000);
            break
          case 'butequinhosaboroso':
            const labuetaxxxq = [99, 7, 700, 40000, 100000, 1000, 999, 2000, 780, 99, 11, 88, 500, 5, 777, 666, 1200, 149, 323, 175, 429, 111, 2877]
            const abutecado = labuetaxxxq[Math.floor(Math.random() * labuetaxxxq.length)]
            addKoinUser(sender, abutecado)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `*「 𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳 」*\n\n${m}Você escolheu uma das opções e acaba ganhando ${abutecado} pontos${m}`, text, { quoted: mek })
            }, 2000);
            break
          case 'butequinhosaboroso2':
            if (!isGroupAdmins) return reply(`*Somente admins podem jogar nessa rodada*`)
            const labueta = [99, 7, 1000, 999, 2000, 780, 99, 11, 88, 500, 5, 777, 666, 1200, 149, 323, 175, 429, 111, 2877]
            const abutecadoqwqwqwqw = labueta[Math.floor(Math.random() * labueta.length)]
            addKoinUser(sender, abutecadoqwqwqwqw)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `*「 𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳 」*\n\n${m}Você escolheu uma das opções e acaba ganhando ${abutecadoqwqwqwqw} pontos${m}`, text, { quoted: mek })
            }, 2000);
            break
          // END PARA JM

          //PARA RR
          case 'llllllllllllllaalasaksjksadjxxmmnsss558856':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            if (isBotGroupAdmins) {
              var playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`, `puritalianos657483920`]
            } else if (!isBotGroupAdmins) { playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`] }
            playagainal = playagain[Math.floor(Math.random() * playagain.length)]
            const kkkkkkkkkkkkkw = [99, 7, 1000, 999, 2000, 780, 99, 11, 88, 500, 5, 777, 666, 1200, 149, 323, 175, 429, 111, 2877]
            const adisgtra = kkkkkkkkkkkkkw[Math.floor(Math.random() * kkkkkkkkkkkkkw.length)]
            confirmATM(sender, adisgtra)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              sendButtonMsg(from, `${m}Parabéns 🥳, você acaba de se fuder, tinha uma bala na câmara engatilhada\n\n-${adisgtra} pontos${m}`, ``, [{
                buttonId: `${prefix}perfil`,
                buttonText: {
                  displayText: `SEU PERFIL 🎩`
                },
                type: 1
              }, {
                buttonId: `${prefix}${playagainal}`,
                buttonText: {
                  displayText: 'JOGAR NOVAMENTE 👻'
                },
                type: 1
              }], { quoted: morterrr })
            }, 2000);
            break
          case 'ziguiriguidum22':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            if (isBotGroupAdmins) {
              var playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`, `puritalianos657483920`]
            } else if (!isBotGroupAdmins) { playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`] }
            playagainal = playagain[Math.floor(Math.random() * playagain.length)]
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              sendButtonMsg(from, `${m}Por sorte você aperta o gatilho e nada acontece, a arma acabou de falhar${m}`, ``, [{
                buttonId: `${prefix}${playagainal}`,
                buttonText: {
                  displayText: 'JOGAR NOVAMENTE 🦧'
                },
                type: 1
              }], { quoted: nmorreu })
            }, 2000);
            break
          case 'bililiuqqqwqwq123123455678899*-':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            if (isBotGroupAdmins) {
              var playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`, `puritalianos657483920`]
            } else if (!isBotGroupAdmins) { playagain = [`llllllllllllllaalasaksjksadjxxmmnsss558856`, `ziguiriguidum22`, `bililiuqqqwqwq123123455678899*-`] }
            playagainal = playagain[Math.floor(Math.random() * playagain.length)]
            const axdrewq = [99, 7, 1000, 999, 2000, 780, 99, 11, 88, 500, 5, 777, 666, 1200, 149, 323, 175, 429, 111, 2877]
            const hubsofs = axdrewq[Math.floor(Math.random() * axdrewq.length)]
            addLevelingXp(sender, hubsofs)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              sendButtonMsg(from, `${m}Por sorte a bala não estava na câmara engatilhada\n\n+${hubsofs} de XP${m}`, ``, [{
                buttonId: `${prefix}perfil`,
                buttonText: {
                  displayText: `SEU PERFIL 🎩`
                },
                type: 1
              }, {
                buttonId: `${prefix}${playagainal}`,
                buttonText: {
                  displayText: 'JOGAR NOVAMENTE 🦧'
                },
                type: 1
              }], { quoted: nmorreu })
            }, 2000);
            break
          case 'puritalianos657483920':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            textr = `*Eita zap, antes de usar alguns comandos é necessário se registrar, pra fazer isso basta clicar no botão abaixo*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isRegister) return sendREGbut()
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            helo = fs.readFileSync("./lib/image/magagfo.jpg")
            bucetinhaazul = getSender(sender)
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos })
            setTimeout(() => {
              LorranX.sendMessage(from, `${m}Parabéns 🥳, você acaba de se fuder, tinha uma bala na câmara engatilhada\n\nF chat${m}`, text, { quoted: morterrr })
              LorranX.sendMessage(sender, `${m}Eita, ${pushname}, parece que tu se fudeu kkkkkkkkkkkkkkkkk${m}`, text)
            }, 2000);
            setTimeout(() => {
              LorranX.groupRemove(from, [sender])
            }, 4000);
            setTimeout(() => {
              sendButLocation(from, `${m}Bom, se voces quiserem eu posso adicionar ele dnv${m}`, `${m}Selecione uma das opções abaixo${m}`, { jpegThumbnail: helo }, [{
                buttonId: `${prefix}asoddlldlddlldlaspppaspapapappsppspspsps ${bucetinhaazul}`,
                buttonText: {
                  displayText: `ADICIONAR`
                },
                type: 1
              }, {
                buttonId: `${prefix}asodsdsadasdasdasdsadsadadsadasdasdasppaspapapappsppspspsps ${bucetinhaazul}`,
                buttonText: {
                  displayText: 'MANDAR ELE SE FUDER'
                },
                type: 1
              }])
            }, 5000);
            break
          //END PARA RR

          //PARA BOTÕES
          case 'addtinderm':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (isTinderM && isTinderF) return reply('```Seus dados já estão registrados na minha database```')
            addtinderM(sender)
            break
          case 'addtinderf':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (isTinderM && isTinderF) return reply('```Seus dados já estão registrados na minha database```')
            addtinderF(sender)
            break
          case 'addtinderbi':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (isTinderM && isTinderF) return reply('```Seus dados já estão registrados na minha database```')
            addtinderM(sender)
            addtinderF(sender)
            break
          case 'tinder':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (isGroup) return reply('Este comando não pode ser usado em grupos')
            if (!isTinderM && !isTinderF) return sendRTbut()
            if (isTinderF) {
              idtinder = await getRandomTinderId(qualtinder, sender).replace('@s.whatsapp.net', '')
            } else if (isTinderM) {
              idtinder = await getRandomTinderId(qualtinder, sender).replace('@s.whatsapp.net', '')
            }
            TinderRJid = `${idtinder}@s.whatsapp.net`
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            pushtinder = getPushname(TinderRJid)
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos2 })
            zaperzaper = `${m}Essa é uma das possíveis pretendentes a ser sua namoradinha, o nome dela é ${pushtinder}\n\nuse${m} " *NEXT* " ${m}para ver a próxima pretendente e${m} " *❤️* " ${m}caso queira o número dela${m}`
            if (isTinderF) {
              var qualtinder = tinderm
              var textinder = `${m}Possivel pretendente encontrada!\n\no nome dela é${m} ${pushtinder}\n\n${m}use${m} " *NEXT* " ${m}para ver a próxima pretendente e${m} " *❤️* " ${m}caso queira mais informações sobre ela${m}`
            }
            if (isTinderM) {
              var qualtinder = tinderf
              var textinder = `${m}Possivel pretendente encontrado!\n\no nome dele é${m} ${pushtinder}\n\n${m}use${m} " *NEXT* " ${m}para ver o próximo pretendente e${m} " *❤️* " ${m}caso queira mais informações sobre ele${m}`
            }
            try {
              pp_user = await LorranX.getProfilePicture(TinderRJid)
            } catch (e) {
              pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
            }
            buff = await getBuffer(pp_user)
            setTimeout(() => {
              sendButLocation(from, textinder, `*Escolha uma das opções abaixo*`, { jpegThumbnail: buff }, [{
                buttonId: `${prefix}namoradinha`,
                buttonText: {
                  displayText: `NEXT`
                },
                type: 1
              }, {
                buttonId: `${prefix}abusssdsdsdsdsdsds ${idtinder}`,
                buttonText: {
                  displayText: '*❤️*'
                },
                type: 1
              }])
            }, 1500)
            break
          case 'adivinharrrr':
            reply(`${m}O dispositivo usado por você agora é um${m}  [ " ${mek.key.id.length > 21 ? '```Android 📱```' : mek.key.id.substring(0, 2) == '3A' ? '```IOS 📱```' : '```Whatsapp web 💻```'} " ]`)
            break
          case 'quitutis=/*+proasdfgyts++325':
            if (!q) return reply("Você não deveria ter acesso a esse comando 🤨");
            if (sender != q) {
              LorranX.sendMessage(from, `Esse premio não é pra vc 🤨, mas fique tranquilo @${q.split("@")[0]}, acabei de te mandar o mesmo botão no pv`, text, { quoted: mek, contextInfo: { mentionedJid: [q] } })
              randandan = `*Você acaba de subir para o level ${getLevelingLevel(q)}*\n${m}Xp: ${getLevelingXp(q)}${m}`
              sendButtonMsg(q, `${randandan}`, `*Pressione o botão abaixo para uma surpresa aleatória*`, [{
                buttonId: `.quitutis=/*+proasdfgyts++325 ${q}`,
                buttonText: {
                  displayText: `❍`
                },
                type: 1
              }], { quoted: levelup })
            } else {
              bulula = ["1", "2", "3", "4", "5"]
              bololo = bulula[Math.floor(Math.random() * bulula.length)]
              if (bololo == "1") {
                const kkkkkkkkkkkkkkkkasksjnxuuiiiii = [1000, 999, 2000, 780, 99, 500, 777, 666, 1200, 323, 429, 2877]
                const tubitubi = kkkkkkkkkkkkkkkkasksjnxuuiiiii[Math.floor(Math.random() * kkkkkkkkkkkkkkkkasksjnxuuiiiii.length)]
                addLevelingXp(sender, tubitubi)
                sendButtonMsg(from, `${m}${tubitubi} de XP acaba de ser depositado ao seu perfil 🎉${m}`, `*Para consultar seu perfil use o botão abaixo*`, [{
                  buttonId: `${prefix}perfil`,
                  buttonText: {
                    displayText: `SEU PERFIL 🎩`
                  },
                  type: 1
                }], { quoted: congrats })
              } else if (bololo == "2") {
                const wqwewewerfddfdccvcvccvas = [1000, 999, 2000, 780, 99, 500, 777, 666, 1200, 323, 429, 2877]
                const fedaputa = wqwewewerfddfdccvcvccvas[Math.floor(Math.random() * wqwewewerfddfdccvcvccvas.length)]
                addKoinUser(sender, fedaputa)
                sendButtonMsg(from, `${m}${fedaputa} pontos acabam de ser depositados a sua conta 💰🎉${m}`, `*Para consultar seu perfil use o botão abaixo*`, [{
                  buttonId: `${prefix}perfil`,
                  buttonText: {
                    displayText: `SEU PERFIL 🎩`
                  },
                  type: 1
                }], { quoted: congrats })
              } else if (bololo == "3") {
                addLevelingLevel(sender, 1)
                sendButtonMsg(from, `${m}Acabou de passar de level e ja vai passar dnv, um level a mais foi adicionado ao seu perfil${m}`, `*Para consultar seu perfil use o botão abaixo*`, [{
                  buttonId: `${prefix}perfil`,
                  buttonText: {
                    displayText: `SEU PERFIL 🎩`
                  },
                  type: 1
                }], { quoted: congrats })
              } else if (bololo == "4") {
                if (!isGroup) LorranX.sendMessage(from, `${m}Aqui esta um presentinho pra vc 😊🎉${m}`, text, { quoted: mek, contextInfo: { externalAdReply: { title: `PARABÉNS ${pushname}`, previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/levelupimg.jpg') } } })
                if (isGroup) LorranX.sendMessage(from, `${m}Acabei de te mandar um presentinho no pv 😊🎉${m}`, text, { quoted: mek, contextInfo: { externalAdReply: { title: `PARABÉNS ${pushname}`, previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/levelupimg.jpg') } } })
                bulula = [/*"","", */"*Victoria Matosa*\n\nhttps://drive.google.com/drive/mobile/folders/1x2j-SglJX-nezdBuc4WhpYleZO2c8Tl9", "*Segredos Da Ana*\n\nhttps://www.mediafire.com/folder/tcpjkncy4as5f/d.gg/", "*Polonesa Do Hype*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1yA4MOOhL1Qjfx8BOtjZptyNDgZPxzYAC", "*Ashley Tervort*\n\nhttps://mega.nz/folder/X5wQwIbK#579uPWLNfCuUDuXvuIJ3aA", "*Evilena*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1j5OR2qsYQ9uKrO2V2ywdpdUpooBlIJCo", "*Mulher Melão*\n\nhttps://mega.nz/folder/is8w1Q7a#XmaNa0PNl6J-JS9VXneDJg", "*Aline Faria*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1QEaiSu9SFeoV__Obo42252zj-WQaEZxQ", "*Rafaela Nery*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1dYfY3QTybo_gFeNE-oQsxN45VnZ7HRW0", "*Maru Karv*\n\nhttps://mega.nz/folder/tHoC2CaY#bPf5ZHzM89nq-oCr0Civdw", "*Purple Bitch*\n\nhttps://mega.nz/folder/4Fk2ERIR#GG6kMqfNMlpgd4n0d9ePCg", "*Love Lilah*\n\nhttps://mega.nz/folder/sV8UnDzI#1gU96w9k7KfAL_YDxJiMPg", "*Elle*\n\nhttps://mega.nz/folder/VewAQKgB#T3ke26T6j9Z9zxcPwJHaJQ", "*Love Lilah 2*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/145OnVBWuA54ZwfW5zL6WOQ7pQ41-fBx3", "*Taty Maia*\n\nhttps://mega.nz/folder/i841xSqT#8sP2vyffUbS1RjQ_keNYoA/folder/O9hX1QSR", "*Me1adinha*\n\nhttps://photos.google.com/share/AF1QipOjkWA-SYuXFsR17RGK0D0ZagmAP0_nK_kJnhpllW9WLj19YdLWGr0rDFLnncXVxQ?pli=1&key=ZVBtdV9YN2RmUUtkUkg2d2dMSzRKd3B5dEtMTWVn", "*Sophia Carracini*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1mIpBq3amINT9am9yxQGlbz7dd8-NMN_o", "*Maria Eugênia*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/10kdyiz9TCQuqEQXK_78KJJjG-zd4ywi3", "*Nayara*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1JpJdDtuI408EpCmoQalcOC8oz3szAxqE", "*Littl Misfit*\n\nhttps://mega.nz/#F!QvhW2RiB!kog5LiL5dOU_115ZEVpcGg!UyhkGLCL", "*Anitta*\n\nhttps://drive.google.com/drive/u/0/mobile/folders/1K5NZNNJPGVo3FGuWIjZ0jNoJ-8Gh9hG3", "*Lana Rhoades*\n\nhttps://mega.nz/folder/JEkWhaoZ#lho_3rS4nhf28tGtyvImCw", "*Belle Delphine*\n\nhttps://drive.google.com/drive/mobile/folders/1IzUUxQO6owpvW9r5Yj6xJ_711yTtlZg9",]
                bololo = bulula[Math.floor(Math.random() * bulula.length)]
                preto = bulula[Math.floor(Math.random() * bulula.length)]
                rrrrrrrr = bulula[Math.floor(Math.random() * bulula.length)]
                qwwqwq = bulula[Math.floor(Math.random() * bulula.length)]
                puneta = bulula[Math.floor(Math.random() * bulula.length)]
                sendButtonMsg(q, `${bololo}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                  buttonId: `${prefix}+sender atizap`,
                  buttonText: {
                    displayText: `OWNER 🧐`
                  },
                  type: 1
                }], { quoted: pack18, })
                sendButtonMsg(q, `${preto}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                  buttonId: `${prefix}+sender atizap`,
                  buttonText: {
                    displayText: `OWNER 🧐`
                  },
                  type: 1
                }], { quoted: pack18, })
                sendButtonMsg(q, `${rrrrrrrr}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                  buttonId: `${prefix}+sender atizap`,
                  buttonText: {
                    displayText: `OWNER 🧐`
                  },
                  type: 1
                }], { quoted: pack18, })
                sendButtonMsg(q, `${qwwqwq}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                  buttonId: `${prefix}+sender atizap`,
                  buttonText: {
                    displayText: `OWNER 🧐`
                  },
                  type: 1
                }], { quoted: pack18, })
                sendButtonMsg(q, `${puneta}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                  buttonId: `${prefix}+sender atizap`,
                  buttonText: {
                    displayText: `OWNER 🧐`
                  },
                  type: 1
                }], { quoted: pack18, })

              } else if (bololo == "5") {
                if (!isGroup) LorranX.sendMessage(from, `${m}Aqui esta um presente pra vc 🎉${m}`, text, { quoted: mek, contextInfo: { externalAdReply: { title: `PARABÉNS ${pushname}`, previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/levelupimg.jpg') } } })
                if (isGroup) LorranX.sendMessage(from, `${m}Acabei de te mandar um presente no pv 🎉${m}`, text, { quoted: mek, contextInfo: { externalAdReply: { title: `PARABÉNS ${pushname}`, previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/levelupimg.jpg') } } })
                setTimeout(() => {
                  sendAPbut(`sim`, `3m`, sender, `*𝙰𝚙𝚙𝚜 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 🐻‍❄*`, "\n```Você tem 3 minutos para resgatar qualquer um dos apps dessa lista```\n", `não`)
                }, 2000);
              }
            }
            break
          case 'bigbucetabrasil':
            if (!q) return reply("voce não deveria ter acesso a esse comando");
            LorranX.sendMessage(q, `${m}Apos analise não foi identificado nenhum problema no pack recebido${m}`, text, { contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            break
          case 'smallmancaco':
            if (!q) return reply("voce não deveria ter acesso a esse comando");
            LorranX.sendMessage(q, `${m}Ola, meu dono não permitiu que eu ficasse no grupo ;-;${m}`, text, { contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            break
          case 'bucetaatomica':
            if (!q) return reply("voce não deveria ter acesso a esse comando");
            bodia = 3000
            dollar = fs.readFileSync('./lib/image/dollar.jpg')
            addKoinUser(q, bodia)
            LorranX.sendMessage("553195703379@s.whatsapp.net", `${m}Usuario reembolsado com sucesso${m}`, text)
            LorranX.sendMessage(q, dollar, image, { caption: `${m}Você recebeu um reembolso as ${time3} no valor de ${bodia} pontos${m}`, contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            break
          case 'bigputabrasil':
            if (!q) return reply("voce não deveria ter acesso a esse comando");
            LorranX.sendMessage(q, `${m}Considere essa mensagem como um aviso, na proxima ligação você será bloqueado${m}`, text, { contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            setTimeout(() => {
              LorranX.sendMessage(q, fs.readFileSync("./lib/image/aviso.webp"), sticker,)
            }, 1500);
            break
          case "desgraca22":
            if (!q) return reply("voce não deveria ter acesso a esse comando");
            bulula = ["𝗘𝗺𝗶𝗹𝘆 𝗥𝗶𝗻𝗮𝘂𝗱𝗼\n\nhttps://mega.nz/folder/N4smGahI#Fn3eX41cPa6XezFRKhlHVA", "𝗟𝗮𝗰𝘆 𝗞𝗮𝘆 𝗦𝗼𝗺𝗲𝗿𝘀\n\nhttps://mega.nz/folder/0sFhBAKS#pW50j1uqZLX-2Um5euaPYg", "*Tianna Ann*\n\nhttps://mega.nz/folder/C98EFKiR#LEZ-KfQvqzwclupdTE2j2A", "𝗠𝗲𝗹𝗲𝗻𝗮 𝗠𝗮𝗿𝗶𝗮𝗿𝘆𝗮\n\nhttps://mega.nz/folder/hx1TyICZ#Vc04I2u_RFxAg4V-fxzP-w", "𝗦𝗵𝗮𝗻𝗴𝗵𝗮𝗶 𝗦𝗵𝗮𝘄𝘁𝘆\n\nhttps://mega.nz/folder/f90kXCJY#GqNTb__bT04jmPOXfAF8ww", "𝗙𝗮𝗹𝗹𝗶𝗻𝗴 𝗗𝗲𝘃𝗶𝗹\n\nhttps://mega.nz/folder/B1VhXYhQ#FXbqfwhF7W_G4Bh8GSMtCw", "𝗝𝗶𝗹𝗹 𝗛𝗮𝗿𝗱𝗻𝗲𝗿\n\nhttps://mega.nz/folder/UwkQECYZ#L-6vlTJrz81ekt5EVPqa6w", "𝗟𝗮𝗻𝗮 𝗕𝗲𝗲𝘅𝗼\n\nhttps://mega.nz/folder/d5JXSaJJ#9lWRPNXR2AsGhhVCE-TvFQ", "𝗔𝗹𝗶𝗖𝗲𝗻𝘇\n\nhttps://mega.nz/folder/p5VBRSDZ#tGDpzEnFnMjsQz2EUtf61A", "𝗞𝗿𝗶𝘀𝘁𝗶𝗻𝗮 𝗔𝗹𝗲𝘅𝗮𝗻𝗱𝗿𝗶𝗮\n\nhttps://mega.nz/folder/8wdiSDKa#EelETyjphWCRatWwC25uoQ",/* "","", */"𝗘𝗿𝗶𝗻 𝗔𝘀𝗵𝗳𝗼𝗿𝗱\n\nhttps://mega.nz/folder/l98AWbbI#HPBY8e75K93CQLLHG7X_Jg", "𝗦𝗮𝗿𝗮 𝗥𝗼𝗯𝗹𝗲𝘀\n\nhttps://mega.nz/folder/EsdAxZaL#mLnq7VX4iM-CMnOaIL0Wtg", "𝗕𝗹𝗮𝗸𝗲 𝗕𝗹𝗼𝘀𝘀𝗼𝗺\n\nhttps://mega.nz/folder/ZtlgCaYJ#bcMuoWWrISJyfUdXfhBSiA", "𝗦𝗮𝘃𝗮𝗻𝗮 𝗦𝗸𝘆\n\nhttps://mega.nz/folder/gl8C0KQQ#eyVuYwwJPOBvtt5fnHKeww", "𝗩𝗶𝗰𝘁𝗼𝗿𝗶𝗮 𝗠𝗮𝘁𝗼𝘀𝗮\n\nhttps://mega.nz/folder/lw1CVIRB#bB9rzGi5NnA10lgZTeL9wQ", "*Purple Bitch*\n\nhttps://mega.nz/folder/4Fk2ERIR#GG6kMqfNMlpgd4n0d9ePCg", "*Love Lilah*\n\nhttps://mega.nz/folder/sV8UnDzI#1gU96w9k7KfAL_YDxJiMPg", "*TruKait*\n\nhttps://mega.nz/folder/8ltgGbKK#ZjBjVipnb21znxlLD6suAQ", "*Little Sophie*\n\nhttps://mega.nz/folder/Uts0laqD#JsSa3XdWzbDeEm5IpPuOuQ", "*Milla Azul*\n\nhttps://mega.nz/folder/nx0DFSKB#9yJafY4h4buoBaCvNw73dg*", "*Elle*\n\nhttps://mega.nz/folder/VewAQKgB#T3ke26T6j9Z9zxcPwJHaJQ", "𝗠𝗮𝗻𝗱𝗶𝗻𝗴𝗼𝗴𝘂𝗰𝗰𝗶\n\nhttps://mega.nz/folder/JthHwQTb#hW5zPhM0tea6yCgl0ntlww", "𝗞𝗮𝘆𝗹𝗮 𝗦𝘄𝗲𝗲𝘁\n\nhttps://mega.nz/folder/8RoUnAxb#zSCqdiTVGH6BA25YQvfwuQ", "𝗡𝗮𝗱𝗶𝗻𝗲 𝗞𝗮𝗿𝗮𝘁𝘂𝘀\n\nhttps://mega.nz/folder/1IomTT7A#fTy9zdB0dqTduhQXAx7HkA", "𝗗𝗮𝗽𝗵𝗮𝗻𝗲𝘇\n\nhttps://mega.nz/folder/Z98UTBoZ#bFl7jOVMO4yZTtW7Kl0Hkw", "𝗦𝗮𝗻𝗱𝘆𝗶𝗻𝗹𝗮𝗰𝗲\n\nhttps://mega.nz/folder/oRoTEQoL#7OV36eZhFwSaWh-waJs9-w/folder/0FwEHJCY", "𝗖𝗼𝗿𝗶𝗻𝗮 𝗞𝗼𝗽𝗳\n\nhttps://mega.nz/folder/lMoT3KxS#b5p041Nkt6fiJAZe1cwtYA/folder/JM5xjYZA", "𝗚𝗮𝗶𝗮𝘅𝗼𝘅\n\nhttps://mega.nz/folder/d9dk1J5T#3b_LgxLfcatl9vcuMnxnLQ", "𝗦𝗲𝗹𝗲𝗻𝗲𝗶𝘁𝗼𝗿\n\nhttps://mega.nz/folder/URYiwbbL#RK1qnov6TNr60HFMobA_bg", "𝗔𝗹𝗶𝗰𝗲 𝗗𝗲𝗹𝗶𝘀𝗵\n\nhttps://mega.nz/folder/pBgwyTDB#r4rBCH9HFsfGRNizctDuyw", "𝗩𝗮𝗹𝗲𝗻𝘁𝗶𝗻𝗮 𝗩𝗶𝗰𝘁𝗼𝗿𝗶𝗮\n\nhttps://mega.nz/folder/AEY2BRiY#pyRBpoquC7vK8zv_hbxGdQ", "𝗚𝗶𝗮𝗻𝗻𝗮 𝗗𝗶𝗼𝗿\n\nhttps://mega.nz/folder/xEZCTDYC#Zgedlz1QPBTYUX7jS1oONQ", "𝗖𝗵𝗿𝗶𝘀𝘁𝗶𝗻𝗮 𝗞𝗵𝗮𝗹𝗶𝗹\n\nhttps://mega.nz/folder/l40BgSiJ#lrmK83bDqrdpmn2PjEgRzw", "𝗙𝗶𝗮 𝗠𝘂𝗿𝗿𝗽𝗵\n\nhttps://mega.nz/folder/9ldgBRhI#RMoJpHhSWuqD-JEvAk6APw", "𝗥𝘂𝗻𝗻𝗮 𝗕𝘂𝘁𝘁\n\nhttps://mega.nz/folder/9dkVEAjT#V4FXKUw2qj64qG7wnK5aug", "𝗭𝗼𝗲 𝗥𝗲𝗻𝗲𝗮\n\nhttps://mega.nz/folder/3GhDESBa#9ywZnhfKy_MnPnvUcYSNRA/folder/fbplBaiR", "𝗞𝘆𝗹𝗶𝗲 𝗝𝗲𝗻𝗻𝗲𝗿\n\nhttps://mega.nz/folder/gJxmgJYK#bWB4rdo8SXxVKgYfd31_oA"]
            bololo = bulula[Math.floor(Math.random() * bulula.length)]
            preto = bulula[Math.floor(Math.random() * bulula.length)]
            rrrrrrrr = bulula[Math.floor(Math.random() * bulula.length)]
            qwwqwq = bulula[Math.floor(Math.random() * bulula.length)]
            puneta = bulula[Math.floor(Math.random() * bulula.length)]
            LorranX.sendMessage(q, `${m}Ola, desculpe pelo problema com seu pack, como forma de compensação aqui estão 5 packs${m}`, text, { contextInfo: { externalAdReply: { title: "MENSAGEM DO MEU DONO ❗", previewType: "PHOTO", thumbnail: fs.readFileSync('./lib/image/ownert.jpg') } } })
            setTimeout(() => {
              sendButtonMsg(q, `${bololo}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, })
              sendButtonMsg(q, `${preto}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, })
              sendButtonMsg(q, `${rrrrrrrr}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, })
              sendButtonMsg(q, `${qwwqwq}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, })
              sendButtonMsg(q, `${puneta}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, })
            }, 1500);
            break

          case 'buyprem':
            if (isPremium) return reply(`ta doido carai, c ja é premium, ta querendo gastar dinheiro atoa?`)
            try {
              pp_user = await LorranX.getProfilePicture(sender)
            } catch (e) {
              pp_user = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
            }
            buff = await getBuffer(pp_user);
            desgraça = 100000
            zulinico = desgraça - checkATMuser(sender)
            arizap = fs.readFileSync('./lib/image/mão2.jpg')
            preminio = `${m}Eita, ${pushname}, infelizmente vc não tem pontos suficientes para adquirir o titulo de usuario premium, como ultimo recurso você pode tentar conversar com meu dono, talvez por algum motivo ele queira te dar premium de graça${m}`
            if (checkATMuser(sender) < desgraça) return sendButLocation(from, preminio, `${m}Você precisa de mais ${zulinico} pontos pra adquirir esse titulo${m}`, { jpegThumbnail: arizap }, [{
              buttonId: `${prefix}dono`,
              buttonText: {
                displayText: `OWNER 🧐`
              },
              type: 1
            }], { quoted: mek })
            confirmATM(sender, desgraça)
            prem.push(sender)
            fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
            premium123 = `${m}Você acaba de se tornar o meu mais novo usuario premium, meus parabens ${pushname} 🥳${m}`
            premium1234 = `${m}Você acaba de se tornar o meu mais novo usuario premium, meus parabens @${sender.split("@")[0]} 🥳${m}`
            if (!isGroup) return sendButImage(from, premium123, ``, buff, [{
              buttonId: `sapi`,
              buttonText: {
                displayText: `🎉`
              },
              type: 1
            }], { quoted: preminior, })
            if (isGroup) return sendButImage(from, premium1234, ``, buff, [{
              buttonId: `sapi`,
              buttonText: {
                displayText: `PARABÉNS 🎉`
              },
              type: 1
            }], { quoted: preminior, contextInfo: { mentionedJid: [sender] } })
            break
          case 'xxxtentaciones':
            crown = fs.readFileSync('./lib/image/premc.jpg')
            premtxt = `${m}Para usufruir desta e de outras diversas funções livremente você pode se tornar um usuario premium, caso tenha dinheiro suficiente, compre o titulo de premium usando o botão abaixo ou chame meu dono clicando no segundo botão${m}`
            sendButLocation(from, premtxt, ``, { jpegThumbnail: crown }, [{
              buttonId: `${prefix}buyprem`,
              buttonText: {
                displayText: `COMPRAR PREMIUM ✅`
              },
              type: 1
            }, {
              buttonId: `${prefix}owner`,
              buttonText: {
                displayText: `OWNER 🧐`
              },
              type: 1
            }], { quoted: mek })
            break
          case 'beibeatumalaca':
            desgraça = 3000
            vegonha = fs.readFileSync('./lib/image/vegonha.jpg')
            dinhos = `${m}Você não tem dinheiro suficiente para comprar esse item, interaja com o bot ou nos grupos para conseguir mais pontos, usuarios premium podem usufruir livremente deste comando${m}`
            if (checkATMuser(sender) < desgraça) return sendButLocation(from, dinhos, ``, { jpegThumbnail: arizap }, [{
              buttonId: `${prefix}xxxtentaciones`,
              buttonText: {
                displayText: `QUERO SER PREMIUM ✅`
              },
              type: 1
            }], { quoted: mek, })
            confirmATM(sender, desgraça)
            if (q === 'grupo') {
              reply(`Ok, mesmo que eu ache meio burra essa sua decisão, seu desejo é uma ordem, ja vou enviar seu pack`)
              sendButtonMsg(from, `${bololo}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack182, sendEphemeral: true })
            } else if (q === 'pv') {
              reply(`Eita, guenta mão ai, ja te mando seu pack no pv`)
              sendButtonMsg(sender, `${bololo}`, `Pack repetido ou com problemas? converse com meu dono clicando no botão abaixo`, [{
                buttonId: `${prefix}+sender`,
                buttonText: {
                  displayText: `OWNER 🧐`
                },
                type: 1
              }], { quoted: pack18, sendEphemeral: true })
            }
            break
          case 'playbut':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.WaitDownload(), mek, sender)
            var srch = args.join('')
            find = await yts(srch)
            res = find.all
            if (res[0] === undefined) return reply(`*Erro ao tentar realizar upload do seu pedido*`)
            var reslink = res[0].url;
            var res2 = res[0]
            var durationp = res2.timestamp
            thumber = await getBuffer(res[0].image)
            titulor = res2.title
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreMp3(q)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 10000) return reply(`${m}O audio que você pediu excede o meu limite de 1 hora, para evitar conflitos não irei enviá-lo, tente baixar o audio usando o link abaixo\n\n${a.data}${m}`)
                      LorranX.sendMessage(from, `${m}Caso eu não consiga enviar seu audio você pode baixa-lo atravez desse link: ${a.data} ${m}`, text)
                      await sendAudioPlay(link, `sim`, titulor, thumber, q).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply(`server error`)
            }
            addFilter(from)
            break;
          case 'playbut2':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.WaitDownload(), mek, sender)
            anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/download/playmp3?nome=${q}&apikey=Tobi`)
            buffer = await getBuffer(anu.resultado.thumb)
            await sendMediaURL(anu.resultado.link, `sim`).catch(() => reply('error'))
            addFilter(from)
            break;
          case 'pvideobut2':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.WaitDownload(), mek, sender)
            anu = await fetchJson(`https://lolizit-api.herokuapp.com/api/download/playmp4?nome=${q}&apikey=Tobi`)
            buffer = await getBuffer(anu.resultado.thumb)
            await sendMediaURL(anu.resultado.link, `sim`).catch(() => reply('error'))
            addFilter(from)
            break;
          case 'pvideobut':
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.WaitDownload(), mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            var srch = args.join('')
            find = await yts(srch);
            res = find.all
            if (res[0] === undefined) return reply(`*Erro ao tentar realizar upload do seu pedido*`)
            var reslink = res[0].url
            var res2 = res[0]
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreMp4(q)
                .then((res) => {
                  const { link } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 3500) return reply(`${m}O video que você pediu excede o meu limite de 35 minutos, para evitar conflitos não irei enviá-lo, tente baixar o video usando o link abaixo\n${a.data}${m}`)
                      LorranX.sendMessage(from, `${m}Caso eu não consiga enviar seu video você pode baixa-lo atravez desse link: ${a.data} ${m}`, text)
                      await sendMediaURL(link, `sim`).catch(() => reply('error'))

                    })
                })
            } catch (e) {
              reply('server error')
            }
            addFilter(from)
            break;
          case 'pvideofhdbut':
            textp = `*Eita zap, para usar alguns comandos é necessário que você seja um usuario premium, para se tornar premium basta entrar em contato com meu dono no link acima*`
            paro = fs.readFileSync("./lib/image/paro.jpg")
            if (!isOwner && !isPremium) return sendPREMbut()
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.WaitDownload(), mek, sender)
            var srch = args.join('')
            find = await yts(srch);
            res = find.all
            var reslink = res[0].url
            var res2 = res[0]
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytdlcoreFhd(reslink)
                .then((res) => {
                  const { dl_link, thumb, title, } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 700) return reply(`${m}O video em fullhd que você pediu excede o meu limite de 7 minutos, para evitar conflitos não irei enviá-lo, tente baixar o video usando o link abaixo\n${a.data}${m}`)
                      LorranX.sendMessage(from, `${m}Caso eu não consiga enviar seu video você pode baixa-lo atravez desse link: ${a.data} ${m}`, text)
                      await sendMediaURL(dl_link, `sim`).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply('server error')
            }
            addFilter(from)
            break;
          case 'pgif':
            sendFooter(from, RESPOSTAS.tfwait(), RESPOSTAS.fwait(), mek, sender)
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            var srch = args.join('')
            find = await yts(srch);
            res = find.all
            var reslink = res[0].url
            var res2 = res[0]
            var durationp = res2.timestamp
            var atuzapi = durationp.replace(':', '')
            if (atuzapi.includes(`:`)) var atuzapi = atuzapi.replace(':', '')
            try {
              ytv(reslink)
                .then((res) => {
                  const { dl_link, thumb, title } = res
                  axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                    .then(async (a) => {
                      if (Number(atuzapi) >= 3500) return reply(`${m}O video que você pediu excede o meu limite de 35 minutos, para evitar conflitos não irei enviá-lo, tente baixar o video usando o link abaixo\n${a.data}${m}`)
                      LorranX.sendMessage(from, `${m}Caso eu não consiga enviar seu video você pode baixa-lo atravez desse link: ${a.data} ${m}`, text)
                      await sendMediaURL2(dl_link).catch(() => reply('error'))
                    })
                })
            } catch (e) {
              reply('server error')
            }
            addFilter(from)
            break;
          case 'antilinkerr':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply(`.`)
            if (args[0] === 'on') {
              if (isAntiLink) return reply('Ja ta ativado mamaco')
              if (isAntiLinkHard) {
                antilink.push(from)
                fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
                let position = false
                Object.keys(antilinkhard).forEach((i) => {
                  if (antilinkhard[i] === from) {
                    position = i
                  }
                })
                if (position !== false) {
                  antilinkhard.splice(position, 1)
                  fs.writeFileSync('./database/grupo/antilinkhard.json', JSON.stringify(antilinkhard))
                }
                reply(`*Pronto mamaco, o recurso antilink foi ativado, para evitar conflitos o antilink hard foi desativado*`)
              } else if (!isAntiLinkHard) {
                antilink.push(from)
                fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
                reply(`*Pronto macaco, o recurso antilink foi ativado*`)
              }
            } else if (args[0] === 'off') {
              let position = antilink.indexOf(antilink.find((x) => x === from))
              if (position === -1) return reply(`Que isso carai, nem tava ligado`)
              antilink.splice(position, 1)
              fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
              reply(`*Pronto macaco, o recurso antilink foi desativado*`)
            } else {
              reply(`.`)
            }
            break
          case 'antilinkerrhard':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isAntiLinkHard) return reply('Ja ta ativado mamaco')
              if (isAntiLink) {
                antilinkhard.push(from)
                fs.writeFileSync('./database/grupo/antilinkhard.json', JSON.stringify(antilinkhard))
                let position = false
                Object.keys(antilink).forEach((i) => {
                  if (antilink[i] === from) {
                    position = i
                  }
                })
                if (position !== false) {
                  antilink.splice(position, 1)
                  fs.writeFileSync('./database/grupo/antilink.json', JSON.stringify(antilink))
                }
                reply(`*Pronto mamaco, o recurso antilink hard foi ativado, para evitar conflitos o antilink normal foi desativado*`)
              } else if (!isAntiLink) {
                antilinkhard.push(from)
                fs.writeFileSync('./database/grupo/antilinkhard.json', JSON.stringify(antilinkhard))
                reply('*Pronto mamaco, o recurso antilink hard foi ativado*')
              }
            } else if (args[0] === 'off') {
              if (!isAntiLinkHard) return reply('*Que isso carai, nem tava ligado*')
              let position = false
              Object.keys(antilinkhard).forEach((i) => {
                if (antilinkhard[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                antilinkhard.splice(position, 1)
                fs.writeFileSync('./database/grupo/antilinkhard.json', JSON.stringify(antilinkhard))
              }
              reply('*Pronto mamaco, o recurso antilink hard foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break;
          case 'antitxtrr':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply(`.`)
            if (args[0] === 'on') {
              if (isAntiTxt) return reply('Ja ta ativado mamaco')
              antitxt.push(from)
              fs.writeFileSync('./database/grupo/antitxt.json', JSON.stringify(antitxt))
              reply(`*Pronto macaco, o recurso antitxt foi ativado*`)
            } else if (args[0] === 'off') {
              let position = antitxt.indexOf(antitxt.find((x) => x === from))
              if (position === -1) return reply(`Que isso carai, nem tava ligado`)
              antitxt.splice(position, 1)
              fs.writeFileSync('./database/grupo/antitxt.json', JSON.stringify(antitxt))
              reply(`*Pronto macaco, o recurso antitxt foi desativado*`)
            } else {
              reply(`.`)
            }
            break
          case 'welcomerr':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply(`.`)
            if (args[0] === 'on') {
              if (isWelcome) return reply('Ja ta ativado mamaco')
              welcome.push(from)
              fs.writeFileSync('./database/grupo/welcome.json', JSON.stringify(welcome))
              reply(`*Pronto macaco, o recurso welcome foi ativado*`)
            } else if (args[0] === 'off') {
              let position = welcome.indexOf(welcome.find((x) => x === from))
              if (position === -1) return reply(`Que isso carai, nem tava ligado`)
              welcome.splice(position, 1)
              fs.writeFileSync('./database/grupo/welcome.json', JSON.stringify(welcome))
              reply(`*Pronto macaco, o recurso welcome foi desativado*`)
            } else {
              reply(`.`)
            }
            break
          case 'mutador':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isOwner && !isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args[0].toLowerCase() === 'on') {
              if (isMuted) return reply(`Ja estou silenciado nesse grupo`)
              mute.push(from)
              fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
              reply(`*Pronto, o bot foi silenciado e agora somente os adms podem usar os comandos*`)
            } else if (args[0].toLowerCase() === 'off') {
              anu = mute.indexOf(from)
              mute.splice(anu, 1)
              fs.writeFileSync('./database/bot/mute.json', JSON.stringify(mute))
              reply(`*Pronto, agora todos podem usar meus comandos novamente*`)
            } else {
              reply(``)
            }
            break;
          case 'permitirr':
            if (!isOwner) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oowner(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (q.endsWith("@g.us")) {
              perm.push(q)
              fs.writeFileSync('./database/bot/perm.json', JSON.stringify(perm))
              reply('*Pronto agora permanecerei nesse grupo mesmo que ele nao atenda a quantidade de membros necessaria*')
            } else if (args[0] === 'add') {
              if (!isGroup) return reply(RESPOSTAS.ogrupo())
              if (isPermitido) return reply('*Ja estou permitido a ficar nesse grupo*')
              perm.push(from)
              fs.writeFileSync('./database/bot/perm.json', JSON.stringify(perm))
              reply('*Pronto agora permanecerei nesse grupo mesmo que ele nao atenda a quantidade de membros necessaria*')
            } else if (args[0] === 'rm') {
              if (!isGroup) return reply(RESPOSTAS.ogrupo())
              if (!isPermitido) return reply('*O leveling ja esta desativado*')
              let position = false
              Object.keys(perm).forEach((i) => {
                if (perm[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                perm.splice(position, 1)
                fs.writeFileSync('./database/grupo/perm.json', JSON.stringify(perm))
              }
              reply('*Pronto agora não permanecerei nesse grupo mesmo que ele nao atenda a quantidade de membros necessaria*')
            } else {
              reply(`Selecione on ou off`)
            }
            break;
          case 'nivell':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isLevelingOn) return reply('*O leveling ja esta ativado*')
              _leveling.push(from)
              fs.writeFileSync('./database/grupo/leveling.json', JSON.stringify(_leveling))
              reply('*Pronto mamaco, o recurso de leveling foi ativado*')
            } else if (args[0] === 'off') {
              if (!isLevelingOn) return reply('*O leveling ja esta desativado*')
              let position = false
              Object.keys(_leveling).forEach((i) => {
                if (_leveling[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                _leveling.splice(position, 1)
                fs.writeFileSync('./database/grupo/leveling.json', JSON.stringify(_leveling))
              }
              reply('*Pronto mamaco, o recurso de leveling foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break;
          case 'antihidetagg':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isHideTag) return reply('*O antihidetag ja esta ativado*')
              antihide.push(from)
              fs.writeFileSync('./database/grupo/antihide.json', JSON.stringify(antihide))
              reply('*Pronto mamaco, o antihidetag foi ativado*')
            } else if (args[0] === 'off') {
              if (!isHideTag) return reply('*O antihidetag não estava ativado*')
              let position = false
              Object.keys(antihide).forEach((i) => {
                if (antihide[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                antihide.splice(position, 1)
                fs.writeFileSync('./database/grupo/antihide.json', JSON.stringify(antihide))
              }
              reply('*Pronto mamaco, o antihidetag foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break;
          case 'antivor':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isAntivo) return reply('*O anti-view-once ja esta ativado*')
              antivo.push(from)
              fs.writeFileSync('./database/grupo/antivo.json', JSON.stringify(antivo))
              reply('*Pronto mamaco, o anti-view-once foi ativado*')
            } else if (args[0] === 'off') {
              if (!isAntivo) return reply('*O anti-view-once não estava ativado*')
              let position = false
              Object.keys(antivo).forEach((i) => {
                if (antivo[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                antivo.splice(position, 1)
                fs.writeFileSync('./database/grupo/antivo.json', JSON.stringify(antivo))
              }
              reply('*Pronto mamaco, o anti-view-once foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break;
          case 'antifaker':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isAntiFa) return reply('O recurso antifake ja esta ativado')
              antifake.push(from)
              fs.writeFileSync('./database/grupo/antifake.json', JSON.stringify(antifake))
              reply('*Pronto mamaco, o recurso antifake foi ativado*')
            } else if (args[0] === 'off') {
              if (!isAntiFa) return reply('O recurso antifake ja esta desativado')
              let position = false
              Object.keys(antifake).forEach((i) => {
                if (antifake[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                antifake.splice(position, 1)
                fs.writeFileSync('./database/grupo/antifake.json', JSON.stringify(antifake))
              }
              reply('*Pronto mamaco, o recurso antifake foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break
          case 'blacklistt':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isBlackOn) return reply('O recurso black-list ja esta ativado')
              blacklistg.push(from)
              fs.writeFileSync('./database/grupo/blacklistg.json', JSON.stringify(blacklistg))
              reply('*Pronto mamaco, o recurso black-list foi ativado*')
            } else if (args[0] === 'off') {
              if (!isBlackOn) return reply('O recurso black-list ja esta desativado')
              let position = false
              Object.keys(blacklistg).forEach((i) => {
                if (blacklistg[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                blacklistg.splice(position, 1)
                fs.writeFileSync('./database/grupo/blacklistg.json', JSON.stringify(blacklistg))
              }
              reply('*Pronto mamaco, o recurso black-list foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break
          case 'x9ver':
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isX9) return reply('*O recurso X9 ja esta ativado*')
              x9.push(from)
              fs.writeFileSync('./database/grupo/x9.json', JSON.stringify(x9))
              reply('*Pronto mamaco, o recurso X9 foi ativado*')
            } else if (args[0] === 'off') {
              if (!isX9) return reply('*O recurso X9 ja esta desativado*')
              let position = false
              Object.keys(x9).forEach((i) => {
                if (x9[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                x9.splice(position, 1)
                fs.writeFileSync('./database/grupo/x9.json', JSON.stringify(x9))
              }
              reply('*Pronto mamaco, o recurso x9 foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break
          case 'antibott':
            if (isBanned) return LorranX.sendMessage(from, RESPOSTAS.banido(), text, { quoted: vbanido })
            if (!isGroup) return reply(RESPOSTAS.ogrupo())
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            if (!isBotGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized2(), RESPOSTAS.badmin(), mek, sender)
            if (args.length < 1) return reply('Man, c tem que escolher entre on (ativar) e off (desativar)')
            if (args[0] === 'on') {
              if (isAntiBot) return reply('O recurso anti-bot ja está ativado')
              antibot.push(from)
              fs.writeFileSync('./database/grupo/antibot.json', JSON.stringify(antibot))
              reply('*Pronto mamaco, o recurso anti-bot foi ativado*')
            } else if (args[0] === 'off') {
              if (!isAntiBot) return reply('O recurso anti-bot ja está desativado')
              let position = false
              Object.keys(antibot).forEach((i) => {
                if (antibot[i] === from) {
                  position = i
                }
              })
              if (position !== false) {
                antibot.splice(position, 1)
                fs.writeFileSync('./database/grupo/antibot.json', JSON.stringify(antibot))
              }
              reply('*Pronto mamaco, o recurso anti-bot foi desativado*')
            } else {
              reply(`Selecione on ou off`)
            }
            break
          case "-*fm":
            yoda = fs.readFileSync("./lib/image/yoda.webp")
            menuimg = fs.readFileSync("./lib/image/funmenu.jpg")
            LorranX.sendMessage(from, `${m}Você chegou ao fim dos meus menus, enviarei o primeiro menu novamente${m}`, text, { quoted: mek })
            setTimeout(() => {
              LorranX.sendMessage(from, yoda, sticker,)
            }, 800);
            setTimeout(() => {
              menuimg = fs.readFileSync("./lib/image/funmenu.jpg")
              if (!isRegister) return sendButLocation(from, Menu, FooterM, { jpegThumbnail: menuimg }, [{
                buttonId: `${prefix}verify`,
                buttonText: {
                  displayText: "REGISTRAR 🔖"
                },
                type: 1
              }, {
                buttonId: `${prefix}-*am`,
                buttonText: {
                  displayText: "ADMIN MENU ⚖️"
                },
                type: 1
              }])
              if (isRegister) return sendButLocation(from, Menu, FooterM, { jpegThumbnail: menuimg }, [{
                buttonId: `${prefix}perfil`,
                buttonText: {
                  displayText: "PERFIL 👻"
                },
                type: 1
              }, {
                buttonId: `${prefix}-*am`,
                buttonText: {
                  displayText: "ADMIN MENU ⚖️"
                },
                type: 1
              }])
            }, 3000);
            break
          case "-*om":
            menuimg = fs.readFileSync("./lib/image/ownermenu.jpg")
            if (!isRegister) return sendButLocation(from, MenuO, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}verify`,
              buttonText: {
                displayText: "REGISTRAR 🔖"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*tm`,
              buttonText: {
                displayText: " TOOLS MENU 🛠️ "
              },
              type: 1
            }])
            if (isRegister) return sendButLocation(from, MenuO, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: "PERFIL 👻"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*tm`,
              buttonText: {
                displayText: " TOOLS MENU 🛠️ "
              },
              type: 1
            }])
            break
          case "-*am":
            menuimg = fs.readFileSync("./lib/image/adminmenu.jpg")
            if (!isRegister) return sendButLocation(from, MenuA, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}verify`,
              buttonText: {
                displayText: "REGISTRAR 🔖"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*om`,
              buttonText: {
                displayText: "OWNER MENU 🎩"
              },
              type: 1
            }])
            if (isRegister) return sendButLocation(from, MenuA, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: "PERFIL 👻"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*om`,
              buttonText: {
                displayText: "OWNER MENU 🎩"
              },
              type: 1
            }])
            break
          case '-*tm':
            menuimg = fs.readFileSync("./lib/image/toolsmenu.jpg")
            if (!isRegister) return sendButLocation(from, MenuC, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}verify`,
              buttonText: {
                displayText: "REGISTRAR 🔖"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*mm`,
              buttonText: {
                displayText: "MAKER MENU 🎨"
              },
              type: 1
            }])
            if (isRegister) return sendButLocation(from, MenuC, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: "PERFIL 👻"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*mm`,
              buttonText: {
                displayText: "MAKER MENU 🎨"
              },
              type: 1
            }])
            break
          case "-*mm":
            menuimg = fs.readFileSync("./lib/image/makermenu.jpg")
            if (!isRegister) return sendButLocation(from, MenuM, FooterM + `  ${readMore}` + `\n\nCaso não saiba como usar algum dos comandos ou queira um exemplo da imagem use _*${prefix}comando exemplo*_`, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}verify`,
              buttonText: {
                displayText: "REGISTRAR 🔖"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*pm`,
              buttonText: {
                displayText: "PREMIUM MENU 👑"
              },
              type: 1
            }])
            if (isRegister) return sendButLocation(from, MenuM, FooterM + `  ${readMore}` + `\n\nCaso não saiba como usar algum dos comandos ou queira um exemplo da imagem use _*${prefix}comando exemplo*_`, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: "PERFIL 👻"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*pm`,
              buttonText: {
                displayText: "PREMIUM MENU 👑"
              },
              type: 1
            }])
            break
          case "-*pm":
            menuimg = fs.readFileSync("./lib/image/premiummenu.jpg")
            if (!isRegister) return sendButLocation(from, MenuP, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}verify`,
              buttonText: {
                displayText: "REGISTRAR 🔖"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*fm`,
              buttonText: {
                displayText: "      FUN MENU 🕹️      "
              },
              type: 1
            }])
            if (isRegister) return sendButLocation(from, MenuP, FooterM, { jpegThumbnail: menuimg }, [{
              buttonId: `${prefix}perfil`,
              buttonText: {
                displayText: "PERFIL 👻"
              },
              type: 1
            }, {
              buttonId: `${prefix}-*fm`,
              buttonText: {
                displayText: "      FUN MENU 🕹️      "
              },
              type: 1
            }])
            break
          case "-*alo":
            yoda = fs.readFileSync("./lib/image/yoda.webp")
            textchange = `Eae ${pushname}, sobre o que você queria falar?`
            if (!isGroup) textchange = `Sobre o que você quer falar?`
            if (isGroup) LorranX.sendMessage(from, `Ola ${pushname}, me fale mais sobre isso, acabei de te mandar uma mensagem no pv`, text, { quoted: mek })
            LorranX.sendMessage(sender, textchange, text, { quoted: mek })
            LorranX.sendMessage(sender, yoda, sticker,)
            break
          case "duilope":
            if (!isGroupAdmins) return sendFooter(from, RESPOSTAS.unauthorized(), RESPOSTAS.oadmin(), mek, sender)
            calculando = fs.readFileSync("./lib/image/calculando.webp")
            LorranX.sendMessage(from, calculando, sticker, { quoted: calculos22 })
            setTimeout(() => {
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
            }, 5000)
            setTimeout(() => {
              LorranX.sendMessage(from, fs.readFileSync("./lib/image/atizaper.mpeg"), audio, { mimetype: 'audio/mp4', duration: 99999999999999999, ptt: true })
              LorranX.sendMessage(from, fs.readFileSync("./lib/image/atizaper.mpeg"), audio, { mimetype: 'audio/mp4', duration: 99999999999999999, ptt: true })
              LorranX.sendMessage(from, fs.readFileSync("./lib/image/atizaper.mpeg"), audio, { mimetype: 'audio/mp4', duration: 99999999999999999, ptt: true })
            }, 4700)
            setTimeout(() => {
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
            }, 6000)
            setTimeout(() => {
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
              LorranX.sendMessage(from, RESPOSTAS.eita(), text,)
            }, 7000)
            setTimeout(() => {
              LorranX.sendMessage(from, fs.readFileSync("./lib/image/atizaper.mpeg"), audio, { mimetype: 'audio/mp4', duration: 99999999999999999, ptt: true })
            }, 7000)
            setTimeout(() => {
              reply(`Pronto, teoricamente o chat foi destravado, ta todo mundo bem?`)
            }, 9000)
            break





          //GARBAGE
          /*
          
              /*       case 'ytsearch':
            if (args.length < 1) return reply("masukan judul video")
            var search = args.join('')
            try {
              var find = await yts(search)
            } catch {
              return await reply("error")
            }
            result = find.all
            var tbuff = await getBuffer(result[0].image)
            var ytres = `*[ YT Result ]*\n*————————————————————*\n\n`
            find.all.map((video) => {
              ytres += '❏ Title: ' + video.title + '\n'
              ytres += '❏ Link: ' + video.url + '\n'
              ytres += '❏ Durasi: ' + video.timestamp + '\n'
              ytres += `❏ Upload: ` + video.ago +`\n*————————————————————*\n\n`
            })
            await fakethumb(tbuff, ytres)
            break; 
            */

          /*    if (isGroup) {
      const checkMod = checkModG(from)
      try {
      if (checkMod === undefined) {
         await addmoderadores(from, "1d")
        console.log(`[MODERADORES] CRIANDO INFORMAÇÕES SOBRE O GRUPO ${groupName} NO ARQUIVO moderadores.json`)
      }else {}
      } catch (err) {
      console.error(err)
      }
    }
 
ReiniciarBanidos("1d")
 
 
const isGroupMod = groupMods.includes(sender) || undefined */

          /* //MODERADORES BY EU
 
      
 
      const addmoderadores = (from, tempo) => {
        const mod = {JidG: from, moderadores: ["553195703379@s.whatsapp.net",], banidos: [] , reiniciar: Date.now() + toMs(tempo)}
          moderadores.push(mod)
          fs.writeFileSync(`./database/grupo/moderadores.json`, JSON.stringify(moderadores))
      }
 
      const checkModG = (from) => {
        let position = false
          Object.keys(moderadores).forEach((i) => {
              if (moderadores[i].JidG === from) {
                  position = i
              }
          })
          if (position !== false) {
              return moderadores[position].moderadores
             
          }
      }
      const AddMod = (from, numero) => {
        let position = false
        Object.keys(moderadores).forEach((i) => {
            if (moderadores[i].JidG === from) {
                position = i
            }
        })
        if (position !== false) {
            moderadores[position].moderadores.push(numero)
            fs.writeFileSync('./database/grupo/moderadores.json', JSON.stringify(moderadores))
        }
    }
 
    const ModBaniu = (from) => {
      let position = false
      Object.keys(moderadores).forEach((i) => {
          if (moderadores[i].JidG === from) {
              position = i
          }
      })
      if (position !== false) {
          moderadores[position].banidos.push(`1`)
          fs.writeFileSync('./database/grupo/moderadores.json', JSON.stringify(moderadores))
      }
  }
 
const ReiniciarBanidos = (tempo) => {
      let position = false
      Object.keys(moderadores).forEach((i) => {
          if (Date.now() >= moderadores[i].reiniciar) {
              position = i
          }
      })
      if (position !== false) {
          console.log(`Agora os moderadores ja podem banir`)
            moderadores[position].banidos.splice(1)
            moderadores[position].reiniciar = Date.now() + toMs(tempo)
            fs.writeFileSync('./database/grupo/moderadores.json', JSON.stringify(moderadores))
        
      }
 
} 
  const checkBanidos = (from) => {
    let position = false
      Object.keys(moderadores).forEach((i) => {
          if (moderadores[i].JidG === from) {
              position = i
          }
      })
      if (position !== false) {
          return moderadores[position].banidos.length
      }
  }
 
    const RmMod = (from, numero) => {
      let position = false
      Object.keys(blacklist).forEach((i) => {
          if (moderadores[i].JidG === from) {
              position = i
          }
      })
      if (position !== false) {
          moderadores[position].moderadores.splice(numero)
          fs.writeFileSync('./database/grupo/moderadores.json', JSON.stringify(moderadores))
      }
  } */


          //END GARBAGE


          default:
            if (isGroup && isAntivo && type == 'viewOnceMessage') {
              texto = `\n\n*legenda :* `
              var msg = { ...m }

              let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
                msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage

              typenya["viewOnce"] = false

              typenya["caption"] = `*anti vizualização unica 🤨📸* ${(typenya.caption === '') ? '' : texto + typenya.caption}`

              let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: { "viewOnceMessage": { "message": { "imageMessage": { "viewOnce": true } } } } } : { key: { fromMe: false, participant: sender, id: mek.key.id }, message: { "viewOnceMessage": { "message": { "imageMessage": { "viewOnce": true } } } } }

              let pe = await generateWAMessageFromContent(m.chat, proto.Message.fromObject(msg.message.viewOnceMessage.message, { quoted: peq }))

              l.relayMessage(m.chat, pe.message, { messageId: pe.key.id })
            }
            if (!isMuted && body.startsWith(`${prefix}${command}`)) {
              console.log(color('[ MACAQUICE DETECTADA ]', 'white'), `O COMANDO ${prefix}${command} NÃO GEROU NENHUM RESULTADO OU NÃO EXISTE     ENVIADA POR  ➤`, color(sender.split('@')[0]))
            }
            if (isTTT && isPlayer2) {
              if (budy.startsWith("S", "s")) {
                tto = roomttt.filter(gang => gang.id.includes(from))
                tty = tto[0]
                number = tto[0].number;
                teksboard = `*[ 𝙅𝙊𝙂𝙊 𝘿𝘼 𝙑𝙀𝙇𝙃𝘼 ]*
      
      Player 1 @${tty.player1.split('@')[0]}=❌
      Player 2 @${tty.player2.split('@')[0]}=⭕
      
      ${number[1]}${number[2]}${number[3]}
      ${number[4]}${number[5]}${number[6]}
      ${number[7]}${number[8]}${number[9]}
      
      Vez de = @${tty.player1.split('@')[0]}`
                LorranX.sendMessage(from, teksboard, text, { quoted: mek, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
              }
              if (budy.startsWith('N', "n")) {
                tto = roomttt.filter(gang => gang.id.includes(from))
                tty = tto[0]
                rooms = roomttt.filter(tokek => !tokek.id.includes(from))
                roomttt = rooms;
                LorranX.sendMessage(from, `Eita man, o @${tty.player2.split('@')[0]} arregou`, text, { quoted: mek, contextInfo: { mentionedJid: [tty.player2] } })
              }
            }
            if (isTTT && isPlayer1) {
              noober = parseInt(budy)
              if (isNaN(noober)) return
              if (noober < 1 || noober > 9) return reply("C tem que digitar um dos numeros que esta em jogo")
              main = roomttt.filter(gang => gang.id.includes(from))
              if (!defttt.includes(main[0].number[noober])) return reply("O carai, esse numero ja foi escolhido")
              if (main[0].turn.includes(sender)) return reply("Nem é sua vez mamaco")
              s = '❎'
              main[0].number[noober] = s
              main[0].turn = main[0].player1
              rooms = roomttt.filter(bang => !bang.id.includes(from))
              roomttt = rooms;
              pop = main[0]
              roomttt.push(pop)
              tto = roomttt.filter(hgh => hgh.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`

              winningspeech = () => {
                ucapan1 = `Jogo ganho por: *@${tty.player1.split('@')[0]}*`
                ucapan2 = `*[ Resultado Final ]*\n\n${ttt}`
                LorranX.sendMessage(from, ucapan1, text, { quoted: winner, contextInfo: { mentionedJid: [tty.player1] } })
                rooms = roomttt.filter(hhg => !hhg.id.includes(from))
                return roomttt = rooms
              }
              if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()

              if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()

              if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()

              if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()

              if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()

              if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()

              if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()

              if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()

              if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                ucapan1 = `Carai, deu velha`
                ucapan2 = `*[ Resultado Final ]*\n\n${ttt}`
                reply(ucapan1)
                naa = roomttt.filter(hhg => !hhg.id.includes(from))
                return roomttt = naa
              }
              ucapan = `*[ 𝙅𝙊𝙂𝙊 𝘿𝘼 𝙑𝙀𝙇𝙃𝘼 ]*\n\nPlayer 1 @${tty.player1.split('@')[0]}=❌\nPlayer 2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\nVez de = @${tty.player2.split('@')[0]}`
              LorranX.sendMessage(from, ucapan, text, { quoted: mek, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
            }
            if (isTTT && isPlayer2) {
              noober = parseInt(budy)
              if (isNaN(noober)) return
              if (noober < 1 || noober > 9) return reply("C tem que digitar um dos numeros que esta em jogo")
              main = roomttt.filter(gang => gang.id.includes(from))
              if (!defttt.includes(main[0].number[noober])) return reply("O carai, esse numero ja foi escolhido")
              if (main[0].turn.includes(sender)) return reply("Calmai mamaco, ainda não é sua vez")
              s = '🅾️'
              main[0].number[noober] = s
              main[0].turn = main[0].player2
              rooms = roomttt.filter(bang => !bang.id.includes(from))
              roomttt = rooms;
              pop = main[0]
              roomttt.push(pop)
              tto = roomttt.filter(hgh => hgh.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`

              winningspeech = () => {
                ucapan1 = `Jogo ganho por :*@${tty.player2.split('@')[0]}*`
                ucapan2 = `*[ Resultado Final ]*\n\n${ttt}`
                LorranX.sendMessage(from, ucapan1, text, { quoted: winner, contextInfo: { mentionedJid: [tty.player2] } })
                rooms = roomttt.filter(hhg => !hhg.id.includes(from))
                return roomttt = rooms
              }
              if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()

              if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()

              if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()

              if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()

              if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()

              if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()

              if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()

              if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()

              if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && !ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && !ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')) {
                ucapan1 = `Carai, deu velha`
                ucapan2 = `*[ Resultado Final ]*\n\n${ttt}`
                reply(ucapan1)
                naa = roomttt.filter(hhg => !hhg.id.includes(from))
                return roomttt = naa
              }
              ucapan = `*[ 𝙅𝙊𝙂𝙊 𝘿𝘼 𝙑𝙀𝙇𝙃𝘼 ]*\n\nPlayer 1 @${tty.player1.split('@')[0]}=❌\nPlayer 2 @${tty.player2.split('@')[0]}=⭕\n\n${ttt}\n\nVez de = @${tty.player1.split('@')[0]}`
              LorranX.sendMessage(from, ucapan, text, { quoted: mek, contextInfo: { mentionedJid: [tty.player1, tty.player2] } })
            }
        }
      } catch (e) {
        console.log("Error : %s", color(e, "red"));
      }
    });
};