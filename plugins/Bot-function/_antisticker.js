let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // Cek apakah fitur anti-sticker aktif di grup
  const isAntiSticker = m.isGroup ? db.data.chats[m.chat].antisticker : false;

  // Cek apakah pesan mengandung media (sticker)
  const isHanMedia = m.mtype;

  // ANTI STICKER
  if (m.isGroup && isAntiSticker && isHanMedia) {
    if (isHanMedia === "stickerMessage") {
      // Cek jika pengirim adalah admin
      if (m.isAdmin) {
        return m.reply('😎 Kamu admin grup, jadi sticker ini tidak akan dihapus!');
      }
      
     if (!m.isBotAdmins) {
        // Delete the detected audio message
        return hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
      }
    }
  }
};

module.exports = handler;
