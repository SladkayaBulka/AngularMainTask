const jwt = require('jsonwebtoken');
const { jwtSecret } = require('./config/app');

module.exports = (req, res, next) => {
    if (!req.Headers.Authorization) {
        res.status(401).json({ message: 'token not provided!!' });
    };
    const token = req.Headers.Authorization.split(' ')[1];
    try {
        jwt.verify(token, jwtSecret);
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            res.status(401).json({ message: 'invalid token!!' });
        }
    }
    next();
}