import tokenService from "./tokenService";
import axios from "axios";

const BASE_URL = "http://34.101.237.157/api";

const signup = (type, name, email, password) => {
	axios
		.post(`${BASE_URL}/${type}/register`, {
			name,
			email,
			password,
		})
		.then((res) => {
			if (res.data.error) {
				console.log(res.data.error);
				return;
			}
		});

	/* .then(({ token }) => {
			tokenService.setToken(token);
		}); */
};

const getUser = () => {
	return tokenService.getUserFromToken();
};

const logout = () => {
	tokenService.removeToken();
};

const login = (type, email, password) => {
	axios
		.post(`${BASE_URL}/${type}/login`, {
			email,
			password,
		})
		.then((res) => {
			if (res.data.error) {
				console.log(res.data.error);
				return;
			}
			const { accessToken: token } = res.data;
			tokenService.setToken(token);
		});
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	signup,
	getUser,
	logout,
	login,
};
