import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function Pagenotfound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-red-500">404</h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-gray-800">
            Sorry, the page you are looking for cannot be found.
          </p>
          <Link
            to="/"
            className="px-4 py-2 text-lg font-semibold text-white bg-red-500 rounded hover:bg-red-600 transition duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Pagenotfound;
