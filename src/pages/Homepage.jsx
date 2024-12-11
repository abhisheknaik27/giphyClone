import React, { useEffect } from "react";
import { GifState } from "../context/GifContext";
import Gif from "../components/Gif";
import FilterGif from "../components/FilterGif";

const Homepage = () => {
  const { gif, gifs, setGifs, filter } = GifState();
  const fetchTrendingGifs = async () => {
    const { data } = await gif.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
    console.log(gifs);
  };
  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);
  return (
    <div>
      <img src="/banner.gif" alt="banner" className="mt-4 rounded w-full" />
      <FilterGif />

      <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2">
        {/* {gifs.map((gif) => {
          return <Gif gif={gif} key={gif.title} />;
        })} */}
      </div>
    </div>
  );
};

export default Homepage;
