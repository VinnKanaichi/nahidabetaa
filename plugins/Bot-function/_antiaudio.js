let handler = (m) => m;

handler.before = async function (m, { isAdmins,isBotAdmins,hanz }) {
  // Check if anti-audio feature is active in the group
  const isAntiAudio = m.isGroup ? db.data.chats[m.chat].antiaudio : false;

  // Check if the message contains media (audio)
  const isHanMedia = m.mtype;

  // ANTI AUDIO
  if (m.isGroup && isAntiAudio && isHanMedia) {
    if (isHanMedia === "audioMessage") {
      if (m.isAdmin) {
        return m.reply('😎 Kamu admin grup, jadi audio ini tidak akan dihapus!');
      }

      if (!isBotAdmins) {
        // Delete the detected audio message
        return hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }});
      }
    }
  }
};

module.exports = handler;
