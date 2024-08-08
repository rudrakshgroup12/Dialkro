import { useSearch } from "../ProAuth/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`/api/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      role="search"
      onSubmit={handlesubmit}
      className="flex  border-1 p-2 rounded-3"
    >
      <input
        className=" outline-none "
        type="text"
        placeholder="Search Your Business"
        value={values.keyword}
        onChange={(e) => setValues({ ...values, keyword: e.target.value })}
      />
      <div className="bg-red-600 py-3 px-4 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default SearchInput;
