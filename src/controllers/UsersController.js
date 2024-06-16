const userService = require("../services/user.service");
const mongoose = require("mongoose");

class UsersController {

    async create(request, response) {
        const { name, password } = request.body;

        if (!name || !password) {
            return response.status(400).send({ message: "submit all filds for registration" })
        }

        const user = await userService.create(request.body);

        if (!user) {
            return response.status(400).send({ message: "Error creating user" })
        }

        response.status(201).send({
            message: "user add with sucess",
            item: {
                id: user._id,
                name,
                password
            },
        });
    }

    async showId(request, response) {
        const id = request.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).send({ message: "Invalid id" });
        }

        const user = await userService.showId(id);

        if (!user) {
            return response.status(400).send({ message: "user not found" });
        }

        response.send(user);
    }

    async update(request, response) {
        const { name, password } = request.body;

        if (!name && !password) {
            return response.status(400).send({ message: "submit at least one fields for registration" })
        }

        const id = request.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return request.status(400).send({ message: "Invalid id" });
        }

        const user = await userService.showId(id);

        if (!user) {
            return response.status(400).send({ message: "User not found" })
        }

        await userService.update(
            id,
            name,
            password
        );

        response.send({ message: "User sucessfully updated" });
    }

}

module.exports = UsersController;
/*
 index - show- create, update - delete (maximo de metodos da class) 
 */