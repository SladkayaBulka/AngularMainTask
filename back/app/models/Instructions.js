const mongoose = require('mongoose');

const InstructionSchema = new mongoose.Schema({
    InstructionName: { type: String, lowercase: true, unique: true },
    UserName: { type: String } ,
    InstructionTitle: String,
    InstructionImg: { type: String } ,
    InstructionContent: { type: String } ,
    InstructionTegs: { type: String } 
});

mongoose.model('Instruction', InstructionSchema);