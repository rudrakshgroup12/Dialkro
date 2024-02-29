import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../ProAuth/AuthPro.jsx";
function BusinessList() {
  // Mock data for businesses (replace this with actual data)
  const { uBusiness, islogin } = useAuth();
  // {
  //   console.log(uBusiness?.data?.name);
  // }

  const businesses = [
    {
      id: 1,
      name: "Business 1",
      location: "City 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla nisi in lectus ultrices, id efficitur justo venenatis.",
    },
    {
      id: 2,
      name: "Business 2",
      location: "City 2",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      id: 3,
      name: "Business 3",
      location: "City 3",
      description:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
    },
    // Add more businesses as needed
  ];

  return (
    <>
      <div className="my-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          My Businesses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {islogin ? (
            <>
              {uBusiness.map((business, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden"
                >
                  <img
                    src={`https://source.unsplash.com/400x300/?${business.data?.name}`}
                    // alt={business.name}
                    className="w-full h-40 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {business.name}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {business.location?.address}
                    </p>
                    <p className="text-gray-700">{business.location?.city}</p>
                    <p className="text-gray-700">
                      {" "}
                      {business.description.length > 75 ? (
                        <span>
                          {business.description.substring(0, 10)}
                          <Link
                            to={`/business/${business._id}`}
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                          >
                            Readmore
                          </Link>
                        </span>
                      ) : (
                        business.description
                      )}
                    </p>
                    <Link
                      to={`/business/edit/${business._id}`}
                      className="mt-4 inline-block py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="login-prompt text-center mb-4">
              Unlock the full potential. Log in now!
            </div>
          )}
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={`https://source.unsplash.com/400x300/?${business.name}`}
              alt={business.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {business.name}
              </h3>
              <p className="text-gray-700 mb-4">{business.location}</p>
              <p className="text-gray-700">{business.description}</p>
              <Link
                to={`/business/edit`}
                className="mt-4 inline-block py-2 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div> */}
      </div>
    </>
  );
}

export default BusinessList;
