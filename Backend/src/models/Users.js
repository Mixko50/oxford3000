const mongoose = require("mongoose");

const Users = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
    theme: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model("users", Users);
