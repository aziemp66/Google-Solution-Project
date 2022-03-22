const Investor = require("../model/investor.model");
const Company = require("../model/company.model");

async function getAllInvestor(req, res) {
	const investors = await Investor.find(
		{},
		{
			__v: 0,
			password: 0,
		}
	);

	res.status(200).json(investors);
}

async function getAllCompany(req, res) {
	const companies = await Company.find(
		{},
		{
			__v: 0,
			password: 0,
		}
	);

	res.status(200).json(companies);
}

async function getInvestorProfile(req, res) {
	const { id } = req.params;
	const investor = await Investor.findById(id, {
		__v: 0,
		password: 0,
	});

	if (!investor) {
		return res.status(404).json({
			error: "Investor not found",
		});
	}

	res.status(200).json(investor);
}

async function getCompanyProfile(req, res) {
	const { id } = req.params;
	const company = await Company.findById(id, {
		__v: 0,
		password: 0,
	});

	if (!company) {
		return res.status(404).json({
			error: "Company not found",
		});
	}

	res.status(200).json(company);
}

module.exports = {
	getInvestorProfile,
	getCompanyProfile,
	getAllInvestor,
	getAllCompany,
};
