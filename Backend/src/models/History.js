const mongoose = require("mongoose");

const History = mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    word_indexes: {
        type: [Number],
        required: true,
    },
    created_date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("History", History);
