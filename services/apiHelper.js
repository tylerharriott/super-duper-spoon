const request = require('request');

module.exports = {
    marvelCharacters: function() {
        const options = {
            hostname: 'reqres.in',
            // port: 443,
            path: '/api/users/2',
            method: 'GET'
        }
        return new Promise((resolve, reject) => {
            request("https://reqres.in/api/users?page=2", { json: true }, (err, res, body) => {
                if (err) reject(err);
                console.log("body", body);
                resolve(body);
            });
        });
    }

    //     https.request(options, ires => {
    //         console.log(`statusCode: ${res.statusCode}`)
    //         ires.on('data', d => {
    //             console.log("data", d);
    //             // res.setHeader("Content-Type", "text/plain");
    //             // res.writeHead(200);
    //             process.stdout.write(d);
    //             res.send(d);
    //         })
    //     })

    //     innerReq.on("error", error => {
    //         console.log(error);
    //     })
    //     innerReq.end();
    //     console.log("Response", innerReq);



    // }
}