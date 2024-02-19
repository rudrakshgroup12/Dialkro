import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import { IoIosLogOut } from "react-icons/io";
import Banner from "./Banner.jsx"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Import Tailwind CSS
import "tailwindcss/tailwind.css";

const UserProfileComponent = () => {
  const { islogin, logOutNow, error, userData } = useAuth();
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    company: "ABC Inc",
    address: "123 Main St, Cityville",
  });

  return (
    <>
      {error && (
        <div className="error-message text-red-600 mb-8 text-4xl font-bold">
          Oops! {error}
        </div>
      )}
      {islogin ? (
        <div className="h-full bg-white p-8">
          <div className="w-full h-[250px]">
           <Banner/>
            <Link to="/edituser">
              <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100">
                <span>edit</span>
              </button>
            </Link>
            <button
              onClick={logOutNow}
              className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100"
            >
              Sign Out
            </button>
          </div>
          <div className="flex flex-col items-center -mt-7">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">
                {" "}
                <UserInfoField
                  icon={<FaUser className="text-gray-700" />}
                  label="Your Name"
                  value={user?.name}
                  editable={true}
                />
              </p>
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-100 h-2.5 w-2.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </span>
            </div>
            <p className="text-gray-700">UserName:{userData.data?.username}</p>
            <p className="text-sm text-gray-500">{userData.data?.email}</p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <Link to="/mybusiness">
                <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <span>Explore Your Business</span>
                </button>
              </Link>
              <Link to="/new">
                <button className="flex items-center bg-rose-800 hover:bg-neutral-900 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <span>Add Your Business</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="login-prompt text-center mb-4">
          Unlock the full potential. Log in now!
        </div>
      )}
    </>
  );
};

// Reusable component for displaying user information fields
const UserInfoField = ({ icon, label, value }) => (
  <div className="flex items-center mb-2">
    {icon && React.cloneElement(icon, { className: "text-xl mr-2" })}
    <strong className="font-semibold">{label}:</strong>
    {value}
  </div>
);

export default UserProfileComponent;
