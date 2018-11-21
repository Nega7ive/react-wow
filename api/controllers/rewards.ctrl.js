import rewards from '../models/rewards';

module.exports = {
    getAll: (req, res, next) => {
        console.log(rewards[req.params.repid]);
        if (typeof rewards[req.params.repid] !== 'undefined') {
            res.status(200).send(JSON.stringify(rewards[req.params.repid]));
        } else {
            res.status(404).send('Not Found.');
        }
    }
}