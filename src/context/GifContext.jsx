import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favorites, setFavorites] = useState([]);
  const addToFavorites = (id) => {
    if (favorites.includes(id)) {
      const updatedFav = favorites.filter((itemId) => itemId !== id);
      localStorage.setItem("favGIFs", JSON.stringify(updatedFav));
      setFavorites(updatedFav);
    } else {
      const updatedFav = [...favorites];
      updatedFav.push(id);
      localStorage.setItem("favGIFs", JSON.stringify(updatedFav));
      setFavorites(updatedFav);
    }
  };

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favGIFs")) || [];
    setFavorites(fav);
  }, []);
  const gif = new GiphyFetch(import.meta.env.VITE_GIPHY_API);
  return (
    <GifContext.Provider
      value={{
        gif,
        gifs,
        setGifs,
        filter,
        setFilter,
        favorites,
        addToFavorites,
      }}
    >
      {children}
    </GifContext.Provider>
  );
};

export const GifState = () => {
  return useContext(GifContext);
};
export default GifProvider;
