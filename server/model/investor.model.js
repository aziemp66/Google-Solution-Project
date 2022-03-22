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
	country: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	website: {
		type: String,
		required: false,
		min: 6,
		max: 255,
	},
	image: {
		type: String,
		required: false,
	},
	field: {
		type: String,
		required: false,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Investor", investorSchema);
