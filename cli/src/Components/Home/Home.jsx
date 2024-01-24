import React from "react";

function Home() {
  return (
    <>
      <div className="font-sans bg-gradient-to-b from-blue-100 to-gray-100 min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
          {/* Featured Businesses or Categories */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Featured Businesses or Categories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Sample Business Card */}
              <div className="bg-blue-200 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-blue-800">
                  Business Name
                </h3>
                <p className="text-gray-700">
                  Description of the business goes here.
                </p>
              </div>
              {/* Repeat for other featured businesses or categories */}
            </div>
          </section>

          {/* Search Bar with Auto-suggestions */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border p-3 rounded-md focus:outline-none focus:border-blue-500"
              />
              {/* Add your auto-suggestion functionality here */}
            </div>
          </section>

          {/* Call-to-action buttons for Registration or Login */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Get Started
            </h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-green-200 text-green-800 py-3 px-6 rounded-md hover:bg-green-300"
              >
                Register
              </a>
              <a
                href="#"
                className="bg-blue-200 text-blue-800 py-3 px-6 rounded-md hover:bg-blue-300"
              >
                Login
              </a>
            </div>
          </section>

          {/* Promotional Banners or Announcements */}
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Promotions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sample Promotional Banner */}
              <div className="bg-yellow-100 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2 text-yellow-800">
                  Special Offer
                </h3>
                <p className="text-gray-800">
                  Get 20% off on your first purchase. Use code: SPECIAL20
                </p>
              </div>
              {/* Repeat for other promotional banners or announcements */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
