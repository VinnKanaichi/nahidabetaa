const rewards = {
  exp: 500,
  money: 20999,
};

const cooldown = 2592000000;
let handler = async (m,hanz) => {
  let user = global.db.data.users[m.sender];
  if (new Date() - user.lastmonthly < cooldown)
    throw `You have already claimed this monthly claim, wait for *${(
      user.lastmonthly +
      cooldown -
      new Date()
    ).toTimeString()}*`;
  let text = "";
  for (let reward of Object.keys(rewards))
    if (reward in user) {
      user[reward] += rewards[reward];
      text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`;
    }
  hanz.reply(m.chat, "*––––––『 NYAMPAH 』––––––*\n" + text.trim(), null, m);
  user.lastmonthly = new Date() * 1;
};
handler.help = ["nyampah"];
handler.tags = ["rpg"];
handler.command = /^(nyampah)$/i;
handler.register = true;
handler.group = true;
handler.rpg = true;
module.exports = handler;
