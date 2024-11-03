let handler = async (m, { hanz, isOwner, isGroup, setReply, args }) => {
    if (isGroup) return setReply('Perintah ini hanya bisa digunakan dalam grup.');
    if (!isOwner) return setReply('Hanya owner yang bisa menggunakan perintah ini.');

    // Ambil semua grup yang bot sudah masuki
    let groupList = await hanz.groupFetchAllParticipating();
    let groups = Object.values(groupList); // Daftar grup dalam bentuk array

    if (groups.length === 0) {
        return setReply('Bot tidak tergabung dalam grup mana pun.');
    }

    // Jika tidak ada input, tampilkan daftar grup
    if (!args[0]) {
        let groupText = `${gris}Silahkan Di Pilih Ingin Broadcast ke Group Mana\nDaftar Grup yang Ditempati Bot${gris}:\n\n`;
        groups.forEach((group, index) => {
            groupText += `${index + 1}. ${group.subject}\n`;
        });
        groupText += `\nKetik nomor grup dan pesan yang ingin dikirim. Contoh: broadcast 1 Pesan saya.`;
        return setReply(groupText);
    }

    // Memilih grup berdasarkan input pengguna
    let groupIndex = parseInt(args[0]) - 1;
    if (isNaN(groupIndex) || groupIndex < 0 || groupIndex >= groups.length) {
        return setReply('Nomor grup tidak valid.');
    }

    // Menggabungkan pesan dari argumen setelah nomor grup
    let message = args.slice(1).join(' ');

    if (!message) return setReply('Silakan masukkan pesan yang ingin dikirim.');
let contextInfo = {
        forwardingScore: 50,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid,
            serverMessageId: 100,
            newsletterName
        },
        externalAdReply: {
            showAdAttribution: true,
            renderLargerThumbnail: false,
            title: `${botName}`,
            body: `Version: ${baileysVersion}`,
            mediaType: 1, 
            containsAutoReply: true,
            thumbnailUrl: "https://telegra.ph/file/89178aae70c89f30febca.png"
        }
    };
    let selectedGroup = groups[groupIndex].id;
let textBc = `
*「 BROADCAST GROUP 」*
*Khusus untuk Grup:* _${groups[groupIndex].subject}_

────────────────────────
*📢 Pesan dari Owner:*
"${message}"
────────────────────────

Terima kasih telah menjadi bagian dari komunitas ini. Kami menghargai dukungan dan kebersamaan Anda di grup ini. Tetap semangat dan terus berkontribusi!

Salam hangat,  
Owner
`
// Jika ada gambar untuk dikirim
    if (m.quoted && m.quoted.mediaKey) {
        const media = await hanz.downloadMediaMessage(m.quoted);
        await hanz.sendMessage(selectedGroup, { image: media, caption: textBc });
    } else {
        // Jika tidak ada gambar, kirim pesan teks
        await hanz.sendMessage(selectedGroup, { text: textBc, contextInfo });
    }

    
    

    setReply(`Berhasil mengirim pesan ke grup: ${groups[groupIndex].subject}`);
};

handler.help = ['broadcast'];
handler.tags = ['owner'];
handler.command = ['broadcast'];
handler.owner = true;

module.exports = handler;