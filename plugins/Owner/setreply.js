let handler = async (m, { hanz, q, setReply, isOwner, args, prefix, command }) => {
    if (!isOwner) return setReply("Hanya pemilik yang dapat menggunakan perintah ini.");

    // Map of valid reply types
    const validReplyTypes = ['web', 'web2', 'mess', 'katalog', 'document'];

    if (!args[0]) {
        return setReply(`Silakan pilih salah satu:
• web
• web2
• mess
• katalog
• document
Contoh: ${prefix + command} web`);
    }
    
    if (validReplyTypes.includes(args[0])) {
        replyType = args[0];
        if (replyType === args[0]) {
            return setReply("Udah aktif");
        }
        replyType = args[0];
        return setReply(`Berhasil mengubah setreply ke ${args[0]}`);
    } else {
        // Handle invalid reply types
        return setReply("SetReply Tidak Ditemukan");
    }
};

handler.help = ["user"];
handler.tags = ["owner"];
handler.command = ["setreply"];

module.exports = handler;