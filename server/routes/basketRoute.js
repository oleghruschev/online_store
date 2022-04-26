const Router = require("express");
const router = new Router();
const brandController = require("../controllers/basketController");

router.get("/", brandController.get);
router.post("/", brandController.create);

module.exports = router;
