const ReputationController = require("./../controllers/reputation.ctrl");

module.exports = (router) => {
    /**
     * get character reputations
     */
    router
        .route('/reputations/:realm/:character')
        .post(ReputationController.getCharacterReputations);
}