import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY;
// console.log("Key:", import.meta.env.VITE_TENOR_KEY);

export async function fetchPhotos(query, page , per_page = 20) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  // console.log(res.data.total_pages);
  
  return res.data;
}

export async function fetchVideos(query, page , per_page = 15) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  console.log(res);
  return res.data;
}
export async function fetchGIF(query, limit = 20) {
  const res = await axios.get("https://tenor.googleapis.com/v2/search", {
    params: { q: query, key: TENOR_KEY, limit },
  });
  console.log(res);
  return res;
}
