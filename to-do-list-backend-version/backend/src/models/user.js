const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
})

const User = mongoose.model('User', UserSchema)

module.exports = User;