import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../redux/features/searchSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { page, totalPages } = useSelector((store) => store.search);

  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center gap-6 py-10">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={`px-6 py-2 rounded-full border-2 transition-all ${
          page === 1
            ? "border-gray-300 text-gray-300 cursor-not-allowed"
            : "border-black hover:bg-black hover:text-white cursor-pointer active:scale-95"
        }`}
      >
        Previous
      </button>

      <span className="text-xl font-medium">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={`px-6 py-2 rounded-full border-2 transition-all ${
          page === totalPages
            ? "border-gray-300 text-gray-300 cursor-not-allowed"
            : "border-black hover:bg-black hover:text-white cursor-pointer active:scale-95"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;