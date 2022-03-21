const Invest = require("../model/invest.model");
const Company = require("../model/company.model");
const Investor = require("../model/investor.model");
const jwt = require("jsonwebtoken");

async function postInvest(req, res) {
	const { companyId } = req.body;
	const investorToken = req.headers["auth-token"];

	let investorId;

	jwt.verify(
		investorToken,
		process.env.ACCESS_TOKEN_SECRET,
		async (err, decoded) => {
			if (err) return res.status(401).json({ error: err.message });

			investorId = decoded._id;

			if (decoded.type !== "investor") {
				res.status(403).json({ error: "Not an investor" });
			}
		}
	);

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
async function getAllInvest(req, res) {
	const allInvest = await Invest.find()
		.populate("company", "_id, name")
		.populate("investor", "_id, name");

	res.status(200).json(allInvest);
}

module.exports = {
	postInvest,
	getAllInvest,
};
