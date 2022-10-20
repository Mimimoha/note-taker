const router = require('express').Router()
const fs = require('fs')
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


router.get('/notes', async (req, res) => {
    let data = await readFileAsync('./db/db.json', 'utf-8')
    res.json(JSON.parse(data))
});

router.post("/notes", async function (req, res) {
    const newNote = {
        id: Math.floor(Math.random() * 10000),
        title: req.body.title,
        text: req.body.text
    };
    let data = await readFileAsync('./db/db.json', 'utf-8')
    let parsed = JSON.parse(data)
    parsed.push(newNote);
    await writeFileAsync("./db/db.json", JSON.stringify(parsed));
    res.json(data);
});


module.exports = router