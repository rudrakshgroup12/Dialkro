import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import "./viewBusiness.css";
import AddReviewComponent from "./AddReviewComponent.jsx";
import {
  FaMapMarkerAlt,
  FaPhoneSquare,
  FaMailBulk,
  FaGlobe,
} from "react-icons/fa";
import {
  FcApproval,

} from "react-icons/fc";
function ViewBusiness() {
  // Updated the function name to start with an uppercase letter
  const navi = useNavigate();
  const params = useParams();
  const { islogin, userData } = useAuth();
  const [buisness, setBuisness] = useState();
  const [relatedBuisnesses, setRelatedBuisnesses] = useState([]);
 

  //initail buisness details
  useEffect(() => {
    if (params?.slug) getBuisness();
  }, [params?.slug]);

  const API_PATH = 'https://api.dialkro.in';

  //get product
  const getBuisness = async () => {
    try {
      const { data } = await axios.get(`${API_PATH}/api/get-buisness/${params.slug}`);
      setBuisness(data?.buisness);
      getSimilarBuisness(data?.buisness._id, data?.buisness.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //similar buisnesses
  const getSimilarBuisness = async (pid, cid) => {
    try {
      const { data } = await axios.get(`${API_PATH}/api/related-buisness/${pid}/${cid}`);
      setRelatedBuisnesses(data?.buisness);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <div className="w-full p-6 mx-auto">
        <div className="shadow-md rounded bg-white overflow-hidden relative">
          <div className="grid grid-cols-2 h-64">
            <div className="h-64 overflow-hidden">
              <img
                className="object-cover h-64 w-full"
                src={`/api/buisness-photo/${buisness?._id}`}
              />
            </div>
            <div className="h-64 overflow-hidden">
              <img
                className="object-cover h-32 w-full"
                // src="https://images.unsplash.com/photo-1484081064812-86e90e107fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src={`/api/buisness-photo2/${buisness?._id}`}
              />
              <img
                className="object-cover h-32 w-full"
                // src="https://images.unsplash.com/photo-1672151575952-5906a1f085fe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                src={`/api/buisness-photo3/${buisness?._id}`}
              />
            </div>
            {/* {JSON.stringify(buisness, null, 4)} */}
          </div>
          <div className="p-1">
            <div className="block md:flex justify-between">
              <section className="text-gray-600 body-font w-full text-left">
                <div className="container px-5 py-5 mx-auto">
                  <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    {/* {businesses.data && ( */}
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <h1 className="text-black text-2xl title-font font-bold mb-2">
                        {/* {businesses.data?.name}  */}
                        {buisness?.name}
                      </h1>
                      <p className="leading-relaxed text-neutral-800 text-base font-sans p-2 text-justify text-lg">
                        {/* {businesses.data?.description} */}
                        {buisness?.description}
                      </p>

                      <h3 className="leading-relaxed text-base inline-flex mt-3">
                        <FaMapMarkerAlt className="text-red-600 mt-1" />{" "}
                        {/* {businesses?.data?.location?.address} */}
                        {buisness?.address}
                      </h3>

                      <div className="py-4">
                        <div className=" inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                            <p className="title-font font-medium">
                              {/* {businesses.data.category} */}
                              {buisness?.category.name}
                            </p>
                          </div>
                        </div>
                        <div className="inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                            <p className="title-font font-medium">
                              {/* {businesses?.data?.location?.city} */}
                              {buisness?.city}
                            </p>
                          </div>
                        </div>

                        <div className=" inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FcApproval className="text-green-700" />
                            <p className="title-font font-medium">
                              {/* {businesses?.data?.location?.state} */}
                              {buisness?.state}
                            </p>
                          </div>
                        </div>

                        <div className=" inline-block mr-2">
                          <div className="flex  pr-2 h-full items-center">
                            <FcApproval />
                            <p className="title-font font-medium">
                              {/* {businesses?.data?.location?.zipCode} */}
                              {buisness?.zipCode}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:flex font-bold text-gray-800">
                        <div className="w-full md:w-1/2 flex space-x-3">
                          <div className="w-1/2">
                            <h2 className="text-red-600">Phone Number</h2>
                            <p className="flex">
                              <FaPhoneSquare className="text-green-500 mt-1 mr-2" />
                              {/* {businesses?.data?.contact?.phone} */}
                              {buisness?.phone}
                            </p>
                          </div>
                          <div className="w-1/2">
                            <h2 className="text-red-600">Email Id</h2>
                            <p className="flex">
                              <FaMailBulk className="text-green-500 mt-1 mr-2" />{" "}
                              {/* {businesses?.data?.contact?.email} */}
                              {buisness?.email}
                            </p>
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 flex space-x-3">
                          <div className="w-1/2">
                            <h2 className="text-red-600">Timings</h2>
                            <p>description</p>
                          </div>
                          <div className="w-1/2">
                            <h2 className="text-red-600">Website</h2>
                            <a href={buisness?.website} className="flex">
                              <FaGlobe className="text-green-500 mt-1 mr-2" />
                              {/* {businesses?.data?.contact?.website} */}
                              {buisness?.name}
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="flex ">
                        <div className="pt-10">
                          <h1 className="text-black text-2xl title-font font-bold mb-2">
                            Quick Information
                          </h1>
                          <h5 className="text-black  title-font font-bold mb-2">
                            Business Summery
                          </h5>
                          <p className="leading-relaxed text-base">
                            Business Categories detail to some Lorem ipsum dolor
                            sit amet.
                          </p>
                          <p className="leading-relaxed text-base">
                            Business Categories detail to some Lorem ipsum dolor
                            sit amet.
                          </p>
                        </div>
                        <div className="pt-10 mx-10">
                          <h1 className="text-black text-2xl title-font font-bold mb-2">
                            Business Details
                          </h1>
                          <h5 className="text-black  title-font font-bold mb-2">
                            {/* {businesses?.data?.category} */}
                            {buisness?.category.name}
                          </h5>
                          <p className="leading-relaxed text-base">
                            Business Categories detail to some Lorem ipsum dolor
                            sit amet.
                          </p>
                        </div>
                      </div>

                      {/* {/ button  /} */}
                    </div>
                    {/* )} */}
                  </div>
                </div>
              </section>
            </div>
            {/* {islogin ? (
            <form
              onSubmit={addReviewRatinghandleSubmit}
              className="flex flex-col space-y-2"
            >
              <h1 className="text-2xl font-bold">Reviews & Ratings</h1>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((index) => (
                  <FaRegStar
                    key={index}
                    className={`h-7 w-7 hover:cursor-pointer ${
                      ReviewRatingData.rating >= index
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    onClick={() => reviewRatingHandleChange(index)}
                  />
                ))}
              </div>
              <textarea
                className="rounded-md border border-gray-300 p-2 text-base focus:outline-none focus:border-sky-500 resize-none"
                rows={5}
                placeholder="Write your review..."
                value={ReviewRatingData.text}
                onChange={reviewHandlechange}
              />
              <button
                type="submit"
                className="rounded-md bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 cursor-pointer"
                disabled={
                  !ReviewRatingData.text || ReviewRatingData.rating === 0
                }
              >
                Submit Review
              </button>
            </form>
          ) : (
            <h1>Please login before you start giving review and rating </h1>
          )} */}
          </div>
        </div>
      </div>

      <div className="container mx-auto my-5">
        <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
          <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
            <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom viewbusiness-card"></div>
            <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h3 className="w-full font-bold text-2xl text-white leading-tight mb-2">
                Lorem mmfibhsddjs
              </h3>
              <h4 className="w-full text-xl text-gray-100 leading-tight">
                Bienvenido a
              </h4>
            </div>
            <svg
              className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
            <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
              <h4 className="hidden md:block text-xl text-gray-400">
                Bienvenido a
              </h4>
              <h3 className="hidden md:block font-bold text-2xl text-gray-700">
                Lorem, ipsum dolor.
              </h3>
              <p className="text-gray-600 text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione itaque perspiciatis quod sapiente quidem, vero
                consectetur quae iure error tempore reprehenderit unde veritatis
                fugit iusto nemo amet. Assumenda, quam facilis.
              </p>
              <a
                className="flex items-baseline mt-3 text-red-700 hover:text-red-900 focus:text-red-900"
                href=""
              >
                <span>Check Your Brands</span>
                <span className="text-xs ml-1">&#x279c;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBusiness;
