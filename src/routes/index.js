const { Router } = require("express");
require("dotenv").config();

const usersRouter = require("./users.routes");
const stockRouter = require("./stock.routes");
//const categoryRouter = require("./category.routes");
//const outputEstoqueRouter = require("./outputEstoque.routes")

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/stock", stockRouter);
//routes.use("/category", categoryRouter);
//routes.use("/outputEstoque", outputEstoque);

module.exports = routes;


//mongo
