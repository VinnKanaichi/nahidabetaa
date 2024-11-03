let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // ANTI LINK
  const isAntiLinkCh = m.isGroup ? db.data.chats[m.chat].antilinkch : false;
  const linkRegex = /https?:\/\/(whatsapp\.com\/channel\/[A-Za-z0-9]+)/; // Regex to detect WhatsApp channel links

  // Cek jika grup dan fitur anti-link channel aktif
  if (m.isGroup && isAntiLinkCh) {
    // Pastikan m.budy ada dan adalah string sebelum melakukan pencarian
    const messageContent = m.budy ? m.budy.toLowerCase() : '';

    // Cek jika pesan mengandung link channel
    if (linkRegex.test(messageContent)) {
      // Cek jika pengirim adalah admin grup
      if (m.isAdmin) {
        return m.reply('Kamu admin grup, jadi pesan ini tidak akan dihapus :v');
      }

      // Kirim pesan pemberitahuan
      await m.reply(`\`\`\`「 Link Terdeteksi 」\`\`\`\nMaaf, saya menghapus pesan ini karena mengandung tautan channel WhatsApp.`);

      // Hapus pesan yang terdeteksi
      await hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
    }
  }
};

module.exports = handler;
