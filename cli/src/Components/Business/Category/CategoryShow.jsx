import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory";
import Layout from "../../Layout/Layout";

function CategoryBuisness() {
  const categories = useCategory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title={"All - Category"}>
      <div className="container mx-auto mt-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <div
              key={c._id}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <Link to={`/category/${c.slug}`} className="block">
                <div className="bg-gradient-to-r from-red-300 to-red-500 p-6">
                  <h2 className="text-lg font-semibold text-white text-center">
                    {c.name}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default CategoryBuisness;
