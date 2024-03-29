const Investor = require("../model/investor.model");
const Business = require("../model/business.model");
const validation = require("../util/validation");
const updateValidation = require("../util/updateValidation");

async function updateInvestorProfile(req, res) {
	//Validating Data
	const { error } = validation.updateInvestorProfileValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const investor = await Investor.findById(req.user._id);
	if (!investor) return res.status(400).json({ error: "Investor not found" });

	//Checking null data validation
	updateValidation.updateInvestorProfileValidation(req, investor);

	try {
		await Investor.findByIdAndUpdate(req.user._id, {
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
			error: err,
		});
	}
}

async function updateBusinessProfile(req, res) {
	//Validating Data
	const { error } = validation.updateBusinessProfileValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user is Authorized
	if (!req.user._id) return res.status(401).json({ error: "Unauthorized" });

	//Checking if user exists
	const business = await Business.findById(req.user._id.toString());
	if (!business) return res.status(400).json({ error: "Business not found" });

	//Checking null data validation
	updateValidation.updateBusinessProfileValidation(req, business);

	try {
		await Business.findByIdAndUpdate(req.user._id.toString(), {
			$set: {
				name: req.body.name,
				field: req.body.field,
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
			message: "Business profile updated successfully",
		});
	} catch (err) {
		res.status(500).json({
			error: err,
		});
	}
}

module.exports = {
	updateInvestorProfile,
	updateBusinessProfile,
};
