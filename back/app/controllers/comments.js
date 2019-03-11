const mongoose = require('mongoose');

const comment = mongoose.model('Comment');

const getComments = (req, res) => {
    comment.find({instructionname: req.params.instructionName })
        .exec()
        .then(comments => res.json(comments))
        .catch(err => res.status(500).json(err));

};

const setComments = (req, res) => {
    comment.create(req.body, function(err, result){
        console.log(req.body);
        if (err) {
            res.json(err);
            console.log(err);
            return;
        } else {
          res.json(result);
        }
    });
};

module.exports = {
    setComments,
    getComments
};