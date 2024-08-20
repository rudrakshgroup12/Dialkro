import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <div className="w-64 bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
        <div className="p-6 text-white">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        </div>
        <ul className="mt-6 space-y-2">
          <li>
            <Link
              to="/dashboard/admin"
              className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/admin/add-category"
              className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
            >
              Add Category
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/admin/allUser"
              className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/admin/createbuisness"
              className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
            >
              Add Business
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/admin/viewbusiness"
              className="text-gray-200 hover:bg-purple-700 hover:text-white px-6 py-3 cursor-pointer transition-colors"
            >
              Businesses
            </Link>
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
    </>
  );
}

export default AdminSidebar;
