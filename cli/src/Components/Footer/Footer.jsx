import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-neutral-100 to-transparent text-neutral-700 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="flex flex-col md:flex-row items-center justify-center md:mr-8 md:w-1/2">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h4 className="text-xl font-bold mb-4">
              &copy; 2024 Your Website. All rights reserved.
            </h4>
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <a href="#" className="text-neutral-600 hover:underline mx-2 mb-2 sm:mb-0">
                Terms of Service
              </a>
              <span className="text-gray-300 sm:mx-2">|</span>
              <a href="#" className="text-neutral-600 hover:underline mx-2">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="md:flex items-center md:justify-start">
            <h5 className=" font-semibold mb-2 md:mb-0">Follow</h5>
            <div className="flex items-center mt-2 md:mt-0">
              <a href="#" className="text-neutral-600 hover:underline mx-2">
                <FaFacebook />
              </a>
              <a href="#" className="text-neutral-600:underline mx-2">
                <FaTwitter />
              </a>
              <a href="#" className="text-neutral-600 hover:underline mx-2">
                <FaInstagram />
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start md:w-1/2 mt-4 md:mt-0">
          {/* Additional sections */}
          <div className="mb-4 text-center md:text-left">
            <h5 className="text-xl font-semibold">Contact Us</h5>
            <p className="text-neutral-600 opacity-75">
              +123-456-7890 <br />
              hello@yourwebsite.com
            </p>
          </div>
          <div className="mb-4 text-center md:text-left">
            <h5 className="text-xl font-semibold">Newsletter</h5>
            <p className="text-neutral-600 opacity-75">
              Stay up-to-date with our latest news and offers.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 text-neutral-600 rounded-full px-4 py-2 mr-2 w-full md:w-auto"
              />
              <button className="bg-neutral-400 text-indigo-500 hover:bg-indigo-600 focus:outline-none rounded-full px-6 py-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;