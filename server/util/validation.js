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

const loginValidation = (data) => {
	const schema = Joi.object({
		email: Joi.string().min(6).max(255).required().email(),
		password: Joi.string().min(6).max(1024).required(),
	});

	return schema.validate(data);
};

const investValidation = (data) => {
	const schema = Joi.object({
		company: Joi.string().required(),
		investor: Joi.string().required(),
		amount: Joi.number().required(),
	});

	return schema.validate(data);
};

module.exports = { registerValidation, loginValidation, investValidation };
