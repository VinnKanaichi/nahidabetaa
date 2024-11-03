const fetch = require('node-fetch');

let handler = async (m, { hanz, text, usedPrefix, command }) => {
  if (!text) throw `Masukkan URL Spotify.\nContoh: ${usedPrefix + command} https://open.spotify.com/track/2Tp8vm7MZIb1nnx1qEGYv5`;

  m.reply('Mencari lagu...');

  try {
    let apiUrl = `https://api.agatz.xyz/api/spotifydl?url=${encodeURIComponent(text)}`;
    let res = await fetch(apiUrl);

    // Periksa status respons
    if (!res.ok) throw 'Gagal mengambil data dari API';

    let json = await res.json();
    console.log('API Response:', json); // Log respons dari API

    if (json.status !== 200) throw 'Gagal mengambil data dari API';

    let data = JSON.parse(json.data); // Mengurai data JSON
    if (!data) throw 'Data tidak ditemukan.';

    // Pastikan ada URL audio
    if (!data.url_audio_v1) throw 'Link audio tidak ditemukan.';

    let caption = `*Judul:* ${data.judul || 'Tidak ada judul'}\n` +
                  `*Channel:* ${data.nama_channel || 'Tidak ada channel'}\n` +
                  `*Durasi:* ${data.durasi || 'Tidak ada durasi'} detik\n` +
                  `*Link Audio:* [Unduh MP3](${data.url_audio_v1})`;

    // Mengirimkan audio
    await hanz.sendMessage(m.chat, {
      audio: { url: data.url_audio_v1 },
      caption: caption,
      mimetype: 'audio/mpeg'
    }, { quoted: m });

  } catch (e) {
    m.reply(`Terjadi kesalahan: ${e.message || 'Kesalahan tidak terduga'}`);
  }
};

handler.help = ['spotifydl'];
handler.tags = ['downloader'];
handler.command = /^spotifydl$/i;
handler.limit = false;

module.exports = handler;