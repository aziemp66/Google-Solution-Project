const Investor = require("../model/investor.model");

async function investorRegister(req, res) {
	const investor = new Investor({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		await investor.save();
		res.status(201).json({
			message: "Investor registered successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
}

module.exports = {
	investorRegister,
};
