import React, { useEffect } from "react";
import Layout from "../Layout/Layout";

function Article6() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div>
        <div className="flex flex-col">
          <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Mighty Mangoes: Must Visit Places with Special Mango Menu in
                Mumbai
              </h1>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-3/4 px-4">
                <div
                  className="d-flex 
            "
                >
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Cafe 49
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947132888
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1684474948854_dtmi3_1040x500.jpg?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8"
                />

                <div className="prose max-w-none">
                  <p>
                    Prepare to be enchanted by the return of Cafe 49, a charming
                    and intimate cafe nestled in the heart of Juhu. With the
                    splendid arrival of the revered king of fruits, Cafe 49 has
                    unveiled a magnificent mango-themed menu that is certain to
                    tantalise the taste buds of all mango aficionados. Brace
                    yourself for an irresistible and decadent experience as the
                    cafe presents an array of delectable mango-inspired desserts
                    and beverages, catering to your every sweet craving. Indulge
                    in a wide selection of heavenly pastries, featuring both
                    beloved classics like Mango Fresh Cream, Mango Baked
                    Cheesecake, and Mango Dark Chocolate, as well as delightful
                    signatures like Mango Lotus Biscoff Baked Cheesecake, Mango
                    Nutella, and Mango Blueberry Pastries. Crafted with utmost
                    care and using only the finest alphonso mangoes, these
                    pastries are a divine treat for those with an insatiable
                    sweet tooth. The menu promises to transport you to a
                    paradise of mango-infused bliss, inviting you to savour each
                    delightful creation.
                  </p>
                </div>

                <section className="bg-white pb-4">
                  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="container mx-auto   bg-white">
                      <div className="flex flex-wrap ">
                        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Price for Two</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Approx. Rs. 600
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Cuisine </div>
                          </div>
                          <p className="leading-loose text-gray-500">Italian</p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">
                              Special Mango Menu
                            </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Mango Chipotle Bonbons, Mango Fresh Cream Cakes,
                            Baked Mango Hazelnut Yogurt Jar, Chili Mango
                            Mocktail, Mango Coconut Mousse, Raw Mango Cilantro
                            Hummus
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Other Must Try</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Mushroom Feta Zucchini & Caramelized Onion Pizza,
                            Trio of Hummus & Pita, Spicy Cottage Cheese Slider
                            Burger
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Spotlight</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            The Contemporary Aam Peti and the Petit Aam Peti
                            makes for a perfect gift for any mango lover
                          </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Address</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Cafe 49, The Emerald Hotel, Juhu Tara Road, Juhu,
                            Mumbai
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div
                  className="d-flex 
            "
                >
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    Poetry by Love & Cheesecake
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947141774
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/quickquotes/listicle/dp-contract-img-glry_1713592110964_rsm6g_1000x666.jpg?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8 w-100"
                />

                <div className="prose max-w-none">
                  <p>
                    Poetry by Love & Cheesecake in Mumbai is a delightful haven
                    for dessert lovers who enjoy aesthetic spaces. Starting with
                    one location in Bandra, today this cafe has branched out to
                    more than 15 locations across Mumbai. This charming café
                    offers a unique blend of delectable sweet treats that will
                    make you want more. They have a specially curated menu
                    dedicated to mangoes, and not just any, but Alphonso mangoes
                    that are specially sourced from the orchards of Ratnagiri.
                    Each dessert is meticulously created making use of both
                    vintage recipes and contemporary methods to provide an
                    irresistible treat. This makes Poetry by Love & Cheesecake
                    an enchanting destination for both the palate and the soul.
                    Here's what the founder of Poetry by Love & Cheesecake had
                    to say about the unique features or aspects of this menu
                    that distinguish it from competitors and make it stand out:
                  </p>
                </div>

                <section className="bg-white pb-4">
                  <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="container mx-auto   bg-white">
                      <div className="flex flex-wrap ">
                        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Price for Two</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Approx. Rs. 1200
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Cuisine </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Continental
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">
                              Special Mango Menu
                            </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Mango Biscoff Baked Cheesecake, MangoMisu, Mango
                            Coco Rice Pudding, Fresh Mango & Chocolate Tart,
                            Fresh Mango Cheesecake, Almond Mango Cheesecake
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Other Must Try</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Belgian Chocolate Waffle, Yogurt Parfait, Breakfast
                            Burrito, Sun dried Tomato Omelette
                          </p>
                        </div>

                        <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Timings</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            8:00 am - 12:00 midnight
                          </p>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/3 p-5">
                          <div className="flex items-center mb-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="20"
                              fill="currentColor"
                              className="h-6 w-6 text-red-500"
                            >
                              <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                            </svg>
                            <div className="ml-4 text-xl">Address</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            City Park, Central Ave, Hiranandani Gardens, Powai,
                            Mumbai, Maharashtra 400076
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="w-full md:w-1/4 px-4">
                <div className="bg-gray-100 p-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Our other Offers
                  </h2>
                  <ul className="list-none">
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Web Development
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Social Media Marketing
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Data Handler
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Wordpress Development
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 mt-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Categories
                  </h2>
                  <ul className="list-none">
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Schools
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Collage
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Restaurent
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="#" className="text-gray-700 hover:text-gray-900">
                        Hotels
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Article6;
