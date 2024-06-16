const express = require("express");
const routes = require("./routes");
const db = require("./database/db");
const connetcDatabase = require("./database/db");

connetcDatabase();
const app = express();
app.use(express.json());

app.use(routes);
/*app.get('/users', (request, response) => {
    return response.send('hello node');
})*/

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); 