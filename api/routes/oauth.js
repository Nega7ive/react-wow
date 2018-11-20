import { getToken } from "./../controllers/oauth.ctrl";

export default (router) => {
    /**
     * get character reputations
     */
    router
        .route('/oauth-token')
        .get(getToken);
}