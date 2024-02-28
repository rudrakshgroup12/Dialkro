import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaAddressBook,
  FaMapLocationDot,
  FaGear,
  FaLightbulb,
  FaLeanpub,
  FaCircleCheck,
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
 
      {/* <!-- com/ponent --> */}

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-4 mx-auto">
                    {businesses.map((business, index) => (
                        <div className=" flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                        <div className="pr-3">
                        <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
                    className="h-60 rounded w-full object-cover object-center mb-6 "
                  />
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-black text-2xl title-font font-bold mb-2">{business.name}</h1>
                            <h3 className="leading-relaxed text-base text-red-600 font-bold">{business.category}</h3>
                            <h3 className="leading-relaxed text-base ">{business?.location?.city}</h3>

                            <div className="py-4 px-5">
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-5 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                                <div className="inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                                
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Lorem</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex font-bold text-gray-800">
                                <div className="w-full md:w-1/2 flex space-x-3">
                                    <div className="w-1/2">
                                        <h2 className="text-gray-500">Lorem</h2>
                                        <p >description</p>
                                    </div>
                                    <div className="w-1/2">
                                        <h2 className="text-gray-500">Title</h2>
                                        <p>description</p>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 flex space-x-3">
                                    <div className="w-1/2">
                                        <h2 className="text-gray-500">Title</h2>
                                        <p>description</p>
                                    </div>
                                    <div className="w-1/2">
                                        <h2 class="text-gray-500">Title</h2>
                                        <p>description</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-3 text-indigo-500 inline-flex items-center">
                            {business.description.length > 150 ? (
                      <span>
                        {business.description.substring(0, 75)}...
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
                </section>
       
    </>
  );
}

export default Cont;
