const { Router } = require("express");

const usersRoutes = Router();

const UsersController = require("../controllers/UsersController");
const usersController = new UsersController;

usersRoutes.post("/", usersController.create);
usersRoutes.patch("/:id", usersController.update);
usersRoutes.get("/:id", usersController.showId);

module.exports = usersRoutes;