
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    instructionname: String,
    username: String,
    text: String
});

mongoose.model('Comment', CommentSchema);