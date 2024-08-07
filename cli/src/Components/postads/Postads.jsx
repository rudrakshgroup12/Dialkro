import React, { useEffect } from "react";
import axios from "axios";
import Paymentbutton from "./Paymentbutton.jsx";
import postad1 from "../assets/postad1.png";
import postad2 from "../assets/postad2.png";
import postad3 from "../assets/postad3.png";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout.jsx";

function Postads() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:6931/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:6931/api/checkout", { amount });
    // console.log(data);

    const options = {
      key: key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
      currency: "INR",
      name: "Diakro",
      description: "Dialkro Website",
      image: "https://avatars.githubusercontent.com/u/147711117?v=4",
      order_id: order.id, //This is a sample Order ID. Create an Order using Orders API. (https://razorpay.com/docs/payment-gateway/orders/integration/#step-1-create-an-order). Refer the Checkout form table given below
      callback_url: "http://localhost:6931/api/paymentverification",
      // handler: function (response) {
      //   alert(response.razorpay_payment_id);
      // },
      prefill: {
        name: "Dialkro",
        email: "dialkro@gmail.com",
        contact: "7717589527",
      },
      notes: {
        address: "note value",
      },
      theme: {
        color: "#ef4444",
      },
    };
    const razor = new window.Razorpay(options);
    // document.getElementById("razorGateway").onclick = function (e) {
    razor.open();
    // e.preventDefault();
    // };
  };
  return (
    <Layout>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={postad2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={postad3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={postad1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="flex  items-center justify-center bg-[#000] mt-20">
          {/* <!-- Button 1 --> */}
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
            <div className="mx-auto mb-8 max-w-screen-md  lg:mb-12 text-center">
              <h2 className="mb-10 text-4xl font-bold tracking-tight text-white">
                Pay once, use forever
              </h2>
            </div>
            <div className="space-y-8  lg:grid md:grid-cols-3 lg:space-y-0 lg:gap-10">
              {/* <!-- Pricing Card --> */}
              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Basic</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">₹2,999</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <Link
                  // onClick={() => checkoutHandler(amount)}
                  to="/paymentform1"
                  className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1"
                >
                  Get started
                </Link>
                {/* <Paymentbutton amount={2999} checkoutHandler={checkoutHandler}/> */}
                {/* <!-- List --> */}
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Search Visibility</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Category Banner</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Verified Seal #</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Payment Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Customer Support</span>
                  </li>
                </ul>
              </div>
              {/* <!-- Pricing Card 2--> */}
              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#D8FA6D] p-6 text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Essential</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">₹4,999</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <Link
                  // onClick={() => checkoutHandler(amount)}
                  to="/paymentform2"
                  className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1"
                >
                  Get started
                </Link>

                {/* <Paymentbutton amount={4999} checkoutHandler={checkoutHandler}/> */}
                {/* <!-- List --> */}
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Search Visibility</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Category Banner</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Smart Lead System</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Payment Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Competitor Analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Online Catalogue</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Transaction Enabled Website</span>
                  </li>
                </ul>
              </div>
              {/* <!-- Pricing Card 3--> */}
              <div className="mx-auto flex max-w-lg space-y-8 items-start flex-col rounded-3xl  bg-[#DCA6F3] p-6 text-center text-gray-900 xl:p-8">
                <h3 className="text-lg font-normal ">Growth</h3>
                <div className="my-8 flex items-baseline justify-center ">
                  <span className="mr-2 text-5xl font-extrabold">₹5,999</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <p className="font-light text-gray-600 sm:text-sm">
                  Best option for personal use & for your next project.
                </p>
                <Link
                  // onClick={() => checkoutHandler(amount)}
                  to="/paymentform3"
                  className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1"
                >
                  Get started
                </Link>
                {/* <Paymentbutton amount={5999} checkoutHandler={checkoutHandler}/> */}

                {/* <!-- List --> */}
                <ul
                  role="list"
                  className="mb-8 space-y-4 text-left text-gray-600  text-sm"
                >
                  <li className="flex items-center space-x-3 ">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Premium Listing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Category Banner</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Verified Seal</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Trust Stamp</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Online Catalogue</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Transaction Enabled Website</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Payment Solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Smart Lead System</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Competitor Analysis</span>
                  </li>

                  <li className="flex items-center space-x-3">
                    {/* <!-- Icon --> */}
                    <svg
                      className="h-5 w-5 flex-shrink-0 bg-gray-900 rounded-full p-0.5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Premium Customer Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 py-16 sm:py-24 lg:py-32 my-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
              <h2 className="inline sm:block lg:inline xl:block">
                Want product news and updates?
              </h2>
              <p className="inline sm:block lg:inline xl:block">
                Sign up for our newsletter.
              </p>
            </div>
            <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
              <div className="flex gap-x-4">
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-red-800 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="flex rounded-md bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                We care about your data. Read our{" "}
                <a
                  href="https://www.swellai.com/privacy"
                  className="font-semibold text-white"
                >
                  privacy&nbsp;policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Postads;
