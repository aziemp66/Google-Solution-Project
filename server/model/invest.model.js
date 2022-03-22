const mongoose = require("mongoose");

const investSchema = new mongoose.Schema({
	business: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Business",
		required: true,
	},
	investor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Investor",
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Invest", investSchema);
