import React from "react";
import BusinessList from "./Businesslist.jsx"
function ProfileBusiness() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">
        Welcome to Our Business Profile
      </h1>
      <BusinessList/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-between">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur ligula ac metus vehicula, in fringilla neque ultricies.
              Nam euismod urna eget sem aliquam dictum. Mauris quis dui ac
              libero tincidunt fermentum.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700">
              Our mission is to provide the best quality products and services
              to our customers while maintaining sustainability and
              environmental consciousness.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-700">
              <li className="mb-2">
                <span className="font-semibold">Address:</span> 1234 Business
                Street, City, Country
              </li>
              <li className="mb-2">
                <span className="font-semibold">Phone:</span> +1234567890
              </li>
              <li className="mb-2">
                <span className="font-semibold">Email:</span> info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Business Image"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 1"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">John Doe</h3>
            <p className="text-gray-700">CEO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 2"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-gray-700">Marketing Manager</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member 3"
              className="rounded-full w-24 h-24 mb-2 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              David Johnson
            </h3>
            <p className="text-gray-700">Sales Manager</p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Customer Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              efficitur ligula ac metus vehicula."
            </p>
            <p className="text-gray-800 font-semibold">- Sarah Johnson</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              "Suspendisse potenti. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus."
            </p>
            <p className="text-gray-800 font-semibold">- Michael Brown</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBusiness;
