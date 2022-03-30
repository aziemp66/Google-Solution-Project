const jwt = require("jsonwebtoken");

const generateAccessToken = (userId, accountType) => {
	const accessToken = jwt.sign(
		{ _id: userId, type: accountType },
		process.env.ACCESS_TOKEN_SECRET,
		{
			expiresIn: "1d",
		}
	);
	return accessToken;
};

const generateRefreshToken = (userId, accountType) => {
	const refreshToken = jwt.sign(
		{ _id: userId, type: accountType },
		process.env.REFRESH_TOKEN_SECRET
	);
	return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
