import React, { useEffect } from "react";
import Layout from "../Layout/Layout";

function Article3() {
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
                National Reading Day 2024: Top Bookstores in India to Explore
                the World of Rabindranath Tagore
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
                    Crossword, Mumbai
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947152363
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1683182513202_yq72f_1040x500.jpg?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8"
                />

                <div className="prose max-w-none">
                  <p>
                    Mumbai’s literary scene is colourful, here you’ll find
                    countless genres from national and international authors. If
                    you have been diving deep into nationalistic literature, you
                    must have come across the literary works on Rabindranath.
                    Crossword has a comfortable reading area, where readers can
                    sit and check out books before making a purchase. Crossword
                    draws book lovers of all ages into a community where they
                    can discover great books, engage with booklovers and meet
                    their favourite literary personalities. Crossword is present
                    in several locations across Mumbai. Each store offers a wide
                    range of books across various genres, like fiction,
                    non-fiction, children's books, and academic books.
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
                            <div className="ml-4 text-xl">Established in</div>
                          </div>
                          <p className="leading-loose text-gray-500">1992</p>
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
                            <div className="ml-4 text-xl">Other Products</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Stationery, Toys, and Games
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
                            <div className="ml-4 text-xl">Price</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Rs. 199 to Rs. 399 (for Tagore’s Collection)
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
                            <div className="ml-4 text-xl">Address</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            C/O Growels 101 Mall Shop No T-13, 3Rd Floor, Akurli
                            Road, Kandivali East, Mumbai
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
                            <div className="ml-4 text-xl">
                              Online Presence and Delivery
                            </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Yes, they have an online store where you can order
                            books and get them delivered to your doorstep
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
                            <div className="ml-4 text-xl">Timings</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Mon - Sun 10:00 am - 9:00 pm
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
                    Odyssey Bookstore, Chennai
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947116652
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/quickquotes/listicle/dp-contract-img-glry_1707207477134_umfto_890x1120.jpg?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8 w-100"
                />

                <div className="prose max-w-none">
                  <p>
                    Rabindranath Tagore is a name that resonates with all of
                    India. His literary works, spanning over 60 years, include
                    poems, stories, essays, and plays, which continue to inspire
                    readers and enthusiasts worldwide. If you are a literature
                    enthusiast, you should probably hold a copy of his works in
                    your literary collection. Odyssey Bookstore in Chennai
                    offers you a copious collection of Tagore’s important works
                    including but not limited to, ‘A History Of Sriniketan
                    Rabindranath Tagore’s Pioneering Work In Rural
                    Reconstruction’, ‘Nationalism Pocket Classics’, ‘Gitanjali
                    Pocket Classic’, and ‘The Post Office’.
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
                            <div className="ml-4 text-xl">Established in</div>
                          </div>
                          <p className="leading-loose text-gray-500">2004</p>
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
                            <div className="ml-4 text-xl">Other Products </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Toys & Games, Art & Craft, Stationery, Gift Cards
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
                            <div className="ml-4 text-xl">Price</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Rs. 90 to Rs. 2,495 (for Tagore’s Collection)
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
                            <div className="ml-4 text-xl">
                              Online Presence and Delivery
                            </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Yes, they have an online store where you can order
                            books and get them delivered to your doorstep
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
                            Mon - Sun 10:00 am - 10:00 pm
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
                            No. 45 & 47, First Main Road, Gandhi Nagar, Adyar,
                            Chennai
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
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Paperback Bookshop, Bangalore
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947415782
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/quickquotes/listicle/listicle_1683183539529_3ee3g_1040x500.jpg?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8"
                />

                <div className="prose max-w-none">
                  <p>
                    Situated in Kalyan Nagar area as well as Kammanahalli,
                    Paperback Bookshop is Bangalore’s repository of the best
                    paperbacks, from old to new, and from popular to the
                    unknown. This book nook is a neat little, cosy spot for all
                    book lovers to go and get a sensory experience of being
                    among books. Paperback Bookshop has both new and second-hand
                    paperbacks. You can easily spot a collection of Gurudev
                    Rabindranath’s books here alongside Tolkien, Ibsen and Rumi.
                    Yes, they do have storybooks, comics and a kids section as
                    well.
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
                            <div className="ml-4 text-xl">Established in</div>
                          </div>
                          <p className="leading-loose text-gray-500">2000</p>
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
                            <div className="ml-4 text-xl">Pro Tip </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            If you love collecting antiques, we’d suggest you
                            ask them to show you their vintage collection as
                            well
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
                              Online Presence and Delivery
                            </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            They do not have an online store, so you would have
                            to come down and hand pick your books
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
                            <div className="ml-4 text-xl">Timings</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Sat - Sun 10:00 am - 10:00 pm
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
                            <div className="ml-4 text-xl">Address</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            No. 62/5, 4th Cross, 2nd Block, Kalyan Nagar,
                            Bangalore
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
                            <div className="ml-4 text-xl">Landmark</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Near Adyar Ananda Bhavan
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

export default Article3;
