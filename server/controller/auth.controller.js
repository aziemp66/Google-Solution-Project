const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Investor = require("../model/investor.model");
const Business = require("../model/business.model");
const RefreshToken = require("../model/token.model");

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

async function businessRegister(req, res) {
	//Validating Data
	const { error } = validation.registerValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user already exists
	const userFound = await Business.findOne({ email: req.body.email });
	if (userFound)
		return res.status(400).json({ error: "User already exists" });

	//Hashing Password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Creating new user
	const business = new Business({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});
	try {
		await business.save();
		res.status(201).json({
			message: "Business registered successfully",
		});
	} catch (err) {
		res.status(500).json({
			message: err,
		});
	}
}

async function businessLogin(req, res) {
	//Validating Data
	const { error } = validation.loginValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });

	//Checking if user exists
	const business = await Business.findOne({ email: req.body.email });
	if (!business)
		return res.status(400).json({ error: "User does not exist" });

	//Checking if password is correct
	const validPassword = await bcrypt.compare(
		req.body.password,
		business.password
	);
	if (!validPassword)
		return res.status(400).json({ error: "Invalid password" });

	//Creating and assigning token
	const accessToken = generateToken.generateAccessToken(
		business._id,
		"business"
	);
	const refreshToken = generateToken.generateRefreshToken(
		business._id,
		"business"
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

		RefreshToken.deleteOne({ token: refreshToken });

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

		newRefreshTokenObj.save();

		res.status(200).json({
			message: "Refresh token successfully",
			AccessToken: newAccessToken,
			refreshToken: newRefreshToken,
		});
	});
}

async function logout(req, res) {
	const refreshToken = req.body.token;
	await RefreshToken.deleteOne({ token: refreshToken });
	res.status(200).json({
		message: "Logged out successfully",
	});
}

module.exports = {
	investorRegister,
	investorLogin,
	businessRegister,
	businessLogin,
	refreshToken,
	logout,
};
