const OauthController = require("./../controllers/oauth.ctrl");

module.exports = (router) => {
    /**
     * get character reputations
     */
    router
        .route('/oauth-token')
        .get(OauthController.getToken);
}