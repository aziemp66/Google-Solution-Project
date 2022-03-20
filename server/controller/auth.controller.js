const bcrypt = require("bcryptjs");

const Investor = require("../model/investor.model");
const Company = require("../model/company.model");
const RefreshToken = require("../model/refreshToken.model");

const validation = require("../util/validation");
const generateToken = require("../util/generateToken");

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
			message: err,
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
	const accessToken = generateToken.generateAccessToken(
		investor._id,
		"investor"
	);
	const refreshToken = generateToken.generateRefreshToken(
		investor._id,
		"investor"
	);

	const newRefreshToken = new RefreshToken({
		token: refreshToken,
	});

	await newRefreshToken.save();

	res.header("auth-token", accessToken).json({
		message: "Logged in successfully",
		accessToken,
		refreshToken,
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
			message: err,
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
	const accessToken = generateToken.generateAccessToken(
		company._id,
		"company"
	);
	const refreshToken = generateToken.generateRefreshToken(
		company._id,
		"company"
	);

	const newRefreshToken = new RefreshToken({
		token: refreshToken,
	});

	await newRefreshToken.save();

	res.header("auth-token", accessToken).json({
		message: "Logged in successfully",
		accessToken,
		refreshToken,
	});
}

async function refreshToken(req, res) {
	//take refresh token from the user
	const refreshToken = req.body.token;
	const refreshTokens = await RefreshToken.findOne({ token: refreshToken });

	//send error if refresh token is not provided or invalid
	if (!refreshToken) return res.status(401).json({ error: "No token" });
	if (!refreshTokens) return res.status(401).json({ error: "Invalid token" });

	//if refresh token is valid
	jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
		err && res.status(403).json({ error: err });

		await RefreshToken.deleteOne({ token: refreshToken });

		const newAccessToken = generateToken.generateAccessToken(
			user._id,
			user.type
		);
		const newRefreshToken = generateToken.generateRefreshToken(
			user._id,
			user.type
		);

		const newRefreshTokenObj = new RefreshToken({
			token: newRefreshToken,
		});

		await newRefreshTokenObj.save();

		res.status(200).json({
			message: "Refresh token successfully",
			AccessToken: newAccessToken,
			refreshToken: newRefreshToken,
		});
	});
}

module.exports = {
	investorRegister,
	investorLogin,
	companyRegister,
	companyLogin,
	refreshToken,
};
