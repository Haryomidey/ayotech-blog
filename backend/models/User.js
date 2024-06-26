const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

const Users = model('Users', userSchema);

module.exports = Users;