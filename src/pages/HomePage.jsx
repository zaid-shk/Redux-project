import React from "react";

import SearchBar from "../components/SearchBar";
import { fetchGIF, fetchPhotos, fetchVideos } from "../api/mediaApi";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <SearchBar />

      {query != "" ? (
        <div className="">
          <Tabs />
          <ResultGrid />
          <Pagination/>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default HomePage;
