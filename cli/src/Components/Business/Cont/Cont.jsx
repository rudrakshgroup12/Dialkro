import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  // FaLocationDot,
  FaAddressBook,
  FaMapLocationDot,
  FaGear,
  FaLightbulb,
  FaLeanpub,
} from "react-icons/fa6";

import {
  FcApproval,
  FcBusinessman,
  FcBullish,
  FcIcons8Cup,
  FcFaq,
  FcLike,
  FcSettings,
  FcAbout,
} from "react-icons/fc";
import axios from "axios";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import BusinessCategory from "../Category/BusinessCategory.jsx";

function Cont() {
  const { businesses, error } = useAuth();

  // const [businesses, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const URL = "/api/business";

  //     // Axios will automatically reject the promise on HTTP error (status >= 400)
  //     // We can catch the error using .catch method
  //     await axios
  //       .get(URL)
  //       .then((response) => {
  //         if (response.status === 401) {
  //           // Handle unauthorized access here
  //           // For example, redirect to login page or show an error message
  //           setError("Unauthorized access. Please login.");
  //           return;
  //         }

  //         // if (!response.data.length) {
  //         //   console.log("No users found");
  //         // }

  //         setUsers(response.data.business);
  //         // console.log(response.data);
  //       })
  //       .catch((err) => {
  //         // console.error("Error fetching users:", err);
  //         setError(`Log in Please `);
  //       });
  //   })();

  // }, []);

  return (
    <div className="bg-white">
      SUCK THIS CONT
      <BusinessCategory/>
      <section>
        {businesses.map((business, index) => (
          <section key={index} className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div className="sm:w-32 sm:h-32 h-40 w-40 sm:mr-20 inline-flex items-center justify-center flex-shrink-0">
                  <img src="https://m.media-amazon.com/images/I/71+PbCqKV4L._AC_UF1000,1000_QL80_.jpg" />
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                  <h1 className="text-black text-2xl title-font font-bold mb-2">
                    {business.name}
                  </h1>
                  <p className="leading-relaxed text-base">
                    {" "}
                    {business.description.length > 150 ? (
                      <span>
                        {business.description.substring(0, 150)}...
                        <a href="#">Read more</a>
                      </span>
                    ) : (
                      business.description
                    )}
                  </p>
                  <div className="flex mt-2">
                    {/* {/ <FaLocationDot className="text-red-600"/><p>{business.location.address}</p> /} */}
                    <FaMapLocationDot className="text-red-600" />
                    <p>{business?.location?.address}</p>
                  </div>

                  <div className="py-4">
                    <div className=" inline-block mr-2">
                      <div className="flex pr-2 h-full items-center">
                        <FcApproval />
                        <p className="title-font font-medium">
                          {business.category}
                        </p>
                      </div>
                    </div>
                    <div className="inline-block mr-2">
                      <div className="flex  pr-2 h-full items-center">
                        <FcApproval />
                        <p className="title-font font-medium">
                          {business?.location?.city}
                        </p>
                      </div>
                    </div>
                    <div className="inline-block mr-2">
                      <div className="flex  pr-2 h-full items-center">
                        <FcApproval />
                        <p className="title-font font-medium">
                          {business?.location?.state}
                        </p>
                      </div>
                    </div>
                    <div className="inline-block mr-2">
                      <div className="flex  pr-2 h-full items-center">
                        <FcApproval />
                        <p className="title-font font-medium">
                          {business?.location?.zipCode}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex font-bold text-gray-800">
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-red-600">Phone Number</h2>
                        <p>{business.contact.phone}</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-red-600">Website</h2>
                        <p>{business.contact.website}</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 flex space-x-3">
                      <div className="w-1/2">
                        <h2 className="text-red-600">Email Id</h2>
                        <p>{business.contact.email}</p>
                      </div>
                      <div className="w-1/2">
                        <h2 className="text-red-600">Location</h2>
                        <p>description</p>
                      </div>
                    </div>
                  </div>

                  <Link to={`/business/${business._id}`}>
                    <button className="mt-3 text-white inline-flex items-center bg-red-600 font-bold mx-auto rounded-full px-5 py-2">
                      View Business
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </section>
    </div>
  );
}

export default Cont;
