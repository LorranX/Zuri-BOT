const chalk = require('chalk')
const moment = require('moment-timezone');
const cfonts = require('cfonts');
const logUpdate = require('log-update')
const os = require('os')
const horaBR = moment.tz('America/Sao_Paulo').format('HH:mm:ss')

if (horaBR > "23:00:00" && horaBR < "05:00:00") wFrase = `BOA MADRUGADA`
else if (horaBR > "05:00:00" && horaBR < "12:00:00") wFrase = `BOM DIA`
else if (horaBR > "12:00:00" && horaBR < "18:00:00") wFrase = `BOA TARDE`
else wFrase = `BOA NOITE`


const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const notify = (text, color1, color2) => {
    return !color1 && !color2 ? chalk.red('[ Zuri ] ') + chalk.green(text) : !color1 ? chalk.red('[ Zuri ] ') + chalk.keyword(color2)(text) : !color2 ? chalk.keyword(color1)('[ Zuri ] ') + chalk.green(text) : chalk.keyword(color1)('[ Zuri ] ') + chalk.keyword(color2)(text)
}

const banner = cfonts.render(('L-MD'), {
    font: 'simple',
    color: 'white',
    align: 'center',
    space: false
});

const centerBanner = cfonts.render((`${wFrase} USUARIO | SEJA BEM VINDO AO CONSOLE`), {
    font: 'console',
    color: 'candy',
    align: 'center',
    gradient: ["red", "blue"],

});

const dInfo = cfonts.render((`[ DEVICE INFO ] | OS: ${process.platform +' '+process.arch} | RAM: ${os.totalmem()} | NODE VERSION: ${process.version}`), {
    font: 'console',
    color: 'red',
    align: 'center',
    space: false
});

module.exports = {
    color,
    notify,
    banner,
    centerBanner,
    dInfo
}