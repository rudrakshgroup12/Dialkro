import React, { useEffect } from 'react'
import gallery15 from "../assets/gallery15.png";
import gallery14 from "../assets/gallery14.png";
import gallery16 from "../assets/gallery16.png";
function Featuredads2() {
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
          <a className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">House Cleaning Products</a>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <p className="text-sm font-medium inline">Owner:</p>
            <a className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">Ms. SADHANA MAURYA</a>
      
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="block">
          <img
              src={gallery15} className="object-cover rounded-lg max-h-64 sm:max-h-96 btn- w-full h-full"/>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src={gallery14} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
        <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">Rg-shine</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">
        Glass cleaner</a>
        <p className="text-sm text-black">Contact 24 hours hospital near me ready for Stroke, Coronary stent & other emergency room services with icu equipments, Cath lab, ICU & critical care unit.</p>
      
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src={gallery16} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
     <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">Rg-shine</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">
        Hand Wash</a>
        <p className="text-sm text-black">An emergency department is a specific area in a hospital that is organized to provide a high standard or quality of emergency care to people.</p>
     
      </div>
      <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
        <img
            src={gallery15} className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56 btn-"/>
          <p className="bg-red-600 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
            rounded-full uppercase inline-block">Rg-shine</p>
        <a className="text-lg font-bold sm:text-xl md:text-2xl">Advanced Ventilators & ICU</a>
        <p className="text-sm text-black">ASV combines passive ventilation with pressure-controlled ventilation with adaptive pressure support if the patient's respiratory effort is present.</p>
       
      </div>
    </div>
  </div>
</div>



<div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src={gallery14} alt="image" loading="lazy" width="400" height="500"/>
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">About Us </h2>
          <p className="mt-6 text-gray-600">Welcome to RG Shine your ultimate destination for premium home cleaning solutions. At RG Shine we believe that a clean home is the foundation of a healthy and happy life. That’s why we’ve curated a comprehensive collection of top-quality cleaning products to help you maintain a sparkling clean environment effortlessly.</p>
          <p className="mt-4 text-gray-600"> Our mission is simple: to provide you with the finest selection of home cleaner products that deliver exceptional results while minimizing environmental impact. We carefully source our products from trusted brands known for their effectiveness, safety, and commitment to sustainability.</p>
        </div>
      </div>
  </div>
</div>

<section className="bg-white">
	<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={gallery14}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
				
				</a>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src={gallery15}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					
				</a>
				<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={gallery16}  alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					
					</a>
					<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src={gallery14} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						
					</a>
				</div>
			</div>
			<div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src={gallery15} alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
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
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27440.909553821424!2d76.823025!3d30.715204000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f932af5e538a3%3A0x799d6631af732499!2sChandigarh%2C%20160101%2C%20India!5e0!3m2!1sen!2sus!4v1719232104219!5m2!1sen!2sus"
                        width="100%" height="480" allowfullscreen="" loading="lazy" className='border: "0"'></iframe>
                  
                </div>
                <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p className="mt-1 text-gray-600"> Manimajra 160101</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Open Hours</h3>
                            <p className="mt-1 text-gray-600">Monday-Sunday 24Hrs</p>
                         
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                           
                        
                            <p className ="mt-1 text-gray-600">Phone: 9780-831257</p>
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

export default Featuredads2;
