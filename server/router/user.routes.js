const router = require("express").Router();

const userController = require("../controller/user.controller");

router.get("/investor", userController.getAllInvestor);

router.get("/investor/:id", userController.getInvestorInfo);

router.get("/business", userController.getAllBusiness);

router.get("/business/:id", userController.getBusinessInfo);

module.exports = router;
