const fetch = require('node-fetch')
let handler = async(m, { hanz, sendButDoc, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
let tksAnme = `${gris1}${indo}\n\nCharacter: ${character}\nAnime: ${anime}${gris1}`
sendButDoc(tksAnme,'Next','quotesanime')
}
handler.help = ['kataanime']
handler.tags = ['internet']
handler.command = /^(quotesanime)$/i
handler.limit = true

module.exports = handler