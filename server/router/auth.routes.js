const router = require("express").Router();

const authController = require("../controller/auth.controller");

router.post("/investor/register", authController.investorRegister);

router.post("/investor/login", authController.investorLogin);

router.post("/business/register", authController.businessRegister);

router.post("/business/login", authController.businessLogin);

router.post("/refresh", authController.refreshToken);

router.post("/logout", authController.logout);

module.exports = router;
