import Request from 'request';

module.exports = {
    getCharacters: (req, res, next) => {
        //console.log(req.body.token);
        //console.log("https://eu.api.blizzard.com/wow/user/characters?locale=en_GB&access_token=" + req.body.token);
        //TODO use param token
        Request.get({
            "url": "https://eu.api.blizzard.com/wow/user/characters?locale=en_GB&access_token=USDwnm51fGHFY2SopS2o3SxygkKEGShrsr"
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            if(!body) {
                res.status(500).send('Error!');
            }
            res.status(200).send(body);
        });
    }
}