import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Select } from "antd";
const { Option } = Select;
import toast from "react-hot-toast";
import {
  IoLocation,
  IoDuplicate,
  IoPhonePortraitOutline,
  IoMailSharp,
  IoGlobeSharp,
} from "react-icons/io5";
function EditUserBusiness() {
  const navigate = useNavigate();
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
  const [id, setId] = useState("");
  const [buisness, setBuisness] = useState();
  const params = useParams();

  //get single buisness
  const getSingleBuisness = async () => {
    try {
      const { data } = await axios.get(`/api/get-buisness/${params.slug}`);
      setName(data.buisness.name);
      setId(data.buisness._id);
      setDescription(data.buisness.description);
      setWebsite(data.buisness.website);
      setPhoto(data.buisness.photo);
      setPhoto2(data.buisness.photo2);
      setPhoto3(data.buisness.photo3);
      setPhoto4(data.buisness.photo4);
      setPhoto5(data.buisness.photo5);
      setPhone(data.buisness.phone);
      setEmail(data.buisness.email);
      setAddress(data.buisness.address);
      setCategory(data.buisness.category._id);
      setCity(data.buisness.city);
      setState(data.buisness.state);
      setZipCode(data.buisness.zipCode);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBuisness();
    //eslint-disable-next-line
  }, []);

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

  //create buisness function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const buisnessData = new FormData();
      buisnessData.append("name", name);
      buisnessData.append("description", description);
      buisnessData.append("website", website);
      buisnessData.append("phone", phone);
      buisnessData.append("email", email);
      photo && buisnessData.append("photo", photo);
      photo2 && buisnessData.append("photo2", photo2);
      photo3 && buisnessData.append("photo3", photo3);
      photo4 && buisnessData.append("photo4", photo4);
      photo5 && buisnessData.append("photo5", photo5);
      buisnessData.append("address", address);
      buisnessData.append("city", city);
      buisnessData.append("state", state);
      buisnessData.append("zipCode", zipCode);
      buisnessData.append("category", category._id);
      const { data } = axios.put(`/api/update-buisness/${id}`, buisnessData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Buisness update Successfully");
        navigate("/businesses");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Input form ");
    }
  };

  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to  delete this product ?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/delete-buisness/${id}`);
      toast.success("Buisness deleted Successfully");
      navigate("/businesses");
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  useEffect(() => {
    if (params?.slug) getBuisness();
  }, [params?.slug]);

  //get product
  const getBuisness = async () => {
    try {
      const { data } = await axios.get(`/api/get-buisness/${params.slug}`);
      setBuisness(data?.buisness);
      getSimilarBuisness(data?.buisness._id, data?.buisness.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  const Navi = useNavigate();
  // const [updateBusiness, setUpdateBusiness] = useState({
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
  // });

  // const [businessesByid, setBusinessesByid] = useState([]);

  // const { id } = useParams();
  //   console.log(serial number is ${id})

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (id) {
  //       const URL = /api/business/${id};
  //       try {
  //         const response = await axios.get(URL);
  //         setBusinessesByid(response.data);
  //         // console.log(response.data);
  //       } catch (err) {
  //         console.log(Log in Please ${err.message});
  //       }
  //     } else {
  //       Navi("/businesses");
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  // const updateBusinesshandleChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.includes(".")) {
  //     const [parentKey, childKey] = name.split(".");
  //     setUpdateBusiness((prevState) => ({
  //       ...prevState,
  //       [parentKey]: {
  //         ...prevState[parentKey],
  //         [childKey]: value,
  //       },
  //     }));
  //   } else {
  //     setUpdateBusiness((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   }
  // };
  // const uppdateBusinesshandleSubmit = async (e) => {
  //   try {
  //     if (id) {
  //       e.preventDefault();
  //       const uri = /api/business/${id};
  //       await axios.put(uri, updateBusiness);
  //       alert(Business Updated SuccessFully);
  //       Navi("/mybusiness");
  //     } else {
  //       Navi("/login");
  //     }
  //   } catch (error) {
  //     console.log(Error is from update  ${error.message});
  //   }
  // };
  return (
    <>
    <div className="max-w-screen-lg mx-auto p-5">
      {/* {businessesByid.data && ( */}
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm leading-7 font-regular uppercase font-bold">
            Contact Information
            <p className="mt-4 text-sm leading-7 font-regular text-justify uppercase">
              {/* {businessesByid?.data?.contact?.phone} */}
              {buisness?.phone}
              <br />
              {/* {businessesByid?.data?.contact?.email} */}
              {buisness?.email}
              <br />
              {/* {businessesByid?.data?.contact?.website} */}
              {buisness?.website}
            </p>
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In{" "}
            {/* <span className="text-red-600">{businessesByid.data?.name}</span> */}
            <span className="text-red-600"> {buisness?.name}</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200 ">
            {/* {businessesByid.data?.description} */}
            {buisness?.description}
          </p>

          <div className="flex items-center mt-5">
            <span className="text-sm">
              {/* {businessesByid?.data?.location?.address} */}
              {buisness?.address}
            </span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm">
              {" "}
              {/* {businessesByid?.data?.location?.state} */}
              {buisness?.state}
            </span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm">
              {" "}
              {/* {businessesByid?.data?.location?.city} */}
              {buisness?.city}
            </span>
          </div>
          <div className="flex items-center mt-5">
            <span className="text-sm"> {buisness?.zipCode}</span>
          </div>
        </div>
        <form
          // onSubmit={uppdateBusinesshandleSubmit}
          className="md:col-span-8 p-10 "
        >
          {/* {/ Business Details Section /} */}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                <Select
                  bordered={false}
                  placeholder="Select a Category"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category.name}
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
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded p-2"
                placeholder="Enter business description"
              ></textarea>
            </div>
          </section>

          {/* {/ Contact Section /} */}
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
                  // type="text"
                  // type="text"
                  // id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full border rounded p-2"
                  placeholder="Enter website URL"
                />
              </div>
              <div className="mb-4">
                <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="images/*"
                    // defaultValue={businessData.location.photo}
                    onChange={(e) => setPhoto(e.target.files[0])}
                    // onChange={addBusinesshandleChange}
                    hidden
                  />
                </label>
                <div>
                  {photo ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product-photo/${id}`}
                        alt="product_photo"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
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
                  {photo2 ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo2)}
                        alt="product_photo2"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product-photo2/${id}`}
                        alt="product_photo2"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
                <label className="ml-3 text-sm font-bold text-gray-700 border-danger tracking-wide">
                  {photo3 ? photo3.name : "Upload Photo3"}
                  <input
                    type="file"
                    name="photo3"
                    accept="images/*"
                    // defaultValue={businessData.location.photo}
                    onChange={(e) => setPhoto3(e.target.files[0])}
                    // onChange={addBusinesshandleChange}
                    hidden
                  />
                </label>
                <div>
                  {photo3 ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo3)}
                        alt="product_photo3"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product-photo3/${id}`}
                        alt="product_photo3"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
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
                  {photo4 ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo4)}
                        alt="product_photo4"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product-photo4/${id}`}
                        alt="product_photo4"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4">
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
                  {photo5 ? (
                    <div className="text-center">
                      <img
                        src={URL.createObjectURL(photo5)}
                        alt="product_photo5"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  ) : (
                    <div className="text-center">
                      <img
                        src={`/api/product-photo5/${id}`}
                        alt="product_photo5"
                        height={"200px"}
                        className="img img-responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* {/ Location Section /} */}
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
                  // id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
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
                  value={state}
                  onChange={(e) => setState(e.target.value)}
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
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full border rounded p-2"
                  placeholder="Enter zip code"
                />
              </div>
            </div>
          </section>

          {/* {/ Submit Button /} */}
          <div className="text-center">
            <button
              // type="submit"
              onClick={handleUpdate}
              className="bg-red-600 hover:bg-black-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Update Your Business
            </button>
            <button
              // type="submit"
              onClick={handleDelete}
              className="bg-blue-600 hover:bg-black-600 text-white font-bold py-2 px-4 rounded-full"
            >
              Delete Your Business
            </button>
          </div>
        </form>
      </div>
      {/* )} */}
    </div>
  </>
  );
}

export default EditUserBusiness;

{
  /* // const [name, setName] = useState("");
// const [location, setLocation] = useState("");
// const [description, setDescription] = useState("");
// const [changesSaved, setChangesSaved] = useState(false);
// const [images, setImages] = useState([]);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// useEffect(() => {
//   if (selectedBusiness) {
//     setName(selectedBusiness.name);
//     setLocation(selectedBusiness.location);
//     setDescription(selectedBusiness.description);
//     setImages(selectedBusiness.images || []);
//   }
// }, [selectedBusiness]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Here, you can handle form submission (e.g., send data to backend)
//   console.log("Form submitted:", { name, location, description });
//   setName("");
//   setLocation("");
//   setDescription("");
//   setChangesSaved(true);
// };

// const handlePrevImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   );
// };

// const handleNextImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   );
// }; */
}

{
  /* // const [name, setName] = useState("");
// const [location, setLocation] = useState("");
// const [description, setDescription] = useState("");
// const [changesSaved, setChangesSaved] = useState(false);
// const [images, setImages] = useState([]);
// const [currentImageIndex, setCurrentImageIndex] = useState(0);

// useEffect(() => {
//   if (selectedBusiness) {
//     setName(selectedBusiness.name);
//     setLocation(selectedBusiness.location);
//     setDescription(selectedBusiness.description);
//     setImages(selectedBusiness.images || []);
//   }
// }, [selectedBusiness]);

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Here, you can handle form submission (e.g., send data to backend)
//   console.log("Form submitted:", { name, location, description });
//   setName("");
//   setLocation("");
//   setDescription("");
//   setChangesSaved(true);
// };

// const handlePrevImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === 0 ? images.length - 1 : prevIndex - 1
//   );
// };

// const handleNextImage = () => {
//   setCurrentImageIndex((prevIndex) =>
//     prevIndex === images.length - 1 ? 0 : prevIndex + 1
//   );
// }; */
}
