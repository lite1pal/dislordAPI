const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return [hash, salt];
}

const isPasswordValid = (password) => {
    if (password.length < 8) {
        return false;
    }
    return true;
}

const isUserLoggedIn = (req, res, next) => {
    console.log('test');
    next();
}

module.exports = { hashPassword, isPasswordValid };