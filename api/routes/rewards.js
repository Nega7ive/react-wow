const RewardsController = require("./../controllers/rewards.ctrl");

module.exports = (router) => {
    /**
     * get character reputations
     */
    router
        .route('/rewards/:repid')
        .get(RewardsController.getAll);
}