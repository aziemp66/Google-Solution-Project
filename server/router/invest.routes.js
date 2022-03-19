const router = require("express").Router();
const investController = require("../controller/invest.controller");

router.post("/invest/:companyId", investController.postInvest);

module.exports = router;
