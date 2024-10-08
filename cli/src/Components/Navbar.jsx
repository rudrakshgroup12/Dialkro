import React, { useState, useEffect } from "react";
import lg from "./lg.png";
// import { useAuth } from "./ProAuth/AuthPro.jsx";
import { useAuth } from "./context/auth.jsx";
import NavbarToggel from "./Navbar/NavbarToggel.jsx";
// import jwtDecode from 'jwt-decode'
import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";

import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUser,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

function Navbar() {
  const [auth, setAuth] = useAuth();
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  // const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className=" sticky top-0 z-10   dark:bg-neutral-900  font-sans bg-white">
        <section className="flex items-center lg:justify-center max-sm:flex-col relative py-3 px-10 border-rose-700 border-b lg:min-h-[80px] max-lg:min-h-[60px] ">
          <Link
            to="/"
            className="max-md:w-full max-sm:mb-4 bg-gradient-to-r text-4xl font-bold  inline-block text-transparent bg-clip-text"
          >
            <h1 className="animate-text bg-gradient-to-r  from-rose-900 via-red-700 to-black bg-clip-text text-transparent text-3xl font-black">
              Dialkro
            </h1>
          </Link>
          <div className="md:absolute md:right-10 flex  md:flex-row items-center p-2 max-md:ml-auto">
            {/* Navigation Item */}
            {!auth.user ? (
              <button className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                <Link to="/login" className="">
                  <span className="text-sm font-medium">{}</span>
                </Link>
              </button>
            ) : (
              <>
                <button className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                  <Link to="/login" className="">
                    <span className="text-sm font-medium">{}</span>
                  </Link>
                </button>
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                  <Link to="/postads" className="text-sm font-medium">
                    Post Ads
                  </Link>
                </div>
              </>
            )}
            {!auth.user ? (
              <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-rose-700">
                <button className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                  <Link to="/register" className="">
                    <span className="text-sm font-medium">Register</span>
                  </Link>
                </button>
                <button className="ml-2 flex cursor-pointer items-center gap-x-1  py-2 px-4 hover:text-rose-700 hover:animate-pulse">
                  <Link to="/login" className="">
                    <span className="text-sm font-medium">Signin</span>
                  </Link>
                </button>
              </div>
            ) : (
              <>
                <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-rose-700">
                  <div className="dropdown-center">
                    <button
                      to="/profile"
                      className="text-sm font-medium"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.username}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to="/profile"
                          className="text-sm font-medium flex p-2"
                        >
                          <FaRegUser
                            style={{ color: "#D40404", fontSize: "18px" }}
                          />
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="text-sm font-medium p-2"
                        >
                          Dashboard
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <button
                    className="ml-2 flex cursor-pointer items-center gap-x-1   py-2 px-4  hover:text-rose-700 hover:animate-pulse"
                    onClick={() => {}}
                  >
                    <Link onClick={handleLogout} to="/login">
                      <span className="text-sm font-medium">Sign out</span>
                    </Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
        <div className="flex flex-wrap py-3.5 px-10 overflow-x-auto">
          <ul
            id="collapseMenu"
            className={`lg:flex font-sans font-thin text-xl justify-center lg:space-x-10 max-lg:space-y-3 w-full max-lg:mt-2 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/"
              >
                {" "}
                Home
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/about"
              >
                {" "}
                About
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/Advertise"
              >
                {" "}
                Advertise
              </Link>
            </li>

            <li className="max-lg:border-b max-lg:py-2">
              <Link
                to="/businesses"
                className=" hover:text-rose-500  text-[16px] block font-medium"
              >
                Free Listings
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/blog"
              >
                {" "}
                Blog
              </Link>
            </li>
            {/* <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/team">
                {" "}
                Team
              </Link>
            </li> */}
            {/* <li className="max-lg:border-b max-lg:py-2">
              <Link className="hover:text-rose-500  text-[16px] block font-medium" to="/portfolio">
                {" "}
                Portfolio
              </Link>
            </li> */}
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/service"
              >
                {" "}
                Other Service
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2">
              <Link
                className="hover:text-rose-500  text-[16px] block font-medium"
                to="/contactus"
              >
                {" "}
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex ml-auto lg:order-1 lg:hidden">
            <button id="toggle" className="ml-7" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#747474"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
