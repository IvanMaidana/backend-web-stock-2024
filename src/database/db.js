const mongoose = require("mongoose");
require("dotenv").config();

const connetcDatabase = () => {
    console.log("wait connect to the database");

    mongoose.connect(
        process.env.MONGODB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("MongoDB Atlas connected"))
        .catch((error) => console.log(error));

}

module.exports = connetcDatabase;