import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditUserBusiness() {
  const Navi = useNavigate();
  const [businessesByid, setBusinessesByid] = useState([]);

  const { id } = useParams();
  //   console.log(`serial number is ${id}`)

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const URL = `/api/business/${id}`;
        try {
          const response = await axios.get(URL);
          setBusinessesByid(response.data);
          // console.log(response.data);
        } catch (err) {
          console.log(`Log in Please ${err.message}`);
        }
      } else {
        Navi("/business");
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {" "}
      {businessesByid.data && (
        <div className="max-w-screen-lg mx-auto p-5">
          <div className="grid grid-cols-1 md:grid-cols-12 border">
            <div className="bg-gray-900 md:col-span-4 p-10 text-white">
              <p className="mt-4 text-sm leading-7 font-regular text-justify uppercase">
                {businessesByid?.data?.contact?.phone}
                <br />
                {businessesByid?.data?.contact?.email}
                <br />
                {businessesByid?.data?.contact?.website}
              </p>

              <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In{" "}
                <span className="text-red-600">
                  {businessesByid.data?.name}
                </span>
              </h3>
              <div className="flex items-center mt-5">
                <p>{businessesByid.data?.description}</p>
              </div>

              <div className="flex-col justify-between  mt-5">
                <p>Business Name {businessesByid.data?.name}</p>
                <br />
                {businessesByid?.data?.category}
                <br />
                <span className="text-sm">{businessesByid.data?.name}</span>
                <br />
              </div>
              <div className="flex-col justify-betweenmt-5">
                <p>Location</p>
                <span className="text-sm">
                  {businessesByid?.data?.location?.address}
                </span>
                {businessesByid?.data?.location?.state}
                <br />
                {businessesByid?.data?.location?.city}
                <br />
                {businessesByid?.data?.location?.zipCode}
                <br />
              </div>
            </div>
            <form
              // onSubmit={handleSubmit}

              className="md:col-span-8 p-10"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                    name="name"
                    // value={name}
                    // onChange={(e) => {
                    //   setName(e.target.value);
                    //   setChangesSaved(false);
                    // }}
                  />
                  {/* {/ <p className="text-red-500 text-xs italic">Please fill out this field.</p> /} */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Location
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-email"
                    type="email"
                    placeholder="********@*****.**"
                    name="location"
                    // value={location}
                    // onChange={(e) => {
                    //   setLocation(e.target.value);
                    //   setChangesSaved(false);
                    // }}
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
                    Description
                  </label>
                  <textarea
                    rows="10"
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="description"
                    // value={description}
                    // onChange={(e) => {
                    //   setDescription(e.target.value);
                    //   setChangesSaved(false);
                    // }}
                  ></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                  <div className="md:flex md:items-center">
                    <label className="block text-gray-500 font-bold">
                      <input className="mr-2 leading-tight" type="checkbox" />
                      <span className="text-sm">Send me your newsletter!</span>
                    </label>
                  </div>
                  <button
                    className="shadow bg-red-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    type="submit"
                  >
                    Edited Business
                  </button>
                </div>
              </div>
              {/* {changesSaved && (
                <p className="mt-4 text-center text-sm text-gray-500">
                  Changes saved successfully!
                </p>
              )} */}
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default EditUserBusiness;

// const [name, setName] = useState("");
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
// };
