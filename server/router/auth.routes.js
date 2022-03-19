const router = require("express").Router();

const authController = require("../controller/auth.controller");

router.post("/register/investor", authController.investorRegister);

module.exports = router;
