const jwt = require("jsonwebtoken");

function auth(req, res, next) {
	const token = req.header("auth-token");

	//Token not found
	if (!token) {
		return res.status(401).json({
			error: "Access denied. User not logged in",
		});
	}

	//Verify token
	try {
		const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
		req.user = verified;
		next();
	} catch (error) {
		return res.status(400).json({
			error: error.message,
		});
	}
}

module.exports = auth;
