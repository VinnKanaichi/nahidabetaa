const fetch = require('node-fetch');

let handler = async (m, { text, hanz }) => {
  if (!text) return m.reply('Masukkan nama paket aplikasi, contoh: com.whatsapp');

  const apiKey = '9ffed0bfda4685f837e01b63'; // Ganti dengan API Key Anda

  try {
    m.reply('Tunggu sebentar, sedang mengambil informasi APK...');

    let response = await fetch(`https://api.lolhuman.xyz/api/apkdownloader?apikey=${apiKey}&package=${text}`);
    let json = await response.json();

    if (json.status !== 200) throw 'Terjadi kesalahan saat mengambil data APK.';

    let { apk_name, apk_icon, apk_version, apk_author, apk_link } = json.result;

    let message = `
*Nama Aplikasi:* ${apk_name}
*Versi:* ${apk_version}
*Pengembang:* ${apk_author}
*Link Download:* ${apk_link}
*Icon:*
![Icon](${apk_icon})
    `;
    m.reply(message);

    // Mengirimkan dokumen APK
   /* await hanz.sendMessage(m.chat, {
      document: { url: apk_link },
      mimetype: 'application/vnd.android.package-archive',
      fileName: `${apk_name}.apk`
    });*/
  } catch (e) {
    m.reply(`Terjadi kesalahan: ${e.message || e}`);
  }
};

handler.command = ['apkdl'];
handler.tags = ['downloader'];
handler.help = ['apkdownloader <package_name>'];

module.exports = handler;