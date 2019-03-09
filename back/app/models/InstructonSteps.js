const mongoose = require('mongoose');

const StepSchema = new mongoose.Schema({
    idInstruction: String,
    StepName:  { type: String, lowercase: true, unique: true },
    StepTitle: String,
    StepImg: String,
    StepContent: String
});

mongoose.model('Steps', StepSchema);