let handler = async (m, { setReply }) => {
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let pnel = Ehztext(`
🎐 *${gris}「 PRICE LIST PANEL 」${gris}* 🎐

━━━━━━━━━━━━━━━━━━━
${gris}📡 UNLIMITED${gris}
➤ *Unlimited* RAM/CPU
➤ Masa Aktif: *1 Bulan*
➤ Harga: *Rp10.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 1GB${gris}
➤ RAM: *1GB* | CPU: *50%*
➤ Masa Aktif: *10 Hari*
➤ Harga: *Rp1.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 2GB${gris}
➤ RAM: *2GB* | CPU: *70%*
➤ Masa Aktif: *15 Hari*
➤ Harga: *Rp2.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 3GB${gris}
➤ RAM: *3GB* | CPU: *100%*
➤ Masa Aktif: *20 Hari*
➤ Harga: *Rp3.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 4GB${gris}
➤ RAM: *4GB* | CPU: *125%*
➤ Masa Aktif: *25 Hari*
➤ Harga: *Rp4.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 5GB${gris}
➤ RAM: *5GB* | CPU: *150%*
➤ Masa Aktif: *30 Hari*
➤ Harga: *Rp5.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 6GB${gris}
➤ RAM: *6GB* | CPU: *175%*
➤ Masa Aktif: *30 Hari*
➤ Harga: *Rp6.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 7GB${gris}
➤ RAM: *7GB* | CPU: *175%*
➤ Masa Aktif: *30 Hari*
➤ Harga: *Rp7.000*

━━━━━━━━━━━━━━━━━━━
${gris}📡 8GB${gris}
➤ RAM: *8GB* | CPU: *200%*
➤ Masa Aktif: *30 Hari*
➤ Harga: *Rp8.000*

━━━━━━━━━━━━━━━━━━━
${gris}JADIBOT${gris}
➤ 15 hari 7k
━━━━━━━━━━━━━━━━━━━
*NOTE* :
${readmore}
${gris}Keuntungan Menggunakan Panel Kami${gris}
➤ Hemat Kuota
➤ Server Aktif Meski Keluar dari Situs
➤ Script Anda Aman (*No Culik SC*)
➤ Jaminan Uang Kembali jika Situs Mati (Hubungi Admin)
━━━━━━━━━━━━━━━━━━━
`)



setReply(pnel)
}

handler.command = /^(listpanel)$/i;
handler.tags = ['info'];
handler.help = ['panel'];

module.exports = handler;