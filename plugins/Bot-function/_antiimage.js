


let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // Check if the anti-image feature is active in the group
  const isAntiImage = m.isGroup ? db.data.chats[m.chat].antiimage : false;
  
  // Check if the message contains media (image)
  const isHanMedia = m.mtype;

  // ANTI IMAGE
  if (m.isGroup && isAntiImage && isHanMedia) {
    if (isHanMedia === "imageMessage") {
      // Check if the sender is an admin
      if (m.isAdmin) {
        return m.reply('😎 Kamu admin grup, jadi image ini tidak akan dihapus!');
      }
      
      if (!m.isBotAdmins) {
        // Delete the detected audio message
        return hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
      }
    }
  }
};

module.exports = handler;
