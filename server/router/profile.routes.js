const router = require("express").Router();

const profileController = require("../controller/profile.controller");

router.patch("/investor/:id", profileController.updateInvestorProfile);

router.patch("/business/:id", profileController.updateBusinessProfile);

module.exports = router;
