let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // Cek apakah fitur anti-video aktif di grup
  const isAntiVideo = m.isGroup ? db.data.chats[m.chat].antivideo : false;

  // Cek apakah pesan mengandung media (video)
  const isHanMedia = m.mtype;

  // ANTI VIDEO
  if (m.isGroup && isAntiVideo && isHanMedia) {
    if (isHanMedia === "videoMessage") {
      // Cek jika pengirim adalah admin
       if (m.isAdmin) {
        return m.reply('😎 Kamu admin grup, jadi video ini tidak akan dihapus!');

      }    
   if (!m.isBotAdmins) {
        // Delete the detected audio message
        return hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
      }
    }
  }
};

module.exports = handler;
