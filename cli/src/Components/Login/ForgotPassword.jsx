import React from "react";
// import ResetPassword from "./ResetPassword";
import { useAuth } from "../ProAuth/AuthPro.jsx";
function ForgotPassword() {
  const { emailid, forgothandleSubmit, forgotHandleInputChange,error } = useAuth();

  return (
    <>
      <section className="text-gray-600 body-font">
      {error && (
          <h1 className="text-rose-800 mb-8 text-4xl font-semibold">{error}</h1>
        )}
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Forgot Password
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Reset Your User Password using Your Email
            </p>
          </div>
          <form onSubmit={forgothandleSubmit} className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            {/* <div className="relative flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div> */}
            <div className="relative flex-grow w-full">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Enter Your Email Id
              </label>
              <input
              onChange={forgotHandleInputChange}
              defaultValue={emailid.email}
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button type="submit" className="text-white bg-rose-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Send Reset Id 
            </button>
          </form>
        </div>
        {/* <ResetPassword /> */}
      </section>
    </>
  );
}

export default ForgotPassword;
