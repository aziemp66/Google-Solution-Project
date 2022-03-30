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

	investors.forEach(async (investor) => {
		//Counting the most invested business field
		const invest = await Invest.find({ investor: investor._id });

		let field = {};

		invest.forEach((investment) => {
			if (field[investment.field]) {
				field[investment.field] += investment.amount;
			} else {
				field[investment.field] = investment.amount;
			}
		});

		let max = 0;
		let fieldName = "";

		//check for the numbers of business invested

		for (let key in field) {
			if (field[key] > max) {
				max = field[key];
				fieldName = key;
			}
		}

		await Investor.findByIdAndUpdate(
			investor._id,
			{
				$set: {
					mostInvestedField: fieldName,
				},
			},
			{ new: true }
		);
	});

	const finalInvestors = await Investor.find(
		{},
		{
			__v: 0,
			password: 0,
		}
	);

	res.status(200).json(finalInvestors);
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

	//Counting the most invested business field
	const invest = await Invest.find({ investor: id });

	let field = {};

	invest.forEach((investment) => {
		if (field[investment.field]) {
			field[investment.field] += investment.amount;
		} else {
			field[investment.field] = investment.amount;
		}
	});

	let max = 0;
	let fieldName = "";

	for (let key in field) {
		if (field[key] > max) {
			max = field[key];
			fieldName = key;
		}
	}

	await Investor.findByIdAndUpdate(
		id,
		{
			$set: {
				mostInvestedField: fieldName,
			},
		},
		{ new: true }
	);

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
