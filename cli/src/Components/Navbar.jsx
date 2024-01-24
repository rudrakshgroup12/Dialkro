import React from "react";
import lg from "./lg.png";
import bg from "./bgii.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="relative bg-transparent bg-cover bg-center shadow-md text-neutral-700 text-xl font-thin sticky top-0 left-0 w-full flex flex-wrap justify-between items-center p-4 md:p-6 lg:p-8 filter-blur-md"
      // style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <Link to="/">
          <img src={lg} alt="Your Logo" className="h-10 w-auto" />
        </Link>
      </div>
      <ul className="list-none flex flex-wrap gap-2 md:gap-4 w-full md:w-auto">
        <li className="mb-2 md:mb-0">
          <Link
            to="/"
            className="text-sm md:text-base hover:text-blue-300 transition duration-200 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/login"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Login
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/logout"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Logout
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/register"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Register
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/businesses"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Businesses
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/new"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
            Add
          </Link>
        </li>
        <li className="mb-2 md:mb-0">
          <Link
            to="/admin"
            className="text-sm md:text-base hover:text-gray-300 transition duration-200 ease-in-out"
          >
          MY
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
