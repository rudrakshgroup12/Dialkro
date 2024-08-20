import { useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import AdminSidebar from "../../Components/Layout/AdminSidebar";
import axios from "axios";
import { Modal } from "antd";
import { Link } from "react-router-dom";

function ViewBusiness() {
  const [visible, setVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [buisness, setBuisness] = useState([]);

  const getAllBuisness = async () => {
    try {
      const { data } = await axios.get(`/api/get-buisness`);
      setBuisness(data.buisness);
    } catch (error) {
      console.log(error);
    }
  };

  //LifeCycle Mehod
  useEffect(() => {
    getAllBuisness();
  }, []);

  // View user details in modal
  const viewUserDetails = (user) => {
    setSelectedUser(user);
    setVisible(true);
  };
  return (
    <Layout title={"All Business List"}>
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row">
          <div className="col-span-1">
            <AdminSidebar />
          </div>
          <div className="md:w-3/4 bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              All Business List
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Photo
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Business
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      site
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {buisness?.map((p) => (
                    <tr key={p._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <img
                          src={`/api/buisness-photo/${p._id}`}
                          // src="https://raw .githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                          className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                          alt={p.name}
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {p.name}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {p.phone}{" "}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {p.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a
                          href={p.website}
                          className="font-semibold text-light-inverse text-md/normal"
                        >
                          {p.name}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {p.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          className="text-indigo-600 hover:text-indigo-900 mr-4"
                          onClick={() => viewUserDetails(p)}
                        >
                          View
                        </button>
                      </td>
                      <Link to={`/dashboard/admin/updatebusiness/${p.slug}`}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button
                            to={`/dashboard/admin/updatebusiness/${p.slug}`}
                            className="text-indigo-600 hover:text-indigo-900 mr-4 my-4"
                          >
                            Update
                          </button>
                        </td>
                      </Link>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            >
              {selectedUser && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Business Details</h2>
                  <img
                    src={`/api/buisness-photo/${selectedUser._id}`}
                    // src="https://raw .githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg"
                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                    alt={selectedUser.name}
                  />
                  <p>
                    <strong>Business</strong> {selectedUser.name}
                  </p>
                  <p>
                    <strong>Phone:</strong> {selectedUser.phone}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedUser.email}
                  </p>
                  <p>
                    <a href={selectedUser.website}>
                      <strong>Website:</strong> {selectedUser.name}
                    </a>
                  </p>
                  <p>
                    <strong>City:</strong> {selectedUser.city}
                  </p>
                </div>
              )}
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ViewBusiness;
