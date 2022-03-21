const router = require("express").Router();
const investController = require("../controller/invest.controller");

const verifyToken = require("../middleware/verifyToken");

router.post("/invest/", verifyToken, investController.postInvest);

router.get("/invest/", investController.getAllInvest);

module.exports = router;
