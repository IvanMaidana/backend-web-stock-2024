const stockService = require("../services/stock.service");
const mongoose = require("mongoose");

class StockController {

    async create(request, response) {
        const { dateInput, dateOutput, dateExpiration, amount, measure } = request.body;

        if (!dateInput || !dateExpiration || !amount || !measure) {
            response.status(401).send({ message: "submit all filds for registration" });
        }

        const stock = await stockService.create(request.body);

        if (!stock) {
            return response.status(400).send({ message: "Error creating Stock" })
        }

        response.status(201).send({
            message: "item add with sucess",
            item: {
                id: stock._id,
                dateInput,
                dateOutput,
                dateExpiration,
                amount,
                measure
            },
        });
    }

    async showAll(request, response) {
        const stock = await stockService.showAll();

        if (stock.length === 0) {
            return response.status(400).send({ message: "there are no registered stock" });
        }

        response.send(stock);
    }

    async showId(request, response) {
        const id = request.params.id;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return response.status(400).send({ message: "Invalid id" });
        }

        const item = await stockService.showId(id);

        if (!item) {
            return response.status(400).send({ message: "item not found" });
        }

        response.send(item);
    }

    delete(request, response) {

    }

}

module.exports = StockController;