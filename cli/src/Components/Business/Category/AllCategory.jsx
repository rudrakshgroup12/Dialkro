import { useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../../Hooks/useCategory.jsx";

function BusinessCategory() {
  const categories = useCategory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="p-5 bg-white gap-6 max-w-sm mx-auto">
        <div className="relative nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            to="/categories"
            data-bs-toggle="dropdown"
          >
            CATEGORIES
          </Link>
          <ul className="dropdown-menu absolute hidden bg-white shadow-lg mt-2 py-2 z-50 w-[500px] -left-[130px]">
            <li className="px-4 py-2 hover:bg-gray-300">
              <Link className="dropdown_c" to="/categories">
                All Categories
              </Link>
            </li>
            {categories?.map((c) => (
              <li key={c.slug} className="px-4 py-2 hover:bg-gray-300">
                <Link className="dropdown_c" to={`/category/${c.slug}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default BusinessCategory;
