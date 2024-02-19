import React from "react";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import { Link } from "react-router-dom";

function Editprofile() {
  const { islogin } = useAuth();
  return (
    <>
      {islogin ? (
        <>
          <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
            <h2 className="text-2xl font-semibold mb-6">Edit Your Profile</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username:
              </label>
              <input
                type="text"
                name="username"
                // value={userData.username}
                // onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password:
              </label>
              <input
                type="password"
                name="password"
                // value={userData.password}
                // onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Avatar:
              </label>
              <input
                type="file"
                accept="image/*"
                // onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              />
            </div>

            <button
              //   onClick={handleRegistration}
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
            >
              Register
            </button>
          </div>
        </>
      ) : (
        <h1>Please login</h1>
      )}
    </>
  );
}

export default Editprofile;
