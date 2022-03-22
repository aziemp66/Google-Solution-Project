const router = require("express").Router();

const profileController = require("../controller/profile.controller");

router.patch("/investor/profile", profileController.updateInvestorProfile);

router.patch("/business/profile", profileController.updateBusinessProfile);

module.exports = router;
