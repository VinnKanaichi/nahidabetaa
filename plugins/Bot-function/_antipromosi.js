let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // ANTI PROMOSI
  const isAntiPromosi = m.isGroup ? db.data.chats[m.chat].antipromosi : false;
  const promosiKeywords = ['jual', 'promo', 'diskon', 'harga', 'transaksi', 'open', 'order', 'ready', 'mengundang', 'jasa', 'sedia', 'nokos', 'domain', 'pembayaran',,'SEWA','sewa','panel','DANA','GOPAY,','OVO', 'menyediakan']; // Tambahkan kata kunci promosi di sini

  // Cek jika grup dan fitur anti-promosi aktif
  if (m.isGroup && isAntiPromosi) {
    // Pastikan m.budy ada dan adalah string sebelum melakukan pencarian
    const messageContent = m.budy ? m.budy.toLowerCase() : '';

    // Cek jika pesan mengandung kata kunci promosi
    if (promosiKeywords.some(keyword => messageContent.includes(keyword))) {
      // Cek jika pengirim adalah admin grup
      if (m.isAdmin) {
        return m.reply('Kamu admin grup, jadi pesan ini tidak akan dihapus :v');
      }

      /*/ Kirim pesan pemberitahuan
      await m.reply(`\`\`\`「 Promosi Terdeteksi 」\`\`\`\nMaaf, saya menghapus pesan ini karena mengandung promosi.`);*/

      // Hapus pesan promosi yang terdeteksi
      await hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
    }
  }
};

module.exports = handler;
