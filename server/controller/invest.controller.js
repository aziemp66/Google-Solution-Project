const Invest = require("../model/invest.model");
const Company = require("../model/company.model");
const Investor = require("../model/investor.model");

async function postInvest(req, res) {
	const { companyId } = req.params;
	const { _id: investorId, type } = req.user;

	if (type !== "investor") res.status(403).json({ error: "Not an investor" });

	try {
		const company = await Company.findById(companyId);
		const investor = await Investor.findById(investorId);

		if (!company) {
			return res.status(404).json({
				error: "Company not found",
			});
		}

		if (!investor) {
			return res.status(404).json({
				error: "Investor not found",
			});
		}

		const invest = new Invest({
			company: companyId,
			investor: investorId,
			amount: req.body.amount,
		});

		await invest.save();

		res.status(201).json({
			message: "Investment created",
			invest,
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
}

module.exports = {
	postInvest,
};
