const express = require("express");

const routes = require("./routes");

const connetcDatabase = require("./database/db");

connetcDatabase();
const app = express();
app.use(express.json());


app.get('/', (request, response) => {
    return response.send({message: "correct teste"});
})

app.use(routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); 

module.exports = app;