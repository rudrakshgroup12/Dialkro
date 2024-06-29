import React ,{  useEffect}from 'react'

import rgshineport from "../assets/rgshineport.png";
import dial24port from "../assets/dial24port.png";
import fabieport from "../assets/fabieport.png";
import skylineport from "../assets/skylineport.png";
import amantraport from "../assets/amantraport.png";
import claport from "../assets/claport.png"
import spacport from "../assets/spacport.png";
import portfoliomock from "../assets/portfoliomock.jpeg";
import portfoliomock1 from "../assets/portfoliomock1.jpeg";
import portfoliomock2 from "../assets/portfoliomock2.jpeg";
import portfoliomock3 from "../assets/portfoliomock3.jpeg";
const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="text-center p-8">
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
       Portfolio
    </h2>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={portfoliomock} alt="gem" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                Simple frontend Development
            </h3>
            <p className="sm:text-lg mt-6">
           Frontend development involves creating the user interface using HTML, CSS for styling, and JavaScript for interactivity. Frameworks like React or Angular streamline development. Responsive design ensures compatibility across devices. Design principles, performance optimization, and accessibility are key. Version control and testing ensure quality and collaboration.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={portfoliomock1} alt="project members" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
           Responsive Website
            </h3>
            <p className="sm:text-lg mt-6">
               
A responsive website adapts its layout to fit different screen sizes, ensuring a consistent user experience across devices. This is achieved through fluid grids, flexible images, and media queries in CSS. Responsive design improves usability and accessibility, catering to the increasing use of mobile devices for web browsing.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left  text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={portfoliomock2} alt="editor" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
            Wordpress Website
            </h3>
            <p className="sm:text-lg mt-6">
            WordPress website development involves creating websites using the WordPress platform. It includes installing WordPress, selecting a theme, customizing the design with CSS and HTML, and adding functionality through plugins. WordPress is known for its user-friendly interface and vast ecosystem, making it a popular choice for websites of all kinds.
            </p>
        </div>
    </div>

    <div className="flex flex-wrap items-center mt-20 text-left text-center">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img src={portfoliomock3} alt="bulk editing" className="inline-block rounded shadow-lg border border-merino-400"/>
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
             Social media marketing
            </h3>
            <p className="sm:text-lg mt-6">
            Social media marketing is the use of social media platforms to promote products, services, or content. It involves creating and sharing posts, images, videos, and other content to engage with the audience. Key platforms include Facebook, Instagram, Twitter, LinkedIn, and TikTok. Strategies include content planning, audience targeting, and analytics to measure success.
            </p>
        </div>
    </div>

</div>



<div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={dial24port}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-50 max-w-full rounded-lg"
              src={skylineport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={rgshineport}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={fabieport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={amantraport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={claport}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={spacport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={claport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={spacport}
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={fabieport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={amantraport}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={dial24port}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Portfolio;