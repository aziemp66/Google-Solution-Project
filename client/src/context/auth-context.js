import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import jwtDecode from "jwt-decode";
import axios from "axios";

const AuthContext = React.createContext({
	isAuth: false,
	user: {},
	token: "",
	investorLogin: (email, password) => {},
	investorRegister: (name, email, password) => {},
	businessLogin: (email, password) => {},
	businessRegister: (name, email, password) => {},
	logout: () => {},
	invest: (id, amount) => {},
});

const BASE_URL = "http://34.101.237.157/api";

export const AuthContextProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState();
	const history = useHistory();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const userToken = localStorage.getItem("token");
		if (userToken) {
			const decodedToken = jwtDecode(userToken);
			if (decodedToken.exp * 1000 < Date.now()) {
				localStorage.removeItem("token");
				setUser({});
				setIsAuthenticated(false);
			} else {
				setIsAuthenticated(true);
				setUser(decodedToken);
				setToken(userToken);
			}
		}
	});

	const onLoginInvestor = (email, password) => {
		axios
			.post(`${BASE_URL}/investors/login`, {
				email,
				password,
			})
			.then((res) => {
				const { accessToken: token } = res.data;
				localStorage.setItem("token", token);
				setToken(token);
				setUser(jwtDecode(token));
				setIsAuthenticated(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onRegisterInvestor = (name, email, password) => {
		axios
			.post(`${BASE_URL}/investors/register`, {
				name,
				email,
				password,
			})
			.then((res) => {
				if (res.data.error) {
					console.log(res.data.error);
					return;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onLoginBusiness = (email, password) => {
		axios
			.post(`${BASE_URL}/businesses/login`, {
				email,
				password,
			})
			.then((res) => {
				if (res.data.error) {
					console.log(res.data.error);
					return;
				}
				const { accessToken: token } = res.data;
				localStorage.setItem("token", token);
				setToken(token);
				setUser(jwtDecode(token));
				setIsAuthenticated(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onRegisterBusiness = (name, email, password) => {
		axios
			.post(`${BASE_URL}/businesses/register`, {
				name,
				email,
				password,
			})
			.then((res) => {
				if (res.data.error) {
					console.log(res.data.error);
					return;
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const onLogout = () => {
		if (token) {
			axios.post(`${BASE_URL}/logout`, {
				token,
			});
			localStorage.removeItem("token");
			setUser({});
			setIsAuthenticated(false);
			history.push("/");
		} else {
		}
	};

	const postInvest = (businessId, amount) => {
		axios
			.post(
				`${BASE_URL}invest`,
				{
					businessId,
					amount,
				},
				{
					headers: {
						"auth-token": token,
					},
				}
			)
			.then((res) => {
				if (res.data.error) {
					console.log(res.data.error);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				isAuth: isAuthenticated,
				user: user,
				token: token,
				investorLogin: onLoginInvestor,
				investorRegister: onRegisterInvestor,
				businessLogin: onLoginBusiness,
				businessRegister: onRegisterBusiness,
				logout: onLogout,
				invest: postInvest,
				message: undefined,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
