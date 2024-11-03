let handler = async (m, { hanz, type, content, budy, isAntiViewOnce }) => {
  const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage');
  const isViewOnce = type === 'viewOnceMessage';

  if ((isViewOnce || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
    const { downloadContentFromMessage } = (await import('baileys')).default;

    let view;
    if (isQuotedViewOnce) {
      view = m.quoted.message;
    } else {
      view = m.message.viewOnceMessage.message;
    }

    let Type = Object.keys(view)[0];
    let media = await downloadContentFromMessage(view[Type], Type === 'imageMessage' ? 'image' : 'video');
    let buffer = Buffer.concat([]);

    for await (const chunk of media) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    if (/video/.test(Type)) {
      hanz.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m);
    } else if (/image/.test(Type)) {
      hanz.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m);
    }
  }
};

module.exports = handler;
