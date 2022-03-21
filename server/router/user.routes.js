const router = require("express").Router();

const userController = require("../controller/user.controller");

router.get("/investor", userController.getAllInvestor);

router.get("/investor/:id", userController.getInvestorProfile);

router.get("/company", userController.getAllCompany);

router.get("/company/:id", userController.getCompanyProfile);

module.exports = router;
