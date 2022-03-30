import React, { useState } from "react";
// import NavLink from 'react-router-dom';
import { useHistory, Link } from "react-router-dom";
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
    { id: 3, text: "Business", to: "/business" },
    { id: 4, text: "Article", to: "/articlelist" },
  ];

  const handleClick = () => {
    setNavMobile(!navMobile);
  };

  const onChange = () => {
    if (window.scrollY >= 10) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  window.addEventListener("scroll", onChange);

  return (
    <header className="fixed top-0 left-0 z-50 w-full transition duration-500 bg-white shadow-lg">
      <nav className="flex max-w-screen px-24 py-3 mx-12">
        <Fade top>
          <div className="container hidden space-x-12 mx-2 md:flex ">
            <ul className="flex items-center m-5 space-x-8 text-xl font-bold">
              {data.map((item) => (
                <li key={item.id}>
                  <Link
                    className="font-bold text-black poppins"
                    activeClassName="text-gray-400 border b-4 border-blue-600 text-blue-700"
                    to={`${item.to}`}
                  >
                    {item.text}
                    <div className="flex items-center justify-center w-16 h-1 mt-2 bg-black rounded-full"></div>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex justify-center w-1/2">
              <Logo />
            <div className="items-center space-x-32 px-28 md:flex lg:flex">
              <Link
                className="absolute flex items-center justify-center h-8 text-black border-2 border-green-600 border-solid rounded-lg w-28 poppins"
                to="/signup"
              >
                Register
              </Link>
              <Link
                className="absolute flex items-center justify-center h-8 text-white bg-green-700 w-28 rounded-xl poppins"
                to="/login"
              >
                Login
              </Link>
            </div>
            </div>
          </div>
          <div className="flex border-r border-black m-5"></div>
          <div class="my-6 w-[50%] 2xl:w-[15%] justify-between">
            <form class="input-group relative flex flex-row items-center ">
              <input
                type="search"
                class="relative flex-auto min-w-0 block w-full px-6 py-2 text-sm poppins text-gray-900 bg-white bg-clip-padding border border-solid border-green-500 rounded-2xl transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#E6EDE9] focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute right-6">
                <img src="/searchAsset/searchIcon.png" alt="SearchIcon" />
              </div>
            </form>
          </div>
        </Fade>
      </nav>
    </header>
  );
};

export default Navbar;
