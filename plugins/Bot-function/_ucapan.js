// Function to randomly pick an element from an array
function pickRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let greetCooldown = 600000; 
const ownerId = `${ownerNumber}`;
let lastGreetTimes = {};

let handler = (m) => m;

handler.before = async function (m, { hanz, setReply }) {
  const isGroup = m.isGroup;
  const currentTime = Date.now(); 
  const chatId = m.chat; 

  if (isGroup && m.sender === ownerId) {
    if (!lastGreetTimes[chatId]) {
      lastGreetTimes[chatId] = 0;
    }

    if (currentTime - lastGreetTimes[chatId] > greetCooldown) {
      const greetings = [
        'Selamat datang kembali, Sang Pemilik! 🌟 Kami merindukanmu!',
        'Holla, Ayang! 😘 Senang sekali melihatmu lagi!',
        'Vinn, kembali dengan energi baru! 🎉 Apa kabar?'
      ];

      let randomGreeting = pickRandom(greetings);
      setReply(randomGreeting);
      lastGreetTimes[chatId] = currentTime;
    }
  }

  return m; 
};

module.exports = handler;