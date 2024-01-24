import React from 'react'

function New() {
  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100  to-transparent via-transparent">
      <div className="max-w-md w-full bg-white p-8 rounded-md shadow-md space-y-4 bg-transparent">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
            Add Your Business
          </h2>
        </div>
        <form className="mt-4 space-y-6" >
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Business Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                required
                className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
                placeholder="Business Name"
            
              />
            </div>
            <div>
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <input
                id="category"
                name="category"
                type="text"
                autoComplete="off"
                required
                className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
                placeholder="Category"
            
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="off"
                required
                className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
                placeholder="Location"
           
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows="3"
                autoComplete="off"
                required
                className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
                placeholder="Business Description"
              
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-green-600 to-blue-600 hover:bg-gradient-to-r hover:from-green-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
            >
              Add Business
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default New