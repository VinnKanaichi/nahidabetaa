const axios = require('axios');

let handler = async (m, { args,hanz }) => {
 
    if (!args[0]) return m.reply('Masukkan link TikTok! Contoh: .tiktok https://vt.tiktok.com/ZS24ShS1n/');

   
    const url = args[0];
    if (!url.match(/(https:\/\/vt.tiktok.com\/|https:\/\/www.tiktok.com\/)/gi)) {
        return m.reply('Masukkan link TikTok yang valid.');
    }

   
    try {
        const response = await axios.get(`https://api.agatz.xyz/api/tiktok?url=${encodeURIComponent(url)}`);
        const data = response.data.data;

      
        const musicUrl = data.music_info.url;
        const musicTitle = data.music_info.title;

        
        if (musicUrl) {
            await hanz.sendMessage(m.chat, { audio: { url: musicUrl }, mimetype: 'audio/mp4', fileName: `${musicTitle}.mp3` });
            await m.reply(`Mengirim audio: ${musicTitle}`);
        } else {
            m.reply('Audio tidak tersedia.');
        }

    } catch (error) {
        console.error("Error fetching TikTok audio:", error);
        m.reply('Terjadi kesalahan saat mengunduh audio TikTok.');
    }
};

handler.help = ['tiktokaudio <link>'];
handler.tags = ['downloader'];
handler.command = ["tiktokaudio2"]


module.exports = handler;
