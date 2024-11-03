const axios = require('axios');
const FormData = require('form-data');
const { fileTypeFromBuffer } = require('file-type');
const fs = require('fs');
const fetch = require('node-fetch');

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime) throw 'No media found';
  let media = await q.download();

  let link2 = await pomf(media);

  m.reply(`
*Upload Pomf*
*Link* : ${link2.files[0].url}
*Size* : ${link2.files[0].size} Byte
*Expired:* _not expired_
`);
}

handler.help = ["tourl2"];
handler.tags = ["uploader"];
handler.command = /^(tourl)$/i;
handler.limit = true;
handler.register = false;

module.exports = handler;

async function pomf(media) {
  return new Promise(async (resolve, reject) => {
    const formData = new FormData();
    formData.append('files[]', media, { 
      filename: new Date() * 1 + '.jpg' 
    });
    axios.post('https://pomf2.lain.la/upload.php', formData, {
      headers: {
        ...formData.getHeaders(),
      },
    })
    .then((response) => {
      resolve(response.data);
    })
    .catch((error) => {
      resolve(error?.response);
    });
  });
}