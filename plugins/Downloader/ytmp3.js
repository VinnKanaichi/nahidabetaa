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

let handler = async (m, { hanz, text }) => {
 
  if (!text) throw 'Harap masukkan URL YouTube yang ingin diunduh sebagai MP3.';

  try {
    m.reply(mess.wait)
  
    let res = await fetch(`https://api.agatz.xyz/api/ytmp3?url=${encodeURIComponent(text)}`);
    let json = await res.json();

    
    if (json.status !== 200 || !json.data) {
      throw 'Audio tidak ditemukan atau terjadi kesalahan.';
    }

  
    let quality = json.data['320'] ? '320' : '128';
    let audioData = json.data[quality].response;
    
 
    await hanz.sendMessage(m.chat, {
      audio: { url: audioData.url },
      mimetype: 'audio/mp4',
      fileName: audioData.filename,
      ptt: false 
    }, { quoted: m }); 
    
  } catch (e) {
 
    m.reply(`Terjadi kesalahan: ${e.message || e}`);
  }
};


handler.command = ['ytmp3'];
handler.tags = ['downloader'];
handler.help = ['ytmp3 <url>'];
handler.limit = true;

module.exports = handler;
