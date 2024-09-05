import React, { useEffect } from "react";
import featurefirst from "../assets/featurefirst.png";
import featuresecond from "../assets/featuresecond.png";
import featurethird from "../assets/featurethird.png";
import featureforth from "../assets/featureforth.png";
import featurefive from "../assets/featurefive.png";
import featuresix from "../assets/featuresix.png";
import featureseven from "../assets/featureseven.png";
import featureeight from "../assets/featureeight.png";
import featurenine from "../assets/featurenine.png";
import featureten from "../assets/featureten.png";
import portfolio1 from "../assets/portfolio1.jpeg";
import portfolio2 from "../assets/portfolio2.jpeg";
import portfolio3 from "../assets/portfolio3.jpeg";
import { FcApproval, FcDisapprove } from "react-icons/fc";
import Layout from "../Layout/Layout";
const Advertise = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <section id="portfolio" className="portfolio-section py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Dialkro Ads Help You Achieve Your Goals
              </h2>
              <p className="text-lg text-red-700 font-semibold">
                Discover our latest Business and success stories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-1">
                  <img
                    className="w-full h-60 object-cover"
                    src={portfolio1}
                    alt="Project 1"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Market Your Business to New Users
                    </h3>
                    <span className="text-sm font-bold text-red-700 group-hover:text-indigo-500">
                      Good Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-2">
                  <img
                    className="w-full h-60 object-cover"
                    src={portfolio2}
                    alt="Project 1"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Grow Your Revenue
                    </h3>
                    <span className="text-sm font-bold text-red-700 group-hover:text-indigo-500">
                      Good Branding
                    </span>
                  </div>
                </a>
              </div>
              <div className="group portfolio-item relative hover:shadow-lg shadow-md rounded-lg overflow-hidden">
                <a href="/project-3">
                  <img
                    className="w-full h-60 object-cover"
                    src={portfolio3}
                    alt="Project 1"
                  />
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-70"></div>
                  <div className="p-4 flex flex-col items-center justify-between relative z-10">
                    <h3 className="text-lg font-medium text-txt group-hover:text-gray-dark">
                      Get More Walk-in Customers
                    </h3>
                    <span className="text-sm font-bold text-red-700 group-hover:text-indigo-500">
                      Good Branding
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white w-full px-4 pt-16 pb-16" id="faq">
          <h2 className="text-4xl font-bold text-center">Popular Brands</h2>
          <p className="pt-6 pb-8 text-base max-w-2xl text-center m-auto">
            Our Premium Sponsors
          </p>
          <div className="mx-auto w-full max-w-4xl bg-white justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/442910/brand-apple.svg"
              />
            </a>
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/443329/brand-pixar.svg"
              />
            </a>
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/443079/brand-geforce.svg"
              />
            </a>
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/443042/brand-ethereum.svg"
              />
            </a>
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/443206/brand-line.svg"
              />
            </a>
            <a target="_blank" href="">
              <img
                alt=""
                className="h-20  mx-auto"
                src="https://www.svgrepo.com/show/519278/slack.svg"
              />
            </a>
          </div>
        </div>

        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/4 mt-48 hidden lg:block">
              <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                <p className=" text-gray-900 h-12 font-bold text-center px-4 flex items-center justify-start -mt-px">
                  {" "}
                  Search Visibility
                </p>
                <p className=" text-gray-900 h-12 font-bold text-center px-4 flex items-center justify-start -mt-px">
                  {" "}
                  Category Banner
                </p>

                <p className="bg-gray-100 text-gray-900 h-12 font-bold  text-center px-4 flex items-center justify-start">
                  Verified Seal #
                </p>
                <p className="text-gray-900 h-12 text-center font-bold  px-4 flex items-center justify-start">
                  Trust Stamp #
                </p>
                <p className="bg-gray-100 text-gray-900 h-12 font-bold  text-center px-4 flex items-center justify-start">
                  Online Catalogue
                </p>
                <p className="text-gray-900 h-12 text-center px-4 font-bold   flex items-center justify-start">
                  Transactional Website
                </p>
                <p className="bg-gray-100 text-gray-900 h-12 font-bold  text-center px-4 flex items-center justify-start">
                  Payment Solutions
                </p>
                <p className="text-gray-900 h-12 text-center px-4 font-bold  flex items-center justify-start">
                  Smart Lead System
                </p>
                <p className="bg-gray-100 text-gray-900 h-12 font-bold  text-center px-4 flex items-center justify-start">
                  Competitor Analysis
                </p>
                <p className="bg-gray-100 text-gray-900 h-12 font-bold  text-center px-4 flex items-center justify-start">
                  Premium Customer Support
                </p>
              </div>
            </div>
            <div className="flex lg:w-3/4 w-full  lg:border border-gray-300 rounded-lg">
              <div className="lg:w-1/3 lg:mt-px w-full mb-10 lg:mb-0 border-2 border-gray-300 lg:border-none rounded-lg lg:rounded-none">
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-green-500">
                    STANDARD
                  </h3>
                  <span className="text-sm text-orange-600 font-bold">
                    25% Off
                  </span>
                  <h2 className="text-5xl text-gray-900 font-medium leading-none mb-4">
                    99
                    <span className="text-gray-600 text-base ml-1">/Day</span>
                  </h2>
                </div>
                <p className="bg-gray-100 text-black-600 h-12 text-center px-2 flex items-center font-bold -mt-px justify-center border-t border-gray-300">
                  1x
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0">
                    <FcApproval />
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                    <FcApproval />
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                    <FcDisapprove />
                  </span>
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <span className="w-5 h-5 inline-flex items-center justify-center text-white rounded-full flex-shrink-0">
                    <FcApproval />
                  </span>
                </p>
                <p className="text-green-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
              </div>

              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg border-indigo-500 relative">
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-pink-600">
                    PREMIUM
                  </h3>
                  <span className="text-sm text-orange-600 font-bold">
                    25% Off
                  </span>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4">
                    149
                    <span className="text-gray-600 text-base ml-1">/Day</span>
                  </h2>
                </div>
                <p className="bg-gray-100 text-black-600 h-12 text-center px-2 flex items-center -mt-px font-bold justify-center border-t border-gray-300">
                  2X
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcDisapprove />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
              </div>

              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg  relative">
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-purple-600">
                    PRO
                  </h3>
                  <span className="text-sm text-orange-600 font-bold">
                    25% Off
                  </span>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4">
                    199
                    <span className="text-gray-600 text-base ml-1">/Day</span>
                  </h2>
                </div>
                <p className="bg-gray-100 text-black-600 h-12 text-center px-2 font-bold flex items-center -mt-px justify-center border-t border-gray-300">
                  3X
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
              </div>
              <div className="lg:w-1/3 lg:-mt-px w-full mb-10 lg:mb-0 border-2 rounded-lg  relative">
                <div className="px-2 text-center h-48 flex flex-col items-center justify-center">
                  <h3 className="tracking-widest font-bold text-red-600">
                    GROWTH
                  </h3>
                  <span className="text-sm text-orange-600 font-bold">
                    Get Max Exposure List in
                  </span>
                  <h2 className="text-5xl text-gray-900 font-medium flex items-center justify-center leading-none mb-4">
                    TOP 5
                  </h2>
                </div>
                <p className="bg-gray-100 text-black-600 h-12 text-center px-2 flex items-center font-bold -mt-px justify-center border-t border-gray-300">
                  Guaranted Top Growth Business
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
                <p className="bg-gray-100 text-gray-600 text-center h-12 flex items-center justify-center">
                  <FcApproval />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
            <div>
              <h2 className="text-3xl font-bold text-center sm:text-5xl">
                Features
              </h2>
              <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
                Explore the latest features that enhance your learning
                experience and make it even more exciting.
              </p>
            </div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mt-4 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SearchVisibility_f.svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-rocket"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <img src={featurefirst} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Premium Listing
                      </h4>
                      <p className="mt-2 ">
                        Get higher visibility and exposure on Dialkro
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-bookmark-plus"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                          <line x1="12" x2="12" y1="7" y2="13"></line>
                          <line x1="15" x2="9" y1="10" y2="10"></line>
                        </svg>
                        <img src={featuresecond} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Category Banner
                      </h4>
                      <p className="mt-2 ">
                        Feature your business at the top of category searches
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-video"
                        >
                          <path d="m22 8-6 4 6 4V8Z"></path>
                          <rect
                            width="14"
                            height="12"
                            x="2"
                            y="6"
                            rx="2"
                            ry="2"
                          ></rect>
                        </svg>
                        <img src={featurethird} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Verified Seal
                      </h4>
                      <p className="mt-2 ">
                        Verify your business listing on Justdial and improve
                        your credibility
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-file-question"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <img src={featureforth} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Trust Stamp{" "}
                      </h4>
                      <p className="mt-2 ">
                        Become eligible for a Trust Stamp that indicates your
                        business is trustworthy
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-file-question"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <img src={featurefive} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Online Catalogue{" "}
                      </h4>
                      <p className="mt-2 ">
                        Showcase your product and service offerings to potential
                        customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-4 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-rocket"
                        >
                          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                        </svg>
                        <img src={featuresix} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Transaction Enabled Website
                      </h4>
                      <p className="mt-2 ">
                        Get a professional looking website with your own domain.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-bookmark-plus"
                        >
                          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                          <line x1="12" x2="12" y1="7" y2="13"></line>
                          <line x1="15" x2="9" y1="10" y2="10"></line>
                        </svg>
                        <img src={featureseven} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Payment Solutions
                      </h4>
                      <p className="mt-2 ">
                        Send and receive money from suppliers and customers
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-video"
                        >
                          <path d="m22 8-6 4 6 4V8Z"></path>
                          <rect
                            width="14"
                            height="12"
                            x="2"
                            y="6"
                            rx="2"
                            ry="2"
                          ></rect>
                        </svg>
                        <img src={featureeight} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Smart Lead Management System
                      </h4>
                      <p className="mt-2 ">
                        View and track all your leads at one place experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="https://akam.cdn.jdmagicbox.com/images/icontent/listingbusiness/SearchVisibility_f.svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-file-question"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <img src={featurenine} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Competitor Analysis{" "}
                      </h4>
                      <p className="mt-2 ">
                        Understand how your competitors are performing on
                        Dialkro
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="lucide lucide-file-question"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <img src={featureten} alt="" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leadi ">
                        Premium Customer Support{" "}
                      </h4>
                      <p className="mt-2 ">
                        Guided onboarding experience with priority assistance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row m-5 p-2 md:p-5">
          <div className="w-full p-2 md:p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-xl font-bold">Get Ahead of Your Competition</h4>

            <div className="flex flex-wrap gap-5 md:gap-10 m-3 mt-10">
              <div className="text-sm">
                <span className="bg-red-500 align-middle w-4 h-4 inline-block mr-1 -mt-1"></span>
                Very Satisfied
              </div>

              <div className="text-sm">
                <span className="bg-red-300 align-middle w-4 h-4 inline-block mr-1 -mt-1"></span>
                Satisfied
              </div>

              <div className="text-sm">
                <span className="bg-gray-300 align-middle w-4 h-4 inline-block mr-1 -mt-1"></span>
                Neutral
              </div>

              <div className="text-sm">
                <span className="bg-gray-400 align-middle w-4 h-4 inline-block mr-1 -mt-1"></span>
                Dissatisfied
              </div>

              <div className="text-sm">
                <span className="bg-gray-500 align-middle w-4 h-4 inline-block mr-1 -mt-1"></span>
                Very Dissatisfied
              </div>
            </div>

            <div className="space-y-10 mt-10">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 p-3">
                  Dialkro has earned the trust of Delhiites with a satisfaction
                  rate of 92%! Whether you're exploring the historic lanes of
                  Old Delhi or the modern avenues of New Delhi, we're here to
                  connect you with the best businesses in town.
                </div>
                <div className="flex w-full md:w-2/3 min-h-[60px]">
                  <span className="rounded-l p-3 text-center leading-10 mr-1 bg-red-500 w-[50%] text-white">
                    50%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-red-300 w-[30%] text-black">
                    30%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black">
                    10%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[6%] text-white">
                    6%
                  </span>
                  <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[4%] text-white">
                    4%
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 p-3">
                  India's Silicon Valley is buzzing with satisfaction, boasting
                  a rate of 93%! From Koramangala to Whitefield, Dialkro is
                  proud to support the vibrant startup ecosystem and local
                  businesses across Bangalore.
                </div>
                <div className="flex w-full md:w-2/3 min-h-[60px]">
                  <span className="rounded-l p-3 text-center leading-10 mr-1 bg-red-500 w-[60%] text-white">
                    60%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-red-300 w-[25%] text-black">
                    25%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black">
                    10%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[8%] text-white">
                    8%
                  </span>
                  <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[2%] text-white"></span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 p-3">
                  The City of Pearls shines even brighter with a satisfaction
                  rate of 95%! Whether you're in the historic lanes of Charminar
                  or the tech-savvy hubs of HITEC City, Dialkro is your trusted
                  companion for discovering the best businesses in Hyderabad.
                </div>
                <div className="flex w-full md:w-2/3 min-h-[60px]">
                  <span className="rounded-l p-3 text-center leading-10 mr-1 bg-red-500 w-[40%] text-white">
                    40%
                  </span>
                  <span className="text-center p-3 leading-10 mr-1 bg-red-300 w-[35%] text-black">
                    35%
                  </span>
                  <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[25%] text-white">
                    25%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container relative mx-auto py-12 px-2">
          <h3 className="mb-14 text-black text-center text-3xl font-semibold underline decoration-red-200/80 lg:text-left xl:text-4xl">
            Frequently Asked Questions
          </h3>

          <div className="my-6">
            <div className="rounded-t-2xl bg-red-600/80  w-full cursor-pointer select-none border-2 border-red-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-red-600/80 hover:text-white">
              <h4 className="text-lg font-medium">
                How do I create an account on the website?
              </h4>
            </div>
            <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-red-600/30 bg-red-100/50 px-4 py-4 text-red-800">
              <h5>
                To create an account, click on the "Sign Up" button located at
                the top right corner of the homepage.
                <br />
                Fill out the required information, including your name, email
                address, and password.
                <br />
                Click "Create Account" to complete the registration process.
              </h5>
            </div>
          </div>

          <div className="my-6">
            <div className="rounded-t-2xl bg-red-600/80 w-full cursor-pointer select-none border-2 border-red-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
              <h4 className="text-lg font-medium">
                What benefits will I get from a paid listing on Dialkro?
              </h4>
            </div>
            <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-red-600/30 bg-red-100/50 px-4 py-4 text-red-800">
              <h5>
                Dialkro is India's No. 1 local Business directory engine. A paid
                listing makes your business more visible to customers. It makes
                it easier for you to reach your goals and grow faster.
              </h5>
            </div>
          </div>

          <div className="my-6">
            <div className="rounded-t-2xl bg-red-600/80 w-full cursor-pointer select-none border-2 border-red-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-red-600/80 hover:text-white">
              <h4 className="text-lg font-medium">
                What are advantage of advertisement for our business online?
              </h4>
            </div>
            <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-red-600/30 bg-red-100/50 px-4 py-4 text-red-800">
              <h5>
                The benefits of online advertising are many, and has evolved
                into an essential tool for companies to communicate with the
                customers they seek. It increases your visibility and attracts
                potential customers, regardless of the size of your business or
                whether you run a startup or a multinational corporation.
                <br />
                In this article, we’ll talk about the benefits of online
                advertising and how it can help your business grow in the
                digital age.
              </h5>
            </div>
          </div>

          <div className="my-6">
            <div className="rounded-t-2xl bg-red-600/80 w-full cursor-pointer select-none border-2 border-red-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-red-600/80 hover:text-white">
              <h4 className="text-lg font-medium">
                {" "}
                What is the best way to get leads for a small business?
              </h4>
            </div>
            <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-red-600/30 bg-red-100/50 px-4 py-4 text-red-800">
              <h5>
                Cold emailing, social media marketing, and content marketing are
                some of the best ways to generate leads for a small business.
              </h5>
            </div>
          </div>

          <div className="my-6">
            <div className="rounded-t-2xl bg-red-600/80 w-full cursor-pointer select-none border-2 border-red-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-red-600/80 hover:text-white">
              <h4 className="text-lg font-medium">
                {" "}
                How can I generate leads for a local business?
              </h4>
            </div>
            <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-red-600/30 bg-red-100/50 px-4 py-4 text-red-800">
              <h5>
                You can use local SEO, engage with the community, leverage
                online directories, and consider partnerships with other local
                businesses for effective lead generation.
              </h5>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Advertise;
