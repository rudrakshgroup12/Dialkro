import React, { useState, useEffect } from "react";
import axios from "axios";
import Paymentbutton from "./Paymentbutton.jsx";
import emailjs from "@emailjs/browser";
import Layout from "../Layout/Layout.jsx";

function Paymentform2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [baseAmount, setBaseAmount] = useState(4999);
  const gstRate = 0.18;
  const discountRate = 0.1;

  const calculateFinalAmount = (amount) => {
    const gstAmount = amount * gstRate;
    const amountWithGst = amount + gstAmount;
    const discountAmount = amountWithGst * discountRate;
    const finalAmount = amountWithGst - discountAmount;
    return finalAmount.toFixed(2); // To keep two decimal places
  };

  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [buisness, setBuisness] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zipcode, setZipCode] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    //Your Email Service ID, Template ID, Public key
    const serviceId = "service_s18mf48";
    const templateId = "template_cij48rq";
    const publicKey = "G1tip4tmLmtkwaFt5";

    //Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Dialkro",
      from_phone: phone,
      buisness: buisness,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
    };

    //Send the email using Emailjs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent Succeessfully", response);
        setName("");
        setEmail("");
        setPhone("");
        setBuisness("");
        setAddress("");
        setCity("");
        setState("");
        setZipCode("");
      })
      .catch((error) => {
        console.error("Error sending Email:", error);
      });
  };

  //   Payment Section
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:6931/api/getkey");

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
      <div className="bg-gray-200 min-h-screen p-4">
        <div className="container mx-auto bg-gray-100 p-6">
          {/* Information */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-10 py-4">
              <h4 className="font-bold">
                Social Media Marketing - 30 Days Plan
              </h4>
              <div className="flex items-center space-x-2">
                {/* <span className="line-through text-gray-500">₹9,999</span> */}
                <h1 className="text-red-500 text-2xl">₹{baseAmount}</h1>
              </div>
            </div>
            <div className="flex justify-between items-center px-10 py-2">
              <p>GST</p>
              <div className="flex items-center space-x-2">
                {/* <span className="line-through text-gray-500">₹33,552.00</span> */}
                <h5>₹{baseAmount * gstRate}</h5>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          {/* Form */}
          <div className="space-y-4">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Ram"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Phone
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type=""
                    placeholder="91xxxx2354"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="ram@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Business
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="rampapri"
                    value={buisness}
                    onChange={(e) => setBuisness(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    //   id="grid-password"
                    type="text"
                    placeholder=""
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                  <p className="text-gray-600 text-xs italic">
                    Make it as long and as crazy as you'd like
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    City
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Mohali"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    State
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Pbi"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-zip"
                  >
                    Zip
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder={90210}
                    value={zipcode}
                    onChange={(e) => setZipCode(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </form>
          </div>
          <hr className="my-4" />
          {/* Discount, Tax & Fees */}
          <div className="space-y-4">
            <div className="flex justify-between items-center px-10 py-2">
              <p>Amount with GST</p>
              <h4 className="text-green-500">
                ₹{(baseAmount + baseAmount * gstRate).toFixed(2)}
              </h4>
            </div>
            <div className="flex justify-between items-center px-10 py-2">
              <p>Plan Discount - 10%</p>
              <h4 className="text-green-500">
                {" "}
                ₹
                {((baseAmount + baseAmount * gstRate) * discountRate).toFixed(
                  2
                )}
              </h4>
            </div>
            {/* <div className="flex justify-between items-center px-10 py-2">
            <p>
              Taxes & Fees
              <i className="fa-regular fa-circle-question text-purple-600 pl-2"></i>
            </p>
            <h4>₹899.82</h4>
          </div> */}
          </div>
          <hr className="my-4" />
          {/* Total */}
          <div className="flex justify-between items-center px-10 py-2">
            <h3>Total</h3>
            <div className="flex items-center space-x-2">
              {/* <span className="text-xl">₹39,591.36</span> */}
              {/* <h4 className="text-2xl">₹5,308.938</h4> */}
              <h4 className="text-2xl">₹{calculateFinalAmount(baseAmount)}</h4>
            </div>
          </div>
          {/* <div className="text-right px-10 py-2">
        <a href="#" className="text-blue-600 underline">
          Have a coupon code?
        </a>
      </div> */}
          <hr className="my-4" />
          {/* Payment */}
          <div className="flex flex-col md:flex-row justify-between items-center px-10 py-4 space-y-4 md:space-y-0 md:space-x-4">
            {/* <button className="bg-blue-600 text-white py-3 px-10 rounded hover:bg-blue-700">
            Submit Secure Payment
          </button> */}
            <Paymentbutton
              amount={calculateFinalAmount(baseAmount)}
              checkoutHandler={checkoutHandler}
            />
            <div className="text-center md:text-left space-y-2">
              <div>
                <i className="fa-regular fa-clock text-green-500 mr-2"></i>
                30-Day Money-Back Guarantee
              </div>
              <div>
                <i className="fa-solid fa-unlock-keyhole text-green-500 mr-2"></i>
                Encrypted and Secure Payments
              </div>
            </div>
          </div>
          {/* Note */}
          <div className="px-10 py-4 text-gray-600">
            <p>
              By checking out you agree with our{" "}
              <a href="#" className="text-blue-600 underline">
                Terms of Service
              </a>{" "}
              and confirm that you have read our{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
              . You can cancel recurring payments at any time.
            </p>
          </div>
        </div>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
      </div>
    </Layout>
  );
}

export default Paymentform2;
