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
import Carousel from '../Cont/Carousel.jsx';
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import BusinessCategory from "../Category/BusinessCategory.jsx";
import BusinessCheck from "../Category/BusinessCheck.jsx";

function Cont() {
  const { businesses, error } = useAuth();
  const add = ["shubham", "dipu", "saurabh", "arurapper"];

    const [rating, setRating] = useState(0);
  
    const handleStarClick = (index) => {
      setRating(index + 1);
    };

  const images = [
    'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201508171815013328-5b7ac1c04ebf11edac3d0a58a9feac02.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/64331939.jpg?k=fa33131e9f162cfdd638dcc560d7ca44f26ffb21142949efc7635675e610cd7f&o=&hp=1',
    'https://images.thedirect.com/media/article_full/disney-movies-titles.jpg',
  ];


 
  return (
    <>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <div className="container mx-auto mt-10">
      <Carousel images={images} />
    </div>

      <BusinessCategory />

 
      {/* <!-- com/ponent --> */}
      <div className="container flex justify-evenly mx-auto ">
                <section className="text-gray-600 body-font">
                    <div className="container px-3 py-4 mx-auto">
                    {businesses.map((business, index) => (
                        <div className=" flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-rose-500/50">
                        <div className="pr-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6zmjhc8zDABAkymLjCp4OaxUJWZKs0rEwWA&usqp=CAU"
                    className="h-50 rounded w-full object-cover object-center mb-6 "/>
                        </div>
                        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                            <h1 className="text-black text-2xl title-font font-bold mb-2">{business.name}</h1>
                            <h3 className="leading-relaxed text-base text-red-600 font-bold">{business.category}</h3>
                            <h3 className="leading-relaxed text-base ">{business?.location?.city}</h3>
           
                            <div className="flex">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', width:'30px', color: index < rating ? 'gold' : 'gray' }}
        >
          ★
        </span>
      ))}
      <p>Your rating {rating} {rating === 1 ? 'star' : 'stars'}.</p>
    </div>

                            <div className="py-4 px-5">
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-5 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Python</p>
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
                                        <p className="title-font font-medium"></p>
                                    </div>
                                </div>
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Swift</p>
                                    </div>
                                </div>
                                
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Java</p>
                                    </div>
                                </div>
                                <div className=" inline-block mr-2" >
                                    <div className="flex  pr-2 h-full items-center">
                                    <FaCircleCheck className="text-red-600 "/>
                                        <p className="title-font font-medium">Javascript</p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex font-bold text-gray-800">
                                <div className="w-full md:w-1/2 flex space-x-3">
                                    <div className="w-1/2">
                                        <h2 className="text-gray-500">Title</h2>
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
                
          
          
          <div className="hidden w-4/12 -mx-8 lg:block">
                <div className="px-8">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Business Name</h1>
                    {businesses.map((business, index) => (
                    <div class="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                        <ul className="-mx-4">
                            <li className="flex items-center"><img
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full"/>
                                <p><a href="#" className="mx-1 font-bold text-gray-700 hover:underline">{business.name}</a><span
                                        className="text-sm font-light text-gray-700">Created 23 Posts</span></p>
                            </li>
                       
                        </ul>
                    </div>
                    ))}
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Location</h1>
                    <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
                      <BusinessCheck/>
                    </div>
                </div>
                <div className="px-8 mt-10">
                    <h1 className="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
                    <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
                        <div className="flex items-center justify-center"><a href="#"
                                className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                        </div>
                        <div className="mt-4"><a href="#" className="text-lg font-medium text-gray-700 hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center"><img
                             src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                             alt="avatar" className="object-cover w-8 h-8 rounded-full"/><a href="#"
                             className="mx-3 text-sm text-gray-700 hover:underline">Alex John</a></div><span
                            className="text-sm font-light text-gray-600">Jun 1, 2020</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        




    </>
  );
}

export default Cont;
