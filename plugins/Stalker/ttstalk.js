const fetch = require('node-fetch');

let handler = async (m, { hanz, sendMessage, text }) => {
  if (!text) throw 'Harap masukkan nama pengguna TikTok.';

  try {
    let res = await fetch(`https://api.agatz.xyz/api/ttstalk?name=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (json.status !== 200 || !json.data) {
      throw 'Data tidak ditemukan.';
    }

    let data = json.data; // Mengambil data pengguna
    let message = `*Nama*: ${data.name}\n` +
                  `*Username*: ${data.username}\n` +
                  `*Bio*: ${data.bio}\n` +
                  `*Followers*: ${data.followers}\n` +
                  `*Following*: ${data.following}\n` +
                  `*Likes*: ${data.likes}\n` +
                  `*Posts*: ${data.posts}` +
                   `*Foto Profil* : (${data.photo})`;

    await hanz.sendMessage(m.chat, {
      image: { url: data.photo }, // Menggunakan URL foto profil sebagai gambar
      caption: message, // Menggunakan pesan sebagai caption
    });
  } catch (e) {
    await hanz.sendMessage(m.chat, `Terjadi kesalahan: ${e.message || e}`);
  }
};

handler.command = ['ttstalk'];
handler.tags = ['social'];

module.exports = handler;