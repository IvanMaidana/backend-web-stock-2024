const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    dateInput: {
        type: Date,
        default: Date.now,
        required: true,
    },
    dateOutput: {
        type: Date,
        required: false,
    },
    dateExpiration: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    measure: {
        type: String,
        required: true,
    },
})

const Stock = mongoose.model("Stock", StockSchema);
module.exports = Stock;