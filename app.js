const http = require('http');
const fs = require('fs').promises;
const router = require('./services/Router');
// const routes = require("./config/constants.js").routes;
const hostname = '127.0.0.1';
const port = '3000';

const requestListener = function(req, res) {

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
server.listen(port, hostname, (eve) => {
    console.log(`server running on http://${hostname}:${port}/`, eve);
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