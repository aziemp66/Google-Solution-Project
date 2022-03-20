const jwt = require("jsonwebtoken");

const generateAccessToken = (userId, accountType) => {
	const accessToken = jwt.sign(
		{ _id: userId, accountType: accountType },
		process.env.TOKEN_SECRET,
		{
			expiresIn: "1h",
		}
	);
	return accessToken;
};

const generateRefreshToken = (userId, accountType) => {
	const refreshToken = jwt.sign(
		{ _id: userId, accountType: accountType },
		process.env.REFRESH_TOKEN_SECRET
	);
	return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken };
