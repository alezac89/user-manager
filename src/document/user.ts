let mongooseDB = require("mongoose");

module.exports = mongooseDB.model('users', {
    name: {
        type: String
    },
    surname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'password is required'],
        select: true
    }
});