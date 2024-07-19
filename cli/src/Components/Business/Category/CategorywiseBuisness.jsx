import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { HiArrowRight } from "react-icons/hi";

function CategorywiseBuisness() {
  const params = useParams();
  const [buisness, setBuisness] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getBuisnessByCat();
  }, [params?.slug]);

  const API_PATH = 'https://api.dialkro.in';

  const getBuisnessByCat = async () => {
    try {
      const { data } = await axios.get(`${API_PATH}/api/buisness-category/${params.slug}`);
      setBuisness(data?.buisness);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-3">
      <div className="text-center">
        <h1 className="text-4xl ">Category:{category?.name} </h1>
        <h3 className="text-2xl">
          {buisness?.length < 1
            ? "No Buisness Found"
            : `${buisness?.length} Results Found  `}
        </h3>
        <div>
          {buisness?.map((p) => (
            <div>
              <div className="max-w-sm border-4  border-gray-200 bg-gray-50  w-full lg:max-w-full lg:flex p-4">
                <div className="flex-col">
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
                <div className="flex-col">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorywiseBuisness;
