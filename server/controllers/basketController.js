const { Basket } = require("../models/models");
const ApiError = require("../errors/ApiError");

class BasketController {
  async create(req, res) {
    const basket = await Basket.create({ id: req.user.id });

    return res.json(basket);
  }

  async get(req, res) {
    const basket = await Basket.find({ where: { id: req.user.id } });

    return res.json(basket);
  }
}

module.exports = new BasketController();
