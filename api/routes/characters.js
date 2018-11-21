const CharacterController = require("./../controllers/character.ctrl");

module.exports = (router) => {
    /**
     * get character reputations
     */
    router
        .route('/characters')
        .post(CharacterController.getCharacters);
}