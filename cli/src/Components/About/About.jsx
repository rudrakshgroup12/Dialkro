import React from "react";
import { FaCheck } from "react-icons/fa";
import { useAuth } from "../ProAuth/AuthPro.jsx";

function About() {
  const{isDarkMode}=useAuth()
  return (
    < div className={isDarkMode?"dark":""}>
      <div className="relative overflow-hidden bg-white dark:bg-neutral-800 dark:text-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                Grow With Us And Build Your Business.
              </h1>
              <p className="mt-4 text-xl text-gray-500 ">
                Dialkro Ads Help You Achieve Your Goals elements of a world that
                doesn't care if you develop or die.
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 dark:bg-transparent sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://hbr.org/resources/images/article_assets/2022/08/Hero-Image.png"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.staticmb.com/mbbuyerutilitystatic/images//area-calc/prop-type-img/Shops.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://www.aurusjewels.com/cdn/shop/articles/indian_wedding_planning_guide_ultimate.jpg?v=1679913681"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://emeritus.org/wp-content/uploads/sites/3/2023/04/what-does-a-business-analyst-do.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/5/Desk/2021_5$largeimg_1561286434.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPp73im34ZqOjOnX1hxN_dyOmYRd90VgAII2rcs8e6MBBiB-7fxXRYFjIm9eXYIVgxTjE&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/07/bb/b8/luxurious-inside.jpg?w=500&h=400&s=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-red-600 py-3 px-8 text-center font-medium text-white hover:bg-red-800"
                >
                  Check Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {/ {/ about us card b/anne r /} /} */}
      <section clasNames="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
    <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Dialkro help you to Achieve </span><br />
            <span className="block text-red-600 xl:inline">your Goals</span>
        </h1>
        <p
            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
           Welcome to Dialkro, the ultimate destination for discovering and connecting with businesses near you. Whether you're in search of a cozy café, a reliable plumber, or the perfect yoga studio, Dialkro simplifies your search by providing a comprehensive directory of local businesses right at your fingertips.
        </p>
        {/* {/ {/ <!-- Button Section --> /} /} */}
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
                <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                    Get started
                </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                    Live demo
                </a>
            </div>
        </div>
        {/* {/ {/ <!-- End of Button Section --> /} /} */}
    </div>

    {/* {/ {/ <!--   Image Section     --> /} /} */}
    <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt=""/>
    </div>
    {/* {/ {/ <!--   End of Image Section     --> /} /} */}
</div>

      </section>




  {/* {/ {/ Other Business  /} /} */}
  <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-red-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why should you choose Dialkro?</p>
          <p className="mt-6 text-base leading-7 text-gray-600">At Dialkro, we believe in empowering communities by fostering connections between consumers and businesses. Our platform not only helps users discover new and exciting local spots but also assists businesses in reaching their target audience, promoting growth and sustainability within the community.</p>
        </div>
        <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Invite team members
              </dt>
              <dd className="mt-2">Extensive Directory: Access a vast array of businesses spanning multiple categories, ensuring you find exactly what you're searching for.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                List view
              </dt>
              <dd className="mt-2">User-Friendly Interface: Our website is designed for ease of use, making your browsing experience seamless and enjoyable.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Keyboard shortcuts
              </dt>
              <dd className="mt-2">Verified Listings: Rest assured that the businesses listed on Dialkro are genuine and trustworthy, providing you with peace of mind.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Calendars
              </dt>
              <dd className="mt-2">Community Engagement: We are committed to building strong local communities by connecting users with businesses that enhance their lives.
</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Notifications
              </dt>
              <dd className="mt-2">Whether you're a business owner looking to increase your visibility or a customer seeking quality services, Dialkro is your go-to platform.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Boards
              </dt>
              <dd className="mt-2">Join us in building stronger, more connected communities. Explore, discover, and connect with Dialkro today.</dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center" >
              <FaCheck className="text-red-600"/>
                Reporting
              </dt>
              <dd className="mt-2">Find exactly what you need, precisely when you need it, with our user-friendly platform designed to cater to your specific requirements. Explore a diverse range of businesses across various categories, all conveniently organized for easy access. </dd>
            </div>
          
            <div className="relative pl-9">
              <dt className="font-semibold text-gray-900 flex items-center">
              <FaCheck className="text-red-600"/>
                Mobile app
              </dt>
              <dd className="mt-2">Our intuitive search function ensures that you can locate the services or products you're looking for with just a few clicks.</dd>
            </div>
          
        </dl>
      </div>
    </div>
  </div>
    </div>
  );
}

export default About;
