import React from "react";
import { useAuth } from "../../ProAuth/AuthPro.jsx";
import { Link } from "react-router-dom";

function BusinessCategory() {
  const {
    businessesCategory,
    selectBusinessCategory,
    selectBusinessCategoryHandleInputChange,
    fetchBusinessByCategory,
    error,
  } = useAuth();
  return (
    <>
      {error && (
        <h1 className="text-rose-800 mb-8 text-4xl font-bold">{error}</h1>
      )}
      <div className="flex row-auto p-12 bg-slate-400 gap-2">
        <select
          className="rounded-lg p-2"
          // defaultValue={selectBusinessCategory}
          // onChange={selectBusinessCategoryHandleInputChange}
        >
          <option value="">Select A Category</option>
          {businessesCategory.map((business, index) => (
            <option key={index} className="text-black">{business}</option>
          ))}
        </select>
        {/* <Link
          className="p-2  border-rose-600 border-solid border-2 bg-rose-700 rounded-lg text-white"
          onClick={fetchBusinessByCategory}
          to="/category"
        >
          View
        </Link> */}
      </div>
    </>
  );
}

export default BusinessCategory;

// {islogin ? (
//   <p>
//     This is a protected component. Only visible to logged-in users.
//     profile you are alresdy Login{" "}
//     <Link to="/profile">
//       <button className="text-rose-800">Profile</button>
//     </Link>{" "}
//   </p>
// ) : (
//   <h1>Please login</h1>
// )}
