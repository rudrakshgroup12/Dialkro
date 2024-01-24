import React, { useEffect } from "react";
import axios from "axios";

function Cont() {
  useEffect(() => {
    try {
      (async () => {
        const URL = "/api/users";
        await axios
          .get(URL)
          .then((response) => {
             
            if (!response.data.length) {
              console.log("No users found");
            }
            console.log(response.data);
            
          })
          .catch((err) => {
            console.log(`error is XXXXXXXXXXX>: ${err}`);
          });
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div className="bg-gradient-to-r from-amber-200-100 to-pink-400-100 rounded-lg shadow-md p-4 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-2xl font-bold  text-neutral-900 mb-4">Business</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro
        labore libero voluptate laboriosam rerum voluptatem architecto
        blanditiis aspernatur, neque quia officia iure quas aliquid. Distinctio
        magnam earum repudiandae? Adipisci?
      </p>
    </div>
  );
}

export default Cont;

// <div className="container mx-auto p-4">
// <h1 className="text-4xl font-bold mb-4">Business</h1>
// <p className="text-gray-700">
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro
//   labore libero voluptate laboriosam rerum voluptatem architecto
//   blanditiis aspernatur, neque quia officia iure quas aliquid. Distinctio
//   magnam earum repudiandae? Adipisci?
// </p>
// </div>

{
  /* <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 bg-transparent md:p-8 lg:p-10 text-neutral-800 rounded-lg shadow-lg max-w-md mx-auto">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
  Welcome to Our Business
</h1>
<p className="text-neutral-700 md:text-lg lg:text-xl leading-relaxed">
  Discover the extraordinary world of opportunities. Lorem ipsum dolor sit
  amet consectetur adipisicing elit. Aliquam porro labore libero voluptate
  laboriosam rerum voluptatem architecto blanditiis aspernatur, neque quia
  officia iure quas aliquid.
</p>
</div> */
}

// <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 md:p-6 lg:p-8 text-neutral-800 rounded-lg shadow-md max-w-sm mx-auto">
// <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4">
//   Welcome to Our Business
// </h1>
// <p className="text-neutral-700 text-sm md:text-base lg:text-lg leading-relaxed">
//   Discover the extraordinary world of opportunities. Lorem ipsum dolor sit
//   amet consectetur adipisicing elit. Aliquam porro labore libero voluptate
//   laboriosam rerum voluptatem architecto blanditiis aspernatur, neque quia
//   officia iure quas aliquid.
// </p>
// </div>
