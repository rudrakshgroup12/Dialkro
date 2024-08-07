import React, { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Popup from "./Popup.jsx";
import { useNavigate } from "react-router-dom";
import { FcRating } from "react-icons/fc";
// import BusinessCategory from "../Business/Category/BusinessCategory.jsx";
import Bgr from "./bgr1.png";
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
import gargclicnic from "../assets/gargclicnic.jpg";
import rythdum from "../assets/rythdum.jpg";
import globalhealth from "../assets/globalhealth.jpg";
import portfoliomock1 from "../assets/portfoliomock1.jpeg";
import restuarent from "../assets/restuarent.png";
import carousel1 from "../assets/carousel1.png";
import nearestvender from "../assets/nearestvender.png";
import doctor from "../assets/doctor.png";
import finestagent from "../assets/finestagent.png";
import gallery6 from "../assets/gallery6.png";
import gallery15 from "../assets/gallery15.png";
import rudrakshgroup from "../assets/rudrakshgroup.png";
import rgshine3 from "../assets/rgshine3.png";
import skyline2 from "../assets/skyline2.png";
import digitalsol from "../assets/digitalsol.png";
import furniture from "../assets/furniture.png";
import facility from "../assets/facility.png";
import collage from "../assets/collage.png";
import cancer from "../assets/cancer.png";
import library from "../assets/library.png";
import IIT from "../assets/IIT.png";
import Mangoes from "../assets/Mangoes.png";
import SearchInput from "./SearchInput.jsx";
import Layout from "../Layout/Layout.jsx";

function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Jab component mount ho, popup show ho
    window.scrollTo(0, 0);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const navigate = useNavigate();

  return (
    <Layout>
      {/* <div className={isDarkMode ? "dark" : ""}> */}
      <div className="">
        <Popup show={showPopup} onClose={handleClosePopup} />

        <div className="flex items-center align-center justify-center flex-wrap  p-6 space-x-6 bg-white rounded-xl shadow-lg  ">
          <div className="flex  p-4 w-72 space-x-4 rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <SearchInput />
          </div>

          <div className="flex">
            <h1 className="text-center display-inline text-4xl font-bold mx-5">
              Grow Your <span className="text-red-700">Businesses</span> With
              Use
            </h1>
          </div>
        </div>

        <div className=" header-ads-section">
          <div
            id="carouselExample"
            className="carousel slide w-50  m-10 maincarousel border rounded-lg"
          >
            <div className="carousel-inner border rounded-lg">
              <div className="carousel-item active">
                <img
                  src={facility}
                  className="d-block w-100 border rounded-lg"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={furniture}
                  className="d-block w-100 border rounded-lg"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={digitalsol}
                  className="d-block w-100 border rounded-lg"
                />
              </div>

              <div className="carousel-item">
                <img
                  src={carousel1}
                  className="d-block w-100 border rounded-lg"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev "
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-black"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-black"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="cardidea">
            <div className="card card-header">
              <img src={nearestvender} className="card-img-top" alt="..." />
              <div className="card-body">
                <button className="">Explore Now</button>
              </div>
            </div>

            <div className="card card-header">
              <img src={doctor} className="card-img-top" alt="..." />
              <div className="card-body">
                <button className="">Explore Now</button>
              </div>
            </div>
            <div className="card card-header">
              <img src={finestagent} className="card-img-top" alt="..." />
              <div className="card-body">
                <button className="">Explore Now</button>
              </div>
            </div>
          </div>

          {/* <Popup show={showPopup} onClose={handleClosePopup} /> */}
        </div>

        <div className="p-1 flex flex-wrap items-center justify-around">
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-800 rounded-lg max-w-xs shadow-lg group">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/resfilter_orderfood.svg?w=64&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl text-center ">
                    Restaurent
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between ">
                  <span className="block font-bold text-xl ">Hotel</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Beauty </span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/iphone/new/icd-hl-pediatric-urology-counselling.png?w=96&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Hospital</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://images.jdmagicbox.com/standard/shopfront/c735afc2f5ad3be2ea1b2e963496c75a.png"
                  alt=""
                />
              </div>
              <div className="relative text-center text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Wedding </span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-red-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/iphone/new/icd-hl-aerobics.png?w=96&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Gym</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">PG/Hostels</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-pink-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Estate Agent</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-pink-300 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Packer/Mover</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-yellow-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=48&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Organizer</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-green-600 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/furniture.svg?w=32&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Furniture</span>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/businesses">
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-blue-800 rounded-lg max-w-xs shadow-lg group ">
              <svg
                className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform opacity-10"
                viewBox="0 0 375 283"
                fill="none"
              >
                <rect
                  x="159.52"
                  y="175"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 159.52 175)"
                  fill="white"
                />
                <rect
                  y="107.48"
                  width="152"
                  height="152"
                  rx="8"
                  transform="rotate(-45 0 107.48)"
                  fill="white"
                />
              </svg>
              <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 busicard"></div>
                <img
                  className="relative w-20"
                  src="https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/carrepairservices.svg?w=32&q=75"
                  alt=""
                />
              </div>
              <div className="relative text-white px-6 pb-6 mt-6">
                <div className="flex justify-between">
                  <span className="block font-bold text-xl">Car Service</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 dark:bg-neutral-800 dark:text-white">
          <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl dark:text-white">
                <span className="block xl:inline">Grow Your Business</span>
                <br />
                <span className="block text-red-600 xl:inline">
                  with Dialkro
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
                Market competition is fierce and an online presence is most
                mandatory if you want to stay relevant. Scaling any business is
                not easy, whether it’s a physical location or a business online.
                To help all small scale businesses, we build dialkro (business
                listing space) a place where business owners can list their
                businesses to find the right customers or clients for their
                business. With the internet connecting people worldwide, online
                businesses have the potential to reach maximum audience. We are
                on a high aim to provide all small and medium enterprises a
                competitive free market.
              </p>
              {/* {/ <!-- Button Section --> /} */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/new"
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

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h1 className="text-5xl font-bold mb-10">
            Popular and <span className="text-red-800">Featured Ads</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
            <div className="rounded overflow-hidden shadow-lg">
              <a href="#"></a>
              <div className="relative">
                <a href="" target="_blank">
                  <img
                    className="w-full"
                    src={gargclicnic}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    Free
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">
                <Link
                  to="/feature"
                  className="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out"
                >
                  DR. ASHISH GARG (Critical Care Medicine)
                </Link>
                <p className="text-gray-500 text-sm">Chandigarh city</p>
                <div className="flex">
                  <FcRating /> <FcRating /> <FcRating /> <FcRating />
                </div>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span
                  href="#"
                  className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
                >
                  <span className="ml-1">4 Month ago</span>
                </span>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <a href="#"></a>
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src={gallery6}
                    alt="Sunset in the mountains"
                  />
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    Featured
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">
                <Link
                  to="/featured1"
                  className="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out"
                >
                  Mr. Prem maurya
                </Link>
                <p className="text-gray-500 text-sm">
                  Exceptional & Facility management services
                </p>
                <div className="flex">
                  <FcRating /> <FcRating /> <FcRating /> <FcRating />{" "}
                  <FcRating />
                </div>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span
                  href="#"
                  className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                >
                  <span className="ml-1">1 Year Plans</span>
                </span>
              </div>
            </div>
            <div className="rounded overflow-hidden shadow-lg">
              <a href="#"></a>
              <div className="relative">
                <a href="#">
                  <img
                    className="w-full"
                    src={gallery15}
                    alt="Sunset in the mountains"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-red-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-red-600 transition duration-500 ease-in-out">
                    Free
                  </div>
                </a>
              </div>
              <div className="px-6 py-4">
                <Link
                  to="/featured2"
                  className="font-semibold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out"
                >
                  Ms. SANDY
                </Link>
                <p className="text-gray-500 text-sm">
                  Cleaning Products in Best offers
                </p>
                <div className="flex">
                  <FcRating /> <FcRating /> <FcRating /> <FcRating />{" "}
                  <FcRating />
                </div>
              </div>
              <div className="px-6 py-2 flex flex-row items-center">
                <span
                  href="#"
                  className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                >
                  <span className="ml-1">6 mins read</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-3 p-5">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src={rgshine3}
                alt="Image Description"
              />
            </figure>
            <figure className="relative w-full h-60">
              <img
                className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
                src={skyline2}
                alt="Image Description"
              />
            </figure>
          </div>
          <figure className="relative w-full h-72 sm:h-96 lg:h-full">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover rounded-xl"
              src={rudrakshgroup}
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
                    Ads in Digital Marketing
                  </span>
                </div>
                <Link
                  to="/postads"
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
                </Link>
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
                    30% off every Product
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

        <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
          <h1 className="font-bold text-black text-2xl my-10">
            Related Articles
          </h1>
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <div className="max-w-screen-xl mx-auto ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {/* <!-- CARD 1 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col ">
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src={collage}
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article1"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          Colleges in India with the Most Beautiful Campuses and
                          Best Architecture
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1">Best Collages</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <Link to="/article1" className="ml-1">
                            Explore Now
                          </Link>
                        </span>
                      </div>
                    </div>

                    {/* <!-- CARD 2 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col">
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src={cancer}
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article2"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          Leading the Fight: Top Cancer Hospitals in India
                          Pioneering Advanced Care{" "}
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1">Explore now</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <span className="ml-1">Best Hospitals</span>
                        </span>
                      </div>
                    </div>

                    {/* <!-- CARD 3 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col">
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src={library}
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article3"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          National Reading Day 2024: Top Bookstores in India to
                          Explore the World of Rabindranath Tagore
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1">Explore Now</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <span className="ml-1">Book Store</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="max-w-screen-xl mx-auto ">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {/* <!-- CARD 1 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col">
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src={IIT}
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article4"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          Engineer's Day: Celebrating the Innovations and
                          Creativity of the Universal Problem Solvers
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1">Explore Now</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <span className="ml-1">IIT Collages</span>
                        </span>
                      </div>
                    </div>

                    {/* <!-- CARD 2 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col">
                      <Link to="/article1"></Link>
                      <div className="relative">
                        <a href="#">
                          <img
                            className="w-full"
                            src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                            alt="Sunset in the mountains"
                          />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article5"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          Top 5 Restuarent In Chandigarh{" "}
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1"> Explore Now</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <span className="ml-1">Restuarent</span>
                        </span>
                      </div>
                    </div>

                    {/* <!-- CARD 3 --> */}
                    <div className="rounded overflow-hidden shadow-lg flex flex-col">
                      <a href="#"></a>
                      <div className="relative">
                        <a href="#">
                          <img className="w-full" src={Mangoes} />
                          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                        </a>
                      </div>
                      <div className="px-6 py-4 mb-auto">
                        <Link
                          to="/article6"
                          className="font-bold text-lg inline-block hover:text-red-600 transition duration-500 ease-in-out inline-block mb-2"
                        >
                          Mighty Mangoes: Must Visit Places with Special Mango
                          Menu in Mumbai
                        </Link>
                      </div>
                      <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <span className="ml-1">Explore Now</span>
                        </span>

                        <span
                          href="#"
                          className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center"
                        >
                          <svg
                            className="h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                            ></path>
                          </svg>
                          <span className="ml-1">Mangoes</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev car-nex"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next car-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-black"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32  mt-10">
          {/* <h1 className="text-center  text-5xl font-bold pb-10 text-white">Getting Started Is Easy</h1>
           */}

          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
                <div>
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                        ></path>
                      </svg>
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Choose Your Role And Apply
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      I'm excited about the Marketing Manager role at Dialkro.
                      With a proven track record in digital marketing and
                      strategy, I'm eager to leverage my skills to drive growth.
                      Let's discuss how I can contribute to Dialkro's success.
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-red-700 hover:ring-pink-700"
                        to="/new"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                    src={howtojoin}
                  />
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      Fill the business form To add your business with use.
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Please fill out the business submission form to add your
                      business to Dialkro's directory. Provide accurate details
                      including business name, category, address, contact
                      information, and a brief description of your
                      services/products. We'll review your submission promptly
                      and contact you if any further information is needed.
                      Thank you for choosing Dialkro!
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        to="/new"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    alt="Inbox user interface"
                    loading="lazy"
                    width="647"
                    height="486"
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none text-transparent"
                    src={filltheform}
                  />
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-8 w-8 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-white">
                      When you Complete all of this , Our team will contact you.
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                      Once you've completed the business submission form, our
                      dedicated team will promptly review your information. Rest
                      assured, if any additional details are required, we'll
                      reach out to you promptly. Thank you for choosing
                      Dialkro—we look forward to potentially featuring your
                      business in our directory
                    </p>
                    <div className="mt-6">
                      <Link
                        className="inline-flex rounded-lg  bg-red-800 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-pink-600 hover:bg-pink-700 hover:ring-pink-700"
                        to="/new"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    loading="lazy"
                    width="646"
                    height="485"
                    className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none  text-transparent"
                    src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto container py-12 px-4">
          <div className="w-full flex justify-center">
            <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-red-500 to-red-800 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
              <div>
                <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                  <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                    <div>
                      <h1
                        role="heading"
                        className="text-xl md:text-2xl lg:text-4xl xl:text-4xl lg:w-10/12 text-white font-black leading-6 lg:leading-10 md:text-left text-center mb-12"
                      >
                        Become a member and start building the next big thing
                      </h1>
                    </div>
                    <Link
                      to="/new"
                      aria-label="Join the community"
                      className="mt-5 lg:mt-8 py-3 lg:py-4 px-4 lg:px-8 bg-white font-bold text-red-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:bg-opacity-90  focus:ring-2 focus:ring-offset-2 focus:ring-white focus:outline-none"
                    >
                      Join the community
                    </Link>
                  </div>
                  <div className="md:w-1/3 w-2/3">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/CTA.png"
                      alt="cartoon avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
