const Stock = require("../models/Stock");

const create = (body) => Stock.create(body);

const showAll = () => Stock.find();

const showId = (id) => Stock.findById(id);

module.exports = {
    create,
    showAll,
    showId,
};