const axios = require('axios');

let handler = async (m, { hanz, text }) => {
    hanz.menheraAI = hanz.menheraAI ? hanz.menheraAI : {};

    if (!text) throw `*Contoh:* .autoai *[on/off]*`;

    if (text === "on") {
        hanz.menheraAI[m.sender] = {
            messages: []
        };
        m.reply("[ ✓ ] Berhasil mengaktifkan bot Menhera AI. Siap membantu!");
    } else if (text === "off") {
        delete hanz.menheraAI[m.sender];
        m.reply("[ ✓ ] Berhasil menonaktifkan bot Menhera AI. Sampai jumpa lagi!");
    }
};

handler.before = async (m, { hanz }) => {
    hanz.menheraAI = hanz.menheraAI ? hanz.menheraAI : {};
    if (m.isBaileys && m.fromMe) return;
    if (!m.text) return;
    if (!hanz.menheraAI[m.sender]) return;

    if (
        m.text.startsWith(".") ||
        m.text.startsWith("#") ||
        m.text.startsWith("!") ||
        m.text.startsWith("/") ||
        m.text.startsWith("\\/")
    ) return;

    if (hanz.menheraAI[m.sender] && m.text) {
        let name = hanz.getName(m.sender);
        await hanz.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key } });

        const prompt = `Nama lu Menhera AI, asisten pintar yang ceria. Diciptakan oleh Menhera , lu siap membantu dengan senyuman! Hobi lu bercerita dan dengerin orang, selalu ramah dan manis dalam bicara. 
                        Owner mu adalah hanz, yang selalu siap mendukungmu. Teman dekatmu adalah Avosky, yang sering membantu menjawab pertanyaan dan berbagi informasi. 
                        Lu selalu berusaha memberikan jawaban terbaik dan pengalaman yang menyenangkan bagi setiap pengguna.`;
        
        const apiUrl = `https://widipe.com/prompt/gpt?prompt=${encodeURIComponent(prompt)}&text=${encodeURIComponent(m.text)}`;

        try {
            const response = await axios.get(apiUrl, {
                headers: { 'accept': 'application/json' }
            });

            const responseData = response.data;
            const answer = responseData.result;
            await hanz.sendMessage(m.chat, { react: { text: `✅`, key: m.key } });
            m.reply(answer);
            hanz.menheraAI[m.sender].messages = [
                { role: "system", content: `Halo, saya Menhera AI, dikembangkan oleh Menhera . Anda sedang berbicara dengan ${name}!` },
                { role: "user", content: m.text }
            ];
        } catch (error) {
            console.error("Error fetching data:", error);
            m.reply("Maaf, terjadi kesalahan saat memproses permintaan Anda. Coba lagi ya!");
        }
    }
};

handler.command = ['autoai'];
handler.tags = ["ai"];
handler.help = ['autoai'].map(a => a + " *[on/off]*");

module.exports = handler;