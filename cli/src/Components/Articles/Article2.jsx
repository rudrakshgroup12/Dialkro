import React, { useEffect } from "react";
import Layout from "../Layout/Layout";

function Article2() {
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
                Leading the Fight: Top Cancer Hospitals in India Pioneering
                Advanced Care
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
                    TATA Memorial Hospital
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947110784
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/comp/mumbai/46/022p9008646/catalogue/tata-memorial-hospital-parel-mumbai-public-hospitals-hvxfo.jpg?clr=#4c2e1a?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8"
                />

                <div className="prose max-w-none">
                  <p>
                    TATA Memorial Hospital, located in Parel, is one of the most
                    reputable cancer hospitals in India. The hospital's focus is
                    the prevention, treatment, education and research of cancer.
                    This autonomous body is funded and controlled by the
                    Department of Atomic Energy, Government of India. It has
                    been looking after the administration of the institute since
                    1962. This cancer institute was originally commissioned by
                    the Sir Dorabji Tata Trust in 1941.
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
                            <div className="ml-4 text-xl">Oncologists</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Dr. Rajendra Badwe, Dr. Devendra Arvind Chaukar, Dr.
                            Gauravi Mishra, Dr. Vijaya Patil, Dr. George
                            Karimundackal
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
                            <div className="ml-4 text-xl">Services </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Microvascular Surgery, Robotic Surgeries, Minimal
                            Access Surgeries, Major Vascular Replacements, Limb
                            Salvage, Skull-Base Procedures
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
                            <div className="ml-4 text-xl">Specialties</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Treatment of Acute Lymphoblastic Leukaemia (A.L.L)
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
                            <div className="ml-4 text-xl">Departments</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Anesthesia, Biochemistry, Cancer Cytogenetics,
                            Cytopathology, Hemato-Pathology, Preventive
                            Oncology, Radiation Oncology, Radiodiagnosis,
                            Transfusion Medicine
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
                            <div className="ml-4 text-xl">Trivia</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            In a groundbreaking achievement, Tata Memorial
                            Hospital pioneered Bone Marrow Transplants in India
                            back in 1983
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
                            Dr E Borges Marg, Parel, Mumbai (Opposite KEM
                            Orthopedic Hospital)
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
                    Apollo Hospitals
                  </h1>
                  <button className="bg-red-600 text-white border rounded mx-10 p-2 font-bold">
                    +(91)-7947145258
                  </button>
                </div>

                <img
                  src="https://content.jdmagicbox.com/comp/chennai/l8/044pxx44.xx44.130529143039.d8l8/catalogue/apollo-speciality-hospital-vanagaram-chennai-multispeciality-hospitals-0qgvxrywto.jpg?clr=#404026?impolicy=queryparam&im=Resize=(1920,384),aspect=fit&q=75"
                  alt="Blog Featured Image"
                  className="mb-8 w-100"
                />

                <div className="prose max-w-none">
                  <p>
                    Apollo Hospitals in Chennai is one of the most trustworthy
                    cancer hospitals in India offering comprehensive cancer care
                    services. The board comprises highly qualified medical,
                    surgical and radiation oncologists. They have a brilliant
                    support team consisting of dietitians, medical counsellors
                    and other paramedical professionals. It is a 300-bed,
                    NABH-accredited hospital providing excellent treatment
                    facilities to cancer patients.
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
                            <div className="ml-4 text-xl">Oncologists</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Dr. A Praveen, Dr. Abhishek Budharapu, Dr. Aditya
                            Narayan, Dr. Adwaita A Gore
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
                            <div className="ml-4 text-xl">Services </div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Stem Cell or Bone Marrow Transplants, Paediatric
                            Bone Marrow Transplant, Robotic Cancer Surgery,
                            Fluorescence-Guided Surgery, Molecular Profiling,
                            Genetic Profiling
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
                            <div className="ml-4 text-xl">Trivia</div>
                          </div>
                          <p className="leading-loose text-gray-500">
                            Apollo Hospitals is the first hospital in South Asia
                            to have a Cyberknife Robotic Radio Surgery system
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
                            No 64, Vanagaram to Ambattur Main Road, Vanagaram,
                            Chennai (Near Srivaru Kalyana Mandapam)
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

export default Article2;
