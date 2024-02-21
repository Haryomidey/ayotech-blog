const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const adminSchema = Schema({
    admin_name: {
        type: String,
        required: true
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
})

const Admin = model('Admin', adminSchema);

module.exports = Admin;