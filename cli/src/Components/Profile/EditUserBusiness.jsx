import React, { useState, useEffect } from "react";

function EditUserBusiness({ selectedBusiness }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [changesSaved, setChangesSaved] = useState(false);
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (selectedBusiness) {
      setName(selectedBusiness.name);
      setLocation(selectedBusiness.location);
      setDescription(selectedBusiness.description);
      setImages(selectedBusiness.images || []);
    }
  }, [selectedBusiness]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can handle form submission (e.g., send data to backend)
    console.log("Form submitted:", { name, location, description });
    setName("");
    setLocation("");
    setDescription("");
    setChangesSaved(true);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div class="max-w-screen-lg mx-auto p-5">
    <div class="grid grid-cols-1 md:grid-cols-12 border">
        <div class="bg-gray-900 md:col-span-4 p-10 text-white">
            <p class="mt-4 text-sm leading-7 font-regular uppercase">
                Contact
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span class="text-red-600">Business</span>
            </h3>
            <p class="mt-4 leading-7 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
            </p>

            <div class="flex items-center mt-5">
                
                    
                       
                   <p>Business Name</p>     
                <span class="text-sm">{name}</span>
            </div>
            <div class="flex items-center mt-5">
  <p>Location</p>
                <span class="text-sm">{location}</span>
            </div>
            <div class="flex items-center mt-5">
<p>Description</p>
                <span class="text-sm">{description}</span>
            </div>

        </div>
        <form onSubmit={handleSubmit} class="md:col-span-8 p-10">
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane"  name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setChangesSaved(false);
              }}/>
                    {/* {/ <p class="text-red-500 text-xs italic">Please fill out this field.</p> /} */}
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                      Location
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**"  name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setChangesSaved(false);
              }}  required/>
                </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Description
                    </label>
                    <textarea rows="10"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"    name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setChangesSaved(false);
              }}></textarea>
                </div>
                <div class="flex justify-between w-full px-3">
                    <div class="md:flex md:items-center">
                        <label class="block text-gray-500 font-bold">
                            <input class="mr-2 leading-tight" type="checkbox"/>
                            <span class="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                        class="shadow bg-red-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                     Edited Business
                    </button>
                </div>

            </div>
            {changesSaved && (
            <p className="mt-4 text-center text-sm text-gray-500">Changes saved successfully!</p>
          )}
        </form>

    </div>
</div>
    </>
  );
}


export default EditUserBusiness;