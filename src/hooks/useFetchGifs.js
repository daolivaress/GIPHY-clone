import { useState, useEffect } from "react";
import { getTrendingGifs } from "../helpers/getTrendindGifs";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category === "") {
      getTrendingGifs().then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    } else {
      getGifs(category).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
      });
    }
  }, [category]);

  return { gifs, loading };
};
