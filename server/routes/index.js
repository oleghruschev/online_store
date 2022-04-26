const Router = require("express");
const router = new Router();

const UserRoute = require("./userRoute");
const TypeRoute = require("./typeRoute");
const DeviceRoute = require("./deviceRoute");
const BrandRoute = require("./brandRoute");
const BasketRoute = require("./basketRoute");

router.use("/user", UserRoute);
router.use("/type", TypeRoute);
router.use("/device", DeviceRoute);
router.use("/brand", BrandRoute);
router.use("/basket", BasketRoute);

module.exports = router;
