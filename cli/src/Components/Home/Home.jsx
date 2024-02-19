import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Bgr from "./bgr1.png"
import { useAuth } from "../ProAuth/AuthPro.jsx";

function Home() {
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

  // const featuredCategories = [
  //   { name: "Restaurant", icon: "🍔" },
  //   { name: "Cafe", icon: "☕" },
  //   { name: "Gym", icon: "💪" },
  //   // Add more categories as needed
  // ];

  // const testimonialData = [
  //   {
  //     quote: "Great directory! Found exactly what I needed.",
  //     author: "John Doe",
  //   },
  //   {
  //     quote: "Increased my business visibility. Highly recommended!",
  //     author: "Jane Smith",
  //   },
  //   // Add more testimonials as needed
  // ];

  // Placeholder for actual business data and filtering logic
  const filteredListings = [1, 2, 3];

  const handleListingClick = (index) => {
    // Handle click on a business listing
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className="bg-cover bg-center h-100 bg-gradient-to-r from-rose-900 via-red-700 to-black flex items-center justify-center text-neutral- dark:bg-neutral-800"
        // style={{
        //   backgroundImage: {},

        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
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
              <button className="ml-4 bg-red-500 text-white rounded-md px-6 py-4">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {/ {/ Featured Categories /} /} */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 m-10 dark:bg-neutral-800 dark:text-white">
        {/* {featuredCategories.map((category, index) => (
          <div className="max-w-1xl mx-1 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-6 bg-white shadow-xl rounded-lg text-gray-900">
            <div className="rounded-t-lg h-32 overflow-hidden">
              <img
                className="object-cover object-top w-full"
                src="https://m.media-amazon.com/images/I/51Zi++kBCiL._AC_UF1000,1000_QL80_.jpg"
                alt="Mountain"
              />
            </div>
            <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-32"
                src="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
                alt="Woman looking front"
              />
            </div>
            <div className="text-center mt-1" key={index}>
              <span className="text-3xl mb-2">{category.icon}</span>
              <h2 className="font-bold">{category.name}</h2>
              <p className="text-red-500 font-bold">Your Business</p>
            </div>

            <div className="p-4 border-t mx-6 mt-1">
              <button className="w-1/2 block mx-auto rounded-full bg-red-600 hover:shadow-lg font-semibold text-white px-5 py-2">
                Explore Now
              </button>
            </div>
          </div>
        ))} */}
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
              Advertise with Dialkro - India's No. 1 Local Search Engine Welcome
              to DialKro, your 'one stop shop' where you are assisted with
              day-to-day and exclusive planning and purchasing activities. We
              take pride in our iconic customer support number, 8888888888 and
              the fact that we own a strong hold on local business information
              pan India.
            </p>
            {/* {/ <!-- Button Section --> /} */}
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
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

      <div className="grid lg:grid-cols-2 gap-3 p-5">
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </figure>
          <figure className="relative w-full h-60">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src="https://images.unsplash.com/photo-1671726203638-83742a2721a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="Image Description"
            />
          </figure>
        </div>
        <figure className="relative w-full h-72 sm:h-96 lg:h-full">
          <img
            className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1671726203394-491c8b574a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
            alt="Image Description"
          />
        </figure>
      </div>

      <div className="flex item-center justify-between p-4 mb-5">
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
                href=""
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
                href=""
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
                href=""
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

      <div className="pb-16">
        <dh-component>
          <div className="container mx-auto pt-16">
            <div className="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-16">
              <p
                tabIndex="0"
                className="focus:outline-none text-base md:text-lg lg:text-xl text-center text-gray-600 font-normal xl:w-10/12 xl:mx-auto"
              >
                Our success has come from being committed to the property and
                investing in the development of the product to maximize sales.
                At the same time and maintaining the integrity.
              </p>
            </div>
            <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/adidas-dark.png"
                  alt="Adidas"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="file:///C:/Users/adity/AppData/Local/Temp/722b468a01e8e3a3d2ab359eebb562337adee29bda20c78ce7848fda9cc04da9.png"
                  alt="Chanel"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/nike-dark.png"
                  alt="Nike"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/toyota-dark.png"
                  alt="Toyota"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/gs1-dark.png"
                  alt="GS1"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/berry-dark.png"
                  alt="BlackBerry"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/min-dark.png"
                  alt="Mini"
                  role="img"
                />
              </div>
              <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
                <img
                  tabIndex="0"
                  className="focus:outline-none"
                  src="https://cdn.tuk.dev/assets/honda-dark.png"
                  alt="Honda"
                  role="img"
                />
              </div>
            </div>
          </div>
        </dh-component>
        <div className="flex  items-center justify-center p-10">
          <div className="w-max">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-black font-bold">
              Our success has come from being committed to the property
            </h1>
          </div>
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300 mt-8" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              It's not just us.
            </h2>
            <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Here's what others have to say about us.
            </h3>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {/* {testimonialData.map((testimonial, index) => (
              <div
                key={index}
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none"
              >
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    alt="user avatar"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                      {testimonial.author}
                    </h6>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Our Client
                    </p>
                  </div>
                </div>
                <p className="mt-8">{testimonial.quote}</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>

      {/* kamla */}

      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        2
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {/* {filteredListings.map((index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg"
              onClick={() => handleListingClick(index)}
            >
              <a href="#"></a>
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                    alt={`Business ${index}`}
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Photos
                  </div>
                </a>

                <a href="!#">
                  <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    <span className="font-bold">27</span>
                    <small>March</small>
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">
                <a
                  href="#"
                  className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                >
                  Best View in Newyork City
                </a>
                <p className="text-gray-500 text-sm">The city that never sleeps</p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span
                  href="#"
                  className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <svg
                    height="13px"
                    width="13px"
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span className="ml-1">6 mins ago</span>
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      {/* damla */}

      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-xl p-1 bg-gradient-to-br from-red-600 via-red-600 to-red-600 h-32">
          <div className="rounded-lg bg-black/80 backdrop-blur">
            <div className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap">
              <div className="lg:max-w-xl">
                <h2 className="block w-full pb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                  Lorem ipsum dolor sit amet. ftrcghu vvtrh
                </h2>
                <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                  Natural Language Processing (NLP): The SmartAI Assistant
                  understands and interprets natural language commands, allowing
                  users to communicate with it effortlessly.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 ">
                <button className="bg-red-600 text-white button-text flex items-center justify-center whitespace-nowrap rounded-md transition-all duration-300 px-8 py-3 text-xs sm:text-sm">
                  Get Started
                </button>
                <button className="flex items-center justify-center whitespace-nowrap rounded-md border border-zinc-700 bg-zinc-900 text-center text-white backdrop-blur transition-all hover:bg-zinc-800 px-8 py-3 text-xs sm:text-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* hello */}
    </div>
  );
}

export default Home;
