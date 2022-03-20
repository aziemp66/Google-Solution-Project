const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
	token: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: "1h",
	},
});

module.exports = mongoose.model("Refresh token", tokenSchema);
