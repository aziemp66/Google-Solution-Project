const Investor = require("../model/investor.model");
const Business = require("../model/business.model");
const validation = require("../util/validation");
const updateValidation = require("../util/updateValidation");

async function updateInvestorProfile(req, res) {
	//Validating Data
	const { error } = validation.updateInvestorProfileValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const investor = await Investor.findById(req.params.id);
	if (!investor) return res.status(400).json({ error: "Investor not found" });

	//Checking if user is Authorized
	if (investor._id.toString() !== req.user._id.toString())
		return res.status(401).json({ error: "Unauthorized" });

	//Checking null data validation
	updateValidation.updateInvestorProfileValidation(req, investor);

	try {
		await Investor.findByIdAndUpdate(req.params.id, {
			$set: {
				name: req.body.name,
				address: {
					country: req.body.address.country,
					street: req.body.address.street,
					city: req.body.address.city,
					postalCode: req.body.address.postalCode,
				},
				bio: req.body.bio,
				website: req.body.website,
			},
		});
		res.status(200).json({
			message: "Investor profile updated successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err,
		});
	}
}

async function updateBusinessProfile(req, res) {}

module.exports = {
	updateInvestorProfile,
	updateBusinessProfile,
};
