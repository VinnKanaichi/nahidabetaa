let handler = async (m, { hanz, q, args, isOwner, setReply }) => {

  const isUpdateGempa = m.isGroup ? db.data.chats[m.chat].updateGempa : false;

  if (!m.isGroup) return setReply("Fitur ini hanya dapat digunakan dalam grup");
  if (!m.isAdmin) return setReply("Fitur ini hanya dapat diakses oleh admin grup");
  if (!m.isBotAdmin) return setReply("Bot harus menjadi admin untuk menggunakan fitur ini");
  
  if (args[0] === "on" || args[0] === "enable" || args[0] === "1") {
    if (isUpdateGempa) return setReply("Update gempa sudah aktif!");
    db.data.chats[m.chat].updateGempa = true;
    setReply("Berhasil mengaktifkan update gempa!");
  } else if (args[0] === "off" || args[0] === "disable" || args[0] === "0") {
    if (!isUpdateGempa) return setReply("Update gempa sudah nonaktif!");
    db.data.chats[m.chat].updateGempa = false;
    setReply("Berhasil menonaktifkan update gempa!");
  } else if (!q) {
    setReply("Silakan pilih on atau off untuk mengatur fitur update gempa");
  }
};

handler.tags = ["group"];
handler.command = ["updategempa"];
handler.group = true;
handler.admin = true;
module.exports = handler;
