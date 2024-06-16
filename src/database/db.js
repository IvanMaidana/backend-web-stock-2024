const mongoose = require("mongoose");

const connetcDatabase = () => {
    console.log("wait connect to the database");

    mongoose.connect(
        "mongodb+srv://imadana30:TWcnVNoFLAG4Gx6X@cluster0.rmyxo4e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
        .then(() => console.log("MongoDB Atlas connected"))
        .catch((error) => console.log(error));

}

module.exports = connetcDatabase;