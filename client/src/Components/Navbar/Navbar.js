import React, { useState } from "react";
// import NavLink from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from 'react-router-dom';
import Logo from "../Logo/Logo";
import Fade from "react-reveal/Fade";

// navbar
const Navbar = (props) => {
  const history = useHistory();
  const [navMobile, setNavMobile] = useState(false);
  const [changeHeader, setChangeHeader] = useState(false);
  // const [changeIcon, setChangeIcon] = useState(false)

  const data = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Investor", to: "/investor" },
    { id: 3, text: "Investment", to: "/investment" },
    { id: 4, text: "Article", to: "/articlelist" },
  ];

  const handleClick = () => {
    setNavMobile(!navMobile);
  };

  const onChange = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("scroll", onChange);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition duration-500 bg-white shadow-lg">
      <nav className="flex max-w-screen-xl px-6 py-3 mx-28">
        <Fade top>
          <div className="container hidden space-x-3 mx-18 md:flex lg:flex">
            <ul className="flex items-center m-5 space-x-8 text-xl font-bold">
              {data.map((item) => (
                <li key={item.id}>
                  <button
                    className="font-bold text-black poppins"
                    activeClassName="text-gray-400 border b-4 border-blue-600 text-blue-700"
                    onClick={() => history.push(`${item.to}`)}
                  >
                    {item.text}
                    <div className="flex items-center justify-center w-16 h-1 mt-2 bg-black rounded-full"></div>
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center flex-grow">
              <Logo />
            </div>
            <div className="items-center hidden space-x-32 px-24 md:flex lg:flex">
              <button
                className="absolute flex items-center justify-center h-8 text-black border-2 border-green-600 border-solid rounded-lg w-28 poppins"
                onClick={() => history.push("/signup")}
              >
                Register
              </button>
              <button
                className="absolute flex items-center justify-center h-8 text-white bg-green-700 w-28 rounded-xl poppins"
                onClick={() => history.push("/login")}
              >
                Login
              </button>
            </div>
          </div>
          {/* <div className="flex border-r border-black m-5 "></div> */}
        </Fade>
      </nav>
    </header>
  );
};

export default Navbar;
