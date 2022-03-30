import tokenService from "./tokenService";

const BASE_URL = "/api/auth/";

const signup = (user) => {
	return fetch(BASE_URL + "signup", {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(user),
	})
		.then((res) => {
			console.log(res, "<-- response object");
			return res.json();
		})
		.then((json) => {
			if (json.token) return json;
			console.log(json, "<-- error object");
			throw new Error(`${json.err}`);
		})
		.then(({ token }) => {
			tokenService.setToken(token);
		});
};

const getUser = () => {
	return tokenService.getUserFromToken();
};

const logout = () => {
	tokenService.removeToken();
};

const login = (create) => {
	return fetch(BASE_URL + "login", {
		method: "POST",
		headers: new Headers({ "Content-Type": "application/json" }),
		body: JSON.stringify(create),
	})
		.then((res) => {
			if (res.ok) return res.json();
			throw new Error("Bad Credentials!");
		})
		.then(({ token }) => tokenService.setToken(token));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	signup,
	getUser,
	logout,
	login,
};
