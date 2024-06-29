import React from "react";

function paymentbutton({ checkoutHandler, amount }) {
  return (
    <div>
      {/* <a
        onClick={() => checkoutHandler(amount)}
        className="cursor-pointer bg-gray-900 w-full rounded-md  p-3 text-center text-sm font-semibold text-white shadow-sm  hover:-translate-y-1"
      >Get Started</a>
     */} <button
        onClick={() => checkoutHandler(amount)}
        className="cursor-pointer bg-blue-600 text-white py-3 px-10 rounded hover:bg-blue-700"
      >
        Submit Secure Payment
      </button>
    </div>
  );
}

export default paymentbutton;