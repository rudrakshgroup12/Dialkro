import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { Select } from "antd";
const { Option } = Select;
import Layout from "../../Components/Layout/Layout";
import AdminSidebar from "../../Components/Layout/AdminSidebar";

function UpdateBusiness() {
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

  //create product function
  const handleupdate = async (e) => {
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
      const { data } = axios.put(`/api/update-buisness/${id}`, buisnessData);
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Buisneess Update Successfully");
        navigate("/dashboard/admin/viewbusiness");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in Input form ");
    }
  };

  //delete product
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are you sure want to  delete this product ?");
      if (!answer) return;
      const { data } = await axios.delete(`/api/delete-buisness/${id}`);
      toast.success("Business deleted Successfully");
      navigate("/dashboard/admin/viewbusiness");
    } catch (error) {
      console.log(error);
      toast.error("Somthing went wrong");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1">
            <AdminSidebar />
          </div>
          <div className="col-span-3">
            <h1 className="text-3xl font-bold mb-6">Update Business</h1>
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <Select
                  bordered={false}
                  placeholder="Select a Category"
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setCategory(value);
                  }}
                  value={category}
                >
                  {categories.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={name}
                  placeholder="Business Name"
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <textarea
                  value={description}
                  placeholder="Business Description"
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  value={website}
                  placeholder="Business Website (Optional)"
                  onChange={(e) => setWebsite(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={email}
                  placeholder="Business email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={phone}
                  placeholder="Contact"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {photo ? photo.name : "Upload Business Photo1"}
                  </label>
                  <input
                    type="file"
                    accept="images/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {photo2 ? photo2.name : "Upload Business Photo2"}
                  </label>
                  <input
                    type="file"
                    accept="images/*"
                    onChange={(e) => setPhoto2(e.target.files[0])}
                    className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {photo ? (
                  <div className="mb-4">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <img
                      src={`/api/buisness-photo/${id}`}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}

                {photo2 ? (
                  <div className="mb-4">
                    <img
                      src={URL.createObjectURL(photo2)}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <img
                      src={`/api/buisness-photo2/${id}`}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {" "}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {photo3 ? photo3.name : "Upload Business Photo3"}
                  </label>
                  <input
                    type="file"
                    accept="images/*"
                    onChange={(e) => setPhoto3(e.target.files[0])}
                    className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {photo4 ? photo4.name : "Upload Business Photo4"}
                  </label>
                  <input
                    type="file"
                    accept="images/*"
                    onChange={(e) => setPhoto4(e.target.files[0])}
                    className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {" "}
                {photo3 ? (
                  <div className="mb-4">
                    <img
                      src={URL.createObjectURL(photo3)}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <img
                      src={`/api/buisness-photo3/${id}`}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
                {photo4 ? (
                  <div className="mb-4">
                    <img
                      src={URL.createObjectURL(photo4)}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mb-4">
                    <img
                      src={`/api/buisness-photo4/${id}`}
                      alt="business_logo"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  {photo5 ? photo5.name : "Upload Business Photo5"}
                </label>
                <input
                  type="file"
                  accept="images/*"
                  onChange={(e) => setPhoto5(e.target.files[0])}
                  className="w-full text-gray-700 p-3 border border-gray-300 rounded-lg cursor-pointer"
                />
              </div>
              {photo5 ? (
                <div className="mb-4">
                  <img
                    src={URL.createObjectURL(photo5)}
                    alt="business_logo"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <img
                    src={`/api/buisness-photo5/${id}`}
                    alt="business_logo"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={address}
                  placeholder="Business Address"
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={city}
                  placeholder="City"
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={zipCode}
                  placeholder="Zip Code"
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <button
                    onClick={handleupdate}
                    className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Update Business
                  </button>
                </div>
                <div>
                  <button
                    onClick={handleDelete}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg  transition-colors"
                  >
                    Delete Business
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UpdateBusiness;
