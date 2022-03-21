const Investor = require("../model/investor.model");
const Company = require("../model/company.model");

async function getAllInvestor(req, res) {
	const investors = await Investor.find();

	res.status(200).json(investors);
}

async function getInvestorProfile(req, res) {
	const { id } = req.params;
	const investor = await Investor.findById(id, {
		_id: 0,
		__v: 0,
		password: 0,
	});

	if (!investor) {
		return res.status(404).json({
			error: "Investor not found",
		});
	}

	res.status(200).json({
		message: "Investor profile",
		investor,
	});
}

async function getCompanyProfile(req, res) {
	const { id } = req.params;
	const company = await Company.findById(id, {
		_id: 0,
		__v: 0,
		password: 0,
	});

	if (!company) {
		return res.status(404).json({
			error: "Company not found",
		});
	}

	res.status(200).json({
		message: "Company profile",
		company,
	});
}

module.exports = {
	getInvestorProfile,
	getCompanyProfile,
	getAllInvestor,
};
