const axios = require("axios");

const BASE_URL = "http://34.101.237.157/api/";

const getAllInvestors = () => {
	axios.get(`${BASE_URL}/investors`).then((res) => {
		const { data } = res;
		return data;
	});
};

const getAllBusiness = () => {
	axios.get(`${BASE_URL}/business`).then((res) => {
		const { data } = res;
		return data;
	});
};

const getInvestorById = (id) => {
	axios.get(`${BASE_URL}/investors/${id}`).then((res) => {
		const { data } = res;
		return data;
	});
};

const getBusinessById = (id) => {
	axios.get(`${BASE_URL}/business/${id}`).then((res) => {
		const { data } = res;
		return data;
	});
};

const userInfo = {
	allInvestors: getAllInvestors,
	allBusiness: getAllBusiness,
	getInvestorById: getInvestorById,
	getBusinessById: getBusinessById,
};

export default userInfo;
