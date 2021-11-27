const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    host: process.env.HOSTNAME,
    port: process.env.PORT,
    publicAPIKey: process.env.PUBLIC_API_KEY,
    privateAPIKey: process.env.PRIVATE_API_KEY,

    routes: [
        { route: "/", service: "LandingPage" }
    ]
}