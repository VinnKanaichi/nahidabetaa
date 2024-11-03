let handler = async (m, { hanz, q, setReply, isOwner, args, prefix, command }) => {
    if (!isOwner) return setReply('Hanya owner yang bisa mengakses perintah ini.');

    // Cek argumen pertama dari input
    if ((args[0]) === 'katalog' || (args[0]) === 'product') {
        setmenu = "katalog";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'image' || (args[0]) === 'img') {
        setmenu = "image";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'document') {
        setmenu = "document";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'gif') {
        setmenu = "gif";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'thumbnail') {
        setmenu = "thumbnail";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'payment') {
        setmenu = "payment";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'button') {
        setmenu = "button";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'livelocation') {
        setmenu = "livelocation";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if ((args[0]) === 'toko') {
        setmenu = "toko";
        setReply(`Berhasil mengubah tampilan menu ke ${q}`);
    } else if (!q) {
        setReply(`SETTING MENU\n\n1. katalog\n2. image\n3. document\n4. gif\n5. thumbnail\n6. payment\n7. button\n8. livelocation\n9. toko`);
    } else {
        setReply("Menu tidak ditemukan om");
    }
};

handler.help = ["setmenu"];
handler.tags = ["owner"];
handler.command = ["setmenu"];

module.exports = handler;