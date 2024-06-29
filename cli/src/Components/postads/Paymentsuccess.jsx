import React from "react";
import { useSearchParams } from "react-router-dom";

function paymentsuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <div>
      <h1>Order Successfull</h1>
      <p>Reference No. {referenceNum}</p>
    </div>
  );
}

export default paymentsuccess;