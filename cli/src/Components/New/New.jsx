import React, { useState } from "react";
import cookie from "js-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ProAuth/AuthPro";
import { Link } from "react-router-dom";

function New() {
  const {
    error,
    addBusinesshandleChange,
    addBusinesshandleSubmit,
    loading,
    businessData,
    islogin,
  } = useAuth();
  // const navi = useNavigate()
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const [businessData, setBusinessData] = useState({
  //   name: "",
  //   description: "",
  //   category: "",
  //   contact: {
  //     phone: "",
  //     email: "",
  //     website: "",
  //   },
  //   location: {
  //     address: "",
  //     city: "",
  //     state: "",
  //     zipCode: "",
  //   },

  //   // reviews: [],
  //   // user: "",
  //   // Add more fields as needed
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setBusinessData({
  //     ...businessData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const uri = "/api/business";
  //     await axios
  //       .post(uri, businessData)
  //       .then((response) => {
  //         setLoading(`Loading ....`);
  //         alert(`${response.data.message}`);
  //         navi("/businesses")
  //       })
  //       .catch((err) => {
  //         alert(`error is ${err.response.message}`);
  //       });
  //     setLoading(null);
  //   } catch (error) {
  //     setError(`Error is ${error.message}`);
  //   }
  // };

  return (
    <>
      {/* {islogin ? (
        <>
          <div className="flex items-center  justify-center ">
            <form
              onSubmit={addBusinesshandleSubmit}
              className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl"
            >
           
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block  text-sm font-semibold text-gray-700 mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={businessData.name}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      defaultValue={businessData.category}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business category"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={businessData.description}
                    onChange={addBusinesshandleChange}
                    className="w-full border rounded p-2"
                    placeholder="Enter business description"
                  ></textarea>
                </div>
              </section>

          
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="contact.phone"
                      defaultValue={businessData.contact?.phone}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact phone"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="contact.email"
                      defaultValue={businessData.contact?.email}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="contact.website"
                      defaultValue={businessData.contact?.website}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>
              </section>

              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Location Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="location.address"
                      defaultValue={businessData.location?.address}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business address"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="location.city"
                      defaultValue={businessData.location.city}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="location.state"
                      defaultValue={businessData.location.state}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter state"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="location.zipCode"
                      defaultValue={businessData.location.zipCode}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
              </section>

              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add Business
                </button>
              </div>
            </form>
          </div>
        </>
      ) : (
        <h1>Login PLease.....</h1>
      )}

      {error && (
        <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
      )}
      {loading && (
        <h1 className="text-green-500 mb-8 text-3xl font-thin">{loading}</h1>
      )} */}






      <div className="h-screen md:flex mb-10">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-900 to-red-500 i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Dialkro Business</h1>
			<p className="text-white mt-1">The most popular small and high scale of Businesses</p>
			<Link to="/businesses" type="submit" className="block w-28 bg-white text-black-800 mt-4 py-2  rounded-2xl font-bold mb-2 text-center">Business</Link>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
  {islogin ? (
        <>
        	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <form
              onSubmit={addBusinesshandleSubmit}
              className="bg-white p-8 w-full  "
            >
              {/* Business Details Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Business Details</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block  text-sm font-semibold text-gray-700 mb-2"
                    >
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={businessData.name}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Category
                    </label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      defaultValue={businessData.category}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business category"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    defaultValue={businessData.description}
                    onChange={addBusinesshandleChange}
                    className="w-full border rounded p-2"
                    placeholder="Enter business description"
                  ></textarea>
                </div>
              </section>

              {/* Contact Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="contact.phone"
                      defaultValue={businessData.contact?.phone}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact phone"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Contact Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="contact.email"
                      defaultValue={businessData.contact?.email}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter contact email"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="website"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      id="website"
                      name="contact.website"
                      defaultValue={businessData.contact?.website}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter website URL"
                    />
                  </div>
                </div>
              </section>

              {/* Location Section */}
              <section className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  Location Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="location.address"
                      defaultValue={businessData.location?.address}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter business address"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="location.city"
                      defaultValue={businessData.location.city}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="location.state"
                      defaultValue={businessData.location.state}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter state"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="location.zipCode"
                      defaultValue={businessData.location.zipCode}
                      onChange={addBusinesshandleChange}
                      className="w-full border rounded p-2"
                      placeholder="Enter zip code"
                    />
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-black-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Add Business
                </button>
              </div>
            </form>
	</div>
  </>
      ) : (
        <h1>Login PLease.....</h1>
      )}

      {error && (
        <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
      )}
      {loading && (
        <h1 className="text-green-500 mb-8 text-3xl font-thin">{loading}</h1>
      )}
</div>


    </>
  );
}

export default New;
