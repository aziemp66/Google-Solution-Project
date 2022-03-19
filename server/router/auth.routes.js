const router = require("express").Router();

const authController = require("../controller/auth.controller");

router.post("/register/investor", authController.investorRegister);

router.post("/login/investor", authController.investorLogin);

router.post("/register/company", authController.companyRegister);

router.post("/login/company", authController.companyLogin);

module.exports = router;
