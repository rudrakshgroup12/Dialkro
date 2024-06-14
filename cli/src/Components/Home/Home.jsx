import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Popup from "./Popup.jsx"
import { useNavigate } from "react-router-dom";
// import BusinessCategory from "../Business/Category/BusinessCategory.jsx";
import Bgr from "./bgr1.png";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import "./Home.css";
import dialkrohomepage2 from "../assets/dialkrohomepage2.png";
import dialkrohome3 from "../assets/dialkrohome3.png";
import dialkrohomepageimg from "../assets/dialkrohomepageimg.png";
import howtojoin from "../assets/howtojoin.png";
import filltheform from "../assets/filltheform.png";
import restaurentlogo from "../assets/restaurentlogo.jpg";
import hotel from "../assets/hotel.png";
import beauty from "../assets/beauty.png";
import hospital from "../assets/hospital.png";
import wedding from "../assets/wedding.png";
import gym from "../assets/gym.png";
import school from "../assets/school.png";
import realstate from "../assets/realstate.png";
import gargclinic from "../assets/gargclinic.jpg";
import rythdum from "../assets/rythdum.jpg";
import globalhealth from "../assets/globalhealth.jpg";
function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Jab component mount ho, popup show ho
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const { isDarkMode } = useAuth();
  const [searchInput, setSearchInput] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    // Implement autocomplete suggestions logic here
  };

  const handleLocationChange = (event) => {
    setLocationFilter(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };


  const navigate = useNavigate();
  // const featuredCategories = [
  //   { name: "Restaurant", icon: "🍔" },
  //   { name: "Hospitals", icon: "☕" },
  //   { name: "Gym", icon: "💪" },
  //   { name: "School", icon: "💪" },
  //   { name: "AutoMotive", icon: "🍔" },
  //   { name: "Beauty & Spa", icon: "☕" },
  //   { name: "Hotels", icon: "💪" },
  //   { name: "Rent & Hostels", icon: "💪" },
  // ];

  //const testimonialData = [
  //  {
  //     quote: "Great directory! Found exactly what I needed. this is business directory website Its really help Us to grow our Business",
  //  author: "John Doe",
  //},
  //{
  // quote: "Increased my business visibility. Highly recommended! this is business directory website Its really help Us to grow our Business",
  // author: "Rakesh verma",
  //},
  //   // Add more testimonials as needed
  //];

  // Placeholder for actual business data and filtering logic
  const filteredListings = [1, 2, 3];

  const handleListingClick = (index) => {
    // Handle click on a business listing
  };

  const handleSearchButtonClick = () => {
    // Redirect to the business page with the search query as a parameter
    navigate(`/businesses?search=${searchInput}`);
  };
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-cover bg-center h-100 bg-gradient-to-r from-rose-900 via-red-700 to-black flex items-center justify-center text-neutral- dark:bg-neutral-800 backbanner">
        <div className="bg-cover bg-center h-96 flex items-center justify-center text-neutral- dark:bg-neutral-800">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 text-white dark:bg-neutral-800">
              Businesses Directory
            </h1>
            <p className="text-lg text-white font-bold dark:bg-neutral-800">
              Your one-stop destination for finding the best businesses in town.
            </p>
          
            <div className="mt-4 flex items-center dark:bg-neutral-800 dark:text-white">
              <input
                type="text"
                placeholder="Search for businesses..."
                value={searchInput}
                onChange={handleSearchInputChange}
                className="w-full p-4 rounded-md sm:text-sm focus:outline focus:ring focus:border-blue-300"
                aria-label="Search for businesses"
              />
           
              <button className="ml-4 bg-black text-white rounded-md px-6 py-4" onClick={handleSearchButtonClick}>
                Search
              </button>
            </div>
            <Popup show={showPopup} onClose={handleClosePopup} />
          </div>
        </div>
      </div>


<div class="p-1 flex flex-wrap items-center justify-center">
       

<div class="flex-shrink-0 m-6 relative overflow-hidden bg-red-800 rounded-lg max-w-xs shadow-lg group">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
        viewBox="0 0 375 283" fill="none" >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={restaurentlogo} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl ">Restaurents</span>
      
        </div>
    </div>
</div>
<div class="flex-shrink-0 m-6 relative overflow-hidden bg-teal-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"
>
        </div>
        <img class="relative w-40" src={hotel} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandhigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Hotel</span>
         
        </div>
    </div>
</div>
<div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
        >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={beauty} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandhigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Beauty & Spa</span>
          
        </div>
    </div>
</div>

<div class="flex-shrink-0 m-6 relative overflow-hidden bg-orange-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
        >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={hospital} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Hospital</span>
    
        </div>
    </div>
</div>

<div class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={wedding} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Wedding planner</span>
      
        </div>
    </div>
</div>
<div class="flex-shrink-0 m-6 relative overflow-hidden bg-red-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={gym} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandhigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Gym</span>
       
        </div>
    </div>
</div>

<div class="flex-shrink-0 m-6 relative overflow-hidden bg-green-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={school} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">School & University</span>
     
        </div>
    </div>
</div>
<div class="flex-shrink-0 m-6 relative overflow-hidden bg-pink-800 rounded-lg max-w-xs shadow-lg group ">
    <svg class="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10" viewBox="0 0 375 283" fill="none"
      >
        <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
        <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    </svg>
    <div class="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
        <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard">
        </div>
        <img class="relative w-40" src={realstate} alt=""/>
    </div>
    <div class="relative text-white px-6 pb-6 mt-6">
        <span class="block opacity-75 -mb-1 font-bold">Chandhigarh</span>
        <div class="flex justify-between">
            <span class="block font-bold text-xl">Real Estate</span>
   
        </div>
    </div>
</div>
</div>

      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-neutral-800 dark:text-white">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl dark:text-white">
              <span className="block xl:inline">Grow Your Business</span>
              <br />
              <span className="block text-red-600 xl:inline">with Dialkro</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
            Market competition is fierce and an online presence is most mandatory if you want to stay relevant. Scaling any business is not easy, whether it’s a physical location or a business online. To help all small scale businesses, we build dialkro (business listing space) a place where business owners can list their businesses to find the right customers or clients for their business. With the internet connecting people worldwide, online businesses have the potential to reach maximum audience. We are on a high aim to provide all small and medium enterprises a competitive free market.
            </p>
            {/* {/ <!-- Button Section --> /} */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/new"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/businesses"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </Link>
              </div>
            </div>
            {/* {/ <!-- End of Button Section --> /} */}
          </div>

          {/* {/ <!--   Image Section     --> /} */}
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4 x ">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full dark:backdrop-blur-md"
              src="https://akam.cdn.jdmagicbox.com/images/icontent/cms/career_topbannernw.png"
              alt=""
            />
          </div>
          {/* {/ <!--   End of Image Section     --> /} */}
        </div>
      </section>


      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h1 class="font-bold text-black text-2xl my-10">Popular Brands</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

        <div class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center firstad">
            <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
            </div>
            <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
            
            
            </div>
            <main class="p-5 z-10">
                <a href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Dr.
                   Global Health Care Clinic, Dr. Sanjeev Bhatia
                </a>
            </main>

        </div>

        <div class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center secondad"
           >
            <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
            </div>
            <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
               
            </div>
            <main class="p-5 z-10">
                <a href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Rg shine Cleaning Products .
                </a>
            </main>

        </div>

        <div class="relative h-64 w-full flex items-end justify-start text-left bg-cover bg-center thirdad"
           >
            <div class="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900">
            </div>
            <div class="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
              
            </div>
            <main class="p-5 z-10">
                <a href="#"
                    class="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">Rudraksh Group Real Estate
                </a>
            </main>

        </div>

    </div>
</div>

    
    
      <div className="grid lg:grid-cols-2 gap-3 p-5">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src={dialkrohome3}
              alt="Image Description"
            />
          </figure>
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src={dialkrohomepage2}
              alt="Image Description"
            />
          </figure>
        </div>
        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src={dialkrohomepageimg}
            alt="Image Description"
          />
        </figure>
      </div>

      <div className="grid lg:grid-cols-3 gap-3 p-5">
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20 flex-wrap">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Todays Ads</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href="https://rgshine.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Black friday sale</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href="https://rgshine.com/"
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
        <section className="px-5">
          <div className="bg-gradient-to-br from-red-400 via-red-400 to-black-400 p-6 sm:p-10 rounded-2xl w-full text-white flex items-center justify-between max-w-2xl mx-auto mt-20">
            <div className="flex flex-col gap-6">
              <div className="">
                <span className="text-gray-200">Todays Ads</span>
                <br />
                <span className="text-gray-200 text-4xl text-white font-semibold">
                  20% off every Product
                </span>
              </div>
              <a
                href="https://rgshine.com/ "
                target="_blank"
                rel="noreferrer"
                className="text-black bg-white hover:bg-gray-50 px-4 py-2 rounded-lg w-fit  ease duration-300 flex gap-1 items-center group"
              >
                <span>Buy now</span>
                <svg
                  data-v-e660a7a7=""
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="group-hover:translate-x-1 transition-transform ease duration-200"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z"
                  ></path>
                </svg>
              </a>
            </div>
            <div></div>
          </div>
        </section>
      </div>

    

  

      {/* kamla */}

    

        

     
  


          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32  mt-10">
          {/* <h1 className="text-center  text-5xl font-bold pb-10 text-white">Getting Started Is Easy</h1>
         */}

    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">

                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                class="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z">
                                </path>
                            </svg>
                        </span>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                            Choose Your Role And Apply
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        I'm excited about the Marketing Manager role at Dialkro. With a proven track record in digital marketing and strategy, I'm eager to leverage my skills to drive growth. Let's discuss how I can contribute to Dialkro's success.
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-red-700 hover:ring-pink-700"
                              to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                         src={howtojoin}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl  bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                class="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                         Fill the business form To add your business with use.
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            
Please fill out the business submission form to add your business to Dialkro's directory. Provide accurate details including business name, category, address, contact information, and a brief description of your services/products. We'll review your submission promptly and contact you if any further information is needed. Thank you for choosing Dialkro!
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                           to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img alt="Inbox user interface" loading="lazy" width="647" height="486"
                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                        src={filltheform}/>
                </div>
            </div>
        </div>
    </div>



    <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
            <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                    <div>
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl  bg-red-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                className="h-8 w-8 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z">
                                </path>
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-3xl font-bold tracking-tight text-white">
                           When you Complete all of this , Our team will contact you.
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                        Once you've completed the business submission form, our dedicated team will promptly review your information. Rest assured, if any additional details are required, we'll reach out to you promptly. Thank you for choosing Dialkro—we look forward to potentially featuring your business in our directory
                        </p>
                        <div className="mt-6">
                            <Link className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                                to="/new">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                    <img loading="lazy" width="646" height="485"
                        className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none  text-transparent"
                     
                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"/>
                </div>
            </div>
        </div>
    </div>
         </div>
  


         <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h1 className="text-5xl font-bold mb-10">Recent Activity</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <div class="rounded overflow-hidden shadow-lg">

            <a href="#"></a>
            <div class="relative">
                <a href="https://gargclinics.com/" target="_blank">
                    <img class="w-full"
                        src={gargclinic}
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span class="font-bold">27</span>
                        <small>March</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Garg Clinic Hospitality</a>
                <p class="text-gray-500 text-sm">
                    Chandigarh city
                </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
                <span href="#" class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                  
                    <span class="ml-1">4 Month ago</span></span>
            </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src={rythdum}
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span class="font-bold">20</span>
                        <small>March</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Rydhumhotel in Chandigarh</a>
                <p class="text-gray-500 text-sm">
                    Best Hotel in Chandigarh
                </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
                <span href="#"
                    class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                
                    <span class="ml-1">1 Year Plans</span></span>
            </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">

            <a href="#"></a>
            <div class="relative">
                <a href="#">
                    <img class="w-full"
                        src={globalhealth}
                        alt="Sunset in the mountains"/>
                    <div
                        class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        class="text-sm absolute top-0 right-0 bg-red-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                        <span class="font-bold">15</span>
                        <small>April</small>
                    </div>
                </a>
            </div>
            <div class="px-6 py-4">

                <a href="#"
                    class="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out">Global health care clinic</a>
                <p class="text-gray-500 text-sm">
                  Best Clinic Multiple Treatment 
                </p>
            </div>
            <div class="px-6 py-4 flex flex-row items-center">
                <span href="#"
                    class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                   
                    <span class="ml-1">6 mins read</span></span>
            </div>
        </div>
    </div>
</div>
      

    </div>
  );
}

export default Home;
