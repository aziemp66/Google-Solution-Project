const Investor = require("../model/investor.model");
const Business = require("../model/business.model");
const validation = require("../util/validation");

async function updateInvestorProfile(req, res) {
	//Validating Data
	const { error } = validation.updateInvestorProfileValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const investor = await Investor.findById(req.params.id);
	if (!investor) return res.status(400).json({ error: "Investor not found" });

	if (!req.body.name) req.body.name = investor.name;
	if (!req.body.bio) req.body.bio = investor.bio;
	if (!req.body.website) req.body.website = investor.website;
	if (!req.body.address) req.body.address = {};
	if (!req.body.address.country)
		req.body.address.country = investor.address.country;
	if (!req.body.address.city) req.body.address.city = investor.address.city;
	if (!req.body.address.street)
		req.body.address.street = investor.address.street;
	if (!req.body.address.postalCode)
		req.body.address.postalCode = investor.address.postalCode;

	//Checking if user is Authorized
	if (investor._id.toString() !== req.user._id.toString())
		return res.status(401).json({ error: "Unauthorized" });

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
