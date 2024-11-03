let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // Anti-Link Settings
  const isAntiLinkGc = m.isGroup ? db.data.chats[m.chat].antilinkgc : false;
  const antiLinkAction = m.isGroup ? db.data.chats[m.chat].antilinkgcAction : 'delete'; // "delete" or "remove"
  const linkRegex = /https?:\/\/(chat\.whatsapp\.com\/[A-Za-z0-9]+)/; // Regex to detect WhatsApp group links

  // Check if group and anti-link feature is active
  if (m.isGroup && isAntiLinkGc) {
    // Ensure message content is a string before proceeding
    const messageContent = m.budy ? m.budy.toLowerCase() : '';

    // Check if message contains a link
    if (linkRegex.test(messageContent)) {
      // Check if sender is a group admin
      if (m.isAdmin) {
        return m.reply('Kamu admin grup, jadi pesan ini tidak akan dihapus :v');
      }

      // Send notification message
      await m.reply(`\`\`\`「 Link Terdeteksi 」\`\`\`\nMaaf, saya akan mengambil tindakan sesuai pengaturan anti-link grup ini.`);

      if (antiLinkAction === 'delete') {
        // Delete the detected message
        await hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
      } else if (antiLinkAction === 'remove') {
        // First, delete the detected message
        await hanz.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } });
        
        // Then, remove the sender from the group
        await hanz.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
};

module.exports = handler;
