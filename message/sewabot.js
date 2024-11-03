

exports.dada = (prefix, pushname, ucapanWaktu) => {
return `${ucapanWaktu} kak ${pushname}
Berikut adalah list harga untuk sewa bot

*SEWA BOT*
🌀 *Harga*
- Pengguna baru Rp. 5.000 per group -Perpanjang Rp. 3.000
- Masa aktif 7 hari

🌀 *Harga*
- Pengguna baru Rp. 10.000 per group
- Perpanjang Rp. 8.000
- Masa aktif 30 Hari

🌀 *Harga*
- Rp. 25.000 per grup
> Masa aktif 200 Hari
- Rp. 30.000 per grub
> Masa aktif 250 Hari
- Rp. 50.000 per grub
> Masa aktif satu tahun


*PREMIUM*
🌀 *User Premium*
*Harga*
- Rp. 10.000 per user
> Masa aktif 500 Hari
- Rp. 25.000 per user
> Masa aktif 1500 Hari

*Fitur Premium*
• Limit dan limit game tanpa batas
• Klaim lebih banyak EXP Harian
• Bisa membuat/mengubah watermark stiker contoh: .take aku|kamu
• Dan masih banyak lagi

𝗡𝗢𝗧𝗘 : 

Bot on 24 jam tapi kadang 
juga mati klo lgi ada error 
atau lgi perbaikan bug.

Kalo mau sewa bisa chat
owner Bot
`
}

const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})




















