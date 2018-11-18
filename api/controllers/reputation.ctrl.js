const Request = require("request"); 
const Reputation = require("./../models/Reputation");

module.exports = {
    getCharacterReputations: (req, res, next) => {

        Request.get({
            "url": "https://eu.api.blizzard.com/wow/character/" + req.params.realm + "/" + req.params.character + "?fields=reputation&access_token=" + req.body.token,
        }, (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            res.status(200).send(body);
        });
    }
}