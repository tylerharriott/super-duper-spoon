/*
    Service meant to take urls and handling its related functions
        - Regex
        - Placeholders
*/
const { pathToRegexp, match, parse, compile } = require("path-to-regexp");

// pathToRegexp(path, keys?, options?)
// match(path)
// parse(path)
// compile(path)

module.exports = {
    matchAndCall: function(path, req, res, callback) {
        let paramsNames = [];
        let regex = pathToRegexp(path, paramsNames);
        let parsed = regex.exec(req.url);
        console.log("Matches? : ", path, req.url, regex, parsed, paramsNames);
        if (parsed === null) return;
        // If it reaches this point, we have a match, we need to call back. 
        callback(req, res);
        return true;
    }
}