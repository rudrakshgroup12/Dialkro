import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
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
function ViewBusiness() {
  // Updated the function name to start with an uppercase letter
  const [businesses, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { id } = useParams();
  //   console.log(`serial number is ${id}`)

  useEffect(() => {
    const fetchData = async () => {
      const URL = `/api/business/${id}`;

      try {
        const response = await axios.get(URL);

        // if (response.status === 401) {
        //   setError("Unauthorized access. Please login.");
        //   return;
        // }

        setUsers(response.data);
        // console.log(response.data);
      } catch (err) {
        setError(`Log in Please ${err.message}`);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {/* <div className="min-h-screen bg-gradient-to-r from-white to-amber-300 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden p-8 sm:p-12 md:p-16 lg:p-20">
          {error && <h1 className="text-red-500 mb-8 text-center">{error}</h1>}
          <h1 className="text-4xl font-bold mb-6 text-center text-neutral-800">
            Welcome to {businesses.data?.name}
          </h1>
          <p className="text-lg mb-6 text-center text-neutral-700">
            Discover more about us and what makes our business unique.
            <span>{businesses.data?.description}</span>
          </p>
          {businesses.data && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="flex flex-col items-center mb-4">
                <p className="text-lg mb-2 text-center text-neutral-700 font-semibold">
                  Email
                </p>
                <p className="text-lg text-center text-neutral-700">
                  {businesses.data.contact.email}
                </p>
              </div>
              <div className="flex flex-col items-center mb-4">
                <p className="text-lg mb-2 text-center text-neutral-700 font-semibold">
                  Contact
                </p>
                <p className="text-lg text-center text-neutral-700">
                  {businesses.data.contact.phone}
                </p>
              </div>
            </div>
          )}
        </div>
      </div> */}

      <div className="w-full p-6 mx-auto">
        <div className="shadow-md rounded bg-white overflow-hidden relative">
          <div className="grid grid-cols-2 h-64">
            <div className="h-64 overflow-hidden">
              <img
                class="object-cover h-64 w-full"
                src="https://images.freeimages.com/images/small-previews/20c/my-puppy-maggie-1362787.jpg"
              />
            </div>
            <div className="h-64 overflow-hidden">
              <img
                className="object-cover h-32 w-full"
                src="https://images.freeimages.com/images/small-previews/e71/frog-1371919.jpg"
              />
              <img
                className="object-cover h-32 w-full"
                src="https://img.freepik.com/free-photo/beautiful-endangered-american-jaguar-nature-habitat-panthera-onca-wild-brasil-brasilian-wildlife-pantanal-green-jungle-big-cats_475641-2191.jpg?w=1380&t=st=1659969671~exp=1659970271~hmac=09544e5c9ac070a09c464342394c6657fafdd87b4c9772f2d5679a70e20a68e0"
              />
            </div>
          </div>
          <div className="p-3">
            <div class="block md:flex justify-between">
              <section className="text-gray-600 body-font w-full">
                <div className="container px-5 py-5 mx-auto">
                  <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                    {businesses.data && (
                      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h1 className="text-black text-2xl title-font font-bold mb-2">
                          {businesses.data?.name}
                        </h1>
                        <p className="leading-relaxed text-base">
                          {businesses.data?.description}
                        </p>

                        <div className="flex mt-2">
                          <FaMapLocationDot className="text-red-600" />
                          <p>{businesses?.data?.location?.address}</p>
                        </div>

                        <div className="py-4">
                          <div className=" inline-block mr-2">
                            <div className="flex  pr-2 h-full items-center">
                              <FcApproval />
                              <p className="title-font font-medium">
                                {businesses.data.category}
                              </p>
                            </div>
                          </div>
                          <div className="inline-block mr-2">
                            <div className="flex  pr-2 h-full items-center">
                              <FcApproval />
                              <p className="title-font font-medium">
                                {businesses?.data?.location?.city}
                              </p>
                            </div>
                          </div>

                          <div className=" inline-block mr-2">
                            <div className="flex  pr-2 h-full items-center">
                              <FcApproval />
                              <p className="title-font font-medium">
                                {businesses?.data?.location?.state}
                              </p>
                            </div>
                          </div>

                          <div className=" inline-block mr-2">
                            <div className="flex  pr-2 h-full items-center">
                              <FcApproval />
                              <p className="title-font font-medium">
                                {businesses?.data?.location?.zipCode}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="md:flex font-bold text-gray-800">
                          <div className="w-full md:w-1/2 flex space-x-3">
                            <div className="w-1/2">
                              <h2 className="text-red-600">Phone Number</h2>
                              <p>{businesses?.data?.contact?.phone}</p>
                            </div>
                            <div className="w-1/2">
                              <h2 className="text-red-600">Email Id</h2>
                              <p>{businesses?.data?.contact?.email}</p>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 flex space-x-3">
                            <div className="w-1/2">
                              <h2 className="text-red-600">Timings</h2>
                              <p>description</p>
                            </div>
                            <div className="w-1/2">
                              <h2 className="text-red-600">Website</h2>
                              <p>{businesses?.data?.contact?.website}</p>
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
                              Business Categories detail to some Lorem ipsum
                              dolor sit amet.
                            </p>
                            <p className="leading-relaxed text-base">
                              Business Categories detail to some Lorem ipsum
                              dolor sit amet.
                            </p>
                          </div>
                          <div className="pt-10 mx-10">
                            <h1 className="text-black text-2xl title-font font-bold mb-2">
                              Business Details
                            </h1>
                            <h5 className="text-black  title-font font-bold mb-2">
                              {businesses?.data?.category}
                            </h5>
                            <p className="leading-relaxed text-base">
                              Business Categories detail to some Lorem ipsum
                              dolor sit amet.
                            </p>
                          </div>
                        </div>

                        {/* {/ button  /} */}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewBusiness;
