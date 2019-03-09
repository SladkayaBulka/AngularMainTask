const mongoose = require('mongoose');
const Steps = mongoose.model('Steps');

const getAllSteps = (req, res) => {
    Steps.find({ idInstruction: req.params.idInstruction })
        .exec()
        .then(steps => res.json(steps))
        .catch(err => res.status(500).json(err));
};


const createStep = (req, res) => {
    Steps.create(req.body, function(err, resault){
        if (err) {
            res.json(err);
            return;
        } else{
            res.json(resault);
        }
    })
};

const updateStep = (req, res) => {
    Steps.findOneAndUpdate({ StepName: req.params.StepName }, req.body)
        .exec()
        .then(step => res.json(instrustepction))
        .catch(err => res.status(500).json(err));
};

const removeSteps = (req, res) => {
    Steps.deleteMany({ idInstruction: req.params.idInstruction })
        .exec()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAllSteps,
    createStep,
    updateStep,
    removeSteps
};