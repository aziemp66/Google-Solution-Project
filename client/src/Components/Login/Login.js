import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import authService from "../../services/authService";
import { useForm } from "../../hooks/useLogin";

const Login = (props) => {
  const history = useHistory();
  const refLogin = useRef();
  const [message, updateMessage] = useState("");
  const [getValidForm, setValidForm] = useState(true);
  const [valueForm, handleChange] = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    refLogin.current.checkValidity() ? setValidForm(false) : setValidForm(true);
    updateMessage("");
  }, [valueForm]);

  const handleSubmit = async (e) => {
    const { handleSignupOrLogin } = props;
    console.log("handling submit");
    e.preventDefault();
    try {
      if (valueForm.password !== valueForm.passwordConf)
        throw Error("Passwords must match");
      await authService.login(valueForm);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex justify-center">
            <img width="150" src="/images/Auto-Mastery-fav.png" alt="logo" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Login to your account
          </h2>
          <div className="mt-8">
            <div className="mt-6">
              <form
                ref={refLogin}
                autoComplete="off"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {message && <p>{message}</p>}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="on"
                      onChange={handleChange}
                      value={valueForm.email}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      onChange={handleChange}
                      value={valueForm.password}
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    disabled={getValidForm}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
      </div>
    </div>
  );
};

export default Login;
