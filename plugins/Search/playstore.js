/* 
  ────────「 *RANGELOFFICIAL* 」──────── 
  Powered by *EhanzDhoanx* × *MENHERA MD* 
  Copyright © Raihan Fadillah 
  Instagram: @ehanzdhonax 

  ⚠️ *Jangan hapus watermark ini!* 
  Dukunganmu sangat berarti untuk kami! 
  ──────────────────────────────── 
*/
 

const fetch = require('node-fetch');

let handler = async (m, { hanz,setReply, text }) => {
  if (!text) throw 'Harap masukkan nama aplikasi.';

  try {
    let res = await fetch(`https://api.agatz.xyz/api/playstore?message=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (json.status !== 200 || !json.data) {
      throw 'Data tidak ditemukan untuk aplikasi tersebut.';
    }

    let app = json.data[0]; // Mengambil aplikasi pertama dari array
    let message = `📱 **Nama Aplikasi:** ${app.nama}\n` +
                  `👨‍💻 **Pengembang:** [${app.developer}](${app.link_dev})\n` +
                  `🌟 **Rating:** ${app.rate} (${app.rate2})\n` +
                  `🔗 **[Link Aplikasi](${app.link})**\n` +
                  `🖼️ **Thumbnail:** ![Image](${app.img})`;

    setReply(message);
  } catch (e) {
    m.reply(`Terjadi kesalahan: ${e}`);
  }
};

handler.command = ['playstore'];
handler.tags = ['search'];

module.exports = handler;