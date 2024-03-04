import React from "react";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import { Link, useParams } from "react-router-dom";
import "./Editprofile.css";
function Editprofile() {
  const { islogin, logOutNow, error, userData } = useAuth();

  return (
    <>
      <div className="">
        <div className="flex  bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          {islogin ? (
            <>
              <div className="  dark:bg-gray-900">
                {/* <!-- Container --> */}
                <div className="mx-auto">
                  <div className="flex justify-around p-5">
                    <div className="bg-white  overflow-hidden shadow rounded-lg border">
                      <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          User Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          This is some information about the user.
                        </p>
                      </div>
                      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Full name
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {userData.data?.username}
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Email address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              {userData.data?.email}
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Phone number
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              (123) 456-7890
                            </dd>
                          </div>
                          <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">
                              Address
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                              123 Main St Anytown, USA 12345
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    {/* <!-- Row --> */}
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                      {/* <!-- Col --> */}
                      <div
                        className="w-full h-auto dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                        // style="background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')"
                      ></div>
                      {/* <!-- Col --> */}
                      <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                          Create an Account!
                        </h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                          <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                              <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                for="firstName"
                              >
                                First Name
                              </label>
                              <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                              />
                            </div>
                            <div className="md:ml-2">
                              <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                for="lastName"
                              >
                                Last Name
                              </label>
                              <input
                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div className="mb-4">
                            <label
                              className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                              for="email"
                            >
                              Email
                            </label>
                            <input
                              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                              id="email"
                              type="email"
                              placeholder="Email"
                            />
                          </div>
                          <div className="mb-4 md:flex md:justify-between">
                            <div className="mb-4 md:mr-2 md:mb-0">
                              <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                for="password"
                              >
                                Password
                              </label>
                              <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                              />
                              <p className="text-xs italic text-red-500">
                                Please choose a password.
                              </p>
                            </div>
                            <div className="md:ml-2">
                              <label
                                className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                                for="c_password"
                              >
                                Confirm Password
                              </label>
                              <input
                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="c_password"
                                type="password"
                                placeholder="******************"
                              />
                            </div>
                          </div>
                          <div className="mb-6 text-center">
                            <button
                              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                              type="button"
                            >
                              Register Account
                            </button>
                          </div>
                          <hr className="mb-6 border-t" />
                          <div className="text-center">
                            <a
                              className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                              href="#"
                            >
                              Forgot Password?
                            </a>
                          </div>
                          <div className="text-center">
                            <a
                              className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                              href="./index.html"
                            >
                              Already have an account? Login!
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>Please login</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Editprofile;

{
  /* <div className="bg-white overflow-hidden shadow rounded-lg border">
<div className="px-4 py-5 sm:px-6">
  <h3 className="text-lg leading-6 font-medium text-gray-900">
    User Profile
  </h3>
  <p className="mt-1 max-w-2xl text-sm text-gray-500">
    This is some information about the user.
  </p>
</div>
<div className="border-t border-gray-200 px-4 py-5 sm:p-0">
  <dl className="sm:divide-y sm:divide-gray-200">
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        Full name
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {userData.data?.username}
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        Email address
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {userData.data?.email}
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        Phone number
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        (123) 456-7890
      </dd>
    </div>
    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <dt className="text-sm font-medium text-gray-500">
        Address
      </dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        123 Main St Anytown, USA 12345
      </dd>
    </div>
  </dl>
</div>
</div>

<div className=" p-8 lg:w-1/2">
<h2 className="text-2xl font-semibold text-gray-700 text-center">
  Welcome back!
</h2>
<p className="text-xl text-gray-600 text-center"></p>
<a
  href="#"
  className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
>
  <div className="px-4 py-3">
    <svg className="h-6 w-6" viewBox="0 0 40 40">
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#FFC107"
      />
      <path
        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
        fill="#FF3D00"
      />
      <path
        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
        fill="#4CAF50"
      />
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#1976D2"
      />
    </svg>
  </div>
</a>
<div className="mt-4 flex items-center justify-between">
  <span className="border-b w-1/5 lg:w-1/4"></span>
  <a
    href="#"
    className="text-xs text-center text-gray-500 uppercase"
  >
    or login with email
  </a>
  <span className="border-b w-1/5 lg:w-1/4"></span>
</div>
<div className="mt-4">
  <label className="block text-gray-700 text-sm font-bold mb-2">
    UserName
  </label>
  <input
    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
    type="text"
    name="username"
    //  value={userData.username}
    // onChange={handleInputChange}
  />
</div>
<div className="mt-4">
  <div className="flex justify-between">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Password
    </label>
    <a href="#" className="text-xs text-gray-500">
      Forget Password?
    </a>
  </div>
  <input
    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
    type="password"
    // value={userData.password}
    // onChange={handleInputChange}
  />
</div>
<div className="mt-4">
  <div className="flex justify-between">
    <label className="block text-gray-700 text-sm font-bold mb-2">
      Avatar
    </label>
    <a href="#" className="text-xs text-gray-500">
      Forget Password?
    </a>
  </div>
  <input
    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
    type="file"
    //    accept="image/*"
    // onChange={handleFileChange}
  />
</div>
<div className="mt-8">
  <button
    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
    //   onClick={handleRegistration}
  >
    Edit Business
  </button>
</div>
<div className="mt-4 flex items-center justify-between">
  <span className="border-b w-1/5 md:w-1/4"></span>
  <a href="#" className="text-xs text-gray-500 uppercase">
    or sign up
  </a>
  <span className="border-b w-1/5 md:w-1/4"></span>
</div>
</div> */
}
