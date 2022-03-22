const Joi = require("joi");

//Register Validation
const registerValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(6).max(255).required(),
		email: Joi.string().min(6).max(255).required().email(),
		password: Joi.string().min(6).max(1024).required(),
	});

	return schema.validate(data);
};

//Login Validation
const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().min(6).max(255).required().email(),
		password: Joi.string().min(6).max(1024).required(),
	});

	return schema.validate(data);
};

//Invest Validation
const investValidation = (data) => {
	const schema = Joi.object({
		company: Joi.string().required(),
		investor: Joi.string().required(),
		amount: Joi.number().required(),
	});

	return schema.validate(data);
};

const updateInvestorProfileValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(6).max(255),
		bio: Joi.string().min(20).max(3072),
		website: Joi.string().min(6).max(255),

		address: Joi.object({
			street: Joi.string().min(6).max(255),
			city: Joi.string().min(6).max(255),
			postalCode: Joi.string().min(1),
			country: Joi.string().min(6).max(255),
		}),
	});
	return schema.validate(data);
};

const updateBusinessProfileValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(6).max(255),
		bio: Joi.string().min(20).max(3072),
		website: Joi.string().min(6).max(255),
		field: Joi.string().min(1).max(255),
		address: Joi.object({
			street: Joi.string().min(6).max(255),
			city: Joi.string().min(6).max(255),
			postalCode: Joi.string().min(1),
			country: Joi.string().min(1).max(255),
		}),
	});
	return schema.validate(data);
};

module.exports = {
	registerValidation,
	loginValidation,
	investValidation,
	updateInvestorProfileValidation,
	updateBusinessProfileValidation,
};
