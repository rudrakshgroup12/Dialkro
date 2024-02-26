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

  return (
    <>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <BusinessCategory />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {businesses.map((business, index) => (
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
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
        </div>
      </section>
    </>
  );
}

export default Cont;

/* <div className="bg-white mt-10">
<section className="border border-gray-300">
  {businesses.map((business, index) => (
    <section key={index} className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto inline-block">
        <div className="p-5 bg-white  items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
          <div className="p-2 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
              className="h-100 pr-10"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-2 sm:mt-0">
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
              {/* {/ <FaLocationDot className="text-red-600"/><p>{business.location.address}</p> /} */
//               <FaMapLocationDot className="text-red-600" />
//               <p>{business?.location?.address}</p>
//             </div>

//             <div className="py-4">
//               <div className=" inline-block mr-2">
//                 <div className="flex pr-2 h-full items-center">
//                   <FcApproval />
//                   <p className="title-font font-medium">
//                     {business.category}
//                   </p>
//                 </div>
//               </div>
//               <div className="inline-block mr-2">
//                 <div className="flex  pr-2 h-full items-center">
//                   <FcApproval />
//                   <p className="title-font font-medium">
//                     {business?.location?.city}
//                   </p>
//                 </div>
//               </div>
//               <div className="inline-block mr-2">
//                 <div className="flex  pr-2 h-full items-center">
//                   <FcApproval />
//                   <p className="title-font font-medium">
//                     {business?.location?.state}
//                   </p>
//                 </div>
//               </div>
//               <div className="inline-block mr-2">
//                 <div className="flex  pr-2 h-full items-center">
//                   <FcApproval />
//                   <p className="title-font font-medium">
//                     {business?.location?.zipCode}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:flex font-bold text-gray-800">
//               <div className="w-full md:w-1/2 flex space-x-3">
//                 <div className="w-1/2">
//                   <h2 className="text-red-600">Phone Number</h2>
//                   <p>{business.contact.phone}</p>
//                 </div>
//                 <div className="w-1/2">
//                   <h2 className="text-red-600">Website</h2>
//                   <p>{business.contact.website}</p>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2 flex space-x-3">
//                 <div className="w-1/2">
//                   <h2 className="text-red-600">Email Id</h2>
//                   <p>{business.contact.email}</p>
//                 </div>
//                 <div className="w-1/2">
//                   <h2 className="text-red-600">Location</h2>
//                   <p>description</p>
//                 </div>
//               </div>
//             </div>

//             <Link to={`/business/${business._id}`}>
//               <button className="mt-3 text-white inline-flex items-center bg-red-600 font-bold mx-auto rounded-full px-5 py-2">
//                 View Business
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   ))}
// </section>
// </div> */

// {/* <div className="xl:w-1/4 md:w-1/2 p-4">
//     <div className="bg-gray-100 p-6 rounded-lg">
//       <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401" alt="content">
//       <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
//       <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div> */}
//         {/* <div className="xl:w-1/4 md:w-1/2 p-4">
//     <div className="bg-gray-100 p-6 rounded-lg">
//       <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402" alt="content">
//       <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
//       <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div> */}
//         {/* <div className="xl:w-1/4 md:w-1/2 p-4">
//     <div className="bg-gray-100 p-6 rounded-lg">
//       <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403" alt="content">
//       <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
//       <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
//       <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
//     </div>
//   </div> */}

// {/*
//     <div >
//       {businesses.map((business, index) => (
//         <section className="text-gray-600 body-font flex-col">
//           <div className="container px-5 py-2 mx-auto">

//               <div className="p-1 md:w-1/3">
//                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
//                     className="h-100 bg-cover w-full "
//                   />

//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-rose-800 mb-1">
//                       CATEGORY {business.category}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                       {business.name}
//                     </h1>
//                     <p className="leading-relaxed mb-3">
//                       {business.description.length > 150 ? (
//                         <span>
//                           {business.description.substring(0, 150)}...
//                           <Link
//                             to={`/business/${business._id}`}
//                             className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
//                           >
//                             Readmore
//                           </Link>
//                         </span>
//                       ) : (
//                         business.description
//                       )}
//                     </p>
//                     <div className="flex items-center flex-wrap ">
//                       <Link
//                         to={`/business/${business._id}`}
//                         className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
//                       >
//                         Learn More
//                         <svg
//                           className="w-4 h-4 ml-2"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           fill="none"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <path d="M5 12h14"></path>
//                           <path d="M12 5l7 7-7 7"></path>
//                         </svg>
//                       </Link>
//                       <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
//                         <svg
//                           className="w-4 h-4 mr-1"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           fill="none"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//                           <circle cx="12" cy="12" r="3"></circle>
//                         </svg>
//                         1.2K
//                       </span>
//                       <span className="text-rose-900 inline-flex items-center leading-none text-sm">
//                         <svg
//                           className="w-4 h-4 mr-1"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           fill="none"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           viewBox="0 0 24 24"
//                         >
//                           <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//                         </svg>
//                         6
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//         </section>
//       ))}
//     </div> */}

//  {/* <div className="flex flex-wrap w-full mb-20">
//             <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
//               <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//                 Pitchfork Kickstarter Taxidermy
//               </h1>
//               <div className="h-1 w-20 bg-indigo-500 rounded"></div>
//             </div>
//             <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
//               Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
//               gentrify, subway tile poke farm-to-table. Franzen you probably
//               haven't heard of them man bun deep jianbing selfies heirloom prism
//               food truck ugh squid celiac humblebrag.
//             </p>
//           </div> */}

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
