import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "../Layout/Layout";

function paymentsuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const searchQuery = useSearchParams()[0];
  const referenceNum = searchQuery.get("reference");
  return (
    <Layout>
      <div>
        <h1>Order Successfull</h1>
        <p>Reference No. {referenceNum}</p>
      </div>
    </Layout>
  );
}

export default paymentsuccess;
