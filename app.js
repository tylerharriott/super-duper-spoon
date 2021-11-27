// const dotenv = require("dotenv");
const http = require('http');
const https = require('https');
const fs = require('fs').promises;
const router = require('./services/Router');
const { host, port, routes } = require("./config/constants.js");

// const hostname = process.env.HOSTNAME;
// const port = process.env.PORT;
// console.log(hostname, port, process.env.HOSTNAME)
const requestListener = function(req, res) {
    router.matchAndCall("/api/mockuser", req, res, async(req, res) => {
        const options = {
            hostname: 'reqres.in',
            // port: 443,
            path: '/api/users/2',
            method: 'GET'
        }
        const innerReq = await https.request(options, async ires => {
            console.log(`statusCode: ${res.statusCode}`)
            await ires.on('data', d => {
                console.log("data", d);
                res.setHeader("Content-Type", "text/plain");
                res.writeHead(200);
                res.end(d);
                process.stdout.write(d);
            })
        })

        innerReq.on("error", error => {
            console.log(error);
        })
        innerReq.end();
        console.log("Response", innerReq);
        // res.setHeader("Content-Type", "text/plain");
        // res.writeHead(200);
        // res.end("mARVEL cALL");
        return;
    })

    router.matchAndCall("/api/test", req, res, (req, res) => {
        console.log("Request", req.url);
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(200);
        res.end("/api/test call finished");
        return;
    })
    router.matchAndCall("/(.*)", req, res, (req, res) => {
        console.log("Request", req.url);
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(200);
        res.end("Try the Wild Card.");
        return;
    })



}


const server = http.createServer(requestListener);
server.listen(port, host, (eve) => {
    console.log(`Server running on http://${host}:${port}/`, eve);
})


// fs.readFile(__dirname + "/index.html")
// .then(resp => {
//     res.setHeader('Content-Type', "text/html");
//     res.writeHead(200);
//     res.end(resp);
// }, err => {
//     console.log("error", err);
//     res.writeHead(500);
//     res.end(err);
//     return;
// });