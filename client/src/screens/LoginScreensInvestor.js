import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import authService from "../services/authService";
import useLogin from "../hooks/useLogin";

const LoginScreensInvestor = (props) => {
  const history = useHistory();
  const [message, updateMessage] = useState("");
  const [loginValue, handleChange] = useLogin({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    const { handleSignupOrLogin } = props;
    console.log(loginValue.email, loginValue.password);
    e.preventDefault();
    try {
      await authService.login(loginValue);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#E6EDE9] flex">
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-100 object-cover"
          src="../../../assets/bg-investor.png"
          alt=""
        />
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="p-1 mb-5">
            <Link to="/logininvestor">
              <button
                type="submit"
                className="bg-white hover:bg-blue-400 text-black poppins font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Sign In as Investor Account
              </button>
            </Link>
          </div>
          <div className="p-1">
            <Link to="/loginbusiness">
              <button
                type="submit"
                className="bg-white hover:bg-blue-400 text-black poppins font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              >
                Sign In as Business Account
              </button>
            </Link>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 poppins">
            Sign in Investor
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
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      autoComplete="email"
                      placeholder="Email"
                      onChange={handleChange}
                      value={loginValue.email}
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
                      onChange={handleChange}
                      value={loginValue.password}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-2xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm poppins"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-1/2 flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-500 hover:bg-[#6DFBAA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 poppins"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              &nbsp;&nbsp;
              <Link to="/signup">
                <h1 className="absolute px-24 text-[#008C41] font-bold poppins">
                  Create an Account
                </h1>
              </Link>
              <h1 className="poppins">New Here?</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1"></div>
    </div>
  );
};

export default LoginScreensInvestor;
