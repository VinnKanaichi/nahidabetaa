const fetch = require('node-fetch');

let handler = async (m, { hanz, text, usedPrefix, command }) => {
    if (!text) throw `Gunakan: ${usedPrefix + command} <query>`;
    
    await m.reply('Proses pencarian...'); // Mengirim pesan loading

    let searchLink = `https://api.agatz.xyz/api/ytsearch?message=${encodeURIComponent(text)}`;

    try {
        let response = await fetch(searchLink);
        let result = await response.json();

        if (result.status === 200) {
            let videos = result.data;
            if (videos.length === 0) {
                await hanz.reply(m.chat, 'Tidak ada hasil ditemukan.', m);
                return;
            }

            let { title, url, timestamp, views, thumbnail } = videos[0]; // Mengambil video pertama sebagai contoh
            let message = `*Hasil pencarian YouTube:*\n\n*${title}*\n${url}\n${timestamp} - ${views} views\n\n`;

            // Menambahkan informasi dari video lainnya
            for (let i = 1; i < videos.length; i++) {
                let video = videos[i];
                message += `*${video.title}*\n${video.url}\n${video.timestamp} - ${video.views} views\n\n`;
            }

            // Mengirim thumbnail dari video pertama dan pesan hasil pencarian
            await hanz.sendFile(m.chat, thumbnail, 'thumbnail.jpg', message, m);
        } else {
            await hanz.reply(m.chat, 'Gagal melakukan pencarian. Coba lagi nanti.', m);
        }
    } catch (e) {
        await hanz.reply(m.chat, 'Terjadi kesalahan saat melakukan pencarian.', m);
    }
};

// Metadata plugin
handler.help = ['yts <query>'];
handler.tags = ['search'];
handler.command = /^yts$/i;
handler.limit = true;

module.exports = handler;