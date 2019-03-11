const mongoose = require('mongoose');
const Instruction = mongoose.model('Instruction');
const CryptoJS = require('crypto-js');


const getAllInstruction = (req, res) => {
    Instruction.find()
        .exec()
        .then(instruction => res.json(instruction))
        .catch(err => res.status(500).json(err));
};

const getUserInstruction = (req, res) => {
    Instruction.find({ UserName: req.params.UserName })
        .exec()
        .then(instruction => res.json(instruction))
        .catch(err => res.status(500).json(err));
};


const getOneInstruction = (req, res) => {
    Instruction.find({ InstructionName: req.params.instructionName })
        .exec()
        .then(instruction => {
            res.json(instruction)})
        .catch(err => res.status(500).json(err));
};

const createInstruction = (req, res) => {
    const instruction = {
        InstructionName: CryptoJS.HmacSHA256(req.body.InstructionName, '228'),
        UserName: req.body.UserName,
        InstructionTitle: req.body.InstructionTitle,
        InstructionImg: req.body.InstructionImg,
        InstructionContent: req.body.InstructionContent,
        InstructionTegs: req.body.InstructionTegs 
    };
    Instruction.create(instruction, function(err, result){
        if (err) {
            res.json(err);
            console.log(err);
            return;
        } else {
          res.json(result);
        }
    });
};

const updateInstruction = (req, res) => {

    Instruction.findOneAndUpdate({ InstructionName: req.params.InstructionName }, req.body)
        .exec()
        .then(instruction => res.json(instruction))
        .catch(err => res.status(500).json(err));
};

const deleteInstruction = (req, res) => {
    console.log(req.params.InstructionName);
    Instruction.deleteOne({ InstructionName: req.params.InstructionName })
        .exec()
        .then(instruction => res.json(instruction))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAllInstruction,
    getUserInstruction,
    createInstruction,
    updateInstruction,
    getOneInstruction,
    deleteInstruction
};