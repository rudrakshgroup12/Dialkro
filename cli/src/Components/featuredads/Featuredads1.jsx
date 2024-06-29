import React, { useEffect } from 'react'
import featureimg1 from "../assets/featureimg1.jpg";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.png";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.png";
import gallery9 from "../assets/gallery9.png";
import gallery10 from "../assets/gallery10.png";

import gallery12 from "../assets/gallery12.png";
import gallery13 from "../assets/gallery13.jpg";
function Featuredads1() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>    
        <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
    <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16
        max-w-7xl">
      <div className="flex flex-col items-center sm:px-5 md:flex-row">
        <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
          <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16
              md:space-y-5">
            <div className="bg-red-600 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2
                uppercase inline-block">
              <p className="inline">
                <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                    00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755
                    1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1
                    0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              </p>
              <p className="inline text-xs font-medium">New</p>
            </div>
            <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">In Rudraksh Group We Provide Facility Management Services</a>
            <div className="pt-2 pr-0 pb-0 pl-0">
              <p className="text-sm font-medium inline">Owner:</p>
              <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Mr.Prem Maurya </a>
          
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="block">
            <img
                src={gallery6} className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <img
              src={gallery9} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
          <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">Facility provider</p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">Housekeeping Services</a>
          <p className="text-sm text-black">We offer top-quality housekeeping services to our clients. Our team comprises highly trained professionals who.</p>
        
        </div>
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <img
              src={gallery12} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
       <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">Facility provider</p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">Plumber</a>
          <p className="text-sm text-black">Plumber  Services is responsible for ensuring that your residential or commercial property has efficient wastewater disposal.</p>
       
        </div>
        <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
          <img
              src={gallery8} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
            <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
              rounded-full uppercase inline-block">Facility provider</p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">Electricians</a>
          <p className="text-sm text-black">Electricians are experts in handling electrical systems, be it in homes, businesses, or industrial environments.</p>
         
        </div>
      </div>
    </div>
  </div>
  
  
  
  <div className="py-16 bg-white">  
    <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={gallery7} alt="image" loading="lazy" width="400" height="500"/>
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Us </h2>
            <p className="mt-6 text-gray-600">We dedicate ourselves to delivering premium cleaning services tailored to your home or office. Our team of housekeepers is devoted to surpassing expectations with pride. Offering cost-effective rates,</p>
            <p className="mt-4 text-gray-600"> We started by offering specialized services and evolved to provide complete Integrated Facilities Services.</p>
          </div>
        </div>
    </div>
  </div>
  <section className="bg-white">
      <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                      <img src={gallery8}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  
                  </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                      <img src={gallery9}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      
                  </a>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                      <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                          <img src={gallery10}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      
                      </a>
                      <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                          <img src={gallery12} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                          
                      </a>
                  </div>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                  <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                      <img src={gallery13} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      
                  </a>
              </div>
          </div>
      </div>
  </section>
  
  <section className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p className="mt-4 text-lg text-gray-500">Please come faster to working With us.</p>
        </div>
        <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13719.127128650978!2d76.66352028804445!3d30.7245345392841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefbbcda14f81%3A0x46d13cc4d825bf2a!2sSector%20117%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1719228122997!5m2!1sen!2sin"
                        width="100%" height="480" allowfullscreen="" loading="lazy" className='border: "0"'></iframe>
              
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p className="mt-1 text-gray-600"> Sector 117, Kharar, Sahibzada Ajit Singh Nagar, Punjab 140301</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Open Hours</h3>
                            <p className="mt-1 text-gray-600">Monday-Sunday </p>
                         
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                           
                        
                            <p className ="mt-1 text-gray-600">Phone: 08699999066</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  </div>
  )
}

export default Featuredads1