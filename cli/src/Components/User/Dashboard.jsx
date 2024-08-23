import Layout from "../Layout/Layout";
import { useAuth } from "../context/auth";

function Dashboard() {
  const [auth, SetAuth] = useAuth();
  const userProfile = {
    name: "Amandeep Singh",
    email: "amandeep@example.com",
    membership: "Premium Member",
    avatar: "https://via.placeholder.com/150", // Replace with actual avatar URL
  };

  const recentActivities = [
    { activity: "Ordered 'Tech Innovators' Book", date: "08/10/2024" },
    { activity: "Updated profile information", date: "08/05/2024" },
    {
      activity: "Subscribed to 'Business Insights' newsletter",
      date: "07/25/2024",
    },
    // Add more activities as needed
  ];
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen p-6">
        {/* User Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <div className="flex items-center">
            <img
              className="w-16 h-16 rounded-full mr-4"
              src={userProfile.avatar}
              alt={`${userProfile.name}'s avatar`}
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {auth?.user?.username}
              </h2>
              <p className="text-gray-600">{auth?.user?.email}</p>
              <p className="text-gray-500">{auth?.user?.phone}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              My Orders
            </h3>
            <a href="#" className="text-blue-500 hover:underline">
              View Orders
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Settings
            </h3>
            <a href="#" className="text-blue-500 hover:underline">
              Account Settings
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Help & Support
            </h3>
            <a href="#" className="text-blue-500 hover:underline">
              Contact Support
            </a>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Recent Activities
          </h3>
          <ul className="list-disc list-inside">
            {recentActivities.map((activity, index) => (
              <li key={index} className="text-gray-700 mb-2">
                {activity.activity} -{" "}
                <span className="text-gray-500">{activity.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
