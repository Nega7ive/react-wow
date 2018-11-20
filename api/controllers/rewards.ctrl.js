import rewards from '../models/rewards';

module.exports = {
    getAll: (req, res, next) => {
        if (rewards[req.params.repid] !== 'undefined') {
            res.status(200).send(JSON.stringify(rewards[req.params.repid]));
        } else {
            res.status(404).send('Not Found.');
        }
    }
}