const User = require("../models/User");

const create = (body) => User.create(body);

const showId = (id) => User.findById(id);

const update = (id, name, password) => User.findOneAndUpdate({ _id: id }, { name, password });

module.exports = {
    create,
    showId,
    update,
};