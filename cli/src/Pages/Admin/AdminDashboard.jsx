import React from "react";
import Layout from "../../Components/Layout/Layout";
import { Link } from "react-router-dom";

function AdminDashboard() {
  const userName = "Admin";
  const recentOrders = [
    {
      id: "#1234",
      customer: "John Doe",
      total: "$123.45",
      status: "Completed",
      date: "08/10/2024",
    },
    {
      id: "#1235",
      customer: "Jane Smith",
      total: "$678.90",
      status: "Pending",
      date: "08/09/2024",
    },
    // Add more orders as needed
  ];
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen font-sans flex">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          </div>
          <ul className="mt-6 space-y-2">
            <li>
              <Link
                to="/"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/view-users"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="/view-businesses"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Businesses
              </Link>
            </li>
            <li>
              <Link
                to="/view-categories"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/add-category"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Add Category
              </Link>
            </li>
            <li>
              <Link
                to="/add-business"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Add Business
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Analytics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
              >
                Settings
              </a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          {/* Header */}
          <header className="w-full shadow bg-white">
            <div className="flex justify-between items-center p-4">
              <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
              <div className="flex items-center">
                <span className="text-gray-600 mr-4">Admin</span>
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Admin Avatar"
                />
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="p-6">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Total Users", value: "1,234" },
                { title: "Total Business", value: "567" },
                { title: "Total Sales", value: "$12,345" },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-700 text-2xl">{card.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Business Table */}
            <div className="mt-6">
              <div className="bg-white shadow-lg rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Recent Business</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr>
                        {[
                          "Order ID",
                          "Customer",
                          "Total",
                          "Status",
                          "Date",
                        ].map((heading) => (
                          <th
                            key={heading}
                            className="py-2 px-4 border-b-2 border-gray-300 text-left font-semibold"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {order.id}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {order.customer}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {order.total}
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                order.status === "Completed"
                                  ? "bg-green-200 text-green-800"
                                  : "bg-yellow-200 text-yellow-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="py-2 px-4 border-b border-gray-300">
                            {order.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
