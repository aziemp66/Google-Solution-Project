function updateInvestorProfileValidation(req, investor) {
	if (!req.body.name) req.body.name = investor.name;
	if (!req.body.bio) req.body.bio = investor.bio;
	if (!req.body.website) req.body.website = investor.website;
	if (!req.body.address) req.body.address = {};
	if (!req.body.address.country)
		req.body.address.country = investor.address.country;
	if (!req.body.address.city) req.body.address.city = investor.address.city;
	if (!req.body.address.street)
		req.body.address.street = investor.address.street;
	if (!req.body.address.postalCode)
		req.body.address.postalCode = investor.address.postalCode;
}

function updateBusinessProfileValidation(req, business) {
	if (!req.body.name) req.body.name = business.name;
	if (!req.body.bio) req.body.bio = business.bio;
	if (!req.body.website) req.body.website = business.website;
	if (!req.body.field) req.body.field = business.field;
	if (!req.body.address) req.body.address = {};
	if (!req.body.address.country)
		req.body.address.country = business.address.country;
	if (!req.body.address.city) req.body.address.city = business.address.city;
	if (!req.body.address.street)
		req.body.address.street = business.address.street;
	if (!req.body.address.postalCode)
		req.body.address.postalCode = business.address.postalCode;
}

module.exports = {
	updateInvestorProfileValidation,
	updateBusinessProfileValidation,
};
