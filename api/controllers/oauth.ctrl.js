import Request from 'request';
import env from 'node-env-file';

env('.env');

module.exports = {
    getToken: (req, res, next) => {
        const key = Buffer.from(process.env.SECRET_NAME + ':' + process.env.SECRET_KEY).toString('base64');
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