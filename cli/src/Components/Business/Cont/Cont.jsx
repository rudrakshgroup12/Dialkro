import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
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
  const add = ["shubham", "dipu", "saurabh", "arurapper"];
  return (
    <>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <BusinessCategory />
      <div className="container  py-24 mx-auto">
        <div className="flex flex-row -m-4 ">
          {businesses.map((business, index) => (
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                <img
                  src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
                  className="h-40 rounded w-full object-cover object-center mb-6 "
                />
                <h3 className="tracking-widest text-blue-600 text-xs font-medium title-font">
                  {business.category}
                </h3>
                <hr className="p-2 " />
                <h3 className="tracking-widest text-rose-700 text-xl font-medium title-font">
                  {business?.location?.city}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {business.name}
                </h2>
                <p className="leading-relaxed text-base text-neutral-900">
                  {business.description.length > 150 ? (
                    <span>
                      {business.description.substring(0, 75)}
                      <Link
                        to={`/business/${business._id}`}
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Readmore
                      </Link>
                    </span>
                  ) : (
                    business.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cont;
