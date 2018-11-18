const oauth = require("./oauth");
const reputation = require("./reputation");

module.exports = (router) => {
    oauth(router);
    reputation(router);
}