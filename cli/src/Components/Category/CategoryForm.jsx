import React from "react";

function CategoryForm({ handleSubmit, value, setValue }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        {/* <button type="submit" className="btn btn-danger">
          Submit
        </button> */}

        <button
          type="submit"
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Create Category
        </button>
      </form>
    </>
  );
}

export default CategoryForm;