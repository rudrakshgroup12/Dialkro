import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../ProAuth/AuthPro";
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";
import vectorbusi from "../assets/vectorbusi.png";
import toast from "react-hot-toast";
import { Modal } from "antd";
import CategoryForm from "./CategoryForm";
import Layout from "../Layout/Layout";

function BusinessBycat() {
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

  const [auth, setAuth] = useAuth();

  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    try {
      const { data } = await axios.post("/api/create-category", { name });
      if (data?.success) {
        toast.success(`${name} is created`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Input form ");
    }
  };

  //get all category
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

  //Update Category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/update-category/${selected._id}`, {
        name: updatedName,
      });
      if (data.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong in Input form ");
    }
  };

  //Delete Category
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`/api/delete-category/${pId}`, {
        name: updatedName,
      });
      if (data.success) {
        toast.success(`Category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong in Input form ");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          {auth.user ? (
            <>
              <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
                <div className="max-w-md w-full space-y-8">
                  <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold text-gray-900">
                      Add Business Category
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Please Add your Business Here
                    </p>
                  </div>

                  {/* <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className=" content-center">
                      <label className="ml-3 text-sm font-bold text-gray-700 tracking-wide">
                        Category
                      </label>

                      <input
                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 focus:outline-none focus:border-indigo-500"
                        type="text"
                        placeholder="Enter business category"
                      />

                    </div>    
                  </div>

                  <div>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                      Add Business
                    </button>
                  </div>
                </form> */}

                  <div className="col-md-12">
                    <h1>Manage Category</h1>
                    <div className="p-3 w-100">
                      <CategoryForm
                        handleSubmit={handleSubmit}
                        value={name}
                        setValue={setName}
                      />
                    </div>
                    <div className="w-50">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories?.map((c) => (
                            <>
                              <tr>
                                <td key={c._id}>{c.name}</td>
                                <td>
                                  <div className="inline-flex">
                                    <button
                                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                                      onClick={() => {
                                        setVisible(true);
                                        setUpdatedName(c.name);
                                        setSelected(c);
                                      }}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                                      onClick={() => {
                                        handleDelete(c._id);
                                      }}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                  {/* <button
                                  className="btn btn-danger ms-2"
                                  onClick={() => {
                                    setVisible(true);
                                    setUpdatedName(c.name);
                                    setSelected(c);
                                  }}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-secondary ms-2"
                                  onClick={() => {
                                    handleDelete(c._id);
                                  }}
                                >
                                  Delete
                                </button> */}
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Modal
                      onCancel={() => setVisible(false)}
                      footer={null}
                      visible={visible}
                    >
                      <CategoryForm
                        value={updatedName}
                        setValue={setUpdatedName}
                        handleSubmit={handleUpdate}
                      />
                    </Modal>
                  </div>
                  <div>
                    <Link to="/new">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Add Buisness
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h1>Login PLease.....</h1>
          )}

          {/* {error && (
          <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
        )} */}
          {/* {loading && (
            <h1 className="text-green-500 mb-8 text-3xl font-thin">
              {loading}
            </h1>
          )} */}
        </div>
      </div>
    </Layout>
  );
}

export default BusinessBycat;

// <div>
// {businessesByCategory.map((business, index) => (
//      <div key={index} className="">
//        <p className="text-yellow-600">{business.name}</p>
//        {/* Display other business details as needed */}
//      </div>
//    ))}
//  </div>
