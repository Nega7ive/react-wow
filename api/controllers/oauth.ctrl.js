const Request = require("request");

module.exports = {
    getToken: (req, res, next) => {
        const key = Buffer.from('190b0fe2702b47d3b5bdcfb37aa2ecb8:k1ZRNGeziVtyuMKarWacy9E2QbOv5sTW').toString('base64');
        Request.post({
            "headers": { 'Authorization': "Basic " + key },
            "url": "https://eu.battle.net/oauth/token",
            "form": {
                "grant_type": "client_credentials"
            }
        }, (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            res.status(200).send(body);
        });
    }
}