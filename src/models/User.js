const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
})

const User = mongoose.model("User", StockSchema);
module.exports = User;