const { Router } = require("express");

const stockRoutes = Router();

const StockController = require("../controllers/StockController");
const stockController = new StockController;

stockRoutes.post("/", stockController.create);
stockRoutes.get("/", stockController.showAll);
stockRoutes.get("/:id", stockController.showId);
//usersRoutes.put("/:id", usersController.update);

module.exports = stockRoutes;