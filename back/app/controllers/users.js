const mongoose = require('mongoose');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config/app');
const nodemailer = require('nodemailer');

const Users = mongoose.model('Users');

let transporter = nodemailer.createTransport({
    sevice: "Gmail",
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: 'samuraiskizakon@gmail.com',
        pass: 'wasatank12345'
    },
    tlc: {
        rejectUnauthorized: false
    }
});

const signIn = (req, res) => {
    const { name, password } = req.body;
    Users.findOne({ username: name })
        .exec()
        .then((user) => {
            if (!user) {
                res.status(401).json({ message: 'user does not exist!' });
            }
            console.log(user.useremail);
            const isValid = bCrypt.compareSync(password, user.userpass);
            const isVerify = Boolean(user.isverify);
            const isBlock = Boolean(user.isBlock);
            if (isValid && isVerify && !isBlock) {
                const token = jwt.sign({
                    username: user.username,
                    userpass: user.username,
                    useremail: user.useremail,
                    isadmin: user.isadmin
                }, jwtSecret);
                res.json({user, token });
            } else {
                res.status(401).json({ message: 'invalid password or email not verify' });
            }
        })
        .catch(err => res.status(500).json({ message: err.message }));

};

const getAllUsers = (req, res) => {
    Users.find()
        .exec()
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));

};

const getUseronToken = (req, res) => {
    const token = jwt.verify(req.params.token, jwtSecret);
    Users.findOne({ username: token.username})
        .exec()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));

};

const createUser = async(req, res) => {
    const salt = bCrypt.genSaltSync(10);
    const newuser = {
        username: req.body.username,
        userpass: bCrypt.hashSync(req.body.userpass, salt),
        useremail: req.body.useremail,
        isblock: false,
        isadmin: false,
        isverify: false
    }
    const token = jwt.sign(newuser, jwtSecret);
    Users.create(newuser, function(err, result) {
        if (err) {
            res.json(err);
            return;
        } else {
        res.json(result);
        }
    });
    
    let mailOptions = {
        from: 'samuraiskizakon@gmail.com',
        to: newuser.useremail,
        subject: "VERIFY",
        text: "Click to link to verify email",
        html: "<a href=\"http://localhost:5000/verify/" + token + "\">Click yet</a>"
    };
    let info = await transporter.sendMail(mailOptions);
};

const verifyUser = (req, res) => {
    const User = jwt.verify(req.params.regtoken, jwtSecret);
    Users.findOneAndUpdate({ username: User.username, useremail: User.useremail }, { isverify: true })
        .exec()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
};


const updateUser = (req, res) => {
    Users.findOneAndUpdate({ username: req.params.username }, req.body)
        .exec()
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
};

const removeUser = (req, res) => {
    Users.deleteOne({ username: req.params.username })
        .exec()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(500).json(err));
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    removeUser,
    signIn,
    verifyUser,
    getUseronToken
};