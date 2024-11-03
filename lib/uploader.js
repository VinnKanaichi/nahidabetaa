let axios = require('axios')
let BodyForm = require('form-data')
let { fromBuffer } = require('file-type')
let fetch = require('node-fetch')
let fs = require('fs')
let cheerio = require('cheerio')
const FormData = require('form-data');




function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}


async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

async function webp2mp4File(path) {
  const form = new BodyForm();
  form.append('new-image-url', '');
  form.append('new-image', fs.createReadStream(path));

  try {
    const { data } = await axios.post('https://s6.ezgif.com/webp-to-mp4', form, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
      },
    });

    const bodyFormThen = new BodyForm();
    const $ = cheerio.load(data);
    const file = $('input[name="file"]').attr('value');
    bodyFormThen.append('file', file);
    bodyFormThen.append('convert', "Convert WebP to MP4!");

    const { data: secondData } = await axios.post('https://ezgif.com/webp-to-mp4/' + file, bodyFormThen, {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${bodyFormThen._boundary}`,
      },
    });

    const $2 = cheerio.load(secondData);
    const result = 'https:' + $2('div#output > p.outfile > video > source').attr('src');

    return {
      status: true,
      message: "Created By Zetsuboxygen",
      result: result
    };
  } catch (err) {
    throw err;
  }
}

				 
async function floNime(medianya, options = {}) {
const { ext } = await fromBuffer(medianya) || options.ext
        var form = new BodyForm()
        form.append('file', medianya, 'tmp.'+ext)
        jsonnya = await fetch('https://flonime.my.id/upload', {
                method: 'POST',
                body: form
        })
        .then((response) => response.json())
              .then((result) => {
                  return result
              })
              .catch(e => {
                  return e
              })
        return jsonnya
}

module.exports = { TelegraPh, UploadFileUgu, webp2mp4File, floNime }
