const Investor = require("../model/investor.model");
const Business = require("../model/business.model");
const Invest = require("../model/invest.model");

async function getAllInvestor(req, res) {
	const investors = await Investor.find(
		{},
		{
			__v: 0,
			password: 0,
		}
	);

	let investorsArray = [];

	investors.forEach((investor) => {
		investorsArray.push(investor.toJSON());
	});

	res.status(200).json(investors);
}

async function getAllBusiness(req, res) {
	const companies = await Business.find(
		{},
		{
			__v: 0,
			password: 0,
		}
	);

	res.status(200).json(companies);
}

async function getInvestorInfo(req, res) {
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

async function getBusinessInfo(req, res) {
	const { id } = req.params;
	const business = await Business.findById(id, {
		__v: 0,
		password: 0,
	});

	if (!business) {
		return res.status(404).json({
			error: "Business not found",
		});
	}

	res.status(200).json(business);
}

module.exports = {
	getInvestorInfo,
	getBusinessInfo,
	getAllInvestor,
	getAllBusiness,
};
