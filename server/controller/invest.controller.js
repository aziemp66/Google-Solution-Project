const Invest = require("../model/invest.model");
const Business = require("../model/business.model");
const Investor = require("../model/investor.model");

async function postInvest(req, res) {
	const { businessId } = req.body;
	const investorId = req.user._id;

	try {
		const business = await Business.findById(businessId);
		const investor = await Investor.findById(investorId);

		if (!business) {
			return res.status(404).json({
				error: "Business not found",
			});
		}

		if (!investor) {
			return res.status(404).json({
				error: "Investor not found",
			});
		}

		const invest = new Invest({
			business: businessId,
			investor: investorId,
			amount: req.body.amount,
			field: business.field,
		});

		await invest.save();

		res.status(201).json(invest);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
async function getAllInvest(req, res) {
	const allInvest = await Invest.find(
		{},
		{
			__v: 0,
		}
	)
		.populate("business", "_id, name")
		.populate("investor", "_id, name");

	res.status(200).json(allInvest);
}

module.exports = {
	postInvest,
	getAllInvest,
};
