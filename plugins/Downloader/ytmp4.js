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
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const { downloadMp4 } = require('../../lib/scraper'); // Pastikan path ini benar

let handler = async (m, { hanz, text }) => {
  // Validasi URL untuk memastikan itu adalah tautan YouTube
  if (!text || !text.includes('youtu')) {
    return m.reply(`• *Contoh Penggunaan:* .ytmp4 https://www.youtube.com/xxxxxxx`);
  }

  // Mendapatkan ID Video dari URL
  const vidId = ytdl.getURLVideoID(text);

  // Mendapatkan detail video
  let getresult = await yts({ videoId: vidId });
  let convert = getresult.video;

  // Mengatur pesan detail video dengan gaya elegan
  const captions = `🌟 *Video YouTube Downloaded!* 🌟\n
🎬 *Judul*: ${convert.title}
📆 *Tanggal Upload*: ${convert.ago}
⏱️ *Durasi*: ${convert.timestamp}
👀 *Ditonton*: ${convert.views} kali
👤 *Channel*: [${convert.author.name}](${convert.author.url})

📜 *Deskripsi*:
${convert.description ? convert.description.substring(0, 100) + '...' : 'Tidak ada deskripsi'}

🔗 *Link Video*: ${convert.url}

📥 Selamat menikmati video ini!`;

  // Mengunduh video
  const videoBuffer = await downloadMp4(convert.url);

  // Mengirimkan video dengan caption
  await hanz.sendMessage(m.chat, { 
    video: videoBuffer, 
    caption: captions 
  }, { quoted: m });
};

handler.command = ['ytmp4'];
handler.tags = ['downloader'];
handler.help = ['ytmp4 <url>'];
handler.limit = true;

module.exports = handler;


