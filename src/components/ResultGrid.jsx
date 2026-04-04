import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
  setTotalPages,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error, page } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query, page);
            dispatch(setTotalPages(response.total_pages));
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              url: item.links.html,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query, page);
            dispatch(setTotalPages(Math.ceil(response.total_results / 15)));
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(query);
            dispatch(setTotalPages(1));
            data = response.data.results.map((item) => ({
              id: item.id,
              title: item.title || "GIF",
              type: "gif",
              thumbnail: item.media_formats.tinygif.url,
              src: item.media_formats.gif.url,
              url: item.url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, page, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-6xl font-mono transition-all ease-in-out duration-100 opacity-0">Loading. . .</h1>
      </div>
    );
  }

  return (
    <div className="flex justify-between w-full  flex-wrap gap-5 overflow-auto px-5 py-6">
      {results.map((item, idx) => {
        return (
          <div className="" key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
