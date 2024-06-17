const mongoose = require("mongoose");
require("dotenv").config();

const connetcDatabase = () => {
    try {
        mongoose.connect(process.env.MONGODB_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
}

module.exports = connetcDatabase;