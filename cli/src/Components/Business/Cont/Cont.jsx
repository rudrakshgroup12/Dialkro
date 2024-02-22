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
    <>
    <div className=" flex flex-wrap flex-col gap-2 md:flex-row 
    items-center justify-center space-x-2">
        <div className="w-64 h-40 mt-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">

            <div className="absolute inset-0 bg-indigo-500 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg">
                <img src="https://images.pexels.com/photos/5905741/pexels-photo-5905741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image1" />
                </h3>
            </div>
        </div>
        <div className="w-64 h-40 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">
            
            <div className="absolute inset-0 bg-white-500 flex items-center justify-center">
                <h3 className="text-black font-bold text-lg">
                Content
                </h3>
            </div>
        </div>
        <div className="w-64 h-40 mt-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">

<div className="absolute inset-0 bg-indigo-500 flex items-center justify-center">
    <h3 className="text-white font-bold text-lg">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU" alt="Image1" />
    </h3>
</div>
</div>
<div className="w-64 h-40 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">

<div className="absolute inset-0 bg-red-700 flex items-center justify-center">
    <h3 className="text-white font-bold text-lg">
    Content
    </h3>
</div>
</div>
        <div className="w-64 h-40 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-indigo-500 flex items-center justify-center">
            <img src="https://images.pexels.com/photos/5491334/pexels-photo-5491334.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image1" />
               
            </div>
        </div>
        <div className="w-64 h-40 mb-4 bg-white shadow-md rounded-lg overflow-hidden relative transform transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-red-500 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg"> Content</h3>
            </div>
        </div>
    </div>
    <div className="bg-white mt-10">
    <section className="border border-gray-300">
    {businesses.map((business, index) => (
        <section key={index} className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                <div className="p-5 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU" className="h-100 pr-10"/>
                </div>
                <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h1 className="text-black text-2xl title-font font-bold mb-2">{business.name}</h1>
                    <p className="leading-relaxed text-base"> {business.description.length > 150 ? (
          <span>
            {business.description.substring(0, 150)}...
            <a href="#">Read more</a>
          </span>
        ) : (
          business.description
        )}</p>
                    <div className="flex mt-2">
                    {/* {/ <FaLocationDot className="text-red-600"/><p>{business.location.address}</p> /} */}
                    <FaMapLocationDot className="text-red-600"/><p>{business?.location?.address}</p>
                    </div>
                  
                    <div className="py-4">
                        <div className=" inline-block mr-2" >
                            <div className="flex pr-2 h-full items-center">
                            <FcApproval />
                                <p className="title-font font-medium">{business.category}</p>
                            </div>
                        </div>
                        <div className="inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                                <p className="title-font font-medium">{business?.location?.city}</p>
                            </div>
                        </div>
                        <div className="inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                                <p className="title-font font-medium">{business?.location?.state}</p>
                            </div>
                        </div>
                        <div className="inline-block mr-2" >
                            <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                                <p className="title-font font-medium">{business?.location?.zipCode}</p>
                            </div>
                        </div>
                        
                    
                    </div>
                    <div className="md:flex font-bold text-gray-800">
                        <div className="w-full md:w-1/2 flex space-x-3">
                            <div className="w-1/2">
                                <h2 className="text-red-600">Phone Number</h2>
                                <p >{business.contact.phone}</p>
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
</>
  );
}

export default Cont;
