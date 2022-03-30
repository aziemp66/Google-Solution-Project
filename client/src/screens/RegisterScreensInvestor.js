/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../context/auth-context";

const RegisterScreensInvestor = (props) => {
	const ctx = useContext(AuthContext);
	const [getValidForm, setValidForm] = useState(true);
	const [message, updateMessage] = useState("");
	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	useEffect(() => {
		if (
			nameInputRef.current.value.trim().length === 0 ||
			emailInputRef.current.value.trim().length === 0 ||
			passwordInputRef.current.value.trim().length < 6 ||
			!(
				emailInputRef.current.value.includes("@") &&
				emailInputRef.current.value.includes(".")
			)
		) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [
		nameInputRef.current.value,
		emailInputRef.current.value,
		passwordInputRef.current.value,
	]);

	const handleSubmit = async (e) => {
		if (getValidForm) {
			e.preventDefault();

			const name = nameInputRef.current.value;
			const email = emailInputRef.current.value;
			const password = passwordInputRef.current.value;

			ctx.investorRegister(name, email, password);
		} else {
			updateMessage("Please enter a valid email and password");
		}
	};

	return (
		<div className="min-h-screen bg-[#E6EDE9] flex">
			<div className="hidden lg:block relative w-0 flex-1">
				<img
					className="absolute inset-0 h-full w-100 object-cover"
					src="../../../assets/login-investor.png"
					alt="background"
				/>
			</div>
			<div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
				<div className="mx-auto w-full max-w-sm lg:w-96">
					<div className="p-1 mb-5">
						<Link to="/signupinvestor">
							<button
								type="submit"
								className="bg-white hover:bg-gray-100 text-green-800 poppins font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
							>
								Register as Investor Account
							</button>
						</Link>
					</div>
					<div className="p-1">
						<Link to="/signupbusiness">
							<button
								type="submit"
								className="bg-white hover:bg-gray-100 text-green-800 poppins font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
							>
								Register as Business Account
							</button>
						</Link>
					</div>
					<h2 className="mt-6 text-3xl font-extrabold text-gray-900 poppins">
						Register in Investor{" "}
					</h2>
					<div className="mt-8">
						<div className="mt-6">
							<form
								autoComplete="off"
								onSubmit={handleSubmit}
								className="space-y-6"
							>
								{message && <p>{message}</p>}
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 poppins"
									>
										Name
									</label>
									<div className="mt-1">
										<input
											id="name"
											name="name"
											type="name"
											autoComplete="on"
											placeholder="Name"
											ref={nameInputRef}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 poppins"
									>
										Email
									</label>
									<div className="mt-1">
										<input
											id="email"
											name="email"
											type="email"
											autoComplete="off"
											placeholder="Email"
											ref={emailInputRef}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="space-y-1">
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 poppins"
									>
										Password
									</label>
									<div className="mt-1">
										<input
											id="password"
											name="password"
											type="password"
											autoComplete="off"
											placeholder="Password"
											ref={passwordInputRef}
											required
											className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>
								</div>

								<div className="flex items-center justify-between">
									<div className="flex items-center"></div>

									<div className="text-sm">
										<a
											href="#"
											className="font-medium text-[#008C41] hover:text-[#6DFBAA] poppins"
										>
											Forgot your password?
										</a>
									</div>
								</div>

								<div className="flex justify-center">
									<button
										disabled={getValidForm}
										className="w-1/2 flex align-center justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-500 hover:bg-[#6DFBAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 poppins"
									>
										Create an Account
									</button>
								</div>
							</form>
							&nbsp;&nbsp;
							<Link to="/login">
								<p
									className="absolute px-56 text-[#008C41] font-bold poppins"
									href="/login"
								>
									Sign in
								</p>
							</Link>
							<h3 className="poppins">
								Already have an account?{" "}
							</h3>
						</div>
					</div>
				</div>
			</div>
			<div className="hidden lg:block relative w-0 flex-1"></div>
		</div>
	);
};

export default RegisterScreensInvestor;
