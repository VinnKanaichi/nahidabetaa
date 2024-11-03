/*const fetch = require('node-fetch'); // Pastikan Anda mengimpor fetch jika diperlukan

let handler = async (m, { q, hanz, prefix }) => {
  // Memastikan ada URL yang diberikan
  if (!q) {
    return m.reply(`Contoh:\n${prefix}get https://github.com/RangelChan`);
  }

  // Memeriksa format URL
  if (!/^https?:\/\//.test(q)) {
    return m.reply("URL tidak valid! Mohon masukkan URL yang benar.");
  }

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const res = await fetch(q, requestOptions);
    const contentType = res.headers.get("content-type");

    // Mengirim konten sesuai tipe
    if (contentType.includes("video/mp4")) {
  hanz.sendMessage(m.chat, { video: { url: q }, mimetype: "video/mp4", caption: "🎥 Video berhasil diambil!" }, { quoted: m });
} else if (contentType.includes("audio/mpeg")) {
  hanz.sendMessage(m.chat, { audio: { url: q }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m });
} else if (contentType.includes("image/")) {
  hanz.sendMessage(m.chat, { image: { url: q }, caption: "📷 Gambar berhasil diambil!" }, { quoted: m });
} else if (contentType.includes("image/webp")) {
  hanz.sendMessage(m.chat, { sticker: { url: q } }, { quoted: m });
} else {
  const result = await res.text();
  m.reply(result);
}
} catch (error) {
  m.reply("😔 Terjadi kesalahan. Silakan coba lagi.");
}

};

// Menambahkan bantuan dan tag
handler.help = ["get", "fetch"];
handler.tags = ["tools"];
handler.command = /^(get|fetch)$/i;

module.exports = handler;*/