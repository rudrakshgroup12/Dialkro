import React, { useState, useEffect } from "react";
import cookie from "js-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../ProAuth/AuthPro";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import vectorbusi from "../assets/vectorbusi.png";
import { Select } from "antd";
const { Option } = Select;
import "./new.css";
import Layout from "../Layout/Layout";

function New() {
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [photo, setPhoto] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photo3, setPhoto3] = useState("");
  const [photo4, setPhoto4] = useState("");
  const [photo5, setPhoto5] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  //get-all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const buisnessData = new FormData();
      buisnessData.append("name", name);
      buisnessData.append("description", description);
      buisnessData.append("website", website);
      buisnessData.append("phone", phone);
      buisnessData.append("email", email);
      buisnessData.append("photo", photo);
      buisnessData.append("photo2", photo2);
      buisnessData.append("photo3", photo3);
      buisnessData.append("photo4", photo4);
      buisnessData.append("photo5", photo5);
      buisnessData.append("address", address);
      buisnessData.append("city", city);
      buisnessData.append("state", state);
      buisnessData.append("zipCode", zipCode);
      buisnessData.append("category", category);
      const { data } = axios.post("/api/create-buisness", buisnessData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Buisneess created Successfully");
        navigate("/businesses");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Input form ");
    }
  };

  // const {
  //   error,
  //   addBusinesshandleChange,
  //   addBusinesshandleSubmit,
  //   loading,
  //   businessData,
  //   islogin,

  //   businessesCategory,
  //   selectBusinessCategory,
  //   selectBusinessCategoryHandleInputChange,
  //   fetchBusinessByCategory,
  // } = useAuth();

  return (
    <Layout>
      <div className="relative min-h-screen flex ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
          <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative backform-img">
            <div className="absolute bg-gradient-to-b from-red-600 to-red-700 opacity-75 inset-0 z-0"></div>
            <div className="absolute triangle  min-h-screen right-0 w-16"></div>
            <a
              href="https://codepen.io/uidesignhub"
              target="_blank"
              title="codepen aji"
              className="flex absolute top-5 text-center text-gray-100 focus:outline-none"
            >
              <p className="text-xl ml-3">
                Dial<strong>Kro</strong>
              </p>
            </a>
            <img src={vectorbusi} className="h-96 absolute right-5 mr-5" />
            <div className="w-full  max-w-md z-10">
              <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Dialkro Business
              </div>
              <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                The most popular small and high scale of Businesses
              </div>
              <p className="mt-4 text-xl text-white-500 ">
                Dialkro Ads Help You Achieve Your Goals elements of a world that
                doesn't care if you develop or die.
              </p>
            </div>

            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          {auth ? (
            <>
              <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                <div className="max-w-md w-full space-y-8">
                  <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                      Business Details
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Please Add your Business Here
                    </p>
                  </div>

                  <form
                    className="mt-8 space-y-6"
                    // onSubmit={addBusinesshandleSubmit}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                          Business Name
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          // id="name"
                          // name="name"
                          // defaultValue={businessData.name}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter business name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className=" content-center">
                        <Select
                          bordered={false}
                          placeholder="Select a Category"
                          size="large"
                          showSearch
                          className="form-select mb-3"
                          onChange={(value) => {
                            setCategory(value);
                          }}
                        >
                          {categories.map((c) => (
                            <Option key={c._id} value={c._id}>
                              {c.name}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                      >
                        Description
                      </label>
                      <textarea
                        // id="description"
                        // name="description"
                        // defaultValue={businessData.description}
                        // onChange={addBusinesshandleChange}
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="Enter business description"
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label
                          className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                          htmlFor="phone"
                        >
                          Contact Phone
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          // id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          // name="contact.phone"
                          // defaultValue={businessData.contact?.phone}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter contact phone"
                        />
                      </div>
                      <div className=" content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                          Contact Email
                        </label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="email"
                          // id="email"
                          // name="contact.email"
                          // defaultValue={businessData.contact?.email}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter contact email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label
                          className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                          htmlFor="phone"
                        >
                          Website If Any
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="url"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          // id="website"
                          // name="contact.website"
                          // defaultValue={businessData.contact?.website}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter website URL"
                        />
                      </div>

                      {/* photo---------------------------------------------------------------------------------------------------------- */}
                      <div className=" content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                          {photo ? photo.name : "Upload Photo"}
                          <input
                            type="file"
                            name="photo"
                            accept="images/*"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            hidden
                          />
                        </label>

                        <div>
                          {photo && (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(photo)}
                                alt="product_photo"
                                height={"200px"}
                                className="img img-responsive"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* photo2---------------------------------------------------------------------------------- */}
                      <div className="content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                          {photo2 ? photo2.name : "Upload Photo2"}
                          <input
                            type="file"
                            name="photo2"
                            accept="images/*"
                            // defaultValue={businessData.location.photo}
                            onChange={(e) => setPhoto2(e.target.files[0])}
                            // onChange={addBusinesshandleChange}
                            hidden
                          />
                        </label>
                        <div>
                          {" "}
                          {photo2 && (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(photo2)}
                                alt="product_photo2"
                                height={"200px"}
                                className="img img-responsive"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* photo3---------------------------------------------------------------------------------- */}
                      <div className="content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                          {photo3 ? photo3.name : "Upload Photo3"}
                          <input
                            type="file"
                            name="photo3"
                            accept="images/*"
                            onChange={(e) => setPhoto3(e.target.files[0])}
                            // onChange={addBusinesshandleChange}
                            hidden
                          />
                        </label>
                        <div>
                          {" "}
                          {photo3 && (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(photo3)}
                                alt="product_photo3"
                                height={"200px"}
                                className="img img-responsive"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* photo4---------------------------------------------------------------------------------- */}
                      <div className="content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                          {photo4 ? photo4.name : "Upload Photo4"}
                          <input
                            type="file"
                            name="photo4"
                            accept="images/*"
                            // defaultValue={businessData.location.photo}
                            onChange={(e) => setPhoto4(e.target.files[0])}
                            // onChange={addBusinesshandleChange}
                            hidden
                          />
                        </label>
                        <div>
                          {" "}
                          {photo4 && (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(photo4)}
                                alt="product_photo4"
                                height={"200px"}
                                className="img img-responsive"
                              />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* photo5---------------------------------------------------------------------------------- */}
                      <div className="content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                          {photo5 ? photo5.name : "Upload Photo5"}
                          <input
                            type="file"
                            name="photo5"
                            accept="images/*"
                            // defaultValue={businessData.location.photo}
                            onChange={(e) => setPhoto5(e.target.files[0])}
                            // onChange={addBusinesshandleChange}
                            hidden
                          />
                        </label>
                        <div>
                          {" "}
                          {photo5 && (
                            <div className="text-center">
                              <img
                                src={URL.createObjectURL(photo5)}
                                alt="product_photo5"
                                height={"200px"}
                                className="img img-responsive"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label
                          className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                          htmlFor="phone"
                        >
                          Address
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          // id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          // name="location.address"
                          // defaultValue={businessData.location?.address}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter business address"
                        />
                      </div>
                      <div className=" content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                          City
                        </label>
                        <input
                          className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          // id="city"
                          // name="location.city"
                          // defaultValue={businessData.location.city}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter city"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <label
                          className="ml-3 text-sm font-bold text-gray-700 tracking-wide"
                          htmlFor="phone"
                        >
                          State
                        </label>
                        <input
                          className=" w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                          type="text"
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          // id="state"
                          // name="location.state"
                          // defaultValue={businessData.location.state}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter state"
                        />
                      </div>
                      <div className=" content-center">
                        <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                          Zip Code
                        </label>
                        <input
                          className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                          type="text"
                          value={zipCode}
                          onChange={(e) => setZipCode(e.target.value)}
                          // id="zipCode"
                          // name="location.zipCode"
                          // defaultValue={businessData.location.zipCode}
                          // onChange={addBusinesshandleChange}
                          placeholder="Enter zip code"
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        // type="submit"
                        onClick={handleCreate}
                        className="w-full flex justify-center bg-gradient-to-r from-red-500 to-red-600  hover:bg-gradient-to-l hover:from-red-500 hover:to-red-600 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        Add Business
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <h1>Login PLease.....</h1>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default New;
