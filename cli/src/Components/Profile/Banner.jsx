import React,{ useEffect} from "react";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container p-4 mx-auto text-center">
        <div className="text-area font-nun font-black text-rose-800">
          <h2 className="text-3xl md:text-5xl my-10">
            Discover a New World of Web Development with ryadDev
          </h2>
          <div className="mx-1 p-3 lg:mx-36 py-0 md:px-24 mb:py-2">
            <p className="text-md md:text-xl text-gray-800 font-light mx-auto">
              ryadDev is a revolutionary visual builder designed to make web
              development faster and more enjoyable. Build stunning webpages
              effortlessly using Tailwind CSS, and streamline your development
              process to ship projects in minutes, not weeks.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Banner;