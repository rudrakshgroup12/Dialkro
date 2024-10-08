import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import dialkroservice from "../assets/dialkroservice.png";
import Layout from "../Layout/Layout";
const Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div>
        <div className="bg-red-800">
          <div className="lg:grid lg:grid-cols-2">
            <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
              <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                <span className="block">
                  Empowering Your Digital Presence with Expert Web Development
                  and Graphic Design Solutions
                </span>
                <span className="block">Start your trial today.</span>
              </h2>
              <p className="text-gray-300 mt-5">
                Start and Grow Your Business Together
              </p>
              <div className="inline-block shadow mt-5">
                <Link
                  href="#"
                  to="/new"
                  className="inline-block py-3 px-4 bg-white hover:bg-indigo-100 text-red-800 font-medium border border-transparent rounded-md"
                >
                  Add your Business
                </Link>
              </div>
            </div>
            <div className="lg:relative lg:mt-16">
              <img
                className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
                src={dialkroservice}
                alt="Woman workcation on the beach"
              />
            </div>
          </div>
        </div>
        <div className="px-3 md:lg:xl:px-40   border-t border-b py-20 bg-opacity-10 serviceback">
          <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Social Media Marketing
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Team BrainEdge education is a bunch of highly focused, energetic
                set of people.
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Web Development
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Know where you stand and what next to do to succeed .
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Wordpress Development
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Professional Advice for higher education abroad and select the
                top institutions worldwide.
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">SEO</p>
              <p className="mt-2 text-sm text-slate-500">
                Yet another year ! Yet another jewel in our crown!
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Graphic Design
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Get Topic-Wise Tests, Section- Wise and mock tests for your
                preparation.
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Shopify SEO
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Visa process by helping you create the necessary documentation
              </p>
            </div>
            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Amazon SEO
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Yet another year ! Yet another jewel in our crown!
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Android Development
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Get Topic-Wise Tests, Section- Wise and mock tests for your
                preparation.
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                SMO Service
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Visa process by helping you create the necessary documentation
              </p>
            </div>
          </div>

          <div className="w-full   bg-red-700 shadow-xl shadow-red-200 py-10 px-20 flex flex-wrap justify-between items-center">
            <p className=" text-white">
              {" "}
              <span className="text-4xl font-medium">
                Our Service
              </span> <br />{" "}
              <span className="text-lg">
                Book For Free Career Consultation Today !{" "}
              </span>
            </p>
            <Link
              className="px-4 py-2  font-medium text-slate-700 shadow-xl  hover:bg-white duration-150  bg-yellow-400"
              to="/new"
            >
              BOOK AN APPOINTMENT{" "}
            </Link>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center gap-5 my-6 md:flex-row">
          <Link
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-b dark:shadow-red-900 shadow-red-200 hover:shadow-2xl hover:shadow-red-400 hover:-tranneutral-y-px "
            to="/portfolio"
          >
            Our Portfolio
          </Link>
          <Link
            class="inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px"
            to="/team"
          >
            Our Team
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Service;
