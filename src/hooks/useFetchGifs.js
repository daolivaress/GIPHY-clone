import { useState, useEffect } from "react";
import { getTrendingGifs } from "../helpers/getTrendindGifs";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  
  useEffect(() => {
    if (category === "") {
      getTrendingGifs().then((gifs) => {
        setGifs(gifs);
      });
    } else {
      getGifs(category).then((gifs) => {
        setGifs(gifs);
      });
    }
  }, [category]);

  return gifs;
};
