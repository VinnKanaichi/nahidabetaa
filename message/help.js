const version = require("baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const path = require("path");
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const pluginsFolderPath = "./plugins";

  // Daftar folder yang ingin dikecualikan dari perhitungan
  const excludedFolders = ["Bot-function", "Game-answer", "Game-hint","Case"]; // Ganti dengan nama folder yang ingin dikecualikan

  // Fungsi untuk menghitung jumlah file.js dalam sebuah folder
  function countJSFiles(folderPath) {
    try {
      const files = fs.readdirSync(folderPath); // Baca isi folder secara sinkron
      let jsFileCount = 0;

      files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const stat = fs.statSync(filePath); // Dapatkan informasi status file

        if (stat.isDirectory()) {
          if (!excludedFolders.includes(file)) {
            jsFileCount += countJSFiles(filePath); // Rekursif untuk folder dalam folder
          }
        } else {
          if (path.extname(file) === ".js") {
            jsFileCount++; // Tambahkan 1 untuk setiap file.js
          }
        }
      });

      return jsFileCount;
    } catch (error) {
      console.error("Error:", error);
      return 0; // Jika terjadi error, kembalikan nilai 0
    }
  }

  // Hitung jumlah file.js dalam semua folder di dalam folder plugins
  const totalJSFiles = countJSFiles(pluginsFolderPath);
////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

// Waktu sekarang
let sekarang = moment().tz('Asia/Jakarta');

// Mengambil tahun sekarang dan membuat waktu tahun baru
let tahunDepan = sekarang.year() + 1;
let tahunBaru = moment.tz(`${tahunDepan}-01-01 00:00:00`, 'Asia/Jakarta');

// Menghitung selisih waktu
let selisih = moment.duration(tahunBaru.diff(sekarang));

// Mendapatkan jumlah hari, jam, menit, dan detik
let hari = Math.floor(selisih.asDays());
let jam = selisih.hours();
let menit = selisih.minutes();
let detik = selisih.seconds();

// Ucapan menuju tahun baru
let ucapanTahunBaru = `Menuju tahun baru: ${hari} hari, ${jam} jam, ${menit} menit, dan ${detik} detik lagi.`;






exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return Ehztext(`
${gris}「 Info User 」${gris} :
*Nama* : ${pushname}
*Status* : ${isPremium ? '🌟 Premium' : '🔒 Free'}
*Saldo* : 💰 Rp ${saldo}
*Limit* : ${isPremium ? '♾️ Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}
*Limit Game* : ${isPremium ? '♾️ Unlimited' : `${db.data.users[sender].glimit}`}

${gris}「 Info Bot 」${gris} :
*Nama Bot* : ${botName}
*Bot Mode* : ${publik ? "🌍 Public" : "🤖 Self"}
*Running* : 🏃‍♂️ ${runWith} 
*Fitur Saat Ini* : 🔧${totalFitur() + totalJSFiles} feature
*Total Error* : ❌ ${db.data.listerror.length}
*Total User* : 👥 ${Object.keys(db.data.users).length}
*User Banned* : 🚫 ${db.data.banned.length}
*Cmd Blocked* : ⛔ ${db.data.blockcmd.length} 

${gris}「 Date & Time 」${gris} :
${week}, ${calender} 
🕑 ${timeWib} WIB 
📅 ${dateIslamic}
🗓️ ${ucapanTahunBaru}


]––––––『 *Commands* 』––––––[
 ${readmore}`)}

exports.fitur = (prefix) => {
return Ehztext(`
╭─┈ ${gris}▣ INFO ▣${gris}┈────⊡
╰◈ .owner
╰◈ .sosmed
╰◈ .infobot
╰◈ .dashboard 
╰◈ .ping
╰◈ .qris
╰◈ .rules
╰◈ .speed
╰◈ .runtime
╰◈ .sc
╰◈ .myip

╭─┈ ${gris}▣ ANONYMOUS ▣${gris}┈────⊡
╰◈ .menfes
╰◈ .confes
╰◈ .pesanemail

╭─┈ ${gris}▣ GROUP ▣${gris}┈────⊡
╰◈ .on (keamanan)
╰◈ .absen
╰◈ .mulaiabsen
╰◈ .cekabsen
╰◈ .hapusabsen
╰◈ .inspect
╰◈ .intro
╰◈ .delete
╰◈ .opentime
╰◈ .closetime
╰◈ .gc
╰◈ .infogc
╰◈ .linkgc
╰◈ .resetlinkgc
╰◈ .add
╰◈ .kick
╰◈ .addkick
╰◈ .delkick
╰◈ .listkick
╰◈ .promote
╰◈ .demote
╰◈ .tagadmin
╰◈ .tagme
╰◈ .hidetag
╰◈ .tagall
╰◈ .jid
╰◈ .read
╰◈ .listonline
╰◈ .jodohku
╰◈ .jadian
╰◈ .caridoi
╰◈ .tembak
╰◈ .terima
╰◈ .tolak
╰◈ .putus
╰◈ .tag
╰◈ .getname
╰◈ .setppgc
╰◈ .delppgc
╰◈ .getppgc
╰◈ .setnamegc
╰◈ .setdesc
╰◈ .banstik
╰◈ .unbanstik

╭─┈ ${gris}▣ GAME ▣${gris}┈────⊡
╰◈ .tebakgambar
╰◈ .tebakbendera
╰◈ .tebakkata
╰◈ .tebaktebakan
╰◈ .tebaklirik
╰◈ .tebaklagu
╰◈ .tekateki
╰◈ .tebakkimia
╰◈ .susunkata
╰◈ .siapaaku
╰◈ .family100
╰◈ .caklontong
╰◈ .tictactoe
╰◈ .topbalance
╰◈ .profil
╰◈ .claimgame
╰◈ .tf
╰◈ .limit
╰◈ .shopc
╰◈ .buylimit
╰◈ .buyglimit
╰◈ .givelimit
╰◈ .kuranglimit
╰◈ .givesaldo
╰◈ .kurangsaldo
╰◈ .caradapetlimit

╭─┈ ${gris}▣ DOWNLOAD ▣${gris}┈────⊡
╰◈ .download *all link*
╰◈ .play *masukan judul lagu*
╰◈ .yts *judul*
╰◈ .ytmp4 *link*
╰◈ .ytmp3 *link*
╰◈ .tiktok *link*
╰◈ .tiktoksearch
╰◈ .tiktokaudio *link*
╰◈ .instagram
╰◈ .facebook
╰◈ .capcutdl
╰◈ .twitterdl 
╰◈ .mediafire *link*
╰◈ .gdrive *link*
╰◈ .gitclone
╰◈ .githubdl
╰◈ .pindl *link*
╰◈ .spotifysearch

╭─┈ ${gris}▣ AI ▣${gris}┈────⊡
╰◈ .ai
╰◈ .autoai
╰◈ .aivoice
╰◈ .ngel
╰◈ .prabowo
╰◈ .jokowi

╭─┈ ${gris}▣ STICKER ▣${gris}┈────⊡
╰◈ .sticker
╰◈ .swm
╰◈ .smeme
╰◈ .anticolong
╰◈ .qc *text*
╰◈ .emoji *contoh* 😤
╰◈ .emojimix
╰◈ .stickhandhold
╰◈ .stickshinobu
╰◈ .stickhighfive
╰◈ .stickcuddle
╰◈ .stickcringe
╰◈ .stickdance
╰◈ .stickhappy
╰◈ .stickglomp
╰◈ .sticksmug
╰◈ .stickblush
╰◈ .stickawoo
╰◈ .stickwave
╰◈ .sticksmile
╰◈ .stickslap
╰◈ .sticknom
╰◈ .stickpoke
╰◈ .stickwink
╰◈ .stickbonk
╰◈ .stickbully
╰◈ .stickyeet
╰◈ .stickbite
╰◈ .stickkiss
╰◈ .sticklick
╰◈ .stickpat
╰◈ .stickhug
╰◈ .stickkill
╰◈ .stickcry
╰◈ .stickspank
╰◈ .sticktickle

╭─┈ ${gris}▣ FUN ▣${gris}┈────⊡
╰◈ .cekjodoh
╰◈ .cekkhodam
╰◈ .cekkontol
╰◈ .cekmemek
╰◈ .citacita
╰◈ .truth
╰◈ .dare
╰◈ .jjmeryani
╰◈ .tiktokghea
╰◈ .tiktokpanrika
╰◈ .tiktokbocil
╰◈ .tiktokkayes
╰◈ .videogalau
╰◈ .cosplayangel
╰◈ .videowibu
╰◈ .chinese
╰◈ .hijab
╰◈ .indo
╰◈ .japanaese
╰◈ .korean
╰◈ .malay
╰◈ .randomboy
╰◈ .randomgirl
╰◈ .thai
╰◈ .vietnamese
╰◈ .cry
╰◈ .kill
╰◈ .hug
╰◈ .pat
╰◈ .lick
╰◈ .kiss
╰◈ .bite
╰◈ .yeet
╰◈ .bully
╰◈ .bonk
╰◈ .wink
╰◈ .poke
╰◈ .nom
╰◈ .slap
╰◈ .smile
╰◈ .wave
╰◈ .awoo
╰◈ .blush
╰◈ .smug
╰◈ .glomp
╰◈ .happy
╰◈ .dance
╰◈ .cringe
╰◈ .cuddle
╰◈ .highfive
╰◈ .handhold
╰◈ .tickle
╰◈ .feed

╭─┈ ${gris}▣ TOOLS ▣${gris}┈────⊡
╰◈ .get
╰◈ .ocr *ambil teks dari gambar*
╰◈ .toqr *link menjadi QR*
╰◈ .ss
╰◈ .remini *2* *8* *16*
╰◈ .kalkulator
╰◈ .lirik
╰◈ .removebg
╰◈ .gimage
╰◈ .infogempa
╰◈ .infocuaca
╰◈ .jarak *tasik|bandung*

╭─┈ ${gris}▣ SHORT URL ▣${gris}┈────⊡
╰◈ .tourl
╰◈ .tinyurl
╰◈ .vgd
╰◈ .ouo
╰◈ .rebrandly

╭─┈ ${gris}▣ SEARCH ▣${gris}┈────⊡
╰◈ .walpaper
╰◈ .npmsearch
╰◈ .caripenyakit
╰◈ .cekpenyakit
╰◈ .cariresep
╰◈ .resepdetail
╰◈ .bukalapaksearch
╰◈ .stickersearch
╰◈ .carisinyal
╰◈ .detailsinyal
╰◈ .wattpad
╰◈ .playstore
╰◈ .bukalapak
╰◈ .otakudesusearch
╰◈ .animeindosearch
╰◈ .githubsearch
╰◈ .kodepos *kota*

╭─┈ ${gris}▣ STALKER ▣${gris}┈────⊡
╰◈ .ttstalk
╰◈ .ghstalk

╭─┈ ${gris}▣ CONVERT ▣${gris}┈────⊡
╰◈ .kodebahasa
╰◈ .translate
╰◈ .speed-up
╰◈ .sad
╰◈ .sound
╰◈ .tts
╰◈ .bass
╰◈ .blown
╰◈ .deep
╰◈ .earrape
╰◈ .fast
╰◈ .fat
╰◈ .robot
╰◈ .slow
╰◈ .smooth
╰◈ .ghost
╰◈ .hode
╰◈ .chipmunk
╰◈ .reverb
╰◈ .reverse
╰◈ .vocaloid
╰◈ .nightcore
╰◈ .tupai
╰◈ .imut
╰◈ .toptt
╰◈ .toimg
╰◈ .tomp4
╰◈ .tomp3
╰◈ .toptv
╰◈ .togif
╰◈ .volume
╰◈ .volvideo
╰◈ .terbalik
╰◈ .toviewonce


╭─┈ ${gris}▣ ISLAMIC ▣${gris}┈────⊡
╰◈ .surah
╰◈ .listsurah
╰◈ .getsurah
╰◈ .alkitab (kristen)
╰◈ .asmaulhusna
╰◈ .audiosurah
╰◈ .ayatkursi
╰◈ .bacaansholat
╰◈ .doaharian
╰◈ .hadist
╰◈ .kisahnabi
╰◈ .niatsholat
╰◈ .randomquran
╰◈ .tahlil

╭─┈ ${gris}▣ PRIMBON ▣${gris}┈────⊡
╰◈ .artinama
╰◈ .artimimpi
╰◈ .kecocokanpasangan
╰◈ .kecocokannama
╰◈ .ramalancinta
╰◈ .jadiannikah
╰◈ .sifatusaha
╰◈ .rezeki
╰◈ .pekerjaan
╰◈ .penyakit
╰◈ .nasib
╰◈ .artitarot
╰◈ .fengshui
╰◈ .haribaik
╰◈ .harisangar
╰◈ .harisial
╰◈ .harinaga
╰◈ .peruntungan
╰◈ .weton
╰◈ .karakter
╰◈ .masasubur
╰◈ .zodiak

╭─┈ ${gris}▣ QUOTES ▣${gris}┈────⊡
╰◈ .quotesanime
╰◈ .quotesbacot
╰◈ .quotesbucin
╰◈ .quotesgalau
╰◈ .quotesgombal
╰◈ .quoteshacker
╰◈ .quotesislam
╰◈ .quoteskatabijak
╰◈ .quotesmotivasi
╰◈ .quotespantun
╰◈ .quotesrenungan
╰◈ .quotessenja

╭─┈ ${gris}▣ ANIME ▣${gris}┈────⊡
╰◈ .randomanime
╰◈ .randomimage
╰◈ .jadianime
╰◈ .loli
╰◈ .cosplay
╰◈ .husbu
╰◈ .milf
╰◈ .wallml
╰◈ .ppcp

╭─┈ ${gris}▣ EPHOTO ▣${gris}┈────⊡
╰◈ .glitchtext *teks bebas*
╰◈ .writetext
╰◈ .advancedglow
╰◈ .typographytext
╰◈ .pixelglitch
╰◈ .neonglitch
╰◈ .flagtext
╰◈ .flag3dtext
╰◈ .deletingtext
╰◈ .blackpinkstyle
╰◈ .glowingtext
╰◈ .underwatertext
╰◈ .logomaker
╰◈ .cartoonstyle
╰◈ .papercutstyle
╰◈ .watercolortext
╰◈ .effectclouds
╰◈ .blackpinklogo
╰◈ .gradienttext
╰◈ .summerbeach
╰◈ .luxurygold
╰◈ .multicoloredneon
╰◈ .sandsummer
╰◈ .galaxywallpaper
╰◈ .1917style
╰◈ .makingneon
╰◈ .royaltext
╰◈ .freecreate
╰◈ .galaxystyle
╰◈ .lighteffects

╭─┈ ${gris}▣ TEXTPRO ▣${gris}┈────⊡
╰◈ .flaming1
╰◈ .flaming2
╰◈ .flaming3
╰◈ .fliming4
╰◈ .flaming5
╰◈ .tweetc
╰◈ .faketweet

╭─┈ ${gris}▣ NSFW ▣${gris}┈────⊡
╰◈ .paptt
╰◈ .xnxdl
╰◈ .xnxsearch
╰◈ .xvideosearch
╰◈ .xvideosdl
╰◈ .hentaivid
╰◈ .animespank
╰◈ .gifblowjob
╰◈ .blowjob
╰◈ .cuckold
╰◈ .eba
╰◈ .pussy
╰◈ .yuri
╰◈ .zettai
╰◈ .hana

╭─┈ ${gris}▣ PANEL ▣${gris}┈────⊡
╰◈ .*coming soon* 💸

╭─┈ ${gris}▣ TOP UP ▣${gris}┈────⊡
╰◈ .pricelist
╰◈ .pricelistwallet
╰◈ .pricelistpulsa
╰◈ .pricelistkuota
╰◈ .pricelistgame
╰◈ .saldo
╰◈ .addsaldo
╰◈ .minsaldo
╰◈ .ceksaldo (saldo di website)
╰◈ .cekip (ip provider)
╰◈ .sendqr 62xxx
╰◈ .tutortopup 
╰◈ .tutordepo 

╭─┈ ${gris}▣ TOKO EHZ ▣${gris}┈────⊡
╰◈ .*coming soon* 💸

╭─┈ ${gris}▣ BUG ▣${gris}┈────⊡
╰◈ .bugstik

╭─┈ ${gris}▣ RPG ▣${gris}┈────⊡
╰◈ .daftar
╰◈ .unreg
╰◈ .my
╰◈ .tomoney
╰◈ .adventure
╰◈ .bank
╰◈ .nabung
╰◈ .tarik
╰◈ .korupsi
╰◈ .belipet
╰◈ .berburu
╰◈ .berdagang
╰◈ .berkebun
╰◈ .bonus
╰◈ .buah
╰◈ .build
╰◈ .bunuh
╰◈ .casino
╰◈ .collect
╰◈ .cook / masak
╰◈ .cooldown
╰◈ .craft
╰◈ .daily
╰◈ .dungeon
╰◈ .eat / makan
╰◈ .berimakan
╰◈ .fight
╰◈ .gajian
╰◈ .go / pergi
╰◈ .heal
╰◈ .hourclaim
╰◈ .hunt
╰◈ .inv 
╰◈ .kandang
╰◈ .karung
╰◈ .kerja
╰◈ .koboy
╰◈ .kolam
╰◈ .latih
╰◈ .lb
╰◈ .maling
╰◈ .mancing
╰◈ .membunuh
╰◈ .mentransfer
╰◈ .meracik
╰◈ .merampok
╰◈ .merchant 
╰◈ .mining
╰◈ .minum
╰◈ .misi
╰◈ .monthly
╰◈ .mulung 
╰◈ .nambang
╰◈ .nebang
╰◈ .nguli
╰◈ .ngojek
╰◈ .open
╰◈ .openbo
╰◈ .pasar
╰◈ .ngelont
╰◈ .petshop
╰◈ .polisi
╰◈ .ramuan
╰◈ .redeem
╰◈ .referal
╰◈ .repair
╰◈ .restoran
╰◈ .rob
╰◈ .roket 
╰◈ .role
╰◈ .nyampah
╰◈ .slectskill
╰◈ .shop 
╰◈ .tokoikan
╰◈ .smelt
╰◈ .smith
╰◈ .sumbangan
╰◈ .taxy
╰◈ .tfplug
╰◈ .upgrade
╰◈ .weekly

╭─┈ ${gris}▣ STORAGE ▣${gris}┈────⊡
╰◈ .addvn
╰◈ .delvn
╰◈ .listvn
╰◈ .addstik
╰◈ .delstik
╰◈ .liststik
╰◈ .addimage
╰◈ .delimage
╰◈ .listimage
╰◈ .addvideo
╰◈ .delvideo
╰◈ .listvideo
╰◈ .addrespon
╰◈ .delrespon
╰◈ .listrespon

╭─┈ ${gris}▣ SETTINGS ▣${gris}┈────⊡
╰◈ .console
╰◈ .autobio
╰◈ .autosticker
╰◈ .addcmdowner
╰◈ .delcmdpwner
╰◈ .listcmdowner
╰◈ .addcmdprem
╰◈ .delcmdprem
╰◈ .listcmdprem
╰◈ .addcmdlimit
╰◈ .delcmdlimit
╰◈ .listcmdlimit
╰◈ .blockcmd
╰◈ .unblockcmd
╰◈ .listblockcmd
╰◈ .adderror
╰◈ .delerror
╰◈ .listerror
╰◈ .clearallerror
╰◈ .clearalluser
╰◈ .setthumb
╰◈ .setreply
╰◈ .setmenu
╰◈ .restart

╭─┈ ${gris}▣ OWNER ▣${gris}┈────⊡
╰◈ .ban
╰◈ .unban
╰◈ .listban
╰◈ .clearallban
╰◈ .block
╰◈ .unblock
╰◈ .listblock
╰◈ .clearallblock
╰◈ .backup
╰◈ .join
╰◈ .out
╰◈ .delfile
╰◈ .delfolder
╰◈ .addplugin
╰◈ .delplugin
╰◈ .listplugin
╰◈ .getplugin
╰◈ .sendplugin
╰◈ .getfunc *function*
╰◈ .addcase
╰◈ .getcase
╰◈ .delcase
╰◈ .listcase
╰◈ .sendcase
╰◈ .broadcast *1gc*
╰◈ .bcuser
╰◈ .bcgc
╰◈ .upch *send ke chanel*
╰◈ .listgc
╰◈ .listpc
╰◈ .addsewa
╰◈ .listsewa
╰◈ .ceksewa
╰◈ .addowner
╰◈ .delowner
╰◈ .listowner
╰◈ .addprem
╰◈ .listprem
╰◈ .delprem
╰◈ .cekprem
╰◈ .public
╰◈ .self
╰◈ .$
╰◈ .> `)}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
