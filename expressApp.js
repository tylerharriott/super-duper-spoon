const express = require('express')
const https = require('https');
const apiHelper = require('./services/apiHelper');
const app = express()
    // const port = 3000
const { host, port } = require("./config/constants.js");

app.get('/', (req, res) => {
    res.send('Hello World!')
    res.end();
})

app.get('/marvel/allCharacters', (req, res) => {
    apiHelper.marvelCharacters()
        .then(resp => {
            // console.log("resp", resp);
            res.json(resp);
        })
        .catch(error => {
            res.send(error);
        })
        // res.end();
        // return;
})

// app.get("/(*)", (req, res) => {
//     res.send('Hello World! Catching the rye')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})