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
                  {business.description.length > 75 ? (
                    <span>
                      {business.description.substring(0, 10)}
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
        </div>
        




    </>
  );
}

export default Cont;
