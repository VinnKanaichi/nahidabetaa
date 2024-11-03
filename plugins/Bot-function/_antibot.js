let handler = (m) => m;

handler.before = async function (m, { hanz }) {
  // Check if the chat is from a group and if the anti-bot feature is active
  const isAntiBot = m.isGroup ? db.data.chats[m.chat].antibot : false;
  
  // ANTI BOT
  if (m.isGroup && isAntiBot) {
    // If the message is from a Baileys bot and not from the sender themselves
    if (m.isBaileys && !m.fromMe) {
      // Check if the bot is not an admin of the group
      const isBotAdmin = await hanz.groupMetadata(m.chat).then(group => {
        const botNumber = hanz.user.jid;
        return group.participants.some(participant => participant.jid === botNumber && participant.admin);
      });

      // If the bot is not an admin, just send a message
      if (!isBotAdmin) {
        return m.reply('Bot ini bukan admin, tidak bisa mengeluarkan bot lain.');
      } else {
        // If the bot is an admin, remove the detected bot
        await m.reply(`*Another Bot Detected*\n\nHusshhh! Get away from this group!!!`);
        return await hanz.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      }
    }
  }
};

module.exports = handler;
