const xpperlimit = 1;
let handler = async (m, { hanz, command, args,setReply }) => {
  if (global.db.data.chats[m.chat].rpg == false && m.isGroup)
    return setReply('silakan aktif kan rpg terlebih dahulu\n.rpg on')
  let user = global.db.data.users[m.sender];
  let all = command.replace(/^tarik/i, "");
  let count = all ? all : args[0];
  count = count
    ? /all/i.test(count)
      ? Math.floor(global.db.data.users[m.sender].bank / xpperlimit)
      : parseInt(count)
    : args[0]
    ? parseInt(args[0])
    : 1;
  count = Math.max(1, count);
  if (user.atm == 0) return m.reply("kamu belum mempuyai kartu ATM !");
  if (global.db.data.users[m.sender].bank >= xpperlimit * count) {
    global.db.data.users[m.sender].bank -= xpperlimit * count;
    global.db.data.users[m.sender].money += count;
    hanz.reply(m.chat, `Sukses menarik sebesar ${count} Money 💹`, m);
  } else
    hanz.reply(
      m.chat,
      `[❗] Uang dibank anda tidak mencukupi untuk ditarik sebesar ${count} money 💹`,
      m
    );
};
handler.help = ["tarik <jumlah>"];
handler.tags = ["rpg"];
handler.command = /^tarik([0-9]+)|tarik|tarikall$/i;
handler.group = true;
handler.rpg = true;
module.exports = handler;
