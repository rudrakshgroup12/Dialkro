import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-transparent to-blue-100">
    <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
      <div>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Log in to your account
        </h2>
      </div>
      <form className="mt-8 space-y-6" >
        <div className="rounded-md shadow-sm -space-y-px ">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              placeholder="Email address"
              // value={formData.email}
              // onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              placeholder="Password"
              // value={formData.password}
              // onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;
