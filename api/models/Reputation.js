var Request = require("request"); 

module.exports = {
    find: (id, callback) => {
        Request.post({
            "headers": { "content-type": "application/json" },
            "url": "http://httpbin.org/post",
            "body": JSON.stringify({
                "firstname": "Nic",
                "lastname": "Raboy"
            })
        }, (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            console.dir(JSON.parse(body));
        });
    }
};