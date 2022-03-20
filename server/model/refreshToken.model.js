const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
	token: {
		type: Object,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Refresh token", tokenSchema);
