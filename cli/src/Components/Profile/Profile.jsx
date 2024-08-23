import React, { useState, useEffect } from "react";
import profileback from "../assets/profileback.jpeg";
import user from "../assets/user.png";
import axios from "axios";
import { useAuth } from "../context/auth.jsx";
import { useNavigate } from "react-router-dom";

import { FaUser, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// Import Tailwind CSS
import "tailwindcss/tailwind.css";
import Layout from "../Layout/Layout.jsx";

const UserProfileComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [buisness, setBuisness] = useState([]);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });

    localStorage.removeItem("auth");
    alert("Logout Successfully");
    navigate("/");
  };

  // const API_PATH = 'https://api.dialkro.in';
  const getAllBuisness = async () => {
    try {
      const { data } = await axios.get(`/api/get-buisness`);
      setBuisness(data.buisness);
    } catch (error) {
      console.log(error);
      // toast.error("Something went wrong in getting product");
    }
  };

  //LifeCycle Mehod
  useEffect(() => {
    getAllBuisness();
  }, []);

  return (
    <Layout title="Dialkro Profile">
      {auth.user ? (
        <div className="h-full bg-white p-8">
          <div className="w-full h-[250px]">
            <img
              src={profileback}
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
            <Link to="/edituser">
              <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100">
                <span>edit </span>
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 m-2 rounded text-sm space-x-2 transition duration-100"
            >
              Sign Out
            </button>
          </div>
          <div className="flex flex-col items-center -mt-7">
            <img
              src={user}
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              {/* <p className="text-2xl">
                {" "}
                <UserInfoField
                  icon={<FaUser className="text-gray-700" />}
                  label="Your Name"
                  value={auth?.user?.name}
                  editable={true}
                />
              </p> */}
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
            <p className="text-black-700 font-bold uppercase flex">
              <FaUser className="text-red-800 mt-1 mx-1" />
              {auth?.user?.username}
            </p>
            {/* {userData.data?._id} */}
            <p className="text-sm text-black-500 flex font-bold">
              <FaEnvelope className="text-red-800 mt-1 mx-1" />
              {auth?.user?.email}
            </p>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <Link to="/mybusiness">
                <button className="flex items-center bg-rose-800 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                  <span>Explore Your Business</span>
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

      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              {/* <!-- card header --> */}
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    Business Projects
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    All BusinessList is here for Your Profile
                  </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    {" "}
                    See other projects{" "}
                  </a>
                </div>
              </div>
              {/* <!-- end card header --> */}
              {/* <!-- card body  --> */}
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">
                          BUSINESS
                        </th>
                        {/* <th className="pb-3 text-end min-w-[100px]">Category</th> */}
                        <th className="pb-3 text-end min-w-[100px]">CONTACT</th>
                        <th className="pb-3 pr-12 text-end min-w-[175px]">
                          Email
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          Website
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">City</th>
                      </tr>
                    </thead>
                    {/* {businesses.map((business, index) => ( */}
                    {buisness?.map((p) => (
                      <tbody>
                        <tr className="border-b border-dashed last:border-b-0">
                          <td className="p-3 pl-0">
                            <div className="flex items-center">
                              <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                <img
                                  src={`/api/buisness-photo/${p._id}`}
                                  // src="https://raw .githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                                  className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                  alt={p.name}
                                />
                              </div>
                              <div className="flex flex-col justify-start">
                                <a
                                  href="javascript:void(0)"
                                  className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                >
                                  {" "}
                                  {p.name}{" "}
                                </a>
                              </div>
                            </div>
                          </td>
                          {/* <td className="p-3 pr-0 text-end">
                          <span className="font-semibold text-light-inverse text-md/normal">
                            {" "}
                            {p?.category}
                          </span>
                        </td> */}
                          <td className="p-3 pr-0 text-end">
                            <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-1"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                />
                              </svg>{" "}
                              {p.phone}{" "}
                            </span>
                          </td>
                          <td className="p-3 pr-12 text-end">
                            <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                              {" "}
                              {p.email}
                            </span>
                          </td>
                          <td className="pr-30 text-start">
                            <a
                              href={p.website}
                              className="font-semibold text-light-inverse text-md/normal"
                            >
                              {p.name}
                            </a>
                          </td>
                          <td className="p-3 pr-0 text-end">
                            <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                              <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                {p.city}
                              </span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfileComponent;
