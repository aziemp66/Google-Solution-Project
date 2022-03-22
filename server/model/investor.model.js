const mongoose = require("mongoose");

const investorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 6,
	},
	email: {
		type: String,
		required: true,
		min: 6,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024,
	},
	bio: {
		type: String,
		required: false,
		min: 20,
		max: 3072,
	},
	website: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	address: {
		type: Object,
		required: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Investor", investorSchema);
