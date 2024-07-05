import  {  useEffect } from "react";
import { useSearch } from "../ProAuth/Search";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

function SearchBuisness() {
  const [values, setValues] = useSearch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h1 className="text-4xl ">Search Results</h1>
        <h3 className="text-2xl">
          {values?.results.length < 1
            ? "No Buisness Found"
            : `Found ${values?.results.length} `}
        </h3>
        <div>
          {values?.results.map((p) => (
            <div className="max-w-sm border-4  border-gray-200 bg-gray-50  w-full lg:max-w-full lg:flex p-4">
              <div className=" flex-col">
                <div className="h-48 lg:h-auto border-2 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  {" "}
                  <img
                    src={`/api/buisness-photo/${p._id}`}
                    alt={p.name}
                    className="d-block w-100"
                  />
                </div>
                <div className="h-48 border-4 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  {" "}
                  <img
                    src={`/api/buisness-photo2/${p._id}`}
                    alt={p.name}
                    className="d-block w-100"
                  />
                </div>
              </div>
              <div className=" flex-col">
                <div className="h-48 lg:h-auto border-4 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  {" "}
                  <img
                    src={`/api/buisness-photo3/${p._id}`}
                    alt={p.name}
                    className="d-block w-100"
                  />
                </div>
                <div className="h-48 lg:h-auto border-4 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                  {" "}
                  <img
                    src={`/api/buisness-photo4/${p._id}`}
                    alt={p.name}
                    className="d-block w-100"
                  />
                </div>
              </div>

              <div className="border-gray-200 bg-gray-50 hover:bg-orange-50   lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">
                    {p.name}
                  </div>
                  <p className="text-gray-700 text-base">
                    {p.description.substring(0, 300)}...
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="px-8 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      City
                    </span>
                    :<b className="px-3">{p.city}</b>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      State
                    </span>
                    :<b className="px-3">{p.state}</b>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      Zipcode
                    </span>
                    :<b className="px-3">{p.zipCode}</b>
                  </div>
                  <Link
                    href="#"
                    to={`/buisness/${p.slug}`}
                    className="inline-block"
                  >
                    <button
                      className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                      type="button"
                    >
                      Learn More
                      <HiArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div>
          {values?.results.map((p) => (
            <div className=" flex items-center mx-auto border-b  mb-10 border-gray-200  sm:flex-row flex-col bg-gray-50 p-6  rounded-lg hover:bg-orange-50 shadow-2xl hover:shadow-white">
              <div className="pr-3">
                <div id="carouselExample" className="carousel slide w-80">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src={`/api/buisness-photo/${p._id}`}
                        alt={p.name}
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/api/buisness-photo2/${p._id}`}
                        alt={p.name}
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/api/buisness-photo3/${p._id}`}
                        alt={p.name}
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/api/buisness-photo4/${p._id}`}
                        alt={p.name}
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={`/api/buisness-photo5/${p._id}`}
                        alt={p.name}
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h1 className="text-black text-2xl title-font font-bold mb-2 uppercase">
                  {p.name}
                </h1>

                <h3 className="leading-relaxed text-base inline-flex mt-3">
                  <FaMapMarkerAlt className="text-red-600 mt-1" /> {p.address}
                </h3>

                <div className="flex items-center mt-4 text-gray-600"></div>

                <div className="py-4 ">
                  <div className=" inline-block mr-2">
                    <div className="flex  h-full items-center">
                      <FaPhoneSquare className="text-green-600 w-5 h-5" />
                      <p className="title-font font-medium px-3">{p.phone}</p>
                    </div>
                  </div>
                  <div className="inline-block mr-2">
                    <div className="flex  pr-2 h-full items-center">
                      <FaMailBulk className="text-green-600" />
                      <p className="title-font font-medium px-3">{p.email}</p>
                    </div>
                  </div>
                  <div className=" inline-block mr-2">
                    <div className="flex  pr-2 h-full items-center">
                      <FaGlobe className="text-green-600" />
                      <a
                        href={p.website}
                        className="title-font font-medium px-3"
                      >
                        {p.name}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:flex font-bold text-gray-800">
                  <div className="w-full md:w-1/2 flex space-x-3">
                    <div className="w-1/2">
                      <h2 className="text-gray-500">City</h2>
                      <p> {p.city}</p>
                    </div>
                    <div className="w-1/2">
                      <h2 className="text-gray-500">ZipCode</h2>
                      <p>{p.zipCode}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex space-x-3">
                    <div className="w-1/2">
                      <h2 className="text-gray-500">State</h2>
                      <p>{p.state}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-black-500 font-bold inline-flex items-center uppercase">
                  {p.description.length > 10 ? (
                    <span>
                      <Link
                        to={`/buisness/${p.slug}`}
                        className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0"
                      >
                        Readmore
                      </Link>
                    </span>
                  ) : (
                    p.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default SearchBuisness;
