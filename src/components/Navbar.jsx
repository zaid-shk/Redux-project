import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-3 px-10 bg-(--c1) border-b">
        <h2 className="font-light text-xl ">Search Resources</h2>
        <div className="flex gap-5 items-center">
          <Link
            to={"/"}
            className="text-lg font-mono  bg-(--c2) text-(--c4) rounded-lg px-3 py-1"
          >
            Search
          </Link>
          <Link
            to={"/collection"}
            className="text-lg font-mono  bg-(--c2) text-(--c4) rounded-lg px-3 py-1"
          >
            Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
