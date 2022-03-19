const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Investor = require("../model/investor.model");
const Company = require("../model/company.model");
const validation = require("../util/validation");

async function investorRegister(req, res) {
	//Validating Data
	const { error } = validation.registerValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user already exists
	const userFound = await Investor.findOne({ email: req.body.email });
	if (userFound)
		return res.status(400).json({ error: "User already exists" });

	//Hashing Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Creating new user
	const investor = new Investor({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
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

async function investorLogin(req, res) {
	//Validating Data
	const { error } = validation.loginValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const investor = await Investor.findOne({ email: req.body.email });
	if (!investor)
		return res.status(400).json({ error: "User does not exist" });

	//Checking if password is correct
	const validPassword = await bcrypt.compare(
		req.body.password,
		investor.password
	);
	if (!validPassword)
		return res.status(400).json({ error: "Invalid password" });

	//Creating and assigning token
	const token = jwt.sign({ _id: investor._id }, process.env.TOKEN_SECRET, {
		expiresIn: "1d",
	});
	res.header("x-auth-token", token).json({
		message: "Logged in successfully",
		token: token,
	});
}

async function companyRegister(req, res) {
	//Validating Data
	const { error } = validation.registerValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user already exists
	const userFound = await Company.findOne({ email: req.body.email });
	if (userFound)
		return res.status(400).json({ error: "User already exists" });

	//Hashing Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Creating new user
	const company = new Company({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		await company.save();
		res.status(201).json({
			message: "Company registered successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
}

async function companyLogin(req, res) {
	//Validating Data
	const { error } = validation.loginValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const company = await Company.findOne({ email: req.body.email });
	if (!company) return res.status(400).json({ error: "User does not exist" });

	//Checking if password is correct
	const validPassword = await bcrypt.compare(
		req.body.password,
		company.password
	);
	if (!validPassword)
		return res.status(400).json({ error: "Invalid password" });

	//Creating and assigning token
	const token = jwt.sign({ _id: company._id }, process.env.TOKEN_SECRET, {
		expiresIn: "1d",
	});
	res.header("x-auth-token", token).json({
		message: "Logged in successfully",
		token: token,
	});
}

module.exports = {
	investorRegister,
	investorLogin,
	companyRegister,
	companyLogin,
};
