const router = require("express").Router();

const userController = require("../controller/user.controller");

router.get("/investor", userController.getAllInvestor);

router.get("/investor/:id", userController.getInvestorInfo);

router.get("/company", userController.getAllCompany);

router.get("/company/:id", userController.getCompanyInfo);

module.exports = router;
