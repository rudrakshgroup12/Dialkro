import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Carousel from "../Cont/Carousel.jsx";
// import { useAuth } from "../../ProAuth/AuthPro.jsx";
import { useNavigate } from "react-router-dom";
// import BusinessCheck from "../Category/BusinessCheck.jsx";
import Category from "../Category/AllCategory.jsx";

import {
  FaStar,
  FaRegStar,
  FaPhoneSquare,
  FaMailBulk,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-gray-300" />);
    }
  }
  return <>{stars}</>;
};

function Cont() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [buisness, setBuisness] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const [categories, setCategories] = useState([]);

  // const params = useParams();

  // const { error } = useAuth();

  

  // const API_PATH = "https://api.dialkro.in";

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`api/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllBuisness();
    getTotal();
  }, []);

  //get all buisness
  const getAllBuisness = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`api/buisness-list/${page}`);
      setLoading(false);
      setBuisness(data.buisness);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   getAllBuisness();
  // }, []);

  //getTotal count
  const getTotal = async () => {
    try {
      const { data } = await axios.get(`api/buisness-count`);
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadmore();
  }, [page]);

  //load more
  const loadmore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`api/buisness-list/${page}`);
      setLoading(false);
      setBuisness([...buisness, ...data?.buisness]);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const images = [
    "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201508171815013328-5b7ac1c04ebf11edac3d0a58a9feac02.jpg",
    "https://cf.bstatic.com/xdata/images/hotel/max1024x768/64331939.jpg?k=fa33131e9f162cfdd638dcc560d7ca44f26ffb21142949efc7635675e610cd7f&o=&hp=1",
    "https://images.thedirect.com/media/article_full/disney-movies-titles.jpg",
  ];

  return (
    <>
      {/* {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )} */}
      <div className="container mx-auto mt-10">
        <Carousel images={images} />
      </div>

      <Category />
      {/* {/ <!-- com/ponent --> /} */}
      <div className="container flex justify-evenly mx-auto ">
        <section className="text-gray-600 body-font w-600">
          <div className="container px-3 py-4 mx-auto">
            <h1 className="mb-4 text-xl font-bold text-gray-700">
              This is Your Popular Business
            </h1>
            <div>
              {/* {buisness.slice(0, visibleBusinesses).map((business, index) => ( */}
              <div>
                {buisness?.map((p) => (
                  <div className=" flex items-center mx-auto border-b  mb-10 border-gray-200  sm:flex-row flex-col bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-white">
                    <div className=" flex-col">
                      <div className="h-48 lg:h-auto border-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        {" "}
                        <img
                          src={`/api/buisness-photo/${p._id}`}
                          alt={p.name}
                          className="d-block w-100"
                        />
                      </div>
                      <div className="h-48 border-4 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        {" "}
                        <img
                          src={`/api/buisness-photo2/${p._id}`}
                          alt={p.name}
                          className="d-block w-100"
                        />
                      </div>
                    </div>
                    <div className=" flex-col">
                      <div className="h-48 lg:h-auto border-4 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        {" "}
                        <img
                          src={`/api/buisness-photo3/${p._id}`}
                          alt={p.name}
                          className="d-block w-100"
                        />
                      </div>
                      <div className="h-48 lg:h-auto border-4 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                        {" "}
                        <img
                          src={`/api/buisness-photo4/${p._id}`}
                          alt={p.name}
                          className="d-block w-100"
                        />
                      </div>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <h1 className="text-black text-2xl title-font font-bold mb-2 uppercase">
                        {p.name}
                      </h1>

                      <h3 className="leading-relaxed text-base inline-flex mt-3">
                        <FaMapMarkerAlt className="text-red-600 mt-1" />{" "}
                        {p.address}
                      </h3>

                      <div className="flex items-center mt-4 text-gray-600">
                        {/* {business?.reviews.map((review) => (
                          <div className="flex items-center">
                            <span className="text-sm">{review.text}</span>
                            <div className="flex items-center ml-2">
                              <svg
                                rating={review.rating}
                                className="w-3 h-3 fill-current text-yellow-600"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            </div>
                          </div>
                        ))} */}
                      </div>

                      <div className="py-4 ">
                        <div className=" inline-block mr-2">
                          <div className="flex  h-full items-center">
                            <FaPhoneSquare className="text-green-600 w-5 h-5" />
                            <p className="title-font font-medium px-3">
                              {p.phone}
                            </p>
                          </div>
                        </div>
                        <div className="inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FaMailBulk className="text-green-600" />
                            <p className="title-font font-medium px-3">
                              {p.email}
                            </p>
                          </div>
                        </div>
                        <div className=" inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FaGlobe className="text-green-600" />
                            <a
                              href={p.website}
                              className="title-font font-medium px-3"
                            >
                              {p.name}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex font-bold text-gray-800">
                        <div className="w-full md:w-1/2 flex space-x-3">
                          <div className="w-1/2">
                            <h2 className="text-gray-500">City</h2>
                            <p> {p.city}</p>
                          </div>
                          <div className="w-1/2">
                            <h2 className="text-gray-500">ZipCode</h2>
                            <p>{p.zipCode}</p>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 flex space-x-3">
                          <div className="w-1/2">
                            <h2 className="text-gray-500">State</h2>
                            <p>{p.state}</p>
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-black-500 font-bold inline-flex items-center uppercase">
                        {p.description.length > 10 ? (
                          <span>
                            <Link
                              // to={/business/${business._id}}
                              to={`/buisness/${p.slug}`}
                              // onClick={() => navigate(/buisness/${p.slug})}
                              className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                              Readmore
                            </Link>
                          </span>
                        ) : (
                          p.description
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* ))} */}
            </div>
          </div>
        </section>

        <div className="hidden w-4/12 -mx-8 lg:block">
          <div className="px-8">
            <h1 className="mb-4 text-xl font-bold text-gray-700">
              Business Name
            </h1>
            {buisness.map((p) => (
              <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                <ul className="-mx-4">
                  <li className="flex items-center">
                    <img
                      src={`/api/buisness-photo/${p._id}`}
                      alt={p.name}
                      className="object-cover w-10 h-10 mx-4 rounded-full"
                    />
                    <p>
                      <a
                        href="#"
                        className="mx-1 font-bold text-gray-700 hover:underline"
                      >
                        {p.name}
                      </a>
                      <span className="text-sm font-light text-gray-700">
                        Created 23 Posts
                      </span>
                    </p>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="px-8 mt-10">
            <h1 className="mb-4 text-xl font-bold text-gray-700">Location</h1>
            <div className="flex flex-col max-w-sm px-4 py-6 mx-auto bg-white rounded-lg shadow-md">
              {/* <BusinessCheck /> */}
            </div>
          </div>
          <div className="px-8 mt-10">
            <h1 className="mb-4 text-xl font-bold text-gray-700">
              Recent Postx
            </h1>
            <div className="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center">
                <a
                  href="#"
                  className="px-2 py-1 text-sm text-green-100 bg-gray-600 rounded hover:bg-gray-500"
                >
                  Laravel
                </a>
              </div>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-lg font-medium text-gray-700 hover:underline"
                >
                  Build Your New Idea with Laravel Freamwork.
                </a>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                    alt="avatar"
                    className="object-cover w-8 h-8 rounded-full"
                  />
                  <a
                    href="#"
                    className="mx-3 text-sm text-gray-700 hover:underline"
                  >
                    Alex John
                  </a>
                </div>
                <span className="text-sm font-light text-gray-600">
                  Jun 1, 2020
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>{total}</div> */}
      <div className="m-2 p-3 ">
        {buisness && buisness.length < total && (
          <buton
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700"
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            {loading ? "Loading..." : "Loadmore"}
          </buton>
        )}
      </div>
      {/* {buisness.length > 4 && (
      <button
        onClick={handleToggle}
        className="bg-red-700 text-white px-4 py-2 rounded-md  m-10 mb-20"
      >
        {showAll ? "View less" : "View More"}
      </button>
    )} */}
    </>
  );
}

export default Cont;
