import { useEffect } from "react";
import BusinessList from "./Businesslist.jsx";
import CEO from "../assets/CEO.jpg";
import ceorename from "../assets/ceorename.png";
import sadhana from "../assets/sadhana.jpeg";
import Layout from "../Layout/Layout.jsx";
function ProfileBusiness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="bg-white shadow-md rounded-lg p-6">
        <BusinessList />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                About Us
              </h2>
              <p className="text-gray-700">
                Welcome to Dialkro, the ultimate destination for discovering and
                connecting with businesses near you. Whether You are in search
                of a cozy café, a reliable plumber, or the perfect yoga studio,
                Dialkro simplifies your search by providing a comprehensive
                directory of local businesses right at your fingertips.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700">
                At Dialkro, we believe in empowering communities by fostering
                connections between consumers and businesses. Our platform not
                only helps users discover new and exciting local spots but also
                assists businesses in reaching their target audience, promoting
                growth and sustainability within the community.
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <ul className="text-gray-700">
                <li className="mb-2">
                  <span className="font-semibold">Address:</span> E-260, b-1,
                  phase 8 b, Industrial Area, Sector 74 Sahibzada Ajit Singh
                  Nagar, Punjab 160055
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Phone:</span>+91 98765-43210
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  dialkro64@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={ceorename}
              alt="Business Image"
              className="object-cover rounded-lg *:"
            />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src={CEO}
                alt="Team Member 1"
                className="rounded-full w-24 h-24 mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Prem Maurya
              </h3>
              <p className="text-gray-700">CEO</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={sadhana}
                alt="Team Member 2"
                className="rounded-full w-24 h-24 mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                SADHANA MAURYA
              </h3>
              <p className="text-gray-700">Managing Director</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member 3"
                className="rounded-full w-24 h-24 mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                Pradeep Maurya
              </h3>
              <p className="text-gray-700">Sales Manager</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProfileBusiness;
