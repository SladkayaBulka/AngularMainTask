const users = require('../app/controllers/users');
const instruction = require('../app/controllers/Instruction');
const steps = require('../app/controllers/InstructionSteps');
const comment = require('../app/controllers/comments');
const authMidleware = require('../auth');
module.exports = (app) => {
    app.get('/users', users.getAllUsers);
    app.get('/user/:username', users.getUsers);
    app.post('/users',  users.createUser);
    app.get('/users/:token',  users.getUseronToken);
    app.put('/users/:username', users.updateUser);
    app.put('/block/:username', users.blockUser);
    app.put('/admin/:username', users.adminUser);
    app.delete('/users/:username', users.removeUser);
    app.post('/signIn', users.signIn); 
    app.get('/instruction', instruction.getAllInstruction);
    app.post('/instruction', instruction.createInstruction);
    app.put('/instruction/:InstructionName', instruction.updateInstruction);
    app.get('/instruction/:UserName', instruction.getUserInstruction);
    app.get('/instructions/:instructionName', instruction.getOneInstruction);
    app.delete('/instructions/:InstructionName', instruction.deleteInstruction);
    app.post('/steps', steps.createStep);
    app.put('/steps/:StepName', steps.updateStep);
    app.get('/steps/:idInstruction', steps.getAllSteps);
    app.delete('/steps/:idInstruction', steps.removeSteps);
    app.get('/verify/:regtoken', users.verifyUser);
    app.get('/comment/:instructionName', comment.getComments);
    app.post('/comment', comment.setComments);
};